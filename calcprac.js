document.querySelectorAll('[data-button="1"]')[0]
        .addEventListener("click", () => funcnum('1', 'number'))

document.querySelectorAll('[data-button="2"]')[0]
        .addEventListener("click", () => funcnum('2', 'number'))
        
document.querySelectorAll('[data-button="3"]')[0]
        .addEventListener("click", () => funcnum('3', 'number'))

document.querySelectorAll('[data-button="4"]')[0]
        .addEventListener("click", () => funcnum('4', 'number'))

document.querySelectorAll('[data-button="5"]')[0]
        .addEventListener("click", () => funcnum('5', 'number'))

document.querySelectorAll('[data-button="6"]')[0]
        .addEventListener("click", () => funcnum('6', 'number'))

document.querySelectorAll('[data-button="7"]')[0]
        .addEventListener("click", () => funcnum('7', 'number'))
        
document.querySelectorAll('[data-button="8"]')[0]
        .addEventListener("click", () => funcnum('8', 'number'))

document.querySelectorAll('[data-button="9"]')[0]
        .addEventListener("click", () => funcnum('9', 'number'))

document.querySelectorAll('[data-button="0"]')[0]
        .addEventListener("click", () => funcnum('0', 'number'))

document.querySelectorAll('[data-button="="]')[0]
        .addEventListener("click", () => getAnswer())

document.querySelectorAll('[data-button="*"]')[0]
        .addEventListener("click", () => funcnum(' x ', 'sign'))

document.querySelectorAll('[data-button="/"]')[0]
        .addEventListener("click", () => funcnum(' / ', 'sign'))

document.querySelectorAll('[data-button="+"]')[0]
        .addEventListener("click", () => funcnum(' + ', 'sign'))

document.querySelectorAll('[data-button="-"]')[0]
        .addEventListener("click", () => funcnum(' - ', 'sign'))

document.querySelectorAll('[data-button="AC"]')[0]
        .addEventListener("click", () => clearall())


var screenEl = document.getElementById('screen')

var lastClicked = undefined

function funcnum(a, type) {
    if (type == 'sign' && lastClicked !== 'number') return

    lastClicked = type
    screenEl.value = screenEl.value + a
}


function getAnswer() {
    if (lastClicked !== 'number') return
    console.log('this is long' +  screenEl.value[8])
    console.log(bodmas(screenEl.value))
    var showthis = bodmas(screenEl.value)
    screenEl.value = showthis
    return showthis
    
}//doubtle add signs
//the number still being on the sign 

function clearall() {
    lastClicked = undefined
    screenEl.value = ''
}


//calcuting the BODMAS sums individually
function _add(a, b) {
    return a + b
}

function _subtract(a, b) {
    return a - b
}

function _divide(a, b) {
    return a / b
}

function _product(a, b) {
    return a * b
}

function toArray(a) {
    var arrnum = a.split(' ')

    return arrnum
}

function calculate(a) {
    var arr = toArray(a)

    var num1 = parseInt(arr[0])
    var opX = arr[1]
    var num2 = parseInt(arr[2])
    
    if (opX == '+' ) {
        return _add(num1,num2)
    } 
    if (opX== '-' ) {
        return _subtract(num1,num2)
    }
    if (opX == '/' ) {
        return _divide(num1,num2)
    }
    if (opX == 'x' ) {
        return _product(num1,num2)
    }
} 

function bodmas(a) {
    var initial = a
    var arrnew = toArray(initial)
    console.log(arrnew)
    var operand
    if (arrnew.includes('x')) {
        operand = 'x'
    } else if (arrnew.includes('/')) {
        operand = '/'
    } else if (arrnew.includes('-')) {
        operand = '-'
    } else if (arrnew.includes('+')) {
        operand = '+'
    }

    var index = arrnew.indexOf(operand)
    var first = arrnew[index - 1]
    var second = arrnew[index + 1]
    var smallSum = first + ' ' + operand +' ' + second
    var answer = calculate(smallSum)
    console.log('small'+ answer)
    var reduced = initial.replace(smallSum, answer)
    
    let resultArr = toArray(reduced)
    console.log(resultArr)

    if (resultArr.length > 1) {
        return bodmas(reduced)
    } else {
        return reduced
    }
}

