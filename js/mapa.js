// MAPA CUARTELES
const coloresZona = {

    "I": "#0d6efd",      // azul
    "II": "#198754",     // verde
    "III": "#fd7e14",    // naranja
    "IV": "#dc3545",     // rojo
    "V": "#6f42c1",      // violeta
    "VI": "#ffc107"      // amarillo

};
// CREAR MAPA
const mapa = L.map('mapa').setView([-36.6167, -64.2833], 6);
// MAPA BASE
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

    attribution:
    '&copy; OpenStreetMap contributors'

}).addTo(mapa);

// CUARTELES

const cuarteles = [

    //ZONA I

    {
        nombre: "Bomberos Voluntarios Bernardo Larroude",
        zona: "I",
        coords: [-35.0247, -63.5791],
        direccion: "Bernardo Larroude, La Pampa",
        telefono: "(02954) 42-0000"
    },

    {
        nombre: "Bomberos Voluntarios Rancul",
        zona: "I",
        coords: [-35.0709, -64.6847],
        direccion: "Rancul, La Pampa",
        telefono: "(02954) 42-0000"
    },

    {
        nombre: "Bomberos Voluntarios Realico",
        zona: "I",
        coords: [-35.0423, -64.2468],
        direccion: "Realico, La Pampa",
        telefono: "(02954) 42-0000"
    },

    {
        nombre: "Bomberos Voluntarios Intendente Alvear",
        zona: "I",
        coords: [-35.2353, -63.5879],
        direccion: "Intendente Alvear, La Pampa",
        telefono: "(02954) 42-0000"
    },

    {
        nombre: "Bomberos Voluntarios Alta Italia",
        zona: "I",
        coords: [-35.3330, -64.1215],
        direccion: "Alta Italia, La Pampa",
        telefono: "(02954) 42-0000"
    },

    //ZONA II

    {
        nombre: "Bomberos Voluntarios Caleufu",
        zona: "II",
        coords: [-35.5938, -64.5626],
        direccion: "Caleufu, La Pampa",
        telefono: "(02954) 42-0000"
    },

    {
        nombre: "Bomberos Voluntarios Arata",
        zona: "II",
        coords: [-35.6365, -64.3573],
        direccion: "Arata, La Pampa",
        telefono: "(02954) 42-0000"
    },

    {
        nombre: "Bomberos Voluntarios Embajador Martini",
        zona: "II",
        coords: [-35.3891, -64.2798],
        direccion: "Embajador Martini, La Pampa",
        telefono: "(02954) 42-0000"
    },

    {
        nombre: "Bomberos Voluntarios Ingeniero Luiggi",
        zona: "II",
        coords: [-35.3840, -64.4717],
        direccion: "Ingeniero Luiggi, La Pampa",
        telefono: "(02954) 42-0000"
    },

    {
        nombre: "Bomberos Voluntarios La Maruja",
        zona: "II",
        coords: [-35.6719, -64.9424],
        direccion: "La Maruja, La Pampa",
        telefono: "(02954) 42-0000"
    },

    {
        nombre: "Bomberos Voluntarios Parera",
        zona: "II",
        coords: [-35.1515, -64.5016],
        direccion: "Parera, La Pampa",
        telefono: "(02954) 42-0000"
    },

    //ZONA III

    {
        nombre: "Bomberos Voluntarios Eduardo Castex",
        zona: "III",
        coords: [-35.9187, -64.2998],
        direccion: "Eduardo Castex, La Pampa",
        telefono: "(02334) 44-0000"
    },

    {
        nombre: "Bomberos Voluntarios General Pico",
        zona: "III",
        coords: [-35.6693, -63.7620],
        direccion: "General Pico, La Pampa",
        telefono: "(02302) 43-0000"
    },

    {
        nombre: "Bomberos Voluntarios Santa Isabel",
        zona: "III",
        coords: [-36.2337, -66.9408],
        direccion: "Santa Isabel, La Pampa",
        telefono: "(02302) 43-0000"
    },

    {
        nombre: "Bomberos Voluntarios Trenel",
        zona: "III",
        coords: [-35.6910, -64.1335],
        direccion: "Trenel, La Pampa",
        telefono: "(02302) 43-0000"
    },

    {
        nombre: "Bomberos Voluntarios Victorica",
        zona: "III",
        coords: [-36.2143, -65.4411],
        direccion: "Victorica, La Pampa",
        telefono: "(02302) 43-0000"
    },

    {
        nombre: "Bomberos Voluntarios Veinticinco de Mayo",
        zona: "III",
        coords: [-37.7711, -67.7157],
        direccion: "Veinticinco de Mayo, La Pampa",
        telefono: "(02302) 43-0000"
    },

    {
        nombre: "Bomberos Voluntarios Algarrobo del Aguila",
        zona: "III",
        coords: [-36.4040, -67.1427],
        direccion: "Algarrobo del Aguila, La Pampa",
        telefono: "(02302) 43-0000"
    },

    //ZONA IV

    {
        nombre: "Bomberos Voluntarios Catrilo",
        zona: "IV",
        coords: [-36.4080, -63.4225],
        direccion: "Catrilo, La Pampa",
        telefono: "(02954) 42-0000"
    },

    {
        nombre: "Bomberos Voluntarios Colonia Baron",
        zona: "IV",
        coords: [-36.1516, -63.8514],
        direccion: "Colonia Baron, La Pampa",
        telefono: "(02954) 42-0000"
    },

    {
        nombre: "Bomberos Voluntarios Lonquimay",
        zona: "IV",
        coords: [-36.4674, -63.6244],
        direccion: "Lonquimay, La Pampa",
        telefono: "(02954) 42-0000"
    },

    {
        nombre: "Bomberos Voluntarios Miguel Cane",
        zona: "IV",
        coords: [-36.1585, -63.5118],
        direccion: "Miguel Cane, La Pampa",
        telefono: "(02954) 42-0000"
    },

    {
        nombre: "Bomberos Voluntarios Quemu Quemu",
        zona: "IV",
        coords: [-36.0601, -63.5675],
        direccion: "Quemu Quemu, La Pampa",
        telefono: "(02954) 42-0000"
    },

    {
        nombre: "Bomberos Voluntarios Winifreda",
        zona: "IV",
        coords: [-36.2284, -64.2275],
        direccion: "Winifreda, La Pampa",
        telefono: "(02954) 42-0000"
    },

    {
        nombre: "Bomberos Voluntarios Anguil",
        zona: "IV",
        coords: [-36.5262, -64.0122],
        direccion: "Anguil, La Pampa",
        telefono: "(02954) 42-0000"
    },

    //ZONA V

    {
        nombre: "Bomberos Voluntarios Miguel Riglos",
        zona: "V",
        coords: [-36.8500, -63.6927],
        direccion: "Miguel Riglos, La Pampa",
        telefono: "(02954) 42-0000"
    },

    {
        nombre: "Bomberos Voluntarios Macachin",
        zona: "V",
        coords: [-37.1390, -63.6621],
        direccion: "Macachin, La Pampa",
        telefono: "(02954) 42-0000"
    },

    {
        nombre: "Bomberos Voluntarios Guatrache",
        zona: "V",
        coords: [-37.6666, -63.5336],
        direccion: "Guatrache, La Pampa",
        telefono: "(02954) 42-0000"
    },

    {
        nombre: "Bomberos Voluntarios Alpachiri",
        zona: "V",
        coords: [-37.3753, -63.7733],
        direccion: "Alpachiri, La Pampa",
        telefono: "(02954) 42-0000"
    },

    {
        nombre: "Bomberos Voluntarios Toay",
        zona: "V",
        coords: [-36.6789, -64.3869],
        direccion: "Toay, La Pampa",
        telefono: "(02954) 42-0000"
    },

    {
        nombre: "Bomberos Voluntarios Doblas",
        zona: "V",
        coords: [-37.1495, -64.0100],
        direccion: "Doblas, La Pampa",
        telefono: "(02954) 42-0000"
    },

    //ZONA VI

    {
        nombre: "Bomberos Voluntarios General Acha",
        zona: "VI",
        coords: [-37.3870, -64.5985],
        direccion: "General Acha, La Pampa",
        telefono: "(02954) 42-0000"
    },

    {
        nombre: "Bomberos Voluntarios Jacinto Arauz",
        zona: "VI",
        coords: [-38.0883, -63.4275],
        direccion: "Jacinto Arauz, La Pampa",
        telefono: "(02954) 42-0000"
    },

    {
        nombre: "Bomberos Voluntarios General San Martin",
        zona: "VI",
        coords: [-37.9795, -63.6015],
        direccion: "General San Martin, La Pampa",
        telefono: "(02954) 42-0000"
    },

    {
        nombre: "Bomberos Voluntarios Bernasconi",
        zona: "VI",
        coords: [-37.9047, -63.7483],
        direccion: "Bernasconi, La Pampa",
        telefono: "(02954) 42-0000"
    },

    {
        nombre: "Bomberos Voluntarios Casa de Piedra",
        zona: "VI",
        coords: [-38.1541, -67.1521],
        direccion: "Casa de Piedra, La Pampa",
        telefono: "(02954) 42-0000"
    },

    {
        nombre: "Bomberos Voluntarios La Aldea",
        zona: "VI",
        coords: [-38.9874, -64.0864],
        direccion: "La Aldea, La Pampa",
        telefono: "(02954) 42-0000"
    },
    

    

    

];


// AJUSTAR MAPA AUTOMATICAMENTE

const grupo = L.featureGroup(

    cuarteles.map(cuartel =>
        L.marker(cuartel.coords)
    )

);

mapa.fitBounds(grupo.getBounds());

// ====================================
// BUSCADOR Y MARCADORES
// ====================================

const inputBusqueda =
    document.getElementById("buscarCuartel");

const marcadores = [];

cuarteles.forEach(cuartel => {

    const marcador = L.circleMarker(cuartel.coords, {

        radius: 8,
        fillColor: coloresZona[cuartel.zona],
        color: "#fff",
        weight: 2,
        fillOpacity: 1

    })
    .addTo(mapa)
    .bindPopup(`

        <div class="popup-cuartel">

            <h3>${cuartel.nombre}</h3>

            <p>📍 ${cuartel.direccion}</p>

            <p>📞 ${cuartel.telefono}</p>

            <p>🗺️ Zona ${cuartel.zona}</p>

            <a
                href="https://www.google.com/maps?q=${cuartel.coords[0]},${cuartel.coords[1]}"
                target="_blank"
                class="btn-mapa"
            >
                Cómo llegar
            </a>

        </div>

    `);

    marcadores.push({
        nombre: cuartel.nombre,
        zona: cuartel.zona,
        marker: marcador,
        coords: cuartel.coords
    });

});

// LISTADO DE CUARTELES

const contenedor =
    document.getElementById("contenedor-cuarteles");

function mostrarCuarteles(lista) {

    const detalle =
    document.getElementById("detalle-cuartel");

    detalle.style.display = "block";

    detalle.innerHTML = `
        ...
    `;

    contenedor.innerHTML = "";

        lista.forEach(cuartel => {

    const colorZona = coloresZona[cuartel.zona];

    contenedor.innerHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">

            <div class="cuartel-card" style="--zona-color:${colorZona}">

                <div class="cuartel-inner">

                    <!-- FRONT -->
                    <div class="cuartel-front">

                        <i class="fa-solid fa-fire-flame-curved"></i>

                        <h3>${cuartel.nombre}</h3>

                        <p>Zona ${cuartel.zona}</p>

                    </div>

                    <!-- BACK -->
                    <div class="cuartel-back">

                        <h4>${cuartel.nombre}</h4>

                        <p>📍 ${cuartel.direccion}</p>

                        <p>📞 ${cuartel.telefono}</p>

                        <a href="https://www.google.com/maps?q=${cuartel.coords[0]},${cuartel.coords[1]}"
                        target="_blank"
                        class="btn-mapa">

                        Cómo llegar

                        </a>

                    </div>

                </div>

            </div>

        </div>
    `;
});

}

mostrarCuarteles(cuarteles);

// BUSCADOR

inputBusqueda.addEventListener("keyup", function () {

    const texto =
        this.value.toLowerCase().trim();

    if (texto === "") {

        mapa.closePopup();

        mapa.fitBounds(grupo.getBounds());

        return;
    }

    marcadores.forEach(item => {

        if (
            item.nombre
                .toLowerCase()
                .includes(texto)
        ) {

            mapa.flyTo(item.coords, 10);

            item.marker.openPopup();
        }

    });

});

// FILTROS POR ZONA

const botonesZona =
    document.querySelectorAll(".filtro-zona");

botonesZona.forEach(boton => {

    boton.addEventListener("click", () => {

        const zona =
            boton.dataset.zona;

        if (zona === "TODAS") {

            marcadores.forEach(item => {
                mapa.addLayer(item.marker);
            });

            mostrarCuarteles(cuarteles);

            const grupoZona =
                L.featureGroup(
                    marcadores.map(
                        item => item.marker
                    )
                );

            mapa.fitBounds(
                grupoZona.getBounds()
            );

            mapa.closePopup();

            return;
        }

        marcadores.forEach(item => {
            mapa.removeLayer(item.marker);
        });

        const filtrados =
            marcadores.filter(
                item => item.zona === zona
            );

        filtrados.forEach(item => {
            mapa.addLayer(item.marker);
        });

        mostrarCuarteles(
            cuarteles.filter(
                c => c.zona === zona
            )
        );

        const grupoZona =
            L.featureGroup(
                filtrados.map(
                    item => item.marker
                )
            );

        mapa.fitBounds(
            grupoZona.getBounds()
        );

        mapa.closePopup();

    });

});

// TOTAL DE CUARTELES

document.getElementById(
    "total-cuarteles"
).textContent = cuarteles.length;

// CUARTEL MÁS CERCANO

document.getElementById("btn-cercano")
.addEventListener("click", () => {

    navigator.geolocation.getCurrentPosition(pos => {

        const lat =
            pos.coords.latitude;

        const lng =
            pos.coords.longitude;

        let masCercano = null;

        let distanciaMinima =
            Infinity;

        marcadores.forEach(item => {

            const distancia =
                mapa.distance(
                    [lat, lng],
                    item.coords
                );

            if (
                distancia <
                distanciaMinima
            ) {

                distanciaMinima =
                    distancia;

                masCercano = item;
            }

        });

        mapa.flyTo(
            masCercano.coords,
            11
        );

        masCercano.marker.openPopup();

        const datos =
            cuarteles.find(
                c =>
                c.nombre ===
                masCercano.nombre
            );

        document.getElementById(
            "detalle-cuartel"
        ).innerHTML = `

            <div class="detalle-destacado">

                <h3>
                    📍 Cuartel más cercano
                </h3>

                <h4>
                    ${datos.nombre}
                </h4>

                <p>
                    <strong>Dirección:</strong>
                    ${datos.direccion}
                </p>

                <p>
                    <strong>Teléfono:</strong>
                    ${datos.telefono}
                </p>

                <p>
                    <strong>Zona:</strong>
                    ${datos.zona}
                </p>

                <a
                    href="https://www.google.com/maps?q=${datos.coords[0]},${datos.coords[1]}"
                    target="_blank"
                    class="btn-mapa"
                >
                    Cómo llegar
                </a>

            </div>

        `;

        document
            .getElementById(
                "detalle-cuartel"
            )
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});

document.querySelectorAll(".cuartel-card").forEach(card => {

    card.addEventListener("click", function () {

        // en mobile y tablets
        if (window.innerWidth <= 768) {
            this.classList.toggle("active");
        }

    });

});

document.querySelectorAll(".cuartel-card").forEach(card => {

    card.addEventListener("click", function () {

        if (window.innerWidth <= 768) {
            this.classList.toggle("active");
        }

    });

});