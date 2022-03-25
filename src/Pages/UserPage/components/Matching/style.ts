import styled from '@emotion/styled';

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  margin: 20px 0;
  color: white;
  background-image: linear-gradient(
    -45deg,
    rgb(238 119 82),
    rgb(246 36 89),
    rgb(0 119 255),
    rgb(35 213 171)
  );
  background-size: 400% 400%;
  animation: gradient-bg 20s ease infinite;

  @keyframes gradient-bg {
    0% {
      background-position: 0 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0 50%;
    }
  }
`;

export const Span = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  width: 82px;
  height: 25px;
  font-size: 12px;
  color: white;
  border: 1px solid white;
  border-radius: 15px;
`;
