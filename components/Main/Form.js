import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedProperties, updateProperty } from "../../slices/productSlice";

function Form() {
  const properties = useSelector(selectedProperties);
  const router = useRouter();
  const updateId = router.query.updatePropertyId;
  const updatePropertyDetails = properties.find(
    (update) => update.id === updateId
  );

  // new use state
  const [inputs, setInputs] = useState({
    localGov: {
      value: updatePropertyDetails ? updatePropertyDetails.localGov : "",
      isValid: true,
    },
    address: {
      value: updatePropertyDetails ? updatePropertyDetails.address : "",
      isValid: true,
    },
    type: {
      value: updatePropertyDetails ? updatePropertyDetails.type : "",
      isValid: true,
    },
    bedrooms: {
      value: updatePropertyDetails ? updatePropertyDetails.bedrooms : "",
      isValid: true,
    },
    bathrooms: {
      value: updatePropertyDetails ? updatePropertyDetails.bathrooms : "",
      isValid: true,
    },
    kitchens: {
      value: updatePropertyDetails ? updatePropertyDetails.kitchens : "",
      isValid: true,
    },
    plot: {
      value: updatePropertyDetails ? updatePropertyDetails.plot : "",
      isValid: true,
    },
    price: {
      value: updatePropertyDetails ? updatePropertyDetails.price : "",
      isValid: true,
    },
    img: {
      value: updatePropertyDetails ? updatePropertyDetails.img : "",
      isValid: true,
    },
    description: {
      value: updatePropertyDetails ? updatePropertyDetails.description : "",
      isValid: true,
    },
  });
  const inputChangeHandler = (inputIdentifier, e) => {
    setInputs((currentInputs) => {
      return {
        ...currentInputs,
        [inputIdentifier]: { value: e.target.value, isValid: true },
      };
    });
  };
  const dispatch = useDispatch();
  const localGovIsValid = inputs.localGov.value.trim().length > 0;
  const addressIsValid = inputs.address.value.trim().length > 0;
  const descriptionIsValid = inputs.description.value.trim().length > 0;
  const imgIsValid = inputs.img.value.trim().length > 0;
  const bedroomsIsValid =
    !isNaN(inputs.bedrooms.value) && inputs.bedrooms.value > 0;
  const bathroomsIsValid =
    !isNaN(inputs.bathrooms.value) && inputs.bathrooms.value > 0;
  const kitchensIsValid =
    !isNaN(inputs.kitchens.value) && inputs.kitchens.value > 0;
  const plotIsValid = !isNaN(inputs.plot.value) && inputs.plot.value > 0;
  const priceIsValid = !isNaN(inputs.price.value) && inputs.price.value > 0;

  const SubmitForm = (e) => {
    e.preventDefault();
    if (
      !localGovIsValid ||
      !addressIsValid ||
      !bedroomsIsValid ||
      !bathroomsIsValid ||
      !kitchensIsValid ||
      !plotIsValid ||
      !priceIsValid ||
      !descriptionIsValid ||
      !imgIsValid
    ) {
      setInputs((currentInputs) => {
        return {
          localGov: {
            value: inputs.localGov.value,
            isValid: localGovIsValid,
          },
          address: {
            value: inputs.address.value,
            isValid: addressIsValid,
          },
          type: {
            value: inputs.type.value,
            isValid: true,
          },
          bedrooms: {
            value: inputs.bedrooms.value,
            isValid: bedroomsIsValid,
          },
          bathrooms: {
            value: inputs.bathrooms.value,
            isValid: bathroomsIsValid,
          },
          kitchens: {
            value: inputs.kitchens.value,
            isValid: kitchensIsValid,
          },
          plot: {
            value: inputs.plot.value,
            isValid: plotIsValid,
          },
          price: {
            value: inputs.price.value,
            isValid: priceIsValid,
          },
          img: {
            value: inputs.img.value,
            isValid: imgIsValid,
          },
          description: {
            value: inputs.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      const formIsValid =
        !localGovIsValid ||
        !addressIsValid ||
        !bedroomsIsValid ||
        !bathroomsIsValid ||
        !kitchensIsValid ||
        !plotIsValid ||
        !priceIsValid ||
        !descriptionIsValid ||
        !imgIsValid;
      return alert("something went wrong");
    }
    const newUpdate = {
      id: updateId,
      localGov: inputs.localGov.value,
      address: inputs.address.value,
      type: inputs.type.value,
      bedrooms: inputs.bedrooms.value,
      bathrooms: inputs.bathrooms.value,
      kitchens: inputs.kitchens.value,
      plot: inputs.plot.value,
      price: inputs.price.value,
      img: inputs.img.value,
      description: inputs.description.value,
    };

    dispatch(updateProperty({ id: updateId, updatedProperty: newUpdate }));
    alert(`Property Updated successfully`);
  };

  return (
    <div>
      {/* {formIsValid && (
        <p className='text-center text-2xl text-red-500 iceland'>
          Invalid Date was Entered
        </p>
      )} */}
      <form onSubmit={SubmitForm}>
        <div className='grid grid-cols-4 gap-6 md:gap-8 px-4 lg:px-0'>
          <div className='col-span-4 md:col-span-4 lg:col-span-4 text-[#093158]'>
            <input
              type='text'
              placeholder='Local Government'
              className='w-full border-[2px] border-[#093158] p-2 rounded-md outline-none'
              onChange={inputChangeHandler.bind(this, "localGov")}
              value={inputs.localGov.value}
            />
          </div>
          <div className='col-span-4 md:col-span-4 lg:col-span-4'>
            <input
              type='text'
              placeholder='Address'
              className='w-full border-[2px] border-[#093158] p-2 rounded-md outline-none'
              onChange={inputChangeHandler.bind(this, "address")}
              value={inputs.address.value}
            />
          </div>
          <div className='col-span-4 md:col-span-2 lg:col-span-2'>
            <select
              className='w-full border-[2px] border-[#093158] py-3 px-2  rounded-md outline-none text-[#093158]'
              onChange={inputChangeHandler.bind(this, "type")}
              value={inputs.type.value}
            >
              <option className=''>Apartment</option>
              <option className='text-[#093158]'>House</option>
            </select>
          </div>
          <div className='col-span-4 md:col-span-2 lg:col-span-2'>
            <select
              className='w-full border-[2px] border-[#093158] py-3 px-2  rounded-md outline-none text-[#093158]'
              onChange={inputChangeHandler.bind(this, "type")}
              value={inputs.type.value}
            >
              <option className=''>Rent</option>
              <option className='text-[#093158]'>Sale</option>
            </select>
          </div>
          <div className='col-span-2 md:col-span-2 lg:col-span-1'>
            <input
              type='number'
              placeholder='Bedrooms'
              className='w-full border-[2px] border-[#093158] p-2 rounded-md outline-none'
              onChange={inputChangeHandler.bind(this, "bedrooms")}
              value={inputs.bedrooms.value}
            />
          </div>
          <div className='col-span-2 md:col-span-2 lg:col-span-1'>
            <input
              type='number'
              placeholder='Bathrooms'
              className='w-full border-[2px] border-[#093158] p-2 rounded-md outline-none'
              onChange={inputChangeHandler.bind(this, "bathrooms")}
              value={inputs.bathrooms.value}
            />
          </div>
          <div className='col-span-2 md:col-span-2 lg:col-span-1'>
            <input
              type='number'
              placeholder='Kitchen'
              className='w-full border-[2px] border-[#093158] p-2 rounded-md outline-none'
              onChange={inputChangeHandler.bind(this, "kitchens")}
              value={inputs.kitchens.value}
            />
          </div>
          <div className='col-span-2 md:col-span-2 lg:col-span-1'>
            <input
              type='number'
              placeholder='Plot'
              className='w-full border-[2px] border-[#093158] p-2 rounded-md outline-none'
              onChange={inputChangeHandler.bind(this, "plot")}
              value={inputs.plot.value}
            />
          </div>
          <div className='col-span-2 md:col-span-2 lg:col-span-2'>
            <input
              type='number'
              placeholder='price'
              className='w-full border-[2px] border-[#093158] p-2 rounded-md outline-none'
              onChange={inputChangeHandler.bind(this, "price")}
              value={inputs.price.value}
            />
          </div>
          <div className='col-span-2 md:col-span-2 lg:col-span-2'>
            <input
              type='file'
              placeholder='House Image'
              className='w-full border-[2px] border-[#093158] p-2 rounded-md outline-none'
              onChange={inputChangeHandler.bind(this, "img")}
              value={inputs.img.value}
            />
          </div>
          <div className='col-span-4 md:col-span-4 lg:col-span-4 h-[200px]'>
            <textarea
              className='w-full h-full border-[2px] border-[#093158] p-2 rounded-md outline-none'
              placeholder='Description'
              onChange={inputChangeHandler.bind(this, "description")}
              value={inputs.description.value}
            ></textarea>
          </div>
        </div>
        <button
          className='flex justify-center mt-8 lg:mt-12 m-auto bg-[#ffcb05] w-[300px] rounded-md text-white  p-3 md:w-[400px] outline-none transition-all duration-300 ease-in-out hover:bg-[#093158]  mb-10'
          // onClick={updatePropertyHandler}
        >
          UPDATE
        </button>
      </form>
      <div>
        <Link href='/properties'>
          <a>Go to properties</a>
        </Link>
      </div>
    </div>
  );
}

export default Form;
