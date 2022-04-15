const alarm = (wakupTimes) => {
  const args = process.argv.slice(2); //needed in order to accept arguments from terminal.
  let delay = args;

  for(i = 0; i < args.length; i++){
    setTimeout(()=>{
      process.stdout.write('\x07');
    },delay[i] * 1000)
  }
};

alarm();