// Westgate.js
import Experience from "../Experience.js";
import * as THREE from "three";
// Import what you need from GaussianSplats3D
import * as GaussianSplats3D from "../gaussian-splats-3d.js";

export default class Westgate {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.octree = this.experience.world.octree;

        this.setWorld();
    }

    async setWorld() {
        // ----- Existing code -----
        this.plane = this.resources.items.plane.scene;
        this.collider = this.resources.items.collider.scene;
        this.octree.fromGraphNode(this.collider);
        this.scene.add(this.plane);

        // ----- New code: Load and add Gaussian Splat mesh -----
        // Create a SplatLoader instance
        const viewer = new GaussianSplats3D.Viewer({
            'cameraUp': [0, -1, -0.6],
            'initialCameraPosition': [-1, -4, 6],
            'initialCameraLookAt': [0, 4, 0],
            'sphericalHarmonicsDegree': 0
        });
        viewer.addSplatScene('./Splat/converted_file.ksplat', {
            'splatAlphaRemovalThreshold': 5,
            'showLoadingUI': true,
            'position': [0, 1, 0],
            'rotation': [0, 0, 0, 1],
            'scale': [1.5, 1.5, 1.5]
        })
        .then(() => {
            viewer.start();
        });
    }
}
