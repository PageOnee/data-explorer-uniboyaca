
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

}
export { TextFormatter };

