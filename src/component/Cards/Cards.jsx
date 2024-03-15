const Cards = ({ datas }) => {
  console.log(datas);
  return datas.map((data) => (
    <div key={data.id}>
      <div className="p-3 text-center space-y-3 bg-cyan-100 shadow-lg rounded-xl">
        <img src="" alt="" />
        <h2 className="text-xl font-bold">Title</h2>
        <p className="text-base">Description</p>
        <p className="text-sm">Cradit:</p>
        <p className="font-semibold">Price:</p>
        <button className="bg-cyan-600 hover:bg-cyan-700 py-2 px-5 rounded-lg border-[1px] border-cyan-800 font-semibold">
          Add to Cart
        </button>
      </div>
    </div>
  ));
};

export default Cards;
