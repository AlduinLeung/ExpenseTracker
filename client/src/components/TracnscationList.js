import React,{useContext,useEffect} from 'react'
import {GlobalContext} from '../context/GlobalState'
import {Transcation} from './Transcation'
export const TracnscationList = () => {
    const {transaction,getTransaction}=useContext(GlobalContext);
    
    useEffect(()=>{
        getTransaction();

    });
    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
            {transaction.map(transaction=>(<Transcation  key={transaction.id} transaction={transaction}/>))}
                
            </ul>
        </>
    )
}
  