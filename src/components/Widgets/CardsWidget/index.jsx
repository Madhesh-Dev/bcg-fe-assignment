import WidgetCard from '../WidgetCard/WidgetCard';
import CityCard from './CityCard';
import styles from './styles.module.css';

function CardsWidget({ cards }) {
  console.log(' cards:', cards);
  return (
    <div className={styles.scrollContainer}>
      <div className={styles.cardRow}>
        {[...cards,...cards,...cards].map((card, index) => (
            <WidgetCard {...card} key={index} />
        ))}
      </div>
    </div>
  );
}

export default CardsWidget;