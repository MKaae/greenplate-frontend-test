let API_URL;

if (window.location.hostname === 'localhost' || window.location.hostname === "127.0.0.1"){
    console.log("I'm using localhost!")
    API_URL = "http://localhost:8080/api"
} else {
    console.log("I'm using Azure")
    API_URL = "https://greenplate-backend.azurewebsites.net/api"
}


export { API_URL };

export const FETCH_NO_API_ERROR = " (Is the API online or did the endpoint exists ?)"