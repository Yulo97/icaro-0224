import axios from "axios"
 
const getProductsFetch = () =>
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(response => console.log("Ejemplo GET fetch:", response))
 
const getProductsAxios = () => 
    axios.get("https://fakestoreapi.com/products")
    .then(response => console.log(response.data))


///////////////// ASYNC Y AWAIT //////////////

const getProductsFetch1 = async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    console.log(data)
}

const getProductsAxios1 = async () => {
    try {
        const response = await axios.get("https://fakestoreapi.com/prodcts")
        console.log(response.data)
    } catch (error) {
        console.log("ERROR: ", error.message)
    }
}
