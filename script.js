let dados = document.getElementById('dados')
let secao = document.getElementById('selecao')
let valores = []
let res = document.getElementById('res')
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}


function adicionar(){
    if(isNumero(Number(dados.value)) && !inLista(dados.value, valores)){
        valores.push(Number(dados.value))
         secao.innerHTML += `<p>O valor ${dados.value} foi inserido </p>`

        
    }else{
        alert('Valor inválido ou número já foi adicionado')
    }
    dados.value = ''
    dados.focus()
    res.innerHTML = ''
}

function finalizar(){
   
 if(valores.length == 0 ){
            alert('[ERRO!!!]')
        }else{
        let soma = 0
         
        let maior = valores[0]
        let menor = valores[0]
        
        for(let pos in valores ){
        soma += valores[pos] 
        if(valores[pos] > maior)
            maior = valores[pos]

        if(valores[pos] < menor)
            menor = valores[pos]
   res.innerHTML = ''
  
    }       
  res.innerHTML = `<p>Foram inseridos <strong>${valores.length}</strong> valores</p>` 
  res.innerHTML += `<p>O maior valor é <strong>${maior}</strong></p>`
  res.innerHTML += `<p>O menor valor é <strong>${menor}</strong></p>`
    res.innerHTML += `<p>A soma dos valores é <strong>${soma}</strong></p>`
            console.log(`O menor valor é ${menor}`)
            console.log(`O maior valor é ${maior}`)

}
}

