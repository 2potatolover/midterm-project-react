import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Form = () => {
const [item,setItem] = useState({id:'',name:'',quantity:'',})
const [newItem, setNewItem] = useState("");

}

const HandleChange = (e) => {
setItem({...item,[e.target.name]:e.target.value})


    return (

<div>
    <h1 class="text1">Inventory Management</h1>
    <h1 class="text1">Add item </h1>


<Link to="/add" className="button button1">Add item</Link>
    <Link to="/update" className="button button2">Update Item</Link>
    <Link to="/remove" className="button button3">Remove Item</Link>
    <Link to="/displaycat" className="button button4">Display by Category</Link>
    <Link to="/displayall" className="button button5">Display all</Link>
    <Link to="/search" className="button button6">Search</Link>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

<div>
    <form className='form'>
        Enter items 
     <div className='form-row'>
        <br></br>
        <label htmlFor='name' className='form-label'>
            name
        </label>
        <input type='text' className='form-input' id='name' value={item.name} onChange={HandleChange} name='name'/>
     </div>
     <div className='form-row'>
        <br></br>
        <label htmlFor='quantity' className='form-label'>
            quantity
        </label>
        <input type='number' className='form-input' id='quantity' value={item.quantity} onChange={HandleChange} name='quantity'/>
     </div>

     <button type='submit' className='btn btn-block'>
        submit
     </button>
    </form>
</div>
</div>
)


}

export default Form