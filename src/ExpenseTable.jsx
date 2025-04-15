import React from 'react'


const ExpenseTable = ({formData,setFormData}) => {
  
  function deleteExpense(id){
    const updatedExpenses = formData.filter((item) => item.id !== id);
    setFormData(updatedExpenses)
   }
 
  return (
    <>
    <table>
        <thead>
            <tr>
            <th></th>
            <th>Expense</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
            </tr>
        </thead>
        <tbody>
        {formData.map((data)=>(
            <tr key={data.id}>
              <td>
                  <button onClick={() => deleteExpense(data.id)} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
                  {data.icon}
                  </button>
               </td>
               <td>{data.name}</td>
               <td>{data.description}</td>
               <td>{data.category}</td>
               <td>{data.amount}</td>
               <td>{data.date}</td>
            </tr>
        ))}   
              
        </tbody>
    </table>
    </>
  )
}

export default ExpenseTable