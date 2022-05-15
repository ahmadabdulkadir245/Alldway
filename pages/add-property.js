import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPropertyToDb } from "../slices/productSlice";

function AddProperty() {
  const [inputValues, setInputValues] = useState({
    localGov: "",
    address: "",
    type: "",
    bedrooms: "",
    bathrooms: "",
    kitchens: "",
    plot: "",
    img: "",
    description: "",
  });
  const [addProperty, setAddProperty] = useState([]);
  const [localGov, setLocalGov] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [kitchens, setKitchens] = useState("");
  const [plot, setPlot] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");

  // const localGovhandler = (e) => {
  //   e.preventDefault();
  //   setAddProperty(e.target.value);
  // };
  // const addressHandler = (e) => {
  //   e.preventDefault();
  //   setAddress(e.target.value);
  // };

  const newInputHandler = (e) => {
    e.preventDefault();
    setAddProperty((currentInputValues) => [
      {
        id: (Date.now() * Math.random() * 12).toString(),
        localGov: localGov,
        address: address,
      },
      ...currentInputValues,
    ]);
  };

  const inputChangeHandler = (inputIdentifier, e) => {
    e.preventDefault();
    setInputValues((currentInputValues) => {
      return {
        ...currentInputValues,
        [inputIdentifier]: e.target.value,
      };
    });
  };

  const dispatch = useDispatch();
  const addNewPropertyToBasket = () => {
    const property = {
      id: (Date.now() * Math.random() * 12).toString(),
      localGov,
      address,
      type,
      bedrooms,
      bathrooms,
      kitchens,
      plot,
      img,
      price,
      description,
    };
    dispatch(addPropertyToDb(property));
    alert(`Property added successfully`);
    console.log(property);
  };

  return (
    <div className='m-auto mt-24 max-w-3xl 2xl:max-w-4xl iceland'>
      <h1 className='text-center text-4xl text-[#093158]'>
        ADD <span className='text-[#ffcb05]'>PROPERTY</span>
        <div className='h-[2px] w-[200px] bg-[#ffcb05]  m-auto mb-6'></div>
      </h1>
      <form onSubmit={newInputHandler}>
        <div className='grid grid-cols-4 gap-6 md:gap-8 px-4 lg:px-0'>
          <div className='col-span-4 md:col-span-4 lg:col-span-4 text-[#093158]'>
            <input
              type='text'
              placeholder='Local Government'
              className='w-full border-[2px] border-[#093158] p-2 rounded-md outline-none'
              onChange={(e) => setLocalGov(e.target.value)}
            />
          </div>
          <div className='col-span-4 md:col-span-4 lg:col-span-4'>
            <input
              type='text'
              placeholder='Address'
              className='w-full border-[2px] border-[#093158] p-2 rounded-md outline-none'
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className='col-span-4 md:col-span-4 lg:col-span-4'>
            <select
              className='w-full border-[2px] border-[#093158] py-3 px-2  rounded-md outline-none text-[#093158]'
              onChange={(e) => setType(e.target.value)}
            >
              <option className=''>Apartment</option>
              <option className='text-[#093158]'>House</option>
            </select>
          </div>
          <div className='col-span-2 md:col-span-2 lg:col-span-1'>
            <input
              type='number'
              placeholder='Bedrooms'
              className='w-full border-[2px] border-[#093158] p-2 rounded-md outline-none'
              onChange={(e) => setBedrooms(e.target.value)}
            />
          </div>
          <div className='col-span-2 md:col-span-2 lg:col-span-1'>
            <input
              type='number'
              placeholder='Bathrooms'
              className='w-full border-[2px] border-[#093158] p-2 rounded-md outline-none'
              onChange={(e) => setBathrooms(e.target.value)}
            />
          </div>
          <div className='col-span-2 md:col-span-2 lg:col-span-1'>
            <input
              type='number'
              placeholder='Kitchen'
              className='w-full border-[2px] border-[#093158] p-2 rounded-md outline-none'
              onChange={(e) => setKitchens(e.target.value)}
            />
          </div>
          <div className='col-span-2 md:col-span-2 lg:col-span-1'>
            <input
              type='number'
              placeholder='Plot'
              className='w-full border-[2px] border-[#093158] p-2 rounded-md outline-none'
              onChange={(e) => setPlot(e.target.value)}
            />
          </div>
          <div className='col-span-2 md:col-span-2 lg:col-span-2'>
            <input
              type='number'
              placeholder='price'
              className='w-full border-[2px] border-[#093158] p-2 rounded-md outline-none'
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className='col-span-2 md:col-span-2 lg:col-span-2'>
            <input
              type='file'
              placeholder='House Image'
              className='w-full border-[2px] border-[#093158] p-2 rounded-md outline-none'
              onChange={(e) => setImg(e.target.value)}
            />
          </div>
          <div className='col-span-4 md:col-span-4 lg:col-span-4 h-[200px]'>
            <textarea
              className='w-full h-full border-[2px] border-[#093158] p-2 rounded-md outline-none'
              placeholder='Description'
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </div>
        <button
          className='flex justify-center mt-8 lg:mt-12 m-auto bg-[#ffcb05] w-[300px] rounded-md text-white  p-3 md:w-[400px] outline-none transition-all duration-300 ease-in-out hover:bg-[#093158]  mb-10'
          onClick={addNewPropertyToBasket}
        >
          SUBMIT
        </button>
      </form>
      <div>
        <Link href='/properties'>
          <a>Go to properties</a>
        </Link>{" "}
      </div>
    </div>
  );
}

export default AddProperty;
