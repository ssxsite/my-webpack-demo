import './style/index.css';
import './style/test.scss';
import './common/test.js';
import $ from 'jquery';

import 'common/a';
document.write('<h1 class="box">Hello World</h1>');
document.write('<h2 class="test">test</h2>');
document.write('<span class="icon">icon</span>');

$(function() {
  $('.box').click(function() {
    alert('click');
  });
});
