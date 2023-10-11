import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Swal from "sweetalert2";

const CardDetails = () => {
  const cards = useLoaderData();
  const { id } = useParams();
  const idint = parseInt(id);
  const card = cards.find((card) => card.id === idint);
  console.log(card);


  const handelbooking=()=>{
    Swal.fire({
      title: 'Thanks For Booking',
      text: card.Name,
     
     
      imageUrl: card.Image,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  }



  return (
    <>
      <Navbar></Navbar>
      <div className="relative flex w-full max-w-[100rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-3/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={card.Image}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center p-6">
          <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
            startups
          </h6>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {card.Name}
          </h4>
          <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            {card.Short_Description}
          </p>
          <p className="text-xl font-bold "> Price: {card.Price}</p>
          <a className="inline-block" href="#">

<br />

            <button onClick={handelbooking}
              className=" flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Booking Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default CardDetails;
