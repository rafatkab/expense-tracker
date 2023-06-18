interface Props {
  itemList: Array<any>;
  onClick: (id: number) => void;
  total: number;
}

const TableExenseTracker = ({ total, itemList, onClick }: Props) => {
  // give unique keys
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {itemList.map((item) => (
            <>
              <tr key={item.desc + "1"}>
                <td>{item.desc}</td>
                <td>${item.amount.toFixed(2)}</td>
                <td>{item.category}</td>
                <td>
                  <button
                    onClick={() => onClick(item.id)}
                    type="button"
                    className="btn btn-outline-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </>
          ))}
          <tr>
            <td>Total</td>
            <td>${total.toFixed(2)}</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TableExenseTracker;
