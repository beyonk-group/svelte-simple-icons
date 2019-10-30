const path = require('path')
const simpleIcons = require('simple-icons')
const pascalCase = require('pascal-case')
const fs = require('fs-extra')

const componentTemplate = (name, svg) => `<svelte:options tag="${name}"/>
${svg.replace('<svg ', '<svg class={styleClass} ')}
<script>
  export let styleClass = ''
</script>
`
const handleComponentName = slug => slug === '500px' ? 'five-hundred-px' : slug.replace(/\-(\d+)/, '$1')

const icons = Object.entries(simpleIcons).map(([ name, { slug, svg } ]) => ({
  name,
  svg,
  pascalCasedComponentName: pascalCase(`${handleComponentName(slug)}-icon`),
  kebabCasedComponentName: `${handleComponentName(slug)}-icon`
}))

Promise.all(icons.map(icon => {
  const component = componentTemplate(icon.kebabCasedComponentName, icon.svg)
  const filepath = `./src/icons/${icon.pascalCasedComponentName}.svelte`
  return fs.ensureDir(path.dirname(filepath))
    .then(() => fs.writeFile(filepath, component, 'utf8'))
})).then(() => {
  const main = icons
    .map(icon => `export { default as ${icon.pascalCasedComponentName} } from './icons/${icon.pascalCasedComponentName}.svelte'`)
    .join('\n\n')
  return fs.outputFile('./src/index.js', main, 'utf8')
})