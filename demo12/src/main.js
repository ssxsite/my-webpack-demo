import './style/index.css';
import './style/test.scss';
import './common/test.js';
document.write('<h1 class="box">Hello World</h1>');
document.write('<h2 class="test">test</h2>');
document.write('<span class="icon">icon</span>');

class Demo {
  show() {
    console.log('this.Age :', this.Age);
  }

  get Age() {
    return this._age;
  }

  set Age(val) {
    this._age = val + '岁';
  }
}

let d1 = new Demo();
d1.Age = 19;
d1.show();
