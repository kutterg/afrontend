import React from 'react'
import {categoryImg} from "./CategoryFullInfos"
import CategoryCard from './CategoryCard'
import classes from './Category.module.css'


//to render the links(by making map to give for card)
function Category() {
  return (
    <section className={classes.category_container}>
      {categoryImg.map((infos) => {
       return <CategoryCard data={infos} />;
      })}
    </section>
  );
}

export default Category