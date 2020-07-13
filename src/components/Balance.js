import React,{useContext}from 'react'
import  {GlobalContext} from '../context/GlobalState'
export const Balance = () => {

    const {transaction}=useContext(GlobalContext);
    const amounts=transaction.map(transaction=>transaction.amount);
    const total=amounts.reduce((acc,item)=>(acc=acc+item),0).toFixed(2); 
    return (
        <>
            <h4>Your Balance</h4>
            <h1 id='balance'>${total}</h1>
        </>
    )
}
