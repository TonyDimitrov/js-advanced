const input = [[{ kingdom: "Maiden Way", general: "Merek", army: 5000 },
{ kingdom: "Stonegate", general: "Ulric", army: 4900 },
{ kingdom: "Stonegate", general: "Doran", army: 70000 },
{ kingdom: "YorkenShire", general: "Quinn", army: 0 },
{ kingdom: "YorkenShire", general: "Quinn", army: 2000 },
{ kingdom: "Maiden Way", general: "Berinon", army: 100000 }],
[["YorkenShire", "Quinn", "Stonegate", "Ulric"],
["Stonegate", "Ulric", "Stonegate", "Doran"],
["Stonegate", "Doran", "Maiden Way", "Merek"],
["Stonegate", "Ulric", "Maiden Way", "Merek"],
["Maiden Way", "Berinon", "Stonegate", "Ulric"]]];

// let kingdomStore = { kindom: { king: army, king: army } };

// let batleStore = [{ kingdom: general, kingdom: general }];

// let resultStore = { generel: { wins: 0, losses: 2 } }

function solve(input) {

    var kingdomStore = {};
    let batleStore;
    let resultStore;

    ArmyParser(null);

    function ArmyParser(armyInfo) {
        kingdomStore = {k:'h'};
    }

    function BatleParser(batleInfo) {

    }

    console.log(kingdomStore);
}

solve();
