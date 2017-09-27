'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _reactRouterDom = require('react-router-dom');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  'default': {
    container: {
      overflow: 'hidden',
      display: 'inline-block'
    },
    link: {
      position: 'relative',
      zIndex: 0,
      display: 'block',
      width: '100%',
      height: '100%'
    }
  }
};

var PROPTYPES = {
  size: _propTypes2['default'].number.isRequired,
  to: _propTypes2['default'].string,
  alt: _propTypes2['default'].string,
  style: _propTypes2['default'].oneOfType([_propTypes2['default'].array, _propTypes2['default'].string, _propTypes2['default'].object]),
  className: _propTypes2['default'].string,
  children: _propTypes2['default'].oneOfType([_propTypes2['default'].array, _propTypes2['default'].object])
};

var RouterAvatar = (0, _radium2['default'])(_class = function (_Component) {
  _inherits(RouterAvatar, _Component);

  function RouterAvatar() {
    _classCallCheck(this, RouterAvatar);

    return _possibleConstructorReturn(this, (RouterAvatar.__proto__ || Object.getPrototypeOf(RouterAvatar)).apply(this, arguments));
  }

  _createClass(RouterAvatar, [{
    key: 'render',
    value: function () {
      function render() {
        var _props = this.props,
            to = _props.to,
            alt = _props.alt,
            size = _props.size,
            style = _props.style,
            className = _props.className,
            children = _props.children;


        return _react2['default'].createElement(
          'div',
          { style: [styles['default'].container, style, { width: size + 'px', height: size + 'px' }],
            className: (0, _classnames2['default'])('avatar router-avatar', className),
            title: alt },
          _react2['default'].createElement(
            _reactRouterDom.Link,
            { to: to,
              style: styles['default'].link },
            children
          )
        );
      }

      return render;
    }()
  }]);

  return RouterAvatar;
}(_react.Component)) || _class;

RouterAvatar.propTypes = PROPTYPES;

exports['default'] = RouterAvatar;