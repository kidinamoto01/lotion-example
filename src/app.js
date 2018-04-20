let connect = require('lotion-connect')

let { state, send } = await connect(null, { 
  genesis: require('./genesis.json'),
  nodes: [ 'ws://localhost:46657' ]
})

console.log(await state)
console.log(await send({ foo: 'bar' }))