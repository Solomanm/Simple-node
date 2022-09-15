const MY_FAVORITE_FOOD = process.env.NAME;
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(MY_FAVORITE_FOOD, 'rock!');
    await sleep(5000);
  }
}

main();
