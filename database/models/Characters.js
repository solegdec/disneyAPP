

module.exports = (sequelize, DataTypes)=> {

    const Characters = sequelize.define("Characters", 
        {
            id:{
                auroincrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
    
            },
            nombre:
            {
                allowNull: false,
                type: DataTypes.STRING
            },
            imagen:
            {
                allowNull: false,
                type: DataTypes.STRING
            },
                      
            descripcion:
            {
                allowNull: false,
                type: DataTypes.STRING
            },
            movie_id:    {
                foreignKey:true,
                allowNull: false,
                type: DataTypes.INTEGER
            },
    
            
        },
        {
            tableName: 'characters',
            timestamps: false,
        }
    
    );
    
    Characters.associate = function(models){
        Characters.belongsToMany(models.Movies,{
            as: 'movies',
            through: 'characters_movies',
            foreignKey: 'character_id',
            otherKey: "movie_id",
            timestamps: false,
        })
        
    };
    
    return Characters
    
    }
    