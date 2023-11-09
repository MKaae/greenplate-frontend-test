import { API_URL } from "./../../settings.js"
import { handleHttpErrors, makeOptions, sanitizeStringWithTableRows, sanitizer } from "./../../utility.js"

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


        // // Parse the JSON string
        // const jsonData = JSON.parse(JSON.stringify(recipe));
        // // Function to format JSON content into HTML
        // console.log("recipe: ", jsonData)
        // function formatJsonToHtml(jsonData) {
        //     return Object.entries(jsonData)
        //       .map(([key, value]) => `<strong>${key}:</strong><br>${value.replace(/\n/g, '<br>')}<br>`)
        //       .join('');
        //   }
        //   console.log(jsonData)
        // // Insert the formatted HTML into the card body
        // document.getElementById('.card-text').innerHTML = formatJsonToHtml(jsonData);

        document.querySelector(".card-text").innerHTML = sanitizer(JSON.stringify(recipe))
}

