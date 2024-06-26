import { conectionAPI } from "./js/conectionApi.js";
import createProducts from "./js/createProducts.js";

const productList = document.querySelector('[data-products]');
const latestList = document.querySelector('[data-latest]');
const searchInput = document.querySelector('[data-busqueda]');
const searchList = document.querySelector('[data-search]');


document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
    const deleteBtn = document.querySelectorAll('.trash-icon');
    deleteBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log('clicked');
        })
    })
})

searchInput.addEventListener('keyup', (e) => {
    var key = e.which || e.keyCode;
    if (key == 13) {
        searchProducts(e)
    }
})



const fetchProducts = (async () => {
    try {
        const apiList = await conectionAPI.listProducts();
        console.log(apiList.length < 5);
        if (apiList.length > 0) {
            const latest = apiList.length < 5 ? apiList : apiList.slice(-5);
            latest.forEach((product) => latestList.appendChild(createProducts(product.id, product.name, product.price, product.img, product.url, 'card')));
            apiList.forEach((product) => productList.appendChild(createProducts(product.id, product.name, product.price, product.img, product.url, 'card-h')));
        } else {
            const main = document.querySelector('main');
            main.innerHTML = '<h2>Por el momento, no hay productos disponibles :( <br> Por favor vuelve a carga productos o vuelve más tarde.</h2>'
        }

    } catch {
        productList.innerHTML = `<h2>Something went Wrong, please refresh and try again...</h2>`
    }
    addEventListeners();
})

function addEventListeners() {
    const deleteBtn = document.querySelectorAll('.trash-icon');
    deleteBtn.forEach(btn => {
        btn.addEventListener('click', async (e) => {
            e.preventDefault();
            const id = e.target.closest('.info').getAttribute('data-id');
            await deleteProduct(id);
            location.reload();
        })
    })
    const updateBTN = document.querySelectorAll('.edit-icon');
    updateBTN.forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const id = e.target.closest('.info').getAttribute('data-id');
            window.location.href = `../pages/edit-product.html?id=${id}`;
        })
    })
}

const deleteProduct = (async (id) => {
    try {
        await conectionAPI.deleteProduct(id);
    } catch (error) {
        console.log(error.message);
        alert(error.message);
    }
})

const searchProducts = (async (e) => {
    e.preventDefault();
    const keyName = searchInput.value;
    try {
        const results = await conectionAPI.searchProducts(keyName);
        while (searchList.firstChild) {
            searchList.removeChild(searchList.firstChild);
        }
        results.forEach(product => searchList.appendChild(createProducts(product.id, product.name, product.price, product.img, product.url, 'card')));
        if (results.length == 0) {
            searchList.innerHTML = `<h2>No se encontraron productos con esa caracteristica</h2>`
        }
    }catch {
        searchList.innerHTML= `<h2>Something went Wrong, please refresh and try again...</h2>`
    }
})