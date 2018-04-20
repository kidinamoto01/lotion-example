let lotion = require('lotion')
let app = lotion({
  tendermintPort: 46657,
  initialState: { messages: [] },
  logTendermint: true,
  createEmptyBlocks: false,
})
app.use((state, tx,chainInfo) => {
  if (typeof tx.sender === 'string' && typeof tx.message === 'string') {
    state.messages.push({ sender: tx.sender, message: tx.message })
    console.log("send",tx.message)
  }
})
app.listen(3000).then(({ GCI }) => {
  console.log(GCI)
  var chatcontainer = document.querySelector('#chat')

   document.querySelector('#chatform').onsubmit = function (event) {
    // the form is submitted
    var message = {
      username: this.querySelector('[name=username]').value,
      message: this.querySelector('[name=message]').value
    }
    if (message.message.length > 0) {
         
      this.querySelector('[name=message]').value = ''
    }

    console.log("get message")

    // Do not send this form!
    event.preventDefault()
    return false
  }

})