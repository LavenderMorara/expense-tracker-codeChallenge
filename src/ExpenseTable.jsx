import React from 'react'
import { expenses } from './expenses'

const ExpenseTable = ({children}) => {
  return (
    <>
    <table>
        <thead>
            <tr>
            <th>Expense</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
            </tr>
        </thead>
        <tbody>
            {children}
        </tbody>
    </table>
    </>
  )
}

export default ExpenseTable