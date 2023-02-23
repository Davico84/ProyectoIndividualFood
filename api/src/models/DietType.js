const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo

  sequelize.define('dietType', {
      // id: {
      //   type: DataTypes.UUID,
      //   primaryKey:true,
      //   defaultValue:DataTypes.UUIDV4,
      // },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
      },
      descripcion:{
        type:DataTypes.STRING
       
      },
      // activate:{
      //   type: DataTypes.BOOLEAN,
      //   defaultValue:false
      // },
    }, {
      timestamps: false
      }) 


};