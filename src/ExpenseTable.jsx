import React from 'react'

const ExpenseTable = ({children}) => {
  return (
    <>
    <table>
        <thead>
            <th>Expense</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
        </thead>
        <tbody>
            {children}
        </tbody>
    </table>
    </>
  )
}

export default ExpenseTable