import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../App";
import AddProduct from "../AddProduct/AddProduct";
import AddToCart from "../AddToCart/AddToCart";
import DeleteProduct from "../DeleteProduct/DeleteProduct";
import "./ProductList.css"


export default function ProductList({ category }) {
  const { products } = useContext(AppContext);

  console.log(products);

  const output = products.filter(product => product.category === category.id).map(product => (
    <div className="Product">
      <img className="carphoto" src={product.photo0} alt={product.name}></img>
      <div className="info">
        <NavLink to={'/products/' + product.slug} className="bold-weight">
          {product.name}
        </NavLink>
        <span>Автор: {product.bodytype}</span>
        <span>Год: {product.buildcountry}</span>
        <span className="bold-weight">{product.price} руб</span>
        <AddToCart className="mar-top" product={product}></AddToCart>
        <DeleteProduct product={product} />
      </div>
    </div>
  ))

  return (
    <div className="ProductList">
      {output}
      <AddProduct category={category} />
    </div>
  )
}