import { useEffect, useState } from "react";


const Cards = () => {
const [service,setServices]=useState([]);


useEffect(()=>{
    fetch('carddata.json')
    .then(res=>res.json())
    .then(data =>setServices(data))
    
},[])



    return (
        <div className="text-center">
            <h2 className="text-5xl" >Services</h2>
        </div>
    );
};

export default Cards;