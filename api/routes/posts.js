import express from "express";
import mongoose from "mongoose";
const router = express.Router();

//Import Post Model
import Post from "../models/postSchema";

//Get all of the data.....................
router.get('/posts', (req, res, next) => {
  Post
    .find()
    .sort({ date: -1 })
    .select(' first_name last_name email username country date _id ')
    .exec()
    .then(posts => {
      if (posts.length < 1) {
        return res.status(409).json({
          success: false,
          message: `no posts found yet...`
        });
      } else {
        return res.status(200).json(posts);
      }
    })
    .catch(err => {
      return res.status(500).json(err);
    });
});

//Post data to the database................................
router.post('/post/add', (req, res, next) => {
  Post
    .find({ email: req.body.email })
    .exec()
    .then(post => {
      if (post.length >= 1) {
        return res.status(409).json({
          success: false,
          message: `invalid email id...`
        });
      } else {
        Post
          .find({ username: req.body.username })
          .exec()
          .then(post => {
            if (post.length >= 1) {
              return res.status(409).json({
                success: false,
                message: `invalid username...`
              });
            } else {
              let newPost = new Post({
                _id: new mongoose.Types.ObjectId(),
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                username: req.body.username,
                country: req.body.country,
                experience_level: req.body.experience_level
              });
              return newPost
                .save()
                .then(post => {
                  return res.status(200).json({
                    success: true,
                    post: post
                  });
                })
                .catch(err => {
                  return res.status(500).json(err);
                })
            }
          })
          .catch(err => {
            return res.status(500).json(err);
          })
      }
    })
    .catch(err => {
      return res.status(500).json(err);
    });
});

//Get data by id........................
router.get('/post/:id', (req, res, next) => {
  let postId = req.params.id;
  Post
    .findOne({ _id: postId })
    .select('first_name last_name email username country experience_level date _id')
    .exec()
    .then(post => {
      if (post.length < 1) {
        return res.status(409).json({
          success: false,
          message: `no post found...`
        });
      } else {
        return res.status(200).json(post);
      }
    })
    .catch(err => {
      return res.status(500).json(err);
    });
});

//Patch some data........................
router.patch('/post/patch/:id', (req, res, next) => {
  let postId = req.params.id;
  let newPost = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    username: req.body.username,
    country: req.body.country,
    experience_level: req.body.experience_level
  };
  Post
    .updateOne({ _id: postId }, { $set: newPost })
    .exec()
    .then(post => {
      return res.status(200).json({
        success: true,
        post: post
      });
    })
    .catch(err => {
      return res.status(500).json(err);
    })
});

//Delete data.......................
router.delete('/post/:id', (req, res, next) => {
  let postId = req.params.id;
  Post
    .find({ _id: postId })
    .exec()
    .then(post => {
      if (post.length < 1) {
        return res.status(409).json({
          success: false,
          message: `no post found...`
        });
      } else {
        Post
          .deleteOne({ _id: postId })
          .exec()
          .then(post => {
            return res.status(200).json({
              success: true,
              post: post
            });
          })
          .catch(err => {
            return res.status(500).json(err);
          });
      }
    })
    .catch(err => {
      return res.status(500).json(err);
    });
});

export default router;