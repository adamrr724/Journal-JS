$(document).ready(function(){
  $('#journal').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var entry = $('#entry').val();
    var count = journalCount(entry);

      $('#journal_entry').append("<h1 class='journal_title'>" + title + "</h1>");
      $('#journal_title').append("<p class='journal_entry'>" + entry + "</p>");
      $('#journal_entry').append("<p>Your post is" + count + "words long.</p>");
    });
  });
});
