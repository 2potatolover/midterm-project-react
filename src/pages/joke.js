import { useState } from "react"

export default function Joke({ id, text, onDelete, likes, onLike1, onLike2, onLike3, onDislike1, onDislike2, onDislike3, onMoney1, onMoney2, onMoney3, onMoney4, onMoney5, onMoney6, money }) {

  const handleLike1 = () => {
    onLike1(id)
  }

  const handleLike2 = () => {
    onLike2(id)
  }
  const handleLike3 = () => {
    onLike3(id)
  }
  const handleDislike1 = () => {
    onDislike1(id)
  }
  const handleDislike2 = () => {
    onDislike2(id)
  }
  const handleDislike3 = () => {
    onDislike3(id)
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
      <p>Quantity: {likes}</p>
      <p>id: {id}</p>
      <button onClick={handleLike1}>+1</button>
      <button onClick={handleLike2}>+10</button>
      <button onClick={handleLike3}>+100</button>
      <button onClick={handleDislike1}>-1</button>
      <button onClick={handleDislike2}>-10</button>
      <button onClick={handleDislike3}>-100</button>
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