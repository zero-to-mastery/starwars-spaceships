export const particlesoptions = {
    particles: {
        "number": {
            "value": 60,
            "density": {
                "enable": true,
                "value_area": 1500
            }
        },
        "line_linked": {
            "enable": true,
            "opacity": 0.02
        },
        "move": {
            "direction": "right",
            "speed": 0.05
        },
        "size": {
            "value": 1.25
        },
        "opacity": {
            "anim": {
                "enable": true,
                "speed": 1.5,
                "opacity_min": 0.15
            }
        }
    },
    "interactivity": {
        "events": {
            "onclick": {
                "enable": true,
                "mode": "push"
            }
        },
        "modes": {
            "push": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
}

