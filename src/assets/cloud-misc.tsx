type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

const CloudMisc = ({ width = 138, height = 66 }: Props) => {
  return (
    <svg width={width} height={height} viewBox='0 0 138 66' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M119 31H120.5C130.165 31 138 38.835 138 48.5C138 58.165 130.165 66 120.5 66H17.5C7.83502 66 0 58.165 0 48.5C0 38.835 7.83502 31 17.5 31H25C25 21.0589 33.0589 13 43 13C49.5401 13 55.2655 16.4879 58.4176 21.7051C62.3662 9.12545 74.1174 0 88 0C105.121 0 119 13.8792 119 31Z'
        fill='#FCFCFC'
      />
    </svg>
  );
};

export default CloudMisc;
