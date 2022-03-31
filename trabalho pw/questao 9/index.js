var inteiro = prompt("Digite um número de 1 à 10");

if(inteiro >=1 && inteiro <=10){
  document.write("Tabuada do "+inteiro+"<br>"+"<br>")
  document.write(inteiro+" x 1 = "+inteiro * 1+"<br>")
  document.write(inteiro+" x 2 = "+inteiro * 2+"<br>")
  document.write(inteiro+" x 3 = "+inteiro * 3+"<br>")
  document.write(inteiro+" x 4 = "+inteiro * 4+"<br>")
  document.write(inteiro+" x 5 = "+inteiro * 5+"<br>")
  document.write(inteiro+" x 6 = "+inteiro * 6+"<br>")
  document.write(inteiro+" x 7 = "+inteiro * 7+"<br>")
  document.write(inteiro+" x 8 = "+inteiro * 8+"<br>")
  document.write(inteiro+" x 9 = "+inteiro * 9+"<br>")
  document.write(inteiro+" x 10 = "+inteiro * 10+"<br>")
  
  console.log(inteiro)
}else{
  document.write("Número Inválido")
  console.log(inteiro)
}