let jmena = [
    "Markéta",
    "Kateřina",
    "Júlia",
    "Lucie",
    "Aneta",
    "Veronika",
    "Petra",
    "Olga",
    "Naďa",
    "Nikola",
    "Eva",
    "Anísa",
    "Terezia",
    "Diana",
    "Anna",
    "Iva",
    "Denisa",
    "Zuzana",
    "Jana",
    "Martina",
    "Lenka",
    "Iveta",
    "Pavla",
    "Lucie",
    "Kamila",
    "Soňa"
];

let tazenaJmena = [];
let vyherce = document.querySelector('#vyherka');
let pocet = document.querySelector('#pocitadlo');

function tahnoutJmeno() {
    if (jmena.length === 0) {
        return;
    }

    // Generujeme náhodný index
    let vyherniIndex = Math.floor(Math.random() * jmena.length);

    // Získáme výherní jméno na patřičném indexu
    let vyherniJmeno = jmena[vyherniIndex];

    // Vyřadíme vylosované jméno z osudí
    jmena.splice(vyherniIndex, 1);

    // Výherní jméno si uložíme do pole k ostatním výherním na zacatek
    tazenaJmena.unshift(vyherniJmeno);

    vyherce.textContent = vyherniJmeno;

    let seznam = document.querySelector('#seznam');
    seznam.textContent = tazenaJmena;

    pocitadlo.textContent = parseFloat(pocitadlo.textContent) + 1;
}

function restart() {
    jmena = [
        "Markéta",
        "Kateřina",
        "Júlia",
        "Lucie",
        "Aneta",
        "Veronika",
        "Petra",
        "Olga",
        "Naďa",
        "Nikola",
        "Eva",
        "Anísa",
        "Terezia",
        "Diana",
        "Anna",
        "Iva",
        "Denisa",
        "Zuzana",
        "Jana",
        "Martina",
        "Lenka",
        "Iveta",
        "Pavla",
        "Lucie",
        "Kamila",
        "Soňa"
    ];
    tazenaJmena = [];
    pocitadlo.textContent = 0;
    seznam.textContent = tazenaJmena;
    vyherce.textContent = ' ';
}