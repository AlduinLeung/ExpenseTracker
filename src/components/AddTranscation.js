import React,{useState,useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
export const AddTranscation = () => {
    const {addTransaction}=useContext(GlobalContext)
    const [text,setText]=useState('');
    const [amount,setAmount]=useState(0);
  
    const onSubmit=e=>{
        e.preventDefault();

        const newTransaction={
            id:Math.floor(Math.random()*100000000),
            text,
            amount:+amount
        }
        addTransaction(newTransaction)
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label for="text">Text</label>
                    <input type="text" 
                    value={text} 
                    onChange={(e)=>setText(e.target.value)}
                    placeholder="Please Input Your Detail..." />
                </div>

                <div className="form-control">
                    <label for="amount">Amount
                    <br/>
                    </label>
                    <input type="number" 
                    value={amount}
                    onChange={(e)=>setAmount(e.target.value)}
                    placeholder="Enter amount..." />
                </div>
                <button 
                className="btn"
                >Add Transcation</button>
            </form>
        </>
    )
}
