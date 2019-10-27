function solve() {

    let profit = 0;
    let btn = document.querySelector("form > button");
    btn.addEventListener("click", storeBook);

    let btns = [...document.querySelectorAll(".book > button")];
    btns.forEach(b => b.addEventListener("click", buttonHandler))

    function storeBook(args) {
        args.preventDefault();

        let formResult = formHandler();

        if (formResult) {
            formResult.year > 2000 ? createBook(formResult, true) : createBook(formResult, false);
        }
        formCleaner();
    }

    function formHandler() {
        [title, year, price] = [...document.querySelectorAll("input")];
        year = Number(year.value);
        price = Number(price.value);

        if (title.value && year > 0 && price > 0) {

            return {
                title: title.value,
                year,
                price
            }
        }
    }

    function createBook(formResult, isNew) {

        let divElm = document.createElement("div");
        divElm.className = "book";

        let pElm = document.createElement("p");
        pElm.innerHTML = `${formResult.title} [${formResult.year}]`;
        divElm.appendChild(pElm);

        let priceBtn = document.createElement("button");
        let sections = [...document.querySelectorAll("#outputs > section")];

        if (isNew) {

            priceBtn.innerHTML = `Buy it only for ${formResult.price.toFixed(2)} BGN`;
            priceBtn.addEventListener("click", sellBook);
            priceBtn.price = priceBtn.price ? priceBtn.price : formResult.price;
            divElm.appendChild(priceBtn)

            let shiftBtn = document.createElement("button");
            shiftBtn.innerHTML = "Move to old section";
            shiftBtn.addEventListener('click', moveBook);
            shiftBtn.price = formResult.price;
            divElm.appendChild(shiftBtn);
            sections[1].getElementsByClassName("bookShelf")[0].appendChild(divElm);
        } else {
            priceBtn.innerHTML = `Buy it only for ${(formResult.price * 0.85).toFixed(2)} BGN`;
            priceBtn.addEventListener("click", sellBook);
            priceBtn.price = formResult.price * 0.85;
            divElm.appendChild(priceBtn);
            sections[0].getElementsByClassName("bookShelf")[0].appendChild(divElm);
        }
    }

    function formCleaner() {
        let inpElm = [...document.querySelectorAll("input")];
        inpElm.forEach(e => e.value = "");
    }

    function moveBook(args) {
        let btnDiv = args.currentTarget.parentElement;

        let sections = [...document.querySelectorAll("section")];

        btnDiv.removeChild(btnDiv.childNodes[2]);
        let priceWithDiscount = args.currentTarget.price * 0.85;
        btnDiv.childNodes[1].innerHTML = `Buy it only for ${priceWithDiscount.toFixed(2)} BGN`
        btnDiv.childNodes[1].price = priceWithDiscount;
        sections[0].children[1].appendChild(btnDiv);
    }

    function sellBook(args) {
        let btnDiv = args.currentTarget.parentElement;
        profit += args.currentTarget.price;
        [...document.querySelectorAll("body > h1")][1].innerHTML = `Total Store Profit: ${profit.toFixed(2)} BGN`;
        btnDiv.remove();
    }
}

