function converterTemperatura() {
    var temperaturaInput = document.getElementById('tempInput').value.trim(); // Remover espaços em branco extras
    var temperatura = parseFloat(temperaturaInput);
    var tipoEntrada = document.getElementById('tempTypeInput').value;
    var tipoSaida = document.getElementById('tempTypeOutput').value;
    var resultado = document.getElementById('resultado');

    // Verificar se o campo de temperatura está vazio
    if (temperaturaInput === '') {
        resultado.innerText = 'Por favor, insira uma temperatura.';
        return;
    }

    if ((tipoEntrada === 'kelvin' && temperatura < 0) || (tipoEntrada === 'celsius' && temperatura < -273.15)) {
        resultado.innerText = 'Temperatura de entrada inválida.';
        return;
    }

    if (tipoEntrada === 'celsius') {
        if (tipoSaida === 'fahrenheit') {
            resultado.innerText = temperatura + ' Celsius = ' + celsiusParaFahrenheit(temperatura).toFixed(2) + ' Fahrenheit';
        } else if (tipoSaida === 'kelvin') {
            resultado.innerText = temperatura + ' Celsius = ' + celsiusParaKelvin(temperatura).toFixed(2) + ' Kelvin';
        } else {
            resultado.innerText = 'Temperatura de saída não suportada';
        }
    } else if (tipoEntrada === 'fahrenheit') {
        if (tipoSaida === 'celsius') {
            resultado.innerText = temperatura + ' Fahrenheit = ' + fahrenheitParaCelsius(temperatura).toFixed(2) + ' Celsius';
        } else if (tipoSaida === 'kelvin') {
            resultado.innerText = temperatura + ' Fahrenheit = ' + fahrenheitParaKelvin(temperatura).toFixed(2) + ' Kelvin';
        } else {
            resultado.innerText = 'Temperatura de saída não suportada';
        }
    } else if (tipoEntrada === 'kelvin') {
        if (tipoSaida === 'celsius') {
            resultado.innerText = temperatura + ' Kelvin = ' + kelvinParaCelsius(temperatura).toFixed(2) + ' Celsius';
        } else if (tipoSaida === 'fahrenheit') {
            resultado.innerText = temperatura + ' Kelvin = ' + kelvinParaFahrenheit(temperatura).toFixed(2) + ' Fahrenheit';
        } else {
            resultado.innerText = 'Temperatura de saída não suportada';
        }
    }

    // Passar tipoEntrada para exibirInformacoesExtras()
    exibirInformacoesExtras(temperatura, tipoEntrada);
}



function exibirInformacoesExtras(temperatura, tipoEntrada) {
    var infoExtra = document.getElementById('infoExtra');
    var imagem = document.getElementById('imagemInfoExtra');
    var frase = document.getElementById('fraseInfoExtra');

    // Convertendo a temperatura para Celsius, se necessário
    if (tipoEntrada === 'fahrenheit') {
        temperatura = fahrenheitParaCelsius(temperatura);
    } else if (tipoEntrada === 'kelvin') {
        temperatura = kelvinParaCelsius(temperatura);
    }

    // Verificar se a temperatura corresponde a uma das temperaturas específicas
    if (Math.abs(temperatura - 0) < 0.01) {
        imagem.src = "assets/img/nevas.jpg";
        frase.innerText = 'temperatura que a água congela,geladin igual o nevasca';
    } else if (Math.abs(temperatura - 36) < 0.01) {
        imagem.src = 'assets/img/messi.jpg';
        frase.innerText = 'temperatura corporal média de um ser humano e da taça do messi';
    } else if (Math.abs(temperatura - 100) < 0.01) {
        imagem.src = 'assets/img/ponick.jpg';
        frase.innerText = 'ponto de ebulição da água, ponick segurando o vapor';
    } else if (Math.abs(temperatura - 15000000) < 0.01) {
        imagem.src = 'assets/img/colono.jpg';
        frase.innerText = 'temperatura aproximada da superfície do Sol ou do fogo no rabo do colono';
    } else {
        // Se a temperatura não corresponder a nenhuma das temperaturas específicas, oculte a div de informações extras
        infoExtra.style.display = 'none';
        return;
    }

    // Se a temperatura corresponder a uma das temperaturas específicas, exiba a div de informações extras
    infoExtra.style.display = 'block';
}





function celsiusParaFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

function celsiusParaKelvin(celsius) {
    return celsius + 273.15;
}

function fahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function fahrenheitParaKelvin(fahrenheit) {
    return (fahrenheit + 459.67) * 5 / 9;
}

function kelvinParaCelsius(kelvin) {
    return kelvin - 273.15;
}

function kelvinParaFahrenheit(kelvin) {
    return kelvin * 9 / 5 - 459.67;
}

