const validatePostRecipe=(req,res,next)=>{
    const {nombre, resumen}= req.body;
    if(!nombre) return res.status(401).json({error: "NO ingreso Nombre de la receta"})
    if(!resumen) return res.status(401).json({error: "NO ingreso Resumen de la receta"})
    next()
}

module.exports={validatePostRecipe}