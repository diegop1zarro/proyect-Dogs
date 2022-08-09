const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id :{
      primaryKey: true,
      type : DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      // unique: true
    },
    height:{
      type: DataTypes.STRING,
      allowNull: false
    },
    weight:{
      type: DataTypes.STRING,
      allowNull: false
    },
    life_span: {
      type: DataTypes.STRING,
      allowNull: true
    },
    image:{
      type: DataTypes.STRING,
      allowNull: true
    },
    InDataBase:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    Creado_por_Diego:{
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue:'Created by me'
    }
    // temperamentId:{
    //   type : DataTypes.INTEGER,
    //   allowNull: false
    // }
    
});
};
