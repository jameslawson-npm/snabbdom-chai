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
