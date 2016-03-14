var JournalEntry = require('./../js/journal.js').JournalEntry;

$(document).ready(function(){
  $('#journal').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var entry = $('#entry').val();
    var newJournalEntry = new JournalEntry(title, entry);

      $('#journal-entry').append("<h1 class='journal-title'>" + newJournalEntry.title + "</h1><p>" + newJournalEntry.entry + "</p><p>Your post is "  + newJournalEntry.journalCount()  + " words long</p>");
  });
});
