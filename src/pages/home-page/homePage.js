import AuctionsCollection from "../../components/auctions-collection/auctions-collection";
import classes from "./home-page.module.css";


const HomePage = () => {
    return (
        <div className={classes.homePage}>
            <AuctionsCollection />
        </div>
    )
}

export default HomePage;