import Colors from 'modules/Colors'
import styled from 'styled-components'
export const StyleContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  padding: 0;
  margin: 0 auto;
`
export const StyleHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  background-color: ${Colors.mainColor};
  font-weight: 600;
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    &__logo {
      a {
        h1 {
          font-size: 30px;
          color: ${Colors.whiteColor};
        }
      }
    }
    &__menu {
      display: flex;
      align-items: center;
      gap: 20px;
      .nav {
        width: 100%;
        padding: 0;
        margin: 0;
        list-style: none;
        color: #fff;
        gap: 20px;
        justify-content: flex-start !important;
        align-items: center;
        display: flex !important;
        &__item {
          /* &:hover { */
          position: relative;
          z-index: 99;
          a {
            display: block;
            position: relative;
            z-index: 1;
            text-decoration: none;
            font-size: 16px;
            color: #fff;
            margin: 0;
            padding: 6px 17px;
            text-transform: uppercase;
            &::after {
              position: absolute;
              content: '';
              width: 0;
              bottom: 0;
              left: 0;
              height: 1px;
              background: #fff;
              transition: all 0.5s;
            }
            &:hover {
              text-decoration: none !important;
            }
          }
          .transition {
            transition: 0.3s ease-out;
            &:hover {
              text-decoration: none !important;
            }
          }
          &:hover > a:after {
            width: calc(100% - 46px);
            left: 23px;
          }
        }
        .menu__line {
          position: static !important;

          &:hover .sub {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }
          .sub {
            display: block;
            position: absolute;
            top: 60px;

            background-color: ${Colors.mainColor};
            visibility: hidden;
            opacity: 0;
            transition: all 0.5s ease;
            transform: translateY(-20px);
            &__ctt {
              padding: 20px 0px;
              background: ${Colors.mainColor};
            }
            &__item {
              width: 100px;

              &-list {
                width: 100%;
                padding: 0px;
                margin: 0;
                list-style: none;
                text-transform: uppercase;
                li {
                  position: relative;
                  z-index: 99;
                  float: none !important;

                  font-weight: 400;
                  padding: 0 !important;
                  display: list-item;
                  text-transform: uppercase;
                  text-align: -webkit-match-parent;
                  & > a {
                    display: block;
                    position: relative;
                    z-index: 1;
                    padding: 10px 20px;
                    color: #fff;
                    text-transform: none !important;
                    font-size: 13px !important;
                    text-transform: uppercase !important;
                    transition: all 0.4s ease;
                    &:hover {
                      background-color: ${Colors.whiteColor};
                      color: ${Colors.mainColor};
                    }
                  }
                }
              }
            }
          }
        }
      }
      .cart {
        background-color: ${Colors.whiteColor};
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px 10px;
        gap: 15px;
        i,
        span {
          color: ${Colors.mainColor};
        }
        i {
          width: 12px;
          height: 12px;
        }
        span {
          font-size: 20px;
        }
      }
    }
  }
`
export const StyleCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  .cards {
    &__item {
      width: 100%;
      height: 100%;
      position: relative;
      .sale {
        position: absolute;
        top: 0;
        right: 0;
        background-color: ${Colors.mainColor};
        padding: 3px 10px;
        border-radius: 5px;
        span {
          font-size: 18px;
          font-weight: 600;
          color: ${Colors.whiteColor};
          line-height: 20px;
        }
      }
      .image {
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .content {
        &__title {
          font-size: 17px;
          font-weight: 500;
          line-height: 24px;
        }
        &__price {
          span {
            font-weight: 500;
            color: ${Colors.redColor};
          }
        }
      }
    }
  }
`
export const StyleFooter = styled.footer`
  background-color: ${Colors.darkColor};
  color: ${Colors.whiteColor};
  padding: 50px 0 0;
  .footer {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    .item {
      width: calc(25% - (30px * 1 / 4));
      .title {
        text-transform: uppercase;
        h4 {
          font-size: 17px;
          font-weight: 600;
        }
      }
      .content {
        &__contact {
          &-text {
            margin-top: 20px;
            span {
              &:first-child {
                color: ${Colors.whiteColor};
                font-weight: 600;
              }
              &:last-child {
                color: ${Colors.grayColorText};
              }
            }
          }
        }
        &__service {
          ul {
            margin: 0;
            padding: 0;
            li {
              color: ${Colors.grayColorText};
              list-style-type: none;
              margin: 20px 0;
              transition: all 0.4s ease;
              &:hover {
                color: ${Colors.whiteColor};
              }
            }
          }
        }
        &__popular {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          span {
            padding: 5px 10px;
            cursor: pointer;
            border-radius: 5px;
            border: 1px solid ${Colors.grayColor};
            color: ${Colors.grayColorText};
            transition: all 0.4s ease;
            &:hover {
              border-color: ${Colors.grayColorText};
              color: ${Colors.whiteColor};
            }
          }
        }
      }
    }
  }
  .copy__right {
    padding: 20px 0 10px;
    border-top: 1px solid ${Colors.grayColor};
  }
`
