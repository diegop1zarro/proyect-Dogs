import axios from 'axios'

export const GET_ALL_DOGS="GET_ALL_DOGS";
export const GET_BY_NAME="GET_BY_NAME";
export const GET_ALL_DETAILS="GET_ALL_DETAILS";
export const GET_ALL_TEMPERAMENTS ="GET_ALL_TEMPERAMENTS";
export const CREATE_DOG = "CREATE_DOG";
export const FILTER_ALFABETICAMENTE= "FILTER_ALFABETICAMENTE";
export const FILTER_DB = "FILTER_DB";
export const  FILTER_BY_TEMPERAMENT = "FILTER_BY_TEMPERAMENT";
export const FILTER_POR_PESO = "FILTER_POR_PESO";
export const LIMPIAR ="LIMPIAR";
export const LIMPIAR_HOME ="LIMPIAR_HOME";
export const DELETE_DOG ="DELETE_DOG";



export const getAllDogs = () => {
    return  function (dispatch) {
      
    return fetch('http://localhost:3001/dogs')
    .then(info => info.json())
    .then (data => dispatch({
      type: GET_ALL_DOGS,
      payload: data
    }))
    
    };
  };

export function getAllTemperaments(){
  return function (dispatch){
     fetch('http://localhost:3001/temperament')
    .then(info => info.json())
    .then (data=>dispatch({type:GET_ALL_TEMPERAMENTS, payload: data }))
  }
}
export function getAllDetails (id){
  return  function (dispatch) {
      
    return fetch('http://localhost:3001/dogs/'+ id)
    .then(info => info.json())
    .then (data => dispatch({
      type: GET_ALL_DETAILS,
      payload: data
    }))
    
    };
}

export function getByName(name){
  return function (dispatch) {
    try{
      return  fetch('http://localhost:3001/dogs?name='+ name)
      .then(info => info.json())
      .then (data => dispatch({
        type: GET_BY_NAME,
        payload: data
      }))

    } catch(error){
      throw (error)
    } 
    
    };
}
export function createDog(dog){
  return async function(){
  const post = await axios.post('http://localhost:3001/dog',dog)
  return post
    }
    
};
export function filterByOrder(orden){
  console.log(orden)
  return{
    type:FILTER_ALFABETICAMENTE,
    payload:orden
  }
}
export function filterByOrderPeso(orden){
  return{
    type:FILTER_POR_PESO,
    payload:orden
  }
}
export function filterDB(info){
  return {
    type: FILTER_DB,
    payload: info
  }
}
export function filterByTemperament(options){
  return{
    type: FILTER_BY_TEMPERAMENT,
    payload: options
  }
}
export function limpiarEstado(){
  return{
    type:LIMPIAR
  }
}
export function limpiarEstadoHome(){
  return{
    type:LIMPIAR_HOME,
    
  }
}
export function deleteDog(id){
  return async function(dispatch){
   await axios.delete('http://localhost:3001/delete/'+ id)
    .then(()=>{
      dispatch({
        type:DELETE_DOG
      })
    })
  }
}