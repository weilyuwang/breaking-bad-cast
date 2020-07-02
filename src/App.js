import React, { useState, useEffect } from "react";
import Header from "./components/ui/Header";
import axios from "axios";
import "./App.css";

const breakingbadapi = "https://www.breakingbadapi.com";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(`${breakingbadapi}/api/characters`);

      console.log(result.data);

      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  return (
    <div className="container">
      <Header />
    </div>
  );
};

export default App;
