
import { Routes, Route } from 'react-router-dom';
import './App.css';
import BookList from './components/BookList';
import Home from './components/Home';
import About from './components/About';
import Book from './components/Book'
import NewBook  from './components/NewBook';
import Header from './components/Header';
import NotFound from './components/NotFound'




const App=()=>(
  <>
  <Header/>
  <Routes>
    <Route  path="/" element={<Home/>}/>
    <Route  path="/about" element={<About/>}/>
    <Route  path="/books" element={<BookList/>}/>
    <Route  path="/books/:id" element={<Book/>}/>
    <Route  path="/books/new" element={<NewBook/>}/>
    <Route  path="*"  element={<NotFound/>}/>

  </Routes>
  </>
)

export default App;
