const buttons = document.getElementsByTagName('button')
const audios = document.getElementsByTagName('audio')
const letras = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k' ,'l']

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', e => {
        if(buttons[i].textContent === letras[i].toUpperCase()) {
            audios[i].play()
            buttons[i].classList.add('active')
            // Indica o tempo em que a classe active vai permanecer
            setTimeout(function removerAtivo() {
                buttons[i].classList.remove('active')
            }, 200)
        }
    })
    document.addEventListener('keydown', e => {
        if(e.key === letras[i]) {
            audios[i].play()
            console.log("b")
            buttons[i].classList.add('active')
            setTimeout(function removerAtivo() {
                buttons[i].classList.remove('active')
            }, 200)
        }
    }) 
}

