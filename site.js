$(document).ready(function(){
  var $single = $('.single'),
      colors = ['#cb4b16', '#b58900', '#268bd2', '#2EBF7E', '#2aa198', '#859900'],
      style = '';

  //  '#dc322f', '#d33682', '#6c71c4',

  function setStyle(){
    var maxHeight = $(window).height() / 15;
    var maxWidth = $(window).width() / 15;

    console.log(maxHeight, maxWidth);
    for (x=0; x<maxWidth; x++){
      for (y=0; y<maxHeight; y++){
        var random = Math.floor(Math.random() * ((colors.length - 1) - 0 + 1)) + 0;
        style = style.concat((x*20)+'px '+(y*20)+'px '+colors[random]+", ");
      }
    }
    style = style.replace(/,\s*$/, "");
    $single.css({
      '-webkit-box-shadow': style,
      '-moz-box-shadow': style,
      'box-shadow': style,
    });
  };

  $(window).resize(setStyle());

})
