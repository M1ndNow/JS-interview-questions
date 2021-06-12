let obj = {
  name: "jack",
  basic: {
    age: 20,
    height: 1.8,
  },
  likes: ["games", "coding"],
};

function shallowClone(targetObj) {
  let clone = {};
  for (let i in targetObj) {
    clone[i] = targetObj[i];
  }
  return clone;
}

function deepClone(targetObj, dist) {
  let clone = dist || {};
  for (let i in targetObj) {
    if (typeof targetObj[i] === "object") {
      clone[i] = targetObj[i].constructor === Array ? [] : {};
      deepClone(targetObj[i], clone[i]);
    } else {
      clone[i] = targetObj[i];
    }
  }
  return clone;
}

let c1 = shallowClone(obj);
let c2 = deepClone(obj);

c1.basic.age = 21;
c2.likes[0] = "books";

console.log(obj);
console.log(c1);
console.log(c2);
