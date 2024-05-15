const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fa4c576f91mshc1c89ae97cdcdb7p109c24jsn76f01d10eb00',
		'X-RapidAPI-Host': 'emoji3.p.rapidapi.com'
	}
};

const Seleccionar = (id, number) => {
    fetch(`https://emoji3.p.rapidapi.com/emoji?name=${id}`, options)
        .then(res => res.json())
            .then(response => pintarEmoji(response[id],number))
}

const obtenerElementoAleatorio = (lista) => {
    // Seleccionar un índice aleatorio de la lista
    const indiceAleatorio = Math.floor(Math.random() * lista.length);
    // Retornar el elemento en el índice seleccionado
    return lista[indiceAleatorio];
};

const lista = ['victory_hand', 'raised_hand', 'oncoming_fist'];

const btnSeleccionar = () => 
{
    let primeraOpcion = obtenerElementoAleatorio(lista);
    let segundaOpcion = obtenerElementoAleatorio(lista); 
    Seleccionar(primeraOpcion, 1)
    Seleccionar(segundaOpcion, 2)
};

btnSeleccionar(); 

const pintarEmoji = (data, id) => {
    const pElement1 = document.querySelector(`#pok-${id}`);

    pElement1.getElementsByTagName("p")[0].innerHTML = data;
    
};
