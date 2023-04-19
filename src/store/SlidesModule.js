

export const SlidesModule = {
    state: {
      slides: [
        {
          drones: "/src/assets/img/drones/dj1.png",
          title: "DJI Mavic Air",
          text: "32 MP Sphere Panoramas Foldable & Portable 3-Axis Gimbal & 2K Camera",
          price: "310.000тг",
        },
        {
          drones: "/src/assets/img/drones/dj3.png",
          title: "DJI Mavic pro",
          text: "32 MP Sphere Panoramas Foldable & Portable 10km 3-Axis Gimbal & 4K Camera",
          price: "350.000тг",
        },
        {
          drones: "/src/assets/img/drones/dj2.png",
          title: "DJI Mavic pro 2",
          text: "64 MP Sphere Panoramas Foldable & Zoom 100x 3-Axis Gimbal & 4K Camera",
          price: "540.000тг",
        },
        {
          drones: "/src/assets/img/drones/dj4.png",
          title: "DJI Mavic pro 3",
          text: `5.1K Video Recording
                  DCI 4K/120fps
                  Supports Apple ProRes
                  10-bit D-Log
                  HLG
                  Night Shots Video`,
          price: "820.000тг",
        },
    ],
    },
    getters: {
      slides: (state) => state.slides,
    }
}