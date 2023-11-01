let u = 15
basic.showIcon(IconNames.Heart)
u += 3
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
u += -1
basic.showNumber(maqueen.Ultrasonic(PingUnit.Centimeters))
