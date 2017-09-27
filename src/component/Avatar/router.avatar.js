import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { Link } from 'react-router-dom'
import cn from 'classnames';

let styles = {
  default: {
    container: {
      overflow: 'hidden',
      display: 'inline-block'
    },
    link: {
      position: 'relative',
      zIndex: 0,
      display: 'block',
      width: '100%',
      height: '100%',
    }
  }
};

const PROPTYPES = {
  size: PropTypes.number.isRequired,
  to: PropTypes.string,
  alt: PropTypes.string,
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object
  ]),
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
};

@Radium
class RouterAvatar extends Component {
  render() {
    let {
      to,
      alt,
      size,
      style,
      className,
      children
    } = this.props;

    return (
      <div style={ [styles.default.container, style, {width: size + 'px', height: size + 'px'}] }
           className={ cn('avatar router-avatar', className) }
           title={ alt }>
        <Link to={ to }
              style={ styles.default.link }>
          { children }
        </Link>
      </div>
    );
  }
}

RouterAvatar.propTypes = PROPTYPES;

export default RouterAvatar;
