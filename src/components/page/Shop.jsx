import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTh, FaListUl } from "react-icons/fa";
import { initialProducts, categories, sizes } from "../../data/ProductData";

const FilterSidebar = ({ onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoryName) => {
    // Toggle the category filter
    const newCategory = selectedCategory === categoryName ? null : categoryName;
    setSelectedCategory(newCategory);
    onCategoryChange(newCategory);
  };

  // Placeholder function for price filter action
  const handlePriceFilter = () => {
    alert("Price filter applied (Logic not implemented in this demo)");
  };

  return (
    <div className="p-3">
      {/* Price Filter */}
      <h5 className="fw-bold mb-3 detail-text">FILTER BY PRICE</h5>
      <div className="mb-4">
        {/* Placeholder for range slider */}
        <div className="bg-light mb-2 price-bar">
          <div className="price-bar-active"></div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <span className="text-secondary detail-text">Price: $0 – $3,200</span>
          <button
            className="btn btn-sm text-uppercase fw-bold filter-button"
            style={{ color: "#8ac44a", border: "1px solid #ddd" }}
            onClick={handlePriceFilter}
          >
            Filter
          </button>
        </div>
      </div>

      {/* Category Filter (The requested replacement) */}
      <h5 className="fw-bold mb-3 detail-text">FILTER BY CATEGORY</h5>
      <ul className="list-unstyled mb-4">
        {categories.map((category) => (
          <li
            key={category.name}
            className={`d-flex justify-content-between py-1 detail-text filter-cursor ${
              selectedCategory === category.name
                ? "fw-bold text-dark"
                : "text-secondary"
            }`}
            onClick={() => handleCategoryClick(category.name)}
          >
            <span>{category.name}</span>
            {/* <span className="text-muted" style={{ fontSize: "0.8rem" }}>
              {category.count}
            </span> */}
          </li>
        ))}
      </ul>

      <hr />

      {/* Size Filter */}
      <h5 className="fw-bold my-3 detail-text" >
        FILTER BY SIZE
      </h5>
      <ul className="list-unstyled mb-4">
        {sizes.map((size) => (
          <li
            key={size.name}
            className="d-flex justify-content-between py-1 text-secondary detail-tex"
          
          >
            <span >{size.name}</span>
            {/* <span className="text-muted" style={{ fontSize: "0.8rem" }}>
              {size.count}
            </span> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

// --- Sub-Component: Product Card ---

const ProductCard = ({ product }) => (
  <div className="col-6 col-md-4 col-lg-4 mb-4">
    <div className="card border-0 text-center">
      {/* Image Placeholder */}
      <div
        className="bg-light d-flex justify-content-center align-items-center image-custom"
        
      >
        <span className="text-muted"></span>
      </div>
      <div className="card-body p-2">
        <p className="card-text fw-bold text-dark mb-1">{product.name}</p>
        <p
          className="card-subtitle text-muted mb-1"
          style={{ fontSize: "0.8rem" }}
        >
          {product.category}
        </p>
        <p className="card-text fw-bold" style={{ color: "#8ac44a" }}>
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  </div>
);

// --- Main Shop Page Component ---

const ShopPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [categoryFilter, setCategoryFilter] = useState(null);

  // Filter products based on selected category
  const handleCategoryChange = (category) => {
    setCategoryFilter(category);
    if (category) {
      const newProducts = initialProducts.filter(
        (p) => p.category === category
      );
      setFilteredProducts(newProducts);
    } else {
      setFilteredProducts(initialProducts);
    }
  };

  // Determine the product count text
  const productCount = categoryFilter
    ? `${filteredProducts.length} results in "${categoryFilter}"`
    : `${filteredProducts.length} total products`;

  return (
    <div className="container py-5">
      {/* Top Bar (Breadcrumbs, Display Options, Sorting) */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 pb-3 border-bottom">
        {/* Breadcrumbs */}
        <span
          className="text-secondary mb-2 mb-md-0"
          style={{ fontSize: "0.9rem" }}
        >
          <a href="#" className="text-secondary text-decoration-none">
            Home
          </a>{" "}
          /<span className="fw-bold text-dark"> Shop</span>
        </span>

        <div className="d-flex align-items-center flex-wrap">
          {/* Show Count */}
          <span className="text-secondary me-3" style={{ fontSize: "0.9rem" }}>
            Show: <span className="fw-bold text-dark">9</span> / 12 / 18 / 24
          </span>

          {/* View Layout Toggles */}
          <div className="me-3">
            <FaTh
              className="text-dark me-2"
              style={{ cursor: "pointer" }}
              size={18}
            />
            <FaListUl
              className="text-muted"
              style={{ cursor: "pointer" }}
              size={18}
            />
          </div>

          {/* Default Sorting Dropdown Placeholder */}
          <div className="dropdown">
            <button
              className="btn btn-sm text-dark"
              type="button"
              style={{ border: "1px solid #ddd", fontSize: "0.9rem" }}
            >
              Default sorting
            </button>
          </div>
        </div>
      </div>

      {/* Main Content: Sidebar and Products Grid */}
      <div className="row">
        {/* LEFT COLUMN: FILTER SIDEBAR (3/12 width on large screens) */}
        <div className="col-12 col-lg-3">
          <FilterSidebar onCategoryChange={handleCategoryChange} />
        </div>

        {/* RIGHT COLUMN: PRODUCT GRID (9/12 width on large screens) */}
        <div className="col-12 col-lg-9">
          <p className="text-muted mb-4" style={{ fontSize: "0.9rem" }}>
            {productCount}
          </p>
          <div className="row">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
