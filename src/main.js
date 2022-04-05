import input from 'input';
 
async function askStuff() {
  const result = await input.text('dogs or cats?', { default: 'cats' });

  console.log(result);
}
 
askStuff();
