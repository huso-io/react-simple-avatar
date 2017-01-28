'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  'default': {
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
      height: '100%'
    }
  }
};

var LinkAvatar = (0, _radium2['default'])(_class = function (_Component) {
  _inherits(LinkAvatar, _Component);

  function LinkAvatar(props) {
    _classCallCheck(this, LinkAvatar);

    return _possibleConstructorReturn(this, (LinkAvatar.__proto__ || Object.getPrototypeOf(LinkAvatar)).call(this, props));
  }

  _createClass(LinkAvatar, [{
    key: 'getChildContext',
    value: function () {
      function getChildContext() {
        return {
          alt: this.props.alt
        };
      }

      return getChildContext;
    }()
  }, {
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
            className: (0, _classnames2['default'])('avatar link-avatar', className),
            title: alt },
          _react2['default'].createElement(
            'a',
            { href: to,
              style: styles['default'].link },
            children
          )
        );
      }

      return render;
    }()
  }]);

  return LinkAvatar;
}(_react.Component)) || _class;

LinkAvatar.childContextTypes = {
  alt: _react.PropTypes.string
};
LinkAvatar.propTypes = {
  size: _react.PropTypes.number.isRequired,
  to: _react.PropTypes.string,
  alt: _react.PropTypes.string,
  style: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.string, _react.PropTypes.object]),
  className: _react.PropTypes.string,
  children: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object])
};
var _default = LinkAvatar;
exports['default'] = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', '/Users/itonyo/Developments/personal/react-avatar/src/component/Avatar/link.avatar.js');

  __REACT_HOT_LOADER__.register(LinkAvatar, 'LinkAvatar', '/Users/itonyo/Developments/personal/react-avatar/src/component/Avatar/link.avatar.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/itonyo/Developments/personal/react-avatar/src/component/Avatar/link.avatar.js');
}();

;