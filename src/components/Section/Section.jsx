import PropTypes from 'prop-types';
import css from './Section.module.css';
export const Section = ({ title, children }) => {
  console.log('children :', children);
  console.log('title :', title);
  return (
    <section className={css.section}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

// {
//   "title": "Phonebook",
//   "children": "<Input />"
// }
Section.propTypes = {
  // state: PropTypes.objectOf(
  //   PropTypes.shape({
  //     contacts: PropTypes.array.isRequired,
  //     name: PropTypes.string.isRequired,
  //     number: PropTypes.number.isRequired,
  //   })
  // ),
};
