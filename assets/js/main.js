const resultado = document.querySelector('.resultado');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn-calcular');
const dolar = 5.17;


function conversao() {

    btn.addEventListener('click', function() {
        let valorEmReal = input;
        real = valorEmReal.value;
        real = (dolar * real);
        real = real.toFixed(2);
        resultado.innerHTML = `R$ ${real}`;
        
    });
}

conversao();
