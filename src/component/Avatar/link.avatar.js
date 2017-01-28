// @flow

import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import cn from 'classnames';

let styles = {
  default: {
    container: {
      position: 'relative',
      zIndex: 0,
      overflow: 'hidden',
      boxSizing: 'border-box',
      display: 'inline-block',
      backgroundColor: '#B7B7B7'
    },
    link: {
      display: 'block',
      width: '100%',
      height: '100%',
    }
  }
};

@Radium
class LinkAvatar extends Component {
  static childContextTypes = {
    alt: PropTypes.string
  };
  static propTypes = {
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
    ])
  }
  constructor(props: Object) {
    super(props);
  }
  getChildContext() {
    return {
      alt: this.props.alt
    };
  }
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
           className={ cn('avatar link-avatar', className) }
           title={ alt }>
        <a href={ to }
           style={ styles.default.link }>
          { children }
        </a>
      </div>
    );
  }
}

export default LinkAvatar;
