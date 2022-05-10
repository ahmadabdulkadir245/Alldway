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
      <div className='lg:mt-10 2xl:mt-16'>
        {Rents.map(
          ({
            id,
            type,
            localGov,
            bedrooms,
            bathroom,
            kitchen,
            plot,
            price,
            img,
          }) => {
            if (id === productId) {
              return (
                <div
                  key={id}
                  className='grid grid-col md:grid-cols-2  gap-8  md:gap-x-8 lg:gap-x-10 gap-y-14 m-auto px-4 lg:px-0 max-w-6xl 2xl:max-w-8xl'
                >
                  <div>
                    <img
                      src={img}
                      className='w-full h-[380px] 2xl:h-[500px]'
                      alt='Single product img'
                    />
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusamus eius a, aspernatur ipsam amet vel voluptatum
                      laboriosam impedit, sunt minus sed. Repellendus nam illum
                      corporis reiciendis quis dignissimos numquam at facilis.
                      Rem consequuntur totam harum vero reprehenderit vitae
                      consequatur minus quia neque corrupti sapiente magni
                      possimus id eius commodi placeat, alias ex tempora sint.
                      Assumenda libero asperiores illum corporis voluptates
                      inventore laudantium quod molestiae molestias minima
                      necessitatibus architecto autem minus ipsam temporibus
                      illo magnam, quam delectus voluptas quas earum optio
                      voluptatibus animi ut. Quos laboriosam tenetur, magnam
                      debitis corrupti fugiat molestiae deserunt itaque beatae
                      dolor, obcaecati nam suscipit ducimus facere.
                    </p>
                  </div>
                </div>
              );
            }
          }
        )}
      </div>
      <div className='grid grid-col md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8  md:gap-x-8 lg:gap-x-10 gap-y-14 m-auto'>
        {Sales.map(
          ({
            id,
            type,
            localGov,
            bedrooms,
            bathroom,
            kitchen,
            plot,
            price,
            img,
          }) => {
            if (id === productId) {
              return (
                <div key={id}>
                  <div className='w-full  rounded-md overflow-hidden  cursor-pointer'>
                    <img
                      className='w-full h-[250px]'
                      src={img}
                      alt='For rent image'
                    />
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
                          <HeartIcon className='h-5 text-[#ffcb05]' />
                        </div>
                      </div>
                    </div>
                  </div>
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
