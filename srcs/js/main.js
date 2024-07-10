
function search1(a) {
    a.style.color = 'black';
    var search = document.getElementById('search')
    search.style.width = '300px';
    search.style.paddingRight = '50px';
    search.style.paddingLeft = '10px';

}
var a = -150;
function moMenu() {
    a = -1 * a;
    document.documentElement.style.setProperty('--next', '' + a + 'px')
}
function thong_bao(a) {
    Array.from(document.getElementsByClassName('tick')).forEach(element => {
        element.style.display = 'none';
    });
    a.querySelector('div').style.display = 'flex';
}

setTimeout(function () { document.getElementById('curtain').style.opacity = 0; }, 1000);
setTimeout(() => {
    document.getElementById('curtain').style.display = 'none';
}, 2000);

function minthongbao(a) {
    a = document.getElementById('ul_left').querySelector('a[href ="' + a.getAttribute('href') + '"]')
    Array.from(document.getElementsByClassName('tick')).forEach(element => {
        element.style.display = 'none';
    });
    a.querySelector('div').style.display = 'flex';
}
