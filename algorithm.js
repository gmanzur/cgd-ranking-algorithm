const { E, log, pow, round } = Math;

const calculate = (player, opponent, result) => {
  const newRank = round(
    player +
      volatility(player) * (result - bradleyTerry(player, opponent)) +
      bonus(player)
  );
  return newRank;
};

const volatility = (rank) => pow((3300 - rank) / 200, 1.6);

const bonus = (rank) => log(1 + pow(E, (2300 - rank) / 80)) / 5;

const bradleyTerry = (player, opponent) =>
  1 / (1 + pow(E, mappingFunction(opponent) - mappingFunction(player)));

const mappingFunction = (rank) => -7 * log(3300 - rank);

module.exports = {
  calculate,
};
