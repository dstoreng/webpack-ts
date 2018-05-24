import './index.scss';

let div = document.getElementById('app');
for (let i = 1; i < 6; i++) {
    let elm = document.createElement(`h${i}`);
    elm.textContent = 'WopWop'
    div.appendChild(elm);
}