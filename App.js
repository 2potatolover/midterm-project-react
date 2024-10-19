import './App.css';
import Home from './pages/home.js'
import Form from './pages/form.js';   
import Remove from './pages/remove.js';  
import Displaycat from './pages/displaycat.js'
import  { BrowserRouter, Routes, Route} from 'react-router-dom'
import Update from './pages/update.js';
import Displayall from './pages/displayall.js'
import Search from './pages/search.js'

function App() {
  return (
<div>
<BrowserRouter>
<Routes>
  <Route index element = {<Home />} />
  <Route path="/home" element= {<Home />}/>
  <Route path="/update" element= {<Update />}/>
  <Route path="/add" element= {<Form />} />
  <Route path="/remove" element= {<Remove />} />
  <Route path="/displaycat" element= {<Displaycat />} />
  <Route path="/displayall" element= {<Displayall />} />
  <Route path="/search" element= {<Search />} />

</Routes>
</BrowserRouter>
    </div>
  );
}


export default App;
