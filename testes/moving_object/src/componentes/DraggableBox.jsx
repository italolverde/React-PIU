import React, { useRef, useState, useEffect } from 'react';

const DraggableBox = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);

  const velocity = useRef({ vx: 0, vy: 0 });
  const lastPosition = useRef({ x: 0, y: 0, time: 0 });
  const animationRef = useRef(null);

  const onMouseDown = (e) => {
    setDragging(true);
    lastPosition.current = {
      x: e.clientX,
      y: e.clientY,
      time: performance.now(),
    };
    cancelAnimationFrame(animationRef.current);
  };

  const onMouseMove = (e) => {
    if (!dragging) return;

    const now = performance.now();
    const dx = e.clientX - lastPosition.current.x;
    const dy = e.clientY - lastPosition.current.y;
    const dt = now - lastPosition.current.time;

    if (dt > 0) {
      velocity.current = {
        vx: dx / dt,
        vy: dy / dt,
      };
    }

    setPosition((prev) => ({
      x: prev.x + dx,
      y: prev.y + dy,
    }));

    lastPosition.current = {
      x: e.clientX,
      y: e.clientY,
      time: now,
    };
  };

  const onMouseUp = () => {
    setDragging(false);
    animateInertia();
  };

  const animateInertia = () => {
    const friction = 0.95;

    const step = () => {
      velocity.current.vx *= friction;
      velocity.current.vy *= friction;

      if (Math.abs(velocity.current.vx) < 0.01 && Math.abs(velocity.current.vy) < 0.01) {
        return;
      }

      setPosition((prev) => ({
        x: prev.x + velocity.current.vx * 16, // 16ms ~= 60fps
        y: prev.y + velocity.current.vy * 16,
      }));

      animationRef.current = requestAnimationFrame(step);
    };

    step();
  };

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [dragging]);

  return (
    <div
      onMouseDown={onMouseDown}
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: '100px',
        height: '100px',
        backgroundColor: 'dodgerblue',
        cursor: 'grab',
        borderRadius: '8px',
      }}
    />
  );
};

export default DraggableBox;
