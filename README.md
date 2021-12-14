<a href="https://beyonk.com">
    <br />
    <br />
    <img src="https://user-images.githubusercontent.com/218949/144224348-1b3a20d5-d68e-4a7a-b6ac-6946f19f4a86.png" width="198" />
    <br />
    <br />
</a>

## Svelte Simple Icons

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com) [![svelte-v3](https://img.shields.io/badge/svelte-v3-blueviolet.svg)](https://svelte.dev)

Based on [Svelte Eva Icons](https://github.com/dylanblokhuis/svelte-eva-icons)

## Install

```bash
yarn add --dev svelte-simple-icons
```
or use NPM
```bash
npm install --save-dev svelte-simple-icons
```

## Usage
Unused icons will get removed with tree shaking in bundlers like webpack and rollup.
```html
    <script>
        // Only import what you need!
    	import { RIcon, HuluIcon, ... } from 'svelte-simple-icons'
    </script>
    
    <!-- When using custom elements -->
    <hulu-icon />
    
    <!-- When using regular svelte compontent -->
    <HuluIcon />
```

Use the svg name when importing, and convert it to {PascalCase}Icon. 
For instance, `.NET` on the creators site has an SVG name of `dot-net.svg`, so should be imported as `<DotNetIcon />`
See all icons here: https://simpleicons.org/

### Exceptions

The one notable exception to the rule above is the 500px icon:

```html
    <script>
    	import { FiveHundredPxIcon } from 'svelte-simple-icons'
    </script>
    
    <FiveHundredPxIcon />
```

### Styling
You can add CSS classes icons by passing a `styleClass` attribute:

```html
    <HuluIcon styleClass="some-class other-class" />
```
