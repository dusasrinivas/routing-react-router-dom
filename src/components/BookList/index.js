import {Link} from 'react-router-dom'


const BookList=()=>(
    <div>
       
    <h1>BookList route</h1>
    <Link to='/books/1'>Book 1</Link>
    <br/>
    <Link to='/books/2'>Book 2</Link>
    <br/>
    <Link to="/books/new">New book</Link>
    </div>
)

export default BookList
