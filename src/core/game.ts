import { initPhysics, physStep } from './physics'
import { initRenderer, renderStep } from './renderer'

export const startGameLoop = () => {
  initPhysics()
  // initRenderer()

  gameLoop()
}

const gameLoop = (prevMs = 0) => {
  const nowMs = window.performance.now()

  const delta = nowMs - prevMs

  requestAnimationFrame(gameLoop.bind(null, nowMs))
  physStep(delta)
  // renderStep()
}
