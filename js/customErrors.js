export const errorTypes = [
    "valueMissing", 
    "typeMissmatch", 
    "patternMismatch", 
    "tooShort", 
    "customError"
]

export const messages = {
    name:{
        valueMissing: "Nombre, no puede estar vacío",
        tooShort: "Por favor, ingresa un nombre válido"
    },
    price:{
        valueMissing: "El precio no puede estar vacío",
        tooShort: "ingresa un valor válido (mayor a 1)",
        patternMismatch: "Solo se admiten numeros"
    },
    img:{
        valueMissing: "la url de la imagen no puede estar vacía",
        tooShort: "Por favor ingresa una dirección válida.",
        patternMismatch: "La url debe corresponder a una imagen"
    }
}