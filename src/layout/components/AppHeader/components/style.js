import styled from 'styled-components'
const shadow = `
  transition: box-shadow 200ms ease 0s;
  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
  }
`

const fc = `
  display: flex;
  align-items: center;
  justify-content: center;
`

// 中间
export const CenterWrapper = styled.div`
  .search-bar {
    ${fc}
    justify-content: space-between;
    width: 300px;
    height: 48px;
    box-sizing: border-box;
    padding: 0 8px;
    border: 1px solid #ddd;
    border-radius: 24px;
    cursor: pointer;
    ${shadow}

    .text {
      color: var(--text-color2);
      font-weight: 600;
      padding: 0 14px;
    }

    .icon {
      ${fc}
      width: 32px;
      height: 32px;
      color: #fff;
      background-color: var(--p-color);
      border-radius: 50%;
    }
  }
`

// 左边
export const LeftWrapper = styled.div`
  flex: 1;
  cursor: pointer;
  .logo {
    color: var(--p-color);
  }
`

// 右边
export const RightWrapper = styled.div`
  flex: 1;
  ${fc}
  justify-content: flex-end;
  .btns {
    display: flex;
    align-items: center;
    font-weight: bold;
    margin-right: 5px;
    .btn {
      padding: 11px 14px;
      cursor: pointer;
      border-radius: 22px;
      &:hover {
        background-color: rgb(245, 245, 245);
      }
    }
  }

  .profile {
    ${fc}
    width: 77px;
    height: 42px;
    justify-content: space-around;
    border: 1px solid var(--bg-color);
    border-radius: 25px;
    cursor: pointer;
    ${shadow}
    position: relative;

    .panel {
      position: absolute;
      top: 54px;
      right: 0;
      width: 240px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
      color: #666;
      font-weight: 600;

      .top,
      .bottom {
        padding: 10px 0;

        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;
          &.login {
            color: var(--text-color2);
          }
          &:hover {
            background-color: #f5f5f5;
          }
        }
      }

      .top {
        border-bottom: 1px solid #ddd;
      }
    }
  }
`
