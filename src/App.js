import React, { useState } from "react";
import Transaction from "./components/Transaction";
import Button from "./components/Button";

const initialList = [
  { value: 123, currency: "CZK" },
  { value: 111, currency: "EUR" },
  { value: 500, currency: "USD" }
];

const App = () => {
  const [transactionList, setTransactionList] = useState(initialList);
  //const [state value, setter pro ten value]

  const handleClick = () => {
    const newObject = { value: 555, currency: "EUR" };
    setTransactionList([...transactionList, newObject]);
  };

  const reset = () => {
    setTransactionList([...initialList]);
  };

  return (
    <>
      {transactionList.map((
        //map pak vola jednu anonymni funkci
        //map - projit kazdy prvek arraye
        { value, currency }
      ) => (
        <Transaction valueProp={value} currency={currency} />
      ))}
      {console.log(transactionList) // chlupate zavorky protoze to je javascript
      }
      <Button onClick={handleClick} />
      <button onClick={reset}>Reset</button>
      <button onClick={handleClick}>Add Transaction</button>
    </>
  );
};

export default App;
