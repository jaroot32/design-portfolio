window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  // Loop through Block1 to Block10
for (let i = 1; i <= 1; i++) {
   const el = document.querySelector(`[data-acc-text="Block${i}"]`);
  
  if (el) {
    el.addEventListener('mouseenter', () => {
      el.style.filter = 'drop-shadow(0px 0px 5px rgba(142, 142, 142, 0.85))';
    });

    el.addEventListener('mouseleave', () => {
      el.style.filter = 'none';
    });
  }
}
}

window.Script2 = function()
{
  const el = document.querySelector('[data-acc-text="Mask4"]');

if (el) {
  el.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
  el.style.backdropFilter = 'blur(4px)';
  el.style.webkitBackdropFilter = 'blur(4px)'; // Safari support
}
}

window.Script3 = function()
{
  for (let i = 1; i <= 10; i++) {
  const el = document.querySelector(`[data-acc-text="Block${i}"]`);
  
  if (el) {
    el.addEventListener('mouseenter', () => {
      el.style.filter = 'drop-shadow(0px 0px 5px rgba(142, 142, 142, 0.85))';
    });


    el.addEventListener('mouseleave', () => {
      el.style.filter = 'none';
    });
  }
} 

}

window.Script4 = function()
{
  const circle01 = object('6A4IdatJroJ');
circle01.style.filter =
  'drop-shadow(0px 0px 8px rgba(142, 142, 142, 0.55))';

}

window.Script5 = function()
{
  const circle02 = object('5fsK0LVZWpN');
circle02.style.filter =
  'drop-shadow(0px 0px 8px rgba(142, 142, 142, 0.55))';

}

window.Script6 = function()
{
  const circle03 = object('6iZ6mxrr1tS');
circle03.style.filter =
  'drop-shadow(0px 0px 8px rgba(142, 142, 142, 0.55))';

}

window.Script7 = function()
{
  const circle04 = object('5tCB8kyZRxu');
circle04.style.filter =
  'drop-shadow(0px 0px 8px rgba(142, 142, 142, 0.55))';

}

window.Script8 = function()
{
  const circle05 = object('5bCIBvrqEQs');
circle05.style.filter =
  'drop-shadow(0px 0px 8px rgba(142, 142, 142, 0.55))';

}

window.Script9 = function()
{
  const circle06 = object('5gkQfpIFD6F');
circle06.style.filter =
  'drop-shadow(0px 0px 8px rgba(142, 142, 142, 0.55))';

}

window.Script10 = function()
{
  const circle07 = object('6d7kPOADBnP');
circle07.style.filter =
  'drop-shadow(0px 0px 8px rgba(142, 142, 142, 0.55))';

}

window.Script11 = function()
{
  const circle08 = object('5WnerXnRdbE');
circle08.style.filter =
  'drop-shadow(0px 0px 8px rgba(142, 142, 142, 0.55))';

}

window.Script12 = function()
{
  const circle09 = object('5xar4Jd9Qxg');
circle09.style.filter =
  'drop-shadow(0px 0px 8px rgba(142, 142, 142, 0.55))';


}

window.Script13 = function()
{
  // Loop through Block1 to Block10
for (let i = 1; i <= 3; i++) {
  const el = document.querySelector(`[aria-label="Block${i}"]`);
  
  if (el) {
    el.addEventListener('mouseenter', () => {
      el.style.filter = 'drop-shadow(0px 0px 5px rgba(142, 142, 142, 0.85))';
    });

    el.addEventListener('mouseleave', () => {
      el.style.filter = 'none';
    });
  }
}
}

window.Script14 = function()
{
  const circle10 = object('5ZdaITzZoVK');
circle10.style.filter =
  'drop-shadow(0px 0px 8px rgba(142, 142, 142, 0.55))';

}

window.Script15 = function()
{
  const sidecard6 = object('6QK5WrCSyd3');
sidecard6.style.filter =
  'drop-shadow(0px 0px 8px rgba(142, 142, 142, 0.55))';
}

window.Script16 = function()
{
  const sidecard5 = object('5YbecVEqTKU');
sidecard5.style.filter =
  'drop-shadow(0px 0px 8px rgba(142, 142, 142, 0.55))';
}

window.Script17 = function()
{
  const sidecard3 = object('6SFq59njBKQ');
sidecard3.style.filter =
  'drop-shadow(0px 0px 8px rgba(142, 142, 142, 0.55))';
}

window.Script18 = function()
{
  const sidecard2 = object('6pugXYqju7s');
sidecard2.style.filter =
  'drop-shadow(0px 0px 8px rgba(142, 142, 142, 0.55))';
}

window.Script19 = function()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
script.type = 'text/javascript';
head.appendChild(script);

}

window.Script20 = function()
{
  (function () {
  if (typeof gsap === "undefined") {
    console.error("❌ GSAP missing");
    return;
  }


  window.registerGSAPAnimationEffects = window.registerGSAPAnimationEffects || function () {
    console.warn("⚠️ registerGSAPAnimationEffects is not defined — using dummy function.");
  };


  const CARDS = [
    { front: "6Jzy54JAQqQ", back: "6cpS6glztwW", varName: "card1" },
    { front: "6YmCatpKslB", back: "6ErWOFTS9UF", varName: "card2" },
    { front: "5fJEqO210G4", back: "6ZlLs4vyutT", varName: "card3" },
  	{ front: "6O6m8FyRox5", back: "6mbARUhjsQy", varName: "card4" }

  ];


  const FLIP_DURATION = 1;
  const ALL_CARDS_DONE_VAR = "allCardsFlipped";


  let cardElements = [];
  let isAnimating = false;


  function getPlayer() {
    return typeof GetPlayer === "function" ? GetPlayer() : null;
  }


  function setStorylineVar(name, value) {
    const player = getPlayer();
    if (player) {
      try {
        player.SetVar(name, value);
      } catch (e) {
        console.error(`❌ Failed to set Storyline variable ${name}:`, e);
      }
    }
  }


  function initCard({ front, back, varName }, cardIndex) {
    const frontEl = document.querySelector(`[data-model-id="${front}"]`);
    const backEl = document.querySelector(`[data-model-id="${back}"]`);


    if (!frontEl || !backEl) {
      console.warn("❌ Missing element:", front, back);
      return null;
    }


    [frontEl, backEl].forEach(el => {
      el.style.position = "absolute";
      el.style.top = "0";
      el.style.left = "0";
      el.style.transformStyle = "preserve-3d";
      el.style.backfaceVisibility = "hidden";
      el.style.transformOrigin = "center center";
      el.style.cursor = "pointer";
    });


    gsap.set(frontEl, { rotateY: 0, force3D: true });
    gsap.set(backEl, { rotateY: -180, force3D: true });


    frontEl.style.pointerEvents = 'auto';
    backEl.style.pointerEvents = 'none';


    let flipped = false;


    function flipCard() {
      if (isAnimating) return;
      isAnimating = true;


      const frontAngle = flipped ? 0 : 180;
      const backAngle = flipped ? -180 : 0;


      const flipTimeline = gsap.timeline({
        onComplete: () => {
          isAnimating = false;
          flipped = !flipped;
          setStorylineVar(varName, true);


          if (flipped) {
            frontEl.style.pointerEvents = 'none';
            backEl.style.pointerEvents = 'auto';
          } else {
            frontEl.style.pointerEvents = 'auto';
            backEl.style.pointerEvents = 'none';
          }
        }
      });


      flipTimeline
        .to(frontEl, { rotateY: frontAngle, duration: FLIP_DURATION, ease: "power2.inOut" }, 0)
        .to(backEl, { rotateY: backAngle, duration: FLIP_DURATION, ease: "power2.inOut" }, 0);
    }


    frontEl.addEventListener("click", flipCard);
    backEl.addEventListener("click", flipCard);


    return { frontEl, backEl, varName, flipped };
  }


  function initializeCards() {
    let initialized = 0;


    CARDS.forEach((card, index) => {
      const cardData = initCard(card, index);
      if (cardData) {
        cardElements.push(cardData);
        initialized++;
      }
    });


    if (initialized < CARDS.length) {
      setTimeout(initializeCards, 500);
    }
  }


  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCards);
  } else {
    initializeCards();
  }
})();
}

};
