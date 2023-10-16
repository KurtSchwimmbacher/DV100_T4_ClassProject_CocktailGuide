$(document).ready(function (){

   

    getCocktailDataByFirstLetter("a");


});


function getCocktailDataByFirstLetter(letter){
    const apiURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;

    $.ajax({
        url: apiURL,
        method: 'GET',
        dataType: 'json',
        success: function(data){
            console.log("Hello world")

            // Map data to js format
            const cocktails = data.drinks.map(cocktail =>({
                id: cocktail.idDrink,
                name: cocktail.strDrink,
                image: cocktail.strDrinkThumb,
                glass: cocktail.strGlass
            }))
            console.log(cocktails);
            displayCocktails(cocktails);
        },
        error: function(error){
            // handle as it comes
        }
    })
}

function displayCocktails(cocktails){
    const cocktailContainer = $("#cocktailsContainer");
    cocktailContainer.empty();

    cocktails.forEach(cocktail => {
        const card = $(`
        <div class="col-md-4 mb-3">
        <div class="card">
          <img src="${cocktail.image}" class="card-img-top" alt="${cocktail.name}">
          <div class="card-body">
            <h5 class="card-title">${cocktail.name}</h5>
          </div>
        </div>
      </div>`);

      card.click(function(){
        window.location.href = `cocktail.html?id=${cocktail.id}`;
      });

        cocktailContainer.append(card);

    });

};


$("input[name=letterFilter]").click(function(){
    const selectedLetter = $(this).attr('value');

    getCocktailDataByFirstLetter(selectedLetter);
});


