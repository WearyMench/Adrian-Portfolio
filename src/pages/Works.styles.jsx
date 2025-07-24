import styled from "styled-components";

export const WorksContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
  padding: 80px 0 60px;
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
`;

export const WorksContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;

  .loading-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 400px;
    text-align: center;

    .loading-spinner {
      font-size: 3rem;
      color: #00eaff;
      animation: spin 1s linear infinite;
      margin-bottom: 20px;
    }

    p {
      color: #eaf6fb;
      font-size: 1.1rem;
      margin: 0;
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;

export const WorksTitle = styled.div`
  text-align: center;
  margin-bottom: 40px;
  position: relative;
  z-index: 2;

  h1 {
    font-size: 3.5rem !important;
    font-weight: 700 !important;
    color: #00eaff !important; /* Color de respaldo */
    background: linear-gradient(135deg, #00eaff 0%, #ffffff 100%) !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    background-clip: text !important;
    margin: 0 0 20px 0 !important;
    letter-spacing: -0.02em !important;
    /* Debug: asegurar visibilidad */
    text-shadow: 0 0 1px rgba(0, 234, 255, 0.5) !important;

    @media (max-width: 768px) {
      font-size: 2.5rem !important;
    }
  }

  p {
    font-size: 1.2rem !important;
    color: #a0a0a0 !important;
    max-width: 600px !important;
    margin: 0 auto !important;
    line-height: 1.6 !important;

    @media (max-width: 768px) {
      font-size: 1rem !important;
      padding: 0 20px !important;
    }
  }
`;

export const WorksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 0 10px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 25px;
  }
`;

export const WorksEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  text-align: center;

  .empty-content {
    max-width: 500px;
    padding: 40px 20px;

    svg {
      font-size: 4rem;
      color: #00eaff;
      margin-bottom: 20px;
    }

    h2 {
      font-size: 2rem;
      color: #ffffff;
      margin: 0 0 15px 0;
      font-weight: 600;
    }

    p {
      font-size: 1.1rem;
      color: #a0a0a0;
      line-height: 1.6;
      margin: 0 0 30px 0;
    }

    .empty-actions {
      display: flex;
      gap: 15px;
      justify-content: center;
      flex-wrap: wrap;

      .github-link,
      .refresh-button {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 12px 24px;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 500;
        text-decoration: none;
        transition: all 0.3s ease;
        cursor: pointer;
        border: none;
        outline: none;

        &:hover {
          transform: translateY(-2px);
        }
      }

      .github-link {
        background: linear-gradient(135deg, #00eaff 0%, #0099cc 100%);
        color: #000;
        box-shadow: 0 4px 15px rgba(0, 234, 255, 0.3);

        &:hover {
          box-shadow: 0 6px 20px rgba(0, 234, 255, 0.4);
        }
      }

      .refresh-button {
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
`;

export const WorksError = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  text-align: center;

  .error-content {
    max-width: 500px;
    padding: 40px 20px;

    svg {
      font-size: 4rem;
      color: #ff6b6b;
      margin-bottom: 20px;
    }

    h2 {
      font-size: 2rem;
      color: #ffffff;
      margin: 0 0 15px 0;
      font-weight: 600;
    }

    p {
      font-size: 1.1rem;
      color: #a0a0a0;
      line-height: 1.6;
      margin: 0 0 30px 0;
    }

    .retry-button {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 24px;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 500;
      background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
      color: #ffffff;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
      }
    }
  }
`;

// Estilos para las tarjetas de proyecto
export const ProjectCardStyles = styled.div`
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
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        135deg,
        rgba(0, 234, 255, 0.1) 0%,
        transparent 50%
      );
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

        .archived-badge,
        .fork-badge {
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
      justify-content: space-between;
      align-items: center;

      .project-links {
        display: flex;
        gap: 12px;

        .project-link {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 0.85rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid transparent;

          &:hover {
            transform: translateY(-1px);
          }
        }

        .github-link {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.2);

          &:hover {
            background: rgba(255, 255, 255, 0.15);
            border-color: rgba(255, 255, 255, 0.3);
          }
        }

        .demo-link {
          background: rgba(0, 234, 255, 0.1);
          color: #00eaff;
          border-color: rgba(0, 234, 255, 0.2);

          &:hover {
            background: rgba(0, 234, 255, 0.15);
            border-color: rgba(0, 234, 255, 0.3);
          }
        }
      }

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
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
      border-radius: 16px;

      span {
        color: #ffffff;
        font-weight: 600;
        font-size: 1.1rem;
      }
    }

    &:hover .project-overlay {
      opacity: 1;
    }
  }
`;

// Estilos para el modal
export const ProjectModalStyles = styled.div`
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
              content: "";
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
              font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
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
`;
