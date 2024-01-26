import PropTypes from 'prop-types';
import { loader } from '../assets';

const Loader = ({ title }) => {
  // Simulate an error for testing purposes
  if (title === 'simulateError') {
    throw new Error('Simulated error in Loader component');
  }

  return (
    <div className="w-full flex justify-center items-center flex-col">
      <img src={loader} alt="Loading Spinner" className="w-32 h-32 object-contain" />
      <h1 className="font-bold text-2xl text-white mt-2">
        {title || "Loading..."}
      </h1>
    </div>
  );
};

Loader.propTypes = {
  title: PropTypes.string,
};

export default Loader;
