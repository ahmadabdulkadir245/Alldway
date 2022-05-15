import Image from "next/image";
import { useSelector } from "react-redux";
import SavedHome from "../components/Main/SavedHome";
import { selectItems } from "../slices/basketSlice";
function SavedHomes() {
  const savedHomes = useSelector(selectItems);
  return (
    <div className='iceland'>
      <div className='mt-28 m-auto w-[95%] lg:max-w-5xl text-[#093158]'>
        <h1 className='text-4xl text-center md:text-left '>
          SAVED <span className='text-[#ffcb05]'>HOMES</span>
        </h1>
        <hr className='w-[86%] m-auto md:w-full h-[2px] bg-[#093158]    ' />
        {savedHomes.map(
          ({
            id,
            purchase,
            localGov,
            bedrooms,
            type,
            description,
            bathroom,
            kitchen,
            plot,
            price,
            img,
          }) => (
            <div key={id}>
              <SavedHome
                id={id}
                type={type}
                purchase={purchase}
                localGov={localGov}
                bedrooms={bedrooms}
                bathroom={bathroom}
                description={description}
                kitchen={kitchen}
                plot={plot}
                price={price}
                img={img}
              />
              {/* <div className='grid grid-cols-1 md:grid-cols-5 '>
                <Image src={img} width={200} height={200} objectFit='contain' />
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veritatis aliquid expedita, vitae unde tempora cum dicta
                      pariatur sequi ex magnam? Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Veritatis aliquid expedita,
                      vitae unde tempora cum dicta pariatur sequi ex magnam?
                    </p>
                  </div>
                  <CurrencyDollar quantity={price} currency='GBP' />
                </div>
                <div className='flex flex-col space-y-2 my-auto justify-self-end text-white '>
                  <button className='button mt-auto bg-[#ffcb05]'>
                    Proceed To Checkout
                  </button>
                  <button className='button mt-auto hover:bg-[#ffcb05]'>
                    Remove from Basket
                  </button>
                </div>
              </div> */}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default SavedHomes;
