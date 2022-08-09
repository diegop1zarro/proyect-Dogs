const { Router } = require('express');
const { Dog, Temperament } = require('../db.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getAllData ,  getAllTemperaments , getDogsDB } = require ('../controladores.js')




const router = Router();
router.get('/dogs', async (req,res)=>{
    const name = req.query.name
    let AllBreeds = await getAllData()
if(name){
        // se filtran tanto los perros que tengo en la api como en la base de datos
        let breeds = await AllBreeds.filter(e=> e.name.toLowerCase().includes(name.toLowerCase())) 
        if(breeds.length){
            res.status(200).send(breeds)
        }else{
            res.status(200).send({error : 'error'})
        }
           
}else{res.status(200).send(AllBreeds)  }
})

router.get('/dogs/:id',async (req,res)=>{
const id = req.params.id
let AllRaza = await getAllData()
if(id){
       let ById = await AllRaza.filter(e => e.id == id)
       if(ById.length){
           res.status(200).send(ById)
       }else{
           res.status(400).send(error)
       }
}

})
router.get('/temperament',async (req,res)=>{
let data = await getAllTemperaments()
if(data){
    for(let i = 0 ; i< data.length ; i++){   // le coloco un for para pasarle la informacion en orden
        await Temperament.findOrCreate({
            where : {name : data[i]},
            attributes :['name']
        })
    }
const temperaments = await Temperament.findAll()
res.status(200).send(temperaments)
    // res.status(200).send(data)
}else{
res.status(400).send(error)
}
})
router.post('/dog', async (req,res)=>{
    let {name ,height, weight, life_span, image , temperament, InDataBase , Creado_por_Diego} = req.body
    const msj ={hecho:'La raza ha sido creada correctamente'}
    // const error ={error :'Se produjo un error al crear su Raza'}
try {
    let perro = await Dog.create({
                name,
                height,
                weight,
                life_span,
                image,
                InDataBase,
                Creado_por_Diego
                })
    let otro = await Temperament.findAll({
                    where: {name : temperament},
        })
    perro.addTemperaments(otro)
    res.status(200).send(msj)
    
} catch (error) {
        res.status(404).send(error)
        console.log(error)
    }
})

router.delete('/delete/:id', async(req,res)=>{
    try {
      
        await Dog.destroy({
            where:{id : req.params.id},
           
        })
        res.status(200).send('eliminado')
    } catch (error) {
        res.status(404).send(error)
    }
})

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
