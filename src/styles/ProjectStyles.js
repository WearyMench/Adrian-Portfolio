import { createGlobalStyle } from "styled-components";

export const ProjectStyles = createGlobalStyle`
  /* Optimizaciones para animaciones en móvil */
  @media (max-width: 768px) {
    .skills-component,
    .about-component {
      min-height: auto !important;
    }
    
    /* Reducir delays en móvil para animaciones más rápidas */
    .skills-component .skill-tag,
    .about-component .timeline-item {
      animation-delay: 0.05s !important;
    }
  }

  /* Estilos para Home */
  .home-container {
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 20% 80%, rgba(0, 234, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(0, 234, 255, 0.05) 0%, transparent 50%);
      pointer-events: none;
    }
  }

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

  .about-section {
    padding: 80px 20px;
    background: rgba(255, 255, 255, 0.02);
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      padding: 60px 16px;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 30% 70%, rgba(0, 234, 255, 0.05) 0%, transparent 50%);
      pointer-events: none;
    }
  }

  .skills-section {
    padding: 80px 20px;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      padding: 60px 16px;
    }
  }

  .contact-section {
    padding: 80px 20px;
    background: rgba(255, 255, 255, 0.02);
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      padding: 60px 16px;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 70% 30%, rgba(0, 234, 255, 0.05) 0%, transparent 50%);
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
    0%, 100% {
      transform: translate(-50%, -50%) translateY(0px);
    }
    50% {
      transform: translate(-50%, -50%) translateY(-20px);
    }
  }

  /* Estilos para About */
  .about-component {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;

    .about-content {
      .about-header {
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

      .about-main {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 60px;
        align-items: center;
        margin-bottom: 80px;

        @media (max-width: 768px) {
          grid-template-columns: 1fr;
          gap: 40px;
          text-align: center;
        }

        .about-photo {
          position: relative;
          display: flex;
          justify-content: center;

          img {
            width: 300px;
            height: 300px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid rgba(0, 234, 255, 0.3);
            box-shadow: 0 10px 30px rgba(0, 234, 255, 0.2);

            @media (max-width: 768px) {
              width: 250px;
              height: 250px;
            }
          }

          .photo-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 50%;
            background: linear-gradient(135deg, rgba(0, 234, 255, 0.1) 0%, transparent 50%);
            pointer-events: none;
          }
        }

        .about-text {
          h3 {
            font-size: 2rem;
            font-weight: 600;
            color: #ffffff;
            margin: 0 0 24px 0;

            @media (max-width: 768px) {
              font-size: 1.8rem;
            }
          }

          p {
            font-size: 1.1rem;
            color: #a0a0a0;
            line-height: 1.7;
            margin: 0 0 20px 0;

            @media (max-width: 768px) {
              font-size: 1rem;
            }
          }
        }
      }

      .about-timeline {
        h3 {
          font-size: 2rem;
          font-weight: 600;
          color: #ffffff;
          margin: 0 0 40px 0;
          text-align: center;

          @media (max-width: 768px) {
            font-size: 1.8rem;
          }
        }

        .timeline-container {
          display: flex;
          flex-direction: column;
          gap: 30px;

          .timeline-item {
            display: flex;
            gap: 24px;
            align-items: flex-start;
            padding: 24px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;

            &:hover {
              transform: translateY(-4px);
              border-color: rgba(0, 234, 255, 0.3);
              box-shadow: 0 8px 25px rgba(0, 234, 255, 0.1);
            }

            @media (max-width: 768px) {
              flex-direction: column;
              text-align: center;
              gap: 16px;
            }

            .timeline-icon {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 60px;
              height: 60px;
              background: rgba(0, 234, 255, 0.1);
              border: 1px solid rgba(0, 234, 255, 0.2);
              border-radius: 50%;
              font-size: 1.5rem;
              color: #00eaff;
              flex-shrink: 0;

              @media (max-width: 768px) {
                align-self: center;
              }
            }

            .timeline-content {
              flex: 1;

              .timeline-year {
                font-size: 0.9rem;
                font-weight: 600;
                color: #00eaff;
                margin-bottom: 8px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
              }

              h4 {
                font-size: 1.3rem;
                font-weight: 600;
                color: #ffffff;
                margin: 0 0 8px 0;

                @media (max-width: 768px) {
                  font-size: 1.2rem;
                }
              }

              p {
                font-size: 1rem;
                color: #a0a0a0;
                line-height: 1.6;
                margin: 0;
              }
            }
          }
        }
      }
    }
  }

  /* Estilos para las tarjetas de proyecto */
  .project-card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 24px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(0, 234, 255, 0.1) 0%, transparent 50%);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover::before {
      opacity: 1;
    }

    .project-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 16px;

      .project-title {
        flex: 1;

        h3 {
          font-size: 1.4rem;
          font-weight: 600;
          color: #ffffff;
          margin: 0 0 8px 0;
          line-height: 1.3;
        }

        .archived-badge, .fork-badge {
          display: inline-block;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .archived-badge {
          background: rgba(255, 107, 107, 0.2);
          color: #ff6b6b;
          border: 1px solid rgba(255, 107, 107, 0.3);
        }

        .fork-badge {
          background: rgba(255, 193, 7, 0.2);
          color: #ffc107;
          border: 1px solid rgba(255, 193, 7, 0.3);
        }
      }

      .project-stats {
        display: flex;
        gap: 12px;

        .stat {
          display: flex;
          align-items: center;
          gap: 4px;
          color: #a0a0a0;
          font-size: 0.9rem;

          svg {
            font-size: 0.8rem;
            color: #00eaff;
          }
        }
      }
    }

    .project-description {
      color: #a0a0a0;
      font-size: 0.95rem;
      line-height: 1.5;
      margin: 0 0 20px 0;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .project-languages {
      margin-bottom: 20px;

      .language-bars {
        display: flex;
        height: 4px;
        border-radius: 2px;
        overflow: hidden;
        background: rgba(255, 255, 255, 0.1);
        margin-bottom: 8px;
      }

      .language-bar {
        height: 100%;
        transition: all 0.3s ease;
      }

      .language-labels {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;

        .language-label {
          font-size: 0.8rem;
          font-weight: 500;
        }
      }
    }

    .project-topics {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-bottom: 20px;

      .topic-tag {
        padding: 4px 8px;
        background: rgba(0, 234, 255, 0.1);
        color: #00eaff;
        border-radius: 4px;
        font-size: 0.75rem;
        font-weight: 500;
        border: 1px solid rgba(0, 234, 255, 0.2);
      }

      .topic-more {
        padding: 4px 8px;
        background: rgba(255, 255, 255, 0.1);
        color: #a0a0a0;
        border-radius: 4px;
        font-size: 0.75rem;
        font-weight: 500;
      }
    }

    .project-footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .project-updated {
        display: flex;
        align-items: center;
        gap: 6px;
        color: #a0a0a0;
        font-size: 0.8rem;

        svg {
          font-size: 0.7rem;
        }
      }
    }

    .project-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.85);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
      border-radius: 16px;
      cursor: pointer;

      span {
        color: #ffffff;
        font-weight: 600;
        font-size: 1.1rem;
        display: flex;
        align-items: center;
        gap: 8px;
        
        &::before {
          content: "👁️";
          font-size: 1.2rem;
        }
      }
    }

    &:hover .project-overlay {
      opacity: 1;
    }
  }

  /* Estilos para los filtros */
  .project-filters {
    margin-bottom: 40px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 24px;
    backdrop-filter: blur(10px);
    overflow: hidden;

    @media (max-width: 768px) {
      padding: 16px;
      margin-bottom: 30px;
    }

    .search-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
      gap: 20px;

      @media (max-width: 768px) {
        flex-direction: column;
        align-items: stretch;
        gap: 16px;
        margin-bottom: 20px;
      }

      .search-input-wrapper {
        position: relative;
        flex: 1;
        max-width: 400px;

        @media (max-width: 768px) {
          max-width: none;
        }

        .search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #a0a0a0;
          font-size: 1rem;
        }

        .search-input {
          width: 100%;
          padding: 12px 16px 12px 48px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          color: #ffffff;
          font-size: 1rem;
          transition: all 0.3s ease;
          box-sizing: border-box;

          @media (max-width: 768px) {
            font-size: 16px; /* Evita zoom en iOS */
          }

          &::placeholder {
            color: #a0a0a0;
          }

          &:focus {
            outline: none;
            border-color: #00eaff;
            background: rgba(255, 255, 255, 0.15);
          }
        }

        .clear-search {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #a0a0a0;
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
          transition: all 0.3s ease;

          &:hover {
            color: #ffffff;
            background: rgba(255, 255, 255, 0.1);
          }
        }
      }

      .results-count {
        color: #a0a0a0;
        font-size: 0.9rem;
        font-weight: 500;
      }
    }

    .filters-container {
      display: flex;
      gap: 24px;
      align-items: flex-start;
      flex-wrap: wrap;

      @media (max-width: 768px) {
        gap: 16px;
      }

      .filters-section {
        flex: 1;
        min-width: 300px;

        @media (max-width: 768px) {
          min-width: 100%;
        }

        .filters-title {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #ffffff;
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0 0 16px 0;

          svg {
            color: #00eaff;
          }
        }

        .filter-group {
          margin-bottom: 20px;

          h4 {
            color: #a0a0a0;
            font-size: 0.9rem;
            font-weight: 500;
            margin: 0 0 12px 0;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .filter-tags {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;

            .filter-tag {
              padding: 6px 12px;
              background: rgba(255, 255, 255, 0.1);
              border: 1px solid rgba(255, 255, 255, 0.2);
              border-radius: 6px;
              color: #ffffff;
              font-size: 0.85rem;
              font-weight: 500;
              cursor: pointer;
              transition: all 0.3s ease;

              &:hover {
                background: rgba(255, 255, 255, 0.15);
                border-color: rgba(255, 255, 255, 0.3);
              }

              &.active {
                background: rgba(0, 234, 255, 0.2);
                border-color: rgba(0, 234, 255, 0.4);
                color: #00eaff;
              }
            }

            .more-indicator {
              padding: 6px 12px;
              color: #a0a0a0;
              font-size: 0.85rem;
              font-weight: 500;
            }
          }
        }
      }

      .sort-section {
        min-width: 200px;

        .sort-title {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #ffffff;
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0 0 16px 0;

          svg {
            color: #00eaff;
          }
        }

        .sort-select {
          width: 100%;
          padding: 10px 12px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 6px;
          color: #ffffff;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;

          &:focus {
            outline: none;
            border-color: #00eaff;
          }

          option {
            background: #1a1a1a;
            color: #ffffff;
          }
        }
      }

      .clear-filters-btn {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 16px;
        background: rgba(255, 107, 107, 0.2);
        border: 1px solid rgba(255, 107, 107, 0.3);
        border-radius: 6px;
        color: #ff6b6b;
        font-size: 0.9rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background: rgba(255, 107, 107, 0.3);
          border-color: rgba(255, 107, 107, 0.4);
        }
      }
    }

    .active-filters {
      display: flex;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
      padding-top: 16px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);

      .active-filters-label {
        color: #a0a0a0;
        font-size: 0.9rem;
        font-weight: 500;
      }

      .active-filter {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 4px 8px;
        background: rgba(0, 234, 255, 0.2);
        border: 1px solid rgba(0, 234, 255, 0.3);
        border-radius: 4px;
        color: #00eaff;
        font-size: 0.8rem;
        font-weight: 500;

        .remove-filter {
          background: none;
          border: none;
          color: #00eaff;
          cursor: pointer;
          padding: 2px;
          border-radius: 2px;
          font-size: 0.7rem;
          transition: all 0.3s ease;

          &:hover {
            background: rgba(0, 234, 255, 0.3);
          }
        }
      }
    }

    @media (max-width: 768px) {
      padding: 16px;

      .search-container {
        flex-direction: column;
        align-items: stretch;
        gap: 12px;

        .search-input-wrapper {
          max-width: none;
        }
      }

      .filters-container {
        flex-direction: column;
        gap: 16px;

        .filters-section {
          min-width: auto;
        }

        .sort-section {
          min-width: auto;
        }
      }
    }
  }

  /* Estilos para la paginación */
  .project-pagination {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    .pagination-info {
      display: flex;
      align-items: center;
      gap: 24px;
      color: #a0a0a0;
      font-size: 0.9rem;

      .projects-per-page {
        display: flex;
        align-items: center;
        gap: 8px;

        label {
          font-weight: 500;
        }

        .projects-per-page-select {
          padding: 6px 8px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 4px;
          color: #ffffff;
          font-size: 0.85rem;
          cursor: pointer;

          &:focus {
            outline: none;
            border-color: #00eaff;
          }

          option {
            background: #1a1a1a;
            color: #ffffff;
          }
        }
      }
    }

    .pagination-controls {
      display: flex;
      align-items: center;
      gap: 8px;

      .pagination-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        color: #ffffff;
        font-size: 0.9rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-1px);
        }

        &:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        &.active {
          background: rgba(0, 234, 255, 0.2);
          border-color: rgba(0, 234, 255, 0.4);
          color: #00eaff;
        }

        &.page-number {
          min-width: 40px;
        }
      }

      .page-numbers {
        display: flex;
        gap: 4px;

        .page-ellipsis {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          color: #a0a0a0;
          font-size: 0.9rem;
        }
      }
    }

    @media (max-width: 768px) {
      .pagination-info {
        flex-direction: column;
        gap: 12px;
        text-align: center;
      }

      .pagination-controls {
        flex-wrap: wrap;
        justify-content: center;
      }
    }
  }

  /* Estilos para no hay resultados */
  .no-results {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 300px;
    text-align: center;

    .no-results-content {
      max-width: 400px;
      padding: 40px 20px;

      svg {
        font-size: 3rem;
        color: #a0a0a0;
        margin-bottom: 20px;
      }

      h3 {
        font-size: 1.5rem;
        color: #ffffff;
        margin: 0 0 12px 0;
        font-weight: 600;
      }

      p {
        font-size: 1rem;
        color: #a0a0a0;
        line-height: 1.6;
        margin: 0 0 24px 0;
      }

      .clear-filters-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 12px 20px;
        background: rgba(0, 234, 255, 0.2);
        border: 1px solid rgba(0, 234, 255, 0.3);
        border-radius: 8px;
        color: #00eaff;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background: rgba(0, 234, 255, 0.3);
          border-color: rgba(0, 234, 255, 0.4);
          transform: translateY(-2px);
        }
      }
    }
  }

  /* Estilos para el modal */
  .project-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
    backdrop-filter: blur(5px);
  }

  .project-modal {
    background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    max-width: 800px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    backdrop-filter: blur(20px);

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: 30px 30px 20px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);

      .modal-title {
        flex: 1;

        h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 15px 0;
        }

        .project-badges {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;

          .badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 12px;
            border-radius: 6px;
            font-size: 0.8rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;

            svg {
              font-size: 0.7rem;
            }
          }

          .archived {
            background: rgba(255, 107, 107, 0.2);
            color: #ff6b6b;
            border: 1px solid rgba(255, 107, 107, 0.3);
          }

          .fork {
            background: rgba(255, 193, 7, 0.2);
            color: #ffc107;
            border: 1px solid rgba(255, 193, 7, 0.3);
          }

          .license {
            background: rgba(0, 234, 255, 0.2);
            color: #00eaff;
            border: 1px solid rgba(0, 234, 255, 0.3);
          }
        }
      }

      .modal-close {
        background: none;
        border: none;
        color: #a0a0a0;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 8px;
        border-radius: 8px;
        transition: all 0.3s ease;

        &:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.1);
        }
      }
    }

    .modal-content {
      padding: 30px;

      .project-info {
        .info-section {
          margin-bottom: 30px;

          h3 {
            font-size: 1.3rem;
            font-weight: 600;
            color: #ffffff;
            margin: 0 0 15px 0;
            display: flex;
            align-items: center;
            gap: 10px;

            &::before {
              content: '';
              width: 3px;
              height: 20px;
              background: linear-gradient(135deg, #00eaff 0%, #0099cc 100%);
              border-radius: 2px;
            }
          }

          p {
            color: #a0a0a0;
            line-height: 1.6;
            margin: 0;
          }
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 20px;
          margin-bottom: 30px;

          .stat-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 20px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.1);

            svg {
              font-size: 1.5rem;
              color: #00eaff;
            }

            div {
              display: flex;
              flex-direction: column;

              .stat-value {
                font-size: 1.5rem;
                font-weight: 700;
                color: #ffffff;
                line-height: 1;
              }

              .stat-label {
                font-size: 0.85rem;
                color: #a0a0a0;
                margin-top: 4px;
              }
            }
          }
        }

        .languages-detailed {
          .language-item {
            margin-bottom: 15px;

            .language-info {
              display: flex;
              align-items: center;
              gap: 10px;
              margin-bottom: 8px;

              .language-dot {
                width: 12px;
                height: 12px;
                border-radius: 50%;
              }

              .language-name {
                color: #ffffff;
                font-weight: 500;
                flex: 1;
              }

              .language-percentage {
                color: #a0a0a0;
                font-size: 0.9rem;
                font-weight: 500;
              }
            }

            .language-bar-container {
              height: 6px;
              background: rgba(255, 255, 255, 0.1);
              border-radius: 3px;
              overflow: hidden;

              .language-bar-fill {
                height: 100%;
                border-radius: 3px;
                transition: width 0.3s ease;
              }
            }
          }
        }

        .topics-list {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;

          .topic-tag {
            padding: 8px 12px;
            background: rgba(0, 234, 255, 0.1);
            color: #00eaff;
            border-radius: 6px;
            font-size: 0.85rem;
            font-weight: 500;
            border: 1px solid rgba(0, 234, 255, 0.2);
          }
        }

        .project-links-detailed {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;

          .link-button {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 12px 20px;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 500;
            text-decoration: none;
            transition: all 0.3s ease;
            border: 1px solid transparent;

            &:hover {
              transform: translateY(-2px);
            }
          }

          .github {
            background: linear-gradient(135deg, #00eaff 0%, #0099cc 100%);
            color: #000;
            box-shadow: 0 4px 15px rgba(0, 234, 255, 0.3);

            &:hover {
              box-shadow: 0 6px 20px rgba(0, 234, 255, 0.4);
            }
          }

          .demo {
            background: rgba(255, 255, 255, 0.1);
            color: #ffffff;
            border-color: rgba(255, 255, 255, 0.2);

            &:hover {
              background: rgba(255, 255, 255, 0.15);
              border-color: rgba(255, 255, 255, 0.3);
            }
          }

          .pages {
            background: rgba(255, 193, 7, 0.1);
            color: #ffc107;
            border-color: rgba(255, 193, 7, 0.2);

            &:hover {
              background: rgba(255, 193, 7, 0.15);
              border-color: rgba(255, 193, 7, 0.3);
            }
          }
        }

        .readme-container {
          .readme-loading {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            padding: 40px;
            color: #a0a0a0;

            .loading-spinner {
              width: 20px;
              height: 20px;
              border: 2px solid rgba(0, 234, 255, 0.3);
              border-top: 2px solid #00eaff;
              border-radius: 50%;
              animation: spin 1s linear infinite;
            }
          }

          .readme-content {
            background: rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            padding: 20px;
            max-height: 300px;
            overflow-y: auto;

            pre {
              color: #eaf6fb;
              font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
              font-size: 0.9rem;
              line-height: 1.5;
              margin: 0;
              white-space: pre-wrap;
              word-wrap: break-word;
            }
          }

          .readme-empty {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 40px;
            color: #a0a0a0;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 8px;

            svg {
              font-size: 1.2rem;
            }
          }
        }
      }
    }

    @media (max-width: 768px) {
      max-width: 95vw;
      max-height: 95vh;

      .modal-header {
        padding: 20px 20px 15px;

        .modal-title h2 {
          font-size: 1.5rem;
        }
      }

      .modal-content {
        padding: 20px;

        .stats-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }
      }
    }
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Estilos para Skills */
  .skills-component {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;

    .skills-content {
      .skills-header {
        text-align: center;
        margin-bottom: 60px;

        @media (max-width: 768px) {
          margin-bottom: 40px;
        }

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

      .skills-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        margin-bottom: 60px;
        justify-content: center;

        @media (max-width: 768px) {
          gap: 12px;
          margin-bottom: 40px;
        }

        .skills-loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 40px;
          color: #a0a0a0;

          .loading-spinner {
            width: 24px;
            height: 24px;
            border: 2px solid rgba(0, 234, 255, 0.3);
            border-top: 2px solid #00eaff;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-bottom: 16px;
          }

          span {
            font-size: 1rem;
            text-align: center;
          }

          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        }

        .skills-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 40px;
          color: #a0a0a0;

          svg {
            font-size: 2rem;
            margin-bottom: 16px;
            opacity: 0.5;
          }

          span {
            font-size: 1rem;
            text-align: center;
          }
        }

        .skill-tag {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          cursor: pointer;
          white-space: nowrap;

          @media (max-width: 768px) {
            padding: 6px 12px;
            font-size: 0.8rem;
          }

          &:hover {
            background: rgba(255, 255, 255, 0.1);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          }

          .language-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            flex-shrink: 0;
          }

          .language-name {
            font-weight: 600;
          }
        }
      }

      .skills-categories {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 30px;

        @media (max-width: 768px) {
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .category {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 32px;
          text-align: center;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;

          @media (max-width: 768px) {
            padding: 20px;
          }

          &:hover {
            transform: translateY(-4px);
            border-color: rgba(0, 234, 255, 0.3);
            box-shadow: 0 8px 25px rgba(0, 234, 255, 0.1);
          }

          .category-icon {
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

            @media (max-width: 768px) {
              width: 60px;
              height: 60px;
              font-size: 1.5rem;
              margin: 0 auto 16px auto;
            }
          }

          h3 {
            font-size: 1.5rem;
            font-weight: 600;
            color: #ffffff;
            margin: 0 0 16px 0;
          }

          p {
            font-size: 1rem;
            color: #a0a0a0;
            line-height: 1.6;
            margin: 0;
          }
        }
      }
    }
  }

  /* Estilos para Footer */
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
                content: '';
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
        background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%);
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
        bottom: 80px;
        right: 20px;
        width: 45px;
        height: 45px;
        font-size: 1rem;
      }
    }
  }

  @keyframes heartbeat {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }

  /* Scrollbar minimalista para modales */
  .project-modal.custom-scrollbar {
    /* Webkit browsers (Chrome, Safari, Edge) */
    &::-webkit-scrollbar {
      width: 8px !important;
    }

    &::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.05) !important;
      border-radius: 4px !important;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(0, 234, 255, 0.3) !important;
      border-radius: 4px !important;
      transition: background 0.3s ease !important;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 234, 255, 0.5) !important;
    }

    /* Firefox */
    scrollbar-width: thin !important;
    scrollbar-color: rgba(0, 234, 255, 0.3) rgba(255, 255, 255, 0.05) !important;
  }

  /* Contenedores internos con scroll */
  .project-modal.custom-scrollbar .modal-content .readme-container,
  .project-modal.custom-scrollbar .modal-content .languages-detailed,
  .project-modal.custom-scrollbar .modal-content .topics-list {
    &::-webkit-scrollbar {
      width: 6px !important;
    }

    &::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.03) !important;
      border-radius: 3px !important;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(0, 234, 255, 0.2) !important;
      border-radius: 3px !important;
      transition: background 0.3s ease !important;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 234, 255, 0.4) !important;
    }

    scrollbar-width: thin !important;
    scrollbar-color: rgba(0, 234, 255, 0.2) rgba(255, 255, 255, 0.03) !important;
  }
`;
