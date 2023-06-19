import { useContext, useState } from "react";
import { useMatch } from "react-router";
import { AppContext } from "../App";
import "./Product.css";
import OrderReview from "../components/OrderReview/OrderReview"


export default function Product() {


  const { params } = useMatch("/products/:slug");
  const { products } = useContext(AppContext);


  const product = products.find(product => product.slug === params.slug);

  const photoProps = [];
  let i = 0;
  while (product.hasOwnProperty(`photo${i}`)) {
    photoProps.push(product[`photo${i}`]);
    i++;
  }

  //Все фото
  // const photoProps = Object.keys(product).filter(key => key.startsWith('photo')).map(key => product[key]);


  const [photos] = useState(photoProps[0]);



  const [showSpecification, setShowSpecification] = useState(true);

  const handleSpecificationClick = () => {
    setShowSpecification(true);
  };

  const handleReviewClick = () => {
    setShowSpecification(false);
  };


  return (
    <div className="Product">
      <h1>{product.name}</h1>
      <div className="border-img">
        <img id="main-img" src={photos} alt={product.name} />
      </div>
      <div className="menu">
        <button onClick={handleSpecificationClick}>Характеристики</button>
        <button onClick={handleReviewClick}>Отзывы</button>
      </div>
      {showSpecification ? (
        <div className="specification">
          <h2>Характеристики</h2>
          <table>
            <tbody>
              <tr>
                <td className="value">
                  Цена
                </td>
                <td className="bold">
                  {product.price}$
                </td>
              </tr>
              <tr>
                <td className="value">
                  Автор
                </td>
                <td className="bold">
                  {product.bodytype}
                </td>
              </tr>
              <tr>
                <td className="value">
                 Год создания: 
                </td>
                <td className="bold">
                  {product.buildcountry}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <OrderReview className="review-component" productid={product.id} />
      )}

    </div>
  )
}