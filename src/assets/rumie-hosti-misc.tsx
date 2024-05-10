type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

const RumieHostieMisc = ({ width = 419, height = 401 }: Props) => {
  return (
    <svg width={width} height={height} viewBox='0 0 419 401' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M18 179.653V364C18 384.435 34.5655 401 55 401H63.1125H373.887H382C402.435 401 419 384.435 419 364V179.736C419 168.536 413.927 157.939 405.203 150.915L241.042 18.7505C227.456 7.81263 208.076 7.84798 194.531 18.8353L31.6919 150.917C23.0305 157.943 18 168.5 18 179.653Z'
        fill='#5FAEFF'
      />
      <path
        d='M154.423 164.613C176.414 174.138 227.871 182.776 257.779 141.136'
        stroke='white'
        strokeWidth='6'
        strokeLinecap='round'
      />
      <path
        d='M165.504 124.526C170.581 128.901 182.089 133.92 187.504 119'
        stroke='white'
        strokeWidth='6'
        strokeLinecap='round'
      />
      <path
        d='M206.504 118.526C211.581 122.901 223.089 127.92 228.504 113'
        stroke='white'
        strokeWidth='6'
        strokeLinecap='round'
      />
      <path
        d='M342 33L323.111 59.4113C323.039 59.5127 323 59.6342 323 59.7588V93'
        stroke='#5FAEFF'
        strokeWidth='20'
        strokeLinecap='round'
      />
      <path d='M0 324C0 261.04 51.0395 210 114 210V210C176.96 210 228 261.04 228 324L228 398H0L0 324Z' fill='#FFE45E' />
      <path d='M59.8944 295.727C69.5 311 85 333.5 125 311' stroke='#031426' strokeWidth='6' strokeLinecap='round' />
      <path
        d='M131.543 293.696C129.333 287.369 121.877 277.268 109.727 287.482'
        stroke='#031426'
        strokeWidth='6'
        strokeLinecap='round'
      />
      <path
        d='M93.0357 278.392C90.8264 272.065 83.3702 261.964 71.2201 272.178'
        stroke='#031426'
        strokeWidth='6'
        strokeLinecap='round'
      />
      <path
        d='M354 171C357.333 171.667 363.9 175.4 363.5 185C364 182 367.5 176.5 377.5 178.5'
        stroke='#031426'
        strokeWidth='4'
        strokeLinecap='round'
      />
      <path
        d='M261 250C264.333 250.667 270.9 254.4 270.5 264C271 261 274.5 255.5 284.5 257.5'
        stroke='#031426'
        strokeWidth='4'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default RumieHostieMisc;
