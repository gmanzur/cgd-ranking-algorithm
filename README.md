# rankingExample

System description - Taken from https://www.europeangodatabase.eu/EGD/EGF_rating_system.php

Ratings are updated by: r' = r + con * (Sa - Se) + bonus
r is the old EGD rating (GoR) of the player
r' is the new EGD rating of the player
Sa is the actual game result (1.0 = win, 0.5 = jigo, 0.0 = loss)
Se is the expected game result as a winning probability (1.0 = 100%, 0.5 = 50%, 0.0 = 0%). See further below for its computation.
con is a factor that determines rating volatility (similar to K in regular Elo rating systems): con = ((3300 - r) / 200)^1.6
bonus (not found in regular Elo rating systems) is a term included to counter rating deflation: bonus = ln(1 + exp((2300 - rating) / 80)) / 5
Se is computed by the Bradley-Terry formula: Se = 1 / (1 + exp(β(r2) - β(r1)))
r1 is the EGD rating of the player
r2 is the EGD rating of the opponent
β is a mapping function for EGD ratings: β = -7 * ln(3300 - r)    System description - Taken from https://www.europeangodatabase.eu/EGD/EGF_rating_system.php

Ratings are updated by: r' = r + con * (Sa - Se) + bonus
r is the old EGD rating (GoR) of the player
r' is the new EGD rating of the player
Sa is the actual game result (1.0 = win, 0.5 = jigo, 0.0 = loss)
Se is the expected game result as a winning probability (1.0 = 100%, 0.5 = 50%, 0.0 = 0%). See further below for its computation.
con is a factor that determines rating volatility (similar to K in regular Elo rating systems): con = ((3300 - r) / 200)^1.6
bonus (not found in regular Elo rating systems) is a term included to counter rating deflation: bonus = ln(1 + exp((2300 - rating) / 80)) / 5
Se is computed by the Bradley-Terry formula: Se = 1 / (1 + exp(β(r2) - β(r1)))
r1 is the EGD rating of the player
r2 is the EGD rating of the opponent
β is a mapping function for EGD ratings: β = -7 * ln(3300 - r)
