const otazky = [
    {
        id: 1,
        kategorie: "Božena Němcová",
        otazka: "Které z uvedených děl napsala Božena Němcová?",
        moznosti: ["Máj", "Babička", "Kytice", "Povídky malostranské"],
        spravna: 1
    },
    {
        id: 2,
        kategorie: "Božena Němcová",
        otazka: "Jak se jmenuje nejstarší vnučka v Babičce?",
        moznosti: ["Adélka", "Viktorka", "Kristýna", "Barunka"],
        spravna: 3
    },
    {
        id: 3,
        kategorie: "Karel Hynek Mácha",
        otazka: "Které dílo napsal Karel Hynek Mácha?",
        moznosti: ["Máj", "Kytice", "Maryša", "Babička"],
        spravna: 0
    },
    {
        id: 4,
        kategorie: "Karel Hynek Mácha",
        otazka: "Jak se jmenuje hlavní hrdina básně Máj?",
        moznosti: ["Jarmila", "Vilém", "Hynek", "Jan"],
        spravna: 1
    },
    {
        id: 5,
        kategorie: "Karel Jaromír Erben",
        otazka: "Která báseň patří do sbírky Kytice?",
        moznosti: ["Máj", "Svatební košile", "Tyrolské elegie", "Povídky malostranské"],
        spravna: 1
    },
    {
        id: 6,
        kategorie: "Jan Neruda",
        otazka: "Které dílo napsal Jan Neruda?",
        moznosti: ["Povídky malostranské", "Babička", "Král Lávra", "Kytice"],
        spravna: 0
    },
    {
        id: 7,
        kategorie: "Karel Havlíček Borovský",
        otazka: "Které dílo napsal Karel Havlíček Borovský?",
        moznosti: ["Kytice", "Povídky malostranské", "Král Lávra", "Máj"],
        spravna: 2
    },
    {
        id: 8,
        kategorie: "Karel Čapek",
        otazka: "Ve kterém Čapkově díle se poprvé objevuje slovo robot?",
        moznosti: ["Válka s mloky", "R.U.R.", "Bílá nemoc", "Matka"],
        spravna: 1
    },
    {
        id: 9,
        kategorie: "Karel Čapek",
        otazka: "Jak se jmenuje kapitán, který ve Válce s mloky objeví mloky?",
        moznosti: ["Kapitán Nemo", "Kapitán Ahab", "Kapitán Švejk", "Kapitán J. van Toch"],
        spravna: 3
    },
    {
        id: 10,
        kategorie: "Jaroslav Hašek",
        otazka: "Kterému důstojníkovi slouží Švejk jako sluha?",
        moznosti: ["Nadporučík Lukáš", "Poručík Dub", "Feldkurát Katz", "Plukovník Kraus"],
        spravna: 0
    },
    {
        id: 11,
        kategorie: "Bohumil Hrabal",
        otazka: "Které dílo napsal Bohumil Hrabal?",
        moznosti: ["Žert", "Saturnin", "Obsluhoval jsem anglického krále", "Markéta Lazarová"],
        spravna: 2
    },
    {
        id: 12,
        kategorie: "Milan Kundera",
        otazka: "Jak se jmenuje hlavní hrdina Kunderova Žertu?",
        moznosti: ["Tomáš", "Jaromil", "Franz", "Ludvík Jahn"],
        spravna: 3
    },
    {
        id: 13,
        kategorie: "Jaroslav Seifert",
        otazka: "Který český spisovatel získal Nobelovu cenu za literaturu?",
        moznosti: ["Karel Čapek", "Jaroslav Seifert", "Bohumil Hrabal", "Milan Kundera"],
        spravna: 1
    },
    // nové otázky 14 až 20
    {
        id: 14,
        kategorie: "Alois Jirásek",
        otazka: "Které dílo napsal Alois Jirásek?",
        moznosti: ["Babička", "Maryša", "Staré pověsti české", "Povídky z jedné kapsy"],
        spravna: 2
    },
    {
        id: 15,
        kategorie: "Bratři Mrštíkové",
        otazka: "Kdo je autorem dramatu Maryša?",
        moznosti: ["Bratři Mrštíkové", "Alois Jirásek", "Josef Kajetán Tyl", "Jaroslav Vrchlický"],
        spravna: 0
    },
    {
        id: 16,
        kategorie: "Jaroslav Hašek",
        otazka: "V jaké hospodě je Švejk na začátku románu zatčen?",
        moznosti: ["U Fleků", "U Kalicha", "U Zlatého tygra", "U Vejvodů"],
        spravna: 1
    },
    {
        id: 17,
        kategorie: "Josef Kajetán Tyl",
        otazka: "Kdo napsal text písně Kde domov můj?",
        moznosti: ["Karel Hynek Mácha", "Jan Neruda", "Josef Kajetán Tyl", "Karel Havlíček Borovský"],
        spravna: 2
    },
    {
        id: 18,
        kategorie: "Vladislav Vančura",
        otazka: "Které dílo napsal Vladislav Vančura?",
        moznosti: ["Markéta Lazarová", "Maryša", "Babička", "Povídky malostranské"],
        spravna: 0
    },
    {
        id: 19,
        kategorie: "Milan Kundera",
        otazka: "Které dílo napsal Milan Kundera?",
        moznosti: ["Saturnin", "Válka s mloky", "Nesnesitelná lehkost bytí", "Ostře sledované vlaky"],
        spravna: 2
    },
    {
        id: 20,
        kategorie: "Bohumil Hrabal",
        otazka: "Jak se jmenuje hlavní hrdina novely Ostře sledované vlaky?",
        moznosti: ["Ludvík Jahn", "Josef Švejk", "Ferdinand Vaněk", "Miloš Hrma"],
        spravna: 3
    }
];

let aktualni = 0;
let skore = 0;
const kviz = document.getElementById("kviz");

// kolik otázek se zobrazí v jednom kole (zbytek se vybírá podle systému opakování chyb)
const POCET_V_KOLE = 10;

function zobrazOtazku() {
    // otázka se teď bere z kola (vybrané otázky), ne z celého pole otazky
    const o = kolo[aktualni];
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

function zkontroluj(vybrany) {
    // aktuální otázka z kola
    const o = kolo[aktualni];

    if (vybrany === o.spravna) {
        skore++;
    } else {
        // špatná odpověď: zvýší se počet chyb u otázky (podle id) i u jejího autora
        chyby[o.id] = (chyby[o.id] || 0) + 1;
        chybyKategorie[o.kategorie] = (chybyKategorie[o.kategorie] || 0) + 1;
    }
    aktualni++;

    // pokud ještě nějaká otázka zbývá, zobrazí se, jinak kvíz končí e a zobrazí se výsledek
    if (aktualni < kolo.length) {
        zobrazOtazku();
    } else {
        zobrazVysledek();
    }
}



//////////////////////////// vysledek testu
function zobrazVysledek() {
    kviz.innerHTML = "";

    const vysledek = document.createElement("h2");
    // počet otázek se bere z kola
    vysledek.textContent = "Získal jsi " + skore + " z " + kolo.length + " bodů";
    kviz.appendChild(vysledek);

    // přehled slabých oblastí: autoři, u kterých hráč chyboval, od nejvíc chyb
    // Object.keys vrátí pole jmen autorů, sort je seřadí podle počtu chyb sestupně
    const slabe = Object.keys(chybyKategorie);
    slabe.sort(function (a, b) {
        return chybyKategorie[b] - chybyKategorie[a];
    });

    // přehled se zobrazí jen tehdy, když nějaká chyba byla
    if (slabe.length > 0) {
        const podnadpis = document.createElement("h3");
        podnadpis.textContent = "K zopakování:";
        kviz.appendChild(podnadpis);

        const seznam = document.createElement("ul");
        slabe.forEach(function (autor) {
            const polozka = document.createElement("li");
            polozka.textContent = autor + " (chyb: " + chybyKategorie[autor] + ")";
            seznam.appendChild(polozka);
        });
        kviz.appendChild(seznam);
    }

    const znovu = document.createElement("button");
    znovu.textContent = "Hrát znovu";
    // nová hra: vynuluje skóre a vybere nové kolo
    znovu.onclick = novaHra;
    kviz.appendChild(znovu);

}
////////////////////// system opakovani chyb - spatne odpovezene otazky se objevuji casteji
let chyby = {};
let kolo = [];
// počet chyb podle autora (kategorie), z toho se dělá přehled na konci
let chybyKategorie = {};

function vyberKolo(pocet) {
    // pomocné pole, ze kterého se vybírá: každá otázka je v něm vícekrát, pokud byla pokažená
    let nabidkaOtazek = [];
    otazky.forEach(function (o) {
        const pocetChyb = chyby[o.id] || 0;
        // každá otázka tam musí být aspoň jednou, za každou chybu přibyde další výskyt
        const pocetVNabidce = 1 + pocetChyb;
        for (let i = 0; i < pocetVNabidce; i++) {
            nabidkaOtazek.push(o);
        }
    });

    let vybrane = [];

    //AI mi tady pomohlo v logice konkrétně model Claude - Sonnet 5.5
    while (vybrane.length < pocet && nabidkaOtazek.length > 0) {
        // náhodný index v nabídce otázek
        const nahodnyIndex = Math.floor(Math.random() * nabidkaOtazek.length);
        const vybrana = nabidkaOtazek[nahodnyIndex];
        vybrane.push(vybrana);

        // všechny výskyty vybrané otázky se odstraní, aby se v kole neobjevila dvakrát
        nabidkaOtazek = nabidkaOtazek.filter(function (o) {
            return o.id !== vybrana.id;
        });
    }
    return vybrane;
}

// spuštění nové hry: vynuluje skóre a přehled chyb z kola, vybere otázky a zobrazí první
// "chyby" (podle otázek) se nemažou, díky nim se špatné otázky vrací častěji
function novaHra() {
    aktualni = 0;
    skore = 0;
    chybyKategorie = {};
    kolo = vyberKolo(POCET_V_KOLE);
    zobrazOtazku();
}

// start kvízu po načtení stránky (musí být úplně dole, až po deklaraci všech proměnných)
novaHra();