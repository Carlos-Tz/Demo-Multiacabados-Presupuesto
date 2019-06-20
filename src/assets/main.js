document.addEventListener('keypress', function(evt) {
    if (evt.key !== 'Enter') {
      return;
    }
  
    let element = evt.target;
    if (!element.classList.contains('focusNext')) {
      return;
    }
    let tabIndex = element.tabIndex + 1;
    var next = document.querySelector('[tabindex="'+tabIndex+'"]');
    if (next) {
      next.focus();
      event.preventDefault();
    }
  });

  /*----------------*/
//PDF Generator
var page = document.title;
var doc = new jsPDF();

function pdf(quality = 1) {
  var name = document.querySelector('#name');
   const filename = page+name.value+'.pdf';

    html2canvas(document.querySelector('.page'), { scale: quality }).then(canvas => {
        let pdf = new jsPDF({
            orientation: 'p',       //portrait
            unit: 'mm',             //millimeters
            format: 'letter'        //document size
        });
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 216, 279);
        pdf.save(filename);
    });
}

/*****************/
var modal = document.getElementById('myModal');
var span = document.getElementById("close");
var canvas = document.getElementById('canvas');

var signaturePad = new SignaturePad(canvas, {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    minWidth: 3,
    maxWidth: 4,
    penColor: "rgb(33, 33, 33)"
});

function btn_click() {
  modal.style.display = "block";
 resizeCanvas();
} 

function btn_clear() {
  document.getElementById('imgSign').src = '';
}

span.onclick = function () {
  modal.style.display = "none";
  document.getElementById('imgSign').src = signaturePad.toDataURL();
}

window.onclick = function (event) {
  if (event.target == modal) {
      modal.style.display = "none";
      document.getElementById('imgSign').src = signaturePad.toDataURL();
  }
}

function resizeCanvas() {
  var w = modal.clientWidth;
  var h = modal.clientHeight;
  canvas.width = Math.ceil(w * 0.75);
  canvas.height = Math.ceil(h * 0.7);
  signaturePad.clear();
}
window.addEventListener("resize", resizeCanvas);