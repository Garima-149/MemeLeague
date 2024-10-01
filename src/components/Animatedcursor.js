import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const coords = useRef({ x: 0, y: 0 });
  const circlesRef = useRef([]);

  useEffect(() => {
    const circles = circlesRef.current;
    const colors = [
      "#55a5ea",
      "#55a5ea",
      "#55a5ea",
      "#55a5ea",
      "#55a5ea",
      "#55a5ea",
      "#55a5ea",
      "#55a5ea",
      "#3fbcc0c6",
      "#3fbcc0c6",
      "#3fbcc0c6",
      "#3fbcc0c6",
      "#3fbcc0c6",
      "#3fbcc0c6",
      "fff",
      "fff",
      "fff",
      "fff",
      "fff",
      "fff",
      "fff",
    ];

    circles.forEach((circle, index) => {
      circle.style.backgroundColor = colors[index % colors.length];
      circle.x = 0;
      circle.y = 0;
    });

    const handleMouseMove = (e) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animateCircles = () => {
      let x = coords.current.x + window.scrollX;
      let y = coords.current.y + window.scrollY;

      circles.forEach((circle, index) => {
        circle.style.left = `${x - 12}px`;
        circle.style.top = `${y - 12}px`;
        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;

        circle.x = x;
        circle.y = y;
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      {Array.from({ length: 24 }).map((_, index) => (
        <div
          key={index}
          className="circle"
          ref={(el) => (circlesRef.current[index] = el)}
          style={{
            position: 'absolute',
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 9999,
          }}
        />
      ))}
    </div>
  );
};

export default CustomCursor;
