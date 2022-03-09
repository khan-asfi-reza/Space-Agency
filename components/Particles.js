import Particles from "react-tsparticles";

export const Particle = () => {

    return (
        <Particles
            id="tsparticles"
            canvasClassName={"particles"}
            style={{"position": "absolute"}}
            options={{
                fullScreen: false,
                fpsLimit: 30,
                particles: {
                    color: {
                        value: "#ffffff",
                    },

                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outMode: "out",
                        random: true,
                        speed: 0.1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 500,
                    },
                    opacity: {
                        value: 0.4,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        random: true,
                        value: 1,
                    },
                },
                detectRetina: true,
            }}
        />
    );
};