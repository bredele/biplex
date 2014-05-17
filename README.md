biplex
======

multi-sided emitter with support for middleware inspired by **[component-channel](http://github.com/bredele/channel)** and built for **[wall](http://github.com/bredele/wall)**


## Installation

with [component](http://github.com/component/component):

  $ component install bredele/biplex


middlewares are not yet supported.

## Usage

  A biplex is an [emitter](http://github.com/component/emitter):

```js
var biplex = require('biplex');
var beep = biplex('beep');

beep.on('boop', function() {
  // do something
});
beep.emit('boop');
```

  and can emit messages to an other biplex:

```js
var foo = biplex('foo');
var bar = biplex('bar');


bar.from('foo').on('hello', function() {
  // do something;
});

foo.to('bar').emit('hello');
```

## API

  A biplex is a multi sided event [emitter](http://github.com/component/emitter). You can emit an event to an other
  biplex emitter or listen events coming from a specific biplex emitter.

### from

  Listen events coming from a biplex.

```js
bar.from('foo').on('hello', function() {
  // do seomthing
});
```

  `from` returns a decorator with the methods `on` and `once`.
  

### to

  Emit events to a biplex.

```js
foo.to('bar').emit('hello', 'world');
```

  `to` returns a decorator with the method `emit`.


## License

The MIT License (MIT)

Copyright (c) 2014 Olivier Wietrich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
