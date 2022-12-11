import type { NextPage } from 'next';
import styled from "styled-components";
import dynamic from "next/dynamic";

const JoditEditor = dynamic(() => import('../app.components/__test__/jodit/Jodit'), {
  ssr: false,
})

const Home: NextPage = () => {
  return (
    <div>
      <JoditEditor />
    </div>
  );
};

export default Home;

const StyledWrapper = styled.div``;