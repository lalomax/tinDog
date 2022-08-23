import Dog from './Dog.js'
import dogsData from './data.js'
let currentDogIndex = 0
let currentDog = new Dog(dogsData[currentDogIndex])
document.getElementById("accept-button").addEventListener('click', yes)
document.getElementById("reject-button").addEventListener('click', no)

render()

function render() {
    document.getElementById('card').innerHTML = currentDog.getDogHtml()
}

function getNewDog() {
    currentDog.setRate()
    currentDogIndex < dogsData.length -1 ?
     currentDogIndex += 1 : currentDogIndex = 0
    currentDog = new Dog(dogsData[currentDogIndex])

    setTimeout(render, 2000)

}

function yes() {
    currentDog.setMatchStatus(true)
    getNewDog()
}

function no() {
    currentDog.setMatchStatus(false)
    getNewDog()
}