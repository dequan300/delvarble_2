var eventType = "casual";
var tempFah = "more than 70 degrees Fahrenheit";
var cloth1 = "no jacket";
var cloth2 = "something comfy";
var greeting = "whats the temperature like today ?";
var weather = prompt(greeting);
var results = (`since is will be ${tempFah} then ${cloth1} just be ${eventType} and wear ${cloth2}`);
var results2 = "Are you sure ? It feels hotter than that!"
if (weather >= 71) {
    alert(results);
} else {
    alert(results2)
}