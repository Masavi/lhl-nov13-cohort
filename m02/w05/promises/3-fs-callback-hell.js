const fs = require('fs');

fs.readFile('./message.txt', { encoding: 'utf-8' }, (error, data) => {
  if (error) throw new Error('❌ An error occurred when reading the file!');
  console.log('Data read successfully!');
  const storyToCopy = data;

  fs.writeFile('./copy.txt', storyToCopy, (error) => {
    if (error) throw new Error('❌ An error occurred when copying the file!');
    console.log('Copy generated successfully!');

    fs.readFile('./copy.txt', { encoding: 'utf-8' }, (error, data) => {
      console.log('This is the copy text:');
      console.log(data);
    })
  })
});

