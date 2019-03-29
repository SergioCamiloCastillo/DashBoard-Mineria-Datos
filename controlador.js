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
    arr2 = ["Fisica Mecanica", "Algebra Lineal", "Programacion Basica"];
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr2.length; j++) {
            if (arr[i] == arr2[j]) {
                contt++;
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
        values: [contt, 3 - contt],
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
    
    var data = [
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

    Plotly.newPlot('myDiv3', data, layout);





   



}

