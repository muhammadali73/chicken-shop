function planMeal() {
  let x = document.getElementById('time').value;
  if (x <= 6) {
    let s = prompt('Mid-night meals\n1. Pizza\n2. Burger\n3. Drinks');
    if (s == 1) {
      alert("Pizza will be ready in a couple of minutes");
    } else if (s == 2) {
      alert("Burger will be ready in a couple of minutes");
    } else if (s == 3) {
      alert("Drinks will be ready in a couple of minutes");
    } else {
      alert("Invalid number selection");
    }
  }
  else if (x <= 12) {
    let m = prompt('Morning meals\n1. Nutella Paratha\n2. Tea\n3. Boiled Eggs');
    if (m == 1) {
      alert("Chocolaty Paratha will be ready in a couple of minutes");
    } else if (m == 2) {
      alert("Milky Tea will be ready in a couple of minutes");
    } else if (m == 3) {
      alert("Boiled Eggs will be ready in a couple of minutes");
    } else {
      alert("Invalid number selection");
    }
  }
  else if (x <= 17) {
    let a = prompt('Afternoon meals\n1. Apples\n2. Kiwis\n3. Boiled Bananas');
    if (a == 1) {
      alert("Apples will be ready in a couple of minutes");
    } else if (a == 2) {
      alert("Kiwis will be ready in a couple of minutes");
    } else if (a == 3) {
      alert("Bananas will be ready in a couple of minutes");
    } else {
      alert("Invalid number selection");
    }
  } else if (x <= 20) {
    let e = prompt('Evening meals\n1. Salad\n2. Tea\n3. Potatoes');
    if (e == 1) {
      alert("Salad will be ready in a couple of minutes");
    } else if (e == 2) {
      alert("Milky Tea will be ready in a couple of minutes");
    } else if (e == 3) {
      alert("Potatoes will be ready in a couple of minutes");
    } else {
      alert("Invalid number selection");
    }
  } else if (x <= 24) {
    let n = prompt('Night meals\n1. Naan\n2. Karahi\n3. Rice');
    if (n == 1) {
      alert("Naan will be ready in a couple of minutes");
    } else if (n == 2) {
      alert("Karahi will be ready in a couple of minutes");
    } else if (n == 3) {
      alert("Rice will be ready in a couple of minutes");
    } else {
      alert("Invalid number selection");
    }
  }
  else {
    alert("Wrong time selection");
  }
} 