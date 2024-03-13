function setProgress(elem, percent) {
    var
      degrees = percent * 3.6,
      transform = /MSIE 9/.test(navigator.userAgent) ? 'msTransform' : 'transform';
    elem.querySelector('.progressEnd').style[transform] = 'rotate(' + degrees + 'deg)';
    elem.querySelector('.progress').style[transform] = 'rotate(' + degrees + 'deg)';
    if(percent >= 50 && !/(^|\s)fiftyPlus(\s|$)/.test(elem.className)){
    elem.className += ' fiftyPlus';
    }
  }
  

const e = (elem, start, end) => {
    start += 1;
    setProgress(elem, (start));
    if(start < end) {
        setTimeout(function() { e(elem, start, end); }, 5);
    }
}

function start() {
    e(document.getElementById('c1'), 0, 72)
}
