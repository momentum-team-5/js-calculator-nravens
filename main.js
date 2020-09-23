//let total = 0
console.log("javascript loaded")
let text = ""
let display = document.getElementById('display')
console.log(display.id)

for (let element of document.getElementsByClassName('btn')) {
    element.addEventListener('click', function(event) {
        console.log(element.innerText)
        if (element.id === 'clear') {
            text = ""
            display.innerText = text
            console.log("clear")
        }
        else if (element.id === 'eval') {
            console.log("eval")
            text = eval(text)
            display.innerText = text
        }
        else {
            console.log("click")
            text += element.innerText
            display.innerText = text 
        }
        
        
    })
   

}