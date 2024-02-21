import HeroCard from '../components/HeroCard';
import { useHeros } from '../services/hero';
import './Heroes.css';

const Heroes = () => {
  const heroes = useHeros();

  return (
    <div className="heroes">
      <div className="title"> Heroes page</div>
      {heroes && heroes.map((hero) => <HeroCard name={hero.name} />)}
    </div>
  );
};

export default Heroes;
