// function libraskg(a){
//     let resultado = a/2.2046
//     return resultado.toFixed(2)}

// function promediamos(coso){
//     let array = coso.split('-')
//     let number = array.map(e=>Number(e))
//     let promedio = 0
//     for(let i = 0 ; i<number.length -1 ; i++){
//         let resultado = number[i] + number[i+1]
//         promedio = resultado / 2} return promedio}



//      FUNCION FINAL 
//  function peso(coso){
//      let array = coso.split('-')
//      let number = array.map(e=>Number(e))
//      let promedio = 0
//      if(number.length === 2){
//          for(let i = 0 ; i<number.length -1 ; i++){
//              let resultado1 = number[i] /2.2046
//              let resultado2 =  number[i+1] /2.2046
//              promedio = `${resultado1.toFixed(2)} kgs a  ${resultado2.toFixed(2)} kgs` } return promedio
//             }else{
//                 let aKilo = number.map(e=>e/2.2046)
//                 // toFixed para colocar solo dos decimales
//              promedio = `${aKilo[0].toFixed(2)} kgs`
//              return promedio
//             }  // tofixed toma 2 decimales
//       }





// function nueva(coso){
//     let array = coso.split('-')
//     let number = array.map(e=>Number(e))
//     let promedio = 0
//     for(let i = 0 ; i<number.length -1 ; i++){
//         let resultado = number[i] + number[i+1]
//         promedio = resultado / 2} return promedio}

// function global(algo){
//     let primera = promediamos2(algo)
//     let segunda= libraskg(primera)
//     return segunda
// }
// function altura(coso){
//     let array = coso.split('-')
//     let number = array.map(e=>Number(e))
//     let promedio = 0
//     for(let i = 0 ; i<number.length -1 ; i++){
//         let resultado1 = number[i] 
//         let resultado2 =  number[i+1] 
//         promedio = `${resultado1} cm a  ${resultado2} cm` } return promedio} 

// module.exports = {

//    altura
// }