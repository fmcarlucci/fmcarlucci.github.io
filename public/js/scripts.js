function copyToClipboard(text) {
  var $temp = $("<textarea>");
  $("body").append($temp);
  $temp.val(text).select();
  document.execCommand("copy");
  $temp.remove();
}

$('span.bibtex').click(function(){
  var bibitem = $(this).parents('blockquote').next('.bibitem');
  bibitem.toggle();
});

$('img.clipboard').click(function(){
  var bibitem = $(this).parents('blockquote').next('.bibitem');
  copyToClipboard(bibitem.text());
});
