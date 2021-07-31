const Bill = ({ value, onChange, src }) => (
  <div>
    <h3>Bill</h3>
    <img src={src} />
    <input value={value} onChange={onChange} required />
  </div>
);

export default Bill;
