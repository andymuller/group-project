var insultsUnhealthy = {
    hiFat: "When my car hit you in the crosswalk, you asked if I was okay.",
    hiCholesterol: "I passed you three times.",
    hiSugar: "Get out of the doorframes.",
    hiSodium: "The Dead Sea has turned into a human.",
}
var insultsHealthy = {
    lowFat: "Where did the wind take you today?",
    lowCholesterol: "Your stomach has turned into a whoopie cushion.",
    lowSugar: "You get scared on Halloween, and it isn't because of the ghosts.",
    lowSodium: "You literally have no taste.",
}
var searchTerm = $(this).attr("data-search");
var insultAndyMuller = "Andy, nobody cares about what you eat in class.";
var pixabayAPI = "12579168-7c66fd8723598ff87605657fc";
var nutritionixAPI = "43a4724158ea08c8e5b9070c4f8ecd5f";
var imageQuery = "https://pixabay.com/api/?key=" + pixabayAPI + searchTerm + "&image_type=photo";
var nutritionQuery = "https://api.nutritionix.com/v1_1/search/" + searchTerm + "?results=0%3A01&cal_min=0&cal_max=50000&fields=*&appId=c3659b4f&appKey=" + nutritionixAPI;

function displayNutrition(){
    $.ajax({
        url: nutritionQuery,
        method: "GET"
    }).then(function(response){
        console.log(response);
    })
}