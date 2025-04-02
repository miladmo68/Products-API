import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";

function App() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);

  function handleSearch(searchText) {
    setQuery(searchText);
  }

  async function fetchProducts(query) {
    try {
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${query}`
      );
      const data = await res.json();
      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    fetchProducts(query);
  }, [query]);

  return (
    <div className="flex flex-col items-center gap-8 my-10 px-6">
      <h1 className="text-3xl font-bold text-gray-800">Search Products</h1>
      <SearchBar onSearch={handleSearch} />
      <ProductList products={products} />
    </div>
  );
}

export default App;
