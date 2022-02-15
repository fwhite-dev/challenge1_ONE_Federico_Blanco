
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

// ------------------------ENCRIPTAR PRUEBA
const btnEncriptar = document.getElementById("btn-encriptar")

const campoEncriptado = document.getElementById("msg")

const btnDescriptar = document.getElementById("btn-desencriptar")

const campoDesencriptado = document.getElementById("input-texto")



btnEncriptar.addEventListener("click", (event) => {
    event.preventDefault();

    let mensajeParaEncriptar = campoDesencriptado.value

    let a = mensajeParaEncriptar.replaceAll("e","enter")
    let b = a.replaceAll("i","imes")
    let c = b.replaceAll("a","ai")
    let d = c.replaceAll("o","ober")
    let e = d.replaceAll("u","ufat")

    campoEncriptado.value=e
    
})

// ----------------------DESENCRIPTAR


btnDescriptar.addEventListener("click", (event) => {
    event.preventDefault();
    
    const mensajeParaDescriptar = campoEncriptado.value
    
    let f = mensajeParaDescriptar.replaceAll("enter","e")
    let g = f.replaceAll("imes","i")
    let h = g.replaceAll("ai","a")
    let i = h.replaceAll("ober","o")
    let j = i.replaceAll("ufat","u")

    
    campoDesencriptado.value=j

    
})

// --------------------COPIAR

const btnCopiar = document.getElementById("btn-copy")

btnCopiar.addEventListener("click", (event) => {
    event.preventDefault()
    const copiar = campoEncriptado.value
    navigator.clipboard.writeText(copiar)

})


