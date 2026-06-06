const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <h2>To-Do Form</h2>
    <form action="http://localhost:5000/submit" method="POST">
      <input type="text" name="itemName" placeholder="Item Name"><br><br>
      <input type="text" name="itemDescription" placeholder="Item Description"><br><br>
      <button type="submit">Submit</button>
    </form>
  `);
});

app.listen(3000, () => {
  console.log('Frontend running on port 3000');
});