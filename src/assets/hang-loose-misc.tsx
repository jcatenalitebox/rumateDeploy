type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

const HangLooseMisc = ({ width = 28, height = 17 }: Props) => {
  return (
    <svg width={width} height={height} viewBox='0 0 159 119' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M87.2968 117.685C55.6412 121.202 40.3996 100.098 36.7358 89.1066C31.4599 72.3996 23.5457 66.0245 12.5541 69.3218C1.56238 72.6191 -3.93294 53.2005 4.85965 42.9422C20.6875 24.4764 38.9341 48.8042 49.9256 57.231C49.0463 44.0412 54.3221 30.8515 56.5204 24.2566C62.7691 5.51029 79.2363 10.7002 85.0985 15.4632C96.5297 5.79062 105.25 13.6313 108.181 18.7606C119.612 15.2433 123.935 25.3556 124.668 30.8513C131.703 27.334 137.125 16.196 138.957 11.0667C143.354 -5.42057 155.526 0.0752189 156.544 5.57092C164.238 22.0583 140.789 57.9639 130.164 69.3218C132.802 112.409 102.685 119.517 87.2968 117.685Z'
        fill='#FFDFEF'
      />
      <path
        d='M67.2926 33.3637C64.3123 46.8226 61.838 73.4715 75.7831 72.3958C81.678 73.0436 91.3341 64.5929 85 16.575'
        stroke='black'
        stroke-width='2.19831'
        stroke-linecap='round'
      />
      <path
        d='M82.2454 71.9006C88.7101 79.4863 104.672 82.5178 109.724 56.552C111.381 49.4422 111.996 37.4151 107.946 19.2069'
        stroke='black'
        stroke-width='2.19831'
        stroke-linecap='round'
      />
      <path
        d='M107.282 67.7648C113.802 71.3041 125.263 78.3565 127.029 58.3768C127.612 51.7804 128.374 41.0161 125 31.5751'
        stroke='black'
        stroke-width='2.19831'
        stroke-linecap='round'
      />
    </svg>
  );
};

export default HangLooseMisc;
