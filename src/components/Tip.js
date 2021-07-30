const Tip = ({ onClick, onChange, placeholder = "custom" }) => {
  return (
    <>
      <h3>Tip: </h3>
      <button onClick={onClick}>5%</button>
      <button onClick={onClick}>10%</button>
      <button onClick={onClick}>15%</button>
      <button onClick={onClick}>25%</button>
      <button onClick={onClick}>50%</button>
      <input onChange={onChange} placeholder={placeholder} />
    </>
  );
};

export default Tip;
