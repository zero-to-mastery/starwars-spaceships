export const particlesoptions = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        area: 1500,
      },
    },
    links: {
      enable: true,
      opacity: 0.02,
      distance: 150,
    },
    move: {
      enable: true,
      direction: "right",
      speed: 0.05,
    },
    size: {
      value: 1.25,
    },
    opacity: {
      value: { min: 0.15, max: 0.5 },
      animation: {
        enable: true,
        speed: 1.5,
      },
    },
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      push: {
        quantity: 2,
      },
    },
  },
  detectRetina: true,
};
