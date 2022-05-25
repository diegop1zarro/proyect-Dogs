import React, { useState , useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import NavBar from '../NavBar/navBar.jsx'
import {getAllTemperaments , createDog} from '../../Redux/Actions/actions.js'
import '../../Style/CreateDog.css'
// import validate from './validate.jsx'



 function validate (input) {
  let errors = {};
  if (!/[A-Z]/.test(input.name)) {       // la primera letra en mayusculas
    errors.name = 'You must put a name with its first letter in capital letters';
  } else if (!/[0-9-]+$/.test(input.weight)) {
    errors.weight = 'Place minimum and maximum weight separated with a hyphen';
  }else if(!/[0-9-]+$/.test(input.height)){   // cualquier numero y guiones
    errors.height = 'Place minimum and maximum height separated with a hyphen'
  }else if (!input.life_span){  // que contenga numeros y letras /^[A-Za-z0-9\s]+$/g.test(
    errors.life_span = 'life_span is required'
  }else if(input.temperament.length === 0){
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
    weight: '',
    height:'',
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
              weight: '',
              height:'',
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

<form  onSubmit={(e)=> handleSubmit(e)}>
    <p className='mensaje'>Data marked with an asterisk (*) are required </p>
<div>
<label className='label'>Name *: </label>  
<input className='inputs' type='text' value={input.name} name='name' 
placeholder='Breed Name' onChange={(e)=>handleInputChange(e)} />
{errors.name && (<p className='error'>{errors.name}</p>)}
</div>
<div>
<label className='label'>Life_span: </label>
<input className='inputs' type='text' value={input.life_span} name='life_span' 
placeholder='example : 10 years' onChange={(e)=>handleInputChange(e)} />
{errors.life_span && (<p className='error'>{errors.life_span}</p>)}
</div>
<div>
<label className='label'>Weight Imperial *: </label>
<input className='inputs' type='text' value={input.weight} name='weight' 
placeholder='example: 12-13' onChange={(e)=>handleInputChange(e)}/>
{errors.weight && (<p className='error'>{errors.weight}</p>)}
</div>
<div>
<label className='label'>Height Metric *: </label>
<input className='inputs' type='text' value={input.height} name='height' 
placeholder='example: 20-24' onChange={(e)=>handleInputChange(e)} />
{errors.height && (<p className='error'>{errors.height}</p>)}
</div><div>
<label className='label'>Image: </label>
<input className='inputs' type='url' value={input.image} name='image' 
placeholder='url image' onChange={(e)=>handleInputChange(e)} />
</div>
<label className='label'>Temperament *: </label>
<select onChange={(e)=> handleSelect(e)}>
    {Alltemperaments.map((Eltemperamento, i ) => (
        <option key={i} value={Eltemperamento.name}>{Eltemperamento.name}</option>
    ))}
</select>
    {errors.temperament && <p className='error'>{errors.temperament}</p>}
<button type='submit'  >Create Breed</button>
    </form>
{input.temperament?.map(temperamento=>
    <div key={temperamento}>
       <p>{temperamento}</p> 
<button onClick={()=> handleDelete(temperamento)}>x</button>
    </div>
)}

</div>
);
};


        




