import * as THREE from 'three';
import Experience from '../Experience.js';
import * as GaussianSplats3D from '@mkkellogg/gaussian-splats-3d';

export default class GaussianScene {
    constructor() { // Remove the camera parameter
        this.experience = new Experience();
        // Use the Experience scene (could be a dedicated scene if preferred)
        this.scene = this.experience.scene;
        this.viewer = null;
        this.camera = null;
    }

     setupGaussianSplats(camera) { // Add the camera parameter
        try {
            this.camera = camera;
            // Create the viewer using the threeScene parameter as in the GitHub example.
            this.viewer = new GaussianSplats3D.Viewer({
                threeScene: this.scene,
                camera: this.camera, // Pass the camera to the viewer
                useBuiltInControls: false,
            });

            // Load a splat scene file.
            // Replace '/models/test4.kksplat' with your own .ply, .ksplat, or .splat file path.
             this.viewer.addSplatScene('/models/test4.ksplat', {
                'splatAlphaRemovalThreshold': 5,
                'showLoadingUI': true,
                'position': [0, 11, 0],
                'rotation': [0, -1, 0, 1],
                'scale': [1, 1, 1]
            }).then(() => {
                // Start the viewer so it manages its own rendering.
                this.viewer.start();
                console.log('Gaussian splats loaded and started successfully');
            });

        } catch (error) {
            console.error('Error loading Gaussian splats:', error);
        }
    }

    update() {
        // In self-driven mode, the viewer is updating on its own.
        // If you need to perform additional updates, you can add them here.
        // Remove this line: this.viewer.setCamera(this.camera);
    }

    dispose() {
        if (this.viewer) {
            this.viewer.dispose();
        }
    }
}
