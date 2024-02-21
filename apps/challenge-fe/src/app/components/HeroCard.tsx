import { FC } from 'react';
import './HeroCard.css';

interface HeroCardProps {
  name: string;
}

const HeroCard: FC<HeroCardProps> = (props) => {
  return <div className="hero-card">{props.name}</div>;
};

export default HeroCard;
