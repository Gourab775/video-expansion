/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
  TouchEvent,
  WheelEvent,
} from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [touchStartY, setTouchStartY] = useState<number>(0);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Hydration-safe client detection - runs once on mount
  useEffect(() => {
    setIsClient(true);
    setIsMobileState(window.innerWidth < 768);
  }, []);

  // Reset state when mediaType changes
  const prevMediaTypeRef = useRef(mediaType);
  useEffect(() => {
    if (!isClient) return;
    if (prevMediaTypeRef.current !== mediaType) {
      setScrollProgress(0);
      setShowContent(false);
      setMediaFullyExpanded(false);
      prevMediaTypeRef.current = mediaType;
    }
  }, [mediaType, isClient]);

  // Mobile resize listener
  useEffect(() => {
    if (!isClient) return;

    const checkIfMobile = (): void => {
      setIsMobileState(window.innerWidth < 768);
    };

    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;

    const handleWheel = (e: WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0009;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }

        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = (): void => {
      setTouchStartY(0);
    };

    const handleScroll = (): void => {
      if (!mediaFullyExpanded) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('wheel', handleWheel as unknown as EventListener, {
      passive: false,
    });
    window.addEventListener('scroll', handleScroll as EventListener);
    window.addEventListener(
      'touchstart',
      handleTouchStart as unknown as EventListener,
      { passive: false }
    );
    window.addEventListener(
      'touchmove',
      handleTouchMove as unknown as EventListener,
      { passive: false }
    );
    window.addEventListener('touchend', handleTouchEnd as EventListener);

    return () => {
      window.removeEventListener(
        'wheel',
        handleWheel as unknown as EventListener
      );
      window.removeEventListener('scroll', handleScroll as EventListener);
      window.removeEventListener(
        'touchstart',
        handleTouchStart as unknown as EventListener
      );
      window.removeEventListener(
        'touchmove',
        handleTouchMove as unknown as EventListener
      );
      window.removeEventListener('touchend', handleTouchEnd as EventListener);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY, isClient]);

  const effectiveIsMobile = isClient ? isMobileState : false;
  const mediaWidth = 300 + scrollProgress * (effectiveIsMobile ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (effectiveIsMobile ? 200 : 400);
  const textTranslateX = scrollProgress * (effectiveIsMobile ? 180 : 150);

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div
      ref={sectionRef}
      className='transition-colors duration-700 ease-in-out overflow-x-hidden'
    >
      <section className='relative flex flex-col items-center justify-start min-h-[100dvh]'>
        <div className='relative w-full flex flex-col items-center min-h-[100dvh]'>
          {/* Background Image */}
          <motion.div
            className='absolute inset-0 z-0 h-full'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            <Image
              src={bgImageSrc}
              alt='Background'
              width={1920}
              height={1080}
              className='w-screen h-screen'
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              priority
            />
            <div className='absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60' />
          </motion.div>

          <div className='container mx-auto flex flex-col items-center justify-start relative z-10'>
            <div className='flex flex-col items-center justify-center w-full h-[100dvh] relative'>
              {/* Media Container */}
              <div
                className='absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-none'
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: '95vw',
                  maxHeight: '85vh',
                }}
              >
                <div
                  className='relative w-full h-full overflow-hidden'
                  style={{
                    borderRadius: '20px',
                    boxShadow:
                      '0 25px 80px -12px rgba(0, 0, 0, 0.6), 0 0 40px -8px rgba(5, 150, 105, 0.15)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  {mediaType === 'video' ? (
                    mediaSrc.includes('youtube.com') ? (
                      <div className='relative w-full h-full pointer-events-none'>
                        <iframe
                          width='100%'
                          height='100%'
                          src={
                            mediaSrc.includes('embed')
                              ? mediaSrc +
                                (mediaSrc.includes('?') ? '&' : '?') +
                                'autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1'
                              : mediaSrc.replace('watch?v=', 'embed/') +
                                '?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=' +
                                mediaSrc.split('v=')[1]
                          }
                          className='w-full h-full'
                          style={{ borderRadius: '20px' }}
                          frameBorder='0'
                          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                          allowFullScreen
                        />
                        <div
                          className='absolute inset-0 z-10'
                          style={{ pointerEvents: 'none' }}
                        ></div>

                        <motion.div
                          className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20'
                          initial={{ opacity: 0.7 }}
                          animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                          transition={{ duration: 0.2 }}
                          style={{ borderRadius: '20px' }}
                        />
                      </div>
                    ) : (
                      <div className='relative w-full h-full pointer-events-none'>
                        <video
                          src={mediaSrc}
                          poster={posterSrc}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload='auto'
                          className='w-full h-full object-cover'
                          style={{ borderRadius: '20px' }}
                          controls={false}
                          disablePictureInPicture
                          disableRemotePlayback
                        />
                        <div
                          className='absolute inset-0 z-10'
                          style={{ pointerEvents: 'none' }}
                        ></div>

                        <motion.div
                          className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20'
                          initial={{ opacity: 0.7 }}
                          animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                          transition={{ duration: 0.2 }}
                          style={{ borderRadius: '20px' }}
                        />
                      </div>
                    )
                  ) : (
                    <div className='relative w-full h-full'>
                      <Image
                        src={mediaSrc}
                        alt={title || 'Media content'}
                        width={1280}
                        height={720}
                        className='w-full h-full object-cover'
                        style={{ borderRadius: '20px' }}
                      />

                      <motion.div
                        className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20'
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: 0.7 - scrollProgress * 0.3 }}
                        transition={{ duration: 0.2 }}
                        style={{ borderRadius: '20px' }}
                      />
                    </div>
                  )}

                  {/* Text overlay on media */}
                  <div className='flex flex-col items-center text-center relative z-10 mt-4 transition-none px-6 pb-4'>
                    {date && (
                      <p
                        className='text-sm md:text-base font-medium tracking-[0.2em] uppercase text-white/70'
                        style={{
                          transform: `translateX(-${textTranslateX}vw)`,
                        }}
                      >
                        {date}
                      </p>
                    )}
                    {scrollToExpand && !mediaFullyExpanded && (
                      <motion.p
                        className='text-xs md:text-sm font-light tracking-[0.15em] uppercase text-white/50 mt-2'
                        style={{
                          transform: `translateX(${textTranslateX}vw)`,
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        {scrollToExpand}
                      </motion.p>
                    )}
                  </div>
                </div>
              </div>

              {/* Title Text */}
              <div
                className={`flex items-center justify-center text-center gap-4 w-full relative z-10 transition-none flex-col ${
                  textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
                }`}
              >
                <motion.h2
                  className='text-4xl md:text-5xl lg:text-7xl font-bold transition-none'
                  style={{
                    transform: `translateX(-${textTranslateX}vw)`,
                    background: '#fff61c',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: 'none',
                  }}
                >
                  {firstWord}
                </motion.h2>
                <motion.h2
                  className='text-4xl md:text-5xl lg:text-7xl font-bold text-center transition-none'
                  style={{
                    transform: `translateX(${textTranslateX}vw)`,
                    background: '#fff61c',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: 'none',
                  }}
                >
                  {restOfTitle}
                </motion.h2>
              </div>

              {/* Scroll Indicator */}
              <AnimatePresence>
                {!mediaFullyExpanded && (
                  <motion.div
                    className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2'
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className='w-[1px] h-12 bg-gradient-to-b from-transparent via-white/40 to-white/60 animate-pulse' />
                    <svg
                      className='w-4 h-4 text-white/50 animate-bounce'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path d='M19 14l-7 7m0 0l-7-7m7 7V3'></path>
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Content Section */}
            <motion.section
              className='flex flex-col w-full px-8 py-10 md:px-16 lg:py-20'
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
