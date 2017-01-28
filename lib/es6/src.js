//      

import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import cn from 'classnames';
import FullCanvas from 'react-fullcanvas';

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

@Radium
class Src extends Component {
  static contextTypes = {
    alt: PropTypes.string
  };
  static propTypes = {
    from: PropTypes.string,
    style: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string,
      PropTypes.object
    ]),
    className: PropTypes.string
  }
  constructor(props        , context        ) {
    super(props, context);
  }
  render() {
    let {
      from,
      style,
      className
    } = this.props;
    return (
      <FullCanvas
       style={ [styles.default.layer, style] }
       className={ cn('avatar-src', className) }>
        <img
         alt={ this.context.alt }
         src={ from }
         style={ styles.default.img }/>
      </FullCanvas>
    );
  }
}

export default Src;
