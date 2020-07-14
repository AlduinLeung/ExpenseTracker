import React from "react";
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {IncomeExpense} from './components/IncomeExpense'
import {TracnscationList} from './components/TracnscationList'
import {AddTranscation} from './components/AddTranscation'
import './App.css'
import {GlobalProvider } from './context/GlobalState'
function App() {
  return (
      <GlobalProvider>
         <Header />
         <div className="container">
           <Balance />
           <IncomeExpense />
           <TracnscationList />
           <AddTranscation />
         </div>
      </GlobalProvider>
  );
}

export default App;
