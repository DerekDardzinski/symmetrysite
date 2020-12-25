import {
  axisRotations,
  planeRotations,
  pColor,
  rotColor,
  axColor,
} from "../../build/AxesProps";

const cubicAxes = {
  _m3barm: {
    x: {
      rotationSym: 4,
      axisRotation: axisRotations.x,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [
        planeRotations.two,
        planeRotations.fourdd,
        planeRotations.fourdu,
      ],
      hasPlane: true,
    },
    y: {
      rotationSym: 4,
      axisRotation: axisRotations.y,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [
        planeRotations.four,
        planeRotations.fourdd,
        planeRotations.fourdu,
      ],
      hasPlane: true,
    },
    z: {
      rotationSym: 4,
      axisRotation: axisRotations.z,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [
        planeRotations.two,
        planeRotations.fourdd,
        planeRotations.fourdu,
      ],
      hasPlane: true,
    },
    xy: {
      rotationSym: 2,
      axisRotation: axisRotations.xy,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
    nxy: {
      rotationSym: 2,
      axisRotation: axisRotations.nxy,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
    xz: {
      rotationSym: 2,
      axisRotation: axisRotations.xz,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
    nxz: {
      rotationSym: 2,
      axisRotation: axisRotations.nxz,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
    yz: {
      rotationSym: 2,
      axisRotation: axisRotations.yz,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
    nyz: {
      rotationSym: 2,
      axisRotation: axisRotations.nyz,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
    nnn_ppp: {
      rotationSym: 3,
      axisRotation: axisRotations.nnn_ppp,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
    nnp_ppn: {
      rotationSym: 3,
      axisRotation: axisRotations.nnp_ppn,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
    npn_pnp: {
      rotationSym: 3,
      axisRotation: axisRotations.npn_pnp,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
    npp_pnn: {
      rotationSym: 3,
      axisRotation: axisRotations.npp_pnn,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
  },
  _4bar3m: {
    x: {
      rotationSym: 4,
      axisRotation: axisRotations.x,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [
        planeRotations.two,
        planeRotations.fourdd,
        planeRotations.fourdu,
      ],
      hasPlane: true,
    },
    y: {
      rotationSym: 4,
      axisRotation: axisRotations.y,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [
        planeRotations.four,
        planeRotations.fourdd,
        planeRotations.fourdu,
      ],
      hasPlane: true,
    },
    z: {
      rotationSym: 4,
      axisRotation: axisRotations.z,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [
        planeRotations.two,
        planeRotations.fourdd,
        planeRotations.fourdu,
      ],
      hasPlane: true,
    },
    // xy: {
    // rotationSym: 1,
    // axisRotation: axisRotations.xy,
    // rotationColor: rotColor,
    // planeColor: pColor,
    // axisColor: axColor,
    // planes: [],
    // hasPlane: false,
    // },
    // nxy: {
    // rotationSym: 1,
    // axisRotation: axisRotations.nxy,
    // rotationColor: rotColor,
    // planeColor: pColor,
    // axisColor: axColor,
    // planes: [],
    // hasPlane: false,
    // },
    // xz: {
    // rotationSym: 2,
    // axisRotation: axisRotations.xz,
    // rotationColor: rotColor,
    // planeColor: pColor,
    // axisColor: axColor,
    // planes: [],
    // hasPlane: false,
    // },
    // nxz: {
    // rotationSym: 2,
    // axisRotation: axisRotations.nxz,
    // rotationColor: rotColor,
    // planeColor: pColor,
    // axisColor: axColor,
    // planes: [],
    // hasPlane: false,
    // },
    // yz: {
    // rotationSym: 2,
    // axisRotation: axisRotations.yz,
    // rotationColor: rotColor,
    // planeColor: pColor,
    // axisColor: axColor,
    // planes: [],
    // hasPlane: false,
    // },
    // nyz: {
    // rotationSym: 2,
    // axisRotation: axisRotations.nyz,
    // rotationColor: rotColor,
    // planeColor: pColor,
    // axisColor: axColor,
    // planes: [],
    // hasPlane: false,
    // },
    nnn_ppp: {
      rotationSym: 3,
      axisRotation: axisRotations.nnn_ppp,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
    nnp_ppn: {
      rotationSym: 3,
      axisRotation: axisRotations.nnp_ppn,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
    npn_pnp: {
      rotationSym: 3,
      axisRotation: axisRotations.npn_pnp,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
    npp_pnn: {
      rotationSym: 3,
      axisRotation: axisRotations.npp_pnn,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
  },
  _432: {
    x: {
      rotationSym: 4,
      axisRotation: axisRotations.x,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [planeRotations.two],
      hasPlane: false,
    },
    y: {
      rotationSym: 4,
      axisRotation: axisRotations.y,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [planeRotations.four],
      hasPlane: false,
    },
    z: {
      rotationSym: 4,
      axisRotation: axisRotations.z,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [planeRotations.two],
      hasPlane: false,
    },
    xy: {
      rotationSym: 2,
      axisRotation: axisRotations.xy,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
    nxy: {
      rotationSym: 2,
      axisRotation: axisRotations.nxy,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
    xz: {
      rotationSym: 2,
      axisRotation: axisRotations.xz,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
    nxz: {
      rotationSym: 2,
      axisRotation: axisRotations.nxz,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
    yz: {
      rotationSym: 2,
      axisRotation: axisRotations.yz,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
    nyz: {
      rotationSym: 2,
      axisRotation: axisRotations.nyz,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
    nnn_ppp: {
      rotationSym: 3,
      axisRotation: axisRotations.nnn_ppp,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
    nnp_ppn: {
      rotationSym: 3,
      axisRotation: axisRotations.nnp_ppn,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
    npn_pnp: {
      rotationSym: 3,
      axisRotation: axisRotations.npn_pnp,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
    npp_pnn: {
      rotationSym: 3,
      axisRotation: axisRotations.npp_pnn,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
  },
  _m3bar: {
    x: {
      rotationSym: 2,
      axisRotation: axisRotations.x,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [planeRotations.two],
      hasPlane: true,
    },
    y: {
      rotationSym: 2,
      axisRotation: axisRotations.y,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [planeRotations.four],
      hasPlane: true,
    },
    z: {
      rotationSym: 4,
      axisRotation: axisRotations.z,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [planeRotations.two],
      hasPlane: true,
    },
    nnn_ppp: {
      rotationSym: 3,
      axisRotation: axisRotations.nnn_ppp,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
    nnp_ppn: {
      rotationSym: 3,
      axisRotation: axisRotations.nnp_ppn,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
    npn_pnp: {
      rotationSym: 3,
      axisRotation: axisRotations.npn_pnp,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
    npp_pnn: {
      rotationSym: 3,
      axisRotation: axisRotations.npp_pnn,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
  },
  _23: {
    x: {
      rotationSym: 2,
      axisRotation: axisRotations.x,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [planeRotations.two],
      hasPlane: false,
    },
    y: {
      rotationSym: 2,
      axisRotation: axisRotations.y,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [planeRotations.four],
      hasPlane: false,
    },
    z: {
      rotationSym: 2,
      axisRotation: axisRotations.z,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [planeRotations.two],
      hasPlane: false,
    },
    nnn_ppp: {
      rotationSym: 3,
      axisRotation: axisRotations.nnn_ppp,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
    nnp_ppn: {
      rotationSym: 3,
      axisRotation: axisRotations.nnp_ppn,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
    npn_pnp: {
      rotationSym: 3,
      axisRotation: axisRotations.npn_pnp,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
    npp_pnn: {
      rotationSym: 3,
      axisRotation: axisRotations.npp_pnn,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
  },
};

export default cubicAxes;
