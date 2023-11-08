import { API_URL } from "./../../settings.js"
import { handleHttpErrors, makeOptions, sanitizeStringWithTableRows } from "./../../utility.js"

const URL = API_URL + "/stores"
export async function initStores(){
   //document.querySelector('#submit-zip').addEventListener("click", getStores)
   document.querySelector('#submit-zip').addEventListener("click", () => getStores(document.querySelector('#zipcode-input').value)); 
}

async function getStores(zip){
    //const zip = document.querySelector('#zipcode-input').value

    const stores = await fetch(URL + "?zipcode=" + zip, makeOptions("GET", null, false)).then(r =>handleHttpErrors(r))
    const storeRows = stores.map(store => `
        <tr>
            <td>${store.brand}</td>
            <td>${store.name}</td>
            <td>${store.address.city}</td>
            <td>${store.address.street}</td>
            <td>${store.address.zip}</td>
            <td id="store-id">${store.id}</td>
        </tr>`
        ).join("")
    document.querySelector('#zip-tablerows').innerHTML = sanitizeStringWithTableRows(storeRows);
} 

/*
#zip-tablerows

public class StoreResponse {
    private String id;
    private String brand;
    private String name;
    private Address address;

    @Getter
    @Setter
    @NoArgsConstructor
    private static class Address{
        public String city;
        public String street;
        public int zip;
    }
}
*/