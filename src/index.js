/**
 * Babel Starter Kit (https://www.kriasoft.com/babel-starter-kit)
 *
 * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import express from 'express'
import cors from 'cors'

const app = express();

app.use(cors());

app.get('/task2A', (req, res) => {
  let a = +req.query.a || 0;
  let b = +req.query.b || 0;
  res.send(`${a + b}`);
});

app.get('/task2B', (req, res) => {
    let fullname = req.query.fullname.split(' ');
    let name;
    if(fullname.length == 3) {
      name = `${fullname[2]} ${fullname[0][0].toUpperCase()}. ${fullname[1][0].toUpperCase()}.`;
    } else if (fullname.length == 2) {
      name = `${fullname[1]} ${fullname[0][0].toUpperCase()}.`;
    } else if (fullname.length == 1 && fullname[0] != "") {
      name = `${fullname[0]}`;
    } else {
      name = "Invalid fullname";
    }
    res.send(name);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
