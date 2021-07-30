const ValuePerPerson = ({ tipPerPerson, totalPerPerson }) => (
  <div>
    <h2>Tip/person: £{tipPerPerson.toFixed(2)}</h2>
    <h2>Total/person: £{totalPerPerson.toFixed(2)}</h2>
  </div>
);

export default ValuePerPerson;
