function resul(win, lose){
    let rank = win - lose
    return {rank: rank, win: win, lose: lose}
  }
  
  
  let resultao = resul(110, 38)
  let lutas = resultado.rank
  let posicao = ""
  
  
  if (lutas <= 10){
   posicao = "ferro"
   }
  
  else if (lutas >= 11 && lutas <= 20){
    posicao = "bronze"
  }
  
  else if (lutas >= 21 && lutas <=50){
    posicao = "prata"
  }
  
  else if (lutas >= 51 && lutas <= 80){
    posicao = "ouro"
  }
  
  else if (lutas >= 81 && lutas <= 90){
    posicao = "diamante"
  }
  
  else if (lutas >= 91 && lutas <= 100){
    posicao = "lendário"
  }
  
  else if (lutas >= 101){
    posicao = "imortal"
  }
  
  console.log("Quantidades de vitórias = " + resultado.win)
  console.log("Quantidades de derrotas = " + resultado.lose )
  console.log("O herói está no rank = " + posicao)