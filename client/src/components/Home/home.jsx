import React, { useEffect, useState } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllDogs , filterByOrder , getAllTemperaments , filterDB , filterByTemperament,filterByOrderPeso} from '../../Redux/Actions/actions.js'
import DogCard from '../DogCard/dogCard'
import "../../Style/paginate.css";
import '../../Style/DogCard.css'
import '../../Style/Home.css'
import NavBar from '../NavBar/navBar.jsx';
import Search from '../Search/search.jsx'
// import ReactPaginate from "react-paginate";
// import dogjson from '../../dogss.json'
// import Filters from '../Filters/Filters.jsx';
import Paginate from '../Paginate/pagination.jsx';
function Home (){
  const dispatch = useDispatch()
  const dogs = useSelector((state)=> state.dogs)
  const Alltemperaments = useSelector((state)=> state.Alltemperaments)
 const [orden , setOrden]= useState()
 const [temperament , setTemperament] = useState({
   option: []
  })
  
//Paginado
const [paginaActual , setPageActual] = useState(1)
const [dogsPorPage , setDogsPorPage] = useState(8)
const ultimoDogPorPage = paginaActual * dogsPorPage
const primerDogPorPage = ultimoDogPorPage - dogsPorPage
const DogsActuales = dogs.slice(primerDogPorPage ,ultimoDogPorPage)
const paginado = (nroDePagina)=>{
  setPageActual(nroDePagina)
}





useEffect(()=>{
  dispatch(getAllDogs())
  dispatch(getAllTemperaments())
},[dispatch])

const handleRefresh=(e)=> {
  e.preventDefault();
  dispatch(getAllDogs())
};
const handleSortAlf=(e)=>{
  e.preventDefault()
  dispatch(filterByOrder(e.target.value))
  setPageActual(1)
  setOrden(e.target.value)
}

  const handleOrdenPeso=(e)=>{
  e.preventDefault()
  dispatch(filterByOrderPeso(e.target.value))
  setPageActual(1)
  setOrden(e.target.value)

}  
  
  const handleSelect=(e)=>{
  setTemperament({
    ...temperament ,
    option: [e.target.value]
  })
  }
  const filterTemperament = (e)=>{
    e.preventDefault()
  dispatch(filterByTemperament(temperament.option))
    setTemperament({
      option: []
      })
    }
    console.log(temperament.option)
const handleDelete=(temperamento)=>{
      setTemperament({
          ...temperament,
          option: temperament.option.filter(e => e !== temperamento)
      })
  }

 const handleDB = (e)=>{
  dispatch(filterDB(e.target.value))
}   
  
    return (
      <div>
       <NavBar/>
       <Search/>
      <NavLink className='crear' to='/dog'>Created your breed</NavLink>   
       <button onClick={(e)=> handleRefresh(e)}> Refresh page</button>
       
       <div>
       <h3>Options to order...</h3> 
<div className='filtros'>

  <div>
             <p  className='titulitos'>Alphabetically</p>
<select onChange={(e)=> handleSortAlf(e)}>
     <option >options</option>
    <option value='Asc' >A - Z</option>
    <option value='Desc' >Z - A</option>
</select>
  </div>

<div>
            <p className='titulitos'> By weight</p>
<select onChange={(e)=> handleOrdenPeso(e)}>
    <option >options</option>
   <option value='Asc'> - to +</option>
  <option value='Desc'>+ to -</option>
</select>
</div>


<div>
         <p className='titulitos'>by Temperament</p>
<select onChange={(e)=> handleSelect(e)}>
{Alltemperaments.map((Eltemperamento, i )=> (
  <option key={i}  value={Eltemperamento.name}>{Eltemperamento.name}</option>
  ))}
  
</select>
<button onClick={(e)=> filterTemperament(e)}>Filter</button>
{temperament.option?.map(temperamento=>
    <div key={temperamento} >
       <p >{temperamento}</p> 
<button  onClick={()=> handleDelete(temperamento)}>x</button>
    </div>
)}
</div>

<div>
   <p className='titulitos'>Choice of dogs</p>
<select onClick={(e)=> handleDB(e)}>
  <option value='Todos'>All the dogs</option>
  <option value='existentes'>Existings</option>
  <option value='InDataBase'>Created by me</option>
</select>
</div>

</div>

         </div>
      <Paginate 
      dogsPorPage={dogsPorPage}
      dogs={dogs.length}
      paginado= {paginado}
      />
       { DogsActuales?.map((dog) => {
         return (
           <div key={dog.id}>

             <DogCard  
             key={dog.id}
             name= {dog.name}
             image= {dog.image}
             id={dog.id}
             temperament={dog.temperament? dog.temperament : dog.InDataBase? dog.temperaments.map(e => e.name + (' , ')) : 'No temperaments found'}
            weight={dog.weight}
            /> </div> ) })}

    </div>
        )
}
export default Home
        

           
         
          

       





