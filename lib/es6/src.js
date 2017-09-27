import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import cn from 'classnames';
import { FullCanvas } from 'react-layout-kits';

let styles = {
  default: {
    layer: {
      position: 'absolute',
      zIndex: 2,
      top: 0,
      left: 0
    },
    img: {
      float: 'left',
      width: '100%',
      height: '100%',
      maxWidth: 'none'
    }
  }
};

const PROPTYPES = {
  from: PropTypes.string,
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object
  ]),
  className: PropTypes.string,
};

@Radium
class Src extends Component {
  render() {
    let {
      from,
      style,
      className,
    } = this.props;

    return (
      <FullCanvas
       style={ [styles.default.layer, style] }
       className={ cn('avatar-src', className) }>
        <img
         src={ from }
         style={ styles.default.img }/>
      </FullCanvas>
    );
  }
}

Src.propTypes = PROPTYPES;

export default Src;
