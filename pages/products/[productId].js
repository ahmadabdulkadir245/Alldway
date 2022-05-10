import { HeartIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { render } from "react-dom";
import Header from "../../components/Header/Index";
import { Rents } from "../../data/rent";
import { Sales } from "../../data/sale";

function SingleProduct() {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <div className='iceland'>
      <Header />
      <div className='mt-6 lg:mt-10 2xl:mt-16'>
        {Rents.map(
          ({
            id,
            type,
            purchase,
            localGov,
            bedrooms,
            bathroom,
            kitchen,
            plot,
            price,
            img,
            description,
          }) => {
            if (id === productId) {
              return (
                <div
                  key={id}
                  className='grid grid-col md:grid-cols-2  gap-8  md:gap-x-8 lg:gap-x-10 gap-y-5 m-auto px-4 lg:px-0 max-w-6xl 2xl:max-w-8xl'
                >
                  <div className='col-span-2 lg:col-span-1'>
                    <img
                      src={img}
                      className='w-full h-[380px] 2xl:h-[480px]'
                      alt='Single product img'
                    />
                  </div>
                  <div className='col-span-2 lg:col-span-1 py-2 px-4 lg:px-8 shadow-lg  bg-white'>
                    <div className='flex justify-between'>
                      <div>
                        <h4 className='text-lg text-gray-500 p-1'>
                          {purchase}
                        </h4>
                      </div>
                      <div>
                        <h4 className='text-lg text-gray-500 p-1'>{type}</h4>
                      </div>
                    </div>
                    <h1 className='text-center text-3xl text-[#093158] my-4'>
                      {localGov}
                    </h1>
                    <div className='flex justify-between my-5'>
                      <div>
                        <h4 className='text-lg text-[#093158] p-1'>
                          BEDROOMS:{" "}
                          <span className='text-yellow-500'> {bedrooms}</span>
                        </h4>
                      </div>
                      <div>
                        <h4 className='text-lg text-[#093158] p-1'>
                          BATHROOMS:{" "}
                          <span className='text-yellow-500'> {bathroom}</span>
                        </h4>
                      </div>
                    </div>
                    <div className='flex justify-between my-5'>
                      <div>
                        <h4 className='text-lg text-[#093158] p-1'>
                          KITCHEN:{" "}
                          <span className='text-yellow-500'>{kitchen} </span>
                        </h4>
                      </div>
                      <div>
                        <h4 className='text-lg text-[#093158] p-1'>
                          BATHROOMS:{" "}
                          <span className='text-yellow-500'> {bathroom} </span>
                        </h4>
                      </div>
                    </div>
                    <div className='flex justify-between my-5'>
                      <div>
                        <h4 className='text-lg text-[#093158] p-1'>
                          PLOT:{" "}
                          <span className='text-yellow-500'> {plot} </span>
                        </h4>
                      </div>
                      <div>
                        <h4 className='text-lg text-[#093158] p-1'>
                          PRICE: N
                          <span className='text-yellow-500'>{price}</span>
                        </h4>
                      </div>
                    </div>

                    <button className='flex justify-center m-auto mt-10 lg:mt-16  bg-[#ffcb05] w-56 rounded-md text-white  p-2 2xl:p-3 outline-none transition-all duration-300 ease-in-out hover:bg-yellow-500 2xl:w-[300px] mb-3'>
                      PROCEED TO BUY
                    </button>
                  </div>
                  <h1 className='col-span-2 text-4xl text-center text-[#093158] mt-6'>
                    PROPERTY <span className='text-[#ffcb05]'>DESCRIPTION</span>
                  </h1>
                  <hr className='text-gray-400 col-span-2  w-[95%] lg:w-[80%] m-auto' />
                  <p className='text-[#093158] col-span-2 w-[95%] lg:w-[80%] m-auto px-2 lg:px-5 mb-4'>
                    {description}
                  </p>
                </div>
              );
            }
          }
        )}
      </div>

      <div className='mt-6 lg:mt-10 2xl:mt-16'>
        {Sales.map(
          ({
            id,
            type,
            purchase,
            localGov,
            bedrooms,
            bathroom,
            kitchen,
            plot,
            price,
            img,
            description,
          }) => {
            if (id === productId) {
              return (
                <div
                  key={id}
                  className='grid grid-col md:grid-cols-2  gap-8  md:gap-x-8 lg:gap-x-10 gap-y-5 m-auto px-4 lg:px-0 max-w-6xl 2xl:max-w-8xl'
                >
                  <div className='col-span-2 lg:col-span-1'>
                    <img
                      src={img}
                      className='w-full h-[380px] 2xl:h-[480px]'
                      alt='Single product img'
                    />
                  </div>
                  <div className='col-span-2 lg:col-span-1 py-2 px-4 lg:px-8 shadow-lg  bg-white'>
                    <div className='flex justify-between'>
                      <div>
                        <h4 className='text-lg text-gray-500 p-1'>
                          {purchase}
                        </h4>
                      </div>
                      <div>
                        <h4 className='text-lg text-gray-500 p-1'>{type}</h4>
                      </div>
                    </div>
                    <h1 className='text-center text-3xl text-[#093158] my-4'>
                      {localGov}
                    </h1>
                    <div className='flex justify-between my-5'>
                      <div>
                        <h4 className='text-lg text-[#093158] p-1'>
                          BEDROOMS:{" "}
                          <span className='text-yellow-500'> {bedrooms}</span>
                        </h4>
                      </div>
                      <div>
                        <h4 className='text-lg text-[#093158] p-1'>
                          BATHROOMS:{" "}
                          <span className='text-yellow-500'> {bathroom}</span>
                        </h4>
                      </div>
                    </div>
                    <div className='flex justify-between my-5'>
                      <div>
                        <h4 className='text-lg text-[#093158] p-1'>
                          KITCHEN:{" "}
                          <span className='text-yellow-500'>{kitchen} </span>
                        </h4>
                      </div>
                      <div>
                        <h4 className='text-lg text-[#093158] p-1'>
                          BATHROOMS:{" "}
                          <span className='text-yellow-500'> {bathroom} </span>
                        </h4>
                      </div>
                    </div>
                    <div className='flex justify-between my-5'>
                      <div>
                        <h4 className='text-lg text-[#093158] p-1'>
                          PLOT:{" "}
                          <span className='text-yellow-500'> {plot} </span>
                        </h4>
                      </div>
                      <div>
                        <h4 className='text-lg text-[#093158] p-1'>
                          PRICE: N
                          <span className='text-yellow-500'>{price}</span>
                        </h4>
                      </div>
                    </div>

                    <button className='flex justify-center m-auto mt-10 lg:mt-16  bg-[#ffcb05] w-56 rounded-md text-white  p-2 2xl:p-3 outline-none transition-all duration-300 ease-in-out hover:bg-yellow-500 2xl:w-[300px] mb-3'>
                      PROCEED TO BUY
                    </button>
                  </div>
                  <h1 className='col-span-2 text-4xl text-center text-[#093158] mt-6'>
                    PROPERTY <span className='text-[#ffcb05]'>DESCRIPTION</span>
                  </h1>
                  <hr className='text-gray-400 col-span-2  w-[95%] lg:w-[80%] m-auto' />
                  <p className='text-[#093158] col-span-2 w-[95%] lg:w-[80%] m-auto px-2 lg:px-5 mb-4'>
                    {description}
                  </p>
                </div>
              );
            }
          }
        )}
      </div>
    </div>
  );
}

export default SingleProduct;
