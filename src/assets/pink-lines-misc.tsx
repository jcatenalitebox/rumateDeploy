type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

const PinkLinesMisc = ({ width = 28, height = 17 }: Props) => {
  return (
    <svg width={width} height={height} viewBox='0 0 34 76' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M31.5 65.7761L20 73.2761' stroke='#FFDFEF' stroke-width='4' stroke-linecap='round' />
      <path d='M20.4968 40.2597L7.00292 42.7927' stroke='#FFDFEF' stroke-width='4' stroke-linecap='round' />
      <path d='M15.2287 9.40685L1.99993 5.73267' stroke='#FFDFEF' stroke-width='4' stroke-linecap='round' />
    </svg>
  );
};

export default PinkLinesMisc;
