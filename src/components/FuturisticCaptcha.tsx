import { useState, useEffect, useRef } from 'react';

interface Props {
  onVerified: () => void;
}

export default function FuturisticCaptcha({ onVerified }: Props) {
  const [captchaCompleted, setCaptchaCompleted] = useState(false);
  const [patternSequence, setPatternSequence] = useState<number[]>([]);
  const [userSequence, setUserSequence] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [showingPattern, setShowingPattern] = useState(false);
  const [currentShowIndex, setCurrentShowIndex] = useState(-1);
  const showTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Generate random pattern sequence
    const newPattern = Array.from({ length: 4 }, () => Math.floor(Math.random() * 9));

    // Simulate system loading
    setTimeout(() => {
      setLoading(false);
      setPatternSequence(newPattern);
      // Don't automatically show the sequence
    }, 2000);

    return () => {
      if (showTimerRef.current) {
        clearTimeout(showTimerRef.current);
      }
    };
  }, []);

  const showSequence = (pattern: number[]) => {
    let index = 0;

    // Cancel any existing timers
    if (showTimerRef.current) {
      clearTimeout(showTimerRef.current);
    }

    setCurrentShowIndex(-1);
    setShowingPattern(true);

    const showNextInSequence = () => {
      if (index < pattern.length) {
        setCurrentShowIndex(pattern[index]);
        showTimerRef.current = setTimeout(() => {
          setCurrentShowIndex(-1);
          showTimerRef.current = setTimeout(() => {
            index++;
            showNextInSequence();
          }, 300);
        }, 700);
      } else {
        setShowingPattern(false);
      }
    };

    showNextInSequence();
  };

  const handleShowPatternAgain = () => {
    setUserSequence([]);
    showSequence(patternSequence);
  };

  const saveCaptchaValidation = () => {
    // Sauvegarder la validation du CAPTCHA dans localStorage
    localStorage.setItem('captchaValidated', 'true');
    localStorage.setItem('captchaValidatedTime', Date.now().toString());
  };

  useEffect(() => {
    // Check if user completed the pattern correctly
    if (userSequence.length === patternSequence.length && patternSequence.length > 0) {
      const correct = userSequence.every((val, index) => val === patternSequence[index]);

      if (correct) {
        // Start biometric scan animation
        let progress = 0;
        const scanInterval = setInterval(() => {
          progress += 2;
          setScanProgress(progress);

          if (progress >= 100) {
            clearInterval(scanInterval);
            setTimeout(() => {
              setCaptchaCompleted(true);
              saveCaptchaValidation();
              setTimeout(onVerified, 1000);
            }, 500);
          }
        }, 50);
      } else {
        setError(true);
        setTimeout(() => {
          setError(false);
          setUserSequence([]);
        }, 1000);
      }
    }
  }, [userSequence, patternSequence, onVerified]);

  const handleGridClick = (index: number) => {
    if (
      loading ||
      captchaCompleted ||
      error ||
      userSequence.length >= patternSequence.length ||
      showingPattern
    )
      return;

    setUserSequence((prev) => [...prev, index]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
      <div className="border-2 border-blue-500 p-8 max-w-md w-full relative bg-black">
        <div className="absolute inset-0 pointer-events-none bg-scanlines opacity-30"></div>

        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-blue-400 mb-2">VÉRIFICATION DE SÉCURITÉ</h2>
          <p className="text-blue-300">SYSTÈME ANTI-RÉPLICATION NEUROMORPHIQUE v9.42</p>
          <p className="text-xs text-blue-200 mt-2">DÉPARTEMENT DE SURVEILLANCE - 2084</p>
        </div>

        {loading ? (
          <div className="text-center">
            <div className="text-blue-400 mb-4">INITIALISATION DU PROTOCOLE DE VÉRIFICATION...</div>
            <div className="flex justify-center space-x-1 mb-3">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="h-1 w-4 attack-pulse"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    backgroundColor: '#36B5D9',
                  }}
                ></div>
              ))}
            </div>
            <div className="text-xs text-blue-300">ANALYSE DES PATTERNS NEURAUX EN COURS</div>
          </div>
        ) : captchaCompleted ? (
          <div className="text-center">
            <div className="text-green-400 mb-4">VÉRIFICATION COMPLÈTE</div>
            <div className="text-sm text-green-300">ACCÈS AUTORISÉ</div>
          </div>
        ) : scanProgress > 0 ? (
          <div className="text-center">
            <div className="text-blue-400 mb-2">SCAN BIOMÉTRIQUE EN COURS</div>
            <div className="w-full bg-blue-900 h-2 mb-4">
              <div
                className="bg-blue-400 h-full"
                style={{ width: `${scanProgress}%`, transition: 'width 0.05s linear' }}
              ></div>
            </div>
            <div className="text-xs text-blue-300">{`PROGRESSION: ${scanProgress}%`}</div>
          </div>
        ) : (
          <>
            <div className="text-center mb-4">
              {showingPattern ? (
                <p className="text-blue-300 mb-2 h-14 flex items-center justify-center">
                  MÉMORISEZ LA SÉQUENCE NEURALE
                </p>
              ) : (
                <p className="text-blue-300 mb-2 h-14 flex items-center justify-center">
                  REPRODUISEZ LA SÉQUENCE NEURALE POUR CONFIRMER QUE VOUS N&apos;ÊTES PAS UNE IA
                </p>
              )}
              <div className="text-xs text-blue-200 mb-4">
                {error ? (
                  <span className="text-orange-400 blink-fast">
                    ERREUR DE SÉQUENCE - VEUILLEZ RÉESSAYER
                  </span>
                ) : showingPattern ? (
                  <span>SEQUENCE EN COURS...</span>
                ) : (
                  <span>{`PROGRESSION: ${userSequence.length} / ${patternSequence.length}`}</span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-6">
              {Array.from({ length: 9 }).map((_, index) => (
                <div
                  key={index}
                  onClick={() => handleGridClick(index)}
                  className={`
                    h-16 border border-blue-500 flex items-center justify-center cursor-pointer
                    ${
                      currentShowIndex === index
                        ? 'bg-blue-500'
                        : userSequence.includes(index) && !showingPattern
                        ? 'bg-blue-500 bg-opacity-30'
                        : 'bg-transparent'
                    }
                    hover:bg-blue-800 hover:bg-opacity-20 transition-colors
                  `}
                >
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                </div>
              ))}
            </div>

            <button
              onClick={handleShowPatternAgain}
              disabled={showingPattern}
              className={`w-full border border-blue-500 text-blue-400 py-2 mb-4 hover:bg-blue-900 hover:bg-opacity-20 transition-colors ${
                showingPattern ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              AFFICHER LA SÉQUENCE
            </button>

            <div className="text-xs text-blue-300 text-center">
              {showingPattern
                ? 'SÉQUENCE DE VALIDATION EN COURS DE PROJECTION'
                : 'ANALYSE DE PATTERNS CÉRÉBRAUX - PROTOCOLE SÉCURISÉ'}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
