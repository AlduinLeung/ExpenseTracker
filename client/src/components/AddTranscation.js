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
            amount:+amount,
            
        }
        addTransaction(newTransaction);  //pass the transaction
        setAmount(0);    //
        setText("");     // reset the input area
    }
    const btnOnClick=(e)=>{
        
    }
    
    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label>Text</label>
                    <input type="text" 
                    value={text} 
                    onChange={(e)=>setText(e.target.value)}
                    placeholder="Please Input Your Detail..." />
                </div>

                <div className="form-control">
                    <label>Amount
                    <br/>
                    </label>
                    <input type="number" 
                    value={amount}
                    onChange={(e)=>setAmount(e.target.value)}
                    placeholder="Enter amount..." />
                </div>
                <button 
                className="btn"
                onClick={btnOnClick}
                >Add Transcation</button>
            </form>
        </>
    )
}
