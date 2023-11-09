import { API_URL } from "./../../settings.js"
import { handleHttpErrors, makeOptions, sanitizeStringWithTableRows } from "./../../utility.js"

const URL = API_URL + "/stores"
export async function initStores(){
   document.querySelector('#submit-zip').addEventListener("click", () => getStores(document.querySelector('#zipcode-input').value));
}

async function getStores(zip){
    //const zip = document.querySelector('#zipcode-input').value
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
    document.querySelector('.choose-store').addEventListener("click", chooseStore); 

} 

function chooseStore(e){
    const btn = e.target;

    if(!btn.id.includes("_storeid")){
        return;
    }

    const storeId = btn.id.split("_")[0];


    router.navigate(`/foodplan/?storeid=${storeId}`)

} 
/*
document.querySelector("#square-container").addEventListener("click",function (event) {
    let target = event.target;

    while (target && !target.id) {
      target = target.parentElement;
    }

    if (target) {
      const id = target.id.split("_")[0];
        if(localStorage.getItem("roles") == "USER"){
          router.navigate(/movieshow/?id=${id});
        } else {
          router.navigate(/login);
        }
      }
  });
*/

/*
async function setUpDeleteModal(e) {
    const btn = e.target;

    if(!btn.id.includes("_movie-id")){
        return;
    }
    const movieId = btn.id.split("_")[0];
    const header = `Delete movie with id ${movieId}?`

    document.querySelector("#delete-modal-label").textContent = header;

    document.querySelector("#delete-modal").addEventListener("click", async () => { await deleteMovie(movieId) });
    }
*/