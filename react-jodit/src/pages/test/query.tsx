import React, { useMemo } from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';
import {
  OrderDirection,
  PostOrderField,
  useQueryPosts,
} from 'app.modules/config/graphql';
import { __testData2 } from 'app.components/table/__test__/__testData';
import Table from 'app.components/table/Table';

gql`
  query QueryPosts($orderBy: PostOrder, $pagination: Pagination) {
    posts(orderBy: $orderBy, pagination: $pagination) {
      totalCount
      nodes {
        title
        id
        createdAt
        views
        likes
        url
        nickname
        board {
          title
        }
      }
    }
  }
`;

/**
 * const getQueryKey = useQueryPosts.getKey();
 * **/
const Page_TestQuery = () => {
  const { data, isLoading } = useQueryPosts({
    orderBy: {
      direction: OrderDirection.DESC,
      field: PostOrderField.CREATED_AT,
    },
    pagination: {
      page: 1,
      pageSize: 20,
    },
  });

  const columns = useMemo(() => __testData2, []);
  const dataSource = useMemo(
    () => data?.posts?.nodes ?? [],
    [data?.posts?.nodes]
  );

  if (isLoading) return null;
  return (
    <StyledWrapper>
      <h1>TEST QUERY BOARD</h1>
      <br />
      <Table columns={columns} data={dataSource} />
    </StyledWrapper>
  );
};

export default Page_TestQuery;

const StyledWrapper = styled.div`
  padding: 20px;

  h1 {
    font-size: 16px;
    font-weight: bold;
  }
`;
