const Cards = ({ datas }) => {
  console.log(datas);
  return datas.map((data) => (
    <div key={data.id}>
      <div className="p-3 text-center space-y-3 bg-cyan-100 border-[1px] border-cyan-300 shadow-lg rounded-xl h-full">
        <img src={data.photo} alt="" />
        <h2 className="text-xl font-bold">{data.name}</h2>
        <p className="text-sm">{data.description}</p>
        <p className="text-sm font-medium">Cradit: {data.credit}</p>
        <p className="font-semibold">Price: {data.price}</p>
        <button className="bg-cyan-600 hover:bg-cyan-700 py-2 px-5 rounded-lg border-[1px] border-cyan-800 font-semibold">
          Add to Cart
        </button>
      </div>
    </div>
  ));
};

export default Cards;
