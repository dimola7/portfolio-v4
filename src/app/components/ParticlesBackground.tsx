import Particles from "react-tsparticles";
import particlesConfig from "../config/particle-config";
import { ISourceOptions } from "tsparticles";

const ParticlesBackground = () => {
  return <Particles params={particlesConfig as ISourceOptions}></Particles>;
};

export default ParticlesBackground;
