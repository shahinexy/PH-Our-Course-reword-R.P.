import { useEffect } from "react";
import Cards from "./component/Cards/Cards";
import { useState } from "react";

function App() {
  const [datas, setDatas] = useState([])

  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data=> setDatas(data))
  },[])

  return (
    <>
      <div className="max-w-7xl mx-auto p-5 my-5">
        <h1 className="text-3xl text-cyan-800 font-bold text-center border-b-2 border-cyan-600 py-3">
          Oure Course
        </h1>
        <div className="flex gap-5">
          <div className="w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5">
              <Cards datas={datas}></Cards>
            </div>
          </div>
          <div className="w-1/4">
            hi
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
