(function () {
  const quotes = [
    {
      quote:
        "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
      author: "Life",
    },
    {
      quote:
        "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
      author: "John Kenneth Galbraith",
    },
    {
      quote:
        "God save me from my friends. I can protect myself from my enemies.",
      author: "Claude Louis Hector de Villars ",
    },
    {
      quote: "The price of anything is the amount of life you exchange for it.",
      author: "David Thoreau",
    },
    {
      quote:
        "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
      author: "Charles Lindbergh",
    },
    {
      quote:
        "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
      author: " Tyne Daly",
    },
  ]; //Özlü sözlerden oluşan bir dizin tanımladık
  const btn = document.querySelector("#generate-btn"); //Sonra butona tıkladığımızda değişecek bir şekilde ayarlama yaptık
  btn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * quotes.length); //Random bir özlü söz seçecek şekilde bir algoritma kurduk
    console.log(random);
    document.querySelector("#quote").textContent = quotes[random].quote; //Ratsgele seçilen Özlü sözlerimizin değişmesi içn textContent kalıbını kullandık
    document.querySelector(".author").textContent = quotes[random].author; //Yazarın isminin değişmesi için
  });
})();
