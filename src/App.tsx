import FormExpenseTracker from "./components/FormExpenseTracker";
import FilterExpenseTracker from "./components/FilterExpenseTracker";
import TableExenseTracker from "./components/TableExenseTracker";
import { useState } from "react";

const App = () => {
  const [itemList, setItemList] = useState<Array<any>>([]);
  const [category, setCategory] = useState("All Categories");
  let [id, setId] = useState(0);

  function onSubmit(data: any) {
    setId(++id);

    setItemList([
      ...itemList,
      {
        desc: data.desc,
        amount: data.amount,
        category: data.category,
        id: id,
      },
    ]);
  }

  function onChange(nameRef: string) {
    setCategory(nameRef);
  }

  function onClick(id: number) {
    setItemList(itemList.filter((item) => item.id != id));
  }

  function calculateTotal(list: Array<any>) {
    let total = 0;

    if (category === "All Categories") {
      for (let i = 0; i < list.length; i++) {
        total += list[i].amount;
      }
    } else {
      for (
        let i = 0;
        i < list.filter((item: any) => item.category === category).length;
        i++
      ) {
        total += list[i].amount;
      }
    }

    return total;
  }

  return (
    <>
      <FormExpenseTracker onSubmit={onSubmit} />
      <FilterExpenseTracker onChange={onChange} />
      <TableExenseTracker
        itemList={
          category == "All Categories"
            ? itemList
            : itemList.filter((item) => item.category === category)
        }
        onClick={onClick}
        total={calculateTotal(itemList)}
      />
    </>
  );
};

export default App;
