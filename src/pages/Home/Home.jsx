import Banner from "../../Shared/Banner/Banner";
import Navbar from "../../Shared/Navbar/Navbar";
import Cards from "../Cards/Cards";
import Meetourteamsection from "../meetourteam/Meetourteamsection";
import Ourmission from "../meetourteam/Ourmission";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar> 
            <Banner></Banner> 
        
            <div>
                <Cards></Cards>
            </div>
            <div>
                <Meetourteamsection></Meetourteamsection>
            </div>
            <div>
                <Ourmission></Ourmission>
            </div>
        </div>
    );
};

export default Home;
