const lotion = require('lotion')
const app = lotion({
  tendermintPort: 46657,
  initialState: { messages: [] },
  logTendermint: true,
  createEmptyBlocks: false,
}).then(function (y) {
  window.yChat = y

  var chatlenght = 0
  var chatcontainer = document.querySelector('#chat')

  function appendMessage (message, position) {
      chatlenght++
      
      var p = document.createElement('p')
      var uname = document.createElement('span')
      uname.appendChild(document.createTextNode(message.username + ': '))
      p.appendChild(uname)
      p.appendChild(document.createTextNode(message.message))
      console.log("insert in append message")
      chatcontainer.insertBefore(p, chatcontainer.children[position] || null)
  }

    state.state.toArray().forEach(appendMessage)
  // app.use((state, tx,chainInfo) => {
  //   if (typeof tx.sender === 'string' && typeof tx.message === 'string') {
  //     state.state.push({ sender: tx.sender, message: tx.message })
  //     console.log("send",tx.message)
  //   }
  // })
  // app.listen(3000).then(({ GCI }) => {
  //   console.log(GCI)

  // })

  document.querySelector('#chatform').onsubmit = function (event) {
      // the form is submitted
      console.log("print")
      var message = {
        sender: this.querySelector('[name=username]').value,
        message: this.querySelector('[name=message]').value
      }
      if (message.message.length > 0) {
           
        this.querySelector('[name=message]').value = ''
        appendMessage(message,1)
      }

      // Do not send this form!
      event.preventDefault()
      return false
    }

})
