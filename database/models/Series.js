module.exports = (sequelize, DataTypes)=> {

    const Series = sequelize.define("Series", 
        {
            id:{
                auroincrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
    
            },
            titulo:
            {
                allowNull: false,
                type: DataTypes.STRING
            },
            imagen:
            {
                allowNull: false,
                type: DataTypes.STRING
            },
            
            calificacion:
            {
                allowNull: false,
                type: DataTypes.INTEGER
            },
            character_id:    {
                foreignKey:true,
                allowNull: false,
                type: DataTypes.INTEGER
            },
    
            
        },
        {
            tableName: 'series',
            timestamps: false,
        }
    
    );
    
    Series.associate = function(models){
        Series.belongsToMany(models.Characters,{
            as: 'characters',
            through: 'characters_series',
            foreignKey: 'character_id',
            otherKey: "serie_id",
            timestamps: false,
        })
        
    };
    
    return Series
    
    }
    