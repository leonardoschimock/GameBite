// Executa o código somente quando o HTML estiver totalmente carregado
document.addEventListener("DOMContentLoaded", function () {

    // ===== CARROSSEL =====

    // Seleciona todos os slides
    let slides = document.querySelectorAll('.slide');

    // Índice do slide atual
    let i = 0;

    // Função para mostrar um slide específico
    function mostrarSlide(i) {
        // Remove a classe "ativo" de todos os slides
        slides.forEach(slide => slide.classList.remove('ativo'));

        // Adiciona "ativo" apenas no slide atual
        slides[i].classList.add('ativo');
    }

    // Seleciona botões de navegação
    const botaoProximo = document.querySelector('.next');
    const botaoAnterior = document.querySelector('.prev');

    // Verifica se os botões existem
    if (botaoProximo && botaoAnterior) {

        // Clique no botão "próximo"
        botaoProximo.addEventListener('click', () => {
            // Avança o índice (loop infinito)
            i = (i + 1) % slides.length;
            mostrarSlide(i);
        });

        // Clique no botão "anterior"
        botaoAnterior.addEventListener('click', () => {
            // Volta o índice (loop infinito)
            i = (i - 1 + slides.length) % slides.length;
            mostrarSlide(i);
        });
    }

    // ===== TROCA AUTOMÁTICA =====

    // Troca de slide automaticamente a cada 5 segundos
    setInterval(() => {
        i = (i + 1) % slides.length;
        mostrarSlide(i);
    }, 5000); 

    // Mostra o primeiro slide ao carregar
    mostrarSlide(i);


    // ===== BUSCA =====

    // Campo de busca
    const campoBusca = document.getElementById("searchInput");

    // Container dos cards
    const container = document.querySelector(".cards");

    // Verifica se o campo existe
    if (campoBusca) {

        // Evento quando o usuário digita
        campoBusca.addEventListener("input", () => {

            // Pega o texto digitado e transforma em minúsculo
            const filtro = campoBusca.value.toLowerCase();

            // Pega todos os cards
            const cards = Array.from(container.querySelectorAll(".card-link"));

            // Percorre cada card
            cards.forEach(card => {

                // Texto do card
                const texto = card.textContent.toLowerCase();

                // Verifica se contém o filtro
                if (texto.includes(filtro)) {
                    card.style.display = "block"; // mostra
                } else {
                    card.style.display = "none"; // esconde
                }
            });

            // Ordena os cards após filtrar
            ordenarCards();
        });
    }

    // Função para ordenar cards alfabeticamente
    function ordenarCards() {

        const container = document.querySelector(".cards");
        const cards = Array.from(container.querySelectorAll(".card-link"));

        // Ordenação A-Z
        cards.sort((a, b) => {
            const nomeA = a.textContent.trim().toLowerCase();
            const nomeB = b.textContent.trim().toLowerCase();

            return nomeA.localeCompare(nomeB);
        });

        // Reinsere os cards na ordem correta
        cards.forEach(card => container.appendChild(card));
    }

});


// ===== FORMULÁRIO =====

// Seleciona o formulário
const form = document.getElementById("formSugestao");

// Elemento de mensagem de erro/sucesso
const msgErro = document.getElementById("msgErro");

// Verifica se o formulário existe
if (form) {

    // Evento de envio
    form.addEventListener("submit", function (e) {

        e.preventDefault(); // impede o envio padrão

        // Captura valores dos campos
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const jogo = document.getElementById("jogo").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        // ===== VALIDAÇÃO =====

        // Verifica campos vazios
        if (nome === "" || email === "" || jogo === "" || mensagem === "") {
            msgErro.textContent = "Preencha todos os campos!";
            return;
        }

        // Validação simples de email
        if (!email.includes("@") || !email.includes(".")) {
            msgErro.textContent = "Email inválido!";
            return;
        }

        // ===== SUCESSO =====

        msgErro.style.color = "lightgreen";
        msgErro.textContent = "Sugestão enviada com sucesso! 🎉";

        // Limpa o formulário
        form.reset();
    });
}


// ===== HIGHLIGHT AO CLICAR NO MENU =====

// Seleciona todos os links do menu
const links = document.querySelectorAll("nav a");

// Para cada link
links.forEach(link => {

    link.addEventListener("click", function () {

        const href = this.getAttribute("href");

        // Verifica se é um link interno (#)
        if (href.startsWith("#")) {

            // Pega o ID do destino
            const idDestino = href.substring(1);

            // Seleciona o elemento de destino
            const elemento = document.getElementById(idDestino);

            if (elemento) {

                // Espera o scroll acontecer
                setTimeout(() => {

                    // Adiciona efeito de destaque
                    elemento.classList.add("highlight");

                    // Remove depois de 2 segundos
                    setTimeout(() => {
                        elemento.classList.remove("highlight");
                    }, 2000);

                }, 600);
            }
        }
    });
});