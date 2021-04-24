import * as PIXI from 'pixi.js'

export let renderer: PIXI.Renderer
export let mainStage: PIXI.Container

export const initRenderer = () => {
    // setup renderer and ticker
    renderer = new PIXI.Renderer({ width: window.innerWidth, height: window.innerHeight, backgroundAlpha: 0 });
    document.body.appendChild(renderer.view);
    mainStage = new PIXI.Container();

    return renderStep
}

export const renderStep = () => {
    renderer.render(mainStage);
}