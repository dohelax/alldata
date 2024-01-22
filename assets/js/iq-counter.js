$({ Counter: 0 }).animate({
  Counter: $('.Single').text()
}, {
  duration: 1000,
  easing: 'swing',
  step: function() {
    $('.Single').text(Math.ceil(this.Counter));
  }
});
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<span class="Single">150</span>