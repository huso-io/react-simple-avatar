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

var _reactLayoutKits = require('react-layout-kits');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  'default': {
    layer: {
      position: 'absolute',
      zIndex: 1,
      top: 0,
      left: 0
    },
    initials: {
      color: '#000',
      fontWeight: 200,
      fontStyle: 'normal',
      fontSize: '14px',
      lineHeight: '14px',
      fontFamily: "-apple-system, 'Helvetica Neue', Helvetica, 'Nimbus Sans L', Arial, 'Liberation Sans', 'PingFang SC', 'Hiragino Sans GB', 'Source Han Sans CN', 'Source Han Sans SC', 'Microsoft YaHei', 'Wenquanyi Micro Hei', 'WenQuanYi Zen Hei', 'ST Heiti', SimHei, 'WenQuanYi Zen Hei Sharp', sans-serif",
      display: 'inline-block',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
  }
};

var Initials = (0, _radium2['default'])(_class = function (_Component) {
  _inherits(Initials, _Component);

  function Initials(props, context) {
    _classCallCheck(this, Initials);

    return _possibleConstructorReturn(this, (Initials.__proto__ || Object.getPrototypeOf(Initials)).call(this, props, context));
  }

  _createClass(Initials, [{
    key: 'render',
    value: function () {
      function render() {
        var _props = this.props,
            size = _props.size,
            text = _props.text,
            style = _props.style,
            className = _props.className;

        return _react2['default'].createElement(
          _reactLayoutKits.FullCanvas,
          {
            style: styles['default'].layer,
            className: (0, _classnames2['default'])('avatar-initials', className) },
          _react2['default'].createElement(
            'span',
            { style: [styles['default'].initials, style, { fontSize: size + 'px' }] },
            text
          )
        );
      }

      return render;
    }()
  }]);

  return Initials;
}(_react.Component)) || _class;

Initials.contextTypes = {
  alt: _react.PropTypes.string
};
Initials.propTypes = {
  size: _react.PropTypes.number.isRequired,
  text: _react.PropTypes.string,
  style: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.string, _react.PropTypes.object]),
  className: _react.PropTypes.string
};
exports['default'] = Initials;