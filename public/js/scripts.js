$('span.bibtex').click(function(){
  $('.bibitem').hide();
  $(this).parents('blockquote').next('.bibitem').show(1.0);
});
