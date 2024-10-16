const express = require('express');
const app = express();
const port = 9000;
var cors = require('cors');

app.use(cors()); 
app.get('/', (req, res) => {
  res.send('Hello World!')

})
app.get('/intro', (req, res) => {
    res.send('Introduction')
    
  })

  
  // app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})