import React from 'react'
import './App.css'
import AddExpenseForm from './AddExpenseForm'

const Header = () => {
  return (
    <>
    <h1 id="increaseHeight"><strong>Expence Tracker</strong></h1>
    <p>Start taking control of your finances and life. Record</p>
    <p>categorize and analyze your spending.</p>
    <br />
    <div>
        <AddExpenseForm/>
    </div>
    </>

  )
}

export default Header