
function solve() {
"use strick";
    const calcByOperator = new Map();
    calcByOperator.set("+", (a, b) => a + b);
    calcByOperator.set("-", (a, b) => a - b);
    calcByOperator.set("*", (a, b) => a * b);
    calcByOperator.set("/", (a, b) => a / b);

    const clear = "Clear";
    const equal = "=";

    let calcInput = {
        clear: false,
        equal: false,
        appDigits: "",
        expression: []
    }

    getEvent(calcInput, calcByOperator);


    function getEvent(calcInput, calcByOperator) {

        let btns = document.querySelectorAll("button");
        let output = document.querySelector("#expressionOutput");
        let resultOutput = document.querySelector("#resultOutput");

        Array.from(btns).forEach(b => b.addEventListener("click", getValue))

        function getValue(args) {
            let setInput = handleInput(args, calcInput);
            visualizeExpression(setInput, output, resultOutput, calcByOperator);
        }

        function handleInput(args, calcInput) {

            let val = args.currentTarget.value;
    
            if (clear === val) {
                calcInput.clear = true;
            }
            else {
                if (Number.isInteger(Number(val)) || val === '.') {
                    var len = calcInput.expression.length;
                    if (len === 0) {
                        calcInput.expression.push(val);
                    } else if (Number.isInteger(Number(calcInput.expression[len - 1])) || calcInput.expression[len - 1].includes('.')) {
                        calcInput.expression[len - 1] += val;
                    } else {
                        calcInput.expression.push(val);
                    }
                } else if (val === equal) {
                    calcInput.equal = true;
                } else if (calcInput.expression.length > 0) {
                    calcInput.expression.push(val);
                }
            }
    
            return calcInput;
        }
    
        function visualizeExpression(setInput, output, resultOutput, calcByOperator) {
            if (setInput.clear) {
                output.innerHTML = "";
                resultOutput.innerHTML = "";
                setInput.clear = false;
                setInput.expression.length = 0;
            } else if (setInput.equal) {
                resultOutput.innerHTML  = makeCalculation(setInput, calcByOperator);
                setInput.equal = false;
            } else {
                output.innerHTML = setInput.expression.join(" ");
            }
        }
    
        function makeCalculation(setInput, calcByOperator) {
            let total = "";
            let expr = setInput.expression;
            // if (expr[expr.length-1]. ) {
                
            // }
            for (let index = 1; index < expr.length; index += 2) {
                total += calcByOperator.get(expr[index])(+expr[index - 1], +expr[index + 1]);
            }
    
            return total;
        }
    }
}


