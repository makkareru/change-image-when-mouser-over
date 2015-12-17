$(function(){
  $('img.logo').hover(function(){
    $('img#main').attr('src',$(this).attr('src'))
  });
});
