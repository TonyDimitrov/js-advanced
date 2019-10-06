const kingdomInput = [{ kingdom: "Stonegate", general: "Vase", army: 0 },
{ kingdom: "Stonegate", general: "Ulric", army: 8000 },
{ kingdom: "Doroto", general: "Berinon", army: 5001 },
{ kingdom: "Berdo", general: "Berinon", army: 7000 }];

const batleInput = [["Stonegate", "Vase", "Doroto", "Berinon"],
["Stonegate", "Ulric", "Doroto", "Berinon"],
["Berdo", "Berinon", "Doroto", "Berinon"],
["Berdo", "Berinon", "Stonegate", "Ulric"]];

function solve(kingdomInput, batleInput) {

    let kingdomStore = {};

    armyParser(kingdomInput, kingdomStore);

    for (const batleline of batleInput) {
        batle(batleline, kingdomStore);
    }

    print(kingdomStore);

    function armyParser(armyInfo, kingdomStore) {

        for (const armyLine of armyInfo) {

            if (!kingdomStore.hasOwnProperty(armyLine.kingdom)) {
                kingdomStore[armyLine.kingdom] = {};
            }

            if (!kingdomStore[armyLine.kingdom].hasOwnProperty(armyLine.general)) {
                kingdomStore[armyLine.kingdom][armyLine.general] = {};
                kingdomStore[armyLine.kingdom][armyLine.general].army = armyLine.army;
                kingdomStore[armyLine.kingdom][armyLine.general].wins = 0;
                kingdomStore[armyLine.kingdom][armyLine.general].losses = 0;
            }
            else {
                kingdomStore[armyLine.kingdom][armyLine.general].army += armyLine.army;
            }
        }
    }

    function batle(batleline, kingdomStore) {

        [attackerKingdom, attackerGeneral, deffKingdom, deffGeneral] = batleline;

        if (attackerGeneral === null || deffGeneral === null ||
            attackerKingdom === deffKingdom) {
            return;
        }

        let attArmy = kingdomStore[attackerKingdom][attackerGeneral].army;
        let deffArmy = kingdomStore[deffKingdom][deffGeneral].army;

        if (attArmy > deffArmy) {
            attArmy += Math.round(attArmy * 0.10);
            deffArmy -= Math.round(deffArmy * 0.10);
            kingdomStore[attackerKingdom][attackerGeneral].army = attArmy;
            kingdomStore[deffKingdom][deffGeneral].army = deffArmy < 0 ? 0 : deffArmy;

            kingdomStore[attackerKingdom][attackerGeneral].wins += 1;
            kingdomStore[deffKingdom][deffGeneral].losses += 1;

        } else if (attArmy < deffArmy) {

            attArmy -= Math.round(attArmy * 0.10);
            deffArmy += Math.round(deffArmy * 0.10);
            kingdomStore[attackerKingdom][attackerGeneral].army = attArmy < 0 ? 0 : attArmy;
            kingdomStore[deffKingdom][deffGeneral].army = deffArmy;

            kingdomStore[attackerKingdom][attackerGeneral].losses += 1;
            kingdomStore[deffKingdom][deffGeneral].wins += 1;
        }
    }

    function print(kingdomStore) {

        let kingdomWinsLoses = {}
        for (const key of Object.keys(kingdomStore)) {
            kingdomWinsLoses[key] = {};
            let generalInfo = kingdomStore[key];

            let wins = Object.values(generalInfo).reduce((a, { wins }) => a + wins, 0);
            kingdomWinsLoses[key].wins = wins;

            let losses = Object.values(generalInfo).reduce((a, { losses }) => a + losses, 0);
            kingdomWinsLoses[key].losses = losses;
        }
        var firstKingdom = Object.keys(kingdomWinsLoses).sort((a, b) => kingdomWinsLoses[b].wins - kingdomWinsLoses[a].wins
            || kingdomWinsLoses[a].losses - kingdomWinsLoses[b].losses
            || a.localeCompare(b))[0];

        let generals = kingdomStore[firstKingdom];

        let result = `Winner: ${firstKingdom}\n`;
        for (const general of Object.keys(generals).sort((a, b) => generals[b].army - generals[a].army)) {
            result += `/\\general: ${general}\n` +
                `---army: ${generals[general].army}\n` +
                `---wins: ${generals[general].wins}\n` +
                `---losses: ${generals[general].losses}\n`;
        }
        console.log(result.trim());
    }
}

solve(kingdomInput, batleInput);


