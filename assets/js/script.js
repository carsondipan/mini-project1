var submitButtonEl = document.querySelector('#submitBtn');
var textInputEl = document.querySelector('#textInput');
var dropdownEl = document.querySelector('#dropdown');
var returnResultsEl = document.querySelector('#');

var formSubmit = function () {
  var search = textInputEl.value;

  if (search) {
    //get records with or w/o class specified
    // getSearchedResults(search);

    console.log(search);
  }
}



var getSearchedResults = function (user) {
    var apiUrl = 'https://www.loc.gov/' + textInputEl + '/?q=' + dropdownEl + '&fo=json';
  
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            displayRepos(data, user);
          });
        } else {
            'https://www.loc.gov/search/?q=' + dropdownEl + '&fo=json';
        }
      })
  };
//listen for button click, take in values from entry, taking values from entry-> searching LOC API, get info, send info back to page