//wait for document to load before running JS script.
$(document).ready(function () {

  //target the submit, and attach an event handler.
  $("div#blanks").submit(function (event) {

    //create an array to hold the ids.
    var inputFields = ["person1", "person2", "animal", "exclamation", "verb", "noun"]

    //iterate through the array, and collect user's input.
    inputFields.forEach(function (input) {
      userInput = $("input#" + input).val()

      //Set the user's input to the display area.
      $("." + input).text(userInput)

      //Display the hidden area
      $("div#story").show()

      //prevent default browser action, i.e. refreshing on submit.
      event.preventDefault()

    })
  })
})