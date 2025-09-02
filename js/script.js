let botoes = document.querySelectorAll('.filtro')
let sessaoProjetos = document.querySelectorAll('.container__trabalhos-projetos')
let btnVerMais = document.querySelector('.btn-ver-mais')
let containerVerMais = document.querySelector('.container__ver-mais')

let btnCopiar = document.querySelector('.btn-copiar')
let email = 'dborazo.moura@gmail.com'

let linkTopo = document.querySelector('.link-cima')

function inicializarCards() {
    sessaoProjetos.forEach(container => {
        if (container.classList.contains('mostrar')) {
            let cards = container.querySelectorAll('.card__trabalhos-projetos')
            let cardsVisiveis = 6

            cards.forEach((card, index) => {
                if (index < cardsVisiveis) {
                    card.classList.add('mostrar-card')
                } else {
                    card.classList.remove('mostrar-card')
                }
            })

            if (cards.length <=  cardsVisiveis) {
                containerVerMais.classList.remove('mostrar')
            } else {
                containerVerMais.classList.add('mostrar')
            }
        }   
    })
}

document.addEventListener('DOMContentLoaded', inicializarCards)


botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        botoes.forEach(b => b.classList.remove('ativo'))
        botao.classList.add("ativo")

        const id = botao.getAttribute('id')

        sessaoProjetos.forEach(projetos => {
            projetos.classList.remove('mostrar')

            if (projetos.classList.contains(id)) {
                projetos.classList.add('mostrar')
            }
        })

        inicializarCards()
    })
})

btnVerMais.addEventListener('click', () => {
    const containerAtivo = document.querySelector('.container__trabalhos-projetos.mostrar')
    if (!containerAtivo) return

    let cards = containerAtivo.querySelectorAll('.card__trabalhos-projetos')

    let cardsVisiveis = containerAtivo.querySelectorAll('.card__trabalhos-projetos.mostrar-card').length

    let novosCards = 6

    for (let i = cardsVisiveis; i < cardsVisiveis + novosCards && i < cards.length; i++) {
        cards[i].classList.add('mostrar-card')
    }

    cardsVisiveis = containerAtivo.querySelectorAll('.card__trabalhos-projetos.mostrar-card').length

    if (cardsVisiveis >= cards.length) {
        containerVerMais.classList.remove('mostrar')
    }
})

btnCopiar.addEventListener('click', () => {
    navigator.clipboard.writeText(email).then(() => {
        alert('Email copiado com sucesso: ' + email)
    }).catch((err) => {
        console.error('Erro ao copiar email')
    })
})

window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight) {
        linkTopo.style.display = 'block'
    } else {
        linkTopo.style.display = 'none'
    }
})