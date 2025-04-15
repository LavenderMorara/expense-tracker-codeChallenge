
const AddExpenseForm = ({handleSubmit, handleChange, newExpense}) => {
    

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
     required
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
     <input
     id="submit"
     type="submit"
     value= "Add Expense"
     />
     </form>
    </div>

   </div>
  )
}

export default AddExpenseForm