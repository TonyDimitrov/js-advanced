
function solve() {

    const calcByOperator = new Map();
    calcByOperator.set("+", (a, b) => a + b);
    calcByOperator.set("+", (a, b) => a - b);
    calcByOperator.set("+", (a, b) => a * b);
    calcByOperator.set("+", (a, b) => a / b);

    const clear = "Clear";
    const equal = "=";

    let calcInput = {
        clear: false,
        equal: false,
        expression: []
    }

    getEvent(calcInput, calcByOperator);


    function getEvent(calcInput, calcByOperator) {

        let btns = document.querySelectorAll("button");
        let output = document.querySelector("#expressionOutput");

        btns.forEach(b => b.addEventListener("click", getValue))

        function getValue(args) {
            let setInput = handleInput(args, calcInput);
            visualizeExpression(setInput, output, calcByOperator);
        }
    }

    function handleInput(args, calcInput) {

        let val = args.currentTarget.value;
        if (clear === val) {
            calcInput.clear = true;
        }
        else {
            if (Number(val)) {
                calcInput.expression.push(val);
            } else if (val === equal) {
                calcInput.equal = true;
            } else if (calcInput.expression.length > 0) {
                calcInput.expression.push(val);
            }
        }

        return calcInput;
    }

    function visualizeExpression(setInput, output, calcByOperator) {
        if (setInput.clear) {
            output.innerText = "";
        } else if (setInput.equal) {
            output.innerText = makeCalculation(setInput, calcByOperator);
        } else {
            output.innerText = setInput.expression.join(" ");
        }
    }

    function makeCalculation(setInput, calcByOperator) {
        let total = 0;
        for (let index = 1; index < setInput.expression.length; index += 2) {
            calcFunk = calcByOperator.get(index);
            total += calcFunk(index-1, index+1);
        }

        return total;
    }
}
// 1 + 6 + 6 / 9 *

