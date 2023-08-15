let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes = [
    {quote: '"Eres tú, el jugador, el que tiene el poder de decidir si esta historia tiene un final feliz o no."',
    person: 'Stanley, "The Stanley Parable"'},

    {quote: '"En un mundo sin sol, un caballero debe enfrentarse a sí mismo."',
    person: 'Hornet, "Hollow Knight"'},

    {quote: '"¿Por qué siempre buscas la aprobación de los demás? ¿Acaso no puedes hacer lo que te hace feliz?"',
    person: 'Madeline, "Celeste"'},

    {quote: '"El mundo es un lugar terrible, pero no hay necesidad de hacerlo peor de lo que es."',
    person: 'Sans, "Undertale"'},

    {quote: '"Nadie puede elegir quién es en este mundo, pero tu sí puedes elegir quién quieres ser en el siguiente."',
    person: 'Ralsei, "Deltarune"'},

    {quote: '"Toda decisión es la correcta si ayuda a la causa."',
    person: 'Supervisor 13, "Despotism 3k"'},

    {quote: '"No importa lo lejos que vayas, siempre puedes volver a casa."',
    person: 'Mae, "Night in the Woods"'},
    
    {quote: '"El éxito no es más que una solución temporal para un problema permanente."',
     person: 'Zote, "Hollow Knight"'},

    {quote: "la vida es extraña, ¿no?", 
    person: 'Max Caulfield, "Life is Strange"'},

    {quote: '"el tiempo lo cura todo, ¿verdad? Pero qué pasa cuando el tiempo se queda sin tiempo."', 
    person: 'Alphys, "Undertale"'},
    {quote: '"Si un árbol cae en el bosque y no hay nadie para escucharlo, ¿hace ruido? Y si un hombre dice algo en el bosque y no hay nadie para escucharlo, ¿está realmente diciendo algo?"',
    person: 'Francis Vendetti "The Artful Escape"'}
]

btn.addEventListener('click', ()=> {
    let randomQuoteSelector = Math.floor(Math.random()*quotes.length)
    
    quote.textContent = quotes[randomQuoteSelector].quote
    person.textContent = quotes[randomQuoteSelector].person
})

