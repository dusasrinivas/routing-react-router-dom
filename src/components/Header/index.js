import {Link} from 'react-router-dom'

import './index.css'


const Header=()=>{


    return (
        <ul className='container-ul'>
           <Link className='link' to="/">  <li className='list-el'>Home</li></Link>
           <Link className='link' to="/books"><li className='list-el'>BookList</li></Link>  
           <Link className='link' to="/about"> <li className='list-el'>About</li></Link>  

        </ul>

        )
    }

    export default Header
