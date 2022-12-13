import { useParams } from "react-router-dom"


const Book=()=>{
    const {id}=useParams()

    
    return (
            <h1>each book {id}</h1>
        )
    }

export default Book
