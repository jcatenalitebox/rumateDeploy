type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

const RumateFeedHeaderIcon = ({ width = 36, height = 36 }: Props) => {
  return (
    <svg width={width} height={height} viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g filter='url(#filter0_d_28_32859)'>
        <circle cx='18' cy='17' r='16' fill='#FFE45E' />
        <path
          d='M9.01922 16.7889C11.3421 20.4823 15.0903 25.9233 24.7632 20.4823'
          stroke='#031426'
          stroke-width='2'
          stroke-linecap='round'
        />
        <path
          d='M26.3454 16.2978C25.8111 14.7677 24.0081 12.3251 21.0699 14.795'
          stroke='#031426'
          stroke-width='2'
          stroke-linecap='round'
        />
        <path
          d='M17.0336 12.5971C16.4994 11.0671 14.6963 8.62445 11.7582 11.0944'
          stroke='#031426'
          stroke-width='2'
          stroke-linecap='round'
        />
      </g>
      <defs>
        <filter
          id='filter0_d_28_32859'
          x='0'
          y='0'
          width='36'
          height='36'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'>
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='1' />
          <feGaussianBlur stdDeviation='1' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0' />
          <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_28_32859' />
          <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_28_32859' result='shape' />
        </filter>
      </defs>
    </svg>
  );
};

export default RumateFeedHeaderIcon;
