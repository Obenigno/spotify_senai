const musicas = [
    { id: 1,
        url: 'https://picsum.photos/id/237/200/300',
        banda: 'The Neighbourhood',
        nome: 'Sweater Weather'
    },
    { id: 2,
        url: 'https://i.scdn.co/image/ab6761610000e5eb50defaf9fc059a1efc541f4c',
        banda: 'Guns n roses',
        nome: 'November rain'
    },
    { id: 3,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPrjr6sCH90IvyDKpI1IMR4WzZkBT4TRIQKksvLcvlT6hYdPla8d5QZrjc&s=10',
        banda: 'Deftones',
        nome: 'Cherry waves'
    },   
    { id: 4,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuOwYZtoZWJALjvFbZWQXycwIxu4R3BMNl-Fmu8qep2tcIzgbwOGSsERc&s=10',
        banda: 'Scorpions',
        nome: 'Still loving you'
    },
        { id: 5,
        url: 'https://thumb.wikimedia.org/wikipedia/pt/thumb/5/59/Fallen.jpg/250px-Fallen.jpg?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail',
        banda: 'Evanescence',
        nome: 'Bring me to life'
    },   


]
const listaMusicas = 
    document.getElementById('listaMusicas');
musicas.forEach((musica) => {
    const item = document.createElement('button')
    item.innerHTML = `
    <img src="${musica.url}>
    <div>
        <div class="fw-bold">${musica.nome}</div>
        <div class="text-muted">${musica.banda}</div>
    </div>
    `
listaMusicas.appendChild(item)
})