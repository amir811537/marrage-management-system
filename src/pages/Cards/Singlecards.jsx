import { Link } from "react-router-dom";


const Singlecards = ({singleService}) => {
    const {id,Name,Image,Price,Button}=singleService;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
  <figure><img src={Image} /></figure>
  <div className="card-body">
    <h2 className="card-title">{Name}</h2>
    <div className="card-actions justify-end">
        <p>Price: {Price}</p>
<Link to={`/carddetails/${id}`}><button className="btn bg-pink-500 text-white">{Button}</button></Link>
    </div>
  </div>
</div>
    );
};

export default Singlecards;