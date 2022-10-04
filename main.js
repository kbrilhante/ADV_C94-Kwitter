function addUsuario() {
    let nomeUsuario = document.getElementById("nomeUsuario").value;
    localStorage.setItem("nomeUsuario", nomeUsuario);
    // window.location = "sala.html"
    location = "sala.html"
}