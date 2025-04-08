declare module '@mkkellogg/gaussian-splats-3d/build/gaussian-splats-3d.module.js' {
    // If you only need to silence the error, you can declare the module as "any":
    const GaussianSplats3D: any;
    export { GaussianSplats3D };

    // Or, for a bit more clarity:
    // export class GaussianSplats3D {
    //     constructor(options?: any);
    //     loadFile(path: string): Promise<void>;
    //     update(): void;
    //     dispose(): void;
    //     position: THREE.Vector3;
    //     scale: THREE.Vector3;
    //     // ... Add any known members or types here if you have more info
    // }
}
