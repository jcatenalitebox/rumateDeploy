import StarIcon from '@/assets/star-icon';
import { Box, Card, CardContent, CardMedia, Typography, styled } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PencilMisc from '@/assets/pencil-misc';
import theme from '@/theme';
import { useRouter } from 'next/router';

const StyledCard = styled(Card)`
  min-width: 380px;
  max-width: 100%;
  min-height: 100px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    outline: 1px solid ${theme.palette.customColors.skiBlue};
  }

  .MuiCardContent-root {
    padding: 16px !important;
  }
`;

const StyledTitleWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledReviewWrapper = styled(Box)`
  display: flex;
  gap: 2px;
  align-items: center;
`;

const StyledReviewScoreText = styled(Typography)`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;

const StyledTopRow = styled(Box)`
  display: flex;
  gap: 5px;
`;

const StyledBottomWrapper = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  svg {
    cursor: pointer;
    color: ${theme.palette.customColors.blue};
  }
`;

type Props = {
  apartment: any;
  displayImage?: boolean;
};

const ApartmentCard = ({ apartment, displayImage = true }: Props) => {
  const router = useRouter();
  return (
    <StyledCard key={apartment?.user_id}>
      {displayImage && (
        <CardMedia
          sx={{ height: 165 }}
          image='https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          title='apartment image'
        />
      )}
      <CardContent>
        <StyledTitleWrapper>
          <Typography variant='h5'>{apartment?.name}</Typography>
          <StyledReviewWrapper>
            <StarIcon />
            <StyledReviewScoreText>4.5</StyledReviewScoreText>
          </StyledReviewWrapper>
        </StyledTitleWrapper>
        <StyledTopRow>
          <Typography>{apartment?.state}</Typography>-<Typography>{apartment?.city}</Typography>-
          <Typography>{apartment?.address}</Typography>
        </StyledTopRow>
        <Typography>{apartment?.apartment_price}</Typography>
        <StyledBottomWrapper>
          {router.pathname === '/hostie' && displayImage ? <PencilMisc /> : <ArrowForwardIcon />}
        </StyledBottomWrapper>
      </CardContent>
    </StyledCard>
  );
};

export default ApartmentCard;
