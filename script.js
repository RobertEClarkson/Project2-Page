$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    updatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    //changed button .click to .on so I can add multiple functions
    $('.treat-button').on("click", function(){
      clickedTreatButton();
      toggleThoughtBubble();
    });

    $('.play-button').on("click", function(){
      clickedPlayButton();
      toggleThoughtBubble();
    });

    $('.exercise-button').on("click", function(){
      clickedExerciseButton();
      toggleThoughtBubble();
    });

    $('.10-treat-button').on("click", function(){
      clicked10TreatButton();
      toggleThoughtBubble();
    });

  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Charles", weight: 0, happiness: 0, status: "Sad (no banana)", comment: "Banana..."};

    //added status to show a string instead of the hapiness number. Default at sad since it's 0.
    //added comment to display monkey's thoughts
  
    function clickedTreatButton() {
      if(pet_info.weight <= 155) {          //Looked up what weight that a monkey is considered overweight
        pet_info.happiness++;
        pet_info.weight++;
        pet_info.comment = "Banana!";
      }
      else{
        pet_info.comment = "Too Full...";
      }

      checkAndUpdatePetInfoInHtml();
    }

    function clicked10TreatButton() {
      if(pet_info.weight <=155) {
        pet_info.happiness += 5;
        pet_info.weight += 10;
        pet_info.comment = "Banana!?!";
      }
      else{
        pet_info.comment = "Too Full...";
      }

      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      if(pet_info.weight > 0) {
        pet_info.happiness += 5;
        pet_info.weight--;
        pet_info.comment = "Ooh ooh!";
      }
      else{
        pet_info.comment = "Hungry...";
      }
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      if(pet_info.weight > 0){
        pet_info.happiness -= 10;
        pet_info.weight -= 5;
        pet_info.comment = "Ah ah!";
      }
      else{
        pet_info.comment = "Hungry...";
      }

      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {

      //happiness checks
      if(pet_info.happiness > 10 && pet_info.happiness <= 100){
        pet_info.status = "Doing good!";
        changePetStatusImage("images/happy.jpg");
      }
      else if(pet_info.happiness > 100){
        pet_info.status = "Monkeying Around!";
        changePetStatusImage("images/monkeying_around.jpg");
      }
      else {
        pet_info.status = "Sad";
        changePetStatusImage("images/sad.jpg");
      }

      /*weight checks (removed cause I didn't find pictures I liked)
      if(pet_info.weight > 130){       //Normal chimp weight 88-130
        
      }
      else if(pet_info.weight <= 130){
        changePetIcon("/Project2/comp484-project2-main/images/monkey.png");
      }
      */

      //ensure both weight and happiness do not go below 0
      if(pet_info.weight < 0){
        pet_info.weight = 0;
      }

      if(pet_info.happiness < 0){
        pet_info.happiness = 0;
      }
    }

    //function to change pet status images
    function changePetStatusImage(e){
      document.getElementById("pet-image").src=e;
    }

    //function to change image of actual pet
    function changePetIcon(e){
      document.getElementById("pet").src=e;
    }

    //animation to show thought bubbles
    function toggleThoughtBubble(){
      $('.pet-thoughts')
        .stop(true, false)
        .css('opacity', 0)
        .show()
        .animate({ opacity: 1 }, 200)
        .delay(1200)
        .fadeOut(300);
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['status']);        //display status instead of number
      $('.comment').text(pet_info['comment']);         //update thought bubble text
    }
  
