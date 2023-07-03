import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const [msg, setMsg] = useState("");
    const user = JSON.parse(sessionStorage.getItem('user'))
    const navigate = useNavigate()

    const handleLogout = () =>{
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user')
        navigate('/login');
    }

    useEffect(() => {
        fetchData();
      }, []);

    const fetchData = async () =>{
        try{
        console.log("called fetch");
        const token = sessionStorage.getItem('token');
        
        const response = await fetch("http://localhost:3001/user/dashboard", {
            method : "GET",
            headers : {
                authorization : `Bearer ${token}`,
                'Content-type' : 'application/json'
            }
        });
        const data = await response.json();
        setMsg(data.message)
        }
        catch (error){
            console.error(error);
        }
    }


    

  return (
    <div>
        Dashboard
        <h1>{msg}</h1>
        <h1>Welcome to mark my tiffin {user.name}</h1>
        <Button onClick={handleLogout} >Logout</Button>
    </div>
  )
}


export default Dashboard;