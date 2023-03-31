import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  height: 80px;
  align-items: center;
  background-color: #FFF;
  border-bottom: 1px solid var(--bg-color);
  padding: 0 24px;
  box-sizing: border-box;
  &.fixed {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 999;
  }
`