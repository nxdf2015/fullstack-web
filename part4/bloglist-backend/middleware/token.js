const { response } = require("express");
const jwt = require("jsonwebtoken");

const { SECRET } = require("../utils/config");

const extractToken = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.slice(7);
    jwt.verify(token, SECRET, (err, decodeToken) => {
      if (!err) {
        req.token = decodeToken;
      }
    });
  }
  next();
};

const authorization = (req, res, next) => {
  if (!req.token) {
    res.status(401).end()
   // throw new Error("not logged");
  } else {
    next();
  }
};

module.exports = { extractToken, authorization };
