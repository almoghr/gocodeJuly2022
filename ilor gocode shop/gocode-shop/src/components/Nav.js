import React from "react";
import "./Nav.css";

const Nav = ({ products, filterByCat }) => {
  const categories = products
    .map((p) => p.category)
    .filter((value, index, array) => array.indexOf(value) === index);

  const options = categories.map((cat) => <option value={cat}>{cat}</option>);

  return (
    <nav className="product-filter">
      <h1>Jackets</h1>

      <div className="sort">
        <div className="collection-sort">
          <label>Filter by:</label>
          <select
            onChange={(e) => {
              // console.log(e.target.value);
              filterByCat(e.target.value);
            }}
          >
            {options}
          </select>
        </div>

        <div className="collection-sort">
          <label>Sort by:</label>
          <select>
            <option value="/">Featured</option>
            <option value="/">Best Selling</option>
            <option value="/">Alphabetically, A-Z</option>
            <option value="/">Alphabetically, Z-A</option>
            <option value="/">Price, low to high</option>
            <option value="/">Price, high to low</option>
            <option value="/">Date, new to old</option>
            <option value="/">Date, old to new</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
