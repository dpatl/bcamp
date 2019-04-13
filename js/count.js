$(function() {
  var ele = $('#counter');
  var clr = null;
  var rand = (Math.random() * 100000) >> 0;
  (loop = function() {
    clearTimeout(clr);
    (inloop = function() {
      ele.html(rand+=1);
      if(!(rand % 50)) {
        return;
      }
      clr = setTimeout(inloop, 180);
    })(); 
    setTimeout(loop, 30);
  })();
});