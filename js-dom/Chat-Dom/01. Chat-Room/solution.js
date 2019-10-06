function solve() {
   document.getElementById("send").addEventListener("click", appentToChat);

   function appentToChat(){
      let inputValue = document.getElementById("chat_input").value;
      if (inputValue == null || inputValue === '') {
         return;
      }
      let node = document.createElement("DIV");
      let textnode = document.createTextNode(inputValue);
      node.appendChild(textnode);
      node.className = "message my-message";
      document.getElementById("chat_messages").appendChild(node);
      document.getElementById("chat_input").value = null;
   }
}


