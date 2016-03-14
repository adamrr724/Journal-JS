(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var JournalEntry = require('./journal.js').JournalEntry;

$(document).ready(function(){
  $('#journal').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var entry = $('#entry').val();
    var newJournalEntry = new JournalEntry(title, entry);

      $('#journal-entry').append("<h1 class='journal-title'>" + newJournalEntry.title + "</h1><p>" + newJournalEntry.entry + "</p><p>Your post is "  + newJournalEntry.journalCount()  + " words long</p>");
  });
});

},{"./journal.js":2}],2:[function(require,module,exports){
exports.JournalEntry = function(title, entry) {
  this.title = title;
  this.entry = entry;
  //this.count = journalCount();
}

exports.JournalEntry.prototype.journalCount = function() {
  debugger;
  var output = 0;
  var entry_array = this.entry.split(" ");

  for (var i = 0; i < entry_array.length; i++) {
    output += 1;
  }
  return output;
};

},{}]},{},[1]);
