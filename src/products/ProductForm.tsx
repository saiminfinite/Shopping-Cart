import React from "react";

interface ProductFormProps {}

const ProductForm: React.FC<ProductFormProps> = ({}) => {
  return <div>

<h2> Add Gane To the Store</h2>
<form>
    <input type="text" placeholder="GaME" name =" title"/>
    <input type="text" placeholder="price"  name="price"/> 
    <input type="text" placeholder="id" name="id"/>

    <button>Add</button>

</form>



  </div>;
};

export default ProductForm;
