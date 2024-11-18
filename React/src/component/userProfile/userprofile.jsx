import React, { useEffect, useState } from 'react';
import img from '../Assets/p.png';
import axios from 'axios';

function App({ id }) {
    const [deleted, setDeleted] = useState(false);
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {
        const storedFullname = localStorage.getItem('fullname');
        const storedEmail = localStorage.getItem('email');
        const storedAddress = localStorage.getItem('address');

        if (storedFullname) {
            setFullname(storedFullname);
        }
        if (storedEmail) {
            setEmail(storedEmail);
        }
        if (storedAddress) {
            setAddress(storedAddress);
        }
    }, []);

    const deleteUser = async () => {
        try {
            const response = await axios.delete(`http://localhost:8081/user/users/${id}`);
            console.log(response.data); // Assuming backend returns a success message
            setDeleted(true);
        } catch (error) {
            console.error('Error deleting user:', error);
            if (error.response) {
                console.error('Server responded with:', error.response.data);
                // Handle specific error messages from the server
            } else if (error.request) {
                console.error('No response received:', error.request);
                // Handle request without receiving a response
            } else {
                console.error('Error setting up request:', error.message);
                // Handle other types of errors
            }
            // Display error message to the user, e.g., set a state to show an error message
        }
    };

    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <img src={img} alt="User" />
                    <h2>User Data</h2>
                </div>
                <div>
                    <strong>Fullname:</strong> {fullname ? fullname : 'Name not found'}
                </div>
                <div>
                    <strong>Email:</strong> {email ? email : 'Email not found'}
                </div>
                <div>
                    <strong>Address:</strong> {address ? address : 'Address not found'}
                </div>
                <button onClick={deleteUser} disabled={deleted}>
                    Delete Account
                </button>
            </div>
        </div>
    );
}

export default App;
