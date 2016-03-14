$(document).ready(function(){
  $('#date').submit(function(event){
    event.preventDefault();
    var date = $('#entry-date').val();
    $('#date-result').hide();
    $('#date-result').append('<p>' + date + '</p>');
  });
});
