import React from 'react';
import styled from 'styled-components';

const AppWeb = ({ contentsComponent }) => {
  return (
    <StyledLayout>
      {contentsComponent}
    </StyledLayout>
  );
};

export default AppWeb;

const StyledLayout = styled.div`
`;
