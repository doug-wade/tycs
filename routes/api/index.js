"use strict";

const client = new Client();

const mergeAndFilter = async (payload, team) => {
  console.log("payload", payload);
  console.log("team", team);

  return new Promise((res, rej) => res({ foo: "bar" }));
};

module.exports = async function (fastify, opts) {
  fastify.get("/get-teams/:league", async function (request, reply) {
    const { league } = request.params;

    return client.getTeams({ leagues: [league] });
  });
  fastify.get("/get-leagues", async function (request, reply) {
    return client.getLeagues();
  });
  fastify.get("/get-team/:team", async function (request, reply) {
    const { team } = request.params;

    const payload = await Promise.all([
      client.getTeamsSalaries({
        seasonName: "2022",
      }),
      client.getTeamsGoalsAdded(),
      client.getTeamsXgoals(),
      client.getTeamsXpass(),
    ]);

    return mergeAndFilter(payload, team);
  });
};
