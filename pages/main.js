
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import NotificationBanner from "../components/Shared/NotificationBanner";
import useTimeout from "rooks"

const Main = ({ Component, pageProps, notification }) => {
    const getLayout = Component.getLayout || ((page) => page);

    return (

        <>
        {
                notification &&
                <NotificationBanner

                    message={notification.message}
                    status={notification.status}
                />
            }
            {getLayout(<Component {...pageProps} />)}
            

        </>
    )

}


const mapStateToPros = (state) => {
    console.log(state)
    return {
        notification: state.main?.notification,
    };
};

export default connect(mapStateToPros)(Main);
