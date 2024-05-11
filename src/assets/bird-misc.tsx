type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

const BirdMisc = ({ width = 28, height = 17 }: Props) => {
  return (
    <svg width={width} height={height} viewBox='0 0 28 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M2 2C5.33333 2.66667 11.9 6.4 11.5 16C12 13 15.5 7.5 25.5 9.5'
        stroke='#031426'
        strokeWidth='4'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default BirdMisc;
