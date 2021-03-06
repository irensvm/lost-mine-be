const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const Book = require('../models/Book-model')
const User = require('../models/user-model')



router.get('/books', (req, res, next) => {
  
  Book.find()
  
  .then(books => {
    res.json(books)
  })
  .catch(err => {
    res.json(err)
  })
  
})

router.post('/books', (req, res, next) => {
  console.log(req.body)
  //const user = req.session.currentUser
  Book.create({
    title: req.body.title,
    owner: req.body.owner,
    opinion: req.body.opinion,
    genre: req.body.genre,
    rating: req.body.rating,
    lented:req.body.lented,
    owner: req.user._id


  })
    .then(response => {
      res.json(response)
    })
    .catch(err => {
      res.json(err)
    })
})

//router.get('/profile', (req, res, next) => {
//  console.log('usuario login ok?:', req.session.currentUser._id)
//  const userId = req.session.currentUser._id
//  console.log(userId)
//  Book.find({ owner: userId })
//      .populate('owner')
//      .then(books => {
//          res.json(books)
//      })
//      .catch(err => {
//          res.json(err)
//      })
//})

router.get('/books/:id', (req, res, next) => {
  console.log('usuario login ok?:', req.session.currentUser._id)
  const userId = req.session.currentUser._id
  console.log(userId)
  console.log(req.params.id)
  Book.findById(req.params.id)
    .then(book => {
      res.json(book)
    })
    .catch(err => {
      res.json(err)
    })

})

router.put('/books/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Book.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({ message: `Book with ${req.book.id} is updated successfully.` });
    })
    .catch(error => {
      res.json(error);
    });
})
module.exports = router
