const db = require('../database/models');



let apiController={

    createCharacter:(req,res)=>{
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





}
module.exports= apiController