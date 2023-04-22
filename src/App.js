import './App.css';
import Header from './components/Header';
import { useState,useEffect } from 'react';
import SearchBar from './SearhaBar';
import Transactions from './components/Transactions';

function App() {
  const [transactions,setTransactions]=useState([])
  const [keyword, setKeyword] = useState('');
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

  
  return (
    <div className="App">
      
    <Header />
    <SearchBar keyword={keyword} onchange ={updateKeyword}/>
    <Transactions transactions={transactions} onchange = {updateKeyword}/>
    </div>
  );
}

export default App;
