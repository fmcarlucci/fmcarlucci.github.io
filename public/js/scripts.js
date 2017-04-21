$('span.bibtex').click(function(){
  // $('span.copyme').remove();
  var bibitem = $(this).parents('blockquote').next('.bibitem');
  bibitem.append('<span class="copyme">Click to copy</span>');
  bibitem.toggle();
});
