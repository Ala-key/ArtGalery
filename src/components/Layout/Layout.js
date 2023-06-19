import Nav from "../Nav/Nav";
import "./Layout.css"
import Logo from "../../Logo/Logo";
import CategoryList from "../CategoryList/CategoryList";
import Auth from "../Auth/Auth";
import video from "../../assets/Art-Galery.mp4"
import { useMatch } from 'react-router-dom';
import Footer from "../../pages/Footer";




export default function Layout({ children }) {

  const match = useMatch('/');

  const categ = useMatch('/categories/:car')

  const about = useMatch('/about')

  const contacts = useMatch('/contacts')

  const cart = useMatch('/cart')

  const thankyou = useMatch('/thank-you')

  const orders = useMatch('/orders');



  console.log(categ);

  return (
    <div className="Layout">

      <header>
        <Logo></Logo>
        <Nav className="Nav"></Nav>
        <div id="icons">
          <Auth />
        </div>
      </header>



      {match === null && categ === null ? null : (
        <div className="container">
          <div className="video">
            <h1>"Откройте мир красоты и вдохновения"</h1>
            <video autoPlay muted loop>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      )}



      {about != null || contacts != null || cart != null || thankyou != null || orders != null ? null : (
        <aside>
          <CategoryList></CategoryList>
        </aside>
      )}

      <main>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}