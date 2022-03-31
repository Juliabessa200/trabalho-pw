let number = 104
   let quant = 8
   switch (number) {
       case 100:
           let cachorroQ = quant*1.70
           document.write("<br>O preço do seu pedido total de Cachorro quente simples é de:" + cachorroQ + " R$")
           break;
       case 101:
           let bauruS = quant*2.30
           document.write(" <br>O preço do seu pedido total de bauru simples ficou:" + bauruS + " R$")
           break;
       case 102:
           let bComOvo=quant*2.60
           document.write("<br>O preço do seu pedido total de  bauru com ovo ficou:" + bComOvo + " R$")
           break;
       case 103:
           let hamburguer = quant*2.40
           document.write("<br>O preço do seu pedido total de hamburguer ficou:" + hamburguer + " R$")
           break;
       case 104:
           let cheeseburguer = quant*2.50
           document.write("<br>O preço do seu pedido total de cheeseburguer ficou: " + cheeseburguer + " R$")
           break;
       case 105:
           let refrigerante = quant*1.00
           document.write("<br><br>O preço do seu pedido total de refrigerante ficou: " + refrigerante + " R$")
           break;
   }
  