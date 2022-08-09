import {React, useEffect,} from 'react'
import { useDispatch, useSelector, } from 'react-redux';
import { useParams } from 'react-router';
import { NavLink , useNavigate} from 'react-router-dom';
import { getAllDetails ,limpiarEstado , deleteDog } from '../../Redux/Actions/actions';
import NavBar from '../NavBar/navBar';
import Loading from '../Loading/Loading';
import '../../Style/DogDetails.css';

const DogDetails = () => {
const dispatch =useDispatch()
const navegar = useNavigate()
const {id}= useParams()
const dogsDetails = useSelector((state)=> state.dogsDetails)
useEffect(()=>{
    dispatch(getAllDetails(id))
    return dispatch(limpiarEstado())
    
},[dispatch,id])
function handleDelete(e){
    e.preventDefault()
    dispatch(deleteDog(dogsDetails.id))
    alert('se eliminó correctamente')
    navegar('/home')

}
    return (
    <div>
    <NavBar/> 
    <NavLink className='algo' to='/home'>
            <button className='backDetail'>Back</button>
        </NavLink>
    { dogsDetails.name ? 
    <div className='containerDetail'>
     {dogsDetails.InDataBase ? <button className='botonDeleteDog' onClick={(e)=>handleDelete(e)}>Delete Dog</button> : null}
    <h1 className='titleDetail'>{dogsDetails.name}</h1>
        <img className='imgDetail' src={dogsDetails.image} alt={dogsDetails.name}/>
        <div className='infoDetail'>
        <h4>Temperaments: </h4> 
        <p>{dogsDetails.temperament? dogsDetails.temperament : dogsDetails.InDataBase? dogsDetails.temperaments.map(e => e.name + (' , ')) : 'no tiene'}</p>
        </div>

        <div className='infoDetail'>
        <h4>Life span: </h4> 
        <p> {dogsDetails.life_span}</p>
        </div>

        <div className='infoDetail'>
        <h4>height: </h4> 
        <p>{dogsDetails.height}</p> 
        </div>

        <div className='infoDetail'>
        <h4>weight imperial: </h4> 
        <p> {dogsDetails.weight}</p> 
        </div>
</div> :
 <Loading/> 
     }
    </div>
    )
}
export default DogDetails;