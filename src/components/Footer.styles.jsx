import styled from "styled-components";

export const FooterStyles = styled.div`
  .footer {
    background: rgba(10, 10, 10, 0.95);
    backdrop-filter: blur(20px);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    z-index: 10;

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 20px 20px;

      .footer-main {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;

        @media (max-width: 768px) {
          flex-direction: column;
          gap: 20px;
          text-align: center;
        }

        .footer-text {
          p {
            color: #a0a0a0;
            font-size: 1rem;
            margin: 0 0 8px 0;
            line-height: 1.5;

            .heart-icon {
              color: #ff6b6b;
              animation: heartbeat 2s ease-in-out infinite;
              margin: 0 4px;
            }

            .author-link {
              color: #00eaff;
              text-decoration: none;
              font-weight: 600;
              transition: all 0.3s ease;
              position: relative;

              &::after {
                content: "";
                position: absolute;
                bottom: -2px;
                left: 0;
                width: 0;
                height: 2px;
                background: linear-gradient(135deg, #00eaff 0%, #0099cc 100%);
                transition: width 0.3s ease;
              }

              &:hover {
                color: #ffffff;

                &::after {
                  width: 100%;
                }
              }
            }
          }

          .footer-year {
            font-size: 0.9rem;
            color: #808080;
            margin: 0;
          }
        }

        .footer-socials {
          display: flex;
          gap: 16px;

          .social-link {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 45px;
            height: 45px;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 12px;
            color: #ffffff;
            font-size: 1.2rem;
            text-decoration: none;
            transition: all 0.3s ease;

            &:hover {
              background: rgba(255, 255, 255, 0.15);
              border-color: rgba(255, 255, 255, 0.3);
              color: #00eaff;
              transform: translateY(-2px);
              box-shadow: 0 4px 15px rgba(0, 234, 255, 0.2);
            }
          }
        }
      }

      .footer-divider {
        height: 1px;
        background: linear-gradient(
          90deg,
          transparent 0%,
          rgba(255, 255, 255, 0.2) 50%,
          transparent 100%
        );
        margin-bottom: 20px;
        transform-origin: left;
      }

      .footer-bottom {
        text-align: center;

        p {
          color: #808080;
          font-size: 0.9rem;
          margin: 0;
          line-height: 1.5;
        }
      }
    }

    .scroll-top-button {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, #00eaff 0%, #0099cc 100%);
      border: none;
      border-radius: 50%;
      color: #000;
      font-size: 1.2rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 20px rgba(0, 234, 255, 0.3);
      transition: all 0.3s ease;
      z-index: 1000;

      &:hover {
        box-shadow: 0 6px 25px rgba(0, 234, 255, 0.4);
        transform: translateY(-2px);
      }

      @media (max-width: 768px) {
        bottom: 20px;
        right: 20px;
        width: 45px;
        height: 45px;
        font-size: 1rem;
      }
    }
  }

  @keyframes heartbeat {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }
`;
