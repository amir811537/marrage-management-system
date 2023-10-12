import Banner from "../../Shared/Banner/Banner";
import Navbar from "../../Shared/Navbar/Navbar";
import Cards from "../Cards/Cards";
import Meetourteamsection from "../meetourteam/Meetourteamsection";
import Ourmission from "../meetourteam/Ourmission";
<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />



const Home = () => {
    return (
        <div>
  <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script>
    AOS.init();
  </script>            <Navbar></Navbar> 
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
