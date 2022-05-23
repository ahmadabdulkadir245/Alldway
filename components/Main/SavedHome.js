import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../../slices/basketSlice";

function SavedHome({
  id,
  purchase,
  localGov,
  bedrooms,
  type,
  bathroom,
  kitchen,
  description,
  plot,
  price,
  img,
}) {
  const dispatch = useDispatch();
  const removeItemFromBasket = () => {
    // remove the item from redux
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className='grid grid-cols-1 md:grid-cols-5 my-6'>
      <Image src={img} width={200} height={200} objectFit='contain' />
      {/* <img
        src={img}
        className='w-full  h-[200px] md:h-[100px] px-4 '
        alt='saved home image'
      /> */}
      <div className='col-span-3 mx-3'>
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
          <p className='text-md text-[#093158]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            aliquid expedita, vitae unde tempora cum dicta pariatur sequi ex
            magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        {/* <CurrencyDollar quantity={price} currency='GBP' /> */}
      </div>
      <div className='flex flex-col space-y-2 my-auto justify-center px-3 md:px-0 md:justify-self-end text-white text-xl'>
        <Link href={`products/${id.toString()}`}>
          <a>
            {" "}
            <button className='button mt-auto bg-[#ffcb05] hover:bg-[#ffcb05] w-full'>
              Go To Product
            </button>
          </a>
        </Link>
        <button
          className='button mt-auto hover:bg-[#ffcb05]'
          onClick={removeItemFromBasket}
        >
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default SavedHome;
