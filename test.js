require('raf/polyfill');
require('browser-env')();

const test = require('ava');
const { createElement: h } = require('react');
const ReactTestRenderer = require('react-test-renderer');

const useDOMState = require('.');

function render(val) {
  return ReactTestRenderer.create(val).toJSON();
}

test(t => {
  function Component() {
    return JSON.stringify(useDOMState());
  }

  t.is(
    render(h(Component)),
    JSON.stringify({
      readyState: document.readyState,
    }),
  );
});
