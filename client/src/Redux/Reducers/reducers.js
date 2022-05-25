import{GET_ALL_DOGS, GET_ALL_TEMPERAMENTS,GET_ALL_DETAILS,GET_BY_NAME , CREATE_DOG , FILTER_ALFABETICAMENTE , FILTER_DB , FILTER_BY_TEMPERAMENT , FILTER_POR_PESO} from '../Actions/actions'
// DELETE_PRODUCT,CREATE_PRODUCT,GET_PRODUCT_DETAIL,
import { promediamos } from '../../Controllers';

const initialState = {
    dogs: [],
    Alldogs:[],
    dogsDetails:{},
    Alltemperaments:[]
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_ALL_DOGS:
          return{
            ...state,
            dogs:action.payload,
            Alldogs: action.payload
          }
      case GET_ALL_TEMPERAMENTS:
               const allTemperaments = action.payload.filter(e=> e.name !== '')
        return{
          ...state,
             Alltemperaments: allTemperaments
        }
        case GET_ALL_DETAILS:
          return{
            ...state,
            dogsDetails:action.payload[0]
          }
          case GET_BY_NAME:
          return{
            ...state,
            dogs:action.payload
          }
          case FILTER_ALFABETICAMENTE:
            let ordenado = action.payload === 'Asc' ? state.dogs.sort((a, b) => {
                 if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
                 if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
                 return 0
               })
             : action.payload === 'Desc'?
              state.dogs.sort((a, b) => {
                if (a.name.toLowerCase() > b.name.toLowerCase()) return -1
                if (a.name.toLowerCase() < b.name.toLowerCase()) return 1
                return 0
              }) : state.Alldogs
            // let ordenado = action.payload === "Asc"
            // ? state.dogs.sort((a, b) => {
            //     return a.name.localeCompare(b.name);
            //   })
            // : state.dogs.sort((a, b) => {
            //     return b.name.localeCompare(a.name);
            //   });
            //   console.log(ordenado)
          return{
            ...state,
            dogs:ordenado
          }
          case FILTER_POR_PESO:
            let enOrden = action.payload === 'Asc' ? state.dogs.sort((a, b) => {
                 if (promediamos(a.weight) > promediamos(b.weight)) return 1
                 if (promediamos(a.weight) < promediamos(b.weight)) return -1
                 return 0
               })
             : action.payload === 'Desc'? 
              state.dogs.sort((a, b) => {
                if (promediamos(a.weight) > promediamos(b.weight)) return -1
                if (promediamos(a.weight)< promediamos(b.weight)) return 1
                return 0
              }) : state.Alldogs
          return{
            ...state,
            dogs:enOrden
          }

          case FILTER_DB:
            let dogsFilter = action.payload === 'InDataBase' ? state.Alldogs.filter(e=> e.InDataBase) :  state.Alldogs.filter(e=> !e.InDataBase) 
            return{
              ...state,
              dogs: action.payload === 'Todos'? state.Alldogs : dogsFilter
            }
            case FILTER_BY_TEMPERAMENT:
              let Elaction = action.payload
              let temperamentFilter = state.dogs.filter((e)=> e.InDataBase ? e.temperaments?.filter(H => H.name?.includes(Elaction))[0] : e.temperament?.includes(Elaction)) 
              //  let temperamentFilter = state.Alldogs.filter(e=>e.temperament?.split(',').filter(e=>e.includes(Elaction)))
            return{
              ...state,
              dogs: temperamentFilter
            }
      case CREATE_DOG:
        return{
          ...state,
        }
    //     case DELETE_PRODUCT:
    //       return{
    //         ...state,
    //         products: state.products.filter(producto=> producto.id !== action.payload)
    //       }
  
      default : return state
  };
  }
  export default rootReducer;