exports.JournalEntry = function(title, entry) {
  this.title = title;
  this.entry = entry;
};

exports.JournalEntry.prototype.journalCount = function() {
  var output = 0;
  var entry_array = this.entry.split(" ");

  for (var i = 0; i < entry_array.length; i++) {
    output += 1;
  }
  return output;
};
