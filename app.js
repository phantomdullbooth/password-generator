$(() => {
    console.log('i like music. check out \'Chilly Wonka\' by Melodysheep')

    // Fisher-Yates shuffle
    const randomizeCharacters = (array) => {

        let currentIndex = array.length
        let temporaryValue;
        let randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
    }

    const generatePassword = (chars) => {
        let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '=', '?', '/', '<', '>']
        let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

        let password = []

        for (i = 0; i < chars; i++)
            for (j = 0; j < chars; j++)
                for (k = 0; k < chars; k++) {
                    password.push(letters[Math.floor(Math.random() * letters.length)])
                    password.push(symbols[Math.floor(Math.random() * symbols.length)])
                    password.push(numbers[Math.floor(Math.random() * numbers.length)])
                    i++
                    j++
                    k++
                }
        randomizeCharacters(password)
        return password.join('')
    }

    const $password = $('<h3>').text(generatePassword(5)).appendTo('#password')

    const $regenerator = $('#regenerate').click(() => {
        location.reload(true);
    })



})