const icone = document.querySelector('#icone');
const ipt = document.querySelector('#ipt');

// Adiciona a variavel do icone um evento de click
icone.addEventListener("click", function(){
    // A const type recebe o valor do input
    // O valor do input alterna entre password e text quando clicado
const type = ipt.type === "password" ? "text" : "password";
ipt.type = type;

// Muda o iconee
icone.classList.toggle('fa-eye');
icone.classList.toggle('fa-eye-slash');
});