import './Code.css';

console.groupCollapsed("src/component/Code.js invoked.");console.groupEnd();

function Code({color, text, colors, id, isBlinking}) {

    return (
      <span id={id} className={`color_${color} ${colors[color] ? 'on': ''} ${isBlinking ? 'on' : ''}`}>
       {text}
      </span>
    );
  }

export default Code;