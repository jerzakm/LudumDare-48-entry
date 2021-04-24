import Box2DFactory from "box2d-wasm";
import { CanvasDebugDraw } from "src/physics/debugDraw";
import { Helpers } from "src/physics/helpers";
import { WorldFactory } from "src/physics/world";

interface Point {
    x: number;
    y: number;
  }

export const initPhysics = async () => {
    const canvas = document.createElement('canvas')
    canvas.style.width=`${window.innerWidth}px`
    canvas.style.height= `${window.innerHeight}px`
    canvas.style.position = `fixed`
    canvas.style.top = `0px`
    canvas.style.left = `0px`
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    document.body.appendChild(canvas)

    const box2D: typeof Box2D & EmscriptenModule = await Box2DFactory({
      /**
       * By default, this looks for Box2D.wasm relative to public/build/bundle.js:
       * @example (url, scriptDirectory) => `${scriptDirectory}${url}`
       * But we want to look for Box2D.wasm relative to public/index.html instead.
       */
      locateFile: (url) => url,
    });
    const {
      b2Vec2,
      b2Draw: { e_shapeBit },
    } = box2D;
    const helpers = new Helpers(box2D);
    const ctx = canvas.getContext("2d");




    const renderer = new CanvasDebugDraw(
      box2D,
      helpers,
      ctx!,
      1
    ).constructJSDraw();
    renderer.SetFlags(e_shapeBit);

    const { step, draw, destroy } = new WorldFactory(box2D, helpers).create(
      renderer
    );


    const drawCanvas = () => {
      ctx!.clearRect(0, 0, window.innerWidth, window.innerHeight);

      ctx!.save();
      // ctx!.translate(0, 0);


      // CanvasDebugDraw.drawAxes(ctx!);

      ctx!.fillStyle = "rgb(255,255,0)";
      draw();
      ctx!.restore();
    };

    let handle: number | undefined;

    (function loop(prevMs: number) {
      const nowMs = window.performance.now();
      handle = requestAnimationFrame(loop.bind(null, nowMs));
      const deltaMs = nowMs - prevMs;
      step(deltaMs);
      drawCanvas();
    })(window.performance.now());

    return physStep
}

export const physStep = () => {

}