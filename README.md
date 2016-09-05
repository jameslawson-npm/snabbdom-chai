# snabbdom-chai

*Flexible chai matchers for snabbdom*

A [chai](http://chaijs.com/) plugin for [snabbdom](https://github.com/paldepind/snabbdom).

## Usage

Basics:
```javascript
expect(tree).to.have.tag('div');
expect(tree).to.have.text('hello');
expect(tree).to.have.class('foo');
expect(tree).to.have.classes(['foo', 'bar', 'baz']);
expect(tree).to.have.styles({ left: '10px', top: '0px', width: '20px' });
expect(tree).to.have.children(3);
expect(tree).to.have.attribute('src', 'http://first-image.png');
```

Subtree expectations:
```javascript
expect(tree).to.have.a.subtree.with.tag('div').inside;
expect(tree).to.have.a.subtree.with.text('hello').inside;
expect(tree).to.have.a.subtree.with.class('foo').inside;
expect(tree).to.have.a.subtree.with.classes(['foo', 'bar', 'baz']).inside
expect(tree).to.have.a.subtree.with.styles({ left: '10px', top: '0px', width: '20px' }).inside;
```

> **Important!** To use subtree expectations you must end your chai matchers with '`inside`'. 
If you fail to do this, *no assertion will be made* by chai, and the expectation 
will *always pass* (the value of `tree` will be ignored).

Chaining:
```javascript
expect(tree).to.have.tag('div').and.text('world');
expect(tree).to.have.class('foo').and.text('world').and.style({ display: 'none' });
expect(tree).to.have.a.subtree.with.tag('div').with.class('foo').inside;
expect(tree).to.have.a.subtree.with.tag('h1').class('bar').style({ color: 'red' }).and.text('world').inside;
```

Locating:
```javascript
expect(tree).at.root('some-class').to.have.tag('div');
expect(tree).at.root('some-class').to.have.a.subtree.with.tag('h1').inside;
```

## Installation

```
npm install snabbbdom-chai --save-dev
```

```javascript
var chai = require('chai');
chai.use(require('snabbbdom-chai'));
```

## License

MIT License.    
Copyright © 2016 James Lawson
