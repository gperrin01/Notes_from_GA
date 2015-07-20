/*  FLASH ITEMS IN SCREEN WITH DIFFERRENT COLORS
#jQuery #LOOP #INTERVAL      */
// select a <ul class="disco">
  $('.disco').each(function(index, element) {
    setInterval(function() {
      var c1 = Math.floor(Math.random()*255);
      var c2 = Math.floor(Math.random()*255);
      var c3 = Math.floor(Math.random()*255);
      var color = 'rgb('+c1+','+c2+','+c3+')';
      $(element).css('color', color);
    }, 200)
  })

