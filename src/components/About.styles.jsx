import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 1100px;
  margin: 0px auto 60px auto;
  padding: 32px 0 0 0;
`;

export const Presentation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;
  margin-bottom: 32px;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 18px;
    text-align: center;
  }
`;

export const MyPhoto = styled.img`
  width: 220px;
  border-radius: 12px;
  box-shadow: 0 2px 16px #00eaff33;
  @media (min-width: 1800px) {
    width: 320px;
  }
  @media (max-width: 700px) {
    width: 120px;
  }
`;

export const Timeline = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 32px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 16px;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(180deg, #00eaff 0%, #00b2df 100%);
    opacity: 0.3;
    z-index: 0;
  }
`;

export const TimelineItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 18px;
  position: relative;
  z-index: 1;
`;

export const TimelineDot = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00eaff 60%, #00b2df 100%);
  box-shadow: 0 2px 8px #00eaff55;
  margin-top: 2px;
`;

export const TimelineContent = styled.div`
  background: #181c24ee;
  color: #eaf6fb;
  border-radius: 8px;
  padding: 10px 18px;
  min-width: 180px;
  box-shadow: 0 2px 12px #00eaff11;
  font-size: 1rem;
  strong {
    color: #00eaff;
    font-size: 1.08em;
  }
  small {
    color: #b6eaff;
    font-size: 0.95em;
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
  width: 100%;
`;

export const SkillCard = styled.div`
  background: #181c24ee;
  border-radius: 12px;
  box-shadow: 0 2px 12px #00eaff11;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 18px 8px 12px 8px;
  transition: box-shadow 0.2s, transform 0.2s;
  cursor: pointer;
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
