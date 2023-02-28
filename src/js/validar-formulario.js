const campoDigitado = document.querySelectorAll(".caixa-texto");
const enviarFormulario = document.querySelector(".envio-formulario");
const alertaCampoDigitado = document.querySelectorAll(".alerta");

campoDigitado.forEach(function (caixa, index) {
    caixa.addEventListener("input", function () {
        if (caixa.value.length > 0) {
            caixa.classList.remove("erro");
            caixa.classList.add("ok");
            alertaCampoDigitado[index].classList.remove("erro");
            alertaCampoDigitado[index].classList.add("ok");
        }
        else {
            caixa.classList.remove("ok");
            alertaCampoDigitado.forEach(function (alerta) {
                alerta.classList.remove("ok");
            });
        }
    });
});

enviarFormulario.addEventListener("click", function () {
    campoDigitado.forEach(function (caixa, index) {
        if (caixa.value.length <= 0) {
            caixa.classList.add("erro");
            caixa.classList.remove("ok");
            alertaCampoDigitado[index].classList.add("erro");
            alertaCampoDigitado[index].classList.remove("ok");
        }
        else {
            caixa.classList.remove("erro");
            caixa.classList.add("ok");
            alertaCampoDigitado[index].classList.remove("erro");
            alertaCampoDigitado[index].classList.add("ok");
        }
    });
});
