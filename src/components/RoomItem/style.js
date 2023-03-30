import styled from 'styled-components'

export const RoomWrapper = styled.div`
  width: ${props => props.width};
  padding: 8px;
  box-sizing: border-box;
  .content {
    width: 100%;
    height: 100%;

    .cover {
      /* padding的百分比以宽度作为依据 */
      padding: 33.33% 0;
      border-radius: 3px;
      overflow: hidden;
      position: relative;

      img {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
      }
    }

    .desc {
      margin: 10px 0 5px;
      font-size: 12px;
      font-weight: 700;
      color: ${(props) => props.textColor};
    }

    .name {
      font-size: 16px;
      font-weight: 700;
    }

    .price {
      margin: 8px 0;
    }

    .bottom {
      display: flex;
      align-items: center;
      font-size: 12px;
      font-weight: 600;
      color: ${(props) => props.textColor};
      .rate {
        transform: translateY(-1.5px);
        font-size: 12px;
        color: ${(props) => props.rateColor};
        .ant-rate-star {
          margin-inline-end: 0px;
        }
      }

      .count {
        margin: 0 2px 0 4px;
      }
    }
  }
`
