import { BirdMisc } from '@/assets';
import EmptyStateHandMisc from '@/assets/empty-state-misc';
import { Box, Typography, styled } from '@mui/material';

const StyledEmptyStateMiscWrapper = styled(Box)`
  margin-top: 80px;
`;

const StyledBirdMisc = styled(Box)`
  position: absolute;
  left: 60px;
  top: 225px;
`;

const StyledHandMisc = styled(Box)``;

const StyledEmptyStateTextWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
  align-items: center;
`;
const StyledEmptyStateTitle = styled(Typography)`
  font-weight: 600;
  line-height: 28px;
  font-size: 20px;
  max-width: 260px;
`;

const StyledEmptyStateDesc = styled(Typography)`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

const RumieEmptyState = () => {
  return (
    <>
      <StyledEmptyStateMiscWrapper>
        <StyledBirdMisc>
          <BirdMisc />
        </StyledBirdMisc>
        <StyledHandMisc>
          <EmptyStateHandMisc />
        </StyledHandMisc>
      </StyledEmptyStateMiscWrapper>
      <StyledEmptyStateTextWrapper>
        <StyledEmptyStateTitle>No hay resultados de búsqueda</StyledEmptyStateTitle>
        <StyledEmptyStateDesc>
          Lo siento, pero no hemos encontrado resultados para tu búsqueda. Por favor vuelve a intentar con filtros
          diferentes.
        </StyledEmptyStateDesc>
      </StyledEmptyStateTextWrapper>
    </>
  );
};

export default RumieEmptyState;
