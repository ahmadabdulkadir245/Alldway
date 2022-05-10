import { HeartIcon } from "@heroicons/react/solid";
import { Link } from "heroicons-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../slices/basketSlice";

function Card({
  id,
  type,
  localGov,
  bedrooms,
  bathroom,
  kitchen,
  plot,
  price,
  img,
}) {
  const dispatch = useDispatch();
  const [heartColor, setHeartColor] = useState("#ffcb05");

  const addPropertyToBasket = () => {
    const property = {
      id,
      type,
      localGov,
      bedrooms,
      bathroom,
      kitchen,
      plot,
      price,
      img,
    };
    dispatch(addToBasket(property));
    setHeartColor("#ff0505");
  };
  return (
    <div>
      <div className='w-full  rounded-md overflow-hidden  cursor-pointer'>
        <img className='w-full h-[250px]' src={img} alt='For rent image' />
        <div className=' text-[#093158] '>
          <h4 className='text-sm text-gray-400 p-1'>{type}</h4>
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
              <p> &#8358 {price} / Year</p>
            </div>
            <div>
              <HeartIcon
                className={`h-5 text-[${heartColor}]`}
                onClick={addPropertyToBasket}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
