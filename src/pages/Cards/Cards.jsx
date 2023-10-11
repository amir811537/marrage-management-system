import { useEffect, useState } from "react";
import Singlecards from "./Singlecards";


const Cards = () => {
const [service,setServices]=useState([]);


useEffect(()=>{
    fetch('carddata.json')
    .then(res=>res.json())
    .then(data =>setServices(data))
    
},[])



    return (
        <div className="text-center mt-20 py-9">
            <h2 className="text-xl md:text-3xl lg:text-5xl" > Our Services : {service.length}</h2>
            <div className="grid mx-6 gap-5 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

{
    service.map(singleService =><Singlecards key={singleService.ID} singleService={singleService}></Singlecards>)
}


            </div>
        </div>
    );
};

export default Cards;