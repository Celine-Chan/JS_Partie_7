// Traduire cette fonction fléchée en fonction nommée.

// (name) => {
//   `Bonjour, ${name} ! Comment vas-tu ?`;
// }

// fonction anonyme, pas besoin de nommée la fonction.
// une fonction anonyme doit avoir une valeur ex: document.onclick
document.onclick = function(name){
    return `Bonjour, ${name} ! Comment vas-tu ?`;
}