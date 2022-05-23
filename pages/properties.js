import React from "react";
import { useSelector } from "react-redux";
import AddedProperties from "../components/Main/AddedProperties";
import { selectedProperties } from "../slices/productSlice";

function Properties() {
  const newProperties = useSelector(selectedProperties);

  return (
    <div className='mt-24 text-4xl'>
      {newProperties.map(
        ({
          id,
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
        }) => (
          <div key={id}>
            <AddedProperties
              id={id}
              localGov={localGov}
              address={address}
              type={type}
              bedrooms={bedrooms}
              bathrooms={bathrooms}
              kitchens={kitchens}
              plot={plot}
              price={price}
              img={img}
              description={description}
            />
            {/* <p>
            {localGov} {address}
          </p> */}
          </div>
        )
      )}
      <p className='text-4xl'> {newProperties.length}</p>
    </div>
  );
}

export default Properties;
