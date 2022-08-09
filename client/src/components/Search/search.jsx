import {React ,useState} from 'react'
import {useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { getByName} from '../../Redux/Actions/actions.js'
import '../../Style/Search.css'

function validacion(name){
    let error = ''
    if(!/^[A-Za-z0-9-ñ\s]+$/g.test(name)){
        error = 'no se pueden colocar caracteres especiales'
    }else if(name.length > 30){
        error = 'no se puede colocar mas de 30 letras'
    }
    return error
}
// /[$%&|<>#]/

export default function Search (){
const [name, setName]= useState('')
const [error, setError] = useState('')
const dispatch = useDispatch()
// const navegar = useNavigate()

function handleInputChange (e){
    e.preventDefault()
    setName(e.target.value)
    setError(validacion(e.target.value))
    if(name.length === 0){
        setError('')
    }
}
function handleSubmit(e){
    e.preventDefault();
    const errorSave = validacion(name)
    if(Object.values(errorSave).length !== 0){
        alert('no debes tener errores para poder buscar')
        setError('')
    }
    else{
    e.preventDefault()
    dispatch(getByName(name))
    setName('')
    setError('')
    // navegar('/home')
    }
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
     {error && (<div className='error'>{error}</div>)}
   

   </div>
   )
}

    
    
       
      
        





