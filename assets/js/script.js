var historyList  = $('#searchHistory');
var searchCity = '';
var searchCityInput = document.querySelector('#selectCity');
var currentWeather = document.querySelector('#current-forecast');

// Moment
var todaysDate = moment().format('(MM/DD/YYYY');


// Search history 
function weatherHistory(city) {
  let btn = 
  $('<button type="button" class="btn btn-secondary my-2" id="save1">' + city + '</button>');

  if ($("searchHistory").children().length > 6) {
    $("#searchHistory").find(":first-child").remove();
    btn.appendTo("#searchHistory"); 
  } else {
    btn.appendTo("searchHistory");
  }
}

