
function solve() {

   let btn = document.querySelector("button");
   btn.addEventListener("click", collectElements);

   function collectElements() {

      let inp = document.querySelector("input");
      let inpValue = inp.value;
      let trElements = document.querySelectorAll('tbody > tr');

      resetElements(inp, trElements);
      let trMatches = elementSearch(inpValue, trElements);
      setClass(trMatches);
   }

   function resetElements(inp, trElements) {
      inp.value = null;
      Array.from(trElements).forEach(tr => tr.classList = null);
   }

   function setClass(trMatches) {
      Array.from(trMatches).forEach(tr => tr.className = 'select');
   }

   function elementSearch(inpValue, trElements) {
      let trsMatch = [];
      for (const tr of trElements) {
         let tdValue = tr.innerHTML.toLowerCase();
         if (tdValue.includes(inpValue.toLowerCase())) {
            trsMatch.push(tr);
         }
      }
      return trsMatch;
   }
}