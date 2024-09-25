import React, { useContext } from "react";
import classes from "./header.module.css";
import { Link } from "react-router-dom";
// import { FaSearch } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import LowerHeader from "./LowerHeader";
import { BiCart } from "react-icons/bi";
// import { useContext } from "react";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";
import { Type } from "../../Utility/action.type";

function Header() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  // console.log(basket.length);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  const signOut = () => {
    auth.signOut();
    dispatch({
      type: Type.EMPTY_BASKET,
    });
  };
  // console.log(user);

  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header_container}>
          {/*logo section*/}
          <div className={classes.logo_container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
            {/*delivery*/}
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>

              <div>
                <p>Delivered to</p>
                <span>UK</span>
              </div>
            </div>
          </div>
          {/*search bar*/}

          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>

            <input type="text" />
            <BsSearch size={38} />
            {/*icon*/}
          </div>
          {/* other section  */}
          {/*right link*/}

          <div className={classes.order_container}>
            <Link to="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1920px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>
            {/* three components */}
            <Link to={!user && "/Auth"}>
              {/* <--clicable place*/}
              <div>
                {user ? (
                  <>
                    <p>Hello {user?.email?.split("@")[0]}</p>
                    <span onClick={signOut}>Sign Out</span>

                    {/* <span onClick={() => auth.signOut()}>Sign Out</span> */}
                  </>
                ) : (
                  <>
                    <p>Hello, Sign In</p>
                    <span>Account & Lists</span>
                  </>
                )}
                {/* <p>Sign In</p> */}
              </div>
            </Link>
            {/* orders */}
            <Link to="/orders">
              <p> returns </p>
              <span>& Orders</span>
            </Link>
            {/* cart */}
            <Link to="/cart" className={classes.cart}>
              {/* <--clicable place*/}
              {/* icon */}
              <BiCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header;
