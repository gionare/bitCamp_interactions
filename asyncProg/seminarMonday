// 3.
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  let random = Math.random();
  if (random < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  for (;;) {
    try {
      return primitiveMultiply(a, b);
    } catch (error) {
      console.log(error);
    }
  }
}

console.log(reliableMultiply(8, 8));

