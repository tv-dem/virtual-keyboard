// let names = ['sdfsdf', 'sdfsdf', 'aaaaaaa', 'bbbbbbb']
// let ul = document.createElement('ul');
// let li = names.map((el) => document.createElement('li').appendChild(document.createTextNode('SDFSDF')));
// console.log(li)
// document.body.append(li)

let textArea = document.createElement('textarea')
let container = document.createElement('div');
container.classList.add('container');

let keyboard = document.createElement('div')

keyboard.classList.add('keyboard')
container.append(textArea)
container.appendChild(keyboard)

mas = [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 122, 120, 99, 118, 98, 110, 109, 44, 46]

mas.forEach(element => {
    let keyButton = document.createElement('div')
    let text = document.createTextNode(String.fromCharCode(element))
    keyButton.classList.add('key')
    keyButton.classList.add(`Key${element}`)
    keyButton.appendChild(text);
    keyButton.addEventListener('mousedown', function(){
        this.classList.toggle('active')
        textArea.textContent += keyButton.childNodes[0].textContent
    })
    keyButton.addEventListener('mouseup', function(){
        this.classList.remove('active')
    })
    keyboard.appendChild(keyButton)
});


document.addEventListener('keydown', (e)=>{
    e.preventDefault();
    let code = e.key.charCodeAt();
    document.querySelector(`.Key${code}`).classList.add('active')
    textArea.textContent += e.key;
})

document.addEventListener('keyup', (e)=>{
    let code = e.key.charCodeAt();
    document.querySelector(`.Key${code}`).classList.remove('active')
    console.log(`.Key${code}`)    
})

document.body.appendChild(container);
