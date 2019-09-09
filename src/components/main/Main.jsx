import PropTypes from 'prop-types';

function Main({ children }) {
  return (
    <main>
      {children}
    </main>
  );
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
}
export default Main;
