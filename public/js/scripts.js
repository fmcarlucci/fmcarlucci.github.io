$('span.bibtex').click(function(){
  $('span.copyme').empty();
  var bibitem = $(this).parents('blockquote').next('.bibitem');
  bibitem.append('<span class="copyme">Click to copy</span>');
  bibitem.toggle();
});
