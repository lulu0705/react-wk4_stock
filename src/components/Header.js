import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { StoreContext } from "../store";
import { useContext } from "react";
import products from "../json/products.json";
export const PAGE_TITLE_SET = 'PAGE_TITLE_SET';
export const PAGE_CONTENT_SET = 'PAGE_CONTENT_SET';



export default function Header({title}) {
   const { dispatch } = useContext(StoreContext);
   const onClickHeader = () => {
      dispatch ({
         dispatch: PAGE_TITLE_SET,
         payload: "NORDIC NEST Shopping Cart",
      });
      dispatch ({
         dispatch: PAGE_CONTENT_SET,
         payload: products,
      });
   };

   return (
      <div className="header" onClick={onClickHeader}>
         <Link to="/">
            <h1 className="header-title">
               {title}
            </h1>
         </Link>

         <p
            className="header-slogan">
            An example made by Create-React-App.
         </p>
         <hr className="hr-header-line" />
         <NavBar />
      </div>
   );
}