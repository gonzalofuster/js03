class Alfajor {
    constructor(alfajor) {
        this.id = alfajor.id;
        this.marca = alfajor.marca;
        this.precio = alfajor.precio;
        this.precioTotal = alfajor.precio;
    }
}


const alfajores = [
    {
        id: 0,
        marca: "Terrabusi Torta",
        descripcion: "Alfajor minitorta clasica",
        precio: 100,
    },
    {
        id: 1,
        marca: "Milka",
        descripcion: "Alfajor con mouse de chocolate",
        precio: 90,
    },
    {
        id: 2,
        marca: "Block",
        descripcion: "Alfajor con chocolate con mani",
        precio: 95,
    },
    {
        id: 3,
        marca: "Bon o Bon",
        descripcion: "Alfajor con pasta de mani",
        precio: 85,
    },
    {
        id: 4,
        marca: "Pepitos",
        descripcion: "Alfajor con chips de chocolate",
        precio: 90,
    },
    {
        id: 5,
        marca: "Guaymallen",
        descripcion: "Alfajor de chocolate",
        precio: 85,
    },
];


let precioTotal;


function nombrarAlfajores() {
    let mostrarProductos = "";


    for (let i = 0; i < alfajores.length; i++) {
        mostrarProductos = `${alfajores[i].id}: ${alfajores[i].marca}. Precio: $${alfajores[i].precio} \n`;
        console.log(mostrarProductos)
    }
}

nombrarAlfajores()