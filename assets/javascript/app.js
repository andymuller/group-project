var insultsUnhealthy = {
    hiFat: "When my car hit you in the crosswalk, you asked if I was okay.",
    hiCholesterol: "I passed by you three times.",
    hiCarbs: "Get out of the doorframes.",
    hiSodium: "The Dead Sea has turned into a human.",
}
var insultsHealthy = {
    lowFat: "Where did the wind take you today?",
    lowCholesterol: "Nobody appreciates your flatulence.",
    lowCarbs: "Halloween doesn't scare you, but Trick-or-Treating is a different story.",
    lowSodium: "I don't know how to insult someone so tasteless.",
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
        foodName.addClass("scale-in-ver-center");
        calories.addClass("scale-in-ver-center");
        totalFat.addClass("scale-in-ver-center");
        saturatedFat.addClass("scale-in-ver-center");
        cholesterol.addClass("scale-in-ver-center");
        sodium.addClass("scale-in-ver-center");
        carbohydrate.addClass("scale-in-ver-center");
        fiber.addClass("scale-in-ver-center");
        sugar.addClass("scale-in-ver-center");
        protein.addClass("scale-in-ver-center");
        $(".text-focus-in").empty();
        $(".cover-heading").empty();
        $(".data-div").empty();
        $(".data-div").append(foodName, calories, totalFat, saturatedFat, cholesterol, sodium,
            carbohydrate, fiber, sugar, protein);
                var insultFat = response.hits[0].fields.nf_total_fat;
                var insultCholesterol = response.hits[0].fields.nf_cholesterol;
                var insultSodium = response.hits[0].fields.nf_sodium / 20;
                var insultCarbohydrate = response.hits[0].fields.nf_total_carbohydrate;
                var insult = $("<p>");
                console.log(insultFat);
                console.log(insultCholesterol);
                console.log(insultSodium);
                console.log(insultCarbohydrate);
                if(food === "dragonfruit"){
                    insult.text(insultAndyMuller);
                    $(".insult-div").empty();
                    $(".insult-div").append(insult);
                }else if(insultFat >= 12 || insultCholesterol >= 12 || insultSodium >= 12 || insultCarbohydrate >= 12){
                    $(".insult-div").empty();
                    if(insultFat > insultCholesterol && insultFat > insultSodium && insultFat > insultCarbohydrate){
                        insult.text(insultsUnhealthy.hiFat);
                        $(".insult-div").empty();
                        $(".insult-div").append(insult);
                    }else if(insultCholesterol > insultFat && insultCholesterol > insultSodium && insultCholesterol > insultCarbohydrate){
                        insult.text(insultsUnhealthy.hiCholesterol);
                        $(".insult-div").empty();
                        $(".insult-div").append(insult);
                    }else if(insultSodium > insultFat && insultSodium > insultCholesterol && insultSodium > insultCarbohydrate){
                        insult.text(insultsUnhealthy.hiSodium);
                        $(".insult-div").empty();
                        $(".insult-div").append(insult);
                    }else if(insultCarbohydrate > insultFat && insultCarbohydrate > insultSodium && insultCarbohydrate > insultCholesterol){
                        insult.text(insultsUnhealthy.hiCarbs);
                        $(".insult-div").empty();
                        $(".insult-div").append(insult);
                    }
                }else if(insultFat < 12 && insultCholesterol < 12 && insultSodium < 12 && insultCarbohydrate < 12){
                    $(".insult-div").empty();
                    if(insultFat <= insultCholesterol && insultFat <= insultSodium && insultFat <= insultCarbohydrate){
                        insult.text(insultsHealthy.lowFat);
                        $(".insult-div").empty();
                        $(".insult-div").append(insult); 
                    }else if(insultCholesterol < insultFat && insultCholesterol <= insultSodium && insultCholesterol <= insultCarbohydrate){
                        insult.text(insultsHealthy.lowCholesterol);
                        $(".insult-div").empty();
                        $(".insult-div").append(insult);
                    }else if(insultSodium < insultFat && insultSodium < insultCholesterol && insultSodium <= insultCarbohydrate){
                        insult.text(insultsHealthy.lowSodium);
                        $(".insult-div").empty();
                        $(".insult-div").append(insult);
                    }else if(insultCarbohydrate < insultFat && insultCarbohydrate < insultSodium && insultCarbohydrate < insultCholesterol){
                        insult.text(insultsHealthy.lowCarbs);
                        $(".insult-div").empty();
                        $(".insult-div").append(insult);
                       
                    }
                }
                
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
