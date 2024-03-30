import { css } from '@emotion/react';
import styled from '@emotion/styled';

const TextArea = css`
  background-color: transparent;
  border-color: transparent;
  outline: none;
  resize: none;
  box-sizing: border-box;
`;

export const TextareaContainer = styled.div<{
  darkMode: boolean;
  width: string;
  height: string;
}>`
  position: relative;
  background-color: ${(props) =>
    props.darkMode ? props.theme.palette.sub : props.theme.palette.dark};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ width }) => `${width};`}
  height: ${({ height }) => `${height};`}
  border-radius: 20px;
  margin-top: 1.625rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  ${({ className }) => `${className}`}
`;

export const TextareaTitle = styled.textarea<{
  darkMode: boolean;
  width: string;
  height: string;
}>`
  ${TextArea};
  color: ${(props) =>
    props.darkMode
      ? props.theme.palette.light_font
      : props.theme.palette.dark_font};
  flex-grow: 0;
  width: ${({ width }) => `${width};`}
  height: ${({ height }) => `${height};`}
  font-size: 1rem;
  font-weight: 500;
  padding: 1rem 3rem 0 0.9rem;
  ${({ className }) => `${className}`}
`;

export const TextareaContent = styled.textarea<{
  darkMode: boolean;
  width: string;
  height: string;
}>`
  ${TextArea};
  color: ${(props) =>
    props.darkMode
      ? props.theme.palette.light_font
      : props.theme.palette.dark_font};
  flex-grow: 1;
  font-size: 0.7rem;
  width: ${({ width }) => `${width};`}
  height: ${({ height }) => (height ? `${height};` : 'auto;')}
  margin: 0.6rem 0;
  padding: 0 1rem;
  ${({ className }) => `${className}`}
`;

export const TextareaUnderLine = styled.div`
  width: 90%;
  height: 1px;
  background-color: #aca3a3;
  ${({ className }) => `${className}`}
`;
