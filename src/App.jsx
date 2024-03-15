import { useEffect } from "react";
import Cards from "./component/Cards/Cards";
import { useState } from "react";
import Cradits from "./component/Credits/Cradits";

function App() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  // handle add to cart datas
  const [cartName, setCartName] = useState([]);
  const [credit, setCradit] = useState(0);
  const [price, setPrice] = useState(0);

  const handleAddToCart = (details) => {
    const newName = [...cartName, details.name];
    setCartName(newName);

    const newCradit = credit + details.credit;
    setCradit(newCradit);

    const newPrice = price + details.price;
    setPrice(newPrice);
  };
  return (
    <>
      <div className="max-w-7xl mx-auto p-5 my-5">
        <h1 className="text-3xl text-cyan-800 font-bold text-center border-b-2 border-cyan-600 py-3">
          Oure Course
        </h1>
        <div className="md:flex gap-5">
          <div className="md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-5">
              <Cards datas={datas} handleAddToCart={handleAddToCart}></Cards>
            </div>
          </div>
          <div className="md:w-1/4">
            <Cradits name={cartName} credit={credit} price={price}></Cradits>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
