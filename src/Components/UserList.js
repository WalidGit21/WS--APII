import React,{useEffect,useState} from 'react';
import UserCard from './UserCard';
import axios from "axios";

const UserList = () => {
    const [users ,setUsers] = useState([]);
   
    useEffect(()=>{
  const url ="https://jsonplaceholder.typicode.com/users";
  axios.get(url)
  .then((response)=>response.data)
  .then((resData)=>setUsers(resData))
  .catch(function (error){
    console.log(error)
  })
    },[]);
/*     for (let i = 0; i < 20; i++) {
        
            <h1>`${document.write(JSON.stringify(users[i]))}`</h1> 
           
           } */
       
  return (
   
  <div>

<h2>Welcome, this is the List of Users </h2>

<br></br>
<div style={{display:'flex',flexWrap:'wrap',marginLeft:200,marginTop:100}}>
{users.map((user) => (


          <UserCard user={user} key={user.id} />
        ))}
    </div>
    </div>
  )
}

export default UserList