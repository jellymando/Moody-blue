import styled from '@emotion/styled';
import { FONTSIZE, COLOR } from 'constants/style';

export const Wrapper = styled.div`
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
`;

export const MainTitle = styled.h1`
    font-size: ${FONTSIZE.X2LARGE};
    margin-bottom: 50px;
`;

export const SubTitle = styled.h2`
    font-size: ${FONTSIZE.XLARGE};
    margin-bottom: 30px;
`;

export const Info = styled.p`
    font-size: ${FONTSIZE.SMALL};
    color: ${COLOR.GRAY};
`;

export const Warning = styled.p`
    font-size: ${FONTSIZE.SMALL};
    color: ${COLOR.RED};
`;
