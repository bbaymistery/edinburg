import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Error404 from '../../../pages/404/index'
import QuotationResultsTaxiDeal from '../QuotationResultsTaxiDeal';
import { useState } from 'react';
import { fetchPathnamePageDatas } from '../../../helpers/fetchPathnamePageDatas';

function TestA(props) {
    const state = useSelector(state => state.pickUpDropOffActions)
    let { reservations, params: { journeyType, quotations, language: reduxLanguage, } } = state

    const dispatch = useDispatch()
    const { appData } = useSelector(state => state.initialReducer)
    const objectDetailss = appData?.pointTypeCategories.reduce((obj, item) => ({ ...obj, [item.id]: JSON.parse(item.objectDetails), }), {});
    const [fetchdatas, setFetchDatas] = useState(props.props.data ? props.props.data : null)

    let
        { data = "",
            pickUps = [], dropoffs = [], polylinePath = [], markerPoints = [], schemas = [], metaTags = [],
            keywords = [], pageTitle = "", headTitle = "", description = "", returnPathname = "",
            pageContent = "", returnHeadTitle = "", returnPageTitle = "", duration = "", distance = "", quotationOptions = [], breadcrumbs = [], linkurl = "", review = {} } = fetchdatas

    if (data === "not found") return <Error404 />

    useEffect(() => {

        //when we go to transfer details then go back in that case we need to check if we have already quotations or not
        if (!quotations[0]?.quotationOptions?.length) dispatch({ type: "GET_QUOTATION_AT_PATHNAME", data: { results: data, journeyType } })

        //if it is already selected It means when user go to quotain and go to transfer details then come back It should be selected
        if (reservations[0].selectedDropoffPoints.length > 0 && reservations[0].selectedPickupPoints.length > 0) {
            let pickupPoints = reservations[0].selectedPickupPoints
            let dropoffPoints = reservations[0].selectedDropoffPoints
            dispatch({ type: "ADD_NEW_POINT_AT_PATHNAME", data: { pickupPoints, dropoffPoints, index: 0 } })
        } else {
            //for first time
            //   point = { ...point, ...objectDetailss[point.pcatId] }   flightDetails{ flightNumber="",waitingPickupTime=0}
            let pickupPoints = pickUps.length > 0 ? [{ ...pickUps[0], ...objectDetailss[pickUps[0].pcatId] }] : []

            let dropoffPoints = dropoffs.length > 0 ? [{ ...dropoffs[0], ...objectDetailss[dropoffs[0].pcatId] }] : []
            dispatch({ type: "ADD_NEW_POINT_AT_PATHNAME", data: { pickupPoints, dropoffPoints, index: 0 } })
        }
        //`/${returnPathname.split("/")[2]}`, aplde return de var idi urls icin de burda yoxdu
        const urls = [linkurl]
        // const urlss = [returnPathname, linkurl]
        // console.log({ urlss ,fetchdatas});

        fetchPathnamePageDatas(urls);

    }, [])

    useEffect(() => {
        const cacheKey = `page-${reduxLanguage}-${linkurl}`;

        const cache = sessionStorage.getItem('pathnameLinkCache');

        const allAppDatas = JSON.parse(sessionStorage.getItem('allAppDatas'));

        if (cache && allAppDatas && JSON.parse(cache)[cacheKey]) {

            setFetchDatas(JSON.parse(cache)[cacheKey]);
        }
    }, [reduxLanguage, linkurl]);

    return <QuotationResultsTaxiDeal
        isTaxiDeal={true}
        keywords={keywords}
        pageTitle={pageTitle}
        headTitle={headTitle}
        description={description}
        returnPathname={returnPathname}
        pageContent={pageContent}
        returnHeadTitle={returnHeadTitle}
        returnPageTitle={returnPageTitle}
        distance={distance}
        duration={duration}
        quotationOptions={quotationOptions}
        breadcrumbs={breadcrumbs}
        linkurl={linkurl}
        review={review}
        env={props.props.env}
        polylinePath={polylinePath}
        markerPoints={markerPoints}
        schemas={schemas}
        metaTags={metaTags}
    />
}


export default TestA
