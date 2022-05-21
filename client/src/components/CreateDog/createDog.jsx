import React, { useState , useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import NavBar from '../NavBar/navBar.jsx'
import {getAllTemperaments , createDog} from '../../Redux/Actions/actions.js'

// import validate from './validate.jsx'



 function validate (input) {
  let errors = {};
  if (!/[A-Z]/.test(input.name)) {       // la primera letra en mayusculas
    errors.name = ' debe colocar la primera letra en mayusculas';
  } else if (!/[0-9-]+$/.test(input.weight)) {
    errors.weight = 'weight is invalid';
  }else if(!/[0-9-]+$/.test(input.height)){   // cualquier numero y guiones
    errors.height = 'height is invalid'
  }else if (/^[A-Za-z0-9\s]+$/g.test(input.life_span)){  // que contenga numeros y letras
    errors.life_span = 'life_span is required'
  }else if(!input.temperament){
      errors.temperament = 'debe seleccionar al menos un temperamento'
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

  const handleInputChange = function(e) {
      setInput({
          ...input,
          [e.target.name]: e.target.value
        });
        setErrors(validate({
            ...errors,
            [e.target.name]: e.target.value
        }));
    }
    function handleSelect(e){
        setInput({
            ...input,
            temperament: [...input.temperament, e.target.value]
            // temperament: e.target.value
        })
    }
    useEffect(()=>{
        dispatch(getAllTemperaments())
    },[dispatch])

    
    const handleSubmit = (e) => {
        e.preventDefault();
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
function handleDelete(temperamento){
    setInput({
        ...input,
        temperament: input.temperament.filter(e => e !== temperamento)
    })
}
  
return (
<div>
    <NavBar/>
<form onSubmit={(e)=> handleSubmit(e)}>
<div>
<label>Name: </label>  
<input type='text' value={input.name} name='name' 
placeholder='coloque un nombre' onChange={(e)=>handleInputChange(e)} />
{errors.name && (<p>{errors.name}</p>)}
</div>
<div>
<label>Life_span: </label>
<input type='text' value={input.life_span} name='life_span' 
placeholder='coloque años de vida ' onChange={(e)=>handleInputChange(e)} />
{errors.life_span && (<p>{errors.life_span}</p>)}
</div>
<div>
<label>weight: </label>
<input type='text' value={input.weight} name='weight' 
placeholder='coloque su peso' onChange={(e)=>handleInputChange(e)}/>
{errors.weight && (<p>{errors.weight}</p>)}
</div>
<div>
<label>height: </label>
<input type='text' value={input.height} name='height' 
placeholder='coloque su altura' onChange={(e)=>handleInputChange(e)} />
{errors.height && (<p>{errors.height}</p>)}
</div><div>
<label>image: </label>
<input type='url' value={input.image} name='image' 
placeholder='url de una imagen' onChange={(e)=>handleInputChange(e)} />
</div>

<select onChange={(e)=> handleSelect(e)}>
    {Alltemperaments.map(Eltemperamento => (
        <option key={Eltemperamento.id} value={Eltemperamento.name}>{Eltemperamento.name}</option>
    ))}
</select>
    {errors.temperament && <p>{errors.temperament}</p>}
<button type='submit' >Create Breed</button>
    </form>
{input.temperament?.map(temperamento=>
    <div key={temperamento.id}>
       <p key={temperamento.id}>{temperamento}</p> 
<button key={temperamento.id} onClick={()=> handleDelete(temperamento)}>x</button>
    </div>
)}

</div>
);
};


        




