import WidgetCard from "./WidgetCard/WidgetCard";
import classes from "./CardsWidget.module.css";

function CardsWidget({ cards }) {
    return (
        <div className={classes.scrollContainer}>
            <div className={classes.cardRow}>
                {cards.map((card, index) => (
                    <WidgetCard card={card} key={index} />
                ))}
            </div>
        </div>
    );
}

export default CardsWidget;
