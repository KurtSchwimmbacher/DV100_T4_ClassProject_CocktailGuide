$(document).ready(function(){


    const urlParams = new URLSearchParams(window.location.search);
    const cocktailID = urlParams.get('id');

    if(cocktailID){
        getCocktailDetails(cocktailID);
    }
    else{
        // error message
    }

});

function getCocktailDetails(cocktailID){
    const apiURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailID}`;

    $.ajax({
        url: apiURL,
        method: 'GET',
        dataType: 'json',
        success: function(data){
            console.log(data)

            const cocktail = data.drinks[0];
            $("#cocktailName").text(cocktail.strDrink)
            $("#cocktailCategory").text(cocktail.strCategory)
            $("#cocktailGlass").text(cocktail.strGlass)
            $("#cocktailDesc").text(cocktail.strInstructions)

            $("#cocktailIng1").text(cocktail.strIngredient1)
            $("#cocktailIng2").text(cocktail.strIngredient2)
            $("#cocktailIng3").text(cocktail.strIngredient3)
            $("#cocktailIng4").text(cocktail.strIngredient4)

            $("#cocktailImg").attr('src', cocktail.strDrinkThumb)
            
        },
        error: function(error){
            // handle as it comes
        }
    })
}