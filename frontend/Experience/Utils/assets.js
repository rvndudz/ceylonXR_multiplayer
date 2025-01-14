export default [
    {
        westgate: {
            assets: [
                {
                    name: "male",
                    type: "glbModel",
                    path: "/models/asian_male_animated.glb",
                },
                {
                    name: "female",
                    type: "glbModel",
                    path: "/models/asian_female_animated.glb",
                },
                {
                    name: "plane",
                    type: "glbModel",
                    path: "/models/plane.glb",
                },
                {
                    name: "collider",
                    type: "glbModel",
                    path: "/models/plane.glb",
                },
                
                {
                    name: "environment",
                    type: "cubeTexture",
                    path: [
                        "textures/environment/px.png",
                        "textures/environment/nx.png",
                        "textures/environment/py.png",
                        "textures/environment/ny.png",
                        "textures/environment/pz.png",
                        "textures/environment/nz.png",
                    ],
                },
                
            ],
        },
    },
];
