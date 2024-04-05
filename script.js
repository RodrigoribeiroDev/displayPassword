
function createUl() {
   var inputValue = document.getElementById('meuInput').value; // Obtendo o valor do input
   var newUl = document.createElement('ul');      // Criando o elemento ul
   var newLi = document.createElement('li');     // Criando o elemento li
   newLi.innerText = inputValue;                // Enviando o valor digitado para o li
   newUl.appendChild(newLi);                   // Inserindo o li no ul
   result.appendChild(newUl);                 // Inserindo o ul no parágrafo com o id "result"

   var buttonMark = document.createElement('button');
   var nameButtonMark = document.createTextNode('Marcar');
   var newButton = document.createElement('button');             // Criando o botão para cada li
   var nameButton = document.createTextNode('Remover');         // nomeando botão

   newButton.appendChild(nameButton);                           // Adicionando texto a variavel
   newLi.appendChild(newButton);                               // Inserindo o botão no li
   buttonMark.appendChild(nameButtonMark);                    //Criando botão de marcar
   newLi.appendChild(buttonMark)

   buttonMark.addEventListener('click', function(){
        newLi.style.textDecoration = 'line-through';
   })

   newButton.addEventListener('click', function() { 
       this.parentNode.remove();                            // Removendo o pai do botão
   });

   //adicionando css ao dom
   newLi.style.color = "white"
   newLi.style.fontFamily = "Century Gothic, CenturyGothic, AppleGothic, sans-serif";
   newButton.style.marginLeft = '5px';
   buttonMark.style.marginLeft = '5px';
}


function removeUl() {
   var ulList = document.querySelectorAll('ul'); // Selecionar todos os elementos 'ul'
   // Iterar sobre cada elemento 'ul' usando forEach
   ulList.forEach(function(ul) {
       ul.remove(); // Remover o 'ul' atual
   });
}


   



