import { useParams } from "react-router-dom"

const NewBook=()=>{
    const {id}=useParams()

 return   (
    <h1>its new book {id}</h1>
        )
    }
export default NewBook