import React, { useMemo } from 'react';
import styled from 'styled-components';
import { __testData } from '../table/__test__/__testData';
import makeData from '../../app.modules/test/makeData';
import Table from '../table/Table';
import useIsClient from "app.hooks/useIsClient";

const TestTableData = () => {
  const isClient = useIsClient;
  if (!isClient) return null;

  const columns = useMemo(() => __testData, []);
  const data = useMemo(() => makeData(20), []);



  return (
    <StyledWrapper>
      <Table columns={columns} data={data} />
    </StyledWrapper>
  );
};

export default TestTableData;

const StyledWrapper = styled.div``;
