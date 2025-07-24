import styled from "styled-components";

export const HomeStyles = styled.div`
  /* Home Container */
  .home-container {
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(
          circle at 20% 80%,
          rgba(0, 234, 255, 0.1) 0%,
          transparent 50%
        ),
        radial-gradient(
          circle at 80% 20%,
          rgba(0, 234, 255, 0.05) 0%,
          transparent 50%
        );
      pointer-events: none;
    }
  }

  /* Hero Section */
  .hero-section {
    padding: 120px 20px 60px;
    position: relative;
    z-index: 1;

    .hero-content {
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
      min-height: calc(100vh - 240px);

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 40px;
        text-align: center;
      }
    }

    .hero-left {
      .hero-text {
        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin: 0 0 24px 0;
          color: #ffffff;

          .highlight {
            background: linear-gradient(135deg, #00eaff 0%, #ffffff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          @media (max-width: 768px) {
            font-size: 2.5rem;
          }
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: #a0a0a0;
          line-height: 1.6;
          margin: 0 0 32px 0;
          max-width: 500px;

          @media (max-width: 768px) {
            font-size: 1.1rem;
            margin: 0 auto 32px auto;
          }
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          margin-bottom: 40px;

          @media (max-width: 768px) {
            justify-content: center;
            flex-wrap: wrap;
          }

          .cta-button {
            padding: 14px 28px;
            border-radius: 12px;
            font-size: 1rem;
            font-weight: 600;
            text-decoration: none;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;

            &.primary {
              background: linear-gradient(135deg, #00eaff 0%, #0099cc 100%);
              color: #000;
              box-shadow: 0 4px 15px rgba(0, 234, 255, 0.3);

              &:hover {
                box-shadow: 0 6px 20px rgba(0, 234, 255, 0.4);
              }
            }

            &.secondary {
              background: rgba(255, 255, 255, 0.1);
              color: #ffffff;
              border: 1px solid rgba(255, 255, 255, 0.2);

              &:hover {
                background: rgba(255, 255, 255, 0.15);
                border-color: rgba(255, 255, 255, 0.3);
              }
            }
          }
        }
      }

      .social-links {
        display: flex;
        gap: 16px;

        @media (max-width: 768px) {
          justify-content: center;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          color: #ffffff;
          font-size: 1.3rem;
          text-decoration: none;
          transition: all 0.3s ease;

          &:hover {
            background: rgba(255, 255, 255, 0.15);
            border-color: rgba(255, 255, 255, 0.3);
            color: #00eaff;
          }
        }
      }
    }

    .hero-right {
      display: flex;
      justify-content: center;
      align-items: center;

      .hero-image-container {
        position: relative;
        width: fit-content;

        .blob-decoration {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 400px;
          height: 400px;
          opacity: 0.3;
          animation: float 6s ease-in-out infinite;

          @media (max-width: 768px) {
            width: 300px;
            height: 300px;
          }
        }

        .hero-image {
          position: relative;
          z-index: 1;
          width: 350px;
          height: auto;
          filter: drop-shadow(0 10px 30px rgba(0, 234, 255, 0.2));

          @media (max-width: 768px) {
            width: 280px;
          }
        }
      }
    }
  }

  /* About Section */
  .about-section {
    padding: 80px 20px;
    background: rgba(255, 255, 255, 0.02);
    position: relative;
    z-index: 1;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(
        circle at 30% 70%,
        rgba(0, 234, 255, 0.05) 0%,
        transparent 50%
      );
      pointer-events: none;
    }
  }

  /* Skills Section */
  .skills-section {
    padding: 80px 20px;
    position: relative;
    z-index: 1;
  }

  /* Contact Section */
  .contact-section {
    padding: 80px 20px;
    background: rgba(255, 255, 255, 0.02);
    position: relative;
    z-index: 1;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(
        circle at 70% 30%,
        rgba(0, 234, 255, 0.05) 0%,
        transparent 50%
      );
      pointer-events: none;
    }

    .contact-content {
      max-width: 1200px;
      margin: 0 auto;

      .contact-header {
        text-align: center;
        margin-bottom: 60px;

        .section-title {
          font-size: 3rem;
          font-weight: 700;
          background: linear-gradient(135deg, #00eaff 0%, #ffffff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 20px 0;
          letter-spacing: -0.02em;

          @media (max-width: 768px) {
            font-size: 2.5rem;
          }
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: #a0a0a0;
          margin: 0;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;

          @media (max-width: 768px) {
            font-size: 1.1rem;
            padding: 0 20px;
          }
        }
      }

      .contact-methods {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 30px;

        @media (max-width: 768px) {
          grid-template-columns: 1fr;
          gap: 20px;
        }

        .contact-method {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 32px;
          text-align: center;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;

          &:hover {
            transform: translateY(-4px);
            border-color: rgba(0, 234, 255, 0.3);
            box-shadow: 0 8px 25px rgba(0, 234, 255, 0.1);
          }

          .contact-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 80px;
            height: 80px;
            background: rgba(0, 234, 255, 0.1);
            border: 1px solid rgba(0, 234, 255, 0.2);
            border-radius: 50%;
            margin: 0 auto 24px auto;
            font-size: 2rem;
            color: #00eaff;
          }

          .contact-info {
            h3 {
              font-size: 1.5rem;
              font-weight: 600;
              color: #ffffff;
              margin: 0 0 12px 0;
            }

            p {
              font-size: 1rem;
              color: #a0a0a0;
              margin: 0 0 20px 0;
              line-height: 1.5;
            }

            .copy-button {
              display: inline-flex;
              align-items: center;
              gap: 8px;
              padding: 10px 20px;
              background: rgba(0, 234, 255, 0.1);
              border: 1px solid rgba(0, 234, 255, 0.2);
              border-radius: 8px;
              color: #00eaff;
              font-size: 0.9rem;
              font-weight: 500;
              cursor: pointer;
              transition: all 0.3s ease;

              &:hover {
                background: rgba(0, 234, 255, 0.2);
                border-color: rgba(0, 234, 255, 0.3);
              }
            }

            .contact-link {
              display: inline-flex;
              align-items: center;
              gap: 8px;
              padding: 10px 20px;
              background: rgba(255, 255, 255, 0.1);
              border: 1px solid rgba(255, 255, 255, 0.2);
              border-radius: 8px;
              color: #ffffff;
              font-size: 0.9rem;
              font-weight: 500;
              text-decoration: none;
              transition: all 0.3s ease;

              &:hover {
                background: rgba(255, 255, 255, 0.15);
                border-color: rgba(255, 255, 255, 0.3);
              }
            }
          }
        }
      }
    }
  }

  @keyframes float {
    0%,
    100% {
      transform: translate(-50%, -50%) translateY(0px);
    }
    50% {
      transform: translate(-50%, -50%) translateY(-20px);
    }
  }
`;
