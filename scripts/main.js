$(document).ready(function(){

// -----------------------------------------------------------------
// sign up form code
// -----------------------------------------------------------------

console.log("Works")




// -----------------------------------------------------------------
// on sign up submit prevent default submission
$("#signUpForm").submit(function(event){

    event.preventDefault();

    if(this.checkValidity() === false){
        event.stopPropagation();
    }else{
        // add submission code, like saving to localstorage
        window.location.href = 'pages/browse.html';
    }
    $(this).addClass('was-validated');

});

});