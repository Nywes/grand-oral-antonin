import YouTube from 'react-youtube';
import { useState, useEffect } from 'react';

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
  }, [currentVideoId]); // Re-run effect when currentVideoId changes

  return (
    <div className="border border-blue-500 p-4 flex flex-col">
      <div className="flex justify-between text-xs text-blue-400 mb-1">
        <span>{'Delorean'}</span>
        <span>{'Démarrer'}</span>
      </div>
      <div className="mt-8 h-48 bg-gradient-to-b from-transparent to-blue-900/20 flex items-center justify-center overflow-hidden">
        <div className="filter grayscale blur-[1px] contrast-50 brightness-75">
          <YouTube
            videoId={currentVideoId}
            id={''}
            className={''}
            iframeClassName={'pointer-events-none'}
            style={{}}
            title={''}
            loading={'lazy'}
            opts={{
              playerVars: {
                autoplay: 1,
                controls: 0,
                disablekb: 1,
                fs: 0,
                rel: 0,
                modestbranding: 1,
                iv_load_policy: 3,
                mute: 1,
                vq: 'tiny',
              },
            }}
            onReady={() => {}}
            onPlay={() => {}}
            onPause={() => {}}
            onEnd={() => {}}
            onError={() => {}}
            onStateChange={() => {}}
            onPlaybackRateChange={() => {}}
            onPlaybackQualityChange={() => {}}
          />
        </div>
      </div>
    </div>
  );
}
