$(() => {

      const $password = $('<h3>')

      const generatePassword = (length) => {
            let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
            let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '=', '?', '/', '<', '>']
            let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

            let password = []
            let i = 0;

            for (i = 0; i < length; i++)
                  for (j = 0; j < length; j++)
                        for (k = 0; k < length; k++) {

                              password.push(letters[Math.floor(Math.random() * letters.length)])
                              password.push(symbols[Math.floor(Math.random() * symbols.length)])
                              password.push(numbers[Math.floor(Math.random() * numbers.length)])
                              i++
                              j++
                              k++

                        }

            return password.join('')
      }

      $password.text(generatePassword(6)).appendTo('body')
})