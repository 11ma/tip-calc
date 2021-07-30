const People = ({ value, onChange }) => (
  <div>
    <h3>Number of people</h3>
    <input value={value} onChange={onChange} />
  </div>
);

export default People;
