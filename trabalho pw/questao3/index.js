var idade = parseInt (prompt ("Diga sua Idade")); 

var tempoTrab = parseInt (prompt ("Digite o tempo trabalhado")); 

var codigoEmp = parseInt (prompt ("Qual cod. empregado")); 

if (idade >= 60 && tempoTrab >= 25) { 

 document.write ("O funcionário " + codigoEmp + " precisa se aposentar, pois tem " 
  + idade + " anos de idade e " + tempoTrab + " anos de trabalho.")
} else { 

    if (idade < 65) { 

    if (tempoTrab < 30) { 

      document.write ("Não requer aposentadoria"); 

   } else { document.write ("O funcionário " + codigoEmp + " precisa se aposentar, pois tem " 
   + tempooTrab + " anos de trabalho."); 
} 
   } else { document.write ("O funcionário " + codigoEmp + " precisa se aposentar, pois tem " 
   + idade + " anos de idade."); 

}

}