
let input = `Pesho -> Duck -> 400
Julius -> Shield -> 150
Gladius -> Heal -> 200
Gladius -> Support -> 250
Gladius -> Shield -> 250
Pesho vs Gladius
Gladius vs Julius
Gladius vs Gosho
Ave Cesar`;


function solve(input) {

    let gladiatorPool = {};

    input = input.split(/\r\n|\r|\n/g);

    const exit = 'Ave Cesar';

    for (const line of input) {
        let r = line.split('->').map(x => x.trim());

        [gladiator, skill, pointsAsstr] = line.split('->').map(x => x.trim());

        let points = parseInt(pointsAsstr);

        if (exit == gladiator) {
            printGladiators(gladiatorPool);
            break;
        }

        if (line.indexOf('vs') != -1) {
            fightGladiators(line, gladiatorPool);
            continue;
        }

        if (!gladiatorPool.hasOwnProperty(gladiator)) {
            gladiatorPool[gladiator] = {};     
        } if(!gladiatorPool[gladiator].hasOwnProperty(skill)){
            gladiatorPool[gladiator][skill] = 0;
        }if(gladiatorPool[gladiator][skill] < points){
           gladiatorPool[gladiator][skill] = points;
        }
    }

    function fightGladiators(line, gladiatorPool) {
        [first, second] = line.split('vs').map(x => x.trim());

        let gladFirst = gladiatorPool[first];
        let gladSecond = gladiatorPool[second];

        if (gladFirst && gladSecond) {
            let skillMatch = Object.keys(gladFirst).some(x => Object.keys(gladSecond).includes(x))
            if (skillMatch) {

                let gladFirstSkillPoints = Object.values(gladFirst).reduce((a, b) => a + b);
                let gladSecondSkillPoints = Object.values(gladSecond).reduce((a, b) => a + b);

                if (gladFirstSkillPoints < gladSecondSkillPoints) {
                    delete gladiatorPool[first];
                } else if (gladFirstSkillPoints > gladSecondSkillPoints) {
                    delete gladiatorPool[second];
                } else{
                    return;
                }
            }
        }
    }

    function printGladiators(gladiatorPool) {

        for (const key of Object.keys(gladiatorPool)
            .sort((a, b) => (Object.values(gladiatorPool[b]).reduce((a, b) => a + b)) - (Object.values(gladiatorPool[a]).reduce((a, b) => a + b)) || a.localeCompare(b))) {
            console.log(`${key}: ${Object.values(gladiatorPool[key]).reduce((a, b) => a + b)} skill`);
            for (const skill of Object.keys(gladiatorPool[key]).sort((a, b) => gladiatorPool[key][b] - gladiatorPool[key][a] || a.localeCompare(b))) {
                console.log(`- ${skill} <!> ${gladiatorPool[key][skill]}`);
            }
        }
    }
}

solve(input);
