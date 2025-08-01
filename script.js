const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
const plantSpace = 0.8;
const initialPlants = 20;

// maximun plants capacity, i use floor to have a whole number
const maxCapacity = Math.floor(area / plantSpace);

// Fonction for simulation
function evaluateGrowth(weekNum) {
  let plantsNumber = initialPlants * 2 ** weekNum; // double per week
  let occupiedSpace = plantsNumber * plantSpace;
  let percentageOccupied = (occupiedSpace * 100) / area;

  console.log(`Week ${weekNum}`);
  console.log(`Plants: ${plantsNumber}`);
  console.log(`Occupied space: ${occupiedSpace.toFixed(2)} m²`); // two number after the point
  console.log(`Occupied percentage: ${percentageOccupied.toFixed(2)}%`); // the same thing

  // Évaluation of the status
  if (percentageOccupied > 80) {
    console.log("Action: Prune the plants (over 80% capacity)\n");
  } else if (percentageOccupied >= 50) {
    console.log("Action: Monitor the growth (between 50% and 80%)\n");
  } else {
    console.log("Action: You can plant more (below 50%)\n");
  }
}

// Results for 1 to 4 weeks 
evaluateGrowth(1);
evaluateGrowth(2);
evaluateGrowth(3);
evaluateGrowth(4);
