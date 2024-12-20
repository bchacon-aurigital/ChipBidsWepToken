import React from 'react';

const AnimatedBorder = () => {
  return (
    <div className="relative inline-flex h-12 w-60 overflow-hidden rounded-lg p-[1px]">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-gradient-to-r from-[#00D8FF] to-[#094037]" />
      <span className="inline-flex h-full w-full rounded-lg bg-slate-950" />
    </div>
  );
};

export default AnimatedBorder;