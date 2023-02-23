require('dotenv').config();
const {  DB_USER, DB_PASSWORD, DB_HOST,} = process.env;
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

//tipos de dietas
const dietsTypesArr= [ 
  {nombre:"Gluten Free" ,descripcion:"Eliminating gluten means avoiding wheat, barley, rye, and other gluten-containing grains and foods made from them (or that may have been cross contaminated)."},
  {nombre:"Ketogenic" ,descripcion:"The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients. Generally speaking, high fat, protein-rich foods are acceptable and high carbohydrate foods are not. "},
  {nombre:"Vegetarian" ,descripcion:"No ingredients may contain meat or meat by-products, such as bones or gelatin."},
  {nombre:"Lacto-Vegetarian" ,descripcion:"All ingredients must be vegetarian and none of the ingredients can be or contain egg."},
  {nombre:"Ovo-Vegetarian" ,descripcion:"All ingredients must be vegetarian and none of the ingredients can be or contain dairy."},
  {nombre:"Vegan" ,descripcion:"No ingredients may contain meat or meat by-products, such as bones or gelatin, nor may they contain eggs, dairy, or honey."},
  {nombre:"Pescetarian" ,descripcion:"Everything is allowed except meat and meat by-products - some pescetarians eat eggs and dairy, some do not."},
  {nombre:"Paleo" ,descripcion:"Allowed ingredients include meat (especially grass fed), fish, eggs, vegetables, some oils (e.g. coconut and olive oil), and in smaller quantities, fruit, nuts, and sweet potatoes. "},
  {nombre:"Primal" ,descripcion:"Very similar to Paleo, except dairy is allowed - think raw and full fat milk, butter, ghee, etc."},
  {nombre:"Low FODMAP" ,descripcion:`FODMAP stands for "fermentable oligo-, di-, mono-saccharides and polyols". Our ontology knows which foods are considered high in these types of carbohydrates (e.g. legumes, wheat, and dairy products).`},
  {nombre:"Whole30" ,descripcion:"Allowed ingredients include meat, fish/seafood, eggs, vegetables, fresh fruit, coconut oil, olive oil, small amounts of dried fruit and nuts/seeds. "}
           ]

//const db= new Sequelize(`postgres://${user}:${password}@localhost:5432/${dbname}`,{logging:false})//conexion
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/food`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Recipe, DietType } = sequelize.models;

// Aca vendrian las relaciones

Recipe.belongsToMany(DietType, { through: 'RecipeDietTypes' });
DietType.belongsToMany(Recipe, { through: 'RecipeDietTypes' });

module.exports = {
  typesArr: dietsTypesArr,
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize     // para importart la conexión { conn } = require('./db.js');
};
