import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  height: 80px;
  align-items: center;

  .header-left {
    flex: 1;
  }

  .header-center {
    min-width: 200px;
    width: 500px;
    background-color: blue;
    height: 100%;
  }

  .header-right {
    flex: 1;
    display: flex;
    align-items: center;
    .btns {
      display: flex;
    }
    .profile {
      display: flex;
    }
  }
`