function play() {
  //Globals
  let i = 0;
  let error = 0;
  let isPlaying = false;
  let capsLock = false;
  let initialGame = false;

  function initialKey(e) {
    if (!initialGame) {
      const keys = Object.entries(KEYS).map(key => key[0]);
      const optionalKeys = [...keys, ...specialKeys];

      if (optionalKeys.includes(e.key)) {
        initialGame = true;
      } else {
        alert("Something went wrong - check your language");
      }
    }
    return initialGame;
  }

  //Render Keyboard
  function renderKeyboard(keyLine) {
    const line = document.createElement("div");
    keyLine.forEach(key => {
      const keyElement = document.createElement("kbd");
      keyElement.classList.add(...KEYS[key].className);
      keyElement.setAttribute("data-keycode", key);
      keyElement.textContent = key;
      line.appendChild(keyElement);

      //insert icon
      const createIconHTML = icon_name => {
        return `<i class="material-icons">${icon_name}</i>`;
      };
      if (KEYS[key].iconName) {
        keyElement.innerHTML = createIconHTML(KEYS[key].iconName);
      }
      document.getElementById("keyboard__keys").appendChild(line);
    });
  }

  keyLayout.forEach(renderKeyboard);

  // highlight pressed keys
  function toggleKey(e) {
    if (initialKey(e) && currentSecs >0) {
      const keyPressed = document.querySelector(`kbd[data-keycode="${e.key}"]`);
      const keyCaps = document.querySelector(".keyboard__key--activatable");
      const letters = document.querySelectorAll(".letters");
  
      //capslock toggle
      if (e.type === "keydown" && e.key === "CapsLock") {
        capsLock = true;
        keyCaps.classList.toggle("keyboard__key--active", capsLock);
        letters.forEach(key => {
          key.textContent = key.textContent.toUpperCase();
        });
      }
  
      if (e.type === "keyup" && e.key === "CapsLock") {
        capsLock = false;
        keyCaps.classList.toggle("keyboard__key--active", capsLock);
        letters.forEach(key => {
          key.textContent = key.textContent.toLowerCase();
        });
      }
  
      //shift toggle
      if (e.type === "keydown" && e.key === "Shift") {
        letters.forEach(key => {
          key.textContent = key.textContent.toUpperCase();
        });
      }
      if (e.type === "keyup" && e.key === "Shift") {
        letters.forEach(key => {
          key.textContent = key.textContent.toLowerCase();
        });
      }
  
      //keypressed style toggle
      if (keyPressed) {
        const methodByEvent = {
          keydown: "add",
          keyup: "remove"
        };
        const classMethod = methodByEvent[e.type];
        keyPressed.classList[classMethod]("keyboard__active");
        if (e.type === "keyup") return;
      }
      //get letter from keyboard
      let myLetter = e.key;
  
      if (myLetter !== "Shift" && e.type === "keydown") {
        if (myLetter !== "CapsLock") {
          match(myLetter);
        }
      }
  
      //show error
      const errors = document.querySelector("#errors");
      errors.innerHTML = error;
      isPlaying = true;
    }
  }

  window.addEventListener("keydown", toggleKey);
  window.addEventListener("keyup", toggleKey);

  // gameplay
  window.addEventListener("load", init);
  function init() {
    // "Load" the content from source
    const data = sources;
    showWords(data);
  }

  // random text from data
  function showWords(data) {
    const randIndex = Math.floor(Math.random() * data.length);
    let randText = data[randIndex];
    splitWord(randText);
  }

  // split text to words
  function splitWord(randText) {
    let spreadText = randText.split(" ");

    spreadText.forEach(word => {
      let spanWord = document.createElement("span");
      spanWord.classList.add("word");
      let letters = word.split("");
      let space = document.createElement("span");
      space.classList.add(...["letter", "space"]);
      space.innerHTML = "&nbsp;";

      if (!(spreadText[0] === word)) {
        spanWord.appendChild(space);
      }

      letters.forEach(letter => {
        let spanLetter = document.createElement("span");
        spanLetter.classList.add("letter");
        spanLetter.innerHTML = letter;
        spanWord.appendChild(spanLetter);
      });
      document.getElementById("sources").appendChild(spanWord);
    });
  }

  //match letter to source
  function match(myLetter) {
    let lettersAr = [];
    const textLetter = document.querySelectorAll(".letter");
    textLetter.forEach(letter => {
      lettersAr.push(letter.innerHTML);
    });
    if (time === 0 || i === lettersAr.length) {
      return;
    }
    if (lettersAr[i] === "&nbsp;" && myLetter === " ") {
      i++;
      return;
    }
    if (myLetter === "Backspace") {
      if (textLetter[i] && textLetter[i].classList.contains("source_error")) {
        textLetter[i].classList.remove("source_error");
        textLetter[i] && textLetter[i].classList.remove("source_active");
        error--;
        return;
      }
      if (i > 0) {
        i--;
      }
      textLetter[i] && textLetter[i].classList.remove("source_active");
      return;
    }

    if (lettersAr[i] === myLetter) {
      textLetter[i].classList.add("source_active");
      i++;

      if (i === textLetter.length) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Good job!",
          showConfirmButton: false,
          timer: 2000
        });
        isPlaying = false;
        clearInterval(timer);
        document.getElementById("pb").style.visibility = "hidden";
      }
    } else {
      textLetter[i] && textLetter[i].classList.add("source_error");
      error++;
    }
  }

  //Countdown Timer
  const timeDisplay = document.querySelector("#time");
  let initialSecs = 60;
  let currentSecs = initialSecs;

  let timer = setInterval(countdown, 1000);
  function countdown() {
    let displayedSecs = currentSecs % 60;
    let displayedMin = Math.floor(currentSecs / 60) % 60;

    if (isPlaying) {
      if (displayedMin <= 9) displayedMin = "0" + displayedMin;
      if (displayedSecs <= 9) displayedSecs = "0" + displayedSecs;
      currentSecs--;
      if (currentSecs === -1) {
        clearInterval(timer);
        isPlaying = false;
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Game Over",
          showConfirmButton: false,
          timer: 2000
        });
        
      }
      setUpProgressBar("#pb", start.getTime(), end.getTime(), 100);
    }

    timeDisplay.innerHTML = isPlaying
      ? displayedMin + ":" + displayedSecs
      : "01:00";
  }

  //Visual Countdown Timer
  function setUpProgressBar(selector, startTime, endTime, update) {
    let visTimer;
    let elem = document.querySelector(selector);
    let max = endTime - startTime;
    elem.max = max;

    let setValue = function() {
      let currentTime = new Date().getTime();
      let ellasped = currentTime - startTime;
      if (ellasped >= max) {
        ellasped = max;
        window.clearTimeout(visTimer);
      }
      elem.value = ellasped;
    };

    setValue();
    visTimer = window.setInterval(setValue, update);
    return;
  }
  let start = new Date();
  let end = new Date();
  end.setSeconds(end.getSeconds() + 60);
}
play();

//restart game
function restart() {
  location.reload();
}
