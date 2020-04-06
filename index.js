function changeEngSymbol(el) {
  let rez;
  switch (el) {
    case '`':
      rez = '~';
      break;
    case '1':
      rez = '!';
      break;
    case '2':
      rez = '@';
      break;
    case '3':
      rez = '#';
      break;
    case '4':
      rez = '$';
      break;
    case '5':
      rez = '%';
      break;
    case '6':
      rez = '^';
      break;
    case '7':
      rez = '&';
      break;
    case '8':
      rez = '*';
      break;
    case '9':
      rez = '(';
      break;
    case '0':
      rez = ')';
      break;
    case '-':
      rez = '_';
      break;
    case '=':
      rez = '+';
      break;
    case '[':
      rez = '{';
      break;
    case ']':
      rez = '}';
      break;
    case '\\':
      rez = '|';
      break;
    case '\'':
      rez = '"';
      break;
    case ',':
      rez = '<';
      break;
    case '.':
      rez = '>';
      break;
    case '/':
      rez = '?';
      break;
    case ';':
      rez = ':';
      break;
    default:
      rez = el;
  }
  return rez;
}

function changeRusSymbol(el) {
  let rez;
  switch (el) {
    case '1':
      rez = '!';
      break;
    case '2':
      rez = '"';
      break;
    case '3':
      rez = '№';
      break;
    case '4':
      rez = ';';
      break;
    case '5':
      rez = '%';
      break;
    case '6':
      rez = ':';
      break;
    case '7':
      rez = '?';
      break;
    case '8':
      rez = '*';
      break;
    case '9':
      rez = '(';
      break;
    case '0':
      rez = ')';
      break;
    case '-':
      rez = '_';
      break;
    case '=':
      rez = '+';
      break;
    case '\\':
      rez = '/';
      break;
    case '.':
      rez = ',';
      break;
    default:
      rez = el;
  }
  return rez;
}


class Tete {
  constructor(localLang) {
    if (localLang !== 'Eng' && localLang !== 'Rus') {
      this.localLang = 'Eng';
      localStorage.setItem('lang', this.localLang);
    } else { this.localLang = localLang; }
    this.localCase = 'Low';
    localStorage.setItem('case', this.localCase);
    this.Backspace = 'Backspace';
    this.Del = 'Del';
    this.Tab = 'Tab';
    this.Enter = 'Enter';
    this.Shift = 'shift';
    this.ArrowUp = '▲';
    this.ArrowLeft = '◄';
    this.ArrowDown = '▼';
    this.ArrowRight = '►';
    this.Shift = 'Shift';
    this.Ctrl = 'Ctrl';
    this.Win = 'Win';
    this.Alt = 'Alt';
    this.Space = 'Space';
    this.CapsLock = 'CapsLock';
    this.special = [
      this.Backspace,
      this.Del,
      this.Tab,
      this.Enter,
      this.Shift,
      this.ArrowUp,
      this.ArrowLeft,
      this.ArrowDown,
      this.ArrowRight,
      this.Shift,
      this.Ctrl,
      this.Win,
      this.Alt,
      this.Space,
      this.CapsLock,
    ];
    this.EngArr = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', this.Backspace,
      this.Tab, 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', this.Del,
      this.CapsLock, 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", this.Enter,
      this.Shift, 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', this.ArrowUp, this.Shift,
      this.Ctrl, this.Win, this.Alt, this.Space, this.Alt,
      this.ArrowLeft, this.ArrowDown, this.ArrowRight, this.Ctrl];

    this.RusArr = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', this.Backspace,
      this.Tab, 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', this.Del,
      this.CapsLock, 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', this.Enter,
      this.Shift, 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', this.ArrowUp, this.Shift,
      this.Ctrl, this.Win, this.Alt, this.Space, this.Alt,
      this.ArrowLeft, this.ArrowDown, this.ArrowRight, this.Ctrl];

    this.currArr = localLang === 'Eng' ? this.EngArr.map((el) => el) : this.RusArr.map((el) => el);
    if (this.localCase === 'Up') this.changeInUpperCase();
  }

  changeInUpperCase() {
    this.localCase = 'Up';
    this.currArr = this.currArr.map((el) => {
      if (this.special.indexOf(el) >= 0) return el;
      if (el === el.toUpperCase()) { return this.localLang === 'Eng' ? changeEngSymbol(el) : changeRusSymbol(el); }
      return el.toUpperCase();
    });
  }

  changeInLowerCase() {
    this.localCase = 'Low';
    this.currArr = this.localLang === 'Eng' ? this.EngArr.map((el) => el) : this.RusArr.map((el) => el);
  }

  changeCase() {
    if (this.localCase === 'Low') {
      this.changeInUpperCase();
    } else {
      this.changeInLowerCase();
    }
  }

  changeLang() {
    if (this.localLang === 'Eng') {
      this.localLang = 'Rus';
      this.currArr = this.RusArr.map((el) => el);
    } else {
      this.localLang = 'Eng';
      this.currArr = this.EngArr.map((el) => el);
    }
    if (this.localCase === 'Up') { this.changeInUpperCase(); }
    localStorage.setItem('lang', this.localLang);
  }
}

const keyboardCodes = [[192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 173, 61, 8],
  [9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46],
  [20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13],
  [16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16],
  [17, 91, 18, 32, 18, 37, 40, 39, 17]];


function generateHtml() {
  const textArea = document.createElement('textarea');
  const container = document.createElement('div');
  container.classList.add('container');

  const keyboard = document.createElement('div');

  keyboard.classList.add('keyboard');
  container.append(textArea);

  keyboardCodes.forEach((el) => {
    const row = document.createElement('div');
    row.classList.add('row');
    el.forEach((code) => {
      const text = document.createTextNode(code);
      const key = document.createElement('div');
      key.classList.add(`key${code}`, 'key');
      if (code === 20 || code === 8 || code === 13 || code === 16) {
        key.classList.add('bigKey');
      }
      if (code === 32) {
        key.classList.add('space');
      }

      const textInKey = document.createElement('div');
      textInKey.classList.add('textInKey');
      textInKey.appendChild(text);
      key.appendChild(textInKey);
      row.appendChild(key);
    });
    keyboard.appendChild(row);
  });
  const changeLanguage = document.createTextNode('alt + ctrl - change language');
  container.append(keyboard, changeLanguage);
  document.body.append(container);
}

generateHtml();

const local = new Tete(localStorage.getItem('lang'));
const KEYS = document.querySelectorAll('.key');
const textarea = document.querySelector('textarea');

function refreshKeyboard() {
  for (let i = 0; i < KEYS.length; i += 1) {
    KEYS[i].childNodes[0].childNodes[0].textContent = local.currArr[i];
  }
}

refreshKeyboard();

function ProcessKeyDown(activeKey, textInKey) {
  if (textInKey === 'CapsLock') {
    activeKey.classList.toggle('active');
    local.changeCase();
    refreshKeyboard();
    return;
  }
  if (textInKey === 'Shift') {
    activeKey.classList.add('active');
    local.changeCase();
    refreshKeyboard();
    return;
  }
  activeKey.classList.add('active');
  let textToTextarea = textInKey;
  if (textInKey === 'Tab') textToTextarea = '\t';
  if (textInKey === 'Space') textToTextarea = ' ';
  if (textInKey === 'Enter') textToTextarea = '\n';
  if (textInKey === 'Ctrl' || textInKey === 'Alt' || textInKey === 'Win') textToTextarea = '';
  if (textInKey === 'Backspace' || textInKey === 'Del') {
    textarea.textContent = textarea.textContent.substr(0, textarea.textContent.length - 1);
    return;
  }
  textarea.textContent += textToTextarea;
}
document.addEventListener('keydown', (event) => {
  event.preventDefault();
  const activeKey = document.querySelector(`.key${event.keyCode}`);
  if (!activeKey) return;
  const textInKey = activeKey.querySelector('.textInKey').textContent;
  if (event.ctrlKey && event.altKey) {
    activeKey.classList.add('active');
    local.changeLang();
    refreshKeyboard();
    return;
  }
  ProcessKeyDown(activeKey, textInKey);
});

document.addEventListener('keyup', (event) => {
  if (event.keyCode === '20') {
    return;
  }
  const activeKey = document.querySelector(`.key${event.keyCode}`);
  if (!activeKey) return;
  activeKey.classList.toggle('active');
});

KEYS.forEach((el) => {
  el.addEventListener('mousedown', (event) => {
    const activeKey = event.currentTarget;
    const textInKey = activeKey.querySelector('.textInKey').textContent;
    ProcessKeyDown(activeKey, textInKey);
  });
  el.addEventListener('mouseup', (event) => {
    if (event.currentTarget.querySelector('.textInKey').textContent === 'CapsLock') {
      return;
    }
    event.currentTarget.classList.remove('active');
  });
});
