import { Box, IconButton, Typography, styled } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import theme from '@/theme';
import { useRouter } from 'next/router';

const StyledWrapper = styled(Box)`
  ${theme.mixins.layout};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const StyledIconButton = styled(IconButton)`
  &:hover {
    background: none;
  }
`;

const StyledArrowBackIosIcon = styled(ArrowBackIosIcon)`
  color: ${theme.palette.customColors.black};
`;

type Props = {
  onClickBack?: () => void;
  title?: string;
  rightComponent?: React.ReactNode;
};

const MobileHeader = ({ onClickBack, title, rightComponent }: Props) => {
  const router = useRouter();

  const handleOnClickBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onClickBack) return onClickBack();
    router.back();
  };

  return (
    <StyledWrapper>
      <StyledIconButton onClick={handleOnClickBack}>
        <StyledArrowBackIosIcon color='inherit' />
      </StyledIconButton>
      <Typography variant='h1'>{title}</Typography>
      <Box>{rightComponent}</Box>
    </StyledWrapper>
  );
};

export default MobileHeader;
