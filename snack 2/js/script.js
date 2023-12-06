const squadreDiCalcio = [
    {
        nome: 'Atalanta',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Bologna',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Cagliari',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Inter',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Milan',
        puntiFatti: 0,
        falliSubiti: 0
    },
];

function generaNumeroRandom(min, max) {
    return Math.floor(Math.random() * 10 + 1);
}

squadreDiCalcio.forEach(squadra => {
    squadra.puntiFatti = generaNumeroRandom(1, 10);
    squadra.falliSubiti = generaNumeroRandom(1, 10);
});

const squadreConFalli = squadreDiCalcio.map(({ nome, falliSubiti }) => ({ nome, falliSubiti }));

console.log("Squadre di calcio:");
console.log(squadreDiCalcio);

console.log("nomi e falli subiti:");
console.log(squadreConFalli);