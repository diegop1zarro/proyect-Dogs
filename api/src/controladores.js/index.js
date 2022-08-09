const { Dog, Temperament } = require('../db.js');
const axios = require('axios')
const {YOUR_API_KEY} = process.env

async function getDogsApi(){
    const info = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key${YOUR_API_KEY}`)
    const data = await info.data.map(e =>{
        return{
            id: e.id,
            name: e.name,
            temperament:e.temperament,
            image:e.image.url,
            life_span: e.life_span,
            // weight:peso(e.weight.imperial),
            weight: e.weight.imperial,
            height:e.height.metric,
            // height2:e.height.metric,
            origin: e.origin
        }
    })
    let newData = data.sort((a, b) => {
        if (a.life_span > b.life_span) return -1
        if (a.life_span < b.life_span) return 1
        return 0
      })
    return newData

}
async function getAllTemperaments(){
    const info = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key${YOUR_API_KEY}`)
    const data = await info.data.map(e =>{
        return{
            temperament:e.temperament,
            }
    })
 const algo = data.map(e=> e.temperament)
    const dos = algo.join()
    const tres = dos.split(',')
    const cuatro = tres.map(e => e.trim())

return cuatro
// return algo
}

async function getDogsDB(){
    return await Dog.findAll({
        include:{
            model: Temperament,
            attributes:['name'],
          through:{
        attributes:[],
        }
        }
    })
    }
    
    async function getAllData(){
        
        const api = await getDogsApi()
        const base = await getDogsDB()
        const allData = api.concat(base)
        return allData.sort()
    }
    // async function getByName (name){
    //     let AllData = await getAllData()
    //     let byName = AllData.filter(e=> e.name.toLowerCase().includes(name.toLowerCase()))
    //     return byName
    // }
    
    
   



    module.exports ={
        getAllData,
        getAllTemperaments,
        getDogsDB
        
    }