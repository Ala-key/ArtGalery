import { addDoc } from "firebase/firestore";
import "./OrderForm.css";
import { ordersCollection } from "../../firebase";
import { useContext } from "react";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";

export default function OrderForm() {
  const { cart, setCart, user } = useContext(AppContext);
  const navigate = useNavigate();

  if (Object.keys(cart).length === 0) {
    return "Your cart is empty.";
  }

  if (!user) {
    return "Please login to create an order.";
  }

  function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    addDoc(ordersCollection, {
      name: formData.get("name"),
      phone: formData.get("phone"),
      user: user.uid,
      address: formData.get("address"),
      cart: cart,
    }).then((doc) => {
      setCart({});
      navigate("/thank-you");
    });
  }

  return (
    <form className="cf" onSubmit={onFormSubmit}>
      <div className="half left cf">
        <input type="text" name="name" id="input-name" placeholder="Имя" />
        <input type="tel" name="phone" id="input-email" placeholder="Телефон" />
        <input type="text" name="address" id="input-subject" placeholder="Адрес" />
      </div>
      <input type="submit"  value="Отправить" id="input-submit" />
    </form>
  );
}