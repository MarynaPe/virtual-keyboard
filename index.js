"use strict";

(() => {
  const keys = [
    { type: "char", code: "Backquote", key: { Eng: "`", Ru: "Ё" }, shift: { Eng: "~", Ru: null } },
    { type: "digit", code: "Digit1", key: { Eng: "1", Ru: "1" }, shift: { Eng: "!", Ru: "!" } },
    { type: "digit", code: "Digit2", key: { Eng: "2", Ru: "2" }, shift: { Eng: "@", Ru: '"' } },
    { type: "digit", code: "Digit3", key: { Eng: "3", Ru: "3" }, shift: { Eng: "#", Ru: "№" } },
    { type: "digit", code: "Digit4", key: { Eng: "4", Ru: "4" }, shift: { Eng: "$", Ru: ";" } },
    { type: "digit", code: "Digit5", key: { Eng: "5", Ru: "5" }, shift: { Eng: "%", Ru: "%" } },
    { type: "digit", code: "Digit6", key: { Eng: "6", Ru: "6" }, shift: { Eng: "^", Ru: ":" } },
    { type: "digit", code: "Digit7", key: { Eng: "7", Ru: "7" }, shift: { Eng: "&", Ru: "?" } },
    { type: "digit", code: "Digit8", key: { Eng: "8", Ru: "8" }, shift: { Eng: "*", Ru: "*" } },
    { type: "digit", code: "Digit9", key: { Eng: "9", Ru: "9" }, shift: { Eng: "(", Ru: "(" } },
    { type: "digit", code: "Digit0", key: { Eng: "0", Ru: "0" }, shift: { Eng: ")", Ru: ")" } },
    { type: "char", code: "Minus", key: { Eng: "-", Ru: "-" }, shift: { Eng: "_", Ru: "_" } },
    { type: "char", code: "Equal", key: { Eng: "=", Ru: "=" }, shift: { Eng: "+", Ru: "+" } },
    { type: "modifier", code: "Backspace", key: { Eng: "BACKSPACE", Ru: "BACKSPACE" }, shift: { Eng: null, Ru: null } },
    { type: "modifier", code: "Tab", key: { Eng: "TAB", Ru: "TAB" }, shift: { Eng: null, Ru: null } },
    { type: "char", code: "KeyQ", key: { Eng: "Q", Ru: "Й" }, shift: { Eng: null, Ru: null } },
    { type: "char", code: "KeyW", key: { Eng: "W", Ru: "Ц" }, shift: { Eng: null, Ru: null } },
    { type: "char", code: "KeyE", key: { Eng: "E", Ru: "У" }, shift: { Eng: null, Ru: null } },
    { type: "char", code: "KeyR", key: { Eng: "R", Ru: "К" }, shift: { Eng: null, Ru: null } },
    { type: "char", code: "KeyT", key: { Eng: "T", Ru: "Е" }, shift: { Eng: null, Ru: null } },
    { type: "char", code: "KeyY", key: { Eng: "Y", Ru: "Н" }, shift: { Eng: null, Ru: null } },
    { type: "char", code: "KeyU", key: { Eng: "U", Ru: "Г" }, shift: { Eng: null, Ru: null } },
    { type: "char", code: "KeyI", key: { Eng: "I", Ru: "Ш" }, shift: { Eng: null, Ru: null } },
    { type: "char", code: "KeyO", key: { Eng: "O", Ru: "Щ" }, shift: { Eng: null, Ru: null } },
    { type: "char", code: "KeyP", key: { Eng: "P", Ru: "З" }, shift: { Eng: null, Ru: null } },
    { type: "char", code: "BracketLeft", key: { Eng: "[", Ru: "Х" }, shift: { Eng: "{", Ru: null } },
    { type: "char", code: "BracketRight", key: { Eng: "]", Ru: "Ъ" }, shift: { Eng: "}", Ru: null } },
    { type: "char", code: "Backslash", key: { Eng: "\\", Ru: "\\" }, shift: { Eng: "|", Ru: "/" } },
    { type: "modifier", code: "Delete", key: { Eng: "DEL", Ru: "DEL" }, shift: { Eng: null, Ru: null } },
    { type: "modifier", code: "CapsLock", key: { Eng: "CAPS LOCK", Ru: "CAPS LOCK" }, shift: { Eng: null, Ru: null } },
    { type: "char", code: "KeyA", key: { Eng: "A", Ru: "Ф" }, shift: { Eng: null, Ru: null } },
    { type: "char", code: "KeyS", key: { Eng: "S", Ru: "Ы" }, shift: { Eng: null, Ru: null } },
    { type: "char", code: "KeyD", key: { Eng: "D", Ru: "В" }, shift: { Eng: null, Ru: null } },
    { type: "char", code: "KeyF", key: { Eng: "F", Ru: "А" }, shift: { Eng: null, Ru: null } },
    { type: "char", code: "KeyG", key: { Eng: "G", Ru: "П" }, shift: { Eng: null, Ru: null } },
    { type: "char", code: "KeyH", key: { Eng: "H", Ru: "Р" }, shift: { Eng: null, Ru: null } },
    { type: "char", code: "KeyJ", key: { Eng: "J", Ru: "О" }, shift: { Eng: null, Ru: null } },
    { type: "char", code: "KeyK", key: { Eng: "K", Ru: "Л" }, shift: { Eng: null, Ru: null } },
    { type: "char", code: "KeyL", key: { Eng: "L", Ru: "Д" }, shift: { Eng: null, Ru: null } },
    { type: "char", code: "Semicolon", key: { Eng: ";", Ru: "Ж" }, shift: { Eng: ":", Ru: null } },
    { type: "char", code: "Quote", key: { Eng: "'", Ru: "Э" }, shift: { Eng: '"', Ru: null } },
    { type: "modifier", code: "Enter", key: { Eng: "ENTER", Ru: "ENTER" }, shift: { Eng: null, Ru: null } },
    { type: "modifier", code: "ShiftLeft", key: { Eng: "SHIFT", Ru: "SHIFT" }, shift: { Eng: null, Ru: null } },
    { type: "char", code: "KeyZ", key: { Eng: "Z", Ru: "Я" }, shift: { Eng: null, Ru: null } },
    { type: "char", code: "KeyX", key: { Eng: "X", Ru: "Ч" }, shift: { Eng: null, Ru: null } },
    { type: "char", code: "KeyC", key: { Eng: "C", Ru: "С" }, shift: { Eng: null, Ru: null } },
    { type: "char", code: "KeyV", key: { Eng: "V", Ru: "М" }, shift: { Eng: null, Ru: null } },
    { type: "char", code: "KeyB", key: { Eng: "B", Ru: "И" }, shift: { Eng: null, Ru: null } },
    { type: "char", code: "KeyN", key: { Eng: "N", Ru: "Т" }, shift: { Eng: null, Ru: null } },
    { type: "char", code: "KeyM", key: { Eng: "M", Ru: "Ь" }, shift: { Eng: null, Ru: null } },
    { type: "char", code: "Comma", key: { Eng: ",", Ru: "Б" }, shift: { Eng: "<", Ru: null } },
    { type: "char", code: "Period", key: { Eng: ".", Ru: "Ю" }, shift: { Eng: ">", Ru: null } },
    { type: "char", code: "Slash", key: { Eng: "/", Ru: "." }, shift: { Eng: "?", Ru: "," } },
    { type: "char", code: "ArrowUp", key: { Eng: "&#9650", Ru: "&#9650" }, shift: { Eng: null, Ru: null } },
    { type: "modifier", code: "ShiftRight", key: { Eng: "SHIFT", Ru: "SHIFT" }, shift: { Eng: null, Ru: null } },
    { type: "modifier", code: "ControlLeft", key: { Eng: "CTRL", Ru: "CTRL" }, shift: { Eng: null, Ru: null } },
    { type: "modifier", code: "AltLeft", key: { Eng: "ALT", Ru: "ALT" }, shift: { Eng: null, Ru: null } },
    { type: "modifier", code: "Space", key: { Eng: " ", Ru: " " }, shift: { Eng: null, Ru: null } },
    { type: "modifier", code: "AltRight", key: { Eng: "ALT", Ru: "ALT" }, shift: { Eng: null, Ru: null } },
    { type: "modifier", code: "ControlRight", key: { Eng: "CTRL", Ru: "CTRL" }, shift: { Eng: null, Ru: null } },
    { type: "char", code: "ArrowLeft", key: { Eng: "&#9668", Ru: "&#9668" }, shift: { Eng: null, Ru: null } },
    { type: "char", code: "ArrowDown", key: { Eng: "&#9660", Ru: "&#9660" }, shift: { Eng: null, Ru: null } },
    { type: "char", code: "ArrowRight", key: { Eng: "&#9658", Ru: "&#9658" }, shift: { Eng: null, Ru: null } },
    { type: "meta", code: "Fn", key: { Eng: "FN", Ru: "FN" }, shift: { Eng: null, Ru: null } },
  ];
  class k {
    constructor(keys, k) {
      (this.type = keys.type),
        (this.code = keys.code),
        (this.key = keys.key),
        (this.shift = keys.shift),
        (this.capsStatus = k.capsStatus),
        (this.shiftStatus = k.shiftStatus),
        (this.ctrlStatus = k.ctrlStatus),
        (this.altStatus = k.altStatus),
        (this.langStatus = k.langStatus);
    }
    createButton() {
      const keys = document.createElement("button");

      return (
        keys.setAttribute("type", "button"),
        keys.setAttribute("data-code", this.code),
        keys.classList.add("key__item"),
        "CapsLock" !== this.code || this.capsStatus ? "CapsLock" === this.code && this.capsStatus && keys.classList.add("key__round", "key__round_active") : keys.classList.add("key__round"),
        this.capsStatus && !this.shiftStatus
          ? (keys.innerHTML = this.key[this.langStatus].toUpperCase())
          : this.capsStatus && this.shiftStatus
            ? this.shift[this.langStatus]
              ? (keys.innerHTML = this.shift[this.langStatus])
              : "char" === this.type
                ? (keys.innerHTML = this.key[this.langStatus].toLowerCase())
                : (keys.innerHTML = this.key[this.langStatus])
            : this.shiftStatus && !this.shift[this.langStatus]
              ? (keys.innerHTML = this.key[this.langStatus].toUpperCase())
              : this.shiftStatus && this.shift[this.langStatus]
                ? (keys.innerHTML = this.shift[this.langStatus])
                : this.shiftStatus || "char" !== this.type
                  ? (keys.innerHTML = this.key[this.langStatus])
                  : (keys.innerHTML = this.key[this.langStatus].toLowerCase()),
        keys
      );
    }
  }
  class n {
    constructor(keys) {
      (this.nodeName = keys.target.nodeName),
        (this.newEventCode = keys.target.dataset.code),
        (this.type = ""),
        (this.newEventValue = ""),
        (this.eventInner = keys.target.innerHTML),
        (this.eventInnerType = ""),
        (this.eventType = keys.type),
        (this.eventCode = keys.target.dataset.code);
    }
    isTargetButton() {
      return "BUTTON" === this.nodeName;
    }
    getInnerType(keys) {
      keys.forEach((keys) => {
        keys.code === this.newEventCode && (this.eventInnerType = keys.type);
      });
    }
    getNewEventValue() {
      "char" === this.eventInnerType || "digit" === this.eventInnerType ? (this.newEventValue = this.eventInner) : "ENTER" === this.eventInner ? (this.newEventValue = "\n") : "TAB" === this.eventInner && (this.newEventValue = "  ");
    }
    getNewEventType() {
      "mousedown" === this.eventType ? (this.type = "keydown") : ("mouseup" !== this.eventType && "mouseout" !== this.eventType) || (this.type = "keyup");
    }
  }
  ({
    elements: { main: null, textArea: null, title: null },

    init() {
      (this.elements.main = document.createElement("main")),
        (this.elements.textArea = document.createElement("textarea")),
        (this.elements.title = document.createElement("h1")),

        this.elements.main.classList.add("textarea"),
        this.elements.title.classList.add("textarea__title"),
        this.elements.textArea.classList.add("textarea__keyboard"),
        this.elements.textArea.setAttribute("name", "area"),
        this.elements.textArea.setAttribute("autofocus", ""),
        (this.elements.title.innerHTML = "Virtual Keyboard"),

        document.body.classList.add("wrapper"),
        document.body.prepend(this.elements.main),
        this.elements.main.prepend(this.elements.title),

        this.elements.main.append(this.elements.textArea);

    },
  }.init());

  const s = {
    elements: { main: null, mainContainer: null, keysContainer: null, keys: new Set(), activeButtons: new Set(), inputArea: document.querySelector("textarea"), description: null },
    properties: { value: "", capsStatus: !1, shiftStatus: !1, ctrlStatus: !1, altStatus: !1, langStatus: "Eng", cursorPosition: 0, arrowStatus: "nav" },
    init() {
      (this.elements.main = document.createElement("section")),
        (this.elements.mainContainer = document.createElement("div")),
        (this.elements.keysContainer = document.createElement("div")),
        this.elements.main.classList.add("keyboard"),
        this.elements.mainContainer.classList.add("keyboard__wrapper"),
        this.elements.keysContainer.classList.add("keys__list", "keys"),

        this.elements.keysContainer.append(this.createKeys()),
        this.elements.mainContainer.append(this.elements.keysContainer),
        this.elements.main.append(this.elements.mainContainer),


        (this.elements.description = document.createElement("p")),
        this.elements.description.classList.add("description"),
        (this.elements.description.innerHTML = '<span style="color:green">Keyboard was made on Windows.<br>Shortcut:&nbsp;</span> <mark>Shift</mark> for symbol/numbers;&nbsp;  <mark>Ctrl+Alt</mark> - for change language;&nbsp;  <mark>Fn</mark> - for arrows (symbol or navigation).'),

        document.body.append(this.elements.main);
      this.elements.main.after(this.elements.description);

    },
    refresh() {
      (this.elements.keysContainer = document.querySelector(".keys__list")), (this.elements.keysContainer.innerHTML = ""), this.elements.keysContainer.append(this.createKeys());
    },
    input(keys) {
      const k = s.elements.inputArea.selectionStart,
        n = s.elements.inputArea.selectionEnd;
      this.getCursorPosition(keys.length), (this.elements.inputArea.value = this.elements.inputArea.value.slice(0, k) + keys + this.elements.inputArea.value.slice(n)), this.setCursorPosition(0);
    },
    createKeys() {
      const n = document.createDocumentFragment();
      return (
        keys.forEach((keys) => {
          const i = new k(keys, this.properties),
            a = i.createButton();
          !(function (keys, k) {
            switch ((s.elements.activeButtons.has(keys) && k.classList.add("key_active"), keys)) {
              case "Backspace":
              case "Enter":
                k.classList.add("key-black", "key_large");
                break;
              case "ShiftLeft":
              case "ShiftRight":
                k.classList.add("key-black", "key_medium");
                break;
              case "CapsLock":
                k.classList.add("key-black", "key_medium");
                break;
              case "Tab":
              case "Delete":
              case "Fn":
                k.classList.add("key-black", "key_x-small");
                break;
              case "ControlLeft":
              case "ControlRight":
                k.classList.add("key-black", "key_small");
                break;
              case "ArrowUp":
              case "ArrowRight":
              case "ArrowLeft":
              case "ArrowDown":
              case "AltLeft":
              case "AltRight":
              case "Backquote":
                k.classList.add("key-black");
                break;
              case "Space":
                k.classList.add("key_x-large");
            }
          })(i.code, a),
            s.elements.keys.add(i.code),
            n.append(a);
        }),
        n
      );
    },
    listen() {
      document.body.addEventListener("keydown", this.trigerKeyboardEvent),
        document.body.addEventListener("keyup", this.trigerKeyboardEvent),
        this.elements.inputArea.addEventListener("focusout", () => this.focusBack()),
        this.elements.keysContainer.addEventListener("mousedown", this.trigerMouseEvent),
        document.addEventListener("visibilitychange", () => this.windowFocusoutAction());
    },
    focusBack() {
      s.elements.inputArea.focus();
    },
    windowFocusoutAction() {
      this.elements.activeButtons.clear(), this.refresh();
    },
    trigerMouseEvent(k) {
      const i = new n(k);
      if (i.isTargetButton()) {
        i.getInnerType(keys), i.getNewEventType();
        const n = ["ControlLeft", "ControlRight", "AltLeft", "AltRight", "ShiftLeft", "ShiftRight"];
        "mousedown" === k.type && s.elements.activeButtons.has(i.eventCode)
          ? (s.elements.keysContainer.addEventListener("mouseout", s.trigerMouseEvent), s.elements.keysContainer.addEventListener("mouseup", s.trigerMouseEvent))
          : "mousedown" !== k.type || n.includes(i.eventCode)
            ? ("mouseup" !== k.type && "mouseout" !== k.type) || (s.elements.keysContainer.removeEventListener("mouseup", s.trigerMouseEvent), s.elements.keysContainer.removeEventListener("mouseout", s.trigerMouseEvent))
            : (s.elements.keysContainer.addEventListener("mouseout", s.trigerMouseEvent), s.elements.keysContainer.addEventListener("mouseup", s.trigerMouseEvent));
        const a = new KeyboardEvent(i.type, { code: i.newEventCode });
        document.body.dispatchEvent(a);
      }
    },
    trigerKeyboardEvent(keys) {
      switch ((s.makeButtonActive(keys), keys.code)) {
        case "ShiftLeft":
        case "ShiftRight":
          s.toggleShiftStatus(keys);
          break;
        case "CapsLock":
          s.toggleCapsStatus(keys);
          break;
        case "AltLeft":
        case "AltRight":
          keys.preventDefault(), s.toggleAltStatus(keys), s.toggleLangStatus();
          break;
        case "ControlLeft":
        case "ControlRight":
          s.toggleControlStatus(keys), s.toggleLangStatus();
          break;
        case "Backspace":
          keys.preventDefault(), s.backspaceAction(keys);
          break;
        case "Delete":
          keys.preventDefault(), s.deleteAction(keys);
          break;
        case "Enter":
        case "Fn":
        case "Tab":
          keys.preventDefault(), s.newKeyboardEvent(keys);
          break;
        case "ArrowUp":
          keys.preventDefault(), "nav" === s.properties.arrowStatus ? s.moveCursorUp(keys) : s.newKeyboardEvent(keys);
          break;
        case "ArrowRight":
          keys.preventDefault(), "nav" === s.properties.arrowStatus ? s.moveCursorRight(keys) : s.newKeyboardEvent(keys);
          break;
        case "ArrowLeft":
          keys.preventDefault(), "nav" === s.properties.arrowStatus ? s.moveCursorLeft(keys) : s.newKeyboardEvent(keys);
          break;
        case "ArrowDown":
          keys.preventDefault(), "nav" === s.properties.arrowStatus ? s.moveCursorDown(keys) : s.newKeyboardEvent(keys);
          break;
        default:
          !s.properties.ctrlStatus && s.elements.keys.has(keys.code) && (keys.preventDefault(), s.newKeyboardEvent(keys));
      }
    },
    deleteAction(keys) {
      if ("keydown" === keys.type) {
        this.getCursorPosition(0);
        let keys = 0;
        const t = s.elements.inputArea.selectionStart,
          n = s.elements.inputArea.selectionEnd,
          { inputArea: i } = s.elements;
        (keys = t === n ? n + 1 : n), (i.value = i.value.slice(0, t) + i.value.slice(keys)), this.setCursorPosition(0);
      }
    },
    backspaceAction(keys) {
      if ("keydown" === keys.type) {
        let keys = 0;
        const t = s.elements.inputArea.selectionStart,
          n = s.elements.inputArea.selectionEnd,
          { inputArea: i } = s.elements;
        (keys = t === n ? t - 1 : t), (i.value = i.value.slice(0, keys) + i.value.slice(n)), (s.properties.cursorPosition = t), t === n ? s.setCursorPosition(-1) : s.setCursorPosition(0);
      }
    },
    moveCursorLeft(keys) {
      "keydown" === keys.type && (s.getCursorPosition(-1), s.setCursorPosition(0));
    },
    moveCursorUp(keys) {
      if ("keydown" === keys.type) {
        s.getCursorPosition(0);
        const keys = s.elements.inputArea.value.lastIndexOf("\n", s.properties.cursorPosition - 1);
        (s.properties.cursorPosition = keys), s.setCursorPosition(0);
      }
    },
    moveCursorDown(keys) {
      if ("keydown" === keys.type) {
        s.getCursorPosition(0);
        const keys = s.elements.inputArea.value.indexOf("\n", s.properties.cursorPosition + 1);
        (s.properties.cursorPosition = keys), s.setCursorPosition(0);
      }
    },
    moveCursorRight(keys) {
      "keydown" === keys.type && (s.getCursorPosition(1), s.setCursorPosition(0));
    },
    setCursorPosition(keys) {
      (s.elements.inputArea.selectionStart = s.properties.cursorPosition + keys), (s.elements.inputArea.selectionEnd = s.properties.cursorPosition + keys);
    },
    getCursorPosition(keys) {
      s.properties.cursorPosition = s.elements.inputArea.selectionStart + keys;
    },
    newKeyboardEvent(keys) {
      if ("keydown" === keys.type) {
        let t = "";
        "Tab" === keys.code
          ? (t = "\t")
          : "Enter" === keys.code
            ? (t = "\n")
            : "Fn" === keys.code
              ? (s.properties.arrowStatus = "nav" === s.properties.arrowStatus ? "text" : "nav")
              : (t = document.querySelector(`button[data-code=${keys.code}]`).innerHTML),
          s.input(t);
      }
    },
    toggleCapsStatus(keys) {
      "keydown" === keys.type && (!0 === this.properties.capsStatus ? (this.properties.capsStatus = !1) : (this.properties.capsStatus = !0), s.refresh());
    },
    toggleShiftStatus(keys) {
      s.elements.activeButtons.has("ShiftLeft") && s.elements.activeButtons.has("ShiftRight")
        ? setTimeout(() => {
          s.elements.activeButtons.delete("ShiftLeft"), s.elements.activeButtons.delete("ShiftRight"), (s.properties.shiftStatus = !1), s.refresh();
        }, 100)
        : "keydown" === keys.type
          ? (this.properties.shiftStatus = !0)
          : "keyup" === keys.type && (this.properties.shiftStatus = !1),
        s.refresh();
    },
    toggleControlStatus(keys) {
      s.elements.activeButtons.has("ControlLeft") && s.elements.activeButtons.has("ControlRight")
        ? setTimeout(() => {
          s.elements.activeButtons.delete("ControlLeft"), s.elements.activeButtons.delete("ControlRight"), (s.properties.ctrlStatus = !1), s.refresh();
        }, 100)
        : "keydown" === keys.type
          ? (this.properties.ctrlStatus = !0)
          : "keyup" === keys.type && (this.properties.ctrlStatus = !1);
    },
    toggleAltStatus(keys) {
      s.elements.activeButtons.has("AltLeft") && s.elements.activeButtons.has("AltRight")
        ? setTimeout(() => {
          s.elements.activeButtons.delete("AltLeft"), s.elements.activeButtons.delete("AltRight"), (s.properties.altStatus = !1), s.refresh();
        }, 100)
        : "keydown" === keys.type
          ? (this.properties.altStatus = !0)
          : "keyup" === keys.type && (this.properties.altStatus = !1);
    },
    toggleLangStatus() {
      this.properties.altStatus &&
        this.properties.ctrlStatus &&
        ((this.properties.langStatus = "Eng" === this.properties.langStatus ? "Ru" : "Eng"),
          s.refresh(),
          setTimeout(() => {
            s.elements.activeButtons.delete("ControlLeft"),
              s.elements.activeButtons.delete("ControlRight"),
              s.elements.activeButtons.delete("AltLeft"),
              s.elements.activeButtons.delete("AltRight"),
              (s.properties.altStatus = !1),
              (s.properties.ctrlStatus = !1),
              s.refresh();
          }, 100)),
        s.setCurrentLang();
    },
    makeButtonActive(keys) {
      "keydown" === keys.type ? (s.elements.activeButtons.add(keys.code), s.refresh()) : "keyup" === keys.type && (s.elements.activeButtons.delete(keys.code), s.refresh());
    },
    getCurrentLang() {
      localStorage.lang || (localStorage.lang = "Eng"), (s.properties.langStatus = localStorage.lang), s.refresh();
    },
    setCurrentLang() {
      localStorage.lang = this.properties.langStatus;
    },
  };
  window.addEventListener("DOMContentLoaded", () => {
    s.init(), s.getCurrentLang(), s.listen();
  });
})();