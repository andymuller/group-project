var insultsUnhealthy = {
    hiFat: "When my car hit you in the crosswalk, you asked if I was okay.",
    hiCholesterol: "I passed by you three times.",
    hiSugar: "Get out of the doorframes.",
    hiSodium: "The Dead Sea has turned into a human.",
}
var insultsHealthy = {
    lowFat: "Where did the wind take you today?",
    lowCholesterol: "Your stomach has turned into a whoopie cushion.",
    lowSugar: "You get scared on Halloween, and it isn't because of the ghosts.",
    lowSodium: "You literally have no taste.",
}
var nutritionixAPI = "43a4724158ea08c8e5b9070c4f8ecd5f";

var insultAndyMuller = "Andy, nobody cares about what you eat in class.";
var pixabayAPI = "12579168-7c66fd8723598ff87605657fc";



function displayNutrition(food){
    
var imageQuery = "https://pixabay.com/api/?key=" + pixabayAPI +"&q="+ food + "&image_type=photo";
var nutritionQuery = "https://api.nutritionix.com/v1_1/search/"+food+"?results=0%3A20&cal_min=0&cal_max=50000&fields=*&appId=c3659b4f&appKey=43a4724158ea08c8e5b9070c4f8ecd5f";
    $.ajax({
        url: nutritionQuery,
        method: "GET"
    }).then(function(response){
        console.log(response);
        console.log(response.hits[0].fields.item_name);

        var foodName = response.hits[0].fields.item_name;
        var calories = response.hits[0].fields.nf_calories;
        var totalFat = response.hits[0].fields.nf_total_fat;
        var saturatedFat = response.hits[0].fields.nf_saturated_fat;
        var cholesterol = response.hits[0].fields.nf_cholesterol;
        var sodium = response.hits[0].fields.nf_sodium;
        var carbohydrate = response.hits[0].fields.nf_total_carbohydrate;
        var fiber = response.hits[0].fields.nf_dietary_fiber;
        var sugar = response.hits[0].fields.nf_sugars;

    })
    $.ajax({
        url: imageQuery,
        method: "GET"
    }).then(function(result){
        console.log(result);
    })
}
$("#search-button").one('click', function(){
    $(".inner-cover").animate({bottom: "+=380px", left: "-=80px"});
})
$("#search-button").click(function(event){
    $(".data-div").animate({ left: "+=840px"});
    $(".image-div").animate({ left: "+=500px"});
    event.preventDefault();
    var searchTerm = $("#food-search").val().trim();
    displayNutrition(searchTerm);
})
