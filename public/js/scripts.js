function copyToClipboard(text) {
  var $temp = $("<textarea>");
  $("body").append($temp);
  $temp.val(text).select();
  document.execCommand("copy");
  $temp.remove();
}

$('span.bibtex').click(function(){
  $('span.copyme').empty();
  var bibitem = $(this).parents('blockquote').next('.bibitem');
  copyToClipboard(bibitem.text());
  bibitem.append('<span class="copyme">-Copied to clipboard-</span>');
  bibitem.toggle();
});
