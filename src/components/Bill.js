const Bill = ({ value, onChange }) => (
  <div>
    <h3>Bill</h3>
    <input value={value} onChange={onChange} required />
  </div>
);

export default Bill;
