console.log(3333);
class Demo {
  show() {
    console.log('this.Age :', this.Age);
  }

  get Age() {
    return this._age;
  }

  set Age(val) {
    this._age = val + 1;
  }
}

let d1 = new Demo();
d1.Age = 19;
d1.show();

let [a, b, c] = [1, 2, 3];
console.log('a :', a);
console.log('b :', b);
console.log('c :', c);

let [d, e, f] = [1, 2, 3];
console.log('d :', d);
console.log('e :', e);
console.log('f :', f);
