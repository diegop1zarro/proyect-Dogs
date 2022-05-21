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
  setOrden(e.target.value)}

  const handleOrdenPeso=(e)=>{
  e.preventDefault()
  dispatch(filterByOrderPeso(e.target.value))
  setPageActual(1)
  setOrden(e.target.value)

}  
  
  const handleSelect=(e)=>{
  setTemperament({
    ...temperament ,
    option: [...temperament.option, e.target.value]
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
      <NavLink className='crear' to='/dog'>Crear tu Raza</NavLink>   
       <button onClick={(e)=> handleRefresh(e)}> Refrescar página</button>
       
       <div>
       <h3>Opciones para ordenar:</h3> 
<div className='filtros'>

  <div>
             <p  className='titulitos'>Alfabeticamente</p>
<select onChange={(e)=> handleSortAlf(e)}>
    <option value ='Asc' >Ascendentes</option>
    <option value='Desc' >Descendentes</option>
</select>
  </div>

<div>
            <p className='titulitos'> Por peso</p>
<select onChange={(e)=> handleOrdenPeso(e)}>
   <option value='Asc'>Ascendente</option>
  <option value='Desc'>Descendente</option>
</select>
</div>

<div>
         <p className='titulitos'>Por temperamentos</p>
<select onChange={(e)=> handleSelect(e)}>
{Alltemperaments.map(Eltemperamento => (
  <option  value={Eltemperamento.name}>{Eltemperamento.name}</option>
  ))}
  
</select>
<button onClick={(e)=> filterTemperament(e)}>filtrar con temp</button>
{temperament.option?.map(temperamento=>
    <div >
       <p >{temperamento}</p> 
<button  onClick={()=> handleDelete(temperamento)}>x</button>
    </div>
)}
</div>

<div>
   <p className='titulitos'>eleccion de perros</p>
<select onClick={(e)=> handleDB(e)}>
  <option value='Todos'>Todos</option>
  <option value='existentes'>existentes</option>
  <option value='InDataBase'>Creados por mi</option>
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
             temperament={dog.temperament? dog.temperament : dog.InDataBase? dog.temperaments.map(e => e.name + (' , ')) : 'no tiene'}
            weight={dog.weight}
            /> </div> ) })}


           
         
    </div>
        )
}
export default Home
        
          

       





