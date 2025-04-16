export const trashIcon = (
  <svg 
     className="svg"
               xmlns="http://www.w3.org/2000/svg" 
               height="35px" 
               viewBox="0 0 448 512" 
               fill="currentColor">
               <path d="M135.2 17.7C140.5 7.2 151.2 0 163.2 0h121.6c12 0 22.7 7.2 28 17.7L328 32H432c8.8 
               0 16 7.2 16 16s-7.2 16-16 16h-16.1l-26.7 371.3c-1.8 24.8-22.5 44.7-47.3 
               44.7H106.1c-24.8 0-45.5-19.9-47.3-44.7L32 64H16C7.2 64 0 56.8 0 48s7.2-16 
               16-16H120l15.2-14.3zM170.4 80h107.2l-4.4-8.6c-.8-1.5-2.4-2.4-4.1-2.4H179c-1.7 
               0-3.3 .9-4.1 2.4l-4.4 8.6zM144 160c8.8 0 16 7.2 16 16V400c0 8.8-7.2 
               16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16zm80 0c8.8 0 16 7.2 
               16 16V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16zm96 
               16V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16s16 
               7.2 16 16z"/>
               </svg>
);

export const expenses = [
    {
      id: 1,
      icon:trashIcon,
      name: "Groceries",
      description: "Weekly supermarket shopping",
      category: "Food",
      amount: 75.50,
      date: "2025-04-10"
    },
    {
      id: 2,
      icon:trashIcon,
      name: "Internet Bill",
      description: "Monthly broadband payment",
      category: "Utilities",
      amount: 45.00,
      date: "2025-04-05"
    },
    {
      id: 3,
      icon:trashIcon,
      name: "Movie Night",
      description: "Cinema and snacks",
      category: "Entertainment",
      amount: 30.25,
      date: "2025-04-08"
    }
  ];
  
  export const generateNextId = ((id) => () => ++id)(3);