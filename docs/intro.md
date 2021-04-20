---
sidebar_position: 1
---

# Getting Started

Let's discover **Stoned Components in jiffy**.

## About

Stoned components are specially hand crafted for your next project , which gives same look and feel of material UI. You might be wondering that if material-ui is available then why should we use **stoned**? the answer is because of it's minimalistic size. Stoned uses TypeScript out of the box and gives your app a whole lot of new things to play with...

Material-UI **(~5.8mb)** : **[npm docs](https://www.npmjs.com/package/@material-ui/core)**

Stoned **(~281kb)** : **[npm docs](https://www.npmjs.com/package/stoned)**

## Getting Started

Install Stoned Components like any other component library out there<br/>
(trust me it won't take too long😁)

```shell
npm install stoned
```

## Usage and thumb rules

**some rules to ensure you get most out of stoned components**

- Only installing stoned won't do the work for you
- Stoned is still in beta , so you have to import css manually (just for once) to give your components modern look and feel
- You can import css **once and for all** in `index.js` like `import 'stoned/dist/index.css'` <br/> so you don't have to import it in every single React Component

## First Component

```jsx
import "stoned/dist/index.css";
import { Button } from "stoned";

const App = () => {
  return <Button>Hello World!</Button>;
};

export default App;
```

See, i told you it's quite easy, so what are you waiting for? use stoned and make beautiful websites ✨

**[GitHub](https://github.com/whoadarshpandya/stoned)**
