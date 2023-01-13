import React, { useState } from "react";

interface productListProps {}
const initialProducts = [
  { title: "this is the first", price: 60, id: "eft" },
  { title: "this is the second", price: 100, id: "hunt" },
  { title: "this is the third", price: 120, id: "hll" },
  { title: "this is the fiveth", price: 200, id: "five" },
];

interface Product{
  title: string;
  price:number;
  id:string;
}

const ProductList: React.FC<productListProps> = () => {


  const [products, setProducts ] = useState<Product[]>(initialProducts)
  return (
    <div>
      
      <h2>shop List</h2>
      {products.map(product=><div key ={product.id}>
       <span> {`${product.title}: ${product.price}`}</span>
      </div>)}

      <button onClick={()=>setProducts(prePro=>[{
        title:"fourth",
        price:100,
        id:"hrr"
      },...prePro])}>Add Products</button>
    </div>
  );
};
export default ProductList;
