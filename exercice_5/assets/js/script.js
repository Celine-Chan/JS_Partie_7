// Traduire la fonction en fonction fléchée.

// function getStringLength(string){
//   let stringLength;
//   if(string.length === 1){
//     stringLength = 'La chaîne contient qu'un seul caractère';
//   } else {
//     stringLength = `La chaîne contient ${string.length} caractères`;
//   }
//   return stringLength;
// }


let getStringLength = string => {  
  // pas besoin de parenthése à "string" si il n'y a q'un seul paramètre 

  let stringLength;
  if(string.length === 1){
    stringLength = 'La chaîne contient qu\'un seul caractère';
  } else {
    stringLength = `La chaîne contient ${string.length} caractères`;
  }
  return stringLength;

}