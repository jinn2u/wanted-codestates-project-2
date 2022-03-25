import styled from '@emotion/styled';

export const Li = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  width: 80px;
  padding: 20px 0;
  @media (max-width: 380px) {
    width: 50px;
  }

  & > a {
    position: relative;
    width: 100%;
    color: white;
    text-align: center;
    opacity: 0.5;
  }

  &::after {
    position: absolute;
    bottom: 0;
    width: 0;
    height: 0;
    content: '';
    background-color: white;
    transition: all 0.15s ease-in-out;
  }

  &:hover {
    &::after {
      width: inherit;
      height: 4px;
    }

    & > a {
      opacity: 1;
    }
  }
`;
