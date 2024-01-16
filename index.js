function iniciar() {
    let time = document.getElementById('hora')
    let foto = document.getElementById('foto')
    

    let data = new Date()
    let hora = data.getHours()
    
    time.innerHTML = `Agora são ${hora} Horas`

    if (hora >= 0 && hora < 12) {
        document.body.style.background = '#e2cd9f'
        foto.src = 'imagens/dawn.jpg'
        
    } else if (hora >= 12 && hora <= 18) {
        foto.src = 'imagens/midday.jpg'
        document.body.style.background = '#b9996f'

    } else {
        foto.src = 'imagens/nightfall.jpg'
        document.body.style.background = '#519654'

    }
}