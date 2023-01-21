"use strict";

const { default: Client } = require("itscalledsoccer");

const client = new Client();

const mergeAndFilter = (payload, team) => {
  return payload
    .map((arr) => arr[0])
    .reduce((acc, elem) => Object.assign(acc, elem));
};

module.exports = async function (fastify, opts) {
  fastify.get("/get-teams/:league", async function (request, reply) {
    const { league } = request.params;

    return client.getTeams({ leagues: [league] });
  });
  fastify.get("/get-team/:team", async function (request, reply) {
    const { team } = request.params;

    const payload = await Promise.all([
      client.getTeamsGoalsAdded({ team_id: team }),
      client.getTeamsXgoals({ team_id: team }),
      client.getTeamsXpass({ team_id: team }),
    ]);

    return mergeAndFilter(payload, team);
  });
};
