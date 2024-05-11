type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

const SemiCircleMisc = ({ width = 28, height = 17 }: Props) => {
  return (
    <svg width={width} height={height} viewBox='0 0 367 176' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M0 176C5.58097e-07 78.7979 78.7979 0 176 0L191 0C288.202 0 367 78.7979 367 176L0 176Z' fill='#5FAEFF' />
    </svg>
  );
};

export default SemiCircleMisc;
