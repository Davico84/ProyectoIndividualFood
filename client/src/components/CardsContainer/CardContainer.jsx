import Card from "../Card/Card"
import style from "./CardContainer.module.css"
import {corregirFormatoData} from  "../../Utils/utils"
const CardContainer =()=>{

	const recetas= [
		{
			"id": 716426,
			"nombre": "Cauliflower, Brown Rice, and Vegetable Fried Rice",
			"resumen": "You can never have too many Chinese recipes, so give Cauliflower, Brown Rice, and Vegetable Fried Rice a try. This recipe serves 8 and costs $1.12 per serving. This hor d'oeuvre has <b>192 calories</b>, <b>7g of protein</b>, and <b>6g of fat</b> per serving. Head to the store and pick up broccoli, sesame seeds, soy sauce, and a few other things to make it today. 3689 people were impressed by this recipe. It is brought to you by fullbellysisters.blogspot.com. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. From preparation to the plate, this recipe takes roughly <b>30 minutes</b>. Overall, this recipe earns a <b>spectacular spoonacular score of 100%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1584601\">Cauliflower, Brown Rice, and Vegetable Fried Rice</a>, <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1238897\">Cauliflower, Brown Rice, and Vegetable Fried Rice</a>, and <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1230097\">Cauliflower, Brown Rice, and Vegetable Fried Rice</a>.",
			"comidaSaludable": 75,
			"create": false,
			"tipoDeDieta": [
				"gluten free",
				"dairy free",
				"lacto ovo vegetarian",
				"vegan"
			]
		},
		{
			"id": 716627,
			"nombre": "Easy Homemade Rice and Beans",
			"resumen": "Easy Homemade Rice and Beans is a main course that serves 2. One serving contains <b>446 calories</b>, <b>19g of protein</b>, and <b>4g of fat</b>. For <b>$1.06 per serving</b>, this recipe <b>covers 26%</b> of your daily requirements of vitamins and minerals. A mixture of optional: of hot sauce, canned tomatoes, water, and a handful of other ingredients are all it takes to make this recipe so yummy. This recipe from cooking2perfection.blogspot.com has 471 fans. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. From preparation to the plate, this recipe takes around <b>35 minutes</b>. Overall, this recipe earns a <b>tremendous spoonacular score of 98%</b>. <a href=\"https://spoonacular.com/recipes/easy-homemade-rice-and-beans-1311839\">Easy Homemade Rice and Beans</a>, <a href=\"https://spoonacular.com/recipes/easy-homemade-rice-and-beans-1303021\">Easy Homemade Rice and Beans</a>, and <a href=\"https://spoonacular.com/recipes/easy-homemade-rice-and-beans-1230117\">Easy Homemade Rice and Beans</a> are very similar to this recipe.",
			"comidaSaludable": 60,
			"create": false,
			"tipoDeDieta": [
				"gluten free",
				"dairy free",
				"lacto ovo vegetarian",
				"vegan"
			]
		},
		{
			"id": 794349,
			"nombre": "Broccoli and Chickpea Rice Salad",
			"resumen": "Broccoli and Chickpea Rice Salad takes roughly <b>45 minutes</b> from beginning to end. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>355 calories</b>, <b>15g of protein</b>, and <b>10g of fat</b> per serving. This recipe serves 6. For <b>$1.13 per serving</b>, this recipe <b>covers 30%</b> of your daily requirements of vitamins and minerals. It works well as a main course. 44 people were glad they tried this recipe. It is brought to you by foodandspice.blogspot.com. A mixture of ground pepper, broccoli florets, olive oil, and a handful of other ingredients are all it takes to make this recipe so tasty. With a spoonacular <b>score of 99%</b>, this dish is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/broccoli-and-chickpea-rice-salad-1380823\">Broccoli and Chickpea Rice Salad</a>, <a href=\"https://spoonacular.com/recipes/broccoli-and-chickpea-rice-salad-1401089\">Broccoli and Chickpea Rice Salad</a>, and <a href=\"https://spoonacular.com/recipes/broccoli-and-chickpea-rice-salad-1287405\">Broccoli and Chickpea Rice Salad</a>.",
			"comidaSaludable": 83,
			"create": false,
			"tipoDeDieta": [
				"gluten free",
				"dairy free",
				"lacto ovo vegetarian",
				"vegan"
			]
		},
		{
			"id": 716311,
			"nombre": "Mango Fried Rice",
			"resumen": "Mango Fried Rice is a Chinese main course. This recipe makes 2 servings with <b>486 calories</b>, <b>16g of protein</b>, and <b>4g of fat</b> each. For <b>$1.51 per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. Several people made this recipe, and 262 would say it hit the spot. Head to the store and pick up scotch bonnet pepper, seasoning cubes, rice, and a few other things to make it today. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. It is brought to you by Afrolems. It is a good option if you're following a <b>gluten free and dairy free</b> diet. Overall, this recipe earns a <b>great spoonacular score of 94%</b>. <a href=\"https://spoonacular.com/recipes/mango-pork-fried-rice-176007\">Mango-Pork Fried Rice</a>, <a href=\"https://spoonacular.com/recipes/thai-beef-mango-fried-rice-1326163\">Thai Beef & Mango Fried Rice</a>, and <a href=\"https://spoonacular.com/recipes/thai-chicken-and-mango-fried-rice-509300\">Thai Chicken and Mango Fried Rice</a> are very similar to this recipe.",
			"comidaSaludable": 45,
			"create": false,
			"tipoDeDieta": [
				"gluten free",
				"dairy free"
			]
		},
		{
			"id": 716361,
			"nombre": "Stir Fried Quinoa, Brown Rice and Chicken Breast",
			"resumen": "You can never have too many main course recipes, so give Stir Fried Quinoa, Brown Rice and Chicken Breast a try. This recipe serves 1 and costs $3.58 per serving. One serving contains <b>750 calories</b>, <b>58g of protein</b>, and <b>20g of fat</b>. 39 people were impressed by this recipe. If you have cherry tomatoes, spring onion, butter, and a few other ingredients on hand, you can make it. It is brought to you by Afrolems. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. It is a good option if you're following a <b>gluten free</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 95%</b>. This score is tremendous. Try <a href=\"https://spoonacular.com/recipes/stir-fried-chicken-with-broccoli-brown-rice-793247\">Stir-fried chicken with broccoli & brown rice</a>, <a href=\"https://spoonacular.com/recipes/stir-fried-broccoli-with-brown-rice-meat-optional-569617\">Stir-Fried Broccoli with Brown Rice {Meat Optional}</a>, and <a href=\"https://spoonacular.com/recipes/stir-fried-chickpeas-and-asparagus-with-brown-rice-and-lemon-ta-31848\">Stir-fried Chickpeas And Asparagus With Brown Rice And Lemon Ta</a> for similar recipes.",
			"comidaSaludable": 66,
			"create": false,
			"tipoDeDieta": [
				"gluten free"
			]
		},
		{
			"id": "0e080f01-ffd7-4ed0-8439-d877dbba2ae5",
			"nombre": "pollo con rice",
			"resumen": "pollo glaseado al jugo con sillao ",
			"comidaSaludable": 10,
			"pasoAPaso": "paso1 herbir el pollo,paso2 charle sillao",
			"create": true,
			"tipoDeDieta": [
				{
					"nombre": "Gluten Free"
				},
				{
					"nombre": "Pescetarian"
				}
			]
		}
	]
	
	const dataLimpia= corregirFormatoData(recetas)
	//	console.log("arreglo Limpio",dataLimpia);
    return(
    <div className={style.mainContainer}>
        {
            dataLimpia.map(receta=>{

                return <Card
                            id={receta.id}
							key={receta.id}
                            nombre={receta.nombre} 
                            resumen={receta.resumen} 
                            create ={receta.create} 
							comidaSaludable={receta.comidaSaludable} 
							tipoDeDieta={receta.tipoDeDieta}
                        />
            })
        }
    </div>
)
}
export default CardContainer