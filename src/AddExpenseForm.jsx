import React from 'react'
import { expenses,generateNextId } from './expenses'

const AddExpenseForm = () => {
  return (
   <div>
    <div id="form-container">
     <h2 id="miniheader"><strong>Add Expense</strong></h2>
     <p>Enter your expense details below</p>
     <br />
     <form id="AddExpense">
     <input 
     id="name"
     placeholder="Enter expense name"
     class="formInput"
     type="text"
      />
     <input 
     id="description"
     placeholder="Enter expense description"
     class="formInput"
     type="text" 
     />
     <input 
     id="category"
     placeholder="Enter expense category"
     class="formInput"
     type="text" 
     />
     <input 
     id="expense"
     placeholder="Enter amount"
     class="formInput"
     type="text" 
     />
     <input 
     id="date"
      placeholder="mm/dd/yyyy"
     class="formInput"
     type="text" 
     />
     <button
     id="submit"
     type="submit"
     >
     Submit 
     </button>
     </form>
     </div>
   </div>
  )
}

export default AddExpenseForm