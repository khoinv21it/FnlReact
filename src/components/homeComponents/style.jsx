import Colors from 'modules/Colors'
import styled from 'styled-components'
export const StyleService = styled.div`
  background-color: ${Colors.whiteColor};

  .service {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 20px;
    padding: 30px 0;
    &__left {
      width: calc(50% - 20px);
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &__right {
      width: 50%;
      .title {
        color: ${Colors.mainColor};
      }
      .content {
        &__title {
          font-size: 35px;
          font-weight: 700;
          line-height: 20px;
        }
        &__description {
          color: ${Colors.grayColor};
        }
        .contact {
          margin-top: 30px;
          &__title {
            font-size: 15px;
            font-weight: 500;
            line-height: 20px;
          }
          &__phone {
            color: ${Colors.mainColor};
            span {
              font-size: 20px;
              font-weight: 700;
              letter-spacing: 0px;
            }
          }
          &__address {
            color: ${Colors.grayColor};
          }
        }
      }
    }
  }
`
export const StyleOffer = styled.div`
  margin-top: 100px;
  width: 100%;
  height: 100%;
  background-color: #e7e7e7;
  padding: 30px 0;
  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    &__item {
      background-color: ${Colors.whiteColor};
      position: relative;
      .image {
        img {
          width: 100%;
          height: 50%;
          padding-bottom: 50%;
          object-fit: cover;
        }
      }
      .content {
        position: absolute;
        width: 80%;
        height: 40%;
        top: 45%;
        left: 0;
        padding: 10px 20px;
        background-color: ${Colors.whiteColor};
        .title {
          font-size: 18px;
          font-weight: 700;
          letter-spacing: -0.5;
        }
        .description {
          color: ${Colors.grayColor};
        }
        .see__more {
          display: flex;
          align-items: center;
          gap: 5px;
          cursor: pointer;
          transition: all 0.4s ease;
          &:hover {
            color: ${Colors.mainColor};
          }
          span {
            font-weight: 600;
            font-size: 15px;
            letter-spacing: -1px;
          }
          i {
            font-size: 15px;
            padding-top: 3px;
            color: ${Colors.mainColor};
          }
        }
      }
    }
  }
`
export const StyleListProduct = styled.div`
  background-color: ${Colors.whiteColor};
  padding: 30px 0;
  margin-top: 50px;
`
export const StyleNewsletter = styled.div`
  background-color: ${Colors.whiteColor};
  padding: 30px 0;

  .description {
    text-align: center;
    margin-bottom: 30px;
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0;
    color: ${Colors.grayColor};
  }
  .form {
    background-color: ${Colors.mainColor};
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    .input {
      input {
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
        outline: none;
      }
    }
    button {
      padding: 10px 10px;
      border: none;
      border-radius: 5px;
      background-color: ${Colors.darkColor};
      color: ${Colors.whiteColor};
      cursor: pointer;
      span {
        margin-left: 20px;
        font-size: 15px;
        font-weight: 600;
        letter-spacing: 0.2;
      }
    }
  }
`
