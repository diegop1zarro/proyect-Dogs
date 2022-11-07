import React, { useEffect, useState } from 'react' ;
import { useDispatch , useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllDogs , filterByOrder , getAllTemperaments , filterDB , filterByTemperament,filterByOrderPeso , limpiarEstadoHome} from '../../Redux/Actions/actions.js' ;
import DogCard from '../DogCard/dogCard' ;
import NavBar from '../NavBar/navBar.jsx';
import Search from '../Search/search.jsx';
import Paginate from '../Paginate/pagination.jsx';
import Loading from '../Loading/Loading.jsx';
import "../../Style/paginate.css";
import '../../Style/DogCard.css' ;
import '../../Style/Home.css';
function Home (){
  const dispatch = useDispatch()
  const dogs = useSelector((state)=> state.dogs)
  const Alltemperaments = useSelector((state)=> state.Alltemperaments)
  const [orden , setOrden]= useState()
  const [temperament , setTemperament] = useState({
    option: []
  })
  useEffect(()=>{
    dispatch(getAllDogs())
    dispatch(getAllTemperaments())
    
  },[dispatch])
  
//Paginado
const [paginaActual , setPageActual] = useState(1)
const [dogsPorPage ] = useState(8)
const ultimoDogPorPage = paginaActual * dogsPorPage
const primerDogPorPage = ultimoDogPorPage - dogsPorPage
const DogsActuales = dogs.error ? 0 : dogs.slice(primerDogPorPage ,ultimoDogPorPage) 
const paginado = (nroDePagina)=>{
  setPageActual(nroDePagina)
}
const prevPage = () => {
  setPageActual( paginaActual - 1 );
 }
 const NextPage = () => {
  setPageActual( paginaActual +1);
 } 


const handleRefresh=(e)=> {
  e.preventDefault();
  dispatch(limpiarEstadoHome())
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
  setPageActual(1)
    setTemperament({
      ...temperament,
      option: []
      })
    }

 const handleDB = (e)=>{
  dispatch(filterDB(e.target.value))
}   

  
    return (
      <div>
       <NavBar/>
      
      <div className='CreateRefresh'>
       <Search/>
         <Link to='/dog'>
      <button className='botonesHome' >Created your breed</button>   
         </Link>
       <button className='botonesHome' onClick={(e)=> handleRefresh(e)}> Refresh page</button>
      </div>
     <div>
       <h3>Options to order...</h3> 
<div className='filtros'>

  <div>
             <p  className='titulitos'>Alphabetically</p>
<select onChange={(e)=> handleSortAlf(e)}>
<option defaultValue='' disabled selected>Select an option</option>
    <option value='A_Z' >A - Z</option>
    <option value='Z_A' >Z - A</option>
</select>
  </div>

<div>
            <p className='titulitos'> By weight</p>
<select onChange={(e)=> handleOrdenPeso(e)}>
<option defaultValue='' disabled selected>Select an option</option>
   <option value='Asc'>low to hight</option>
  <option value='Desc'>hight to low</option>
</select>
</div>


<div>
         <p className='titulitos'>by Temperament</p>
<select onChange={(e)=> handleSelect(e)}>
<option defaultValue='' disabled selected>Select an option</option>
{Alltemperaments.map((Eltemperamento, i )=> (
  <option key={i}  value={Eltemperamento.name}>{Eltemperamento.name}</option>
  ))}
  
</select>
<button className='botonFilter' onClick={(e)=> filterTemperament(e)}>Filter</button>

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
       paginaActual={paginaActual}
       prevPage = {prevPage}
       NextPage = {NextPage}
      dogsPorPage={dogsPorPage}
      dogs={dogs.length}
      paginado= {paginado}
      />
       { dogs.error || dogs.errorDB ? <h4> no result found</h4>:
       
        DogsActuales.length > 0 ?
     <div className='ContainerCards'>
        
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
            CreadoPorDiego={ dog.Creado_por_Diego ? dog.Creado_por_Diego: 'Existing'}
            /> 
            </div> 
            )
            })
          }
       </div>
       : <Loading/>
            
             }
    </div>
        )
}
export default Home
        

           
         
          

       





