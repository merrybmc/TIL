// const obj = {
//   name: 'Juhee',
//   sayHi: function() {
//     console.log(Hi! ${this.name});
//   }
// };

obj.sayHi();

const obj = {
  name: "Juhee",
  sayHi() {
    console.log(`Hi ${this.name}`);
  },
};
