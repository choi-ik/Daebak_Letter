import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const scrollbar = css`
  &::-webkit-scrollbar {
    width: 1.25rem;
  }

  /* 스크롤바 막대 설정*/
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    /* 스크롤바 둥글게 설정    */
    border-radius: 10px;
    border: 7px solid white;
  }

  /* 스크롤바 뒷 배경 설정*/
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
  }

  &:hover {
    ::-webkit-scrollbar-thumb {
      width: 0.625rem;
      background: #b7b7b7; /* 스크롤바 막대 색상 */
    }
  }
`;

export const Container = styled.div<{ isMypage: boolean }>`
  height: 100%;
  padding: 2.5rem 1.75rem;

  display: ${(props) => (props.isMypage ? 'block' : 'flex')};
  box-sizing: border-box;

  .sidebar-container {
    width: ${(props) => (props.isMypage ? '100%' : '18rem')};
    overflow-y: auto;
    margin-right: ${(props) => (props.isMypage ? '0rem' : '1.75rem')};
    ${scrollbar}
  }

  .main {
    display: flex;
    justify-content: center;
    flex-grow: 1;

    .container {
      width: 100%;
      overflow-y: auto;

      ${scrollbar}
    }
  }
`;