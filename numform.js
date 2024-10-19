import { useState } from "react"

export default function NumForm({ onAddItem }) {
  const [text, setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddItem(text)
    setText("")       


  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">New Item</label>
      <input
        type="text"
        id="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Item</button>
    </form>
  )
}
