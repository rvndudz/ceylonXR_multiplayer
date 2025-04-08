import Experience from "../Experience.js";
import * as THREE from "three";

export default class Westgate {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.octree = this.experience.world.octree;

        this.setWorld();
    }

    setWorld() {
        this.plane = this.resources.items.plane.scene;

        this.collider = this.resources.items.collider.scene;
        this.octree.fromGraphNode(this.collider);


        this.scene.add(this.plane);

    }
}
