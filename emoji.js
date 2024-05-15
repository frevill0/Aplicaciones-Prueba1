const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '',
		'X-RapidAPI-Host': 'emoji3.p.rapidapi.com'
	}
};

const Seleccionar = (id) => {
    fetch(`https://emoji3.p.rapidapi.com/emoji?name=${id}`, options)
        .then(res => res.json())
            .then(response => console.log(response[id]))
}

const lista = ['scissors', 'receipt', 'mountain'];

const obtenerElementoAleatorio = (lista) => {
    // Seleccionar un índice aleatorio de la lista
    const indiceAleatorio = Math.floor(Math.random() * lista.length);
    // Retornar el elemento en el índice seleccionado
    return lista[indiceAleatorio];
};

const btnSeleccionar = () => 
{
    let primeraOpcion = obtenerElementoAleatorio(lista);
    let segundaOpcion = obtenerElementoAleatorio(lista); 
    Seleccionar(primeraOpcion)
    Seleccionar(segundaOpcion)
};

btnSeleccionar(); 
