function setProgress(elem, percent) {
    var
      degrees = percent * 3.6,
      transform = /MSIE 9/.test(navigator.userAgent) ? 'msTransform' : 'transform';
    elem.querySelector('.counter').setAttribute('data-percent', Math.round(percent));
    elem.querySelector('.progressEnd').style[transform] = 'rotate(' + degrees + 'deg)';
    elem.querySelector('.progress').style[transform] = 'rotate(' + degrees + 'deg)';
    if(percent >= 50 && !/(^|\s)fiftyPlus(\s|$)/.test(elem.className))
      elem.className += ' fiftyPlus';
  }
 
 
const e = (elem, start, end) => {
    start += 1;
    setProgress(elem, (start));
    if(start < end) {
        setTimeout(function() { e(elem, start, end); }, 5);
    }
}
 
function start() {
    e(document.getElementById('ee'), 0, (JSON.parse(localStorage.getItem("l1percent")) + 23 + 31) / 3);
    e(document.getElementById('skill-1'), 0, localStorage.getItem("l1percent"))
    e(document.getElementById('skill-2'), 0, 23)
    e(document.getElementById('skill-3'), 0, 31)
    document.getElementById(`pg1`).style.width = `${JSON.parse(localStorage.getItem("l1percent"))}%`;
    console,console.log(localStorage.getItem("l1percent"));
    document.getElementById('pg1').innerHTML = `${JSON.parse(localStorage.getItem("l1percent"))}%`;
}