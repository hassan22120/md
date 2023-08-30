// Import necessary dependencies
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

// Create a userContext object
export const userContext = createContext();


// Create a UserProvider component
const UserProvider = ({ children }) => {
// Set initial state for users array

const [users, setUsers] = useState([]);

// Function to get user data from API endpoint
const getData = async () => {
try {
const res = await axios.get('https://panorbit.in/api/users.json');
const userData = res.data.users;
setUsers(userData);
} catch (error) {
console.error(error);
}
};

// Call getData function on component mount using useEffect hook
useEffect(() => {
getData();
}, []);

// Pass users state, getData function and user data from local storage state as values to userContext provider
return (
<userContext.Provider value={{ users, getData }}>
{children}
</userContext.Provider>
)
}

// Export UserProvider component
export default UserProvider;