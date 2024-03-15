import Proptypes from "prop-types";
const Cradits = ({ name, credit, price }) => {
  return (
    <div className="my-5 p-3 bg-cyan-50 rounded-xl">
      <h3 className="text-xl font-bold text-center my-3">
        Credit Hours Remaning 2 hours
      </h3>
      <hr />
      <p className="font-semibold my-3">Course Name:</p>
      {name.map((name, idx) => (
        <li key={idx} className="my-3">
          {name}
        </li>
      ))}

      <hr />
      <p className="my-5 text-center">Cradits: {credit}</p>
      <hr />
      <p className="text-lg font-semibold my-5 text-center">
        Total Price: {price}
      </p>
    </div>
  );
};
Cradits.propTypes = {
  name: Proptypes.array.isRequired,
  credit: Proptypes.number.isRequired,
  price: Proptypes.number.isRequired
};
export default Cradits;
