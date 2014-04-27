$(document).ready(function(){
  var $single = $('.single'),
      colors = ['#cb4b16', '#b58900', '#268bd2', '#2EBF7E', '#2aa198', '#859900'],
      style = '';

  //  '#dc322f', '#d33682', '#6c71c4',

  for (x=0; x<500; x++){
    for (y=0; y<500; y++){
      var random = Math.floor(Math.random() * ((colors.length - 1) - 0 + 1)) + 0;
      style = style.concat((x*20)+'px '+(y*20)+'px '+colors[random]+", ");
    }
  }
  style = style.replace(/,\s*$/, "");
  $single.css({
    '-webkit-box-shadow': style,
  })
  console.log(style);

})
