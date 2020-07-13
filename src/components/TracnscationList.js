import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import {Transcation} from './Transcation'
export const TracnscationList = () => {
    const {transaction}=useContext(GlobalContext);
    
    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
            {transaction.map(transaction=>(<Transcation  key={transaction.id} transaction={transaction}/>))}
                
            </ul>
        </>
    )
}
  