function copiarCodigo(id) {
    const codigo = document.getElementById(id).innerText;
    navigator.clipboard.writeText(codigo);
    alert("Código copiado al portapapeles");
}


