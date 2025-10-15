import { useRef, useState, type FC } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { FaSpaceShuttle } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const ThreeExample: FC = () => {
  return (
    <Canvas className="bg-transparent" camera={{ position: [-1, 1, 1.5] }}>
      <ambientLight intensity={0.9} />
      <directionalLight position={[2, 2, 2]} intensity={0.6} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"#6366f1"} />
      </mesh>
      <OrbitControls enablePan={false} />
      <Html center position={[0, 1, 0]}>
        <div className="text-slate-900 text-xs bg-neutral-50/70 p-4 rounded-md animate-wiggle animate-infinite">
          drei Html
        </div>
      </Html>
    </Canvas>
  );
};

const Test: FC = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState(0);
  const inc = () => setCount((c) => c + 1);

  useGSAP(
    () => {
      gsap.to(".shuttle-icon", {
        x: () => {
          const containerWidth = container.current?.offsetWidth || 0;
          return containerWidth;
        },
        duration: 2.5,
        ease: "steps(12)",
        yoyo: true,
        repeat: -1,
      });
    },
    { scope: container }
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-neutral-950 p-6">
      <main className="w-full max-w-[980px]">
        <section className="flex flex-col gap-3 mt-4">
          <div className="h-90 bg-neutral-200 animate-fade">
            <ThreeExample />
          </div>

          <article className="animate-fade">
            <button
              onClick={inc}
              className="group flex justify-between px-3 py-2 rounded-md w-full bg-white items-center gap-8 outline-stone-200 outline-2 hover:outline-4 transition-all duration-150"
            >
              <div ref={container} className="w-full">
                <FaSpaceShuttle aria-hidden className="shuttle-icon" />
              </div>
              <div className="transition-transform group-hover:scale-105 flex shrink-0">
                Increment ({count})
              </div>
            </button>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Test;
