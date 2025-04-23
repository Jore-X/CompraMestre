let tarefas = [];
let precosProdutos = [];

let quantidadeCondicao = 0;

document.getElementById("submit").addEventListener("click", () => {

  let name = document.getElementById("name").value;
  let quant = document.getElementById("quantidade").value;
  let price = document.getElementById("price").value;
  console.log(name);
  console.log(quant);

  if (quant > 1){
    console.log("quantidade: " + quant)
    
    price = price * quant
  }

  let novatarefa = {
    titulo: name,
    quantidade: quant,
    price: price,
  };

  tarefas.push(novatarefa);
    let tabela = document.getElementById("tabela");

    let Linha = tabela.insertRow();
    Linha.classList.add("linha-tarefa");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    Linha.insertCell(0).appendChild(checkbox);

    Linha.insertCell(1).innerText = name;
    Linha.insertCell(2).innerText = quant;
    Linha.insertCell(3).innerText = price;

  precosProdutos.push(price)

  document.getElementById("name").value = ""
  document.getElementById("quantidade").value = ""
  document.getElementById("price").value = ""
});


document.getElementById("soma").addEventListener("click", () => {
  let somatotal = precosProdutos.reduce((total,num) => total + Number(num), 0)
  console.log("Soma Total: " + somatotal)
  document.getElementById("mostrasoma").textContent = somatotal;
})