import {React, useEffect,} from 'react'
import { useDispatch, useSelector, } from 'react-redux';
import { useParams } from 'react-router';
import { getAllDetails } from '../../Redux/Actions/actions';
import NavBar from '../NavBar/navBar';
import '../../Style/DogCard.css';

const DogDetails = () => {
const dispatch =useDispatch()
const {id}= useParams()
const dogsDetails = useSelector((state)=> state.dogsDetails)
useEffect(()=>{
    dispatch(getAllDetails(id))
},[dispatch,id])
    return (
    <div>
        {/* COLOCO EL NAVBAR TANTO EN HOME COMO EN DOGDETAIL YA QUE SI LO COLOCO EN UNA RUTA APARTE (en app), ME APARECE EN EL LANDING */}
    <NavBar/> 
    <div className='container'>
    <h1 className='title'>{dogsDetails.name}</h1>
        <img className='img' src={dogsDetails.image} alt={dogsDetails.name}/>
        <p className='info'>Temperaments:  {dogsDetails.temperament? dogsDetails.temperament : dogsDetails.InDataBase? dogsDetails.temperaments.map(e => e.name + (' , ')) : 'no tiene'}</p>
        <p className='info'>Life span:  {dogsDetails.life_span}</p>
        <p className='info'>height: {dogsDetails.height}</p> 
        <p className='info'>weight imperial:  {dogsDetails.weight}</p> 
        
    </div>
    {/* <p className='info'>height metric:  {dogsDetails.height}</p> */}
    {/* <p className='info'>weight metric:  {dogsDetails.weight2}</p> */}
    </div>
    )
}
export default DogDetails;