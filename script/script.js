const button = document.getElementById("generate");

const gerador = () => {
    const min = parseInt(document.getElementById("min").value);
    const max = parseInt(document.getElementById("max").value);
    const ganhador = parseInt(document.getElementById("my-number").value);
    const resultado2 = document.getElementById("resultado2");

    let result = Math.floor(Math.random() * (max - min + 1)) + min;

    document.querySelector("#result").innerHTML = result;

    if (ganhador === result) {
        resultado2.innerHTML = "voce venceu!";
    } else {
        resultado2.innerHTML = "voce perdeu!";
    }
};

button.addEventListener("click", gerador);
