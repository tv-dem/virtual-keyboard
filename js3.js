class tete{
    constructor(localLang, localCase){
        this.localLang = localLang;
        this.localCase = localCase;
        this.Backspace = 'Backspace';
        this.Del = 'Del';
        this.Tab = 'Tab'
        this.Enter = 'Enter';
        this.Shift = 'shift'
        this.ArrowUp = '▲' 
        this.ArrowLeft = '◄'
        this.ArrowDown = '▼'
        this.ArrowRight = '►'
        this.Shift = 'Shift'
        this.Ctrl = 'Ctrl'
        this.Win = 'Win'
        this.Alt = 'Alt'
        this.Space = 'Space'
        this.CapsLock = 'CapsLock'
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
        ]
        this.EngArr = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", this.Backspace,
        this.Tab, "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", this.Del, 
        this.CapsLock, "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", this.Enter,
        this.Shift, "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", this.ArrowUp, this.Shift,
        this.Ctrl, this.Win, this.Alt, this.Space, this.Alt, this.ArrowLeft, this.ArrowDown, this.ArrowRight, this.Ctrl]
        
        this.RusArr = ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", this.Backspace,
        this.Tab, "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", this.Del, 
        this.CapsLock,  "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", this.Enter,
        this.Shift, "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", this.ArrowUp, this.Shift,
        this.Ctrl, this.Win, this.Alt, this.Space, this.Alt, this.ArrowLeft, this.ArrowDown, this.ArrowRight, this.Ctrl]

        this.currArr = localLang == 'Eng' ? this.EngArr.map(el => el) : this.RusArr.map(el => el)
        if(this.localCase == 'Up') this.changeInUpperCase();
        
    }
    changeEngSymbol(el){
        switch(el){
            case '`':
                return '~';                 
            case '1':
                 return '!';                 
            case '2':
                 return '@';                 
            case '3':
                 return '#';                 
            case '4':
                 return '$';                 
            case '5':
                 return '%';                 
            case '6':
                 return '^';                 
            case '7':
                 return '&';                 
            case '8':
                 return '*';                 
            case '9':
                 return '(';                 
            case '0':
                 return ')';                
            case '-':
                 return '_';                 
            case '=':
                 return '+';                 
            case '[':
                 return '{';                 
            case ']':
                 return '}';                 
            case '\\':
                 return '|';                 
            case '\'':
                 return '"';                 
            case ',':
                 return '<';                 
            case '.':
                 return '>';                 
            case '/':
                 return '?';     
            case ';':
                return ':';

        }
    }
    changeRusSymbol(el){
        switch(el){              
            case '1':
                 return '!';                 
            case '2':
                 return '"';                 
            case '3':
                 return '№';                 
            case '4':
                 return ';';                 
            case '5':
                 return '%';                 
            case '6':
                 return ':';                 
            case '7':
                 return '?';                 
            case '8':
                 return '*';                 
            case '9':
                 return '(';                 
            case '0':
                 return ')';                
            case '-':
                 return '_';                 
            case '=':
                 return '+';            
            case '\\':
                 return '/';               
            case '.':
                 return '.';                 
            case ',':
        }
    }
    changeInUpperCase(){
        this.localCase = 'Up'
            this.currArr = this.currArr.map(el => {
                if(this.special.indexOf(el) >= 0) return el
                if(el == el.toUpperCase())
                    return this.localLang == 'Eng' ? this.changeEngSymbol(el) : this.changeRusSymbol(el);   
                else 
                    return el.toUpperCase();
            })
    }
    changeInLowerCase(){
        this.localCase = 'Low'
        this.currArr = this.localLang == 'Eng' ? this.EngArr.map(el => el) : this.RusArr.map(el => el);
    }
    changeCase(){
        if(this.localCase == 'Low'){
            this.changeInUpperCase();
        }
        else{
            this.changeInLowerCase();
        }
    }
    changeLang(){
        if(this.localLang == 'Eng'){
            this.localLang = 'Rus'
            this.currArr =  this.RusArr.map(el=>el)
        }
        else{
            this.localLang = 'Eng'
            this.currArr =  this.EngArr.map(el=>el);
        }
        if(this.localCase == 'Up')
            this.changeInUpperCase();
    }
    
}

let keyboardCodes = [[192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 173, 61, 8],
[9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46],
[20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13],
[16,90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16],
[ 17, 91, 18, 32, 18, 37, 40, 39, 17]];

foo()

function foo(){
    let textArea = document.createElement('textarea')
    let container = document.createElement('div');
    container.classList.add('container');

    let keyboard = document.createElement('div')

    keyboard.classList.add('keyboard')
    container.append(textArea)

    keyboardCodes.forEach((el)=>{
        let row = document.createElement('div');
        row.classList.add('row');
        el.forEach(code => {
            let text = document.createTextNode(code);
            let key = document.createElement('div');
            key.classList.add(`key${code}`, 'key');
            if( code=='20'|| code=='8'|| code=='13'|| code=='16'){
                key.classList.add('bigKey');
            }
            if( code=='32'){
                key.classList.add('space');
            }

            let textInKey = document.createElement('div');
            textInKey.classList.add('textInKey')
            textInKey.appendChild(text);
            key.appendChild(textInKey);
            row.appendChild(key);
        })
        keyboard.appendChild(row);
    })
    container.appendChild(keyboard);
    document.body.appendChild(container)
}

let local = new tete('Eng', 'Low')
let KEYS = document.querySelectorAll('.key');
let textarea = document.querySelector('textarea');
refreshKeyboard()

function refreshKeyboard() {
    KEYS.forEach((el, i) => {
        el.childNodes[0].childNodes[0].textContent = local.currArr[i]
    })   
}

function ProcessKeyDown(activeKey, textInKey){
     if(textInKey == 'CapsLock'){
          activeKey.classList.toggle('active')
          local.changeCase()
          refreshKeyboard()
          return;
      } 
      if(textInKey == 'Shift'){
          activeKey.classList.add('active')
          local.changeCase()
          refreshKeyboard()   
          return;
      }
      activeKey.classList.add('active')
      if(textInKey == 'Tab') textInKey = '\t';
      if(textInKey == 'Space') textInKey = ' ';
      if(textInKey == 'Enter') textInKey = '\n'
      if(textInKey == 'Ctrl' || textInKey == 'Alt' || textInKey == 'Win') textInKey = '';
      if(textInKey == 'Backspace' || textInKey == 'Del') {
          textarea.textContent = textarea.textContent.substr(0, textarea.textContent.length - 1)
          return;
      }
      textarea.textContent += textInKey;
}
document.addEventListener('keydown', function(event){
     event.preventDefault()
     let activeKey = document.querySelector(`.key${event.keyCode}`); 
     let textInKey = activeKey.querySelector('.textInKey').textContent;
     if(event.ctrlKey && event.altKey){
         activeKey.classList.add('active')
         local.changeLang();
         refreshKeyboard();
         return;
     } 
     ProcessKeyDown(activeKey, textInKey);
 });

document.addEventListener('keyup', (event)=>{
     if(event.keyCode == '20'){
          return;
      } 
    let activeKey = document.querySelector(`.key${event.keyCode}`); 
    activeKey.classList.toggle('active');
})

KEYS.forEach(el=>{
     el.addEventListener('mousedown', (event)=>{
          let activeKey = event.currentTarget;
          let textInKey = activeKey.querySelector('.textInKey').textContent;
          ProcessKeyDown(activeKey, textInKey)
     })
     el.addEventListener('mouseup', (event)=>{
          if(event.currentTarget.querySelector('.textInKey').textContent == 'CapsLock'){
          return;
      } 
          event.currentTarget.classList.remove('active')
     })
})