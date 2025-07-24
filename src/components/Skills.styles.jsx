import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 60px auto 80px auto;
  padding: 0 2vw;
  h1 {
    color: #00eaff;
    font-size: 2rem;
    margin-bottom: 24px;
    text-align: center;
  }
`;

// Los estilos del carrusel ya no se usan, se eliminaron para usar el nuevo diseño de grid
// que está definido en ProjectStyles.js

export const SkillCard = styled.div`
  min-width: 120px;
  max-width: 140px;
  height: 140px;
  background: #181c24ee;
  border-radius: 14px;
  box-shadow: 0 2px 12px #00eaff11;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 18px 8px 12px 8px;
  transition: box-shadow 0.2s, transform 0.2s;
  cursor: pointer;
  outline: none;
  &:hover,
  &:focus {
    box-shadow: 0 4px 24px #00eaff44;
    transform: scale(1.08) rotate(-2deg);
  }
`;

export const SkillImg = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
  margin-bottom: 10px;
  filter: drop-shadow(0 2px 8px #00eaff33);
`;

export const SkillTitle = styled.div`
  color: #eaf6fb;
  font-size: 1.05rem;
  font-weight: 500;
  text-align: center;
`;
