function calcSleepTime() {
  const fallAsleepTime = new Date();
  fallAsleepTime.setMinutes(fallAsleepTime.getMinutes() + 14);
  console.log(
    "You will fall asleep at",
    fallAsleepTime.toLocaleTimeString("en-US", {
      timeStyle: "short",
    })
  );

  const wakeUpTimesDiv = document.getElementById("wakeup-hours-div");
  
  const wakeUpTime = new Date(fallAsleepTime);
  // const wakeUpTimes = [];
  wakeUpTimesDiv.innerHTML = ""; // this cleans the string
  for (let i = 1; i <= 6; i++) {
    wakeUpTime.setMinutes(wakeUpTime.getMinutes() + 90);
    const wakeUpTimeString = wakeUpTime.toLocaleTimeString("en-US", {
      timeStyle: "short",
    });
    // wakeUpTimes.push(wakeUpTimeString);
    // const sleepCycleDiv = document.getElementById(`cycle-${i}`);
    const sleepCycleDiv = document.createElement("div");
    sleepCycleDiv.classList.add("cycle");
    sleepCycleDiv.setAttribute("id", `cycle-${i}`);
    // sleepCycleDiv.setAttribute("class", `cycle`);
    sleepCycleDiv.textContent = wakeUpTimeString;

    wakeUpTimesDiv.appendChild(sleepCycleDiv);
  }
  
  // console.log("Wake-up times:", wakeUpTimes.join(", "));
}

const calcBtn = document.getElementById("calc-btn");
calcBtn.onclick = calcSleepTime;