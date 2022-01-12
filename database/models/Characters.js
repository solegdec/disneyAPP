

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
            edad:        
            {
                allowNull: false,
                type: DataTypes.INTEGER
            },
            peso:
            {
                allowNull: false,
                type: DataTypes.DECIMAL
            },
            historia:
            {
                allowNull: false,
                type: DataTypes.STRING
            },
            serie_id:    {
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
        Characters.belongsToMany(models.Series,{
            as: 'series',
            through: 'characters_series',
            foreignKey: 'character_id',
            otherKey: "serie_id",
            timestamps: false,
        })
        
    };
    
    return Characters
    
    }
    