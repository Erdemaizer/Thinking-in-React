import { useState } from "react";
import ProductTable from "../ProductTable/ProductTable";
import SearchBar from "../SearchBar/SearchBar";

const products = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export default function FilterableProductTable() {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const filteredProducts = products.filter((product) => {
    if (filterText !== "" && inStockOnly) {
      return (
        product.name.toLowerCase().includes(filterText.toLowerCase()) &&
        product.stocked === inStockOnly
      );
    } else if (filterText === "" && inStockOnly) {
        return product.stocked === inStockOnly;
    } else if (filterText !== "" && !inStockOnly) {
        return product.name.toLowerCase().includes(filterText.toLowerCase());
    } else if (inStockOnly) {
        return;
    } else {
        return product;
    }
  });

  const changeFilterText = (text: string) => {
    setFilterText(text);
  };

  const changeInStockOnly = () => {
    setInStockOnly(!inStockOnly);
  };
  return (
    <div className="FilterableProductTable">
      <SearchBar
        changeFilterText={changeFilterText}
        changeInStockOnly={changeInStockOnly}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}
