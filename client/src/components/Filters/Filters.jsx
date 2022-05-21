// import React, { useEffect, useState } from 'react';
// import { useDispatch , useSelector} from 'react-redux';
// import { getAllDogs , filterByOrder , getAllTemperaments , filterDB , filterByTemperament} from '../../Redux/Actions/actions.js'


// function Filters (){
// const dispatch = useDispatch()
// // const dogs = useSelector((state)=> state.dogs)

// // const Alltemperaments = useSelector((state)=> state.Alltemperaments)

// const [orden , setOrden]= useState()
// // const [temperament , setTemperament] = useState({
// //   option: []
// // })
// // useEffect(()=>{
// // dispatch(getAllDogs())
// // dispatch(getAllTemperaments())
// // },[dispatch])

// const handleSort=(e)=>{
//  e.preventDefault()
//  dispatch(filterByOrder(e.target.value))
//  setOrden()}
  
 
// // const handleSelect=(e)=>{
  
// //  setTemperament({
// //     ...temperament ,
// //     option: [...temperament.option, e.target.value]
// //   })
// // }
// // const filterTemperament = ()=>{
// //   dispatch(filterByTemperament(temperament.option))
// //   setTemperament({
// //     option: []
// //   })
// // }
// // console.log(temperament.option)
// const handleDB = (e)=>{
//   dispatch(filterDB(e.target.value))
//    } 

//     return (
// <div>
// <h5>Ordenar por:</h5> 
// <select onChange={(e)=> handleSort(e)}>
//     <option value ='Asc' >Ascendentes</option>
//     <option value='Desc' >Descendentes</option>
// </select>
// <select>
//      <option value='name'>Raza</option>
//     <option value='weight'>Por peso</option>
// </select>
        
//          {/* <select onChange={(e)=> handleSelect(e)}>
//     {Alltemperaments.map(Eltemperamento => (
//       <option value={Eltemperamento.name}>{Eltemperamento.name}</option>
//       ))}
// </select>
//       <button onClick={()=> filterTemperament()}>filtrar con temp</button> */}
       
//  <select onClick={(e)=> handleDB(e)}>
//    <option value='Todos'>Todos</option>
//    <option value='existentes'>existentes</option>
//    <option value='InDataBase'>Creados por mi</option>
//  </select>
// </div>
        
//     )
// }


// export default Filters