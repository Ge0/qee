
var quotes = [
  'Katsuya Miyahira, parce que rira bien qui miyahira le dernier.',
  'Le stage termine à 21h15. Bon des fois ça déborde sur 21h16 voire 17.',
  'Faîtes des squats, comme les immeubles inhabités.',
]

window.onload = function() {
  let index = Math.floor(Math.random() * quotes.length)
  document.getElementById('quote').innerHTML = quotes[index]
}
