basic.forever(function on_forever() {
    let heading = input.compassHeading()
    if (heading <= 90) {
        basic.showArrow(ArrowNames.North)
    } else if (90 < heading && heading <= 190) {
        basic.showArrow(ArrowNames.South)
    } else if (190 < heading && heading < 340) {
        basic.showArrow(ArrowNames.West)
    } else {
        basic.showString("Error")
    }
    
})
