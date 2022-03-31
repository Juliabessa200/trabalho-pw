var nomeDProdt= "macarão";
var quant = 20;
var preUnidade = 15;
var total = quant * preUnidade;
var desconto = 72 * 0.03;
var totalpag = total - desconto;

document.write("Produto: "+nomeDProdt);
document.write("<br>Quantidade Adquirida : " + quant );
document.write("<br>Preço por unidade : " + preUnidade);
document.write("<br>Total: " + total);
document.write("<br>Desconto: " + desconto);
document.write("<br>Total a pagar pós desconto: " + totalpag);

if(quant <=5) {
	document.write("<br>Seu desconto será de 2% pela compra de "+quant+" macarão")
}else if (quant >5 && quant <=10) {
	document.write("<br>Seu desconto será de 3% pela compra de "+quant+" macarão")
}else if (quant >10){
	document.write("<br>Seu desconto será de 5% pela compra de "+quant+" macarão")
}