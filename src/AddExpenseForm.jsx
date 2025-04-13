import React,{useState} from 'react'
import { expenses,generateNextId } from './expenses'
import ExpenseTable from './ExpenseTable'

const AddExpenseForm = () => {
    const [formData,setFormData]=useState(expenses)

    const [newExpense, setNewExpense]=useState({
        name:"",
        description:"",
        category:"",
        amount:"",
        date:""
    })

    function handleSubmit(e){
        e.preventDefault()
        const newEntry={
            id:generateNextId(),
            name:newExpense.name,
            description:newExpense.description,
            category: newExpense.category,
            amount:newExpense.amount,
            date:newExpense.date
        }
        const updatedExpenses=[...formData,newEntry]
        setFormData(updatedExpenses)
        setNewExpense({name:"", description:"", category:"", amount:"", date:""})
        console.log(updatedExpenses)
    }

    function handleChange(e){
        const key=e.target.id
       
       const value= e.target.value

       setNewExpense({...newExpense,[key]:value})
       
    }
  return (
   <div id="parentDiv"> 
    <div id="form-container">
     <h2 id="miniheader"><strong>Add Expense</strong></h2>
     <p>Enter your expense details below</p>
     <br />
     <form id="AddExpense" onSubmit={handleSubmit}>
     <input 
     id="name"
     placeholder="Enter expense name"
     className="formInput"
     type="text"
     onChange={handleChange}
     value={newExpense.name}
     require
      />
     <input 
     id="description"
     placeholder="Enter expense description"
     className="formInput"
     type="text" 
     onChange={handleChange}
     value={newExpense.description}
     required
     />
     <input 
     id="category"
     placeholder="Enter expense category"
     className="formInput"
     type="text" 
     onChange={handleChange}
     value={newExpense.category} 
     required
     />
     <input 
     id="amount"
     placeholder="Enter amount"
     className="formInput"
     type="text"
     onChange={handleChange} 
     value={newExpense.expense}
     required
     />
     <input 
     id="date"
      placeholder="mm/dd/yyyy"
     className="formInput"
     type="date" 
     onChange={handleChange}
     value={newExpense.date}
     required
     />
     <button
     id="submit"
     type="submit"
     >
     Submit 
     </button>
     </form>
    </div>
    <ExpenseTable>
        {formData.map((data)=>(
            <tr key={data.id}>
               <td>{data.name}</td>
               <td>{data.description}</td>
               <td>{data.category}</td>
               <td>{data.amount}</td>
               <td>{data.date}</td>
            </tr>
        ))}    
               
    </ExpenseTable>

   </div>
  )
}

export default AddExpenseForm