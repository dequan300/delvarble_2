var cloth1 = "no need for a jacket";
var cloth2 = "something comfy";
var weather = "more than 70 degrees Fahrenheit"
var casual = "should i wear something casual?";
var temp = "will it be more than 70 degrees Fahrenheit ?";
var eventype = prompt(casual);
var tempFahr = prompt(temp);
var results = (`since it will be ${weather} then ${cloth1} ill just wear ${cloth2}`);
var wrong1 = ("you sure ? its pretty hot out")



if (eventype === "yes") {
    console.log("ok great")


} else {
    console.log("Its only a picnic.")



}
if (tempFahr === "yes") {
    console.log(results)
} else {
    console.log(wrong1)
}