setTimeout(function() {
    $('li').text('Hej');
}, 2000);


var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})