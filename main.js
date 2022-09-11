/* - Mutassa az órát, percet, másodpercet
- Az óra a user által használt időzóna szerint jelenítse meg az időt
- Az óra 24 órás formátumot használjon minden esetben
- A színeket szabadon választhatod meg
- Az óra a képernyő közepén jelenjen meg, azaz mind vertikálisan, mind horizontálisan legyen középre igazítva minden nézetben
- A háttérszín pontosan 1 képernyő széles és magas legyen minden nézetben
- Használd a Cyberverse betűtípust
- A betűméretet te választhatod meg */

"use strict";

const clockDisplay = document.querySelector(".clock__display");
const button = document.querySelector(".btn");
let locale = "hu";

const changeLocality = () => {
  if (locale === "hu") {
    locale = "en";
  } else {
    locale = "hu";
  }
};
button.addEventListener("click", changeLocality);

const timeGenerator = () => {
  const now = new Date();
  const time = now.toLocaleTimeString(locale);
  clockDisplay.innerHTML = time;
};

const initClock = () => {
  clockDisplay.innerHTML = "";
  setInterval(timeGenerator, 1000);
};

initClock();
