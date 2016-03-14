exports.journalCount = function(entry) {
  var output = 0;
  var entry_array = entry.split(" ");

  for (var i = 0; i < entry_array.length; i++) {
    output += 1;
  }
  return output;
};
