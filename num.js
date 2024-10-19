import { useState } from "react"

export default function Num({ id, text, onDelete, quan, onQuan1, onQuan2, onQuan3, onQuan4,onQuan5,onQuan6, onMoney1, onMoney2, onMoney3, onMoney4, onMoney5, onMoney6, money }) {

  const handleQuantity1 = () => {
    onQuan1(id)
  }

  const handleQuantity2 = () => {
    onQuan2(id)
  }
  const handleQuantity3 = () => {
    onQuan3(id)
  }
  const handleQuantity4 = () => {
    onQuan4(id)
  }
  const handleQuantity5 = () => {
    onQuan5(id)
  }
  const handleQuantity6 = () => {
    onQuan6(id)
  }
  
  const handlePrice1 = () => {
    onMoney1(id)
  }

  const handlePrice2 = () => {
    onMoney2(id)
  }
  const handlePrice3 = () => {
    onMoney3(id)
  }
  const handlePrice4 = () => {
    onMoney4(id)
  }
  const handlePrice5 = () => {
    onMoney5(id)
  }
  const handlePrice6 = () => {
    onMoney6(id)
  }


  return (
    <div>
            <p>{text}</p>
      <p>Quantity: {quan}</p>
      <p>id: {id}</p>
      <button onClick={handleQuantity1}>+1</button>
      <button onClick={handleQuantity2}>+10</button>
      <button onClick={handleQuantity3}>+100</button>
      <button onClick={handleQuantity4}>-1</button>
      <button onClick={handleQuantity5}>-10</button>
      <button onClick={handleQuantity6}>-100</button>
      <button onClick={() => onDelete(id)}>delete</button>
      <p>Price: {money}</p>
      <button onClick={handlePrice1}>+1</button>
      <button onClick={handlePrice2}>+10</button>
      <button onClick={handlePrice3}>+100</button>
      <button onClick={handlePrice4}>-1</button>
      <button onClick={handlePrice5}>-10</button>
      <button onClick={handlePrice6}>-100</button>
      <button onClick={() => onDelete(id)}>delete</button>
    </div>
  )
}