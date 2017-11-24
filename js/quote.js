
var quotes = [
  'Katsuya Miyahira, parce que rira bien qui miyahira le dernier.',
  'Le stage termine à 21h15. Bon des fois ça déborde sur 21h16 voire 17.',
  'Faîtes des squats, comme les immeubles inhabités.',
  'Il vous reste dix minutes, ou deux fois cinq minutes. Faîtes votre choix,' +
  ' dix ou deux fois cinq !',
  'Nan mais regarde comme il est raide, c\'est un PLAY-MO-BIL !',
  'Quel est le mot du bruit qu\'on fait quand on a trop mangé et qu\'on a ' +
  'des gaz ? Le mot ? ... Roté, oui. Moroté !',
  'G., quand tu fais tes impulsions faut qu\'elles ressemblent à des ' +
  'kïais, ici c\'est pas opération séduction "eiiihhh... mmmh...", hein.',
  'Alors quand on fait un Kïai on est pas chez le dentiste. Vous êtes pas ' +
  'obligé de montrer vos dents... <i>H-Eyhh..</i>!',
  'Après le stage, on finit au restaurant. Pour manger, hein. On termine ' +
  'pas le stage là-bas.',
  'Quand vous faîtes des squats, serrez bien les fesses pour impliquer tous' +
  ' les muscles. Imaginez que vous cassez une noisette entre les fesses !',
]

window.onload = function() {
  let index = Math.floor(Math.random() * quotes.length)
  document.getElementById('quote').innerHTML = quotes[index]
}
