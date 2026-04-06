document.addEventListener("DOMContentLoaded", () => {

    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function () {

            const idDestino = this.getAttribute("href").substring(1);
            const elemento = document.getElementById(idDestino);

            if (elemento) {

                setTimeout(() => {

                    elemento.classList.add("highlight");

                    setTimeout(() => {
                        elemento.classList.remove("highlight");
                    }, 2000);

                }, 600); // espera o scroll terminar

            }

        });
    });

});
