import PropTypes from "prop-types";

const images = require.context("../../", true);

export default function Image({ src, caption }) {
  return <img src={images(`.${src}`)} alt={caption} />;
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};
