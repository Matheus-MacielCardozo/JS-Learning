alert("Hello, World!");

function getAverage(scores) {
    let sum;
    let amount = scores.length();
    for (let i; i <= scores; i++) {
      sum = sum + scores[i];
    }
  
    return sum/amount;
  }
  
  console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
  console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));