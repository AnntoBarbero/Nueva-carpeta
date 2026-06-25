console.log("JS CARGADO");

fetch("backend/capacitaciones/proximas.php")
.then(response => response.json())
.then(data => {

    console.log("EVENTOS:", data);

    const contenedor =
        document.getElementById("proximas-capacitaciones");

    contenedor.innerHTML = "";

    data.forEach(evento => {

        contenedor.innerHTML += `
            <div class="proxima-cap">
                <strong>📅 ${evento.fecha}</strong>
                <p>${evento.titulo}</p>
            </div>
        `;

    });

})
.catch(error => {

    console.error("ERROR:", error);

});