const zajecia = [
    { dzien: "Poniedziałek", godzina: "16:30-17:30", nazwa: "Hip-Hop", grupa: "5-8 lat", typ: "dzieci" },
    { dzien: "Poniedziałek", godzina: "17:30-18:30", nazwa: "Hip-Hop", grupa: "9-14 lat", typ: "dzieci" },
    { dzien: "Poniedziałek", godzina: "18:30-19:30", nazwa: "Hip-Hop", grupa: "15+ lat", typ: "dzieci" },
    { dzien: "Poniedziałek", godzina: "19:30-21:00", nazwa: "Open Class", grupa: "Open", typ: "dorosli" },
    { dzien: "Poniedziałek", godzina: "21:00-22:00", nazwa: "Hip-Hop", grupa: "Dorośli", typ: "dorosli" },

    { dzien: "Wtorek", godzina: "8:30-9:30", nazwa: "Pilates i Stretching", grupa: "Zaj. otwarte", typ: "dorosli" },
    { dzien: "Wtorek", godzina: "16:30-17:30", nazwa: "Breakdance", grupa: "5+ lat", typ: "dzieci" },
    { dzien: "Wtorek", godzina: "17:30-18:30", nazwa: "Jazz", grupa: "5+ lat", typ: "dzieci" },
    { dzien: "Wtorek", godzina: "18:30-19:30", nazwa: "K-Pop", grupa: "8+ lat", typ: "dzieci" },
    { dzien: "Wtorek", godzina: "19:30-20:30", nazwa: "Commercial", grupa: "Gr. podstawowa", typ: "dzieci" },
    { dzien: "Wtorek", godzina: "20:30-21:30", nazwa: "Latino Commercial", grupa: "Zaj. otwarte", typ: "dorosli" },

    { dzien: "Środa", godzina: "16:30-17:30", nazwa: "Hip-Hop", grupa: "5-8 lat", typ: "dzieci" },
    { dzien: "Środa", godzina: "17:30-18:30", nazwa: "Hip-Hop", grupa: "9-14 lat", typ: "dzieci" },
    { dzien: "Środa", godzina: "18:00-19:00", nazwa: "Akrobatyka", grupa: "8-12 lat", typ: "dzieci" },
    { dzien: "Środa", godzina: "18:30-19:30", nazwa: "Hip-Hop", grupa: "15+ lat", typ: "dzieci" },
    { dzien: "Środa", godzina: "19:00-20:00", nazwa: "Akrobatyka", grupa: "13+ lat", typ: "dzieci" },
    { dzien: "Środa", godzina: "19:30-20:45", nazwa: "High Heels", grupa: "Gr. podstawowa", typ: "dorosli" },
    { dzien: "Środa", godzina: "20:45-22:00", nazwa: "High Heels", grupa: "Gr. zaawansowana", typ: "dorosli" },

    { dzien: "Czwartek", godzina: "16:30-17:30", nazwa: "Breakdance", grupa: "5+ lat", typ: "dzieci" },
    { dzien: "Czwartek", godzina: "17:30-18:30", nazwa: "Jazz", grupa: "5+ lat", typ: "dzieci" },
    { dzien: "Czwartek", godzina: "18:30-19:30", nazwa: "Commercial", grupa: "Gr. podstawowa", typ: "dzieci" },
    { dzien: "Czwartek", godzina: "19:30-20:30", nazwa: "Commercial", grupa: "Gr. zaawansowana", typ: "dzieci" },

    { dzien: "Piątek", godzina: "17:30-18:30", nazwa: "High Heels", grupa: "Gr. podstawowa", typ: "dorosli" },
    { dzien: "Piątek", godzina: "18:30-19:30", nazwa: "Afro Dance", grupa: "Zaj. otwarte", typ: "dorosli" },
];

const dni = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek"];

function generujGrafik() {
    const siatka = document.getElementById("grafik-siatka");
    if (!siatka) return;

    // Nagłówki dni
    let html = '<div class="grafik-naglowki">';
    dni.forEach(d => {
        html += `<div class="grafik-dzien-naglowek">${d}</div>`;
    });
    html += '</div>';

    // Kolumny z zajęciami
    html += '<div class="grafik-kolumny">';
    dni.forEach(dzien => {
        const zajeciaDnia = zajecia.filter(z => z.dzien === dzien);
        html += `<div class="grafik-kolumna">`;
        zajeciaDnia.forEach(z => {
            html += `
                <div class="grafik-karta grafik-${z.typ}">
                    <div class="grafik-karta-godzina">${z.godzina}</div>
                    <div class="grafik-karta-nazwa">${z.nazwa}</div>
                    <div class="grafik-karta-grupa">${z.grupa}</div>
                </div>
            `;
        });
        html += `</div>`;
    });
    html += '</div>';

    siatka.innerHTML = html;
}

generujGrafik();