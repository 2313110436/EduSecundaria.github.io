
/*
=========================================================
 PLATAFORMA EDUCATIVA - SECUNDARIA
 Archivo: data/cursos.js

 Contiene:
 - Los cinco grados de secundaria.
 - Curso de Matemática.
 - Temas de cada grado.
 - Nombres visibles para los estudiantes.
 - Rutas de los materiales PDF.

 IMPORTANTE:
 Los nombres de las carpetas deben coincidir
 exactamente con los creados en el sistema de archivos.
=========================================================
*/

const cursosData = {

    // =========================================
    // PRIMER GRADO DE SECUNDARIA
    // =========================================

    Primer_Grado: {

        nombre: "Primer año de secundaria",

        cursos: {

            Matematicas: {

                nombre: "Matemática",

                icono: "calculator",

                descripcion: "Aprende los fundamentos de la matemática.",

                temas: [

                    {
                        id: "numeros_naturales",
                        nombre: "Números naturales",
                        descripcion: "Operaciones básicas, propiedades y resolución de problemas.",
                        carpeta: "Numeros_Naturales",
                        archivos: {
                            teoria: "Tema1.pdf",
                            resueltos: "ER-Tema1.pdf",
                            tarea: "T-Tema1.pdf"
                        }
                    },

                    {
                        id: "numeros_enteros",
                        nombre: "Números enteros",
                        descripcion: "Operaciones con números positivos y negativos.",
                        carpeta: "Numeros_Enteros",
                        archivos: {
                            teoria: "Tema1.pdf",
                            resueltos: "ER-Tema1.pdf",
                            tarea: "T-Tema1.pdf"
                        }
                    },

                    {
                        id: "fracciones",
                        nombre: "Fracciones",
                        descripcion: "Representación, comparación y operaciones con fracciones.",
                        carpeta: "Fracciones",
                        archivos: {
                            teoria: "Tema1.pdf",
                            resueltos: "ER-Tema1.pdf",
                            tarea: "T-Tema1.pdf"
                        }
                    },

                    {
                        id: "numeros_decimales",
                        nombre: "Números decimales",
                        descripcion: "Lectura, comparación y operaciones con números decimales.",
                        carpeta: "Numeros_Decimales",
                        archivos: {
                            teoria: "Tema1.pdf",
                            resueltos: "ER-Tema1.pdf",
                            tarea: "T-Tema1.pdf"
                        }
                    },

                    {
                        id: "potenciacion",
                        nombre: "Potenciación",
                        descripcion: "Potencias, propiedades y aplicaciones.",
                        carpeta: "Potenciacion",
                        archivos: {
                            teoria: "Tema1.pdf",
                            resueltos: "ER-Tema1.pdf",
                            tarea: "T-Tema1.pdf"
                        }
                    },

                    {
                        id: "radicacion",
                        nombre: "Radicación",
                        descripcion: "Raíces y operaciones fundamentales.",
                        carpeta: "Radicacion",
                        archivos: {
                            teoria: "Tema1.pdf",
                            resueltos: "ER-Tema1.pdf",
                            tarea: "T-Tema1.pdf"
                        }
                    },

                    {
                        id: "divisibilidad",
                        nombre: "Divisibilidad",
                        descripcion: "Criterios de divisibilidad, múltiplos y divisores.",
                        carpeta: "Divisibilidad",
                        archivos: {
                            teoria: "Tema1.pdf",
                            resueltos: "ER-Tema1.pdf",
                            tarea: "T-Tema1.pdf"
                        }
                    },

                    {
                        id: "maximo_comun_divisor",
                        nombre: "Máximo común divisor (MCD)",
                        descripcion: "Cálculo y aplicación del máximo común divisor.",
                        carpeta: "Maximo_Comun_Divisor",
                        archivos: {
                            teoria: "Tema1.pdf",
                            resueltos: "ER-Tema1.pdf",
                            tarea: "T-Tema1.pdf"
                        }
                    },

                    {
                        id: "minimo_comun_multiplo",
                        nombre: "Mínimo común múltiplo (MCM)",
                        descripcion: "Cálculo y aplicación del mínimo común múltiplo.",
                        carpeta: "Minimo_Comun_Multiplo",
                        archivos: {
                            teoria: "Tema1.pdf",
                            resueltos: "ER-Tema1.pdf",
                            tarea: "T-Tema1.pdf"
                        }
                    },

                    {
                        id: "expresiones_algebraicas",
                        nombre: "Expresiones algebraicas",
                        descripcion: "Introducción al lenguaje algebraico.",
                        carpeta: "Expresiones_Algebraicas",
                        archivos: {
                            teoria: "Tema1.pdf",
                            resueltos: "ER-Tema1.pdf",
                            tarea: "T-Tema1.pdf"
                        }
                    },

                    {
                        id: "ecuaciones",
                        nombre: "Ecuaciones de primer grado",
                        descripcion: "Resolución de ecuaciones sencillas.",
                        carpeta: "Ecuaciones",
                        archivos: {
                            teoria: "Tema1.pdf",
                            resueltos: "ER-Tema1.pdf",
                            tarea: "T-Tema1.pdf"
                        }
                    },

                    {
                        id: "geometria_basica",
                        nombre: "Geometría básica",
                        descripcion: "Puntos, rectas, segmentos y ángulos.",
                        carpeta: "Geometria_Basica",
                        archivos: {
                            teoria: "Tema1.pdf",
                            resueltos: "ER-Tema1.pdf",
                            tarea: "T-Tema1.pdf"
                        }
                    },

                    {
                        id: "perimetros_y_areas",
                        nombre: "Perímetros y áreas",
                        descripcion: "Cálculo de perímetros y áreas de figuras planas.",
                        carpeta: "Perimetros_y_Areas",
                        archivos: {
                            teoria: "Tema1.pdf",
                            resueltos: "ER-Tema1.pdf",
                            tarea: "T-Tema1.pdf"
                        }
                    },

                    {
                        id: "estadistica_basica",
                        nombre: "Estadística básica",
                        descripcion: "Recolección, organización e interpretación de datos.",
                        carpeta: "Estadistica_Basica",
                        archivos: {
                            teoria: "Tema1.pdf",
                            resueltos: "ER-Tema1.pdf",
                            tarea: "T-Tema1.pdf"
                        }
                    },

                    {
                        id: "probabilidad",
                        nombre: "Probabilidad",
                        descripcion: "Introducción a los experimentos aleatorios.",
                        carpeta: "Probabilidad",
                        archivos: {
                            teoria: "Tema1.pdf",
                            resueltos: "ER-Tema1.pdf",
                            tarea: "T-Tema1.pdf"
                        }
                    }

                ]
            }
        }
    },


    // =========================================
    // SEGUNDO GRADO DE SECUNDARIA
    // =========================================

    Segundo_Grado: {

        nombre: "Segundo año de secundaria",

        cursos: {

            Matematicas: {

                nombre: "Matemática",

                icono: "calculator",

                descripcion: "Desarrolla tus habilidades matemáticas.",

                temas: [

                    "Numeros_Racionales",
                    "Fracciones",
                    "Numeros_Decimales",
                    "Potenciacion",
                    "Radicacion",
                    "Proporcionalidad",
                    "Porcentajes",
                    "Expresiones_Algebraicas",
                    "Monomios_y_Polinomios",
                    "Ecuaciones_de_Primer_Grado",
                    "Angulos_y_Triangulos",
                    "Poligonos",
                    "Areas_y_Volumenes",
                    "Estadistica",
                    "Probabilidad"

                ].map(carpeta => ({
                    id: carpeta.toLowerCase(),
                    nombre: carpeta
                        .replace(/_/g, " ")
                        .replace(/\b\w/g, letra => letra.toUpperCase()),
                    descripcion: "Contenido de Matemática correspondiente a segundo año.",
                    carpeta: carpeta,
                    archivos: {
                        teoria: "Tema1.pdf",
                        resueltos: "ER-Tema1.pdf",
                        tarea: "T-Tema1.pdf"
                    }
                }))

            }
        }
    },


    // =========================================
    // TERCER GRADO DE SECUNDARIA
    // =========================================

    Tercer_Grado: {

        nombre: "Tercer año de secundaria",

        cursos: {

            Matematicas: {

                nombre: "Matemática",

                icono: "calculator",

                descripcion: "Profundiza tus conocimientos de álgebra y geometría.",

                temas: [

                    "Numeros_Reales",
                    "Potenciacion_y_Radicacion",
                    "Notacion_Cientifica",
                    "Productos_Notables",
                    "Factorizacion",
                    "Ecuaciones_de_Primer_Grado",
                    "Sistemas_de_Ecuaciones",
                    "Inecuaciones",
                    "Funciones_Lineales",
                    "Plano_Cartesiano",
                    "Semejanza_de_Triangulos",
                    "Teorema_de_Pitagoras",
                    "Areas_y_Volumenes",
                    "Medidas_Estadisticas",
                    "Probabilidad"

                ].map(carpeta => ({
                    id: carpeta.toLowerCase(),
                    nombre: carpeta
                        .replace(/_/g, " ")
                        .replace(/\b\w/g, letra => letra.toUpperCase()),
                    descripcion: "Contenido de Matemática correspondiente a tercer año.",
                    carpeta: carpeta,
                    archivos: {
                        teoria: "Tema1.pdf",
                        resueltos: "ER-Tema1.pdf",
                        tarea: "T-Tema1.pdf"
                    }
                }))

            }
        }
    },


    // =========================================
    // CUARTO GRADO DE SECUNDARIA
    // =========================================

    Cuarto_Grado: {

        nombre: "Cuarto año de secundaria",

        cursos: {

            Matematicas: {

                nombre: "Matemática",

                icono: "calculator",

                descripcion: "Aprende álgebra, funciones y trigonometría.",

                temas: [

                    "Numeros_Reales",
                    "Intervalos_Reales",
                    "Radicales",
                    "Ecuaciones_Cuadraticas",
                    "Inecuaciones",
                    "Sistemas_de_Ecuaciones",
                    "Funciones",
                    "Funcion_Cuadratica",
                    "Funcion_Exponencial",
                    "Progresiones_Aritmeticas",
                    "Progresiones_Geometricas",
                    "Trigonometria",
                    "Geometria_Analitica",
                    "Areas_y_Volumenes",
                    "Estadistica_y_Probabilidad"

                ].map(carpeta => ({
                    id: carpeta.toLowerCase(),
                    nombre: carpeta
                        .replace(/_/g, " ")
                        .replace(/\b\w/g, letra => letra.toUpperCase()),
                    descripcion: "Contenido de Matemática correspondiente a cuarto año.",
                    carpeta: carpeta,
                    archivos: {
                        teoria: "Tema1.pdf",
                        resueltos: "ER-Tema1.pdf",
                        tarea: "T-Tema1.pdf"
                    }
                }))

            }
        }
    },


    // =========================================
    // QUINTO GRADO DE SECUNDARIA
    // =========================================

    Quinto_Grado: {

        nombre: "Quinto año de secundaria",

        cursos: {

            Matematicas: {

                nombre: "Matemática",

                icono: "calculator",

                descripcion: "Consolida tus conocimientos matemáticos para la educación superior.",

                temas: [

                    "Numeros_Reales",
                    "Intervalos_y_Desigualdades",
                    "Logaritmos",
                    "Ecuaciones_Exponenciales",
                    "Ecuaciones_Logaritmicas",
                    "Funciones_Exponenciales",
                    "Funciones_Logaritmicas",
                    "Funciones_Trigonométricas",
                    "Identidades_Trigonometricas",
                    "Resolucion_de_Triangulos",
                    "Geometria_Analitica",
                    "Sucesiones_y_Series",
                    "Matrices_y_Determinantes",
                    "Estadistica",
                    "Probabilidad"

                ].map(carpeta => ({
                    id: carpeta.toLowerCase(),
                    nombre: carpeta
                        .replace(/_/g, " ")
                        .replace(/\b\w/g, letra => letra.toUpperCase()),
                    descripcion: "Contenido de Matemática correspondiente a quinto año.",
                    carpeta: carpeta,
                    archivos: {
                        teoria: "Tema1.pdf",
                        resueltos: "ER-Tema1.pdf",
                        tarea: "T-Tema1.pdf"
                    }
                }))

            }
        }
    }

};


// =========================================
// EXPORTACIÓN PARA USO EN EL NAVEGADOR
// =========================================

if (typeof window !== "undefined") {
    window.cursosData = cursosData;
}
