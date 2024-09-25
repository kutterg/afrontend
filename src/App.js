// import logo from './logo.svg';
import React, { useContext, useEffect } from 'react';
// import Routering from './Router.jsx';
import Routering from './Router.jsx';
import { DataContext } from './Components/DataProvider/DataProvider.js';
import { Type } from './Utility/action.type.js';
// import Auth from './pages/Auth/Auth.jsx';
import { auth } from './Utility/firebase.js';

// import './App.css';

// import Header from './Components/Header/Header';
// import Product from './Components/Product/Product';
// import Carousel from './Components/Carousel/CarouselEffect';//open after solve images
// import Category from './Components/Category/Category';
// import Test1 from './Components/test/Test1';
// import Test2 from './Components/test/Test2';
// import CarouselEffect from './Components/Carousel/CarouselEffect.jsx';
// import CarouselEffect, { Carousel } from './Components/Carousel/CarouselEffect';
function App() {
  const [{user}, dispatch] = useContext(DataContext)
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        // console.log(authUser);
        dispatch({
          type:Type.SET_USER,
          user:authUser
        })
        
      }else {
         dispatch({
           type: Type.SET_USER,
           user: null,
         });
      }
    })

  },[])
   return <Routering />;
  // return (




  //   <div>
  //     {/* <Header /> */}
  //     {/* <Carousel/> */}
  //     {/* <Category/> */}
  //     {/* <Product/> */}
  

  //     {/* <Category /> */}
  //     {/* <Product /> */}

  //     {/* <Test1/>
  //     <br/>
  //     <Test2 /> */}
  //   </div>


  // );
}

export default App;
