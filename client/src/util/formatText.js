
// Clase : Formatos de texto
class TextFormatter {

    // Metodo : Capitalizar formato (Xxxx Xxxx)
    static capitalizeFirstLetterOfEachWord(text) {

        const words = text.split(' ');

        // Capitalizar la primera letra de cada palabra
        const capitalizedWords = words.map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        });

        return capitalizedWords.join(' ');
    }

    // Metodo : Capitalizar el texto en el formato (Xxxx Xxxx) - Titulo Graficas
    static capitalizeFirstLetterOfEachWordSpace(text) {
        // Dividir el texto en palabras usando una expresión regular
        const words = text.split(/(?=[A-Z])/);

        // Capitalizar la primera letra de cada palabra
        const capitalizedWords = words.map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        });

        return capitalizedWords.join(' ');
    }

    static capitalizeWords(sentence) {
        // Dividir la oración en palabras
        let words = sentence.split(" ");
        let capitalizedWords = [];

        // Iterar sobre cada palabra
        for (let word of words) {
            // Convertir la primera letra a mayúscula y el resto a minúscula
            let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            capitalizedWords.push(capitalizedWord);
        }

        // Unir las palabras capitalizadas en una sola cadena
        let result = capitalizedWords.join(" ");

        return result;
    }

    static deleteSpaces(text) {
        // Dividir la frase en un array de palabras
        var palabras = text.split(" ");
        // Unir las palabras sin espacios
        var fraseSinEspacios = palabras.join("");
        return fraseSinEspacios;
    }

}
export { TextFormatter };

