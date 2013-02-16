
# a variable interval
dynamically change your interval period

## Install
`npm install intervarl`
or
`component install marcelklehr/intervarl`

## Usage
```js
var setInterval = require('intervarl').setInterval

var interval = setInterval(function() {
  console.log('ShAZzAmM')
  if(interval.period < 20000) return interval.period++1000
  interval.period--1000
}, 0)

setTimeout(function() {
  interval.stop()
}, 60000)
```

# License
MIT