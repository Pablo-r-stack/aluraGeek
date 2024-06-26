// const apiURL = 'http://localhost:3000/products';
const apiURL = 'https://alura-geek-api-kohl.vercel.app/products';

const listProducts = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    return data;
}

const newProduct = (async (formData) => {
    const response = await fetch(apiURL, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })

    if (!response.ok) {
        const errorText = await response.text(); // Captura el texto del error
        throw new Error('Network response was not ok: ' + errorText);
    }

    const data = await response.json();
    return data;
})

const updateProduct = (async (id, formData) => {
    console.log('will try to update ' + id);
    const response = await fetch(`${apiURL}/${id}`,{
        method:"PUT",
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
    });
    if (!response.ok) {
        const errorText = await response.text(); // Captura el texto del error
        throw new Error('Network response was not ok: ' + errorText);
    }

    const data = await response.json();
    return data;
})

const deleteProduct = (async (id) => {
    console.log(`Attemping to delete ${id}`);
    const response = await fetch(`${apiURL}/${id}`, {method: "DELETE"});
     if (!response.ok) {
         const errorText = await response.text(); // Captura el texto del error
         throw new Error('Network response was not ok: ' + errorText);
     }
    console.log('delete was succesful');
     const data = await response.json();
     return data;
})

const searchProductById = (async (id) => {
    const response = await fetch(`${apiURL}/${id}`);
    if(!response.ok){
        const errorText = await response.text();
        throw new Error('Network response was not ok ' + errorText);
    }
    const data = await response.json();
    return data;
})

const searchProducts = (async(keyName)=>{
    const response = await fetch(`${apiURL}?q=${keyName}`);
    const data = await response.json();
    return data;
})

listProducts();

export const conectionAPI = {
    listProducts, newProduct, searchProductById, deleteProduct, updateProduct, searchProducts
}