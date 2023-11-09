

export async function initFoodplan(match){
    console.log("initFoodplan()")
    const storeId = match.params.storeid    
    fetchRecipe(storeId)

}

async function fetchRecipe(storeId){
    
}

