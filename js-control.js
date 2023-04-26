const buttons_teclado = document.querySelectorAll('.teclado > div > button');

buttons_teclado.forEach(element => {
    element.type = 'button';
});

buttons_teclado.forEach(botao => {
    if(botao.classList.contains('tecla_letra')){
        botao.addEventListener('click', function(){
            console.log('valor é: ' + this.innerHTML)
            adicionarTecla(this.innerHTML);
        });
    }
});

let upperStatus = false;
function toUpperCase() {
    const teclaShift = document.getElementById('shift_button');
    if (!upperStatus) {
        buttons_teclado.forEach(element => {
            if (element.classList.contains('tecla_letra')) {
                teclaShift.classList.add('pressionado_button');
                element.innerHTML = element.innerHTML.toUpperCase();
            }
        });
        upperStatus = true;
    }
    else{
        buttons_teclado.forEach(element => {
            if (element.classList.contains('tecla_letra')) {
                teclaShift.classList.remove('pressionado_button');
                element.innerHTML = element.innerHTML.toLowerCase();
            }
        });
        upperStatus = false;
    }
}
function adicionarTecla(tecla){
    const mensagem = document.querySelector('#mensagem');
    mensagem.innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀";
    const password_input = document.querySelector('#password_input');
    password_input.value = password_input.value + tecla;

}

function apagarCaractere(){
    const password_input = document.querySelector('#password_input');
    password_input.value = password_input.value.substring(0, password_input.value.length - 1);
}

const input = document.querySelector('#password_input');
const mensagem = document.querySelector('#mensagem');
document.addEventListener('keydown', function(event) {
  if (event.target === input) {
    event.preventDefault();
    mensagem.innerText = 'Para mais segurança, utilize o teclado virtual!';
  }
});