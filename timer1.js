const alarm = () => {
  const args = process.argv.slice(2); //needed in order to accept arguments from terminal.
  let alarmTimes = args;

  if (alarmTimes.length === 0) console.log('No alarm times were provided');

  // for loop to cycle through arguments set in command line which are then
  for (let i = 0; i < args.length; i++) {
    const individualAlarmTimes = parseInt(alarmTimes[i]);
  
    if (individualAlarmTimes < 0 || isNaN(individualAlarmTimes) === true) {
      console.log(`Please enter a valid alarm time`);
      process.exit();
    }

    setTimeout(()=> {
      process.stdout.write('\x07');
      console.log(`Alarm set at ${individualAlarmTimes} second`);
    },individualAlarmTimes * 1000);
  }
};

alarm();