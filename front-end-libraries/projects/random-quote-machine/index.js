let text = 0;
const randomColor = function(){
  
}
const loadQuote = function(){
  fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    $('#wrapper').fadeOut('fast');
    $('#text').text(`${data.content}`);
    $('#author').text(`- ${data.author}`);

    $('#wrapper').fadeIn('fast');

  })
}

$(document).ready(function () {
  loadQuote();
  $('#new-quote').click(()=>{
    loadQuote();
   
  })
  
});