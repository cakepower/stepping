input.onButtonPressed(Button.A, function () {
    motor.moveClockwise(500, stepUnit.Steps)
})
input.onButtonPressed(Button.B, function () {
    motor.moveAntiClockwise(500, stepUnit.Steps)
})
let motor: stepperMotor.Motor = null
motor = stepperMotor.createMotor(
DigitalPin.P4,
DigitalPin.P5,
DigitalPin.P6,
DigitalPin.P7
)
motor.setDelay(10)
basic.forever(function () {
	
})
