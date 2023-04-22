let palabrasPorReemplazar = [
	{
		nombre: 'sed',
		reemplazo: 'UNO',
		contador: 0,
		valorEsperado: 6,
		color: '#FF5500',
	},
	{
		nombre: 'vehicula',
		reemplazo: 'DOS',
		contador: 0,
		valorEsperado: 4,
		color: '#FF99B2',
	},
	{
		nombre: 'vivamus',
		reemplazo: 'TRES',
		contador: 0,
		valorEsperado: 3,
		color: '#FF99F5',
	},
	{
		nombre: 'nam',
		reemplazo: 'CUATRO',
		contador: 0,
		valorEsperado: 3,
		color: '#BB99FF',
	},
	{
		nombre: 'eros',
		reemplazo: 'CINCO',
		contador: 0,
		valorEsperado: 2,
		color: '#99C5FE',
	},
	{
		nombre: 'vestibulum',
		reemplazo: 'SEIS',
		contador: 0,
		valorEsperado: 2,
		color: '#00CEFF',
	},
	{
		nombre: 'quam',
		reemplazo: 'SIETE',
		contador: 0,
		valorEsperado: 2,
		color: '#01FFFE',
	},
	{
		nombre: 'sollicitudin',
		reemplazo: 'OCHO',
		contador: 0,
		valorEsperado: 2,
		color: '#00FF9F',
	},
	{
		nombre: 'finibus',
		reemplazo: 'NUEVE',
		contador: 0,
		valorEsperado: 2,
		color: '#B6FF01',
	},
	{
		nombre: 'dictum',
		reemplazo: 'DIEZ',
		contador: 0,
		valorEsperado: 2,
		color: '#FFFF00',
	},
	{
		nombre: 'morbi',
		reemplazo: 'ONCE',
		contador: 0,
		valorEsperado: 2,
		color: '#FFB600',
	},
];
// Genera e inyecta textos de reemplazo
let nuevoTexto = (palabra) => {
	return (reemplazo = displayTexto.innerHTML.replaceAll(
		palabra.nombre,
		function (match) {
			if (match) {
				let encontrado = `<span style='font-weight:bold'>${palabra.reemplazo}</span>`;
				palabra.contador++;
				return encontrado;
			}
		}
	));
};

// Evalúa si se cumple con el valor esperado, de ser asi muestra en consola con el color entregado
let mostrarEnConsola = (nombre, valor, valorEsperado, color) => {
	if ((valor ||= valor == valorEsperado)) {
		console.log(`%c${nombre}: ${valor}`, `color: ${color}`);
	} else {
		console.log('el valor no coincide con el esperado');
	}
};
// Ciclo for each para reemplazar cada palabra y mostrar en consola el resultado con color
palabrasPorReemplazar.forEach((palabra) => {
	displayTexto.innerHTML = nuevoTexto(palabra);
	mostrarEnConsola(
		palabra.nombre,
		palabra.contador,
		palabra.valorEsperado,
		palabra.color
	);
});
