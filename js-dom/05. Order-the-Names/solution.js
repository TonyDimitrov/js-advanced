function solve() {
    "use strict";

    let btn = document.getElementsByTagName("button")[0];
    btn.addEventListener("click", storeInput);

    function storeInput() {
        let orElement = document.getElementsByTagName("ol")[0];
        let liElements = orElement.getElementsByTagName("li");
        let input = document.getElementsByTagName("input")[0];

        if (input.value) {
            let firstCaptl = "";
            firstCaptl += input.value[0].toUpperCase(); 
            firstCaptl = input.value.charAt(0).toUpperCase() + input.value.slice(1).toLowerCase();
            let index = firstCaptl.charCodeAt(0) - 65;

            storeVisualizer(index, liElements, firstCaptl, input)
        }
    }

    function storeVisualizer(index, liElements, capitalisedName, input) {

        if (liElements[index].textContent.length > 0) {
            liElements[index].textContent += ", " + capitalisedName;
        } else {
            liElements[index].textContent += capitalisedName;
        }
        input.value = null;
    }
}