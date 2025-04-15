import React,{useState} from 'react'
import { expenses,generateNextId,trashIcon  } from './Expenses'
import ExpenseTable from './ExpenseTable'
import Search from './Search'
import AddExpenseForm from './AddExpenseForm'


const Home = () => {
    const [formData,setFormData]=useState(expenses)
    const [searchTerm, setSearchTerm] = useState("")


    const [newExpense, setNewExpense]=useState({
        name:"",
        icon:trashIcon,
        description:"",
        category:"",
        amount:"",
        date:""
    })

    function handleSubmit(e){
        e.preventDefault()
        const newEntry={
            id:generateNextId(),
            icon:trashIcon,
            name:newExpense.name,
            description:newExpense.description,
            category: newExpense.category,
            amount:newExpense.amount,
            date:newExpense.date
        }
        const updatedExpenses=[...formData,newEntry]
        setFormData(updatedExpenses)
        setNewExpense({name:"", icon:trashIcon, description:"", category:"", amount:"", date:""})
        console.log(updatedExpenses)
    }

    function handleChange(e){
        const key=e.target.id
       
       const value= e.target.value

       setNewExpense({...newExpense,[key]:value})
       
    }

    const handleOnchangeSearch =(e) => {
        setSearchTerm(e.target.value)

    }
   

    const handleSearchTerm =(e)=>{
        e.preventDefault()
        let newItems = formData.filter(expense => expense.name.toLowerCase() === searchTerm.toLowerCase())
        setFormData(newItems)
    }
      
  return (
    <>
    <div id="parentDiv">
        <AddExpenseForm  handleSubmit={handleSubmit} handleChange={handleChange} newExpense={newExpense}/>   
        <div id="tableAndSearch">  
        <Search searchTerm ={searchTerm}  handleSearchTerm ={handleSearchTerm} handleOnchangeSearch={handleOnchangeSearch}/>
        <ExpenseTable formData={formData} setFormData={setFormData} />
        </div>
    </div>
    </>
    
  )
}

export default Home