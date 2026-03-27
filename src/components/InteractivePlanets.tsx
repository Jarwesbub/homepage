import { useEffect, useMemo } from "react";
import { useLottie } from "lottie-react";
import sunAnim from "../assets/animations/sun_anim.json";
import planet1Anim from "../assets/animations/planet1_anim.json";
import planet2Anim from "../assets/animations/planet2_anim.json";
import planet3Anim from "../assets/animations/planet3_anim.json";

type AnimationData = {
  w?: number;
  h?: number;
  layers?: any[];
};

const PLANET_ANIMATIONS: AnimationData[] = [
  sunAnim,
  planet1Anim,
  planet2Anim,
  planet3Anim,
];

const isSolidWhiteBackgroundLayer = (
  layer: any,
  width: number | undefined,
  height: number | undefined,
) => {
  if (width === undefined || height === undefined) return false;
  if (layer?.ty !== 4 || !Array.isArray(layer?.shapes)) return false;

  const rect = layer.shapes.find((shape: any) => shape?.ty === "rc");
  const fill = layer.shapes.find((shape: any) => shape?.ty === "fl");

  const size = rect?.s?.k;
  const color = fill?.c?.k;
  const opacity = fill?.o?.k;

  return (
    Array.isArray(size) &&
    size[0] === width &&
    size[1] === height &&
    Array.isArray(color) &&
    color[0] === 1 &&
    color[1] === 1 &&
    color[2] === 1 &&
    opacity === 100
  );
};

const withTransparentBackground = (animationData: AnimationData) => {
  const width = animationData?.w;
  const height = animationData?.h;

  return {
    ...animationData,
    layers: (animationData?.layers ?? []).filter(
      (layer: any) => !isSolidWhiteBackgroundLayer(layer, width, height),
    ),
  };
};

function PlanetLayer({
  animationData,
  layerStyle,
  speed,
}: {
  animationData: AnimationData;
  layerStyle: { position: "absolute"; inset: number };
  speed: number;
}) {
  const { View, setSpeed } = useLottie(
    {
      animationData,
      loop: true,
      autoplay: true,
    },
    layerStyle,
  );

  useEffect(() => {
    setSpeed(speed);
  }, [setSpeed, speed]);

  return <>{View}</>;
}

export function InteractivePlanets() {
  const stackStyle = {
    position: "relative" as const,
    width: 600,
    height: 600,
    margin: "0 auto",
  };

  const layerStyle = {
    position: "absolute" as const,
    inset: 0,
  };
  const speed = 0.2;

  const transparentAnimations = useMemo(
    () => PLANET_ANIMATIONS.map(withTransparentBackground),
    [],
  );

  return (
    <div>
      <h2 className="font-medium !text-sky-200">Lottie Animation Test</h2>
      <div style={stackStyle}>
        {transparentAnimations.map((animationData, index) => (
          <PlanetLayer
            key={index}
            animationData={animationData}
            layerStyle={layerStyle}
            speed={speed}
          />
        ))}
      </div>
    </div>
  );
}
