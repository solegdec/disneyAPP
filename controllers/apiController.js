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
    

    


}
module.exports= apiController