function solve() {

    document.getElementsByTagName("BUTTON")[0].addEventListener("click", calcFormat);

    let metrixOptions = document.getElementById("selectMenuTo");

    appendSelectOptions();

    function appendSelectOptions() {
        var optionBinary = document.createElement("option");
        optionBinary.textContent = "Binary";
        optionBinary.value = "binary";

        var optionHex = document.createElement("option");
        optionHex.textContent = "Hexadecimal";
        optionHex.value = "hexadecimal";

        metrixOptions.appendChild(optionBinary);
        metrixOptions.appendChild(optionHex);
    }

    function calcFormat() {
        debugger;
        let metrixInput = metrixOptions.options[metrixOptions.selectedIndex].value;

        if (metrixInput == null || metrixInput == "") {
            return;
        }

        let decimalNumber = document.getElementById("input").value;
        let convertedToFormat;
        if (metrixInput === "binary") {
            convertedToFormat = Number(decimalNumber)
                .toString(2);
        }
        else if (metrixInput === "hexadecimal") {
            convertedToFormat = Number(decimalNumber)
                .toString(16)
                .toUpperCase();
        }

        if (convertedToFormat != null) {
            document.getElementById("result").value = convertedToFormat;
        }
    }
}