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

var Src = (0, _radium2['default'])(_class = function (_Component) {
  _inherits(Src, _Component);

  function Src(props, context) {
    _classCallCheck(this, Src);

    return _possibleConstructorReturn(this, (Src.__proto__ || Object.getPrototypeOf(Src)).call(this, props, context));
  }

  _createClass(Src, [{
    key: 'render',
    value: function () {
      function render() {
        var _props = this.props,
            from = _props.from,
            style = _props.style,
            className = _props.className;

        return _react2['default'].createElement(
          _reactLayoutKits.FullCanvas,
          {
            style: [styles['default'].layer, style],
            className: (0, _classnames2['default'])('avatar-src', className) },
          _react2['default'].createElement('img', {
            alt: this.context.alt,
            src: from,
            style: styles['default'].img })
        );
      }

      return render;
    }()
  }]);

  return Src;
}(_react.Component)) || _class;

Src.contextTypes = {
  alt: _react.PropTypes.string
};
Src.propTypes = {
  from: _react.PropTypes.string,
  style: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.string, _react.PropTypes.object]),
  className: _react.PropTypes.string
};
exports['default'] = Src;