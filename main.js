// The user will enter a crypto name. 
document.querySelector('button').addEventListener('click', getCoin)

function getCoin() {
let coin = document.querySelector('input').value 

fetch(`https://api.coincap.io/v2/assets/${coin}`)
.then(res => res.json())
.then(data => {
  console.log(data)
  document.querySelector('.coin-name').innerText = data.data.name
  document.querySelector('.symbol').innerText = data.data.symbol
  document.querySelector('.current-price').innerText = "$" + Math.floor(data.data.priceUsd)
  document.querySelector('.volume').innerText = Math.floor(data.data.volumeUsd24Hr)
})
.catch(err => {
  console.log(`error ${err}`)
})
}