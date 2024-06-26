import { conectionAPI } from "./conectionApi.js";
import { validateForm } from "./validation.js";
const form = document.querySelector('[data-form]');
const inputs = form.querySelectorAll('input');

console.log(inputs);

form.addEventListener('submit', (e)=> updateProduct(e));

document.addEventListener('DOMContentLoaded', ()=>{
    //on redirection will recover searchParam from url header
    
    const productId = useParam();
    if(productId){
        console.log(`Searching id ${productId}`);
        loadData(productId);
    }else{
        console.log('None id was found, redirecting');
        window.location.href="/index.html";
    }
})

inputs.forEach((input)=>{
    input.addEventListener('blur', ()=> validateForm(input));
    input.addEventListener('invalid', e=> e.preventDefault());
});

const useParam = (()=>{
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
})

const loadData = (async(id)=>{
    const product = await conectionAPI.searchProductById(id);
    //will fill the form matching fields names w object properties.
    inputs.forEach(input=>{

        const inputName = input.getAttribute('name');
        if(product.hasOwnProperty(inputName)){
            input.value = product[inputName];
        }
    })
})


const updateProduct = (async(e)=>{
    e.preventDefault();
    const id = useParam();
    const formData = {};
    inputs.forEach(input =>{
        formData[input.name] = input.value;
    });
    console.log(formData);
    try {
        await conectionAPI.updateProduct(id, formData);
        window.location.href="/index.html";
    } catch (error) {
        console.log(error.message);
        alert(error.message);
    }
})