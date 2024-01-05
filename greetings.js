//Create a script that dynamically updates the greeting based on the time of day.

function getTimeOfDay() {
    let currentTime = new Date();
    let Hour = currentTime.getHours();

    if (Hour >= 5 && Hour < 12) {
        return 'Morning'; 
    } else if (Hour >= 12 && Hour < 18) {
        return 'Afternoon';
    } else if (Hour >= 18 && Hour < 22) {
        return 'Evening';
    } else {
        return 'Night';
    }
}


let userName = 'Jay'; // hard coded
let timeOfDay = getTimeOfDay();
console.log(`Hey ${userName}, Good ${timeOfDay}!\nHave a great time ahead.`);
