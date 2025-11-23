'use client';

import { useEffect, useState } from 'react';

interface Particle {
    id: number;
    x: number;
    y: number;
    char: string;
    opacity: number;
    rotation: number;
}

export default function CustomCursor() {
    const [particles, setParticles] = useState<Particle[]>([]);
    const [cursorType, setCursorType] = useState<'dollar' | 'number' | 'chart'>('dollar');
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        let particleId = 0;
        let lastX = 0;
        let lastY = 0;
        let frameCount = 0;

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;

            // Only create particles every few frames to avoid lag
            frameCount++;
            if (frameCount % 3 !== 0) return;

            // Check what element we're hovering over
            const target = e.target as HTMLElement;
            if (target.matches('[data-cursor="number"]')) {
                setCursorType('number');
            } else if (target.matches('[data-cursor="chart"]')) {
                setCursorType('chart');
            } else {
                setCursorType('dollar');
            }

            setIsHovering(!!target.closest('button, a, [data-interactive]'));

            // Only create trail if mouse is moving
            const distance = Math.sqrt(Math.pow(clientX - lastX, 2) + Math.pow(clientY - lastY, 2));
            if (distance < 5) return;

            lastX = clientX;
            lastY = clientY;

            // Create particle based on cursor type
            let char = '$';
            if (cursorType === 'number') {
                char = String(Math.floor(Math.random() * 10));
            } else if (cursorType === 'chart') {
                char = ['▁', '▂', '▃', '▄', '▅', '▆', '▇', '█'][Math.floor(Math.random() * 8)];
            }

            const newParticle: Particle = {
                id: particleId++,
                x: clientX,
                y: clientY,
                char,
                opacity: 1,
                rotation: Math.random() * 360,
            };

            setParticles(prev => [...prev, newParticle].slice(-20)); // Keep last 20 particles
        };

        const handleClick = (e: MouseEvent) => {
            // Create "stamp approved" effect on click
            const { clientX, clientY } = e;
            const stamp: Particle = {
                id: particleId++,
                x: clientX - 30,
                y: clientY - 15,
                char: '✓',
                opacity: 1,
                rotation: -15,
            };
            setParticles(prev => [...prev, stamp]);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('click', handleClick);

        // Fade out particles
        const fadeInterval = setInterval(() => {
            setParticles(prev =>
                prev
                    .map(p => ({ ...p, opacity: p.opacity - 0.05 }))
                    .filter(p => p.opacity > 0)
            );
        }, 50);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('click', handleClick);
            clearInterval(fadeInterval);
        };
    }, [cursorType]);

    return (
        <>
            {/* Custom cursor dot */}
            <style jsx global>{`
        * {
          cursor: none !important;
        }
        body {
          cursor: none !important;
        }
      `}</style>

            {/* Cursor dot */}
            <div
                className="fixed pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    left: 0,
                    top: 0,
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <div
                    className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${isHovering
                            ? 'border-green-400 scale-150 bg-green-400/20'
                            : 'border-white scale-100'
                        }`}
                />
            </div>

            {/* Particle trail */}
            <div className="fixed inset-0 pointer-events-none z-[9998]">
                {particles.map(particle => (
                    <div
                        key={particle.id}
                        className="absolute text-green-400 font-mono text-lg font-bold transition-opacity duration-500"
                        style={{
                            left: particle.x,
                            top: particle.y,
                            opacity: particle.opacity,
                            transform: `translate(-50%, -50%) rotate(${particle.rotation}deg)`,
                            textShadow: '0 0 10px rgba(16, 185, 129, 0.5)',
                        }}
                    >
                        {particle.char}
                    </div>
                ))}
            </div>
        </>
    );
}
