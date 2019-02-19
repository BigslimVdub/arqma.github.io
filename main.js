var app = new Vue ({
  el: '#app',
  data: {
    height: []
},
created () {
  fetch('https://api.arqma.com/network/stats')
  .then(response => response.json())
  .then(json => {
    this.height = json.height
  })
}
})
