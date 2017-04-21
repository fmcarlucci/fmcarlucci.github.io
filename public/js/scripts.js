$('span.bibtex').click(function(){
  var bibitem = $(this).parents('blockquote').next('.bibitem');
  if(bibitem.find('span.copyme').length < 1){
    bibitem.append('<span class="copyme">Click to copy</span>');
  }
  bibitem.toggle();
});
