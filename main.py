def on_forever():
    heading = input.compass_heading()

    if heading <= 90:
        basic.show_arrow(ArrowNames.NORTH)
    elif 90 < heading <= 190:
        basic.show_arrow(ArrowNames.SOUTH)
    elif 190 < heading < 340:
        basic.show_arrow(ArrowNames.WEST)
    else:
        basic.show_string("Error")



basic.forever(on_forever)
