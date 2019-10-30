# svelte-simple-icons

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


### Styling
You can add CSS classes icons by passing a `styleClass` attribute:

```html
    <HuluIcon styleClass="some-class other-class" />
```
