import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Joke from './joke'
import JokeForm from './jokeform'

function Form(){
    const [jokes, setJokes] = useState([])
    
      const handleAddJoke = (text) => {
        const joke = {
          text,
          id: window.self.crypto.randomUUID(),
          likes: 0,
          money: 0
        }
        setJokes([joke, ...jokes])   
        
       }
    
      const handleDeleteJoke = (id) => {
        setJokes(jokes.filter(joke => joke.id !== id))
        console.log("delete joke", id)
      }
    
      const handleLike1 = (id) => {
        setJokes(jokes.map(joke => {
          if (joke.id === id) {
            return {...joke, likes: joke.likes + 1}
          } else {
            return joke
          }
        }))
      }
      const handleLike2 = (id) => {
        setJokes(jokes.map(joke => {
          if (joke.id === id) {
            return {...joke, likes: joke.likes + 10}
          } else {
            return joke
          }
        }))
      }
      const handleLike3 = (id) => {
        setJokes(jokes.map(joke => {
          if (joke.id === id) {
            return {...joke, likes: joke.likes + 100}
          } else {
            return joke
          }
        }))
      }
    
      const handleDislike1 = (id) => {
        setJokes(jokes.map(joke => {
          if (joke.id === id) {
            return {...joke, likes: joke.likes - 1}
          } else {
            return joke
          }
        }))
      }

      const handleDislike2 = (id) => {
        setJokes(jokes.map(joke => {
          if (joke.id === id) {
            return {...joke, likes: joke.likes - 10}
          } else {
            return joke
          }
        }))
      }
      const handleDislike3 = (id) => {
        setJokes(jokes.map(joke => {
          if (joke.id === id) {
            return {...joke, likes: joke.likes - 100}
          } else {
            return joke
          }
        }))
      }
      const handlePrice1 = (id) => {
        setJokes(jokes.map(joke => {
          if (joke.id === id) {
            return {...joke, money: joke.money + 1}
          } else {
            return joke
          }
        }))
      }
      const handlePrice2 = (id) => {
        setJokes(jokes.map(joke => {
          if (joke.id === id) {
            return {...joke, money: joke.money + 10}
          } else {
            return joke
          }
        }))
      }
      const handlePrice3 = (id) => {
        setJokes(jokes.map(joke => {
          if (joke.id === id) {
            return {...joke, money: joke.money + 100}
          } else {
            return joke
          }
        }))
      }
    
      const handlePrice4 = (id) => {
        setJokes(jokes.map(joke => {
          if (joke.id === id) {
            return {...joke, money: joke.money - 1}
          } else {
            return joke
          }
        }))
      }

      const handlePrice5 = (id) => {
        setJokes(jokes.map(joke => {
          if (joke.id === id) {
            return {...joke, money: joke.money - 10}
          } else {
            return joke
          }
        }))
      }
      const handlePrice6 = (id) => {
        setJokes(jokes.map(joke => {
          if (joke.id === id) {
            return {...joke, money: joke.money - 100}
          } else {
            return joke
          }
        }))
      }
      const handleSort1 = () => {
        setJokes([...jokes].sort((a, b) => b.likes - a.likes))
      }
      const handleSort2 = () => {
        setJokes([...jokes].sort((a, b) => a.likes - b.likes))
      }
      const handleSort3 = () => {
        setJokes([...jokes].sort((a, b) => b.money - a.money))
      }
      const handleSort4 = () => {
        setJokes([...jokes].sort((a, b) => a.money - b.money))
      }

      return (
        <div className="">
            
          <h1>Dad Jokes</h1>
          <Link to="/add" className="button button1">Add item</Link>
    <Link to="/update" className="button button2">Update Item</Link>
    <Link to="/remove" className="button button3">Remove Item</Link>
    <Link to="/displaycat" className="button button4">Display by Category</Link>
    <Link to="/displayall" className="button button5">Display all</Link>
    <Link to="/search" className="button button6">Search</Link>
    <br></br>    <br></br>


          <button onClick={handleSort1}>Sort by Quantity (Ascending)</button>
          <button onClick={handleSort2}>Sort by Quantity (Descending)</button>
          <button onClick={handleSort3}>Sort by Price (Ascending)</button>
          <button onClick={handleSort4}>Sort by Price (Descending)</button>
    
          <JokeForm onAddJoke={handleAddJoke} />

          {jokes.map(joke => (

            <Joke 
            onDelete={handleDeleteJoke} 
            key={joke.id} 
            onLike1={handleLike1}
            onLike2={handleLike2}
            onLike3={handleLike3}
            onDislike1={handleDislike1}
            onDislike2={handleDislike2}
            onDislike3={handleDislike3}
            onMoney1={handlePrice1}
            onMoney2={handlePrice2}
            onMoney3={handlePrice3}
            onMoney4={handlePrice4}
            onMoney5={handlePrice5}
            onMoney6={handlePrice6}

            {...joke} />

          ))}
    
        </div>
      )
    }
export default Form