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
