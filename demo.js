let lotion = require('lotion')

let app = lotion({
  initialState: {
    count: 0
  }
})

function txHandler(state, tx, chainInfo) {
  state.count+=100
}

function blockHandler(state, chainInfo) {
  state.count--
}

app.use(txHandler)
app.useBlock(blockHandler)

app.listen(3000)
