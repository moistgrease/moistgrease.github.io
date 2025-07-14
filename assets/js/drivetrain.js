function showCars() {
    const drivetrain = document.getElementById("drivetrain").value;
    
    switch (drivetrain) {
        case "rwd":
            alert("Ae86, RX7, 180SX");
            break;
        case "fwd":
            alert("Honda Civic");
            break;
        case "awd":
            alert("Imprezza, R34 GTR, Evo 8");
            break;
        default:
            alert("Please select a drivetrain!");
            break;
    }
}