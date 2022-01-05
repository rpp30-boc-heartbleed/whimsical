require('dotenv').config();
const { format } = require('util');
const express = require('express');
const multer = require('multer');
const { createWriteStream } = require('fs');

// By default, the client will authenticate using the service account file
// specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable and use
// the project specified by the GOOGLE_CLOUD_PROJECT environment variable. See
// https://github.com/GoogleCloudPlatform/google-cloud-node/blob/master/docs/authentication.md
// These environment variables are set automatically on Google App Engine
const { Storage } = require('@google-cloud/storage');
const { Profile } = require('../models/userProfile');
// Instantiate a storage client
const storage = new Storage();

const app = express();
app.set('view engine', 'pug');

// This middleware is available in Express v4.16.0 onwards
app.use(express.json());

// A bucket is a container for objects (files).
const bucket = storage.bucket(process.env.GCLOUD_STORAGE_BUCKET);

const get = (req, res) => {
  console.log('query', req.query.email);
  Profile.find({ email: req.query.email })
    .then((data) => {
      console.log('result', data);
      res.json(data);
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
    // res.status(200).send(publicUrl);
    Profile.findOneAndUpdate(req.body.name, { picture: publicUrl }, (err, rslt) => {
      res.sendStatus(200);
    });
  }

  uploadFile().catch(console.error);

  // Create a new blob in the bucket and upload the file data.
  // const blob = bucket.file(req.files[0]);
  // console.log('blob', blob);
  // const blobStream = blob.createWriteStream();

  // blobStream.on('error', err => {
  //   next(err);
  // });

  // blobStream.on('finish', () => {
  //   // The public URL can be used to directly access the file via HTTP.
  //   const publicUrl = format(
  //     `https://storage.googleapis.com/${bucket.name}/${blob.name}`
  //   );
  //   console.log(publicUrl);
  //   res.status(200).send(publicUrl);
  // });

  // blobStream.end();
};

module.exports = { get, post, image };
