import React, { useState , useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import NavBar from '../NavBar/navBar.jsx'
import {getAllTemperaments , createDog} from '../../Redux/Actions/actions.js'
import '../../Style/CreateDog.css'
// import validate from './validate.jsx'
// !/[0-9-]+$/.test(input.weight) &&
function eight (string){
    let separo = string.split('-')
    if(Number(separo[0]) > Number(separo[1])){
        return true
    }else{
        return false
    }
}

 function validate (input) {
  let errors = {};
  if (!/[A-Z]/.test(input.name)) {       // la primera letra en mayusculas
    errors.name = 'You must put a name with its first letter in capital letters';
} 
else if (!/^[A-Za-z0-9-ñ\s]+$/g.test(input.life_span)){ 
  errors.life_span = 'life span is required (can only contain numbers and letters)'
}
  else if (!/[0-9-]+$/.test(input.weight) || eight(input.weight) === true) {
    errors.weight = 'Place minimum and maximum weight separated with a hyphen';
}
  else if(eight(input.height) === true){   // cualquier numero y guiones
    errors.height = 'Place minimum and maximum height separated with a hyphen'
}
else if(input.temperament.length === 0){
      errors.temperament = 'You must select one or more temperaments'
}
  return errors;
};
// image = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/
export default function  CreateDog() {
  const Alltemperaments = useSelector((state)=> state.Alltemperaments)
  const dispatch = useDispatch()
  const [input, setInput] = useState({
    name: '',
    weight: 'min - max',
    height:'min - max',
    image:'',
    life_span:'',
    temperament: []
  });
  const [errors, setErrors] = useState({});
console.log(errors)
  const handleInputChange = function(e) {
      e.preventDefault()
      setInput({
          ...input,
          [e.target.name]: e.target.value
        });
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
    }
    function handleSelect(e){
        e.preventDefault()
        if(input.temperament.includes(e.target.value)){
            return null
        }else{
        setInput({
            ...input,
            temperament: [...input.temperament, e.target.value]
            // temperament: e.target.value
        })
        setErrors(validate({
            ...input,
            // [e.target.name]: e.target.value
            temperament: [...input.temperament, e.target.value]

        }));
    }
    }
    
    useEffect(()=>{
        dispatch(getAllTemperaments())
    },[dispatch])

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const errorSave = validate(input)
        if(Object.values(errorSave).length !== 0){
            alert('completar todos los campos requeridos')
        }else{
            dispatch(createDog(input))
          console.log(input)
          alert('breed creada')
          setInput({
              name: '',
              weight: 'min - max',
              height:'min - max',
              image:'',
              life_span:'',
              temperament:[]
          })
          setErrors({})

        }
}
function handleDelete(temperamento){
    setInput({
        ...input,
        temperament: input.temperament.filter(e => e !== temperamento)
    })
}
  
return (
<div >
    <NavBar/>

<form className='contenedorCreate' onSubmit={(e)=> handleSubmit(e)}>
    <p>Data marked with an asterisk (*) are required </p>
<div className='contenedorMenor'>
<label className='labelCreate'>Name *: </label>  
<input className='inputsCreate' type='text' value={input.name} name='name' 
placeholder='Breed Name' onChange={(e)=>handleInputChange(e)} />
</div>
{errors.name && (<p className='errorCreate'>{errors.name}</p>)}
<div className='contenedorMenor'>
<label className='labelCreate'>Life_span: </label>
<input className='inputsCreate' type='text' value={input.life_span} name='life_span' 
placeholder='example : 10 years' onChange={(e)=>handleInputChange(e)} />
</div>
{errors.life_span && (<p className='errorCreate'>{errors.life_span}</p>)}
<div className='contenedorMenor'>
<label className='labelCreate'>Weight Imperial *: </label>
<input className='inputsCreate' type='text' value={input.weight} name='weight' 
placeholder='example: 12-13' onChange={(e)=>handleInputChange(e)}/>
</div>
{errors.weight && (<p className='errorCreate'>{errors.weight}</p>)}
<div className='contenedorMenor'>
<label className='labelCreate'>Height Metric *: </label>
<input className='inputsCreate' type='text' value={input.height} name='height' 
placeholder='example: 20-24' onChange={(e)=>handleInputChange(e)} />
</div>
{errors.height && (<p className='errorCreate'>{errors.height}</p>)}
<div className='contenedorMenor'>
<label className='labelCreate'>Image: </label>
<input className='inputsCreate' type='url' value={input.image} name='image' 
placeholder='url image' onChange={(e)=>handleInputChange(e)} />
</div>
<div  className='contenedorMenor'>

<label className='labelCreate'>Temperament *: </label>
<select onChange={(e)=> handleSelect(e)}>
    {Alltemperaments.map((Eltemperamento, i ) => (
        <option key={i} value={Eltemperamento.name}>{Eltemperamento.name}</option>
    ))}
</select>
</div>
    {errors.temperament && <p className='errorCreate'>{errors.temperament}</p>}
{input.temperament?.map(temperamento=>
    <div className='inputsPYG' key={temperamento}>
       <p>{temperamento}</p> 
<button className='botonDelete' onClick={()=> handleDelete(temperamento)}>x</button>
    </div>
)}
<button className='botonCreate' type='submit'  >Create Breed</button>
</form>
</div>
);
};


        




