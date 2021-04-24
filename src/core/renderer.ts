import * as PIXI from 'pixi.js'

export let renderer: PIXI.Renderer
export let mainStage: PIXI.Container
let g: PIXI.Graphics

export const initRenderer = () => {
  // setup renderer and ticker
  renderer = new PIXI.Renderer({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x1099bb,
  })
  document.body.appendChild(renderer.view)

  renderer.view.style.width = `${window.innerWidth}px`
  renderer.view.style.height = `${window.innerHeight}px`
  renderer.view.style.position = `fixed`
  renderer.view.style.top = `0px`
  renderer.view.style.left = `0px`
  renderer.view.width = window.innerWidth
  renderer.view.height = window.innerHeight

  mainStage = new PIXI.Container()
  g = new PIXI.Graphics()
  mainStage.addChild(g)

  const sprite = PIXI.Sprite.from('skull.png')
  mainStage.addChild(sprite)
  sprite.position.x = 200
  sprite.position.y = 200

  var ticker = new PIXI.Ticker()
  ticker.add(() => {
    renderer.render(mainStage)
  }, PIXI.UPDATE_PRIORITY.LOW)
  ticker.start()

  return renderStep
}

export const renderStep = () => {
  if (g) {
    g.clear()
    g.beginFill(0xff0000)
    g.drawCircle(0, 0, 300)
    g.endFill()
  }
  renderer.render(mainStage)
}
