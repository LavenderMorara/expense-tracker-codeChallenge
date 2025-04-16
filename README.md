

# 💼 Expense Tracker App (Vite + React)



Live Demo - https://expense-tracker-code-challenge-sable.vercel.app/

---

## 🚀 Features

- ➕ **Add Expenses** – Enter name, amount, category, date, and a short description
- 🔍 **Live Search Filter** – Filter expenses by name as you type
- 🗑️ **Delete Expense** – Remove rows using a clickable trash icon
- ✨ **Neon UI** – Stylish glowing inputs with oval edges
- 📋 **Dynamic Table** – View all your expenses in a clean format

---

## 🛠️ Tech Stack

- ⚡ [Vite](https://vitejs.dev/) for fast dev/build
- ⚛️ React with Hooks (`useState`)
- 🎨 Inline SVG Icons
- 🧼 CSS for styling

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/LavenderMorara/expense-tracker-codeChallenge.git
cd expense-tracker-codeChallenge
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
npm run dev
```

The app runs locally at:  
[http://localhost:5173](http://localhost:5173)

---


## 🧠 Core Logic

### ➕ Adding an Expense

The form collects:
- Name
- Amount
- Category
- Date
- Description

It pushes a new object into `formData` state.

### 🔍 Filtering Expenses
filters either by name or category and can carry out the search with just few characters that make up the word. 

```js
const handleSearchTerm =(e)=>{
        e.preventDefault()
        let newItems = formData.filter(expense => expense.name.toLowerCase().includes(searchTerm.toLowerCase())||
        expense.category.toLowerCase().includes(searchTerm.toLowerCase()))
        setFormData(newItems)
    }
```

### 🗑️ Deleting an Expense

```js
function deleteExpense(id){
    const updatedExpenses = formData.filter((data) => data.id !== id);
    setFormData(updatedExpenses)
   }
 
```

Triggered via:

```jsx
<button onClick={() => deleteExpense(data.id)}>
  {data.icon}
</button>
```



## 🎨 Styling Highlights

- 🔵 Oval/rounded inputs using `border-radius: 50px`
- 💡 Neon-glow on focus:
  ```css
  input:focus {
    box-shadow: 0 0 8px #0ff, 0 0 15px #0ff;
  }
  ```
- 👁️ Minimal UI with responsive layout

---

## 🔧 Future Improvements

- 💾 Persist data with localStorage or backend
- 📊 Charts for category spending
- 🗂️ Filter by category or date
- ✏️ Add editing functionality

---

## 👩‍💻 Author

Made with ❤️ by [LavenderMorara](https://github.com/LavenderMorara)  
🔗 [GitHub Repo](https://github.com/LavenderMorara/expense-tracker-codeChallenge)

🌐 [Live Demo](https://expense-tracker-code-challenge-sable.vercel.app/)



