const db = require('../database/models');



let apiController={
    charactersList: async function(req, res){
        let characters = await db.Characters.findAll({
            include:["movies"]
        })
        let charactersJson = {
            meta:{
                count: characters.length,
                status:200,
                url: "/api/characters",
                data:characters
            },
            data: characters
        }
        res.json(charactersJson);
        
    },
    charactersDetail: function(req, res){
        db.Characters.findByPk(req.params.id, {
            include:["movies"],
            
    }).then(character =>{
            let characterJson = {
                data:{
                    id: character.id,
                    nombre: character.nombre,
                    descripcion: character.descripcion,
                    imagen: "/images/" + character.imagen,
                    url: "/api/characters/" + req.params.id
                }
            }
            res.json(characterJson)
        })
    },
    charactersCreate:(req,res)=>{
        db.Characters
            .create(req.body)
            .then(character=>{
                return res.status(200).json({
                    data: character,
                    status:200,
                    created:"ok"
                })
            })
        
        },
    charactersUpdate:(req,res)=>{
        
            db.Characters
            .findByPk(req.params.id)
            .then(character=>{
                return res.status(200).json({
                    data: character,
                    status:200,
                    updated:"ok"
                })
            })
     
    },
    charactersDelete:(req,res)=>{
        db.Characters
        .destroy({
            where: {
                id: req.params.id
            }
        })
        .then (response=>{
            return res.json (response)
        })
        
        },
    charactersSearch:(req,res)=>{
        db.Characters
        .findAll({
            where:{
                nombre: { [Op.like]: '%' + req.query.search + '%' },
                peso:{ [Op.like]: '%' + req.query.search + '%' },
                edad: { [Op.like]: '%' + req.query.search + '%' },
            }
        })
        .then (characters=>{
            return res.status(200).json(characters);
    
        })
    
    },
    

    


}
module.exports= apiController