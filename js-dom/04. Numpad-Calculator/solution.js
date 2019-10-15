function solve() {
    const notNumericValues = ["Clear", "=", "+", "-", "*", "/"];

    const clear = "Clear";

    let calcInput = {
        clear: false,
        oper : [],
        expression: "",
        input: ""
    }

    getEvent(calcInput, notNumericValues);


    function getEvent(calcInput, notNumericValues) {

        let btns = document.querySelectorAll("button");

        btns.forEach(b => b.addEventListener("click", getValue))

        function getValue(args, calcInput, notNumericValues) {
            handleInput(args, calcInput, notNumericValues)
        }
    }

    function handleInput(args, calcInput, notNumericValues) {

        let val = args.currentTarget.value;

        if (Number(val)) {
            var valNumber = Number(val);
        } else if(notNumericValues.includes(val)){
            if (clear === val) {
            calcInput.clear = true;
            }
            
calcInput.
        }
    }

    function clearInput(){

    }

    function visualizeExpression() {

    }

    function makeCalculation() {

    }
}