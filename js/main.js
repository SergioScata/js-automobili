let automobili = [
    {marca : "Audi",
     modello : "Q3",
     alimentazione : "Diesel"
},
{marca : "Fiat",
     modello : "500",
     alimentazione : "Benzina"
},
{marca : "Mercedes",
     modello : "Benz",
     alimentazione : "Benzina"
},
{marca : "Ford",
     modello : "Fiesta",
     alimentazione : "Diesel"
},
{marca : "Volkswagen",
     modello : "Up",
     alimentazione : "Elettrica"
},
{marca : "Toyota",
     modello : "Yaris",
     alimentazione : "Gpl"
},
{marca : "Tesla",
     modello : "Model 3",
     alimentazione : "Elettrica"
},
{marca : "Honda",
     modello : "Jetz",
     alimentazione : "Diesel"
},
{marca : "Hyundai",
     modello : "Tucson",
     alimentazione : "Benzina"
},
{marca : "Mini",
     modello : "Cooper",
     alimentazione : "Diesel"
}
];

let AutoBenzina = [];
let AutoDiesel = [];
let AltreAuto = [];

automobili.forEach (function (auto) {
    if (auto.alimentazione == "Benzina"){
        AutoBenzina.push(auto);
    }
    else if(auto.alimentazione == "Diesel"){
        AutoDiesel.push(auto);
    }
    else{
        AltreAuto.push(auto);
    }
});

console.log(AutoBenzina);
console.log(AutoDiesel);
console.log(AltreAuto);

document.getElementById("containerrow").innerHTML += "Automobili a benzina"
for (let i= 0; i< AutoBenzina.length; i++){
   document.getElementById("containerrow").innerHTML += `<div class="card">
   <ul class="list-group list-group-flush">
     <li class="list-group-item">${AutoBenzina[i].marca}</li>
     <li class="list-group-item">${AutoBenzina[i].modello}</li>
     <li class="list-group-item">${AutoBenzina[i].alimentazione}</li>
   </ul>
 </div>`
}

document.getElementById("containerrow").innerHTML += "Automobili a Diesel"
for (let i= 0; i< AutoDiesel.length; i++){
   document.getElementById("containerrow").innerHTML += `<div class="card">
   <ul class="list-group list-group-flush">
     <li class="list-group-item">${AutoDiesel[i].marca}</li>
     <li class="list-group-item">${AutoDiesel[i].modello}</li>
     <li class="list-group-item">${AutoDiesel[i].alimentazione}</li>
   </ul>
 </div>`
}

document.getElementById("containerrow").innerHTML += "Automobili con diversi tipi di alimentazione"
for (let i= 0; i< AltreAuto.length; i++){
   document.getElementById("containerrow").innerHTML += `<div class="card">
   <ul class="list-group list-group-flush">
     <li class="list-group-item">${AltreAuto[i].marca}</li>
     <li class="list-group-item">${AltreAuto[i].modello}</li>
     <li class="list-group-item">${AltreAuto[i].alimentazione}</li>
   </ul>
 </div>`
}


function AddAuto(event){
    event.preventDefault();

    let nuovaMarca= document.getElementById("Marca").value;
    let nuovoModello= document.getElementById("Modello").value;
    let nuovaAlimentazione= document.getElementById("Alimentazione").value;


    let newAuto= {
        marca: nuovaMarca,
        modello: nuovoModello,
        alimentazione: nuovaAlimentazione
    }

    automobili.push(newAuto);

    let nuovaCard= `<div class="card">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${nuovaMarca}</li>
      <li class="list-group-item">${nuovoModello}</li>
      <li class="list-group-item">${nuovaAlimentazione}</li>
    </ul>
  </div>`

  document.getElementById("containerrow").innerHTML += nuovaCard;
}