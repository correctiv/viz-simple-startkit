const cssNamespace = 'cor-viz'

d3.playbooks.defaults({
  cssNamespace,
  color: ['steelblue', 'brown', 'yellow']  // FIXME: add some correctiv colors!
})


// sample viz
window.renderViz = id => {

  d3.playbooks.barChart({
    elementId: `${cssNamespace}__chart--${id}`,
    barWidth: 50,
    yTicks: 6,
    data: [
      ['a', 'b', 'c'],
      [1, 2, 3]
    ],
  }).render()

  .legend({
    element: `#${cssNamespace}__legend--${id}`
  })

  .selector({
    element: `#${cssNamespace}__selector--${id}`
  })

  .infobox({
    element: `#${cssNamespace}__infobox--${id}`,
    template: `
      <dl>
        <dt>{x}</dt>
        <dd>{y}</dd>
      </dl>
    `
  })

}
