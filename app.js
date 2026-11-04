/* =========================================================
   PLATAFORMA EDUCATIVA - EDUSECUNDARIA
   Archivo: app.js
========================================================= */


/* =========================================================
   1. DATOS Y ELEMENTOS DEL HTML
========================================================= */

const datos = window.cursosData;

const seccionGrados = document.getElementById("grados");
const seccionCursos = document.getElementById("coursesSection");
const seccionTemas = document.getElementById("topicsSection");
const seccionMateriales = document.getElementById("materialsSection");

const contenedorGrados = document.getElementById("gradesGrid");
const contenedorCursos = document.getElementById("coursesGrid");
const contenedorTemas = document.getElementById("topicsGrid");

const buscadorTemas = document.getElementById("topicSearch");

const mensajeVacio = document.getElementById("emptyTopics");
const mensajeDescarga = document.getElementById("downloadMessage");

const botonLogo = document.getElementById("logoInicio");
const botonMenu = document.getElementById("menuToggle");
const navbar = document.querySelector(".navbar");

const botonVolverGrados = document.getElementById("backToGrades");
const botonVolverCursos = document.getElementById("backToCourses");
const botonVolverTemas = document.getElementById("backToTopics");

const botonTeoria = document.getElementById("downloadTheory");
const botonEjercicios = document.getElementById("downloadExercises");
const botonTarea = document.getElementById("downloadHomework");

const botonesDescarga = [
    botonTeoria,
    botonEjercicios,
    botonTarea
];

const tituloCursos = document.getElementById("coursesTitle");
const tituloTemas = document.getElementById("topicsTitle");
const tituloMateriales = document.getElementById("materialsTitle");

const descripcionMateriales = document.getElementById(
    "materialsDescription"
);

const breadcrumbGrado = document.getElementById("breadcrumbGrade");
const breadcrumbCurso = document.getElementById("breadcrumbCourse");
const breadcrumbTema = document.getElementById("breadcrumbTopic");


/* =========================================================
   2. ESTADO DE NAVEGACIÓN
========================================================= */

let gradoSeleccionado = null;
let cursoSeleccionado = null;
let temaSeleccionado = null;

let descargaEnProceso = false;


/* =========================================================
   3. FUNCIONES GENERALES
========================================================= */

function mostrarSeccion(seccionActiva) {

    const secciones = [
        seccionGrados,
        seccionCursos,
        seccionTemas,
        seccionMateriales
    ];

    secciones.forEach(seccion => {

        if (seccion) {
            seccion.classList.add("hidden");
        }

    });

    if (seccionActiva) {

        seccionActiva.classList.remove("hidden");

        seccionActiva.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


function limpiarContenedor(contenedor) {

    if (contenedor) {
        contenedor.replaceChildren();
    }

}


function crearElemento(tag, clase, texto) {

    const elemento = document.createElement(tag);

    if (clase) {
        elemento.className = clase;
    }

    if (texto !== undefined && texto !== null) {
        elemento.textContent = texto;
    }

    return elemento;

}


function crearIcono(nombre, clase = "") {

    const icono = document.createElement("i");

    icono.className = `fa-solid fa-${nombre} ${clase}`.trim();

    icono.setAttribute("aria-hidden", "true");

    return icono;

}


function volverAlInicio() {

    cerrarMenu();

    gradoSeleccionado = null;
    cursoSeleccionado = null;
    temaSeleccionado = null;

    ocultarMensajeDescarga();

    mostrarSeccion(seccionGrados);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   4. MOSTRAR LOS CINCO GRADOS
========================================================= */

function cargarGrados() {

    if (!datos || !contenedorGrados) {
        return;
    }

    limpiarContenedor(contenedorGrados);

    Object.entries(datos).forEach(([clave, grado]) => {

        const tarjeta = crearElemento(
            "article",
            "grade-card"
        );

        tarjeta.setAttribute("tabindex", "0");
        tarjeta.setAttribute("role", "button");

        tarjeta.setAttribute(
            "aria-label",
            `Seleccionar ${grado.nombre}`
        );

        const icono = crearElemento(
            "div",
            "grade-icon"
        );

        icono.appendChild(
            crearIcono("book-open")
        );

        const titulo = crearElemento(
            "h3",
            "",
            grado.nombre
        );

        const descripcion = crearElemento(
            "p",
            "",
            "Explora los materiales de este grado."
        );

        const flecha = crearIcono(
            "arrow-right",
            "card-arrow"
        );

        tarjeta.append(
            icono,
            titulo,
            descripcion,
            flecha
        );

        tarjeta.addEventListener("click", () => {
            seleccionarGrado(clave);
        });

        tarjeta.addEventListener("keydown", evento => {

            if (
                evento.key === "Enter" ||
                evento.key === " "
            ) {

                evento.preventDefault();

                seleccionarGrado(clave);

            }

        });

        contenedorGrados.appendChild(tarjeta);

    });

}


/* =========================================================
   5. SELECCIONAR UN GRADO
========================================================= */

function seleccionarGrado(clave) {

    if (!datos[clave]) {
        return;
    }

    gradoSeleccionado = clave;
    cursoSeleccionado = null;
    temaSeleccionado = null;

    const grado = datos[clave];

    tituloCursos.textContent = grado.nombre;
    breadcrumbGrado.textContent = grado.nombre;

    cargarCursos();

    mostrarSeccion(seccionCursos);

}


/* =========================================================
   6. MOSTRAR LOS CURSOS
========================================================= */

function cargarCursos() {

    if (!gradoSeleccionado) {
        return;
    }

    limpiarContenedor(contenedorCursos);

    const cursos = datos[gradoSeleccionado].cursos;

    Object.entries(cursos).forEach(([clave, curso]) => {

        const tarjeta = crearElemento(
            "article",
            "course-card"
        );

        tarjeta.setAttribute("tabindex", "0");
        tarjeta.setAttribute("role", "button");

        tarjeta.setAttribute(
            "aria-label",
            `Seleccionar curso ${curso.nombre}`
        );

        const icono = crearElemento(
            "div",
            "course-icon"
        );

        icono.appendChild(
            crearIcono(curso.icono || "book")
        );

        const titulo = crearElemento(
            "h3",
            "",
            curso.nombre
        );

        const descripcion = crearElemento(
            "p",
            "",
            curso.descripcion || "Explora los temas de este curso."
        );

        const accion = crearElemento(
            "span",
            "course-action",
            "Ver temas "
        );

        accion.appendChild(
            crearIcono("arrow-right")
        );

        tarjeta.append(
            icono,
            titulo,
            descripcion,
            accion
        );

        tarjeta.addEventListener("click", () => {
            seleccionarCurso(clave);
        });

        tarjeta.addEventListener("keydown", evento => {

            if (
                evento.key === "Enter" ||
                evento.key === " "
            ) {

                evento.preventDefault();

                seleccionarCurso(clave);

            }

        });

        contenedorCursos.appendChild(tarjeta);

    });

}


/* =========================================================
   7. SELECCIONAR UN CURSO
========================================================= */

function seleccionarCurso(clave) {

    const grado = datos[gradoSeleccionado];

    if (!grado || !grado.cursos[clave]) {
        return;
    }

    cursoSeleccionado = clave;
    temaSeleccionado = null;

    const curso = grado.cursos[clave];

    tituloTemas.textContent = `Temas de ${curso.nombre}`;

    breadcrumbCurso.textContent = curso.nombre;

    buscadorTemas.value = "";

    cargarTemas(curso.temas);

    mostrarSeccion(seccionTemas);

}


/* =========================================================
   8. MOSTRAR LOS TEMAS
========================================================= */

function cargarTemas(listaTemas) {

    limpiarContenedor(contenedorTemas);

    mensajeVacio.classList.add("hidden");

    if (!listaTemas || listaTemas.length === 0) {

        mensajeVacio.classList.remove("hidden");

        return;

    }

    listaTemas.forEach(tema => {

        const tarjeta = crearElemento(
            "article",
            "topic-card"
        );

        tarjeta.setAttribute("tabindex", "0");
        tarjeta.setAttribute("role", "button");

        tarjeta.setAttribute(
            "aria-label",
            `Abrir tema ${tema.nombre}`
        );

        const icono = crearElemento(
            "div",
            "topic-icon"
        );

        icono.appendChild(
            crearIcono("calculator")
        );

        const informacion = crearElemento(
            "div",
            "topic-info"
        );

        const titulo = crearElemento(
            "h3",
            "",
            tema.nombre
        );

        const descripcion = crearElemento(
            "p",
            "",
            tema.descripcion || "Consulta los materiales de este tema."
        );

        informacion.append(
            titulo,
            descripcion
        );

        const flecha = crearIcono(
            "chevron-right",
            "topic-arrow"
        );

        tarjeta.append(
            icono,
            informacion,
            flecha
        );

        tarjeta.addEventListener("click", () => {
            seleccionarTema(tema);
        });

        tarjeta.addEventListener("keydown", evento => {

            if (
                evento.key === "Enter" ||
                evento.key === " "
            ) {

                evento.preventDefault();

                seleccionarTema(tema);

            }

        });

        contenedorTemas.appendChild(tarjeta);

    });

}


/* =========================================================
   9. BUSCADOR DE TEMAS
========================================================= */

function buscarTemas() {

    if (!gradoSeleccionado || !cursoSeleccionado) {
        return;
    }

    const normalizar = texto => {

        return texto
            .toLocaleLowerCase("es")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

    };

    const texto = normalizar(buscadorTemas.value);

    const temas = datos[gradoSeleccionado]
        .cursos[cursoSeleccionado]
        .temas;

    const resultados = temas.filter(tema => {

        const nombre = normalizar(tema.nombre);

        const descripcion = normalizar(
            tema.descripcion || ""
        );

        return (
            nombre.includes(texto) ||
            descripcion.includes(texto)
        );

    });

    cargarTemas(resultados);

}


/* =========================================================
   10. SELECCIONAR UN TEMA
========================================================= */

function seleccionarTema(tema) {

    temaSeleccionado = tema;

    tituloMateriales.textContent = tema.nombre;

    descripcionMateriales.textContent =
        tema.descripcion ||
        "Selecciona el material que deseas consultar.";

    breadcrumbTema.textContent = tema.nombre;

    ocultarMensajeDescarga();

    mostrarSeccion(seccionMateriales);

}


/* =========================================================
   11. CONSTRUIR RUTA DE LOS PDF
========================================================= */

function obtenerRutaArchivo(tipo) {

    if (
        !gradoSeleccionado ||
        !cursoSeleccionado ||
        !temaSeleccionado
    ) {
        return null;
    }

    if (!temaSeleccionado.archivos) {
        return null;
    }

    const archivo = temaSeleccionado.archivos[tipo];

    if (!archivo) {
        return null;
    }

    const rutaBase =
        `Grados/${gradoSeleccionado}` +
        `/Cursos/${cursoSeleccionado}` +
        `/${temaSeleccionado.carpeta}`;

    const rutaCodificada = rutaBase
        .split("/")
        .map(segmento => encodeURIComponent(segmento))
        .join("/");

    return {
        ruta: `${rutaCodificada}/${encodeURIComponent(archivo)}`,
        nombre: archivo
    };

}


/* =========================================================
   12. MENSAJES DE DESCARGA
========================================================= */

function mostrarMensajeDescarga(tipo, mensaje) {

    mensajeDescarga.classList.remove(
        "hidden",
        "success",
        "error"
    );

    mensajeDescarga.classList.add(tipo);

    mensajeDescarga.textContent = mensaje;

}


function ocultarMensajeDescarga() {

    mensajeDescarga.classList.add("hidden");

    mensajeDescarga.classList.remove(
        "success",
        "error"
    );

    mensajeDescarga.textContent = "";

}


/* =========================================================
   13. DESCARGAR ARCHIVOS PDF
========================================================= */

async function descargarArchivo(tipo) {

    if (descargaEnProceso) {
        return;
    }

    const archivo = obtenerRutaArchivo(tipo);

    if (!archivo) {

        mostrarMensajeDescarga(
            "error",
            "No se pudo determinar la ruta del archivo."
        );

        return;

    }

    descargaEnProceso = true;

    const boton = {
        teoria: botonTeoria,
        resueltos: botonEjercicios,
        tarea: botonTarea
    }[tipo];

    const textoOriginal = boton.innerHTML;

    botonesDescarga.forEach(elemento => {

        elemento.disabled = true;
        elemento.style.opacity = "0.6";
        elemento.style.cursor = "wait";

    });

    boton.innerHTML =
        '<i class="fa-solid fa-spinner fa-spin"></i> Comprobando archivo...';

    ocultarMensajeDescarga();

    try {

        const respuesta = await fetch(archivo.ruta, {
            method: "GET",
            cache: "no-store"
        });

        if (!respuesta.ok) {

            throw new Error("ARCHIVO_NO_ENCONTRADO");

        }

        const blob = await respuesta.blob();

        const urlTemporal = URL.createObjectURL(blob);

        const enlace = document.createElement("a");

        enlace.href = urlTemporal;
        enlace.download = archivo.nombre;
        enlace.style.display = "none";

        document.body.appendChild(enlace);

        enlace.click();

        enlace.remove();

        setTimeout(() => {

            URL.revokeObjectURL(urlTemporal);

        }, 1000);

        mostrarMensajeDescarga(
            "success",
            `Descarga iniciada: ${archivo.nombre}`
        );

    } catch (error) {

        console.error(
            "Error al descargar:",
            archivo.ruta,
            error
        );

        mostrarMensajeDescarga(
            "error",
            `Error ${archivo.nombre} no encontrado`
        );

    } finally {

        descargaEnProceso = false;

        botonesDescarga.forEach(elemento => {

            elemento.disabled = false;
            elemento.style.opacity = "";
            elemento.style.cursor = "";

        });

        boton.innerHTML = textoOriginal;

    }

}


/* =========================================================
   14. NAVEGACIÓN ENTRE SECCIONES
========================================================= */

function regresarAGrados() {

    cursoSeleccionado = null;
    temaSeleccionado = null;

    mostrarSeccion(seccionGrados);

}


function regresarACursos() {

    temaSeleccionado = null;

    mostrarSeccion(seccionCursos);

}


function regresarATemas() {

    ocultarMensajeDescarga();

    mostrarSeccion(seccionTemas);

}


/* =========================================================
   15. MENÚ RESPONSIVE
========================================================= */

function alternarMenu() {

    if (!navbar || !botonMenu) {
        return;
    }

    const estaAbierto = navbar.classList.toggle("active");

    botonMenu.setAttribute(
        "aria-expanded",
        String(estaAbierto)
    );

    botonMenu.innerHTML = estaAbierto
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';

}


function cerrarMenu() {

    if (!navbar || !botonMenu) {
        return;
    }

    navbar.classList.remove("active");

    botonMenu.setAttribute("aria-expanded", "false");

    botonMenu.innerHTML =
        '<i class="fa-solid fa-bars"></i>';

}


/* =========================================================
   16. EVENTOS DE NAVEGACIÓN
========================================================= */

if (botonLogo) {

    botonLogo.addEventListener("click", evento => {

        evento.preventDefault();

        volverAlInicio();

    });

}


if (botonVolverGrados) {

    botonVolverGrados.addEventListener(
        "click",
        regresarAGrados
    );

}


if (botonVolverCursos) {

    botonVolverCursos.addEventListener(
        "click",
        regresarACursos
    );

}


if (botonVolverTemas) {

    botonVolverTemas.addEventListener(
        "click",
        regresarATemas
    );

}


if (buscadorTemas) {

    buscadorTemas.addEventListener(
        "input",
        buscarTemas
    );

}


if (botonMenu) {

    botonMenu.addEventListener(
        "click",
        alternarMenu
    );

}


document.querySelectorAll(".navbar .nav-link").forEach(enlace => {

    enlace.addEventListener("click", cerrarMenu);

});


if (botonTeoria) {

    botonTeoria.addEventListener("click", () => {
        descargarArchivo("teoria");
    });

}


if (botonEjercicios) {

    botonEjercicios.addEventListener("click", () => {
        descargarArchivo("resueltos");
    });

}


if (botonTarea) {

    botonTarea.addEventListener("click", () => {
        descargarArchivo("tarea");
    });

}


/* =========================================================
   17. INICIALIZACIÓN DE LA PLATAFORMA
========================================================= */

function iniciarPlataforma() {

    console.log("====================================");

    console.log("EDUSECUNDARIA - PLATAFORMA EDUCATIVA");

    console.log("Iniciando plataforma...");

    console.log("====================================");

    if (!datos) {

        console.error(
            "Error: No se pudo cargar data/cursos.js"
        );

        if (contenedorGrados) {

            contenedorGrados.textContent =
                "No se pudieron cargar los grados. Comprueba el archivo cursos.js.";

        }

        return;

    }

    cargarGrados();

    mostrarSeccion(seccionGrados);

    console.log("Plataforma cargada correctamente.");

    console.log(
        "Grados disponibles:",
        Object.keys(datos)
    );

}


if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        iniciarPlataforma
    );

} else {

    iniciarPlataforma();

}


/* =========================================================
   FIN DE APP.JS
========================================================= */