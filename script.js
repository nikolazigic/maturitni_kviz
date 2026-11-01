const otazky = [
    {
        id: 1,
        kategorie: "Božena Němcová",
        otazka: "Které z uvedených děl napsala Božena Němcová?",
        moznosti: ["Máj", "Babička", "Kytice"],
        spravna: 1
    },
    {
        id: 2,
        kategorie: "Božena Němcová",
        otazka: "Jak se jmenuje nejstarší vnučka v Babičce?",
        moznosti: ["Barunka", "Adélka", "Viktorka"],
        spravna: 0
    },
    {
        id: 3,
        kategorie: "Karel Hynek Mácha",
        otazka: "Které dílo napsal Karel Hynek Mácha?",
        moznosti: ["Máj", "Kytice", "Maryša"],
        spravna: 0
    },
    {
        id: 4,
        kategorie: "Karel Hynek Mácha",
        otazka: "Jak se jmenuje hlavní hrdina básně Máj?",
        moznosti: ["Jarmila", "Vilém", "Hynek"],
        spravna: 1
    },
    {
        id: 5,
        kategorie: "Karel Jaromír Erben",
        otazka: "Která báseň patří do sbírky Kytice?",
        moznosti: ["Máj", "Svatební košile", "Tyrolské elegie"],
        spravna: 1
    },
    {
        id: 6,
        kategorie: "Jan Neruda",
        otazka: "Které dílo napsal Jan Neruda?",
        moznosti: ["Povídky malostranské", "Babička", "Král Lávra"],
        spravna: 0
    },
    {
        id: 7,
        kategorie: "Karel Havlíček Borovský",
        otazka: "Které dílo napsal Karel Havlíček Borovský?",
        moznosti: ["Kytice", "Povídky malostranské", "Král Lávra"],
        spravna: 2
    },
    {
        id: 8,
        kategorie: "Karel Čapek",
        otazka: "Ve kterém Čapkově díle se poprvé objevuje slovo robot?",
        moznosti: ["Válka s mloky", "R.U.R.", "Bílá nemoc"],
        spravna: 1
    },
    {
        id: 9,
        kategorie: "Karel Čapek",
        otazka: "Jak se jmenuje kapitán, který ve Válce s mloky objeví mloky?",
        moznosti: ["Kapitán Nemo", "Kapitán J. van Toch", "Kapitán Švejk"],
        spravna: 1
    },
    {
        id: 10,
        kategorie: "Jaroslav Hašek",
        otazka: "Kterému důstojníkovi slouží Švejk jako sluha?",
        moznosti: ["Nadporučík Lukáš", "Poručík Dub", "Feldkurát Katz"],
        spravna: 0
    },
    {
        id: 11,
        kategorie: "Bohumil Hrabal",
        otazka: "Které dílo napsal Bohumil Hrabal?",
        moznosti: ["Žert", "Saturnin", "Obsluhoval jsem anglického krále"],
        spravna: 2
    },
    {
        id: 12,
        kategorie: "Milan Kundera",
        otazka: "Jak se jmenuje hlavní hrdina Kunderova Žertu?",
        moznosti: ["Tomáš", "Jaromil", "Ludvík Jahn"],
        spravna: 2
    },
    {
        id: 13,
        kategorie: "Jaroslav Seifert",
        otazka: "Který český spisovatel získal Nobelovu cenu za literaturu?",
        moznosti: ["Karel Čapek", "Jaroslav Seifert", "Bohumil Hrabal"],
        spravna: 1
    }
];

let aktualni = 0;
let skore = 0;
const kviz = document.getElementById("kviz");

function zobrazOtazku() {
    const o = otazky[aktualni];
    kviz.innerHTML = "";

    const nadpis = document.createElement("h2");
    nadpis.textContent = o.otazka;
    kviz.appendChild(nadpis);

    o.moznosti.forEach(function (text, index) {
        const tlacitko = document.createElement("button");
        tlacitko.textContent = text;
        tlacitko.onclick = function () {
            zkontroluj(index);
        };
        kviz.appendChild(tlacitko);
    });
}

zobrazOtazku();

function zkontroluj(vybrany) {

    if (vybrany === otazky[aktualni].spravna) {
        skore++;
    }
    aktualni++;

    // pokud ještě nějaká otázka zbývá, zobrazí se, jinak kvíz končí e a zobrazí se výsledek
    if (aktualni < otazky.length) {
        zobrazOtazku();
    } else {
        zobrazVysledek();
    }
}




function zobrazVysledek() {
    kviz.innerHTML = "";

    const vysledek = document.createElement("h2");
    vysledek.textContent = "Získal jsi " + skore + " z " + otazky.length + " bodů";
    kviz.appendChild(vysledek);

    const znovu = document.createElement("button");
    znovu.textContent = "Hrát znovu";
    znovu.onclick = function () {
        aktualni = 0;
        skore = 0;
        zobrazOtazku();
    };
    kviz.appendChild(znovu);




    }