async function cargarComponentes() {

    try {

        const enPaginaInterna =
            window.location.pathname.includes("/pages/");

        const rutaBase =
            enPaginaInterna ? "../components/" : "components/";

        // NAVBAR
        const header = await fetch(rutaBase + "header.html");

        if (!header.ok) {
            throw new Error("Error cargando header");
        }

        document.getElementById("header-container").innerHTML =
            await header.text();

        // FOOTER
        const footer = await fetch(rutaBase + "footer.html");

        if (!footer.ok) {
            throw new Error("Error cargando footer");
        }

        document.getElementById("footer-container").innerHTML =
            await footer.text();

        // INICIAR MENU HAMBURGUESA
        iniciarMenu();

        // PAGINAS INTERNAS
        const nav = document.querySelector(".header");

        const esHome =
            window.location.pathname.includes("index.html") ||
            window.location.pathname === "/" ||
            window.location.pathname.endsWith("/");

        if (!esHome && nav) {
            nav.classList.add("interno");
        }


    } catch (error) {

        console.error(error);

    }

}

function iniciarMenu() {

    const toggle =
        document.getElementById("menu-toggle");

    const menu =
        document.getElementById("nav-menu");

    if (toggle && menu) {

        toggle.addEventListener("click", () => {

            menu.classList.toggle("active");

        });

    }

}

cargarComponentes();

// NAVBAR STICKY
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if(!header) return;
    if(window.scrollY > 50){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }
});

// DETECTAR PAGINAS INTERNAS
window.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");
    const esHome = window.location.pathname.endsWith("/") || window.location.pathname.endsWith("index.html");
    if(!esHome){
        header.classList.add("interno");
    }
});