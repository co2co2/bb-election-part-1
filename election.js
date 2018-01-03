document.addEventListener("DOMContentLoaded", function() {
  var candidates = document.querySelector('#candidates')
  $.ajax({
  url: "https://bb-election-api.herokuapp.com/",
  methid: 'GET',
  dataType: 'json',
}).done(function(data) {
  data.candidates.forEach(function(candidate){
  var li = document.createElement('li')
  li.innerHTML= (candidate.name+ ' : '+ candidate.votes)
  candidates.append(li)
    })
  })
});
