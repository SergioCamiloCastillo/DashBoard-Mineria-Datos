document.getElementById('button').addEventListener('click', enviar);

function enviar() {

    src = "https://cdn.plot.ly/plotly-latest.min.js";
    src = "librerias/plotly-latest.min.js";
    src = "https://cdnjs.cloudflare.com/ajax/libs/numeric/1.2.6/numeric.min.js";
    var checkboxes = document.getElementById("form1").checkbox; //Array que contiene los checkbox
    var cont; //Variable que lleva la cuenta de los checkbox pulsados
    cont = 0;
    var contt; //Variable que lleva la cuenta de los checkbox pulsados
    contt = 0;
    var arr = [];
    for (i = 0; i < document.form1.elements.length; i++) {
        if ((document.form1[i].type == 'checkbox') && (document.form1[i].checked == true)) {

            arr.push(document.form1[i].value);



        }

        if (document.form1[i].checked) {
            cont++;
        }



    }
    arr2 = ["GBI", "CEPLEC 1", "Precalculo", "Logica Matematica", "Introduccion Ingenieria", "Proyecto de Vida", "Programacion Basica", "Ingles 1", "CEPLEC 2", "Calculo Diferencial", "Algebra Lineal", "Metodologia de la informacion", "Categra Minuto de Dios", "Programacion Orientado a Objetos", "Ingles 2", "Calculo Integral", "Fisica Mecanica", "Emprendimiento", "Estructura de Datos", "Sistemas Operativos", "Ingles 3", "Fisica Electrica", "Desarrollo Social Contemporaneo", "Redes de computadores", "Bases de Datos", "Electiva CPC 014", "Probabilidad y Estadistica", "Practica Respondabilidad social", "Programacion Web", "Ingenieria de Software", "Interconectividad", "Sistemas Transaccionales", "Ecuaciones Diferenciales", "ElectivaCMD Ingenieros sin Fronteras", "Desarrollo basado en plataformas", "Diseño de algoritmos", "Sistemas Distribuidos", "Electiva CPC 054", "Matematica Discreta", "Etica Profesional", "Electiva CMD 022", "Arquitectura de Software", "Estructura de internet, servicios y servidores", "Plan de Negocios", "Bases de Datos Masivas", "Metodos Numericos", "Electiva CMD 032", "Electiva CP 263", "Seguridad de la informacion", "Ingenieria Economica", " Mineria de Datos", "Electiva CPC 044", "Seminario Investigacion a la Ingenieria", "Electiva CMD", "Calidad y Gestion de Proyectos Informaticos", "Gestion de Infraestructura", "Electiva CPC 024", "Practica Profesional", "Electiva CMD Ingenieria y desarrollo regional", "Electiva CP 093", "Electiva CP 183", "Electiva CPC 034", "Opcion de Grado"];
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr2.length; j++) {
            if (arr[i] == arr2[j]) {
                contt++;
            }
        }

    }
    var arr3 = [];
console.log(arr2);

    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (arr[i] == arr2[j]) {
               
               arr2.splice(j,1);

            }
        }

    }




    var data = [{
        values: [cont, 64 - cont],
        labels: ["Aprobo", "No aprobo"],
        type: 'pie'
    }];

    var layout = {
        height: 400,
        width: 500,
        title: "Porcentaje de materias aprobadas Antiguo pensum"
    };
    var options = {
        title: {
            text: "Hola"
        }
    }

    Plotly.newPlot('myDiv1', data, layout, options);
    var data2 = [{
        values: [contt, 64 - contt],
        labels: ["Aprobo", "No aprobo"],
        type: 'pie'
    }];

    var layout2 = {
        height: 400,
        width: 500,
        title: "Porcentaje de materias aprobadas Nuevo pensum"

    };
    var options2 = {
        title: {
            text: "Hola"
        }
    }

    Plotly.newPlot('myDiv2', data2, layout2, options2);

    /* var data = [
         {
             x: arr,
             y: [1, 2, 3],
             type: 'bar'
         }
     ];
     var layout = {
         height: 400,
         width: 500,
         title: "Hola hijueputas"
     };
 
     Plotly.newPlot('myDiv3', data, layout);*/
    var myJson = JSON.stringify(arr2);

    myJson = myJson.replace(/["']/g, "\n\r");

    var data = new google.visualization.DataTable();
    data.addColumn('string');
    data.addColumn('string', 'Materias por aprobar del nuevo pensum');

    data.addRows([
        ["Materias faltantes", myJson]


    ]);




    var table = new google.visualization.Table(document.getElementById('myDiv3'));

    table.draw(data, { width: 1500, height: 400 });






}


google.charts.load('current', { 'packages': ['table'] });


