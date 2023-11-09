import { API_URL } from "./../../settings.js"
import { handleHttpErrors, makeOptions, sanitizeStringWithTableRows } from "./../../utility.js"

const URL = API_URL + "/recipes/limited"

export async function initFoodplan(match){
    console.log("initFoodplan()")
    const storeId = match.params.storeid    
    fetchRecipe(storeId)

}

async function fetchRecipe(storeId){
        console.log(URL + "?storeId=" + storeId)
        
        const recipe = await fetch(URL + "?storeId=" + storeId, makeOptions("GET", null, false)).then(r =>handleHttpErrors(r))
        console.log(recipe)
}
