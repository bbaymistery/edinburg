import { createWrapper } from "next-redux-wrapper";
import store from "../../store/store";

const DriverApplicationForm = () => {
    return (
        <div>DriverApplicationForm</div>
    )
}

export default DriverApplicationForm
const makestore = () => store;
const wrapper = createWrapper(makestore);

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => {



    return {
        props: {
            data: ''
        }
    }
});
