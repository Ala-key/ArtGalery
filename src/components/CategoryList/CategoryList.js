import { NavLink } from "react-router-dom";
import "./CategoryList.css"
import { useContext } from "react";
import { AppContext } from "../../App";
import AddCategory from "../AddCategory/AddCategory";
import DeleteCategory from "../DeleteCategory/DeleteCategory";






export default function CategoryList() {

  const {categories} = useContext(AppContext);




  const output = categories.map(category => {
    return (
      <div>
        <NavLink to={"/categories/" + category.slug}>
        <p className="paragaf">{category.name}</p>
        </NavLink>
        <DeleteCategory category={category}/>
      </div>
    );
  });


  


  return (
    <div className="CategoryList">
        {output}
        <AddCategory/>
    </div>
  )
}