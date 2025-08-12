import type { ReactNode } from "react";
import type { ColSizes } from "./elements.types";
import styled from "styled-components";

interface ColProps {
  children: ReactNode;
  xs?: ColSizes;
  sm?: ColSizes;
  md?: ColSizes;
  lg?: ColSizes;
  xl?: ColSizes;
  padding?: string;
}

const getWidth = (size?: ColSizes) =>
  `${((size ?? 12) / 12) * 100}%`;

const ColContainer = styled.div<{
  $xs?: ColSizes;
  $sm?: ColSizes;
  $md?: ColSizes;
  $lg?: ColSizes;
  $xl?: ColSizes;
  $padding?: string;
}>`
  display: inline-block;
  width: ${({ $xs }) => getWidth($xs)};

  @media (min-width: 576px) {
    width: ${({ $sm, $xs }) => getWidth($sm ?? $xs)};
  }

  @media (min-width: 768px) {
    width: ${({ $md, $sm, $xs }) => getWidth($md ?? $sm ?? $xs)};
  }

  @media (min-width: 992px) {
    width: ${({ $lg, $md, $sm, $xs }) =>
      getWidth($lg ?? $md ?? $sm ?? $xs)};
  }

  @media (min-width: 1200px) {
    width: ${({ $xl, $lg, $md, $sm, $xs }) =>
      getWidth($xl ?? $lg ?? $md ?? $sm ?? $xs)};
  }
`;


const Col = ({ children, xs, sm, md, lg, xl, padding }: ColProps) => {

  return (
    <ColContainer $xs={xs} $sm={sm} $md={md} $lg={lg} $xl={xl} $padding={padding}>
      {children}
    </ColContainer>
  )
  }

export default Col;

