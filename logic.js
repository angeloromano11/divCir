
radious = () => {
    return  document.getElementById("-radio").value;
};  

div = () => {
    return  document.getElementById("-divisiones").value
}; 

const xmin = 0;
const ymin = 0;
const xmax = 2*radious();
const ymax = radious();
var x = 0;
var y = 0;



console.log(`Radio = ${radious()}`)
console.log(`Divisiones = ${div()}`)


var resultado = document.getElementById("submit");

//calcula toda la logica una vez se hace click en el boton
resultado.onclick = () =>{

    var angle = (180/div());
    var anglearray = [0];
    var angle2 = 0;

    //alert(`Radio = ${radious()} Divisiones = ${div()}`)
    console.log(`Radio = ${radious()}`)
    console.log(`Divisiones = ${div()}`)
    console.log(`Xmax = ${xmax}`)
    console.log(`Ymax = ${ymax}`)
    console.log(`angulo = ${angle}`)


    for(let i = 0; i < div(); i++){
        b = angle2 + angle;
        angle2 = b;
        anglearray.push(b)
         
    };
    console.log(`angulos = ${anglearray}`);
    document.getElementById("angulos").innerText = `Angulos = ${anglearray}`;

    if(radious() == "" || div() == ""){
        alert('Completa los datos bro..');
    }
    
    else{
        alert('calculando');

// funcion para pasar de radianes a degrees
    toDegrees = (angle) => {
        return angle * (Math.PI / 180);
    }

//array para las coordenadas de x, radio - el resultante 
    var xarray = [];
    for(let i = 0; i < anglearray.length; i++){
        var c = radious() - (radious() * (Math.cos(toDegrees(anglearray[i]))))
        xarray.push(c);
    }

//array para las coordenadas de y, como Y va siempre sumando no es necesario restarle el ymax
    var yarray = [];
    for(let i = 0; i < anglearray.length; i++){
        var d = (radious() * (Math.sin(toDegrees(anglearray[i]))))
        yarray.push(d);
    }

    //Crear las coordenadas
    var e1 = ''
    var e2 = ''
    for(let i =0; i < anglearray.length; i++){
        //var f = document.getElementById("breakLine")
        e0 = `${i + 1} `
        e1 = ` ${xarray[i].toFixed(3)} `;
        e2 = ` ${yarray[i].toFixed(3)} `;
        console.log(e1, e2)

        var table = document.getElementById("myTable");
        var row = table.insertRow(i + 1);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        cell0.innerHTML = e0;
        cell1.innerHTML = e1;
        cell2.innerHTML = e2;
          
    }
}
}

    


