import logo from './logo.svg';
import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement, incrementByAmount, addUser} from './redux/reducers/reducer'
//import { addUser } from './redux/reducers/userReducer';
import './App.css';

function App() {
  const value = useSelector((state)=> state.counter.value);
  const allUser = useSelector((state)=> state.counter.names);
  const [name, setName] = useState();
  console.log('allUser is ', allUser);
  const dispatch = useDispatch();
  const handleAddUser = () =>{
    const tempArr = [...allUser,name];
    dispatch(addUser(tempArr));

  }
  return (
    <div className="App">
      <h1>{value}</h1>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(incrementByAmount(10))}>Increment by 10</button>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
      <button onClick={handleAddUser}>Add User</button>
      {allUser?.map((name)=>{
        return(
          <h3>{name}</h3>
        )
      })}
    </div>
  );
}

export default App;
 