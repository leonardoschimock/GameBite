document.addEventListener("DOMContentLoaded", function () {

    // ===== CARROSSEL =====
    let slides = document.querySelectorAll('.slide');
    let indice = 0;

    function mostrarSlide(i) {
        slides.forEach(slide => slide.classList.remove('ativo'));
        slides[i].classList.add('ativo');
    }

    const botaoProximo = document.querySelector('.next');
    const botaoAnterior = document.querySelector('.prev');

    if (botaoProximo && botaoAnterior) {

        botaoProximo.addEventListener('click', () => {
            indice = (indice + 1) % slides.length;
            mostrarSlide(indice);
        });

        botaoAnterior.addEventListener('click', () => {
            indice = (indice - 1 + slides.length) % slides.length;
            mostrarSlide(indice);
        });
    }

    // 🔥 troca automática (5 segundos)
    setInterval(() => {
        indice = (indice + 1) % slides.length;
        mostrarSlide(indice);
    }, 5000); // ← aqui controla o tempo

    mostrarSlide(indice);


    // ===== BUSCA =====
    const campoBusca = document.getElementById("searchInput");
    const container = document.querySelector(".cards");

    if (campoBusca) {
        campoBusca.addEventListener("input", () => {

            const filtro = campoBusca.value.toLowerCase();
            const cards = Array.from(container.querySelectorAll(".card-link"));

            cards.forEach(card => {
                const texto = card.textContent.toLowerCase();

                if (texto.includes(filtro)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });

            ordenarCards();
        });
    }

    function ordenarCards() {
        const container = document.querySelector(".cards");
        const cards = Array.from(container.querySelectorAll(".card-link"));

        cards.sort((a, b) => {
            const nomeA = a.textContent.trim().toLowerCase();
            const nomeB = b.textContent.trim().toLowerCase();
            return nomeA.localeCompare(nomeB);
        });

        cards.forEach(card => container.appendChild(card));
    }

});

// FORMULÁRIO
const form = document.getElementById("formSugestao");
const msgErro = document.getElementById("msgErro");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const jogo = document.getElementById("jogo").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        // validação
        if (nome === "" || email === "" || jogo === "" || mensagem === "") {
            msgErro.textContent = "Preencha todos os campos!";
            return;
        }

        // valida email simples
        if (!email.includes("@") || !email.includes(".")) {
            msgErro.textContent = "Email inválido!";
            return;
        }

        // sucesso
        msgErro.style.color = "lightgreen";
        msgErro.textContent = "Sugestão enviada com sucesso! 🎉";

        form.reset();
    });
}

// ===== HIGHLIGHT DO FOOTER =====
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", function () {

        const href = this.getAttribute("href");

        if (href.startsWith("#")) {

            const idDestino = href.substring(1);
            const elemento = document.getElementById(idDestino);

            if (elemento) {

                setTimeout(() => {
                    elemento.classList.add("highlight");

                    setTimeout(() => {
                        elemento.classList.remove("highlight");
                    }, 2000);

                }, 600);
            }
        }
    });
});