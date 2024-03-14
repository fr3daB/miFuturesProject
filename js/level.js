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
  // Reset
  e(document.getElementById('c1'), 0, localStorage.getItem("l1percent"));
  document.getElementById('lebar').style.width = `${localStorage.getItem("l1percent")/document.getElementById('lebar').style.width}px`;
}

function select1() {
  var l = localStorage.getItem('l1');
  console.log(l);
  switch (l) {
    case "1":
      localStorage.setItem("mc", 1);
      localStorage.setItem("l1percent", 12.5);
      location.href = '../html/multipleChoice.html';
      break;
    case "2":
      localStorage.setItem("md", 1);
      localStorage.setItem("l1percent", 25);
      location.href = '../html/memoryGame.html';
      break;
    case "3":
      localStorage.setItem("md", 1);
      localStorage.setItem("l1percent", 37.5);
      location.href = '../html/anagram.html';
      break;
    case "4":
      localStorage.setItem("l1percent", 50);
      location.href = '../html/numberReorder.html';
      break;
    case "5":
      localStorage.setItem("md", 2);
      localStorage.setItem("l1percent", 62.5);
      location.href = '../html/memoryGame.html';
      break;
    case "6":
      localStorage.setItem("md", 1);
      localStorage.setItem("l1percent", 75);
      location.href = '../html/anagram.html';
      break;
    case "7":
      localStorage.setItem("md", 3);
      localStorage.setItem("l1percent", 97.5);
      location.href = '../html/memoryGame.html';
      break;
    case "8":
      localStorage.setItem("mc", 2);
      localStorage.setItem("l1percent", 100);
      location.href = '../html/multipleChoice.html';
        break;
    default:
      break;
  }
}