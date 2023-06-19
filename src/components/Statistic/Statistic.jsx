import PropTypes from 'prop-types';
import css from './Statistic.module.css';
import { getRandomHexColor } from 'utils/randomHex';

const Statistic = ({ title, stats }) => (
  <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}
    <ul className={css.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li
          key={id}
          className={css.item}
          style={{ backgroundColor: getRandomHexColor() }}
        >
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistic;
