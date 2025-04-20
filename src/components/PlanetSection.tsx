import Orb from './Orb';

export default function PlanetSection() {
  return (
    <div className="border border-blue-500 p-4 relative">
      <div className="text-xs text-blue-400 mb-1">
        {'>'}
        {'>'}
      </div>
      <div className="flex items-center justify-center h-48 relative">
        <div className="relative w-32 h-32 rounded-full overflow-hidden">
          <Orb
            hoverIntensity={0.1}
            rotateOnHover={true}
            hue={100}
            forceHoverState={false}
            animateHue={true}
          />
        </div>
        <div className="absolute top-0 right-4 text-white">+ + + +</div>
      </div>
      <div className="bg-blue-900/30 p-2 text-blue-300 text-sm">
        {"Vous êtes notre dernier espoir"}
      </div>
    </div>
  );
}
