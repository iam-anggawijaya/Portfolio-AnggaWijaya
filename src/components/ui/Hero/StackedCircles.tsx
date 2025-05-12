import React from 'react';

type StackedCirclesProps = {
  className?: string;
  style?: React.CSSProperties;
};

const StackedCircles = ({ className, style }: StackedCirclesProps) => (
  <div
    className={`flex-center rounded-full bg-[rgba(102,0,235,0.2)] opacity-70${className ? ` ${className}` : ''}`}
    style={{
      width: 'clamp(37.94rem, 70.69vw, 63.63rem)',
      height: 'clamp(37.94rem, 70.69vw, 63.63rem)',
      ...style,
    }}
  >
    <div
      className='flex-center rounded-full bg-[rgba(102,0,235,0.4)]'
      style={{
        width: 'clamp(29.81rem, 55.49vw, 49.94rem)',
        height: 'clamp(29.81rem, 55.49vw, 49.94rem)',
      }}
    >
      <div
        className='flex-center rounded-full bg-[rgba(102,0,235,0.6)]'
        style={{
          width: 'clamp(21.63rem, 40.28vw, 36.25rem)',
          height: 'clamp(21.63rem, 40.28vw, 36.25rem)',
        }}
      >
        <div
          className='flex-center rounded-full bg-[rgba(102,0,235,0.8)]'
          style={{
            width: 'clamp(13.5rem, 25.14vw, 22.63rem)',
            height: 'clamp(13.5rem, 25.14vw, 22.63rem)',
          }}
        />
      </div>
    </div>
  </div>
);

export default StackedCircles;
