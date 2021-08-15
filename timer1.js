let input = process.argv.slice(2)

for (let i = 0; i < input.length; i++) {
  setTimeout(() => {
    process.stdout.write('\x07'); // sound
    if (i === input.length - 1) {
      console.log('Wake up!');
    }
  }, input[i] * 1000);
};
