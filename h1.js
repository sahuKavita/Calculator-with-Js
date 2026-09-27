let input = document.querySelector('#myInput')
let buttons = document.querySelectorAll('button')

let string = ''
let arr = Array.from(buttons)

let resultShown = false;   // result abhi screen par hai ya nahi

arr.forEach(button => {

    button.addEventListener('click', (e) => {

        if (e.target.innerHTML == '=') {

            try {
                string = eval(string)
                input.value = string
                resultShown = true;   // result aa gaya
            }
            catch (error) {
                input.value = "Error"
                string = ''
                resultShown = false
            }
        }

        else if (e.target.innerHTML == 'AC') {

            string = ''
            input.value = string
            resultShown = false
        }

        else if (e.target.innerHTML == 'DEL') {

            string = string.substring(0, string.length - 1)
            input.value = string
        }

        else {

            let value = e.target.innerHTML

            // Result ke baad NUMBER press hua
            if (
                resultShown &&
                !['+', '-', '*', '/'].includes(value)
            ) {
                string = value
                input.value = string
                resultShown = false
            }

            // Result ke baad OPERATOR press hua
            else {
                string = string + value
                input.value = string
                resultShown = false
            }
        }
    })
})