import './App.css';
import Header from './components/Header';
import { useState,useEffect } from 'react';
import SearchBar from './SearhaBar';
import Transactions from './components/Transactions';
import AddTransaction from './components/AddTransaction';

function App() {
  const [transactions,setTransactions]=useState([])
  const [keyword, setKeyword] = useState('');
  const [showAddTransactions, setShowAddTransactions] = useState(false)
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
    setTransactions(data)

    return data

    console.log(data)
  }

  const updateKeyword = (keyword) => {
    const filtered = transactions.filter(transaction => {
     return `${transaction.category.toLowerCase()} ${transaction.description.toLowerCase()}`.includes(keyword.toLowerCase());
    })
    setKeyword(keyword);
    setTransactions(filtered);
 }

 const addTransaction = (transaction) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTransaction = {id, ...transaction}
  setTransactions([...transactions, newTransaction])
}

  
  return (
    <div className="App">
      
    <Header />
    <SearchBar keyword={keyword} onchange ={updateKeyword}/>
    <Transactions transactions={transactions} onchange = {updateKeyword}/>
    <AddTransaction onAdd = {addTransaction}/>
    </div>
  );
}

export default App;
