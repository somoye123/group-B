let calculator = {
  parrelogram: (b, h) => {
    let area = b * h;
    return area;
  },

  cylinder: (r, h) => {
    let vol = Math.PI * Math.pow(r, 2) * h;
    return vol.toFixed(2);
  },

  rectangle: (l, w) => {
    let area = l * w;
    return area;
  }
}


// How to expose the calculator methods
// calculator.objectMethod(num, num);
// The Object methods represents either Parralelogram, Cylinder and Rectangle
