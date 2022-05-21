import {React ,useState} from 'react'
import {useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { getByName} from '../../Redux/Actions/actions.js'
import '../../Style/Search.css'

export default function Search (){
const [name, setName]= useState('')
const dispatch = useDispatch()
// const navegar = useNavigate()

function handleInputChange (e){
    e.preventDefault()
    setName(e.target.value)
}
function handleSubmit(e){
    e.preventDefault()
    dispatch(getByName(name))
    setName('')
    // navegar('/home')
}
return(
    <div className='search'>
    <input
    className='input'
    type='text'
    value={name}
    placeholder=' search by name'
    onChange={(e)=> handleInputChange(e)}
    />
   <button className='btn' type='submit' onClick={(e)=> handleSubmit(e)}>search</button>
    </div>
   )
}
    
    
       
      
        





