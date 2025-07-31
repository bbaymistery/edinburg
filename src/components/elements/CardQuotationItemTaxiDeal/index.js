import React, { useEffect, useState } from 'react'
import styles from "./styles.module.scss"
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { postDataAPI } from '../../../helpers/fetchDatas';
import { splitAndTranslateDuration } from '../../../helpers/splitHelper';
import Breadcrumb from './BreadCrumbSection';
import QuotationHeaderSection from './QuotationHeaderSection';
import StarsSection from './StarsSection';
import CardItems from './CardItems';
const checkJourneyTypeAndAddQuotationToReducer = (params = {}) => {
    //by this index  we r gonna assure in which journey we should add quotation
    //by journey type we r gonn assure should we directly pass to next page or not
    let { journeyType, quotation, index, router, dispatch, language, isTaxiDeal, quotations } = params

    //if it is both way journey then do not push directly to other page
    if (parseInt(journeyType) === 1) {
        dispatch({ type: "SET_QUOTATION", data: { quotation, journeyType: index } })
    } else {
        dispatch({ type: "SET_QUOTATION", data: { quotation, journeyType: index } })
        //if is taxi deal tru it means we should remove selected point from redux (because someofthem can be with  --select--)
        if (isTaxiDeal) {
            if (quotations[0]?.taxiDeal?.pickupPoints.length > 1) {

                dispatch({ type: "RESELECT_POINTS_FROM_STORE", data: { type: "pickup" } })
            }
            if (quotations[0]?.taxiDeal?.dropoffPoints.length > 1) {
                dispatch({ type: "RESELECT_POINTS_FROM_STORE", data: { type: "dropoff" } })
            }
            router.push(`${language === 'en' ? "/transfer-details" : `${language}/transfer-details`}`)
        } else {
            router.push(`${language === 'en' ? "/transfer-details" : `${language}/transfer-details`}`)

        }
    }
}
function mergeDetails(points, objectDetails) {
    return points.map(point => {
        // Extract the pcatId from the point
        const { pcatId } = point;

        // Find the corresponding detail in objectDetails
        const detail = objectDetails[pcatId];

        // If detail exists, spread its properties into point
        if (detail) {
            return { ...point, ...detail };
        }

        return point;
    });
}
const CardQuotationItemTaxiDeal = (params = {}) => {

    //by this index  we r gonna assure in which journey we should add quotation
    let {
        quotationOptions: datas,
        selectedQuotation,
        index,
        duration,
        distance,
        isTaxiDeal = true,
        previousUrl,
        pageContent,
        objectDetailss,
        pageTitle,
        headTitle,
        returnPathname,
        returnHeadTitle,
        returnPageTitle,
        isVisible = false,
        review,
        env
    } = params


    const router = useRouter();
    const dispatch = useDispatch();
    const state = useSelector((state) => state.pickUpDropOffActions)
    let { params: { journeyType, direction, language, quotations,  } } = state
    const { appData } = useSelector(state => state.initialReducer)
    //cartypes object for card item as {1:{image:'sds, name:Economy}}
    const carObject = appData?.carsTypes?.reduce((obj, item) => ({ ...obj, [item.id]: item, }), {});
    const [uploadedPageContent, setUploadedPageContent] = useState('');
    // Conditionally slice the array before mapping


    const setQuotationHandleClick = async (params = {}) => {
        let { quotation } = params

        checkJourneyTypeAndAddQuotationToReducer({ journeyType, quotation, index, router, dispatch, language, isTaxiDeal, quotations, env })
        //!nneww Pathname yox idi direk yazilirdi 
        if (isTaxiDeal && previousUrl) {

            try {
                const body = { language, checkRedirect: true, taxiDealPathname: previousUrl, withoutExprectedPoints: false, "channelId": 12 }
                const url = `${env.apiDomain}/api/v1/taxi-deals/details`
                const { status, data } = await postDataAPI({ url, body })
                if (status === 200) {
                    let { taxiDeal: { pickupPoints, dropoffPoints, } } = data
                    pickupPoints = mergeDetails(pickupPoints, objectDetailss)
                    dropoffPoints = mergeDetails(dropoffPoints, objectDetailss)
                    dispatch({ type: "GET_QUOTATION_AT_PATHNAME", data: { results: data, journeyType } })
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    const handleClickForMobile = ({ e, quotation }) => {
        if (451 > document.documentElement.clientWidth) {
            checkJourneyTypeAndAddQuotationToReducer({ journeyType, quotation, index, router, dispatch, language, isTaxiDeal, quotations })
        }
    };
    // Check if distance exists, remove 'mile', and convert to km
    const distanceInMiles = distance ? parseFloat(distance?.replace(' mile', '')) : null;
    const distanceInKm = distanceInMiles ? (distanceInMiles * 1.60934).toFixed(2) : null;
    // Format the duration based on the language

    // Format the duration based on the language
    const formattedDuration = splitAndTranslateDuration(duration, language, appData);

    useEffect(() => {
        const imgTagRegex = /<img\s+[^>]*src="([^"]*)"[^>]*>/g;
        // Check if there are any <img> tags
        if (imgTagRegex.test(pageContent)) {
            //Replace function with empty string ""
            const updatedPageContent = pageContent.replace(imgTagRegex, " ");
            setUploadedPageContent(updatedPageContent);
        } else {
            setUploadedPageContent(pageContent)
        }
    }, [datas,]);


    return (
        <div className={`${styles.taxideal_result_container}`}>
            <h1 alt={pageTitle} className={`${styles.title} ${styles.title_center} ${direction}`}>{headTitle ? (headTitle) : "..."}</h1>
            <Breadcrumb pageTitle={pageTitle} language={language} />
            {returnHeadTitle ? <p className={styles.viceversa}>
                <a href={returnPathname} onClick={() => sessionStorage.removeItem('pathnameLinkCache')} title={returnPageTitle}> {returnHeadTitle ? (returnHeadTitle) : "..."} </a>
            </p> : <></>}

            <StarsSection appData={appData} review={review} direction={direction} />

            <QuotationHeaderSection
                appData={appData} distance={distance} duration={duration}
                distanceInMiles={distanceInMiles} distanceInKm={distanceInKm} formattedDuration={formattedDuration}
            />

            <CardItems
                direction={direction} datas={datas} selectedQuotation={selectedQuotation} appData={appData}
                handleClickForMobile={handleClickForMobile} carObject={carObject} setQuotationHandleClick={setQuotationHandleClick}
            />

            {isVisible && uploadedPageContent?.length > 5 ? <TaxiDealsContents pageContent={uploadedPageContent} isVisible={isVisible} /> : <></>}

        </div>
    )
}

const TaxiDealsContents = (props) => {
    const { pageContent, isVisible } = props;
    return (isVisible ? <div className={styles.description}>  <div dangerouslySetInnerHTML={{ __html: pageContent }}></div></div> : <></>);
};
export default CardQuotationItemTaxiDeal
