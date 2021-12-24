import React, { useContext, useEffect } from "react";
import { Select, Slider } from "antd";
import { productsContext } from "../../contexts/productsContext";

const Filters = ({price, setPrice }) => {
  const {getProducts} = useContext(productsContext)
  useEffect(() => {
    getProducts()
  },[])
  return (
    <div style={{ marginTop: "20px", width: "20%"}}>
      <Slider
        value={price}
        onChange={(e) => setPrice(e)}
        range
        defaultValue={[1, 500]}
        min={0}
        max={500}
        step={10}
      />
    </div>
  );
};

export default Filters;
