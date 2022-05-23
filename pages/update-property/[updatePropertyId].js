import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { selectedProperties, updateProperty } from "../../slices/productSlice";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Form from "../../components/Main/Form";

function UpdatedPropertyPage() {
  return (
    <div className='m-auto mt-24 max-w-3xl 2xl:max-w-4xl iceland'>
      <h1 className='text-center text-4xl text-[#093158]'>
        UPDATE <span className='text-[#ffcb05]'>PROPERTY</span>
        <div className='h-[2px] w-[200px] bg-[#ffcb05]  m-auto mb-6'></div>
      </h1>
      <Form />
    </div>
  );
}

export default UpdatedPropertyPage;
