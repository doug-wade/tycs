"use strict";

const path = require("path");
const AutoLoad = require("@fastify/autoload");
const staticPlugin = require("@fastify/static");

// Pass --options via CLI arguments in command to enable these options.
module.exports.options = {};

module.exports = async function (fastify, opts) {
  // Place here your custom code!

  fastify.register(staticPlugin, {
    root: path.join(__dirname, "public"),
    prefix: "/public/", // optional: default '/'
  });

  // Do not touch the following lines

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "routes"),
    options: Object.assign({}, opts),
  });
};
