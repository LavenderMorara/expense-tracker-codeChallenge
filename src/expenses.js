export const expenses = [
    {
      id: 1,
      name: "Groceries",
      description: "Weekly supermarket shopping",
      category: "Food",
      amount: 75.50,
      date: "2025-04-10"
    },
    {
      id: 2,
      name: "Internet Bill",
      description: "Monthly broadband payment",
      category: "Utilities",
      amount: 45.00,
      date: "2025-04-05"
    },
    {
      id: 3,
      name: "Movie Night",
      description: "Cinema and snacks",
      category: "Entertainment",
      amount: 30.25,
      date: "2025-04-08"
    }
  ];
  
  export const generateNextId = ((id) => () => ++id)(3);