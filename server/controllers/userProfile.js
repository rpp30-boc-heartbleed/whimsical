require('dotenv').config();
const { format } = require('util');
const express = require('express');
const multer = require('multer');
const { createWriteStream } = require('fs');

const { Storage } = require('@google-cloud/storage');
const { Errand } = require('../models/errand');
const { Profile } = require('../models/userProfile');
const storage = new Storage();

const app = express();
app.set('view engine', 'pug');

app.use(express.json());

const bucket = storage.bucket(process.env.GCLOUD_STORAGE_BUCKET);

const get = (req, res) => {
  console.log('query', req.query.name);
  const result = {};
  Errand.count()
    .then((data) => {
      result.count = data;
    });
  Profile.find({ email: req.query.email })
    .then((data) => {
      console.log('result', data[0].name);
      result.name = data[0].name;
      result.email = data[0].email;
      result.picture = data[0].picture;
      result.location = data[0].location;
      Errand.find({ username: data[0].name, status: 'Delivered' })
        .then((info) => {
          console.log('errands', info);
          res.json({ info: info.length, data });
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => {
      console.log(err);
    });
};

const post = (req, res) => {
  console.log(req.body.formerUser);
  Profile.findOneAndUpdate(req.body.formerUser, req.body.updatedUser, (err, rslt) => {
    res.sendStatus(200);
  });
};

const image = (req, res, next) => {
  console.log('body: ', req.body, req.files[0]);
  if (!req.files) {
    res.status(400).send('No file uploaded.');
    return;
  }

  async function uploadFile() {
    await storage.bucket(bucket.name).upload(req.files[0].path, {
      destination: req.files[0].filename,
    });

    console.log(`${req.files[0].filename} uploaded to ${bucket.name}`);
    const publicUrl = `https://storage.googleapis.com/whimsical-quickbagel/${req.files[0].filename}`;

    console.log(publicUrl);
    Profile.findOneAndUpdate({ name: req.body.name }, { picture: publicUrl }, (err, rslt) => {
      console.log('new data inserted');
      res.sendStatus(200);
    });
  }

  uploadFile().catch(console.error);
};

module.exports = { get, post, image };
