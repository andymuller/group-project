var insultsUnhealthy = {
    hiFat: "When my car hit you in the crosswalk, you asked if I was okay.",
    hiCholesterol: "I passed by you three times.",
    hiCarbs: "Get out of the doorframes.",
    hiSodium: "The Dead Sea has turned into a human.",
}
var insultsHealthy = {
    lowFat: "Where did the wind take you today?",
    lowCholesterol: "Your stomach has turned into a whoopie cushion.",
    lowCarbs: "You get scared on Halloween, and it isn't because of the ghosts.",
    lowSodium: "You literally have no taste.",
}
var nutritionixAPI = "43a4724158ea08c8e5b9070c4f8ecd5f";

var insultAndyMuller = "Andy, nobody cares about what you eat in class.";
var pixabayAPI = "12579168-7c66fd8723598ff87605657fc";



function displayNutrition(food){
    
var imageQuery = "https://pixabay.com/api/?key=12579168-7c66fd8723598ff87605657fc&q="+food+"&image_type=photo&category=food";
var nutritionQuery = "https://api.nutritionix.com/v1_1/search/"+food+"?results=0%3A20&cal_min=0&cal_max=50000&fields=*&appId=c3659b4f&appKey=43a4724158ea08c8e5b9070c4f8ecd5f";
    $.ajax({
        url: nutritionQuery,
        method: "GET"
    }).then(function(response){
        console.log(response);
        console.log(response.hits[0].fields.item_name);

        var foodName = $("<p>").text(response.hits[0].fields.item_name);
        var calories = $("<p>").text("Calories: "+response.hits[0].fields.nf_calories);
        var totalFat = $("<p>").text("Total Fat: "+response.hits[0].fields.nf_total_fat+"g");
        var saturatedFat = $("<p>").text("Saturated Fat: "+response.hits[0].fields.nf_saturated_fat+"g");
        var cholesterol = $("<p>").text("Cholesterol: "+response.hits[0].fields.nf_cholesterol+"mg");
        var sodium = $("<p>").text("Sodium: "+response.hits[0].fields.nf_sodium+"mg");
        var carbohydrate = $("<p>").text("Total Carbohydrates: "+response.hits[0].fields.nf_total_carbohydrate+"g");
        var fiber = $("<p>").text("Dietary Fiber: "+response.hits[0].fields.nf_dietary_fiber+"g");
        var sugar = $("<p>").text("Sugars: "+response.hits[0].fields.nf_sugars+"g");
        var protein = $("<p>").text("Protein: "+response.hits[0].fields.nf_protein+"g");
        $(".data-div").empty();
        $(".data-div").append(foodName, calories, totalFat, saturatedFat, cholesterol, sodium,
            carbohydrate, fiber, sugar, protein);
            function insult(){
                var totalFat = response.hits[0].fields.nf_total_fat;
                var cholesterol = response.hits[0].fields.nf_cholesterol;
                var sodium = response.hits[0].fields.nf_sodium;
                var carbohydrate = response.hits[0].fields.nf_total_carbohydrate;
                if(totalFat || cholesterol || sodium || carbohydrate >= 13){
                    if(totalFat >= cholesterol || sodium || carbohydrate){
                        var insult = $("<p>");
                        insult.text(insultsUnhealthy.hiFat);
                        $(".insult-div").empty();
                        $(".insult-div").append(insult);
                    }else if(cholesterol >= totalFat || sodium || carbohydrate){
                        var insult = $("<p>");
                        insult.text(insultsUnhealthy.hiCholesterol);
                        $(".insult-div").empty();
                        $(".insult-div").append(insult);
                    }else if(sodium >= totalFat || cholesterol || carbohydrate){
                        var insult = $("<p>");
                        insult.text(insultsUnhealthy.hiSodium);
                        $(".insult-div").empty();
                        $(".insult-div").append(insult);
                    }else if(carbohydrate >= totalFat || sodium || cholesterol){
                        var insult = $("<p>");
                        insult.text(insultsUnhealthy.hiCarbs);
                        $(".insult-div").empty();
                        $(".insult-div").append(insult);
                    }
                }else if(totalFat && cholesterol && sodium && carbohydrate < 13){
                    if(totalFat <= cholesterol || sodium || carbohydrate){
                        var insult = $("<p>");
                        insult.text(insultsHealthy.lowFat);
                        $(".insult-div").empty();
                        $(".insult-div").append(insult); 
                    }else if(cholesterol <= totalFat || sodium || carbohydrate){
                        var insult = $("<p>");
                        insult.text(insultsHealthy.lowCholesterol);
                        $(".insult-div").empty();
                        $(".insult-div").append(insult);
                    }else if(sodium <= totalFat || cholesterol || carbohydrate){
                        var insult = $("<p>");
                        insult.text(insultsHealthy.lowSodium);
                        $(".insult-div").empty();
                        $(".insult-div").append(insult);
                    }else if(carbohydrate <= totalFat || sodium || cholesterol){
                        var insult = $("<p>");
                        insult.text(insultsHealthy.lowCarbs);
                        $(".insult-div").empty();
                        $(".insult-div").append(insult);
                    }
                }
            }insult(food);
        }        
    );
    $.ajax({
        url: imageQuery,
        method: "GET"
    }).then(function(result){
        console.log(result);
        var image = $("<img>").attr("src", result.hits[0].webformatURL);
        $(".image-div").empty();
        $(".image-div").append(image);
    });
};        
$("#search-button").one('click', function(){
    $(".inner-cover").animate({bottom: "+=300px", left: "-=60px"});
    $(".data-div").animate({ left: "+=840px"});
    $(".image-div").animate({ left: "+=500px"});
})
$("#search-button").click(function(event){
    event.preventDefault();
    var searchTerm = $("#food-search").val().trim();
    displayNutrition(searchTerm);
    
});
