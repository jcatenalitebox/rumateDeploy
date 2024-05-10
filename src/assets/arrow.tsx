type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

const BirdMisc = ({ width = 28, height = 17, fill = 'none' }: Props) => {
  return (
    <svg width={width} height={height} viewBox='0 0 13 20' fill={fill} xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12.51 1.86998L10.73 0.0999756L0.839966 9.99998L10.74 19.9L12.51 18.13L4.37997 9.99998L12.51 1.86998Z'
        fill='#031426'
      />
    </svg>
  );
};

export default BirdMisc;
