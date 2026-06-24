let saldo=Number(prompt("quanto de saldo tem na conta?"));
let sacar=Number(prompt("Quanto você se quer sacar"));
const sobra=saldo-sacar
if(saldo<sacar)
  {console.log("saldo insuficiente")}
  else{
      console.log(` Na sua conta tinha R$${saldo}
      voce sacou R$${sacar}
      e sobrou R$${sobra}`)
  }
