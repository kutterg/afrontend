import React, { useState, useContext } from 'react'
import classes from './Signup.module.css'
import { Link, useNavigate,useLocation } from 'react-router-dom'
// import LayOut from '../../Components/LayOut/LayOut'
//Backend
import { auth } from '../../Utility/firebase';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"
import {ClipLoader} from "react-spinners";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from '../../Utility/action.type';

function Auth() {
  //backend
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState(" ")//to store error
  // console.log(password, email);//check on console by inserting email and password
  const [Loading, setLoading] = useState({
    signIn:false,
    signUp:false
  })
  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate()
  const navStateData = useLocation()
  console.log(navStateData);
  
  console.log(user);
  
  const authHandler = async(e)=>{
    e.preventDefault();
    console.log(e.target.name);
    if(e.target.name == "signin"){
      //firebase auth
      setLoading({...Loading, signIn:true})
      signInWithEmailAndPassword(auth, email, password).then((userInfo)=>{
        // console.log(userInfo);
        dispatch({
          type:Type.SET_USER,
          user:userInfo.user
        });
        setLoading({...Loading, signIn:false});
        navigate(navStateData?.state?.redirect || "/");
        
      }).catch((err)=>{
        // console.log(err.message);
        seterror(err.message)
         setLoading({ ...Loading, signIn: false });
        
      });//to check who use the service

    }else{
       setLoading({ ...Loading, signUp:true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // console.log(userInfo);
           dispatch({
             type: Type.SET_USER,
             user: userInfo.user,
           });
            setLoading({ ...Loading, signUp:false });
            navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          // console.log(err);
           seterror(err.message);
            setLoading({ ...Loading, signUp:false });
        });

    }
  }




  
  return (
    <section className={classes.login}>
      {/* logo  */}
      <Link to={"/"}>
        <img
          src="https://m.media-amazon.com/images/G/01/gc/designs/livepreview/a_generic_white_10_us_noto_email_v2016_us-main._CB627448186_.png"
          alt=""
        />
      </Link>
      {/* form  */}
      <div className={classes.login_container}>
        <h1>Sign In</h1>
        {
          navStateData?.state?.msg && (
            <small style={{padding: "5px", textAlign: "center", color: "red", fontWeight: "bold",}}
            >
              {navStateData?.state?.msg}

            </small>
          ) 
        }
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            onClick={authHandler}
            name="signin"
            className={classes.login_signInButton}
          >
            {Loading.signIn ? (
              <ClipLoader color="#000" size={15}></ClipLoader>
            ) : (
              "Sign In"
            )}
            {/* Sign In */}
          </button>
        </form>
        {/* agreement  */}
        <p>
          By siging-in you agree to the AMAZON FACE CLONE Conditions of Use &
          sale. Please see our privacy Notice, our cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        {/* create account button  */}
        <button
          type="submit"
          name="signup"
          onClick={authHandler}
          className={classes.login_registerButton}
        >
          {Loading.signUp ? (
            <ClipLoader color="#000" size={15}></ClipLoader>
          ) : (
            "Create your Amazon Account"
          )}
          {/* Create your Amazon Account */}
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
    
  
}

export default Auth
