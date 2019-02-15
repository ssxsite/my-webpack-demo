import './style/index.css';
import './style/test.scss';
import $ from 'jquery';

document.write('<h1 class="box">Hello World</h1>');
document.write('<h2 class="test">test</h2>');
document.write('<span class="icon">icon</span>');

$.get(
  '/comments/hotflow',
  {
    id: '4263554020904293',
    mid: '4263554020904293',
    max_id_type: '0'
  },
  function(data) {
    console.log(data);
  }
);

$(function() {
  $('.box').click(function() {
    alert('click');
  });
});

