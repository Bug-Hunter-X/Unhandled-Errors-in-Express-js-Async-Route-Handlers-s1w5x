const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some asynchronous operation to fetch user data ...
  // This is a potential problem if the operation fails and doesn't call res.send or res.status
});
app.listen(3000, () => console.log('Server listening on port 3000'));