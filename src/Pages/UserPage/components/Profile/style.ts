import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 60px;
  background-position: 50%;
  background-size: cover;
  border-left: ${({ theme: { colors } }) => `4px solid ${colors.secondary}`};
`;
export const Info = styled.div`
  position: absolute;
  top: -30px;
  font-size: 12px;
`;
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 26px;
  @media (max-width: 539px) {
    height: 300px;
  }
`;
export const ProfileImage = styled.img`
  width: 164px;
  height: 123px;
`;
export const ProfileInfo = styled.div`
  max-width: 510px;
  height: 123px;
  margin-left: 50px;
`;
export const Name = styled.h1`
  max-width: 510px;
  font-size: 45px;
  font-weight: bold;

  & > span {
    margin-left: 10px;
  }
`;
export const License = styled.span`
  display: inline-block;
  width: 25px;
  height: 25px;
  vertical-align: middle;
  background-size: contain;
`;
export const BtnWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const TeamSelectWrap = styled.div`
  position: relative;
  display: flex;
  padding-right: 15px;
  margin-top: 20px;

  &::after {
    position: absolute;
    top: 7px;
    right: 0;
    display: block;
    width: 1px;
    height: 14px;
    content: '';
    background-color: #ececec;
  }
`;
export const TeamSelect = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 25px;
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;
  border: ${({ theme: { colors } }) => `1px solid ${colors.secondary}`};

  &.indi {
    color: white;
    background-color: ${({ theme: { colors } }) => `${colors.secondary}`};
    border-right: none;
    border-radius: 5px 0 0 5px;
  }

  &.team {
    position: relative;
    color: ${({ theme: { colors } }) => `${colors.secondary}`};
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  &:hover {
    color: white;
    background-color: ${({ theme: { colors } }) => `${colors.secondary}`};
  }
`;
export const ActionWrapper = styled.div`
  display: flex;
  gap: 10px;
  padding-left: 15px;
  margin-top: 20px;
  @media (max-width: 540px) {
    padding-left: 0;
  }
`;
export const Action = styled.span`
  display: flex;
  gap: 3px;
  align-items: center;
  justify-content: center;
  width: 82px;
  height: 25px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  border: 0.7px solid #1f334a;
  border-radius: 15px;
`;
