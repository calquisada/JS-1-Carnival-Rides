//DO NOT RENAME THESE VARIABLES, THEY ARE USED TO RENDER THINGS
let greenWireConnected = true
let yellowWireConnected = true
let redWireConnected = true
let waterIsEmpty = false

//Everything below is fair game for you to power on the rides

//Ride 1 works when:
    // green wire is connected
    let ride1PowerOn = false
    if (greenWireConnected){
        ride1PowerOn = true
    }


//Ride 2 works when 
    //green and yellow wires are connected
let ride2PowerOn = false
if (greenWireConnected & yellowWireConnected) {
    ride2PowerOn = true;
}

//Ride 3 works when:
    // green and red wires are connected
    // water is on 
    // yellow wire is not connected
let ride3PowerOn = false
if (greenWireConnected & redWireConnected & !waterIsEmpty){
    ride3PowerOn = true
}

//Ride 4 has power when:
    //ride wire is connected
let ride4PowerOn = false
if (redWireConnected) {
    ride4PowerOn = true;
}
//Ride 4 is a slot machine
    //if a 1 is rolled it should return "star"
    //if a 2 is rolled it should return "car"
    //if a 3 is rolled it should return "pot of gold"
    //if a 4 is rolled it should return "clover"
    //if a 5 is rolled it should return "bowling ball"
    //if a 6 is rolled it should return "tiger"
    //if a 7 is rolled it should return "seven"
function ride4SlotMachine(rolledNumber){
    return "nothing"

    switch (rolledNumber){
        case 1:
            return "star"
        case 2:
            return "car"
        case 3:
            return "pot of gold"
        case 4:
            return "clover"
        case 5:
            return "bowling ball"
        case 6: 
            return "tiger"
        case 7:
            return "seven"
         default:
            break;                     
    }
}