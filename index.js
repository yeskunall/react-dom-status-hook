const { useEffect, useState } = require('react');

function getDOM() {
  return { readyState: document.readyState };
}

function useDOMState() {
  const [readyState, setReadyState] = useState(getDOM());

  function handleDOM() {
    // document.readyState is a read-only property AFAICT.
    // Therefore, `setReadyState` has no effect on
    // `document.readyState`
    setReadyState(getDOM());
  }

  useEffect(() => {
    document.addEventListener('DOMContentLoaded', handleDOM);
    return () => {
      document.removeEventListener('DOMContentLoaded', handleDOM);
    };
  }, []);

  return readyState;
}

module.exports = useDOMState;
