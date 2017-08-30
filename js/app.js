$(document).ready(function() {

  $('#movieSearch input[type = submit]').click(function(e) {
    e.preventDefault();
    let userSearch = $('#movieSearch input[type=text]').val();
    $('ul').empty();

    $.get(`https://omdb-api.now.sh/?s=${userSearch}`).then(function(data) {
      let result = data.Search;
       for (movie of result) {
         $('ul').append(`<li>
                          <div class='movie'>
                            <a href="#">${movie.Title}
                            </a>
                            <div class='details' id=${movie.imdbID}>
                              <img src=${movie.Poster}>
                              <p>${movie.Year}</p>
                            </div>
                          </div>
                        </li>`);
         $('.details').hide()
       }
       $('a').click(function(e) {
         e.preventDefault();
         $(e.target).next().toggle();
       })
    })
  });
});
