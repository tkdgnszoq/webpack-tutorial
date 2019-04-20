//CommonJS 스펙: 모듈 가져오기
//var _ = require('lodash');
//es6 방식의 모듈 가져오기
import _ from 'lodash';
//named import하는 방법:{이름}
import {area, circumference} from './js/circle';
//default import하는 방법:{}없이 이름을 마음대로 바꿀 수 있다.
import cube from './js/cube';
import '../style.css';
import '../hello.scss';

console.log(area(5), circumference(5));
console.log(cube(5));
function component() {
  console.log("12");
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());