const quotes = [
    "Yes, I  WORKHARD, Not for Money,not for a boy/girl,not for myself but for that one simile on my parents face",
    "Be your own Best friend,world is full of temporary people",
    "All Power is Within You,U cand Do Anythings,And Everthings..",
    "Nobody on earth can ever love you more that your parents",
    "Believe you can and you're halfway there. ",
    "Stay hungry, stay foolish.",
    "It's okay everyone has bad days But don't give up Pause, Reset,Restart. Always pick yourself up and keep going But never ever quit",
    "Our greatest glory is not in never falling, but in rising every time we fall.",
    "The way to get started is to quit talking and begin doing. y",
    "The Beauty of nature is best known in waves of silence& stillness"
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = quotes[randomIndex];
  }
  