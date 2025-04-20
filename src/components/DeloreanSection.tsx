import { useState, useEffect, useRef } from 'react';

export default function DeloreanSection() {
  // List of available live streams
  const videoIds = [
    'hMFKWyvHHr0', // Philippines Live Webcam
    'R8LU4PCZdgo', // St. Augustine Live
    'yFgVmioYkys', // The Real Samui Webcam
    '08UBMud58ZE', // SeeCam
    'vAZcPhMACeo', // JazBaz Philippines
    'h1wly909BYw', // Mobotix Webcams Russia
    'AAqFeBSQWsA', // Live from Ireland
  ];

  const [currentVideoId, setCurrentVideoId] = useState(videoIds[0]);
  const [recentWebcams, setRecentWebcams] = useState<string[]>([videoIds[0]]);
  const [playerError, setPlayerError] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const getRandomVideoId = () => {
      const availableIds = videoIds.filter((id) => !recentWebcams.includes(id));

      if (availableIds.length === 0) {
        const nonCurrentIds = videoIds.filter((id) => id !== currentVideoId);
        const randomIndex = Math.floor(Math.random() * nonCurrentIds.length);
        return nonCurrentIds[randomIndex];
      }

      const randomIndex = Math.floor(Math.random() * availableIds.length);
      return availableIds[randomIndex];
    };

    const switchVideo = () => {
      setPlayerError(false);
      const newVideoId = getRandomVideoId();
      setCurrentVideoId(newVideoId);

      setRecentWebcams((prevRecent) => {
        const updated = [newVideoId, ...prevRecent];
        return updated.slice(0, 4);
      });
    };

    const randomTime = Math.floor(Math.random() * (25000 - 10000 + 1)) + 10000;

    const timeoutId = setTimeout(switchVideo, randomTime);

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentVideoId]);

  const handleIframeError = () => {
    setPlayerError(true);
    // If there's an error loading the current video, switch to another one
    setTimeout(() => {
      const newVideoId = videoIds.filter((id) => id !== currentVideoId)[
        Math.floor(Math.random() * (videoIds.length - 1))
      ];
      setCurrentVideoId(newVideoId);
    }, 3000);
  };

  return (
    <div className="h-full w-full border border-blue-500 p-4 flex flex-col">
      <div className="flex justify-between text-xs text-blue-400 mb-1">
        <span>{'Ils nous observent ...'}</span>
        <span>{'xx-xx-x'}</span>
      </div>
      <div className="flex-grow relative overflow-hidden">
        <div className="absolute inset-0 filter grayscale blur-[1px] contrast-50 brightness-75 overflow-hidden">
          <div className="absolute inset-0 scale-[1.4] origin-center overflow-hidden">
            {!playerError ? (
              <iframe
                ref={iframeRef}
                src={`https://www.youtube-nocookie.com/embed/${currentVideoId}?autoplay=1&controls=0&disablekb=1&fs=0&rel=0&modestbranding=1&iv_load_policy=3&mute=1&showinfo=0&vq=tiny&enablejsapi=0&loop=1`}
                className="w-full h-full pointer-events-none"
                style={{
                  position: 'absolute',
                  top: '-15%',
                  left: 0,
                  width: '100%',
                  height: '130%',
                }}
                title="Live Webcam"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                onError={handleIframeError}
              />
            ) : (
              <div className="w-full h-full bg-black flex items-center justify-center">
                <div className="text-blue-500 text-xs">Reconnexion...</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
