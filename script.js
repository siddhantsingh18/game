const options = [
  "Lie down and let your partner be on top", "Go down on me in a position we never tried before", "Kiss a part of my body you want to cum on", "Get pinned against the wall and kissed passionately",
  "Suck or lick wherever your partner says","Skip", "Get fully naked on knees and wait for their orders", "Kiss wherever you want", "Roleplay that I'm your professor and you're my student seduce me",
  "Give me a sensual massage start at my feet and walk your way up", "Place chocolate on your fvrt parts of my body.And lick it off", "Sit on partner's lap and do it with eye contact. No eye contact = Punishment", "Take my hand and put it on part of your body you'd like to pay more attention to. Guide my hand and show me how you want to be touched"
];

const usedIndexes = new Set();

window.addEventListener("DOMContentLoaded", () => {
  const box = document.getElementById("displayBox");
  const btn = document.getElementById("spinBtn");

  if (!box || !btn) return;

  btn.addEventListener("click", () => {
    if (usedIndexes.size === options.length) {
      box.textContent = "🎉 All options shown!";
      btn.disabled = true;
      btn.classList.add("disabled");
      return;
    }

    let index;
    do {
      index = Math.floor(Math.random() * options.length);
    } while (usedIndexes.has(index));

    usedIndexes.add(index);
    box.textContent = options[index];
  });
});
