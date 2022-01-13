const db = require('../database/models');

let charactersController={
    list: (req, res) => {
        db.Characters.findAll(
            { include: ['movies']}
        )
            .then(characters => {
                res.render('chracters', {characters})
            })
        
    },
    
    detail: async (req,res)=>{
        await db.Characters.findByPk(req.params.id, {
            include: [{association: "movies"}]
        })
        
        .then(function(character){
            res.render("character",{character})
        })
    
    
    },
    buscar: (req,res)=> {
       
        db.Characters.findAll({

            where: {
                nombre: { [Op.like]: '%' + req.query.search + '%' }
                
            }
        })
     
        .then(character=>{
            res.render("characters",{characters})
        })
        .catch(err=>{res.send(err)})
    },

    
}
module.exports= charactersController;
