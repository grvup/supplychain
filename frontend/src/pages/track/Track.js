import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import TrackGrid from "./Trackgrid";
// import ProductForm from "../../components/product/productForm/ProductForm";
import {
  createProduct,
  selectIsLoading,
} from "../../redux/features/product/productSlice";

const initialState = {
  name: "",
  category: "",
  quantity: "",
  price: "",
};

const Track = () => {
  

  const isLoading = useSelector(selectIsLoading);

  return (
    <div>
      {isLoading && <Loader />}
      <h3 className="--mt">Track Shipments</h3>
     <TrackGrid/>
    </div>
  );
};

export default Track;
