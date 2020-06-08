function isLeap(year) {

    year = document.getElementById('year').value;

    if (year.length == 0) {

      $('#text').text("Insert a year.");

    } else if (year % 4 === 0){

        $('#text').text("It's a leap year!");

    } else if (year % 4 === 0 && year % 100 === 0) {

        $('#text').text("Not a leap year.");

    } else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0){

        $('#text').text("It's a leap year!");

    } else if (isNaN(year)){

      $('#text').text("That's... not a year ಠ_ಠ");

    } else {

        $('#text').text("Not a leap year.");

    }

}
