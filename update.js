import { Link } from 'react-router-dom';

function Update() {
    return(
        
        <div>

    <h1 class="text1">Inventory Management</h1>
    <h1 class="text1">Update items</h1>

    <Link to="/add" className="button button1">Add item</Link>
    <Link to="/update" className="button button2">Update Item</Link>
    <Link to="/remove" className="button button3">Remove Item</Link>
    <Link to="/displaycat" className="button button4">Display by Category</Link>
    <Link to="/displayall" className="button button5">Display all</Link>
    <Link to="/search" className="button button6">Search</Link>
</div>


)}

export default Update;