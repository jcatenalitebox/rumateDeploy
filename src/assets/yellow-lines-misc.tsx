type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

const YellowLinesMisc = ({ width = 28, height = 17 }: Props) => {
  return (
    <svg width={width} height={height} viewBox='0 0 60 180' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M25.6301 169.776L37.1301 177.276' stroke='#FFE45E' stroke-width='4' stroke-linecap='round' />
      <path d='M36.6334 144.26L50.1272 146.793' stroke='#FFE45E' stroke-width='4' stroke-linecap='round' />
      <path d='M43.9014 100.407L57.1302 96.7327' stroke='#FFE45E' stroke-width='4' stroke-linecap='round' />
      <path d='M27.9196 53.5456L39.1121 45.594' stroke='#FFE45E' stroke-width='4' stroke-linecap='round' />
      <path d='M1.99993 20.6549L17.1301 2.77616' stroke='#FFE45E' stroke-width='4' stroke-linecap='round' />
    </svg>
  );
};

export default YellowLinesMisc;
