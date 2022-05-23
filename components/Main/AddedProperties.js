import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removePropertyFromDb,
  updateProperty,
} from "../../slices/productSlice";
import { selectedProperties } from "../../slices/productSlice";

function AddedProperties({
  id,
  localGov,
  address,
  kitchens,
  bedrooms,
  bathrooms,
  plot,
  type,
  img,
  price,
  description,
}) {
  const newProperty = useSelector(selectedProperties);
  const dispatch = useDispatch();
  const removePropertyFromDatabase = () => {
    // remove the item from redux
    dispatch(removePropertyFromDb({ id }));
  };

  // const updatePropertyHandler = () => {
  //   const updatedProperty = {
  //     localGov: "Dubai",
  //     address: "million city",
  //     kitchens: 2,
  //     bedrooms: 8,
  //     bathrooms: 7,
  //     plot: 6,
  //     type: "Apartment",
  //     img: "/1.jpg",
  //     price: 15000000,
  //     description: "I am the new description",
  //   };
  //   dispatch(updateProperty({ id, updatedProperty }));
  // };

  return (
    <div className='grid grid-cols-1 md:grid-cols-5 my-6 iceland '>
      {/* <Image src={img} width={200} height={200} objectFit='contain' /> */}
      {/* <img
        src={img}
        className='w-full md:w-[200px] h-[200px] px-4 '
        alt='saved home image'
      /> */}
      <div className='col-span-3 mx-5'>
        <div className='flex justify-between items-center mt-6'>
          <div>
            <p>{localGov}</p>
          </div>
          <div>
            <p>
              N<span className='text-yellow-500'>{price}</span>
            </p>
          </div>
        </div>
        <div className='flex '>
          <p className='text-xs text-[#093158]'>
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            aliquid expedita, vitae unde tempora cum dicta pariatur sequi ex
            magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis aliquid expedita, vitae unde tempora cum dicta pariatur
            sequi ex magnam? */}
            {description}
          </p>
        </div>
        {/* <CurrencyDollar quantity={price} currency='GBP' /> */}
      </div>
      <div className='flex flex-col space-y-2 my-auto justify-center px-5 md:px-0 md:justify-self-end text-white '>
        {" "}
        <Link href={`/update-property/${id}`}>
          <button className='button mt-auto bg-[#ffcb05] hover:bg-[#ffcb05] w-full'>
            Update Property
          </button>
        </Link>
        <button
          className='button mt-auto hover:bg-[#ffcb05]'
          onClick={removePropertyFromDatabase}
        >
          Remove from Basket
        </button>
      </div>
      <Link href='/add-property'>Go to add property</Link>
    </div>
  );
}

export default AddedProperties;
