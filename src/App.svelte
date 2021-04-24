<script lang="typescript">
  import Box2DFactory from "box2d-wasm";
  import { onMount } from "svelte";
  import { CanvasDebugDraw } from "./physics/debugDraw";
  import { Helpers } from "./physics/helpers";
  import { WorldFactory } from "./physics/world";

  let canvas: HTMLCanvasElement;
</script>

<!--
<canvas
  bind:this={canvas}
  width={window.innerWidth}
  height={window.innerHeight}
/>

<style>
  canvas {
    padding: 0;
    margin: 0;
    position: fixed;
    top: 0;
    left: 0;
  }
</style> -->
