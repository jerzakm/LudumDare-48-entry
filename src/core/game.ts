import { initPhysics, physStep } from "./physics";
import { initRenderer, renderStep } from "./renderer";

export const startGameLoop = () => {
  initPhysics();
  initRenderer();
  return gameLoop;
};

const gameLoop = () => {
  physStep();
  renderStep();
};
