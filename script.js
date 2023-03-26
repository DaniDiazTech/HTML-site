// Fonction: créer un nouveau paragraphe et l'ajouter en bas du HTML

function createParagraph() {
    let para = document.createElement('p');
    para.textContent = 'Vous avez cliqué sur le bouton!';
    document.body.appendChild(para);
}
/*
 1. Regrouper les coordonnées de tous les boutons de la page et les organiser en tableau
 2. Faire une boucle dans ce tableau et ajouter un "click event listener" à chaque bouton

 Quand le bouton est cliqué, la fonction "createParagraph()" sera exécutée
*/

const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', createParagraph);
}

/*
   for (const button of buttons) {
     button.addEventListener('click', createParagraph);
   }*/