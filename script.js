const engList = [
  "`",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "Backspace",
  "Tab",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "[",
  "]",
  "Delete",
  "CapsLock",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  ";",
  "'",
  "Enter",
  "Shift",
  "\\",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  ",",
  ".",
  "/",
  "↑",
  "Shift",
  "Ctrl",
  "Win",
  "Alt",
  "Space",
  "Alt",
  "Ctrl",
  "←",
  "↓",
  "→",
];
const ruList = [
  "ё",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "Backspace",
  "Tab",
  "й",
  "ц",
  "у",
  "к",
  "е",
  "н",
  "г",
  "ш",
  "щ",
  "з",
  "х",
  "ъ",
  "Delete",
  "CapsLock",
  "ф",
  "ы",
  "в",
  "а",
  "п",
  "р",
  "о",
  "л",
  "д",
  "ж",
  "э",
  "Enter",
  "Shift",
  "\\",
  "я",
  "ч",
  "с",
  "м",
  "и",
  "т",
  "ь",
  "б",
  "ю",
  ".",
  "↑",
  "Shift",
  "Ctrl",
  "Win",
  "Alt",
  "Space",
  "Alt",
  "Ctrl",
  "←",
  "↓",
  "→",
];
const engShift = [
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "Backspace",
  "Tab",
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "{",
  "}",
  "Delete",
  "CapsLock",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  ":",
  '"',
  "Enter",
  "Shift",
  "|",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  "<",
  ">",
  "?",
  "↑",
  "Shift",
  "Ctrl",
  "Win",
  "Alt",
  "Space",
  "Alt",
  "Ctrl",
  "←",
  "↓",
  "→",
];
const ruShift = [
  "Ё",
  "!",
  '"',
  "№",
  ";",
  "%",
  ":",
  "?",
  "*",
  "(",
  ")",
  "_",
  "+",
  "Backspace",
  "Tab",
  "Й",
  "Ц",
  "У",
  "К",
  "Е",
  "Н",
  "Г",
  "Ш",
  "Щ",
  "З",
  "Х",
  "Ъ",
  "Delete",
  "CapsLock",
  "Ф",
  "Ы",
  "В",
  "А",
  "П",
  "Р",
  "О",
  "Л",
  "Д",
  "Ж",
  "Э",
  "Enter",
  "Shift",
  "/",
  "Я",
  "Ч",
  "С",
  "М",
  "И",
  "Т",
  "Ь",
  "Б",
  "Ю",
  ",",
  "↑",
  "Shift",
  "Ctrl",
  "Win",
  "Alt",
  "Space",
  "Alt",
  "Ctrl",
  "←",
  "↓",
  "→",
];
const keyCode = [
  "Backquote",
  "Digit1",
  "Digit2",
  "Digit3",
  "Digit4",
  "Digit5",
  "Digit6",
  "Digit7",
  "Digit8",
  "Digit9",
  "Digit0",
  "Minus",
  "Equal",
  "Backspace",
  "Tab",
  "KeyQ",
  "KeyW",
  "KeyE",
  "KeyR",
  "KeyT",
  "KeyY",
  "KeyU",
  "KeyI",
  "KeyO",
  "KeyP",
  "BracketLeft",
  "BracketRight",
  "Delete",
  "CapsLock",
  "KeyA",
  "KeyS",
  "KeyD",
  "KeyF",
  "KeyG",
  "KeyH",
  "KeyJ",
  "KeyK",
  "KeyL",
  "Semicolon",
  "Quote",
  "Enter",
  "ShiftLeft",
  "Backslash",
  "KeyZ",
  "KeyX",
  "KeyC",
  "KeyV",
  "KeyB",
  "KeyN",
  "KeyM",
  "Comma",
  "Period",
  "Slash",
  "ArrowUp",
  "ShiftRight",
  "ControlLeft",
  "MetaLeft",
  "AltLeft",
  "Space",
  "AltRight",
  "ControlRight",
  "ArrowLeft",
  "ArrowDown",
  "ArrowRight",
];
let currentLang;
if (localStorage.getItem("currentLang") === null) {
  currentLang = "ru";
  localStorage.setItem("currentLang", "ru");
} else {
  currentLang = localStorage.getItem("currentLang");
}

// page-load
const load = (loadLang) => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("keyboard-wrapper");
  for (let i = 0; i < ruList.length; i += 1) {
    const newBtn = document.createElement("div");

    if (ruList[i].match(/[а-я+ё]/) && ruList[i].length === 1) {
      newBtn.classList.add("letter-btn");
      newBtn.classList.add("keyboard-btn");
      newBtn.innerHTML = loadLang[i];
    } else if (ruList[i].match(/[0-9+\-+=+.+\\]/) && ruList[i].length === 1) {
      newBtn.classList.add("number-btn");
      newBtn.classList.add("keyboard-btn");
      newBtn.innerHTML = ruList[i];
    } else {
      newBtn.classList.add("keyboard-btn");
      newBtn.innerHTML = ruList[i];
      if (ruList[i] === "Win") {
        newBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="64px" height="64px" viewBox="0 0 1920 1920">

      <g id="SVGRepo_bgCarrier" stroke-width="0"/>
      
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
      
      <g id="SVGRepo_iconCarrier"> <path d="M1863.53 1016.437c31.171 0 56.47 25.299 56.47 56.47v790.589c0 16.376-7.115 31.849-19.313 42.465-10.39 9.149-23.605 14.005-37.158 14.005-2.484 0-5.082-.113-7.567-.452l-903.53-123.331c-28.008-3.84-48.903-27.784-48.903-56.02v-667.256c0-31.171 25.3-56.47 56.471-56.47Zm-1129.412 0c31.171 0 56.47 25.299 56.47 56.47v634.504c0 16.376-7.115 31.85-19.426 42.579-10.39 9.035-23.491 13.891-37.044 13.891-2.485 0-5.196-.113-7.68-.564L48.79 1669.35C20.78 1665.51 0 1641.68 0 1613.444v-540.537c0-31.171 25.299-56.47 56.47-56.47Zm-7.726-859.855c16.151-2.372 32.415 2.597 44.725 13.327 12.424 10.73 19.426 26.315 19.426 42.579V846.99c0 31.285-25.186 56.47-56.47 56.47H56.424c-31.171 0-56.47-25.185-56.47-56.47V306.455c0-28.123 20.781-52.066 48.79-55.906ZM1855.974.474c16.15-2.033 32.414 2.71 44.724 13.44 12.198 10.73 19.313 26.203 19.313 42.466v790.588c0 31.285-25.299 56.471-56.47 56.471H960.01c-31.171 0-56.47-25.186-56.47-56.47V179.711c0-28.235 20.78-52.066 48.903-55.906Z" fill-rule="evenodd"/> </g>
      
      </svg>`;
        newBtn.classList.add("spec-btn");
        newBtn.classList.remove("keyboard-btn");
      } else if (ruList[i].length > 1 || ruList[i].match(/[↑←↓→]/)) {
        newBtn.classList.add("spec-btn");
      }
    }
    newBtn.setAttribute("ruLower", ruList[i]);
    newBtn.setAttribute("ruUpper", ruShift[i]);
    newBtn.setAttribute("engLower", engList[i]);
    newBtn.setAttribute("engUpper", engShift[i]);
    newBtn.setAttribute("lang", currentLang);
    newBtn.setAttribute("keyCode", keyCode[i]);
    newBtn.id = newBtn.getAttribute("engUpper");
    wrapper.append(newBtn);
  }

  const disp = document.createElement("textarea");
  disp.type = "text";
  disp.classList.add("keyboard-display");
  if (currentLang === "ru") {
    disp.placeholder =
      "Нажмите LShift + LCtrl либо кликните на текущий язык чтобы сменить язык";
  } else {
    disp.placeholder =
      "Press LShift + LCtrl or click on current language to change language";
  }
  const statusBar = document.createElement("div");
  statusBar.classList.add("status-bar");
  const lang = document.createElement("div");
  lang.classList.add("current-lang");

  if (currentLang === "ru") {
    lang.classList.remove("eng");
  } else {
    lang.classList.add("eng");
  }
  const animBody = document.createElement("div");
  animBody.classList.add("animation-body");
  const anim = document.createElement("div");
  anim.classList.add("animation");
  // anim.innerHTML = "Animation";
  const img = document.createElement("img");
  img.src = "light.svg";
  anim.append(img);
  animBody.append(anim);

  let OS = document.createElement("p");
  OS.innerHTML = "Win-64";
  OS.classList.add("OS");
  statusBar.append(lang);
  statusBar.append(animBody);
  statusBar.append(OS);

  document.querySelector("body").prepend(wrapper);
  document.querySelector("body").prepend(statusBar);
  document.querySelector("body").prepend(disp);
};

if (currentLang === "ru") {
  load(ruList);
} else {
  load(engList);
}

const btnList = document.querySelectorAll(".keyboard-btn");
const lettersList = document.querySelectorAll(".letter-btn");
const langStatus = document.querySelector(".current-lang");
let shiftStatus = false;
const isUpper = () => {
  if (shiftStatus) {
    btnList.forEach((btn) => {
      btn.innerHTML =
        currentLang === "eng"
          ? btn.getAttribute("engupper")
          : btn.getAttribute("ruupper");
    });
  } else {
    btnList.forEach((btn) => {
      btn.innerHTML =
        currentLang === "eng"
          ? btn.getAttribute("englower")
          : btn.getAttribute("rulower");
    });
  }
};

// change language

const langSwiper = () => {
  if (currentLang === "ru") {
    langStatus.classList.toggle("eng");
    localStorage.setItem("currentLang", "eng");
    currentLang = "eng";
    document.querySelector("textarea").placeholder =
      "Press LShift + LCtrl or click on current language to change language";
    isUpper();
    lettersList.forEach((btn) => {
      btn.setAttribute("lang", currentLang);
    });
  } else if (currentLang === "eng") {
    langStatus.classList.toggle("eng");
    localStorage.setItem("currentLang", "ru");
    currentLang = "ru";
    document.querySelector("textarea").placeholder =
      "Нажмите LShift + LCtrl либо кликните на текущий язык чтобы сменить язык";
    isUpper();
    lettersList.forEach((btn) => {
      btn.setAttribute("lang", currentLang);
    });
  }
};

// change language with click on statusButton
langStatus.addEventListener("click", () => {
  langSwiper();
});

// change language with shift+ctrl
document.addEventListener("keydown", (e) => {
  if (e.key === "Control" && e.shiftKey === true) {
    langSwiper();
  }
});

// caps-lock on/off
const capsLock = document.querySelector("#CapsLock");
capsLock.onclick = () => {
  capsLock.classList.toggle("on");
  document.querySelector(".status-bar").classList.toggle("upper");
  lettersList.forEach((btn) => {
    btn.classList.toggle("button-upper");
  });
};
document.addEventListener("keydown", (e) => {
  if (e.key === "CapsLock") {
    capsLock.classList.toggle("on");
    document.querySelector(".status-bar").classList.toggle("upper");
    lettersList.forEach((btn) => {
      btn.classList.toggle("button-upper");
    });
  }
});

// shift on/off
const ShiftL = document.querySelectorAll("#Shift")[0];
const ShiftR = document.querySelectorAll("#Shift")[1];
const shiftEvents = () => {
  function addEvents(element, eventNames, listener) {
    const events = eventNames.split(" ");
    for (let i = 0; i < events.length; i += 1) {
      element.addEventListener(events[i], listener, false);
    }
  }

  const up = (e) => {
    if (e.key === "Shift" || e.target === ShiftL || e.target === ShiftR) {
      document.querySelector(".status-bar").classList.toggle("upper");
      shiftStatus = false;
      isUpper();
    }
  };
  const down = (e) => {
    if (e.key === "Shift" || e.target === ShiftL || e.target === ShiftR) {
      document.querySelector(".status-bar").classList.toggle("upper");
      shiftStatus = true;
      isUpper();
    }
  };

  addEvents(document, "keydown mousedown", down);
  addEvents(document, "keyup mouseup", up);
};
shiftEvents();
// buttons animation
const buttonsAnimation = () => {
  document.addEventListener("keydown", (e) => {
    btnList.forEach((btn) => {
      if (e.code === btn.getAttribute("keycode")) {
        btn.classList.add("active");
      }
    });
  });
  document.addEventListener("keyup", (e) => {
    btnList.forEach((btn) => {
      if (e.code === btn.getAttribute("keycode")) {
        btn.classList.remove("active");
      }
    });
  });
};
buttonsAnimation();

// keyboard animation
const keyboard = document.querySelector(".keyboard-wrapper");
const animBody = document.querySelector(".animation-body");
const anim = document.querySelector(".animation");
const keyboardAnimation = () => {
  if (!anim.classList.contains("on")) {
    anim.classList.toggle("on");
    keyboard.classList.toggle("animationOn");
  } else {
    anim.classList.toggle("on");
    keyboard.classList.toggle("animationOn");
  }
};
animBody.onclick = keyboardAnimation;

// input
const display = document.querySelector(".keyboard-display");
const input = (btn) => {
  const capsStatus = document
    .querySelector("#CapsLock")
    .classList.contains("on");
  if (
    btn.classList.contains("letter-btn") ||
    btn.classList.contains("number-btn")
  ) {
    display.focus();

    if (shiftStatus && capsStatus) {
      display.setRangeText(
        `${btn.innerText.toLowerCase()}`,
        display.selectionStart,
        display.selectionEnd,
        "end"
      );
    } else {
      display.setRangeText(
        `${btn.innerText}`,
        display.selectionStart,
        display.selectionEnd,
        "end"
      );
    }
  } else if (btn.id === "Space") {
    display.focus();
    display.setRangeText(
      " ",
      display.selectionStart,
      display.selectionEnd,
      "end"
    );
  } else if (btn.id === "Backspace") {
    display.focus();
    if (display.selectionStart !== display.selectionEnd) {
      display.setRangeText(
        "",
        display.selectionStart,
        display.selectionEnd,
        "end"
      );
    } else {
      display.selectionStart -= 1;
      display.setRangeText("");
    }
  } else if (btn.id === "Delete") {
    display.focus();
    if (display.selectionStart !== display.selectionEnd) {
      display.setRangeText(
        "",
        display.selectionStart,
        display.selectionEnd,
        "end"
      );
    } else {
      display.selectionEnd += 1;
      display.setRangeText("");
    }
  } else if (btn.id === "Enter") {
    display.focus();
    display.setRangeText(
      "\n",
      display.selectionStart,
      display.selectionEnd,
      "end"
    );
  } else if (btn.id === "Tab") {
    display.focus();
    display.setRangeText(
      "\t",
      display.selectionStart,
      display.selectionEnd,
      "end"
    );
  } else if (btn.id === "←") {
    display.focus();
    display.selectionStart -= 1;
    display.selectionEnd -= 1;
  } else if (btn.id === "↑") {
    display.focus();
    display.selectionStart = 0;
    display.selectionEnd = 0;
  } else if (btn.id === "→") {
    display.focus();
    display.selectionEnd += 1;
    display.selectionStart += 1;
  } else if (btn.id === "↓") {
    display.focus();

    display.selectionStart = display.value.length;
    display.selectionEnd = display.value.length;
  }
};

// input by push
const pushInput = () => {
  document.addEventListener("keypress", (e) => {
    lettersList.forEach((btn) => {
      if (e.code === btn.getAttribute("keycode")) {
        e.preventDefault();
        input(btn);
      }
    });
  });
};
pushInput();

// input by click
const clickInput = () => {
  document.addEventListener("click", (e) => {
    btnList.forEach((btn) => {
      if (e.target === btn) {
        input(btn);
      }
    });
  });
};
clickInput();
