$(function() {
  var text = $('#copyright-year').text().trim();

  if ('' == text) {
    $('#copyright-year').text(text);
  }
});