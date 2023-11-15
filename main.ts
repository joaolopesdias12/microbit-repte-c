radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    if (randint(1, 6) < receivedNumber) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("String")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(randint(1, 6))
})
