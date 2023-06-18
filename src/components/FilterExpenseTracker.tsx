interface Props {
  onChange: (ref: string) => void;
}

const FilterExpenseTracker = ({ onChange }: Props) => {
  return (
    <>
      <select
        onChange={(event) => onChange(event.target.value)}
        className="form-select mb-4"
      >
        <option>All Categories</option>
        <option>Groceries</option>
        <option>Utilities</option>
        <option>Entertainment</option>
      </select>
    </>
  );
};

export default FilterExpenseTracker;
