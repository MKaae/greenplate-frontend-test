import { API_URL } from "./../../settings.js"
import { handleHttpErrors, makeOptions, sanitizeStringWithTableRows } from "./../../utility.js"

const URL = API_URL + "/stores"
export async function initStores(){
   document.querySelector('#submit-zip').addEventListener("click", () => getStores(document.querySelector('#zipcode-input').value));
   document.querySelector('#zip-tablerows').addEventListener("click", function (e) {
    chooseStore(e);
   })
}

async function getStores(zip){
    document.querySelector('.zip-table').style.visibility = "visible"
    const stores = await fetch(URL + "?zipcode=" + zip, makeOptions("GET", null, false)).then(r =>handleHttpErrors(r))
    const storeRows = stores.map(store => `
        <tr>
            <td>${store.name}</td>
            <td>${store.address.city}</td>
            <td>${store.address.street}</td>
            <td>${store.address.zip}</td>
            <td><button id="${store.id}_storeid" class="choose-store btn btn-sm btn-danger">Vælg butik</button></td>
        </tr>`
        ).join("")
    document.querySelector('#zip-tablerows').innerHTML = sanitizeStringWithTableRows(storeRows);

} 

function chooseStore(e){
    const btn = e.target;

    if (!btn.id || !btn.id.includes("_storeid")) {
        return;
    }

    const storeId = btn.id.split("_")[0];

    router.navigate(`/foodplan/?storeid=${storeId}`);
} 