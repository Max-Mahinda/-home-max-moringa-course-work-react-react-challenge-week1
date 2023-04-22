import './App.css';
import Header from './components/Header';
import { useState,useEffect } from 'react';
import SearchBar from './SearhaBar';
import Transactions from './components/Transactions';

function App() {
  const [transactions,setTransactions]=useState([])
  useEffect (()=> {
    const getTransactions = async () =>{
      const transactionsfromserver = await fetchTransactions()
      setTransactions(transactionsfromserver)
    }

    getTransactions()
  }, [])

  //fetch transactions
  const fetchTransactions = async () => {
    const res = await fetch ('http://localhost:3000/transactions')
    const data = await res.json()

    return data

    console.log(data)
  }

  
  return (
    <div className="App">
      
    <Header />
    <SearchBar/>
    <Transactions transactions={transactions} />
    </div>
  );
}

export default App;
