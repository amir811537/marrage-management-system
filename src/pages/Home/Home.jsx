import Banner from "../../Shared/Banner/Banner";
import Navbar from "../../Shared/Navbar/Navbar";
import Cards from "../Cards/Cards";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
        
         <Banner></Banner>
        <div>
            <Cards></Cards>
        </div>
        </div>
    );
};

export default Home;