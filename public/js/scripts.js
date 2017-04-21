function copyToClipboard(text) {
  var $temp = $("<textarea>");
  $("body").append($temp);
  $temp.val(text).select();
  document.execCommand("copy");
  $temp.remove();
}

$('span.bibtex').click(function(){
  var bibitem = $(this).parents('blockquote').next('.bibitem');
  if(bibitem.find('span.copyme').length < 1){
    bibitem.append('<span class="copyme">-Copied to clipboard-</span>');
  }
  copyToClipboard(bibitem.text());
  bibitem.toggle();
});
