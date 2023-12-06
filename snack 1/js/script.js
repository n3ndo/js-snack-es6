const biciDaCorsa = [
    {
        nome: 'Bianchi Oltre XR4',
        peso: 7.1
    },
    {
        nome: 'Specialized Tarmac SL7',
        peso: 6.8
    },
    {
        nome: 'Cervelo S3',
        peso: 7.2
    },
];

let pesoMinimo = 10;
let biciLeggera;

for (const bici of biciDaCorsa) {
    if (bici.peso < pesoMinimo) {
        pesoMinimo = bici.peso;
        biciLeggera = bici;
    }
}

if (biciLeggera !== null) {
    const { nome, peso } = biciLeggera;
    console.log(`La bici più leggera è ${nome} con un peso di ${peso} kg.`);
} else {
    console.log('Nessuna bici trovata.');
}