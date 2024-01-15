import styled from '@emotion/styled';
import { buttonSize, buttonTypes } from './type';

interface ButtonProps {
  disabled: boolean;
  kind: string;
  size: string;
  styleOption: { [key: string]: string };
}
export const ButtonStyle = styled.button<ButtonProps>`
  font-weight: 700;
  overflow: hidden;
  border-radius: 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  outline: none;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  ${({ kind }) => buttonTypes[kind]};
  ${({ size }) => buttonSize[size]};
  ${({ styleOption }) => styleOption}
`;
