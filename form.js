import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Num from './num'
import NumForm from './numform'

function Form(){
    const [items, setItem] = useState([])

      const handleAddItem = (text) => {
        const item = {
          text,
          id: window.self.crypto.randomUUID(),
          quan: 0,
          money: 0
        }
        setItem([item, ...items])   
        
       }
    
      const handleDeleteItem = (id) => {
        setItem(items.filter(item => item.id !== id))
      }
      

      const handleQuantity1 = (id) => {
        setItem(items.map(item => {
          if (item.id === id) {
            return {...item, quan: item.quan + 1}
          } else {
            return item
          }
        }))
      }
      const handleQuantity2 = (id) => {
        setItem(items.map(item => {
          if (item.id === id) {
            return {...item, quan: item.quan + 10}
          } else {
            return item
          }
        }))
      }
      const handleQuantity3 = (id) => {
        setItem(items.map(item => {
          if (item.id === id) {
            return {...item, quan: item.quan + 100}
          } else {
            return item
          }
        }))
      }
    
      const handleQuantity4 = (id) => {
        setItem(items.map(item => {
          if (item.id === id) {
            return {...item, quan: item.quan - 1}
          } else {
            return item
          }
        }))
      }

      const handleQuantity5 = (id) => {
        setItem(items.map(item => {
          if (item.id === id) {
            return {...item, quan: item.quan - 10}
          } else {
            return item
          }
        }))
      }
      const handleQuantity6 = (id) => {
        setItem(items.map(item => {
          if (item.id === id) {
            return {...item, quan: item.quan - 100}
          } else {
            return item
          }
        }))
      }
      const handlePrice1 = (id) => {
        setItem(items.map(item => {
          if (item.id === id) {
            return {...item, money: item.money + 1}
          } else {
            return item
          }
        }))
      }
      const handlePrice2 = (id) => {
        setItem(items.map(item => {
          if (item.id === id) {
            return {...item, money: item.money + 10}
          } else {
            return item
          }
        }))
      }
      const handlePrice3 = (id) => {
        setItem(items.map(item => {
          if (item.id === id) {
            return {...item, money: item.money + 100}
          } else {
            return item
          }
        }))
      }
    
      const handlePrice4 = (id) => {
        setItem(items.map(item => {
          if (item.id === id) {
            return {...item, money: item.money - 1}
          } else {
            return item
          }
        }))
      }

      const handlePrice5 = (id) => {
        setItem(items.map(item => {
          if (item.id === id) {
            return {...item, money: item.money - 10}
          } else {
            return item
          }
        }))
      }
      const handlePrice6 = (id) => {
        setItem(items.map(item => {
          if (item.id === id) {
            return {...item, money: item.money - 100}
          } else {
            return item
          }
        }))
      }


      const handleSort1 = () => {
        setItem([...items].sort((a, b) => b.quan - a.quan))
      }
      const handleSort2 = () => {
        setItem([...items].sort((a, b) => a.quan - b.quan))
      }
      const handleSort3 = () => {
        setItem([...items].sort((a, b) => b.money - a.money))
      }
      const handleSort4 = () => {
        setItem([...items].sort((a, b) => a.money - b.money))
      }
      

      return (
        <div className="">
            
            <h1 class="text1">Inventory Management</h1>
            <h1 class="text1">Add item</h1>
          <Link to="/add" className="button button1">Add item</Link>
    <Link to="/update" className="button button2">Update Item</Link>
    <Link to="/remove" className="button button3">Remove Item</Link>
    <Link to="/displaycat" className="button button4">Display by Category</Link>
    <Link to="/displayall" className="button button5">Display all</Link>
    <Link to="/search" className="button button6">Search</Link>
    <br></br>    <br></br>


          <button onClick={handleSort1}>Sort by Quantity (Descending)</button>
          <button onClick={handleSort2}>Sort by Quantity (Ascending)</button>
          <button onClick={handleSort3}>Sort by Price (Descending)</button>
          <button onClick={handleSort4}>Sort by Price (Ascending)</button>
    
          <NumForm onAddItem={handleAddItem} />

          {items.map(item => (

            <Num
            onDelete={handleDeleteItem} 
            key={item.id} 
            onQuan1={handleQuantity1}
            onQuan2={handleQuantity2}
            onQuan3={handleQuantity3}
            onQuan4={handleQuantity4}
            onQuan5={handleQuantity5}
            onQuan6={handleQuantity6}
            onMoney1={handlePrice1}
            onMoney2={handlePrice2}
            onMoney3={handlePrice3}
            onMoney4={handlePrice4}
            onMoney5={handlePrice5}
            onMoney6={handlePrice6}

            {...item} />

          ))}
    
        </div>
      )
    }
export default Form