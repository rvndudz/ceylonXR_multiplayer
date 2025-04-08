import * as THREE from "three";
import { EventEmitter } from "events";
import Experience from "../Experience.js";

import { Octree } from "three/examples/jsm/math/Octree";

import Player from "./Player/Player.js";
import Westgate from "./Westgate.js";
import Environment from "./Environment.js";
import GaussianScene from "./GaussianScene.js";

export default class World extends EventEmitter {
    constructor() {
        super();
        this.experience = new Experience();
        this.resources = this.experience.resources;

        this.octree = new Octree();

        this.player = null;
        this.gaussianScene = null;

        this.resources.on("ready", () => {
            this.westgate = new Westgate();
            this.player = new Player();
            this.environment = new Environment();
            // Instantiate the Gaussian Scene – this will load the splat scene and start the viewer.
            this.gaussianScene = new GaussianScene(); // Remove the camera parameter
            this.gaussianScene.setupGaussianSplats(this.player.camera.perspectiveCamera);
        });
    }

    update() {
        if (this.player) this.player.update();
        // Note: With the viewer now self-started, updating here may or may not be needed.
        if (this.gaussianScene) this.gaussianScene.update();
    }
}
