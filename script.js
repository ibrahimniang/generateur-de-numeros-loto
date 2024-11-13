//afficher l'heure est la date
setInterval(function(){
document.getElementById('dataNow').innerHTML= Date()
    
},500)

// Generer les numeros
function generateNumbers(){
    document.getElementById('nb1').value= Math.floor
    (Math.random() * 49);
    document.getElementById('nb2').value= Math.floor
    (Math.random() * 49);
    document.getElementById('nb3').value= Math.floor
    (Math.random() * 49);
    document.getElementById('nb4').value= Math.floor
    (Math.random() * 49);
    document.getElementById('nb5').value= Math.floor
    (Math.random() * 49);
    document.getElementById('nb6').value= Math.floor
    (Math.random() * 10);
}
// generer le PDF
var numbers = document.querySelector('.box_6_nb');
function generatePDF(){
    if(document.getElementById('nb1').value!= "-"){ 
var opt = {
  margin:       1,
  filename:     'loto.pdf',
  image:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { scale: 2 },
  jsPDF:        { unit: 'in', format: 'a4', orientation: 'l' }
};
// generer le pdf
   html2.pdf().set(opt).from(numbers).save();
    }else{
        alert("Veillez generer des numeros !!")
    }
}