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
    e(document.getElementById('ee'), 0, localStorage.getItem("l1percent"));
    e(document.getElementById('skill-1'), 0, 38.6)
    e(document.getElementById('skill-2'), 0, 22.5)
    e(document.getElementById('skill-3'), 0, 30.8)
}