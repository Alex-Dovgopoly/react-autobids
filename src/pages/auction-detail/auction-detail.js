import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {useQuery, useQueryClient} from "react-query";
import {fetchAuctionById} from "../../firebase/firebase.utils";
import AuctionDetailContent from "../../components/auction-detail-content/auction-detail-content";
import Spinner from "../../components/spinner/spinner";

import classes from "./auction-detail.module.css";


const AuctionDetail = () => {
    const {auctionId} = useParams();
    const client = useQueryClient();
    const isFetchingCategories = useSelector(state => state.categories.isFetching);
    const {isLoading, isError, data, error} = useQuery(['auction', auctionId], () => fetchAuctionById(auctionId), {
        initialData: () => {
            if (client.getQueryData('auctions')) {
                return Object.values(client.getQueryData('auctions')).find(item => item.id === auctionId);
            }
        }
    })

    if (isLoading || !isFetchingCategories) return <Spinner/>;
    if (isError) return <p>{error.message}</p>

    return (
        <div className={classes.auctionDetails}>
            <AuctionDetailContent auctionData={data}/>
        </div>
    )
}

export default AuctionDetail;