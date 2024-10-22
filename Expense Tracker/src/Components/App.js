// import './App.css';
import Balance from "./Balance";
import Header from "./Header";
import Stats from "./Stats";
import Input from "./Input";
import Transaction from "./Transaction";
import { useState } from "react";


function App() {
  const [balance, setBalance] = useState(0)
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)
  const [transactionList, setTransaction] = useState([]);

  function addTransaction(item){
    if(item.Etype === "expense"){
      setExpense(expense + item.amount);
      setBalance(balance - item.amount);
    }else if(item.Etype === "income"){
      setIncome(income + item.amount);
      setBalance(balance + item.amount);
    }
    setTransaction(prev=>{
      return[...prev, item]
    });
  }

  function removeTransaction(id){
    let item = transactionList.find((value, index)=> index === id);
    if(item.Etype === "expense"){
      setExpense(expense - item.amount);
      setBalance(balance + item.amount);
    }else if(item.Etype === "income"){
      setIncome(income - item.amount);
      setBalance(balance - item.amount);
    }
    setTransaction(prev=>{
      return prev.filter((value, index)=>index!==id)
    })
  }

  return (
    <div className="container border-slate-400 border-2 w-full sm:w-3/3 md:w-3/4 lg:w-2/4 xl:w-2/4 mx-auto my-5 p-4">
      <Header />
      <Balance balance={balance}/>
      <Input addTransaction={addTransaction}/>
      <Stats income={income} expense={expense}/>
      <Transaction transactionList={transactionList} removeTransaction={removeTransaction}/>

    </div>
  )
}

export default App;
