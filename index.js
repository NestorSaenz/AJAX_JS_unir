// Ejercicio 1: Detectar si la cadena de entrada es un palíndromo con validaciones
function esPalindromo(cadena) {
    if (typeof cadena !== 'string' || !cadena.trim()) {
        return 'Por favor, ingresa una cadena válida.';
    }
    // Eliminar signos de puntuación, espacios y pasar a minúsculas
    const limpia = cadena.replace(/[\W_]/g, '').toLowerCase();
    if (!limpia) {
        return 'La cadena no contiene caracteres alfabéticos.';
    }
    return limpia === limpia.split('').reverse().join('');
}

// Ejercicio 2: Pedir dos números y mostrar cuál es mayor, con validaciones
function mayorDeDos(num1, num2) {
    // Validar que ambos sean números y no NaN
    if (num1 === '' || num2 === '') {
        return 'Por favor, ingresa ambos números.';
    }
    const n1 = Number(num1);
    const n2 = Number(num2);
    if (isNaN(n1) || isNaN(n2)) {
        return 'Ambos valores deben ser números válidos.';
    }
    if (!isFinite(n1) || !isFinite(n2)) {
        return 'Los números deben ser finitos.';
    }
    if (n1 > n2) return `${n1} es mayor que ${n2}`;
    if (n2 > n1) return `${n2} es mayor que ${n1}`;
    return 'Ambos números son iguales';
}

// Ejercicio 3: Pedir una frase y escribir las vocales que aparecen
function vocalesEnFrase(frase) {
    const vocales = frase.match(/[aeiouáéíóúü]/gi);
    return vocales ? [...new Set(vocales)].join(', ') : 'No hay vocales';
}

// Ejercicio 4: Contar cuántas veces aparece cada vocal en una frase
function contarVocales(frase) {
    const conteo = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    for (let letra of frase.toLowerCase()) {
        if (conteo.hasOwnProperty(letra)) conteo[letra]++;
    }
    return conteo;
}

// AJAX: Funciones para interactuar con la página web
function cargarURLPorDefecto() {
    document.getElementById('urlInput').value = window.location.href;
}

function mostrarContenidos() {
    const url = document.getElementById('urlInput').value;
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        document.getElementById('estadoPeticion').textContent = xhr.readyState + ' - ' + estadosXHR[xhr.readyState];
        if (xhr.readyState === 4) {
            document.getElementById('zonaContenidos').textContent = xhr.responseText;
            document.getElementById('codigoEstado').textContent = `${xhr.status} ${xhr.statusText}`;
            document.getElementById('cabecerasHTTP').textContent = xhr.getAllResponseHeaders();
        }
    };

    xhr.open('GET', url, true);
    xhr.send();
}

const estadosXHR = [
    'No iniciada',
    'Conexión establecida',
    'Recibido',
    'Procesando',
    'Completada'
];

// Llama a cargarURLPorDefecto() al cargar la página
window.onload = cargarURLPorDefecto;