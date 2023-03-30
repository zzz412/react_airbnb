import styled from 'styled-components'

export const FooterWrapper = styled.div`
  .more {
    margin-top: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 17px;
    font-weight: 700;
    color: ${(props) => (props.name ? 'var(--p-color2)' : 'rgb(0, 0, 0)')};
    &:hover {
      text-decoration: underline;
    }
    .icon {
      margin-left: 5px;
    }
  }
`
