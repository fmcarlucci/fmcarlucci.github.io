$('span.bibtex').click(function(){
  $('.bibitem').hide();
  $(this).parents('blockquote').next('.bibitem').fadeIn(1.0);
});
