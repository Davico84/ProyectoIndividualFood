const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
 
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      primaryKey:true,
      defaultValue:DataTypes.UUIDV4,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    resumen:{
      type:DataTypes.STRING,
      allowNull: false
    },
    comidaSaludable:{
      type:DataTypes.INTEGER
    },
    pasoAPaso:{
      type:DataTypes.STRING
    },
    create:{
      type: DataTypes.BOOLEAN,
      defaultValue:true
    },
  }, {
    timestamps: false
    }) 

};
