import styles from "./Form.module.css"
import {useState}from "react"
const Form =()=>{
    const [form,setForm]= useState({
        nombre:"",
        resumen:"",
        nivelcs:"",
        paso:"",
        chkKetogenic:false,
        chkGlutenFree:false,
        chkVegetarian:false,
        chkLactoVegetarian:false,
        chkOvoVegetarian:false,
        chkVegan:false,
        chkPaleo:false,
        chkPescetarian:false,
        chkPrimal:false,
        chkWhole30:false,
        chkLowFODMAP:false,
    })
    const changeHandler=(event)=>{
        const property =event.target.name;
        const value= event.target.value
        setForm({...form,[property]:value})
    }
return(
    <>hola
        <form>
            <div>
                <label>Nombre</label>
                <input type="text" value={form.nombre} onChange={changeHandler} name="nombre"/>
            </div>
            <div>
                <label>Resumen</label>
                <input type="text"value={form.resumen}onChange={changeHandler} name="resumen"/>
            </div>
            <div>
                <label>Nivel de "comida saludable" </label>
                <input type="text"value={form.nivelcs}onChange={changeHandler}name="nivelcs"/>
            </div>
            <div>
                <label>Paso a paso</label>
                <input type="text" value={form.paso}onChange={changeHandler}name="paso"/>
            </div>
            <div className={styles.chkboxs}>
                <p>Dietas</p>
                <div>
                    <input type="checkbox" id="1" name="chkKetogenic" onChange={changeHandler} checked={form.chkKetogenic} value="chkKetogenic" />Ketogenic
                    <input type="checkbox" id="2" name="chkGlutenFree" onChange={changeHandler} checked={form.chkGlutenFree} value="chkGlutenFree" />Gluten Free
                    <input type="checkbox" id="3" name="chkVegetarian" onChange={changeHandler} checked={form.chkVegetarian} value="chkVegetarian" />Vegetarian
                    <input type="checkbox" id="4" name="chkLactoVegetarian" onChange={changeHandler} checked={form.chkLactoVegetarian} value="chkLactoVegetarian" />Lacto-Vegetarian
                    <input type="checkbox" id="5" name="chkOvoVegetarian" onChange={changeHandler}checked={form.chkOvoVegetarian}value="chkOvoVegetarian" />Ovo-Vegetarian
                </div>
                <div>
                    <input type="checkbox" id="6" name="chkVegan" onChange={changeHandler} checked={form.chkVegan} value="chkVegan" />Vegan
                    <input type="checkbox" id="7" name="chkPaleo" onChange={changeHandler} checked={form.chkPaleo} value="chkPaleo" />Paleo
                    <input type="checkbox" id="8" name="chkPescetarian" onChange={changeHandler} checked={form.chkPescetarian}value="chkPescetarian" />Pescetarian
                    <input type="checkbox" id="9" name="chkPrimal" onChange={changeHandler} checked={form.chkPrimal} value="chkPrimal"/>Primal
                    <input type="checkbox" id="10" name="chkWhole30" onChange={changeHandler} checked={form.chkWhole30} value="chkWhole30"/>Whole30
                    <input type="checkbox" id="11" name="chkLowFODMAP" onChange={changeHandler} checked={form.chkLowFODMAP}value="chkLowFODMAP" />LowFODMAP


                    
                </div>

            </div>
        </form>
    </>

    )

}

export default Form;