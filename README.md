# `@yeskunall/react-dom-status-hook`

> React hook for subscribing to `document.readyState`

> **Note:** This is using the new [React Hooks API Proposal](https://reactjs.org/docs/hooks-intro.html)
> which is subject to change until React 16.7 final.
>
> You'll need to install `react`, `react-dom`, etc at `^16.7.0-alpha.0`

## Install

### npm

```shell
npm i -S @yeskunall/react-dom-status-hook
```

### Yarn

```shell
yarn add @yeskunall/react-dom-status-hook
```

## Usage

```js
import useDOMState from '@yeskunall/react-dom-status-hook';

function MyComponent() {
  let readyState = useDOMState();
  // {
  //   readyState: document.readyState,
  // }

  // ...
}
```

<br />

<a href="https://21kb.now.sh/" target="_blank" rel="noopener noreferrer"><img width="900" src="https://s3.ca-central-1.amazonaws.com/kimchi-now-sh-site-images/images/sponsored%402x.png" alt="21kb-sponsor" /></a>
