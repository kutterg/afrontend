import React from 'react'
import classes from './Category.module.css'
import { Link } from 'react-router-dom';


function CategoryCard({data}) {
    //distructuring data by props
    // console.log(data) 
  
    
  return (
    <div className={classes.category}>
      <Link to={`/category/${data.name}`}>
        <span>
          {/* <h2>title</h2> */}
          {/* now use props */}
          <h2>{data?.title}</h2>
        </span>
        <img src={data?.imgLink} alt="" />
        <p>shop now</p>
      </Link>
    </div>
  );
}




export default CategoryCard
