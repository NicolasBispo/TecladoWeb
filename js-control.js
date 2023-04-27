const buttons_teclado = document.querySelectorAll('.teclado > div > button');

buttons_teclado.forEach(element => {
    element.type = 'button';
});

buttons_teclado.forEach(botao => {
    if (botao.classList.contains('tecla_letra')) {
        botao.addEventListener('click', function () {
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
    else {
        buttons_teclado.forEach(element => {
            if (element.classList.contains('tecla_letra')) {
                teclaShift.classList.remove('pressionado_button');
                element.innerHTML = element.innerHTML.toLowerCase();
            }
        });
        upperStatus = false;
    }
}
function adicionarTecla(tecla) {
    console.log('tecla adicionada foi:' + tecla)

    if (tecla == '&amp;') {
        tecla = '&';
        console.log('nova tecla = ' + tecla);
    }
    const mensagem = document.querySelector('#mensagem');
    mensagem.innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀";
    const password_input = document.querySelector('#password_input');
    password_input.value = password_input.value + tecla;

}

function apagarCaractere() {
    const password_input = document.querySelector('#password_input');
    password_input.value = password_input.value.substring(0, password_input.value.length - 1);
}

let simbolStatus = false
function mudarSimbolos() {
    const simbolButton = document.querySelector('#simbolButton');
    simbolButton.classList.add('pressionado_button')
    const linha1_letras = document.querySelectorAll('.linha1 .tecla_letra');
    const linha2_letras = document.querySelectorAll('.linha2 .tecla_letra');
    const linha3_letras = document.querySelectorAll('.linha3 .tecla_letra');
    if (!simbolStatus) {


        let contador1 = 0;
        const elementos_trocar_linha1 = ['@', '#', '$', '_', '&', '-', '+', '(', ')'];
        linha1_letras.forEach(button => {
            if (button.classList.contains('tecla_letra')) {
                let valorBotao = elementos_trocar_linha1[contador1];
                button.innerHTML = valorBotao;
                contador1++;
            }
        });

        console.log('contador2');
        let contador2 = 0;
        const elementos_trocar_linha2 = ['/', '*', '"', "'", ':', ';', '!', '?', '\\/', '='];
        linha2_letras.forEach(button2 => {
            button2.innerHTML = elementos_trocar_linha2[contador2];
            contador2++;
        });

        linha3_letras.forEach(button => {
            button.classList.add('disabled_option')
            button.disabled = true;
        });
        simbolStatus = true;
    }
    else {
        simbolStatus = false;
        simbolButton.classList.remove('pressionado_button');
        linha3_letras.forEach(button => {
            button.classList.remove('disabled_option')
            button.disabled = false;
            exibirTeclasPadrao();
        });

    }
}

function exibirTeclasPadrao(){
    const teclasLetraL1 = document.querySelectorAll('.linha1 .tecla_letra');
    const teclasLetraL2 = document.querySelectorAll('.linha2 .tecla_letra');
    const teclasLetraL3 = document.querySelectorAll('.linha3 .tecla_letra');

    const letrasLinha1 = ['q','w','e','r','t','u','v','o','p'];
    const letrasLinha2 = ['a','s','d','f','g','h','j','k','l','ç'];
    const letrasLinha3 = [',','z','x','c','v','b','n','m','.'];

    let contadorL1 = 0;
    teclasLetraL1.forEach(botao => {
        botao.innerHTML = letrasLinha1[contadorL1];
        contadorL1++;
    });

    let contadorL2 = 0;
    teclasLetraL2.forEach(botao => {
        botao.innerHTML = letrasLinha2[contadorL2];
        contadorL2++;
    });

    let contadorL3 = 0;
    teclasLetraL3.forEach(botao => {
        botao.innerHTML = letrasLinha3[contadorL3];
        contadorL3++;
    });
}

const input = document.querySelector('#password_input');
const mensagem = document.querySelector('#mensagem');
document.addEventListener('keydown', function (event) {
    if (event.target === input) {
        event.preventDefault();
        mensagem.innerText = 'Para mais segurança, utilize o teclado virtual!';
    }
});
