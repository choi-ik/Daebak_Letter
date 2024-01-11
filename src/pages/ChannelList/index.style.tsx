import styled from '@emotion/styled';

export const Header = styled.div`
  display: flex;
  padding-bottom: 1rem;
`;
export const Title = styled.div`
  padding: 2rem;
  font-weight: 600;
  & h1 {
    ${({ theme }) => theme.typography.title2};
    & span {
      ${({ theme }) => theme.typography.title2};
      color: ${({ theme }) => theme.palette.main};
    }
  }
  & span {
    ${({ theme }) => theme.typography.description2};
    opacity: 50%;
  }
`;
export const Body = styled.div`
  padding: 0.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;
export const ChannelIconList = styled.ul`
  margin: 0.5rem;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  height: 60vh;
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
