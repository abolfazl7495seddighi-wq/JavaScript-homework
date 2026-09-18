const table = document.querySelector("table");

const headers = Array.from(table.querySelectorAll("thead th"));

function normalizeText(text) {
    return text
        .trim()
        .replace(/[۰-۹]/g, function (char) {
            return "۰۱۲۳۴۵۶۷۸۹".indexOf(char);
        });
}

function findColumnIndex(title) {
    return headers.findIndex(function (header) {
        return header.textContent.trim().includes(title);
    });
}


const rankIndex = findColumnIndex("#");
const nameIndex = findColumnIndex("تیم");
const gamesIndex = findColumnIndex("بازی");
const winsIndex = findColumnIndex("برد");
const drawIndex = findColumnIndex("مساوی");
const lostIndex = findColumnIndex("باخت");
const goalsIndex = findColumnIndex("گل");
const diffIndex = findColumnIndex("تفاضل");
const scoreIndex = findColumnIndex("امتیاز");


const rows = table.querySelectorAll("tbody tr");

const teams = [];


rows.forEach(function (row) {

    const cells = row.children;

    if (cells.length < headers.length) {
        return;
    }


    // -----------------------------
    // بازی‌های اخیر
    // -----------------------------

    const latestGames = [];

    const latestGamesCell = cells[0];

    const gameElements = latestGamesCell.querySelectorAll("*");


    gameElements.forEach(function (element) {

        const text = element.textContent.trim();

        if (
            text === "W" ||
            text === "D" ||
            text === "L"
        ) {
            latestGames.push(text);
        }

    });


    // -----------------------------
    // ساخت Object تیم
    // -----------------------------

    const team = {

        rank: Number(
            normalizeText(cells[rankIndex].textContent)
        ),

        name: cells[nameIndex]
            .textContent
            .trim(),

        games: Number(
            normalizeText(cells[gamesIndex].textContent)
        ),

        wins: Number(
            normalizeText(cells[winsIndex].textContent)
        ),

        draw: Number(
            normalizeText(cells[drawIndex].textContent)
        ),

        lost: Number(
            normalizeText(cells[lostIndex].textContent)
        ),

        goals: cells[goalsIndex]
            .textContent
            .trim(),

        diff: Number(
            normalizeText(cells[diffIndex].textContent)
        ),

        score: Number(
            normalizeText(cells[scoreIndex].textContent)
        ),

        latestGames: latestGames

    };


    teams.push(team);

});


console.log(teams);