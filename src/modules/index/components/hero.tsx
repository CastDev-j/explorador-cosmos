import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef, useMemo, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import * as THREE from "three";
import { Stars, OrbitControls } from "@react-three/drei";
import { useProgress } from "@react-three/drei";
import earthVertexShader from "../shaders/earth/vertex.glsl";
import earthFragmentShader from "../shaders/earth/fragment.glsl";
import atmosphereVertexShader from "../shaders/atmosphere/vertex.glsl";
import atmosphereFragmentShader from "../shaders/atmosphere/fragment.glsl";

gsap.registerPlugin(useGSAP);

const LoadingManager = ({ onLoaded }: { onLoaded: () => void }) => {
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      onLoaded();
    }
  }, [progress, onLoaded]);

  return null;
};

const AnimatedEarth = () => {
  const earthRef = useRef<THREE.Mesh>(null!);
  const atmosphereRef = useRef<THREE.Mesh>(null!);

  const [dayTexture, nightTexture, specularCloudsTexture] = useLoader(
    THREE.TextureLoader,
    [
      "/textures/earth/day.jpg",
      "/textures/earth/night.jpg",
      "/textures/earth/specularClouds.jpg",
    ]
  );

  useMemo(() => {
    dayTexture.colorSpace = THREE.SRGBColorSpace;
    dayTexture.anisotropy = 8;
    nightTexture.colorSpace = THREE.SRGBColorSpace;
    nightTexture.anisotropy = 8;
    specularCloudsTexture.anisotropy = 8;
  }, [dayTexture, nightTexture, specularCloudsTexture]);

  const sunDirection = useMemo(() => {
    const spherical = new THREE.Spherical(1, Math.PI / 2, 0.5);
    const direction = new THREE.Vector3();
    direction.setFromSpherical(spherical);
    return direction;
  }, []);

  const atmosphereColors = useMemo(
    () => ({
      day: new THREE.Color("#00aaff"),
      twilight: new THREE.Color("#ff6600"),
    }),
    []
  );

  const earthUniforms = useMemo(
    () => ({
      uDayTexture: { value: dayTexture },
      uNightTexture: { value: nightTexture },
      uSpecularCloudsTexture: { value: specularCloudsTexture },
      uSunDirection: { value: sunDirection },
      uAtmosphereDayColor: { value: atmosphereColors.day },
      uAtmosphereTwilightColor: { value: atmosphereColors.twilight },
    }),
    [
      dayTexture,
      nightTexture,
      specularCloudsTexture,
      sunDirection,
      atmosphereColors,
    ]
  );

  const atmosphereUniforms = useMemo(
    () => ({
      uSunDirection: { value: sunDirection },
      uAtmosphereDayColor: { value: atmosphereColors.day },
      uAtmosphereTwilightColor: { value: atmosphereColors.twilight },
    }),
    [sunDirection, atmosphereColors]
  );

  useFrame((state) => {
    if (earthRef.current) {
      earthRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }

    if (sunDirection) {
      const elapsed = state.clock.elapsedTime * 0.1 + 3;
      const spherical = new THREE.Spherical(1, Math.PI / 2, elapsed);
      sunDirection.setFromSpherical(spherical);
    }
  });

  useGSAP(() => {}, []);

  return (
    <group>
      {/* Earth */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <shaderMaterial
          vertexShader={earthVertexShader}
          fragmentShader={earthFragmentShader}
          uniforms={earthUniforms}
        />
      </mesh>

      {/* Atmosphere */}
      <mesh ref={atmosphereRef} scale={1.035}>
        <sphereGeometry args={[2, 64, 64]} />
        <shaderMaterial
          vertexShader={atmosphereVertexShader}
          fragmentShader={atmosphereFragmentShader}
          uniforms={atmosphereUniforms}
          side={THREE.BackSide}
          transparent
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
};

const Hero = () => {
  const [cameraPosition, setCameraPosition] = useState<
    [number, number, number]
  >([12, 5, 4]);
  const [isLoaded, setIsLoaded] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateCameraPosition = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setCameraPosition([12, 5, 4]);
      } else if (width < 1024) {
        setCameraPosition([10, 4, 3]);
      } else if (width < 1536) {
        setCameraPosition([8, 3, 2]);
      } else {
        setCameraPosition([7, 3, 2]);
      }
    };

    updateCameraPosition();

    window.addEventListener("resize", updateCameraPosition);

    return () => window.removeEventListener("resize", updateCameraPosition);
  }, []);

  useGSAP(() => {
    if (isLoaded && overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 0.4,
        duration: 1.5,
        ease: "power2.out",
      });
    }
  }, [isLoaded]);

  return (
    <>
      <div
        ref={overlayRef}
        className="absolute inset-0 w-full h-[95vh] bg-stone-950 opacity-100 -z-0 mt-16"
      ></div>
      <section className="absolute inset-0 w-full h-[95vh] bg-stone-950 -z-10 mt-16">
        <Canvas camera={{ position: cameraPosition, fov: 25 }}>
          <LoadingManager onLoaded={() => setIsLoaded(true)} />
          <OrbitControls enableDamping enablePan={false} />
          <AnimatedEarth />
          <Stars
            radius={10}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
        </Canvas>
      </section>
    </>
  );
};

export default Hero;

useLoader.preload(THREE.TextureLoader, [
  "/textures/earth/day.jpg",
  "/textures/earth/night.jpg",
  "/textures/earth/specularClouds.jpg",
]);
