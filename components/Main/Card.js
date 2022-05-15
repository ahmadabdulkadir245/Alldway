import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../slices/basketSlice";

function Card({
  id,
  purchase,
  localGov,
  bedrooms,
  bathroom,
  kitchen,
  plot,
  price,
  img,
  type,
}) {
  const dispatch = useDispatch();
  const [selectedHomeButtonColor, setSelectedHomeButtonColor] = useState(false);

  const addPropertyToBasket = () => {
    const property = {
      id,
      purchase,
      localGov,
      bedrooms,
      bathroom,
      kitchen,
      plot,
      price,
      img,
    };
    dispatch(addToBasket(property));
    setSelectedHomeButtonColor(true);
  };

  return (
    <div>
      <div className='w-full  rounded-md overflow-hidden '>
        <Link href={`products/${id.toString()}`}>
          <a>
            {" "}
            <img className='w-full h-[250px]' src={img} alt='For rent image ' />
          </a>
        </Link>
        <div className=' text-[#093158] '>
          <h4 className='text-sm text-gray-400 p-1'>{purchase}</h4>
          <h2 className='text-lg text-semibold py-1  text-center'>
            {" "}
            {localGov}
          </h2>
          <div className='flex justify-between items-center px-4 py-[10px] text-sm'>
            <div>
              <p>Bed Rooms : {bedrooms}</p>
            </div>
            <div>
              <p>Bath Rooms: {bathroom}</p>
            </div>
          </div>
          <div className='flex justify-between items-center px-4  py-[10px] text-sm'>
            <div>
              <p>Kitchen: {kitchen}</p>
            </div>
            <div>
              <p>Plot: {plot}</p>
            </div>
          </div>
          <div className='flex justify-between items-center px-4  py-[10px] text-sm mb-4'>
            <div>
              <p>{type}</p>
            </div>
            <div>
              <p> N{price} / Year</p>
            </div>
          </div>
        </div>
      </div>
      <button
        className={`flex justify-center m-auto mt-5 lg:mt-10  bg-[#ffcb05]  rounded-md text-white  p-2 2xl:p-3 outline-none transition-all duration-300 ease-in-out hover:bg-yellow-500  w-full ${
          selectedHomeButtonColor && "bg-yellow-500"
        }`}
        onClick={addPropertyToBasket}
      >
        SAVE HOME
      </button>
    </div>
  );
}

export default Card;
