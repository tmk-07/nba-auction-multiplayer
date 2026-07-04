/* ---------------- DATA ---------------- */
// Real players, roughly tiered by current caliber.
// ppg/rpg/apg are recent per-game values for gameplay balance.
// def is a curated 1-10 defensive/gameplay rating, not an official NBA statistic.
// positions maps players into this game's G/F/C roster slots; flexible players can fill multiple slots without penalty.
const MASTER = [
  {
    "name": "Nikola Jokic",
    "pos": "C",
    "positions": [
      "C"
    ],
    "tier": "superstar",
    "ppg": 29.6,
    "rpg": 12.7,
    "apg": 10.2,
    "def": 6
  },
  {
    "name": "Luka Doncic",
    "pos": "G",
    "positions": [
      "G",
      "F"
    ],
    "tier": "superstar",
    "ppg": 28.2,
    "rpg": 8.0,
    "apg": 7.7,
    "def": 4
  },
  {
    "name": "Giannis Antetokounmpo",
    "pos": "F",
    "positions": [
      "F",
      "C"
    ],
    "tier": "superstar",
    "ppg": 30.4,
    "rpg": 11.9,
    "apg": 6.5,
    "def": 9
  },
  {
    "name": "Shai Gilgeous-Alexander",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "superstar",
    "ppg": 32.7,
    "rpg": 5.0,
    "apg": 6.4,
    "def": 7
  },
  {
    "name": "Jayson Tatum",
    "pos": "F",
    "positions": [
      "F"
    ],
    "tier": "superstar",
    "ppg": 26.8,
    "rpg": 8.7,
    "apg": 6.0,
    "def": 7
  },
  {
    "name": "Victor Wembanyama",
    "pos": "C",
    "positions": [
      "F",
      "C"
    ],
    "tier": "superstar",
    "ppg": 24.3,
    "rpg": 11.0,
    "apg": 3.7,
    "def": 10
  },
  {
    "name": "Anthony Edwards",
    "pos": "G",
    "positions": [
      "G",
      "F"
    ],
    "tier": "superstar",
    "ppg": 27.6,
    "rpg": 5.7,
    "apg": 4.5,
    "def": 6
  },
  {
    "name": "Kevin Durant",
    "pos": "F",
    "positions": [
      "F"
    ],
    "tier": "superstar",
    "ppg": 26.6,
    "rpg": 6.0,
    "apg": 4.2,
    "def": 6
  },
  {
    "name": "Joel Embiid",
    "pos": "C",
    "positions": [
      "C"
    ],
    "tier": "superstar",
    "ppg": 23.8,
    "rpg": 8.2,
    "apg": 4.5,
    "def": 8
  },
  {
    "name": "LeBron James",
    "pos": "F",
    "positions": [
      "G",
      "F",
      "C"
    ],
    "tier": "superstar",
    "ppg": 24.4,
    "rpg": 7.8,
    "apg": 8.2,
    "def": 5
  },
  {
    "name": "Stephen Curry",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "star",
    "ppg": 24.5,
    "rpg": 4.4,
    "apg": 6.0,
    "def": 4
  },
  {
    "name": "Devin Booker",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "star",
    "ppg": 25.6,
    "rpg": 4.1,
    "apg": 7.1,
    "def": 5
  },
  {
    "name": "Kawhi Leonard",
    "pos": "F",
    "positions": [
      "F"
    ],
    "tier": "star",
    "ppg": 21.5,
    "rpg": 5.9,
    "apg": 3.1,
    "def": 9
  },
  {
    "name": "Anthony Davis",
    "pos": "F",
    "positions": [
      "F",
      "C"
    ],
    "tier": "star",
    "ppg": 24.7,
    "rpg": 11.6,
    "apg": 3.5,
    "def": 9
  },
  {
    "name": "Donovan Mitchell",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "star",
    "ppg": 24.0,
    "rpg": 4.5,
    "apg": 5.0,
    "def": 5
  },
  {
    "name": "Jaylen Brown",
    "pos": "F",
    "positions": [
      "G",
      "F"
    ],
    "tier": "star",
    "ppg": 22.2,
    "rpg": 5.8,
    "apg": 4.5,
    "def": 7
  },
  {
    "name": "Tyrese Haliburton",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "star",
    "ppg": 18.6,
    "rpg": 3.5,
    "apg": 9.2,
    "def": 4
  },
  {
    "name": "Paolo Banchero",
    "pos": "F",
    "positions": [
      "F"
    ],
    "tier": "star",
    "ppg": 25.9,
    "rpg": 7.5,
    "apg": 4.8,
    "def": 5
  },
  {
    "name": "Ja Morant",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "star",
    "ppg": 23.2,
    "rpg": 4.1,
    "apg": 7.3,
    "def": 5
  },
  {
    "name": "Trae Young",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "star",
    "ppg": 24.2,
    "rpg": 3.1,
    "apg": 11.6,
    "def": 3
  },
  {
    "name": "Jalen Brunson",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "star",
    "ppg": 26.0,
    "rpg": 3.0,
    "apg": 7.3,
    "def": 4
  },
  {
    "name": "Damian Lillard",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "star",
    "ppg": 24.9,
    "rpg": 4.7,
    "apg": 7.1,
    "def": 3
  },
  {
    "name": "Kyrie Irving",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "star",
    "ppg": 24.7,
    "rpg": 4.8,
    "apg": 4.6,
    "def": 4
  },
  {
    "name": "Jimmy Butler",
    "pos": "F",
    "positions": [
      "G",
      "F"
    ],
    "tier": "star",
    "ppg": 17.5,
    "rpg": 5.4,
    "apg": 4.8,
    "def": 8
  },
  {
    "name": "Cade Cunningham",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "star",
    "ppg": 26.1,
    "rpg": 6.1,
    "apg": 9.1,
    "def": 4
  },
  {
    "name": "Alperen Sengun",
    "pos": "C",
    "positions": [
      "C"
    ],
    "tier": "star",
    "ppg": 19.1,
    "rpg": 10.3,
    "apg": 4.9,
    "def": 6
  },
  {
    "name": "De'Aaron Fox",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "star",
    "ppg": 23.5,
    "rpg": 4.8,
    "apg": 6.3,
    "def": 5
  },
  {
    "name": "Tyrese Maxey",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "star",
    "ppg": 26.3,
    "rpg": 3.3,
    "apg": 6.1,
    "def": 4
  },
  {
    "name": "LaMelo Ball",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "star",
    "ppg": 25.2,
    "rpg": 4.9,
    "apg": 7.4,
    "def": 3
  },
  {
    "name": "Jalen Williams",
    "pos": "F",
    "positions": [
      "G",
      "F"
    ],
    "tier": "star",
    "ppg": 21.6,
    "rpg": 5.3,
    "apg": 5.1,
    "def": 7
  },
  {
    "name": "Jaren Jackson Jr.",
    "pos": "F",
    "positions": [
      "F",
      "C"
    ],
    "tier": "star",
    "ppg": 22.2,
    "rpg": 5.6,
    "apg": 2.0,
    "def": 9
  },
  {
    "name": "Evan Mobley",
    "pos": "F",
    "positions": [
      "F",
      "C"
    ],
    "tier": "star",
    "ppg": 18.5,
    "rpg": 9.3,
    "apg": 3.2,
    "def": 9
  },
  {
    "name": "Lauri Markkanen",
    "pos": "F",
    "positions": [
      "F",
      "C"
    ],
    "tier": "star",
    "ppg": 19.0,
    "rpg": 5.9,
    "apg": 1.5,
    "def": 4
  },
  {
    "name": "Jamal Murray",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "star",
    "ppg": 21.4,
    "rpg": 3.9,
    "apg": 6.0,
    "def": 4
  },
  {
    "name": "Kristaps Porzingis",
    "pos": "C",
    "positions": [
      "F",
      "C"
    ],
    "tier": "star",
    "ppg": 19.5,
    "rpg": 6.8,
    "apg": 2.1,
    "def": 8
  },
  {
    "name": "Cooper Flagg",
    "pos": "F",
    "positions": [
      "F"
    ],
    "tier": "star",
    "ppg": 21.0,
    "rpg": 6.7,
    "apg": 4.5,
    "def": 7
  },
  {
    "name": "Domantas Sabonis",
    "pos": "C",
    "positions": [
      "F",
      "C"
    ],
    "tier": "starter",
    "ppg": 19.1,
    "rpg": 13.9,
    "apg": 6.0,
    "def": 5
  },
  {
    "name": "DeMar DeRozan",
    "pos": "F",
    "positions": [
      "G",
      "F"
    ],
    "tier": "starter",
    "ppg": 22.2,
    "rpg": 3.9,
    "apg": 4.4,
    "def": 4
  },
  {
    "name": "Bam Adebayo",
    "pos": "C",
    "positions": [
      "F",
      "C"
    ],
    "tier": "starter",
    "ppg": 18.1,
    "rpg": 9.6,
    "apg": 4.3,
    "def": 8
  },
  {
    "name": "Zion Williamson",
    "pos": "F",
    "positions": [
      "F"
    ],
    "tier": "starter",
    "ppg": 24.6,
    "rpg": 7.2,
    "apg": 5.3,
    "def": 5
  },
  {
    "name": "Julius Randle",
    "pos": "F",
    "positions": [
      "F",
      "C"
    ],
    "tier": "starter",
    "ppg": 18.7,
    "rpg": 7.1,
    "apg": 4.7,
    "def": 4
  },
  {
    "name": "Karl-Anthony Towns",
    "pos": "C",
    "positions": [
      "F",
      "C"
    ],
    "tier": "starter",
    "ppg": 24.4,
    "rpg": 12.8,
    "apg": 3.1,
    "def": 4
  },
  {
    "name": "Pascal Siakam",
    "pos": "F",
    "positions": [
      "F",
      "C"
    ],
    "tier": "starter",
    "ppg": 20.2,
    "rpg": 6.9,
    "apg": 3.4,
    "def": 6
  },
  {
    "name": "Jrue Holiday",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "starter",
    "ppg": 11.1,
    "rpg": 4.3,
    "apg": 3.9,
    "def": 8
  },
  {
    "name": "CJ McCollum",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "starter",
    "ppg": 21.1,
    "rpg": 3.8,
    "apg": 4.1,
    "def": 4
  },
  {
    "name": "Tyler Herro",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "starter",
    "ppg": 23.9,
    "rpg": 5.2,
    "apg": 5.5,
    "def": 3
  },
  {
    "name": "Desmond Bane",
    "pos": "G",
    "positions": [
      "G",
      "F"
    ],
    "tier": "starter",
    "ppg": 19.2,
    "rpg": 6.1,
    "apg": 5.3,
    "def": 5
  },
  {
    "name": "Brandon Ingram",
    "pos": "F",
    "positions": [
      "G",
      "F"
    ],
    "tier": "starter",
    "ppg": 22.2,
    "rpg": 5.6,
    "apg": 5.2,
    "def": 4
  },
  {
    "name": "Scottie Barnes",
    "pos": "F",
    "positions": [
      "G",
      "F"
    ],
    "tier": "starter",
    "ppg": 19.3,
    "rpg": 7.7,
    "apg": 5.8,
    "def": 7
  },
  {
    "name": "Franz Wagner",
    "pos": "F",
    "positions": [
      "F"
    ],
    "tier": "starter",
    "ppg": 24.1,
    "rpg": 5.7,
    "apg": 4.7,
    "def": 6
  },
  {
    "name": "Darius Garland",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "starter",
    "ppg": 20.6,
    "rpg": 2.9,
    "apg": 6.7,
    "def": 4
  },
  {
    "name": "Myles Turner",
    "pos": "C",
    "positions": [
      "C"
    ],
    "tier": "starter",
    "ppg": 15.6,
    "rpg": 6.5,
    "apg": 1.5,
    "def": 8
  },
  {
    "name": "Jarrett Allen",
    "pos": "C",
    "positions": [
      "C"
    ],
    "tier": "starter",
    "ppg": 13.5,
    "rpg": 9.7,
    "apg": 1.9,
    "def": 8
  },
  {
    "name": "Rudy Gobert",
    "pos": "C",
    "positions": [
      "C"
    ],
    "tier": "starter",
    "ppg": 12.0,
    "rpg": 10.9,
    "apg": 1.8,
    "def": 9
  },
  {
    "name": "Chet Holmgren",
    "pos": "C",
    "positions": [
      "F",
      "C"
    ],
    "tier": "starter",
    "ppg": 15.0,
    "rpg": 8.0,
    "apg": 2.0,
    "def": 8
  },
  {
    "name": "Fred VanVleet",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "starter",
    "ppg": 14.1,
    "rpg": 3.7,
    "apg": 5.6,
    "def": 7
  },
  {
    "name": "Amen Thompson",
    "pos": "F",
    "positions": [
      "G",
      "F"
    ],
    "tier": "starter",
    "ppg": 14.1,
    "rpg": 8.2,
    "apg": 3.8,
    "def": 8
  },
  {
    "name": "Brandon Miller",
    "pos": "F",
    "positions": [
      "F"
    ],
    "tier": "starter",
    "ppg": 21.0,
    "rpg": 4.9,
    "apg": 3.6,
    "def": 5
  },
  {
    "name": "Jalen Green",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "starter",
    "ppg": 21.0,
    "rpg": 4.6,
    "apg": 3.4,
    "def": 3
  },
  {
    "name": "RJ Barrett",
    "pos": "F",
    "positions": [
      "G",
      "F"
    ],
    "tier": "starter",
    "ppg": 21.1,
    "rpg": 6.3,
    "apg": 5.4,
    "def": 4
  },
  {
    "name": "Michael Porter Jr.",
    "pos": "F",
    "positions": [
      "F"
    ],
    "tier": "starter",
    "ppg": 18.2,
    "rpg": 7.0,
    "apg": 2.1,
    "def": 4
  },
  {
    "name": "Trey Murphy III",
    "pos": "F",
    "positions": [
      "F"
    ],
    "tier": "starter",
    "ppg": 21.2,
    "rpg": 5.1,
    "apg": 3.5,
    "def": 5
  },
  {
    "name": "Jerami Grant",
    "pos": "F",
    "positions": [
      "F"
    ],
    "tier": "starter",
    "ppg": 14.4,
    "rpg": 3.5,
    "apg": 2.1,
    "def": 6
  },
  {
    "name": "Cam Johnson",
    "pos": "F",
    "positions": [
      "F"
    ],
    "tier": "starter",
    "ppg": 18.8,
    "rpg": 4.3,
    "apg": 3.4,
    "def": 5
  },
  {
    "name": "Deni Avdija",
    "pos": "F",
    "positions": [
      "F"
    ],
    "tier": "starter",
    "ppg": 16.9,
    "rpg": 7.3,
    "apg": 3.9,
    "def": 6
  },
  {
    "name": "Keegan Murray",
    "pos": "F",
    "positions": [
      "F"
    ],
    "tier": "starter",
    "ppg": 12.4,
    "rpg": 6.7,
    "apg": 1.4,
    "def": 6
  },
  {
    "name": "Coby White",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "starter",
    "ppg": 20.4,
    "rpg": 3.7,
    "apg": 4.5,
    "def": 4
  },
  {
    "name": "Anfernee Simons",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "starter",
    "ppg": 19.3,
    "rpg": 2.7,
    "apg": 4.8,
    "def": 3
  },
  {
    "name": "Immanuel Quickley",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "starter",
    "ppg": 17.1,
    "rpg": 3.5,
    "apg": 5.8,
    "def": 5
  },
  {
    "name": "Jalen Suggs",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "starter",
    "ppg": 16.2,
    "rpg": 4.0,
    "apg": 3.7,
    "def": 8
  },
  {
    "name": "Ivica Zubac",
    "pos": "C",
    "positions": [
      "C"
    ],
    "tier": "starter",
    "ppg": 16.8,
    "rpg": 12.6,
    "apg": 2.7,
    "def": 7
  },
  {
    "name": "Isaiah Hartenstein",
    "pos": "C",
    "positions": [
      "C"
    ],
    "tier": "starter",
    "ppg": 11.2,
    "rpg": 10.7,
    "apg": 3.8,
    "def": 7
  },
  {
    "name": "Deandre Ayton",
    "pos": "C",
    "positions": [
      "C"
    ],
    "tier": "starter",
    "ppg": 14.4,
    "rpg": 10.2,
    "apg": 1.6,
    "def": 5
  },
  {
    "name": "Walker Kessler",
    "pos": "C",
    "positions": [
      "C"
    ],
    "tier": "starter",
    "ppg": 11.1,
    "rpg": 12.2,
    "apg": 1.7,
    "def": 8
  },
  {
    "name": "Jakob Poeltl",
    "pos": "C",
    "positions": [
      "C"
    ],
    "tier": "starter",
    "ppg": 14.5,
    "rpg": 9.6,
    "apg": 2.8,
    "def": 6
  },
  {
    "name": "P.J. Washington",
    "pos": "F",
    "positions": [
      "F",
      "C"
    ],
    "tier": "starter",
    "ppg": 14.7,
    "rpg": 7.8,
    "apg": 2.3,
    "def": 6
  },
  {
    "name": "Tari Eason",
    "pos": "F",
    "positions": [
      "F"
    ],
    "tier": "starter",
    "ppg": 12.0,
    "rpg": 6.4,
    "apg": 1.5,
    "def": 8
  },
  {
    "name": "Ausar Thompson",
    "pos": "F",
    "positions": [
      "G",
      "F"
    ],
    "tier": "starter",
    "ppg": 10.1,
    "rpg": 5.1,
    "apg": 2.3,
    "def": 8
  },
  {
    "name": "Jabari Smith Jr.",
    "pos": "F",
    "positions": [
      "F",
      "C"
    ],
    "tier": "starter",
    "ppg": 12.2,
    "rpg": 7.0,
    "apg": 1.1,
    "def": 6
  },
  {
    "name": "Devin Vassell",
    "pos": "G",
    "positions": [
      "G",
      "F"
    ],
    "tier": "starter",
    "ppg": 16.3,
    "rpg": 4.0,
    "apg": 2.9,
    "def": 5
  },
  {
    "name": "Stephon Castle",
    "pos": "G",
    "positions": [
      "G",
      "F"
    ],
    "tier": "starter",
    "ppg": 14.7,
    "rpg": 3.7,
    "apg": 4.1,
    "def": 6
  },
  {
    "name": "Shaedon Sharpe",
    "pos": "G",
    "positions": [
      "G",
      "F"
    ],
    "tier": "starter",
    "ppg": 18.5,
    "rpg": 4.5,
    "apg": 2.8,
    "def": 4
  },
  {
    "name": "Zach LaVine",
    "pos": "G",
    "positions": [
      "G",
      "F"
    ],
    "tier": "starter",
    "ppg": 23.3,
    "rpg": 4.3,
    "apg": 4.2,
    "def": 3
  },
  {
    "name": "Bradley Beal",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "starter",
    "ppg": 17.0,
    "rpg": 3.3,
    "apg": 3.7,
    "def": 3
  },
  {
    "name": "Christian Braun",
    "pos": "G",
    "positions": [
      "G",
      "F"
    ],
    "tier": "starter",
    "ppg": 15.4,
    "rpg": 5.2,
    "apg": 2.6,
    "def": 6
  },
  {
    "name": "Andrew Nembhard",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "starter",
    "ppg": 10.0,
    "rpg": 3.3,
    "apg": 5.0,
    "def": 5
  },
  {
    "name": "Herbert Jones",
    "pos": "F",
    "positions": [
      "G",
      "F"
    ],
    "tier": "role",
    "ppg": 11.2,
    "rpg": 4.1,
    "apg": 2.1,
    "def": 9
  },
  {
    "name": "Mikal Bridges",
    "pos": "F",
    "positions": [
      "G",
      "F"
    ],
    "tier": "role",
    "ppg": 17.6,
    "rpg": 4.2,
    "apg": 3.3,
    "def": 8
  },
  {
    "name": "Alex Caruso",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "role",
    "ppg": 7.1,
    "rpg": 2.9,
    "apg": 2.5,
    "def": 9
  },
  {
    "name": "Klay Thompson",
    "pos": "G",
    "positions": [
      "G",
      "F"
    ],
    "tier": "role",
    "ppg": 14.0,
    "rpg": 3.4,
    "apg": 2.0,
    "def": 5
  },
  {
    "name": "Draymond Green",
    "pos": "F",
    "positions": [
      "F",
      "C"
    ],
    "tier": "role",
    "ppg": 9.0,
    "rpg": 6.1,
    "apg": 5.6,
    "def": 9
  },
  {
    "name": "Aaron Gordon",
    "pos": "F",
    "positions": [
      "F",
      "C"
    ],
    "tier": "role",
    "ppg": 14.7,
    "rpg": 4.8,
    "apg": 3.2,
    "def": 6
  },
  {
    "name": "Bruce Brown",
    "pos": "G",
    "positions": [
      "G",
      "F"
    ],
    "tier": "role",
    "ppg": 8.3,
    "rpg": 3.8,
    "apg": 1.6,
    "def": 6
  },
  {
    "name": "OG Anunoby",
    "pos": "F",
    "positions": [
      "F"
    ],
    "tier": "role",
    "ppg": 18.0,
    "rpg": 4.8,
    "apg": 2.2,
    "def": 9
  },
  {
    "name": "Derrick White",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "role",
    "ppg": 16.4,
    "rpg": 4.5,
    "apg": 4.8,
    "def": 8
  },
  {
    "name": "Austin Reaves",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "role",
    "ppg": 20.2,
    "rpg": 4.5,
    "apg": 5.8,
    "def": 4
  },
  {
    "name": "Josh Hart",
    "pos": "F",
    "positions": [
      "G",
      "F"
    ],
    "tier": "role",
    "ppg": 13.6,
    "rpg": 9.6,
    "apg": 5.9,
    "def": 6
  },
  {
    "name": "Brook Lopez",
    "pos": "C",
    "positions": [
      "C"
    ],
    "tier": "role",
    "ppg": 13.0,
    "rpg": 5.0,
    "apg": 1.8,
    "def": 8
  },
  {
    "name": "Mike Conley",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "role",
    "ppg": 8.2,
    "rpg": 2.6,
    "apg": 4.5,
    "def": 6
  },
  {
    "name": "Kentavious Caldwell-Pope",
    "pos": "G",
    "positions": [
      "G",
      "F"
    ],
    "tier": "role",
    "ppg": 8.7,
    "rpg": 2.2,
    "apg": 2.0,
    "def": 7
  },
  {
    "name": "Jaden McDaniels",
    "pos": "F",
    "positions": [
      "F"
    ],
    "tier": "role",
    "ppg": 12.2,
    "rpg": 3.0,
    "apg": 1.4,
    "def": 8
  },
  {
    "name": "Andrew Wiggins",
    "pos": "F",
    "positions": [
      "G",
      "F"
    ],
    "tier": "role",
    "ppg": 18.0,
    "rpg": 4.5,
    "apg": 2.6,
    "def": 6
  },
  {
    "name": "Donte DiVincenzo",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "role",
    "ppg": 11.7,
    "rpg": 3.7,
    "apg": 3.6,
    "def": 5
  },
  {
    "name": "Norman Powell",
    "pos": "G",
    "positions": [
      "G",
      "F"
    ],
    "tier": "role",
    "ppg": 21.8,
    "rpg": 3.2,
    "apg": 2.1,
    "def": 4
  },
  {
    "name": "Tobias Harris",
    "pos": "F",
    "positions": [
      "F"
    ],
    "tier": "role",
    "ppg": 13.7,
    "rpg": 5.9,
    "apg": 2.2,
    "def": 4
  },
  {
    "name": "Dyson Daniels",
    "pos": "G",
    "positions": [
      "G",
      "F"
    ],
    "tier": "role",
    "ppg": 14.1,
    "rpg": 5.9,
    "apg": 4.4,
    "def": 9
  },
  {
    "name": "Jordan Poole",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "role",
    "ppg": 20.5,
    "rpg": 3.0,
    "apg": 4.5,
    "def": 2
  },
  {
    "name": "Cam Thomas",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "role",
    "ppg": 24.0,
    "rpg": 3.3,
    "apg": 3.8,
    "def": 2
  },
  {
    "name": "Daniel Gafford",
    "pos": "C",
    "positions": [
      "C"
    ],
    "tier": "role",
    "ppg": 12.3,
    "rpg": 6.8,
    "apg": 1.4,
    "def": 8
  },
  {
    "name": "Dereck Lively II",
    "pos": "C",
    "positions": [
      "C"
    ],
    "tier": "role",
    "ppg": 8.7,
    "rpg": 7.5,
    "apg": 2.4,
    "def": 7
  },
  {
    "name": "Nic Claxton",
    "pos": "C",
    "positions": [
      "C"
    ],
    "tier": "role",
    "ppg": 10.3,
    "rpg": 7.4,
    "apg": 2.2,
    "def": 7
  },
  {
    "name": "Dillon Brooks",
    "pos": "F",
    "positions": [
      "G",
      "F"
    ],
    "tier": "role",
    "ppg": 14.0,
    "rpg": 3.7,
    "apg": 1.7,
    "def": 7
  },
  {
    "name": "Dorian Finney-Smith",
    "pos": "F",
    "positions": [
      "F"
    ],
    "tier": "role",
    "ppg": 8.7,
    "rpg": 3.9,
    "apg": 1.4,
    "def": 7
  },
  {
    "name": "Marcus Smart",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "role",
    "ppg": 9.0,
    "rpg": 2.1,
    "apg": 3.2,
    "def": 8
  },
  {
    "name": "Nickeil Alexander-Walker",
    "pos": "G",
    "positions": [
      "G",
      "F"
    ],
    "tier": "role",
    "ppg": 9.4,
    "rpg": 3.2,
    "apg": 2.7,
    "def": 7
  },
  {
    "name": "Ty Jerome",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "role",
    "ppg": 12.5,
    "rpg": 2.5,
    "apg": 3.4,
    "def": 4
  },
  {
    "name": "Isaiah Joe",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "role",
    "ppg": 10.2,
    "rpg": 2.5,
    "apg": 1.6,
    "def": 4
  },
  {
    "name": "Cason Wallace",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "role",
    "ppg": 8.4,
    "rpg": 3.4,
    "apg": 2.7,
    "def": 7
  },
  {
    "name": "Ayo Dosunmu",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "role",
    "ppg": 12.3,
    "rpg": 3.5,
    "apg": 4.5,
    "def": 5
  },
  {
    "name": "Collin Sexton",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "role",
    "ppg": 18.4,
    "rpg": 2.7,
    "apg": 4.2,
    "def": 3
  },
  {
    "name": "Keyonte George",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "role",
    "ppg": 16.8,
    "rpg": 3.8,
    "apg": 5.6,
    "def": 3
  },
  {
    "name": "Bennedict Mathurin",
    "pos": "G",
    "positions": [
      "G",
      "F"
    ],
    "tier": "role",
    "ppg": 16.1,
    "rpg": 5.3,
    "apg": 1.9,
    "def": 4
  },
  {
    "name": "Rui Hachimura",
    "pos": "F",
    "positions": [
      "F"
    ],
    "tier": "role",
    "ppg": 13.1,
    "rpg": 5.0,
    "apg": 1.4,
    "def": 4
  },
  {
    "name": "Brandin Podziemski",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "role",
    "ppg": 11.7,
    "rpg": 5.1,
    "apg": 3.4,
    "def": 5
  },
  {
    "name": "Jonathan Kuminga",
    "pos": "F",
    "positions": [
      "F"
    ],
    "tier": "role",
    "ppg": 15.3,
    "rpg": 4.6,
    "apg": 2.2,
    "def": 5
  },
  {
    "name": "D'Angelo Russell",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "role",
    "ppg": 12.6,
    "rpg": 2.8,
    "apg": 5.1,
    "def": 2
  },
  {
    "name": "Mitchell Robinson",
    "pos": "C",
    "positions": [
      "C"
    ],
    "tier": "role",
    "ppg": 5.1,
    "rpg": 5.9,
    "apg": 0.6,
    "def": 8
  },
  {
    "name": "Sam Hauser",
    "pos": "F",
    "positions": [
      "F"
    ],
    "tier": "role",
    "ppg": 8.5,
    "rpg": 3.2,
    "apg": 1.0,
    "def": 5
  },
  {
    "name": "Gary Trent Jr.",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "bench",
    "ppg": 11.1,
    "rpg": 2.3,
    "apg": 1.2,
    "def": 5
  },
  {
    "name": "Naz Reid",
    "pos": "C",
    "positions": [
      "F",
      "C"
    ],
    "tier": "bench",
    "ppg": 14.2,
    "rpg": 6.0,
    "apg": 2.3,
    "def": 5
  },
  {
    "name": "Bobby Portis",
    "pos": "F",
    "positions": [
      "F",
      "C"
    ],
    "tier": "bench",
    "ppg": 13.9,
    "rpg": 8.4,
    "apg": 2.1,
    "def": 4
  },
  {
    "name": "Delon Wright",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "bench",
    "ppg": 5.0,
    "rpg": 2.3,
    "apg": 2.5,
    "def": 6
  },
  {
    "name": "Kelly Olynyk",
    "pos": "C",
    "positions": [
      "F",
      "C"
    ],
    "tier": "bench",
    "ppg": 7.1,
    "rpg": 3.7,
    "apg": 2.3,
    "def": 3
  },
  {
    "name": "Cody Martin",
    "pos": "F",
    "positions": [
      "G",
      "F"
    ],
    "tier": "bench",
    "ppg": 7.8,
    "rpg": 4.5,
    "apg": 2.3,
    "def": 6
  },
  {
    "name": "Duncan Robinson",
    "pos": "G",
    "positions": [
      "G",
      "F"
    ],
    "tier": "bench",
    "ppg": 11.0,
    "rpg": 2.3,
    "apg": 2.4,
    "def": 2
  },
  {
    "name": "Jae'Sean Tate",
    "pos": "F",
    "positions": [
      "F"
    ],
    "tier": "bench",
    "ppg": 4.0,
    "rpg": 2.3,
    "apg": 1.0,
    "def": 6
  },
  {
    "name": "Malik Monk",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "bench",
    "ppg": 17.2,
    "rpg": 3.8,
    "apg": 5.6,
    "def": 3
  },
  {
    "name": "Payton Pritchard",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "bench",
    "ppg": 14.3,
    "rpg": 3.8,
    "apg": 3.5,
    "def": 4
  },
  {
    "name": "Luke Kennard",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "bench",
    "ppg": 8.9,
    "rpg": 2.8,
    "apg": 3.3,
    "def": 3
  },
  {
    "name": "T.J. McConnell",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "bench",
    "ppg": 9.1,
    "rpg": 2.4,
    "apg": 4.4,
    "def": 5
  },
  {
    "name": "Al Horford",
    "pos": "C",
    "positions": [
      "F",
      "C"
    ],
    "tier": "bench",
    "ppg": 9.0,
    "rpg": 6.2,
    "apg": 2.1,
    "def": 7
  },
  {
    "name": "Kevon Looney",
    "pos": "C",
    "positions": [
      "C"
    ],
    "tier": "bench",
    "ppg": 4.5,
    "rpg": 6.1,
    "apg": 1.6,
    "def": 6
  },
  {
    "name": "Max Strus",
    "pos": "G",
    "positions": [
      "G",
      "F"
    ],
    "tier": "bench",
    "ppg": 9.4,
    "rpg": 4.3,
    "apg": 3.2,
    "def": 4
  },
  {
    "name": "Obi Toppin",
    "pos": "F",
    "positions": [
      "F"
    ],
    "tier": "bench",
    "ppg": 10.5,
    "rpg": 4.0,
    "apg": 1.6,
    "def": 3
  },
  {
    "name": "Grayson Allen",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "bench",
    "ppg": 10.6,
    "rpg": 3.0,
    "apg": 2.1,
    "def": 4
  },
  {
    "name": "Caris LeVert",
    "pos": "G",
    "positions": [
      "G",
      "F"
    ],
    "tier": "bench",
    "ppg": 10.2,
    "rpg": 2.8,
    "apg": 3.7,
    "def": 4
  },
  {
    "name": "Steven Adams",
    "pos": "C",
    "positions": [
      "C"
    ],
    "tier": "bench",
    "ppg": 3.9,
    "rpg": 5.6,
    "apg": 1.1,
    "def": 6
  },
  {
    "name": "Andre Drummond",
    "pos": "C",
    "positions": [
      "C"
    ],
    "tier": "bench",
    "ppg": 7.3,
    "rpg": 7.8,
    "apg": 0.6,
    "def": 5
  },
  {
    "name": "Gabe Vincent",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "bench",
    "ppg": 6.4,
    "rpg": 1.3,
    "apg": 1.4,
    "def": 6
  },
  {
    "name": "Scoot Henderson",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "bench",
    "ppg": 12.7,
    "rpg": 3.0,
    "apg": 5.1,
    "def": 3
  },
  {
    "name": "Jaime Jaquez Jr.",
    "pos": "F",
    "positions": [
      "G",
      "F"
    ],
    "tier": "bench",
    "ppg": 8.6,
    "rpg": 4.4,
    "apg": 2.5,
    "def": 5
  },
  {
    "name": "Terry Rozier",
    "pos": "G",
    "positions": [
      "G"
    ],
    "tier": "bench",
    "ppg": 10.6,
    "rpg": 3.7,
    "apg": 2.6,
    "def": 3
  },
  {
    "name": "Aaron Nesmith",
    "pos": "F",
    "positions": [
      "G",
      "F"
    ],
    "tier": "bench",
    "ppg": 12.0,
    "rpg": 4.0,
    "apg": 1.2,
    "def": 6
  },
  {
    "name": "Bilal Coulibaly",
    "pos": "F",
    "positions": [
      "G",
      "F"
    ],
    "tier": "bench",
    "ppg": 12.3,
    "rpg": 5.0,
    "apg": 3.4,
    "def": 6
  }
];
const TIER_BASE = {superstar:95, star:72, starter:50, role:30, bench:15};
const TIER_VALUE_BOUNDS = {
  superstar:{min:86, max:100},
  star:{min:66, max:84},
  starter:{min:45, max:63},
  role:{min:26, max:44},
  bench:{min:10, max:25},
};
const STAR_POWER_FIXED_MAX = 100;

// Stat-to-value formula. It is deterministic: same player, same true value every game.
// Values are normalized within each tier, then clamped to that tier's bounds.
const STAT_WEIGHTS = {ppg:1.55, rpg:1.15, apg:1.35, def:3.75};
function statComposite(p){
  return p.ppg*STAT_WEIGHTS.ppg + p.rpg*STAT_WEIGHTS.rpg + p.apg*STAT_WEIGHTS.apg + p.def*STAT_WEIGHTS.def;
}
function tierStatRange(tier){
  const vals = MASTER.filter(p=>p.tier===tier).map(statComposite);
  return {min:Math.min(...vals), max:Math.max(...vals)};
}
const TIER_STAT_RANGES = Object.fromEntries(Object.keys(TIER_BASE).map(t=>[t, tierStatRange(t)]));
function statBasedTrueValue(player){
  const bounds = TIER_VALUE_BOUNDS[player.tier];
  const range = TIER_STAT_RANGES[player.tier];
  const rawNorm = range.max===range.min ? 0.5 : (statComposite(player)-range.min)/(range.max-range.min);
  const norm = clamp(rawNorm,0,1);
  return clamp(Math.round(bounds.min + norm*(bounds.max-bounds.min)), bounds.min, bounds.max);
}

const POOL_PROFILES = [
  {name:"Superteam Showcase", desc:"A loaded class — 4 superstars, 3 stars, and 3 random depth pieces.", groups:[
    {tiers:["superstar"], count:4}, {tiers:["star"], count:3}, {tiers:["starter","role","bench"], count:3}
  ]},
  {name:"Balanced", desc:"A mixed class — 5 from the top two tiers, 4 from starter/role, and 1 bench piece.", groups:[
    {tiers:["superstar","star"], count:5}, {tiers:["starter","role"], count:4}, {tiers:["bench"], count:1}
  ]},
  {name:"Top Heavy", desc:"Three superstars headline the draft, then seven role/bench players fill out the board.", groups:[
    {tiers:["superstar"], count:3}, {tiers:["role","bench"], count:7}
  ]},
  {name:"Deep Sleeper", desc:"Only one superstar appears — the rest of the draft is about finding starter, role, and bench value.", groups:[
    {tiers:["superstar"], count:1}, {tiers:["starter","role"], count:4}, {tiers:["bench"], count:5}
  ]},
];

const BOT_PERSONAS = [
  {
    name:"Star Chaser",
    flavor:"This bot is aggressive on premium names and is willing to pay up for top-tier talent.",
    tierMult:{superstar:1.24, star:1.13, starter:0.99, role:0.88, bench:0.78},
    statMult:{ppg:1.14, rpg:0.94, apg:1.00, def:0.88},
    budgetDiscipline:1.08, aggression:0.94, caution:0.32, floor:0.42,
    pricePressure:0.16, pressureRisk:0.92
  },
  {
    name:"Value Hunter",
    flavor:"This bot is disciplined, avoids bidding wars, and still scales spending with player quality.",
    tierMult:{superstar:1.02, star:0.99, starter:0.94, role:0.88, bench:0.80},
    statMult:{ppg:0.98, rpg:1.04, apg:1.05, def:1.05},
    budgetDiscipline:0.86, aggression:0.80, caution:0.48, floor:0.28,
    pricePressure:0.34, pressureRisk:0.88
  },
  {
    name:"Balanced Builder",
    flavor:"This bot plays close to the board and tries to build a clean, well-rounded roster.",
    tierMult:{superstar:1.08, star:1.03, starter:0.97, role:0.90, bench:0.83},
    statMult:{ppg:1.00, rpg:1.00, apg:1.00, def:1.00},
    budgetDiscipline:0.98, aggression:0.87, caution:0.39, floor:0.34,
    pricePressure:0.24, pressureRisk:0.86
  },
  {
    name:"Cap Manager",
    flavor:"This bot is cautious with the budget, but still reserves its biggest bids for the best players.",
    tierMult:{superstar:1.05, star:1.00, starter:0.93, role:0.86, bench:0.78},
    statMult:{ppg:0.96, rpg:1.03, apg:1.02, def:1.08},
    budgetDiscipline:0.78, aggression:0.76, caution:0.52, floor:0.25,
    pricePressure:0.30, pressureRisk:0.84
  },
];

/* ---------------- STATE ---------------- */
let G = null;
let LAST_SHARE_RESULT = null;

function rand(min,max){ return min + Math.random()*(max-min); }
function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
function shuffle(arr){ const a=arr.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]];} return a; }
function clamp(v,lo,hi){ return Math.max(lo,Math.min(hi,v)); }

function samplePlayers(tiers, count, selectedNames){
  const options = shuffle(MASTER.filter(p=>tiers.includes(p.tier) && !selectedNames.has(p.name)));
  return options.slice(0,count);
}

function buildPool(){
  const profile = pick(POOL_PROFILES);
  const selected = [];
  const selectedNames = new Set();
  profile.groups.forEach(group=>{
    const picks = samplePlayers(group.tiers, group.count, selectedNames);
    picks.forEach(p=>{
      selected.push(p);
      selectedNames.add(p.name);
    });
  });
  // Order = the sequence players will be revealed in, one at a time. Neither
  // side gets to see this list ahead of time.
  const order = shuffle(selected).map((p,idx)=>{
    const trueValue = statBasedTrueValue(p);
    return {
      id: "p"+idx,
      name:p.name,
      pos:p.pos,
      positions:(p.positions || [p.pos]).slice(),
      tier:p.tier,
      trueValue,
      ppg:p.ppg,
      rpg:p.rpg,
      apg:p.apg,
      def:p.def,
      drafted:false
    };
  });
  return {profile, order};
}

function positionalFitMultiplier(side, player){
  if(!G || !G.posSlots || !G.posSlots[side]) return 1;
  const slots = G.posSlots[side];
  if(G.slots[side]<=0) return 0;

  const positions = eligiblePositions(player);
  if(positions.some(pos => slots[pos] > 0)) return 1.06;

  let bestDist = Infinity;
  ['G','F','C'].forEach(pos=>{
    if(slots[pos] > 0) bestDist = Math.min(bestDist, posDistanceForPlayer(player, pos));
  });
  if(bestDist===Infinity) return 0;
  return bestDist===1 ? 0.94 : 0.82;
}

function botEstimate(player, persona, side='bot'){
  // The estimate is stable for a given player/persona: no random value wobble.
  // The bot's strategy changes how it weights tier, stats, and roster fit.
  const baseValue = statBasedTrueValue(player);
  const neutralComposite = statComposite(player);
  const personaComposite = player.ppg*STAT_WEIGHTS.ppg*persona.statMult.ppg
    + player.rpg*STAT_WEIGHTS.rpg*persona.statMult.rpg
    + player.apg*STAT_WEIGHTS.apg*persona.statMult.apg
    + player.def*STAT_WEIGHTS.def*persona.statMult.def;
  const statTilt = neutralComposite===0 ? 1 : personaComposite/neutralComposite;
  const fit = positionalFitMultiplier(side, player);
  return Math.round(baseValue * persona.tierMult[player.tier] * statTilt * fit);
}

function estimateToBidCap(estimate, persona, player){
  const tierAnchor = {superstar:13, star:10, starter:7, role:4, bench:2}[player.tier];
  const statAnchor = clamp(Math.round((estimate - 8) / 7), 1, 15);
  return clamp(Math.round((tierAnchor*0.4 + statAnchor*0.6) * persona.budgetDiscipline), 1, 15);
}

function neutralBidCap(player, side='bot'){
  const neutralEstimate = statBasedTrueValue(player) * positionalFitMultiplier(side, player);
  return estimateToBidCap(neutralEstimate, {budgetDiscipline:1}, player);
}

function botPricePressureDecision(player, persona, nextBid, normalWillingness, est, leverage=false){
  // The bot can make calculated pressure bids when the human is currently winning.
  // This is not a true desire cap; it is a risk-adjusted attempt to make strong
  // players cost closer to fair value. If the human stops, the bot might get stuck
  // with the player, so the pressure cap stays below the bot's neutral fair price.
  if(!G || !G.auction || G.auction.bidder !== 'user') return false;
  if(G.auction.bid <= 0 || leverage || G.slots.bot <= 0 || G.slots.user <= 0) return false;
  if(nextBid > maxBid('bot')) return false;
  // Do not pressure-bid when the human cannot actually respond. That turns a
  // nuisance raise into a near-certain accidental win.
  if(nextBid + 1 > maxBid('user')) return false;
  if(player.tier === 'bench') return false;

  const fairCap = neutralBidCap(player, 'bot');
  const pressureCap = Math.min(maxBid('bot'), Math.max(normalWillingness, Math.round(fairCap * persona.pressureRisk)));
  if(nextBid > pressureCap) return false;

  const quality = {
    superstar:1.00,
    star:0.76,
    starter:0.42,
    role:0.18,
    bench:0.00,
  }[player.tier] || 0.35;
  const highEndBoost = player.tier==='superstar' && est >= 90 ? 0.12 : 0;
  const cheapEnoughBoost = nextBid <= Math.max(3, normalWillingness + 1) ? 0.08 : 0;
  const riskProgress = nextBid / Math.max(pressureCap,1);
  const chance = clamp((persona.pricePressure || 0) * quality * (1 - riskProgress*0.55) + highEndBoost + cheapEnoughBoost, 0, 0.55);
  const decision = Math.random() < chance;
  if(decision){
    debugMsg(`${persona.name} pressure-bids ${player.name}: next $${nextBid}, normal cap $${normalWillingness}, pressure cap $${pressureCap}, chance ${(chance*100).toFixed(0)}%.`);
  }
  return decision;
}

function botLateDraftLeverage(player, est, normalWillingness, persona){
  // If the user has only one roster spot left while the bot still needs multiple
  // players, the bot should not artificially protect money beyond the $1-per-slot
  // reserve. It can win this player and still fill the rest later, mostly
  // uncontested, so good players get the full maxBid treatment.
  if(!G || G.slots.user !== 1 || G.slots.bot <= 1) return false;
  if(G.slots.bot <= G.slots.user) return false;

  const qualityFloorByPersona = {
    'Star Chaser': 4,
    'Balanced Builder': 5,
    'Value Hunter': 6,
    'Cap Manager': 6,
  };
  const qualityFloor = qualityFloorByPersona[persona.name] || 5;
  if(player.tier==='superstar' || player.tier==='star') return true;
  if(player.tier==='starter' && normalWillingness >= qualityFloor) return true;
  if(player.tier==='role' && normalWillingness >= qualityFloor + 2 && est >= 42) return true;
  return false;
}

function botPushProbability(nextBid, cap, player, persona, leverage=false){
  if(leverage) return 1;
  const progress = nextBid / Math.max(cap,1);
  let p = persona.aggression - progress*persona.caution;
  if(persona.name==='Star Chaser' && (player.tier==='superstar' || player.tier==='star')) p += 0.06;
  if(persona.name==='Cap Manager' && progress > 0.65) p -= 0.06;
  if(persona.name==='Value Hunter' && progress > 0.7) p -= 0.08;
  return clamp(p, persona.floor, 0.96);
}

/* ---------------- POSITIONS ---------------- */
// Strict roster shape: 2 Guards, 2 Forwards, 1 Center per team.
// After each win, the whole roster is re-optimized into G/G/F/F/C slots.
// Out-of-position value penalties scale by distance from natural position
// (G<->F is a short hop, G<->C is a big one).
const POS_INDEX = {G:0, F:1, C:2};

function eligiblePositions(player){
  return Array.isArray(player.positions) && player.positions.length ? player.positions : [player.pos];
}

function formatPositions(player){
  return eligiblePositions(player).join('/');
}

function posDistance(a,b){ return Math.abs(POS_INDEX[a]-POS_INDEX[b]); }

function posDistanceForPlayer(player, assignedPos){
  const positions = eligiblePositions(player);
  if(positions.includes(assignedPos)) return 0;
  return Math.min(...positions.map(pos => posDistance(pos, assignedPos)));
}

function isOutOfPosition(player, assignedPos){
  return !eligiblePositions(player).includes(assignedPos);
}

function penaltyMultiplier(dist){ return dist===0 ? 1 : (dist===1 ? 0.92 : 0.78); }

function optimizeRosterPositions(side){
  const roster = G.rosters[side];
  const slotLayout = ['G','G','F','F','C'];
  const used = Array(slotLayout.length).fill(false);
  const assignment = Array(roster.length).fill(null);
  let bestAssignment = null;
  let bestScore = -Infinity;
  let bestDistance = Infinity;

  function search(playerIdx, score, distanceTotal){
    if(playerIdx >= roster.length){
      if(score > bestScore || (score===bestScore && distanceTotal < bestDistance)){
        bestScore = score;
        bestDistance = distanceTotal;
        bestAssignment = assignment.slice();
      }
      return;
    }
    const player = roster[playerIdx];
    for(let slotIdx=0; slotIdx<slotLayout.length; slotIdx++){
      if(used[slotIdx]) continue;
      const assignedPos = slotLayout[slotIdx];
      const dist = posDistanceForPlayer(player, assignedPos);
      const adjusted = Math.round(player.trueValue * penaltyMultiplier(dist));
      used[slotIdx] = true;
      assignment[playerIdx] = assignedPos;
      search(playerIdx+1, score+adjusted, distanceTotal+dist);
      assignment[playerIdx] = null;
      used[slotIdx] = false;
    }
  }

  search(0, 0, 0);

  const remaining = {G:2, F:2, C:1};
  roster.forEach((player, idx)=>{
    const assignedPos = bestAssignment ? bestAssignment[idx] : player.pos;
    const dist = posDistanceForPlayer(player, assignedPos);
    player.assignedPos = assignedPos;
    player.posPenaltyDist = dist;
    player.adjustedValue = Math.round(player.trueValue * penaltyMultiplier(dist));
    remaining[assignedPos] -= 1;
  });
  G.posSlots[side] = remaining;
}

function assignPosition(side, player){
  // Kept as the public hook after a win, but it now optimizes the whole roster
  // instead of greedily locking earlier picks into inefficient slots.
  optimizeRosterPositions(side);
}

function posNeedStr(side){
  const s = G.posSlots[side];
  const parts = [];
  if(s.G>0) parts.push(s.G+' G');
  if(s.F>0) parts.push(s.F+' F');
  if(s.C>0) parts.push(s.C+' C');
  return parts.length ? 'needs '+parts.join(', ') : 'roster full';
}

/* ---------------- GAME INIT ---------------- */
function newGame(){
  APP_MODE = 'bot';
  disconnectFriend();
  leaveActivePresence();
  stopActivePlayerPolling();
  stopActivePresence();
  setGameLabels('Bot');
  const {profile, order} = buildPool();
  const persona = pick(BOT_PERSONAS);
  const initialFirst = Math.random()<0.5 ? 'user' : 'bot';
  G = {
    profile, persona, order,
    budgets:{user:20, bot:20},
    slots:{user:5, bot:5},
    posSlots:{user:{G:2,F:2,C:1}, bot:{G:2,F:2,C:1}},
    rosters:{user:[], bot:[]},
    initialFirst,
    roundIndex: 0,
    nominationCount: 0,
    auction: null,
    log: [],
    over:false,
    hasSkippedPlayers:false
  };
  debugMsg(`Talent pool locked in: "${profile.name}" — ${profile.desc}`);
  debugMsg(`Bot rival scouting profile: ${persona.name} — ${persona.flavor}`);
  debugMsg(`Players will be revealed one at a time — nobody knows who's coming next.`);
  render();
  startRound(0);
}

function debugMsg(text){
  console.info('[NBA Auction]', text);
}

function logMsg(who, text){
  G.log.push({who, text});
  const box = document.getElementById('logBox');
  if(box){
    const d = document.createElement('div');
    d.className = who+'-log';
    d.textContent = text;
    box.appendChild(d);
    box.scrollTop = box.scrollHeight;
  }
}

/* ---------------- BID LOGIC HELPERS ---------------- */
function maxBid(side){
  if(G.slots[side]<=0) return 0;
  const slotsAfterThis = G.slots[side]-1; // reserve $1 for every OTHER remaining slot
  return G.budgets[side] - slotsAfterThis;
}

function requiredPickMaxBid(side){
  // Required picks should never get stuck because of a broken reserve edge case.
  // In normal play this equals maxBid(side), but it guarantees at least a $1
  // escape path when a roster still has an open slot.
  if(!G || G.slots[side] <= 0) return 0;
  return Math.max(1, maxBid(side));
}

/* ---------------- SEQUENTIAL REVEAL ---------------- */
// The game (not either player) decides who comes up next. Order was shuffled
// once at pool-build time and neither side can see ahead in it. If a player is
// passed by both sides before any bid is placed, that player is moved to the back of the pool.
function firstBidderFor(nominationNumber){
  let f = (nominationNumber % 2 === 0) ? G.initialFirst : (G.initialFirst==='user'?'bot':'user');
  if(G.slots[f]<=0) f = f==='user'?'bot':'user'; // skip a side that already filled its roster
  return f;
}

function startRound(idx){
  const autoSide = visibleAutoFillSide();
  if(autoSide){
    startAutoFillRound(autoSide);
    return;
  }

  if(maybeAutoFillAfterRosterFull()) return;

  const player = G.order.find((p, i)=> i >= G.roundIndex && !p.drafted) || availableUndraftedPlayers()[0];
  if(!player){ endGame(); return; }

  const playerIndex = G.order.findIndex(p=>p.id === player.id);
  if(playerIndex >= 0) G.roundIndex = playerIndex;

  const opener = firstBidderFor(G.nominationCount);
  G.nominationCount += 1;
  const roundNumber = G.rosters.user.length + G.rosters.bot.length + 1;
  logMsg('sys', `Round ${roundNumber} of ${G.order.length}: ${player.name} revealed. ${opener==='user'?'You':'Bot'} gets first action.`);
  startAuction(player.id, opener);
}

function startAuction(playerId, opener){
  G.auction = { playerId, bid:0, bidder:null, turn:opener, openDeclines:{user:false, bot:false} };
  render();
  if(G.auction.turn==='bot') setTimeout(botAuctionMove, 700);
}

function otherSide(side){ return side==='user' ? 'bot' : 'user'; }

function recycleAuctionPlayer(){
  if(!G.auction) return;
  const idx = G.order.findIndex(p=>p.id===G.auction.playerId);
  if(idx < 0) return;
  const [player] = G.order.splice(idx,1);
  G.order.push(player);
  G.hasSkippedPlayers = true;
  logMsg('sys', `No opening bid — ${player.name} moves to the back of the pool.`);
  G.auction = null;
  render();
}

function availableUndraftedPlayers(){
  return G.order.filter(p=>!p.drafted);
}

function nextUndraftedPlayer(){
  return G.order.find((p, i)=> i >= G.roundIndex && !p.drafted) || availableUndraftedPlayers()[0] || null;
}

function visibleAutoFillSide(){
  if(!G || G.over) return null;
  if(G.slots.user <= 0 && G.slots.bot > 0) return 'bot';
  if(G.slots.bot <= 0 && G.slots.user > 0) return 'user';
  return null;
}

let BOT_AUTOFILL_TIMER = null;
let BOT_AUTOFILL_TIMER_KEY = null;

function scheduleBotAutoFillPick(){
  if(!G || !G.auction || !G.auction.autoFill || G.auction.turn !== 'bot') return;

  const key = `${G.auction.playerId}:${G.rosters.user.length}:${G.rosters.bot.length}:${G.slots.bot}`;
  if(BOT_AUTOFILL_TIMER && BOT_AUTOFILL_TIMER_KEY === key) return;

  if(BOT_AUTOFILL_TIMER) clearTimeout(BOT_AUTOFILL_TIMER);
  BOT_AUTOFILL_TIMER_KEY = key;
  BOT_AUTOFILL_TIMER = setTimeout(()=>{
    BOT_AUTOFILL_TIMER = null;
    BOT_AUTOFILL_TIMER_KEY = null;
    if(G && G.auction && G.auction.autoFill && G.auction.turn === 'bot'){
      botAutoFillMove();
    }
  }, 1500);
}

function startAutoFillRound(side){
  const player = nextUndraftedPlayer();
  if(!player){ endGame(); return; }

  const playerIndex = G.order.findIndex(p=>p.id === player.id);
  if(playerIndex >= 0) G.roundIndex = playerIndex;

  G.auction = {
    playerId: player.id,
    bid: 0,
    bidder: null,
    turn: side,
    autoFill: true,
    openDeclines: {user:false, bot:false}
  };

  const roundNumber = G.rosters.user.length + G.rosters.bot.length + 1;
  const sideLabel = side === 'user' ? 'You' : 'Bot';
  logMsg('sys', `Round ${roundNumber} of ${G.order.length}: ${player.name} revealed. ${sideLabel} must take ${player.name} because the other roster is full.`);
  render();
  if(side === 'bot') scheduleBotAutoFillPick();
}

function resolveAutoFillPick(side, price=1){
  if(!G.auction || !G.auction.autoFill || G.auction.turn !== side) return;
  price = Number(price);
  if(![1,2,5].includes(price)) return;
  if(price > requiredPickMaxBid(side)) return;

  const auction = G.auction;
  const player = G.order.find(p=>p.id === auction.playerId);

  // Clear the auction immediately so rapid double-clicks cannot resolve the
  // same required player twice or leave the final roster spot stuck.
  G.auction = null;

  if(!player || player.drafted){ render(); return; }

  player.drafted = true;
  player.soldTo = side;
  player.soldPrice = price;
  G.budgets[side] -= price;
  G.slots[side] -= 1;
  G.rosters[side].push(player);
  assignPosition(side, player);

  const idx = G.order.findIndex(p=>p.id === player.id);
  if(idx >= 0) G.roundIndex = Math.max(G.roundIndex, idx + 1);

  logMsg('sys', `${side==='user'?'YOU receive':'BOT receives'} ${player.name} for $${price} — slotted at ${player.assignedPos}${isOutOfPosition(player, player.assignedPos)?' (off eligible positions)':''}.`);

  if(maybeAutoFillAfterRosterFull()) return;

  const nextAutoSide = visibleAutoFillSide();
  if(nextAutoSide){
    startAutoFillRound(nextAutoSide);
    return;
  }

  if(!availableUndraftedPlayers().length){ endGame(); return; }
  render();
}

function userAutoFillBid(amount){
  resolveAutoFillPick('user', amount);
}

function botAutoFillMove(){
  resolveAutoFillPick('bot', 1);
}

function maybeAutoFillAfterRosterFull(){
  if(G.slots.user <= 0 && G.slots.bot <= 0){
    endGame();
    return true;
  }
  if(!availableUndraftedPlayers().length){
    endGame();
    return true;
  }
  return false;
}

function passBeforeOpeningBid(side){
  if(!G.auction || G.auction.bidder) return;
  const player = G.order.find(p=>p.id===G.auction.playerId);
  G.auction.openDeclines[side] = true;
  logMsg(side==='user'?'you':'bot', `${side==='user'?'You':'Bot'} pass before bidding on ${player.name}.`);

  const other = otherSide(side);
  if(G.slots[other] > 0 && !G.auction.openDeclines[other]){
    G.auction.turn = other;
    logMsg('sys', `${other==='user'?'You still have':'Bot still has'} the option to open bidding on ${player.name}.`);
    render();
    if(other==='bot') setTimeout(botAuctionMove, 700);
    return;
  }

  recycleAuctionPlayer();
}

/* ---------------- BIDDING ---------------- */
function userRaise(amount){
  if(!G.auction || G.auction.turn!=='user' || G.slots.user<=0) return;
  if(G.auction.autoFill) return;
  const openingBid = G.auction.bid===0;
  const newBid = G.auction.bid + amount;
  if(newBid > maxBid('user')) return;
  G.auction.bid = newBid;
  G.auction.bidder = 'user';
  G.auction.turn = 'bot';
  logMsg('you', openingBid ? `You open at $${newBid}.` : `You raise to $${newBid}.`);
  render();
  setTimeout(botAuctionMove, 700);
}

function userPass(){
  if(!G.auction || G.auction.turn!=='user') return;
  if(G.auction.autoFill) return;
  if(G.slots.user<=0){ maybeAutoFillAfterRosterFull(); return; }
  if(!G.auction.bidder){
    passBeforeOpeningBid('user');
    return;
  }
  logMsg('you', `You pass at $${G.auction.bid}.`);
  resolveAuction(G.auction.bidder);
}

function botOpeningProbability(player, cap, est, persona){
  const baseByTier = {superstar:0.98, star:0.92, starter:0.78, role:0.58, bench:0.40};
  let p = baseByTier[player.tier] || 0.65;
  if(persona.name==='Star Chaser') p += (player.tier==='superstar' || player.tier==='star') ? 0.04 : -0.08;
  if(persona.name==='Value Hunter') p -= player.tier==='bench' ? 0.08 : 0.03;
  if(persona.name==='Cap Manager') p -= 0.10;
  if(persona.name==='Balanced Builder') p += 0.00;
  if(cap >= 8) p += 0.04;
  if(cap <= 2) p -= 0.08;
  // When the draft is getting tight, the bot becomes less willing to punt every option.
  const botOpenSlots = G.slots.bot;
  const undraftedLeft = G.order.length - G.roundIndex;
  if(botOpenSlots >= undraftedLeft - 1) p += 0.18;
  return clamp(p, 0.18, 0.99);
}

function botAuctionMove(){
  if(!G.auction || G.auction.turn!=='bot') return;
  if(G.auction.autoFill){ botAutoFillMove(); return; }
  if(G.slots.bot<=0){ maybeAutoFillAfterRosterFull(); return; }
  const player = G.order.find(p=>p.id===G.auction.playerId);
  const est = botEstimate(player, G.persona, 'bot');
  const normalWillingness = estimateToBidCap(est, G.persona, player);
  const leverage = botLateDraftLeverage(player, est, normalWillingness, G.persona);
  const finalSpotMustFill = G.slots.bot === 1;
  // If the bot only has one roster spot left, saving money no longer matters.
  // It should not voluntarily pass/send a player back; it pushes until its real budget cap.
  const willingness = (finalSpotMustFill || leverage) ? maxBid('bot') : normalWillingness;
  const cap = Math.min(willingness, maxBid('bot'));
  const nextBid = G.auction.bid + 1;
  const openingBid = G.auction.bid===0;

  if(nextBid > cap){
    if(!openingBid && botPricePressureDecision(player, G.persona, nextBid, normalWillingness, est, leverage)){
      G.auction.bid = nextBid;
      G.auction.bidder = 'bot';
      G.auction.turn = 'user';
      logMsg('bot', `Bot raises to $${nextBid}.`);
      render();
      return;
    }
    // This is the only final-slot exception: the bot cannot bid money it does not have.
    if(openingBid){
      passBeforeOpeningBid('bot');
    } else {
      logMsg('bot', `Bot passes on ${player.name} at $${G.auction.bid}.`);
      resolveAuction(G.auction.bidder);
    }
    return;
  }

  if(openingBid){
    const wantsToOpen = finalSpotMustFill || leverage || Math.random() < botOpeningProbability(player, cap, est, G.persona);
    if(!wantsToOpen){
      passBeforeOpeningBid('bot');
      return;
    }
  } else {
    // Occasionally the bot backs off before its cap, with the chance controlled by persona.
    // Final-slot and leverage situations override that hesitation.
    const pushThrough = finalSpotMustFill || Math.random() < botPushProbability(nextBid, cap, player, G.persona, leverage);
    if(!pushThrough){
      if(botPricePressureDecision(player, G.persona, nextBid, normalWillingness, est, leverage)){
        G.auction.bid = nextBid;
        G.auction.bidder = 'bot';
        G.auction.turn = 'user';
        logMsg('bot', `Bot raises to $${nextBid}.`);
        render();
        return;
      }
      logMsg('bot', `Bot passes on ${player.name} at $${G.auction.bid}.`);
      resolveAuction(G.auction.bidder);
      return;
    }
  }

  G.auction.bid = nextBid;
  G.auction.bidder = 'bot';
  G.auction.turn = 'user';
  logMsg('bot', openingBid ? `Bot opens at $${nextBid}.` : `Bot raises to $${nextBid}.`);
  render();
}

function resolveAuction(winnerSide){
  if(!G.auction || !winnerSide) return;
  const player = G.order.find(p=>p.id===G.auction.playerId);
  const price = G.auction.bid;
  if(price <= 0){ recycleAuctionPlayer(); return; }
  player.drafted = true;
  player.soldTo = winnerSide;
  player.soldPrice = price;
  G.budgets[winnerSide] -= price;
  G.slots[winnerSide] -= 1;
  G.rosters[winnerSide].push(player);
  assignPosition(winnerSide, player);
  logMsg('sys', `${winnerSide==='user'?'YOU win':'BOT wins'} ${player.name} for $${price} — slotted at ${player.assignedPos}${isOutOfPosition(player, player.assignedPos)?' (off listed position)':''}.`);
  G.auction = null;
  G.roundIndex += 1;

  if(maybeAutoFillAfterRosterFull()) return;
  if(G.roundIndex >= G.order.length){
    endGame();
    return;
  }
  render(); // shows the "Reveal Next Player" prompt
}

/* ---------------- RESULTS ---------------- */
/* ---------------- RESULTS ---------------- */
function topNSum(arr, n){ return arr.slice().sort((a,b)=>b-a).slice(0,n).reduce((a,b)=>a+b,0); }
function topNAvg(arr, n){ const vals = arr.slice().sort((a,b)=>b-a).slice(0,n); return vals.length ? vals.reduce((a,b)=>a+b,0)/vals.length : 0; }

function teamRawAdj(side){
  const roster = G.rosters[side];
  return {
    raw: roster.reduce((s,p)=>s+p.trueValue,0),
    adj: roster.reduce((s,p)=>s+p.adjustedValue,0)
  };
}

function teamAxes(side, maxes){
  const roster = G.rosters[side];
  const sumPpg = roster.reduce((s,p)=>s+p.ppg,0);
  const sumRpg = roster.reduce((s,p)=>s+p.rpg,0);
  const sumApg = roster.reduce((s,p)=>s+p.apg,0);
  const sumDef = roster.reduce((s,p)=>s+p.def,0);
  const teamTop3Avg = topNAvg(roster.map(p=>p.trueValue), 3);
  const poolScaledStarPower = maxes.starPowerPoolAvg ? teamTop3Avg/maxes.starPowerPoolAvg*100 : 0;
  const fixedScaledStarPower = teamTop3Avg/STAR_POWER_FIXED_MAX*100;
  const starPower = clamp(Math.round((poolScaledStarPower + fixedScaledStarPower)/2),0,100);
  return [
    clamp(Math.round(sumPpg/maxes.ppg*100),0,100),
    clamp(Math.round(sumRpg/maxes.rpg*100),0,100),
    clamp(Math.round(sumApg/maxes.apg*100),0,100),
    starPower,
    clamp(Math.round(sumDef/maxes.def*100),0,100),
  ];
}

function radarPoints(vals, cx, cy, maxR){
  return vals.map((v,i)=>{
    const angle = -Math.PI/2 + i*(2*Math.PI/5);
    const r = (v/100)*maxR;
    return `${(cx+r*Math.cos(angle)).toFixed(1)},${(cy+r*Math.sin(angle)).toFixed(1)}`;
  }).join(' ');
}

function buildRadarSVG(labels, userVals, botVals){
  const cx=160, cy=145, maxR=100;
  const grid = [20,40,60,80,100].map(lvl=>{
    const pts = labels.map((_,i)=>{
      const angle=-Math.PI/2+i*(2*Math.PI/5);
      const r=(lvl/100)*maxR;
      return `${(cx+r*Math.cos(angle)).toFixed(1)},${(cy+r*Math.sin(angle)).toFixed(1)}`;
    }).join(' ');
    return `<polygon points="${pts}" fill="none" stroke="#33353F" stroke-width="1"/>`;
  }).join('');
  const axes = labels.map((lbl,i)=>{
    const angle=-Math.PI/2+i*(2*Math.PI/5);
    const x2=cx+maxR*Math.cos(angle), y2=cy+maxR*Math.sin(angle);
    const lx=cx+(maxR+28)*Math.cos(angle), ly=cy+(maxR+28)*Math.sin(angle);
    return `<line x1="${cx}" y1="${cy}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#33353F" stroke-width="1"/>
    <text x="${lx.toFixed(1)}" y="${ly.toFixed(1)}" fill="#9A9CA8" font-size="11" font-family="Oswald, sans-serif" text-anchor="middle" dominant-baseline="middle">${lbl}</text>`;
  }).join('');
  const userPts = radarPoints(userVals,cx,cy,maxR);
  const botPts = radarPoints(botVals,cx,cy,maxR);
  return `<svg viewBox="0 0 320 300" width="100%" style="max-width:380px; display:block; margin:0 auto;">
    ${grid}${axes}
    <polygon points="${userPts}" fill="#C9862B" fill-opacity="0.35" stroke="none"/>
    <polygon points="${botPts}" fill="#5B6B8C" fill-opacity="0.35" stroke="none"/>
    <polygon points="${botPts}" fill="none" stroke="#7C93C9" stroke-width="2"/>
    <polygon points="${userPts}" fill="none" stroke="#C9862B" stroke-width="2"/>
  </svg>`;
}

function resultTagHtml(tag){
  if(tag === 'steal') return '<span class="steal">steal</span>';
  if(tag === 'overpay') return '<span class="overpay">overpay</span>';
  return '';
}

function resultPlayerNameHtml(p, side='left'){
  if(!p) return '<span class="paired-empty">—</span>';

  const positions = p.positions || (p.naturalPos ? [p.naturalPos] : [p.pos]);
  const isOop = !positions.includes(p.pos);
  const oopNote = isOop
    ? `<span class="oop-note">(${positions.join('/')}${p.bigShift ? ', big shift' : ''})</span>`
    : '';

  // Left side is right-aligned, so put the note before the name. That keeps
  // the actual player names lined up against the slot column.
  if(side === 'left'){
    return oopNote ? `${oopNote} ${p.name}` : p.name;
  }

  // Right side is left-aligned, so the note can stay after the name.
  return oopNote ? `${p.name} ${oopNote}` : p.name;
}

function resultPaidHtml(p, side='left'){
  if(!p) return '';

  const price = `<span class="paired-price">$${p.price}</span>`;
  const tag = resultTagHtml(p.tag);
  const tagSlot = `<span class="paired-tag-slot">${tag}</span>`;
  const priceSlot = `<span class="paired-price-slot">${price}</span>`;

  // Use fixed internal slots so steal/overpay labels and dollar amounts line up
  // instead of shifting around based on $1/$10 width.
  if(side === 'right'){
    return `<span class="paid-align paid-align-right">${tagSlot}${priceSlot}</span>`;
  }
  return `<span class="paid-align paid-align-left">${priceSlot}${tagSlot}</span>`;
}

function pairedRosterTable(leftTitle, rightTitle, leftRows, rightRows){
  const maxRows = Math.max(ROSTER_LAYOUT.length, leftRows.length, rightRows.length);
  let body = '';

  for(let i = 0; i < maxRows; i++){
    const left = leftRows[i] || null;
    const right = rightRows[i] || null;
    const slot = ROSTER_LAYOUT[i] || left?.pos || right?.pos || '';

    body += `
      <tr>
        <td class="paired-paid paired-left-paid">${resultPaidHtml(left, 'left')}</td>
        <td class="paired-player paired-left-player">${resultPlayerNameHtml(left, 'left')}</td>
        <td class="paired-slot">${slot}</td>
        <td class="paired-player paired-right-player">${resultPlayerNameHtml(right, 'right')}</td>
        <td class="paired-paid paired-right-paid">${resultPaidHtml(right, 'right')}</td>
      </tr>
    `;
  }

  return `
    <div class="paired-rosters">
      <table class="paired-roster-table">
        <colgroup>
          <col class="paired-paid-col">
          <col class="paired-player-col">
          <col class="paired-slot-col">
          <col class="paired-player-col">
          <col class="paired-paid-col">
        </colgroup>
        <thead>
          <tr class="paired-title-row">
            <th colspan="2">${leftTitle}</th>
            <th></th>
            <th colspan="2">${rightTitle}</th>
          </tr>
          <tr>
            <th class="paired-left-paid">Paid</th>
            <th class="paired-left-player">Player</th>
            <th class="paired-slot">Slot</th>
            <th class="paired-right-player">Player</th>
            <th class="paired-right-paid">Paid</th>
          </tr>
        </thead>
        <tbody>
          ${body}
        </tbody>
      </table>
    </div>
  `;
}

function endGame(){
  G.over = true;
  renderResults();
}

function renderResults(){
  document.getElementById('gameScreen').classList.add('hidden');
  const rs = document.getElementById('resultsScreen');
  rs.classList.remove('hidden');

  const userTA = teamRawAdj('user');
  const botTA = teamRawAdj('bot');
  const top5Raw = topNSum(G.order.map(p=>p.trueValue), 5);
  const userScore = clamp(Math.round(userTA.adj/top5Raw*100),0,100);
  const botScore = clamp(Math.round(botTA.adj/top5Raw*100),0,100);
  const winner = userScore===botScore ? 'tie' : (userScore>botScore ? 'user' : 'bot');

  const maxes = {
    ppg: topNSum(G.order.map(p=>p.ppg),5),
    rpg: topNSum(G.order.map(p=>p.rpg),5),
    apg: topNSum(G.order.map(p=>p.apg),5),
    def: topNSum(G.order.map(p=>p.def),5),
    starPowerPoolAvg: topNAvg(G.order.map(p=>p.trueValue),3),
  };
  const labels = ['Scoring','Rebounding','Playmaking','Star Power','Defense'];
  const userAxes = teamAxes('user', maxes);
  const botAxes = teamAxes('bot', maxes);

  const winnerLabel = winner==='tie' ? "It's a tie!" : (winner==='user' ? 'You win the draft! 🏆' : 'Bot wins the draft.');
  const winnerClass = winner==='bot' ? 'bot' : 'you';

  // Steal/overpay tags use hidden true value internally but never print the raw number.
  const totalPoolValue = G.order.reduce((s,p)=>s+p.trueValue,0);
  const priceScale = totalPoolValue/40;
  const rows = (side)=> rosterByPosition(side).map(p=>{
    const expectedValue = p.soldPrice * priceScale;
    const tag = expectedValue < p.trueValue * 0.75 ? 'steal'
              : expectedValue > p.trueValue * 1.35 ? 'overpay'
              : '';

    return {
      name: p.name,
      pos: p.assignedPos,
      naturalPos: p.pos,
      positions: eligiblePositions(p),
      bigShift: p.posPenaltyDist === 2,
      price: p.soldPrice,
      tag
    };
  });

  LAST_SHARE_RESULT = {
    winnerLabel,
    winnerClass,
    myRatingLabel:'Your Team Rating',
    oppRatingLabel:'Bot Team Rating',
    myScore:userScore,
    oppScore:botScore,
    labels,
    myAxes:userAxes,
    oppAxes:botAxes,
    leftTitle:'Your Roster',
    rightTitle:'Bot Roster',
    leftRows:rows('user'),
    rightRows:rows('bot'),
    legendOpponent:'Bot'
  };

  rs.innerHTML = `
    <div class="results">
      <div class="winner-banner ${winnerClass}">${winnerLabel}</div>
      <div class="scoreboard" style="margin-top:6px; margin-bottom:6px;">
        <div class="score-card you">
          <div class="label">Your Team Rating</div>
          <div class="value mono">${userScore}<span style="font-size:14px; color:var(--chalk-dim);">/100</span></div>
        </div>
        <div class="score-card bot">
          <div class="label">Bot Team Rating</div>
          <div class="value mono">${botScore}<span style="font-size:14px; color:var(--chalk-dim);">/100</span></div>
        </div>
      </div>
      <h2>Team Shape</h2>
      ${buildRadarSVG(labels, userAxes, botAxes)}
      <div style="text-align:center; font-size:12px; color:var(--chalk-dim); margin-top:4px;">
        <span style="color:var(--hardwood);">■</span> You &nbsp;&nbsp; <span style="color:#7C93C9;">■</span> Bot
      </div>
      ${pairedRosterTable('Your Roster', 'Bot Roster', rows('user'), rows('bot'))}
      <div class="results-actions">
        <button class="btn restart-btn" style="background:var(--hardwood); color:#1a1206; border:none;" onclick="restart()">Play Again (New Pool)</button>
        <button class="btn share-results-btn" onclick="openShareModal()">Share Results</button>
      </div>
    </div>`;
}


function continueButtonLabel(){
  if(!G) return 'Continue';
  if(G.slots.user <= 0 && G.slots.bot <= 0) return 'Finish Draft';
  if(!availableUndraftedPlayers().length) return 'Finish Draft';
  if(G.hasSkippedPlayers) return 'Continue to Remaining Players';
  const nextRound = G.rosters.user.length + G.rosters.bot.length + 1;
  return nextRound > G.order.length ? 'Finish Draft' : `Continue to Round ${nextRound}`;
}

function friendContinueButtonLabel(state){
  if(!state) return 'Continue';
  const totalSlotsLeft = (state.me?.slots || 0) + (state.opponent?.slots || 0);
  if(totalSlotsLeft <= 0 || state.draftedCount >= state.orderLength) return 'Finish Draft';
  if(state.hasSkippedPlayers) return 'Continue to Remaining Players';
  const nextRound = state.draftedCount + 1;
  return nextRound > state.orderLength ? 'Finish Draft' : `Continue to Round ${nextRound}`;
}

/* ---------------- RENDER ---------------- */
function render(){
  document.getElementById('setupScreen').classList.add('hidden');
  document.getElementById('gameScreen').classList.remove('hidden');
  document.getElementById('resultsScreen').classList.add('hidden');
  const bottomNavBtn = document.getElementById('botExitBtn');
  if(bottomNavBtn){
    bottomNavBtn.textContent = '← Exit';
    bottomNavBtn.classList.toggle('hidden', APP_MODE !== 'bot');
  }

  document.getElementById('youBudget').textContent = '$'+G.budgets.user;
  document.getElementById('botBudget').textContent = '$'+G.budgets.bot;
  document.getElementById('youSlots').textContent = G.slots.user+' slots open';
  document.getElementById('botSlots').textContent = G.slots.bot+' slots open';
  const profileBanner = document.getElementById('profileBanner');
  profileBanner.classList.add('hidden');
  profileBanner.innerHTML = '';

  // Auction area
  const aArea = document.getElementById('auctionArea');
  if(G.auction && G.auction.autoFill){
    const player = G.order.find(p=>p.id===G.auction.playerId);
    const userTurn = G.auction.turn==='user';
    const sideLabel = userTurn ? 'your required pick' : 'opponent selecting required player';
    const cap = userTurn ? requiredPickMaxBid('user') : requiredPickMaxBid('bot');
    if(!userTurn) scheduleBotAutoFillPick();
    aArea.innerHTML = `
      <div class="auction-panel">
        <div class="auction-top">
          <div>
            <div class="auction-player">${player.name}</div>
            <div class="auction-meta">${formatPositions(player)} · ${player.ppg} PPG · ${player.rpg} RPG · ${player.apg} APG · DEF ${player.def}/10</div>
          </div>
          <div class="bid-display">
            <div class="lbl">Required Pick</div>
            <div class="amt" style="font-size:24px;">$1 min</div>
            <div class="who">${sideLabel}</div>
          </div>
        </div>
        ${userTurn ? `
        <div class="auction-controls">
          <button class="btn" onclick="userAutoFillBid(1)" ${1>cap?'disabled':''}>Bid $1</button>
          <button class="btn" onclick="userAutoFillBid(2)" ${2>cap?'disabled':''}>Bid $2</button>
          <button class="btn" onclick="userAutoFillBid(5)" ${5>cap?'disabled':''}>Bid $5</button>
          <button class="btn pass" disabled title="Required pick because the other roster is full">Pass</button>
        </div>` : `<div class="waiting">Opponent selecting required player</div>`}
      </div>`;
  } else if(G.auction){
    const player = G.order.find(p=>p.id===G.auction.playerId);
    const userTurn = G.auction.turn==='user';
    const noBidYet = !G.auction.bidder;
    const nb1 = G.auction.bid+1, nb2 = G.auction.bid+2, nb5 = G.auction.bid+5;
    const cap = maxBid('user');
    const bidLabel = noBidYet ? 'No bid yet' : '$'+G.auction.bid;
    const openDeclines = G.auction.openDeclines || {user:false, bot:false};
    const otherDeclined = noBidYet && openDeclines[userTurn ? 'bot' : 'user'];
    const holderLabel = noBidYet
      ? (otherDeclined
        ? `${userTurn?'bot':'you'} passed; ${userTurn?'your':'bot'} chance to open`
        : `${G.auction.turn==='user'?'your':'bot'} first action`)
      : `held by ${G.auction.bidder==='user'?'you':'bot'}`;
    const actionVerb = noBidYet ? 'Open at' : 'Raise to';
    const passLabel = noBidYet ? (otherDeclined ? 'Pass / Send Back' : 'Pass') : 'Pass';
    aArea.innerHTML = `
      <div class="auction-panel">
        <div class="auction-top">
          <div>
            <div class="auction-player">${player.name}</div>
            <div class="auction-meta">${formatPositions(player)} · ${player.ppg} PPG · ${player.rpg} RPG · ${player.apg} APG · DEF ${player.def}/10</div>
          </div>
          <div class="bid-display">
            <div class="lbl">Current Bid</div>
            <div class="amt" style="font-size:${noBidYet?'24px':'34px'};">${bidLabel}</div>
            <div class="who">${holderLabel}</div>
          </div>
        </div>
        ${userTurn ? `
        <div class="auction-controls">
          <button class="btn" onclick="userRaise(1)" ${nb1>cap?'disabled':''}>${actionVerb} $${nb1}</button>
          <button class="btn" onclick="userRaise(2)" ${nb2>cap?'disabled':''}>${actionVerb} $${nb2}</button>
          <button class="btn" onclick="userRaise(5)" ${nb5>cap?'disabled':''}>${actionVerb} $${nb5}</button>
          <button class="btn pass" onclick="userPass()">${passLabel}</button>
        </div>` : `<div class="waiting">Waiting on bot...</div>`}
      </div>`;
  } else if(!G.over){
    const buttonLabel = continueButtonLabel();
    aArea.innerHTML = `
      <div class="auction-panel" style="text-align:center;">
        <button class="btn" style="background:var(--hardwood); color:#1a1206; border:none;" onclick="startRound(${G.roundIndex})">${buttonLabel}</button>
      </div>`;
  }

  // Rosters
  document.getElementById('youNeed').textContent = '('+posNeedStr('user')+')';
  document.getElementById('botNeed').textContent = '('+posNeedStr('bot')+')';
  document.getElementById('youRoster').innerHTML = rosterHtml('user');
  document.getElementById('botRoster').innerHTML = rosterHtml('bot');
}

const ROSTER_LAYOUT = ['G','G','F','F','C'];

function rosterByPosition(side){
  const byPos = {G:[], F:[], C:[]};
  G.rosters[side].forEach(p=> byPos[p.assignedPos].push(p));
  const counts = {G:0, F:0, C:0};
  return ROSTER_LAYOUT.map(posLabel => byPos[posLabel][counts[posLabel]++] || null).filter(Boolean);
}

function rosterHtml(side){
  const byPos = {G:[], F:[], C:[]};
  G.rosters[side].forEach(p=> byPos[p.assignedPos].push(p));
  const counts = {G:0, F:0, C:0};
  let html = '';
  ROSTER_LAYOUT.forEach(posLabel=>{
    const p = byPos[posLabel][counts[posLabel]++];
    if(p){
      const oop = isOutOfPosition(p, p.assignedPos);
      const oopTag = oop
        ? `<span style="color:${p.posPenaltyDist===2?'var(--danger)':'var(--gold)'}; font-size:10px;" title="Eligible positions: ${formatPositions(p)}">·OOP</span>`
        : '';
      html += `<div class="roster-slot"><span><span class="mono" style="color:var(--chalk-dim);">[${posLabel}]</span> ${p.name} ${oopTag}</span><span class="price">$${p.soldPrice}</span></div>`;
    } else {
      html += `<div class="roster-slot empty"><span class="mono" style="color:#4A4C57;">[${posLabel}]</span> Open</div>`;
    }
  });
  return html;
}


/* ---------------- LANDING / MULTIPLAYER CLIENT ---------------- */
let APP_MODE = 'home';
let FRIEND_WS = null;
let FRIEND_STATE = null;
let ACTIVE_COUNT_TIMER = null;
let ACTIVE_PRESENCE_TIMER = null;
let FRIEND_MATCH_TYPE = 'friend';
const ACTIVE_SESSION_ID = (()=>{
  const key = 'STARTING_FIVE_ACTIVE_SESSION_ID';
  let id = sessionStorage.getItem(key);
  if(!id){
    if(window.crypto && crypto.randomUUID){
      id = crypto.randomUUID();
    } else {
      id = Math.random().toString(36).slice(2) + Date.now().toString(36);
    }
    sessionStorage.setItem(key, id);
  }
  return id;
})();

// When the frontend is served by the same Cloudflare Worker as the multiplayer API,
// leave this blank. If you keep the static site on Pages and deploy the Worker
// separately, set this in the console/localStorage or hardcode your Worker URL here.
const MULTIPLAYER_API_BASE = window.MULTIPLAYER_API_BASE || localStorage.getItem('NBA_AUCTION_API_BASE') || '';

function cleanApiBase(){ return (MULTIPLAYER_API_BASE || '').replace(/\/$/, ''); }
function apiUrl(path){ return cleanApiBase() + path; }
function websocketUrl(path){
  const base = cleanApiBase() || window.location.origin;
  return base.replace(/^http/i,'ws') + path;
}

function setFriendStatus(text, isError=false){
  const el = document.getElementById('friendStatus');
  if(el){ el.textContent = text || ''; el.style.color = isError ? 'var(--danger)' : 'var(--chalk-dim)'; }
}

function possessiveName(name){
  if(!name) return '';
  return name.endsWith('s') ? `${name}'` : `${name}'s`;
}

function opponentBudgetLabel(opponentLabel){
  if(!opponentLabel || opponentLabel === 'Bot' || opponentLabel === 'Opponent') return `${opponentLabel || 'Opponent'} Budget`;
  return `${possessiveName(opponentLabel)} Budget`;
}

function setGameLabels(opponentLabel){
  const ybl = document.getElementById('youBudgetLabel');
  const bbl = document.getElementById('botBudgetLabel');
  const yrt = document.getElementById('youRosterTitle');
  const brt = document.getElementById('botRosterTitle');
  if(ybl) ybl.textContent = 'Your Budget';
  if(bbl) bbl.textContent = opponentBudgetLabel(opponentLabel);
  if(yrt) yrt.textContent = 'You';
  if(brt) brt.textContent = opponentLabel || 'Opponent';
}

function cleanPlayerName(name){
  return (name || '').trim().replace(/\s+/g, ' ').slice(0,18);
}

function getPlayerName(){
  const input = document.getElementById('playerNameInput');
  const name = cleanPlayerName(input ? input.value : localStorage.getItem('STARTING_FIVE_PLAYER_NAME'));
  if(name) localStorage.setItem('STARTING_FIVE_PLAYER_NAME', name);
  return name;
}

function populatePlayerName(){
  const input = document.getElementById('playerNameInput');
  if(input && !input.value){
    input.value = localStorage.getItem('STARTING_FIVE_PLAYER_NAME') || '';
  }
}

function opponentDisplayName(state){
  const name = cleanPlayerName(state && state.opponent && state.opponent.name);
  return name || 'Opponent';
}

function showLanding(){
  APP_MODE = 'home';
  disconnectFriend();
  G = null;
  document.getElementById('logBox').innerHTML = '';
  document.getElementById('botExitBtn').classList.add('hidden');
  document.getElementById('setupScreen').classList.remove('hidden');
  document.getElementById('landingPanel').classList.remove('hidden');
  document.getElementById('friendPanel').classList.add('hidden');
  document.getElementById('gameScreen').classList.add('hidden');
  document.getElementById('resultsScreen').classList.add('hidden');
  document.getElementById('roomCodeDisplay').classList.add('hidden');
  stopActivePlayerPolling();
  leaveActivePresence();
  stopActivePresence();
  setFriendStatus('');
}

function showFriendPanel(){
  APP_MODE = 'friend-setup';
  document.getElementById('landingPanel').classList.add('hidden');
  document.getElementById('friendPanel').classList.remove('hidden');
  populatePlayerName();
  const findBtn = document.getElementById('findOpponentBtn');
  if(findBtn) findBtn.disabled = false;
  setFriendStatus('');
  startActivePlayerPolling();
}

function stopActivePlayerPolling(){
  if(ACTIVE_COUNT_TIMER){
    clearInterval(ACTIVE_COUNT_TIMER);
    ACTIVE_COUNT_TIMER = null;
  }
}

function activeStatusPath(mode='online-setup'){
  return `/api/match/status?session=${encodeURIComponent(ACTIVE_SESSION_ID)}&mode=${encodeURIComponent(mode)}`;
}

function setActivePlayerCount(count){
  const el = document.getElementById('activePlayerCount');
  if(!el) return;
  if(typeof count === 'number') el.textContent = `Active players: ${count}`;
  else el.textContent = 'Active players: —';
}

async function touchActivePresence(mode='online-setup', showCount=false){
  try{
    const res = await fetch(apiUrl(activeStatusPath(mode)));
    if(!res.ok) throw new Error('status failed');
    const data = await res.json();
    if(showCount) setActivePlayerCount(Number(data.activePlayers || 0));
    return data;
  }catch(err){
    if(showCount) setActivePlayerCount(null);
    return null;
  }
}

async function leaveActivePresence(){
  try{
    await fetch(apiUrl(`/api/match/leave?session=${encodeURIComponent(ACTIVE_SESSION_ID)}`), {method:'POST', keepalive:true});
  }catch(err){}
}

function stopActivePresence(){
  if(ACTIVE_PRESENCE_TIMER){
    clearInterval(ACTIVE_PRESENCE_TIMER);
    ACTIVE_PRESENCE_TIMER = null;
  }
}

function startActivePresence(mode='online-game'){
  stopActivePresence();
  touchActivePresence(mode, false);
  ACTIVE_PRESENCE_TIMER = setInterval(()=>touchActivePresence(mode, false), 10000);
}

async function updateActivePlayerCount(){
  const el = document.getElementById('activePlayerCount');
  if(!el || APP_MODE !== 'friend-setup') return;
  await touchActivePresence('online-setup', true);
}

function startActivePlayerPolling(){
  stopActivePlayerPolling();
  stopActivePresence();
  updateActivePlayerCount();
  ACTIVE_COUNT_TIMER = setInterval(updateActivePlayerCount, 5000);
}

window.addEventListener('beforeunload', ()=>{
  try{
    navigator.sendBeacon(apiUrl(`/api/match/leave?session=${encodeURIComponent(ACTIVE_SESSION_ID)}`));
  }catch(e){}
});

function disconnectFriend(){
  if(FRIEND_WS){
    try{ FRIEND_WS.close(); }catch(e){}
  }
  FRIEND_WS = null;
  FRIEND_STATE = null;
}

async function createFriendRoom(){
  setFriendStatus('Creating room...');
  try{
    const res = await fetch(apiUrl('/api/room/create'), {method:'POST'});
    if(!res.ok) throw new Error(await res.text());
    const data = await res.json();
    const codeEl = document.getElementById('roomCodeDisplay');
    codeEl.textContent = data.code;
    codeEl.classList.remove('hidden');
    connectFriendRoom(data.code, 'host');
  }catch(err){
    setFriendStatus(`Could not create room. ${err.message || err}`, true);
  }
}

async function checkRoomBeforeJoin(code){
  try{
    const res = await fetch(apiUrl(`/api/room/${encodeURIComponent(code)}/status`));
    if(res.status === 404){
      return {ok:false, message:'Invalid room code. Check the code and try again.'};
    }
    if(!res.ok){
      return {ok:false, message:'Could not check that room. Try again.'};
    }
    const data = await res.json();
    if(!data.exists){
      return {ok:false, message:'Invalid room code. Check the code and try again.'};
    }
    if(data.full){
      return {ok:false, message:'That room is already full. Ask your friend to create a new game.'};
    }
    return {ok:true};
  }catch(err){
    return {ok:false, message:'Could not check that room. Make sure the multiplayer server is live.'};
  }
}

async function joinFriendRoom(){
  const input = document.getElementById('joinCodeInput');
  const code = (input.value || '').trim().toUpperCase().replace(/[^A-Z0-9]/g,'');
  if(!code){ setFriendStatus('Enter a room code first.', true); return; }
  setFriendStatus('Checking room code...');
  document.getElementById('roomCodeDisplay').textContent = code;
  document.getElementById('roomCodeDisplay').classList.add('hidden');

  const check = await checkRoomBeforeJoin(code);
  if(!check.ok){
    setFriendStatus(check.message, true);
    return;
  }

  document.getElementById('roomCodeDisplay').classList.remove('hidden');
  connectFriendRoom(code, 'guest');
}

async function findOnlineOpponent(){
  const btn = document.getElementById('findOpponentBtn');
  if(btn) btn.disabled = true;
  setFriendStatus('Finding an opponent…');
  try{
    const res = await fetch(apiUrl(`/api/match/find?session=${encodeURIComponent(ACTIVE_SESSION_ID)}&mode=online-match`), {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({name:getPlayerName()})
    });
    if(!res.ok) throw new Error(await res.text());
    const data = await res.json();
    if(typeof data.activePlayers === 'number') setActivePlayerCount(data.activePlayers);
    const codeEl = document.getElementById('roomCodeDisplay');
    if(codeEl){
      codeEl.textContent = data.code || '';
      codeEl.classList.add('hidden');
    }
    if(!data.code || !data.side) throw new Error('No match returned');
    setFriendStatus(data.side === 'host' ? 'Finding an opponent…' : 'Opponent found. Joining game…');
    connectFriendRoom(data.code, data.side, 'online');
  }catch(err){
    setFriendStatus(`Could not find opponent. ${err.message || err}`, true);
    if(btn) btn.disabled = false;
    updateActivePlayerCount();
  }
}

function connectFriendRoom(code, side, matchType='friend'){
  const name = getPlayerName();
  FRIEND_MATCH_TYPE = matchType;
  disconnectFriend();
  stopActivePlayerPolling();
  startActivePresence(matchType === 'online' ? 'online-game' : 'friend-game');
  APP_MODE = 'friend';
  setGameLabels('Opponent');
  setFriendStatus(side==='host' ? (matchType === 'online' ? 'Finding an opponent…' : `Room ${code} created. Waiting for friend...`) : `Joining room ${code}...`);
  const nameParam = name ? `&name=${encodeURIComponent(name)}` : '';
  const ws = new WebSocket(websocketUrl(`/api/room/${encodeURIComponent(code)}/ws?side=${encodeURIComponent(side)}${nameParam}`));
  FRIEND_WS = ws;
  ws.addEventListener('open', ()=> setFriendStatus(side==='host' ? (matchType === 'online' ? 'Finding an opponent…' : `Room ${code}. Send this code to your friend.`) : `Connected to room ${code}.`));
  ws.addEventListener('message', (event)=>{
    let msg;
    try{ msg = JSON.parse(event.data); }catch(e){ return; }
    if(msg.type === 'error'){
      setFriendStatus(msg.message || 'Room error.', true);
      return;
    }
    if(msg.type === 'state'){
      FRIEND_STATE = msg;
      renderFriendState();
    }
  });
  ws.addEventListener('close', ()=>{
    if(APP_MODE === 'friend') setFriendStatus('Disconnected from room. Refresh or rejoin with the same code.', true);
  });
  ws.addEventListener('error', ()=>{
    const msg = side === 'guest'
      ? 'Could not join this room. The code may be invalid, full, or expired.'
      : 'Could not connect to the room. Check your Worker deployment and try again.';
    setFriendStatus(msg, true);
  });
}

function sendFriendAction(type, payload={}){
  if(!FRIEND_WS || FRIEND_WS.readyState !== WebSocket.OPEN){
    setFriendStatus('Not connected to the room.', true);
    return;
  }
  FRIEND_WS.send(JSON.stringify({type, ...payload}));
}

function friendBid(amount){ sendFriendAction('bid', {amount}); }
function friendPass(){ sendFriendAction('pass'); }
function friendReveal(){ sendFriendAction('reveal'); }
function friendRematch(){ sendFriendAction('rematch'); }

function applyFriendStateToG(state){
  const me = state.me;
  const opp = state.opponent;
  G = {
    budgets:{user:me.budget, bot:opp.budget},
    slots:{user:me.slots, bot:opp.slots},
    posSlots:{user:me.posSlots, bot:opp.posSlots},
    rosters:{user:me.roster || [], bot:opp.roster || []},
    order:[],
    auction:null,
    log:state.log || [],
    over:!!state.over,
  };
}

function renderFriendLog(state){
  const box = document.getElementById('logBox');
  if(!box) return;
  const mySide = state.side;
  const oppSide = mySide === 'host' ? 'guest' : 'host';
  const oppName = opponentDisplayName(state);
  box.innerHTML = '';
  (state.log || []).forEach(entry=>{
    const d = document.createElement('div');
    d.className = entry.who === mySide ? 'you-log' : (entry.who === oppSide ? 'bot-log' : 'sys-log');
    let text = entry.text || '';
    text = text.replace(/\bHost\b/g, mySide === 'host' ? 'You' : oppName);
    text = text.replace(/\bGuest\b/g, mySide === 'guest' ? 'You' : oppName);
    if(entry.who === mySide){
      text = text
        .replace(/\bYou opens\b/g, 'You open')
        .replace(/\bYou raises\b/g, 'You raise')
        .replace(/\bYou passes\b/g, 'You pass')
        .replace(/\bYou wins\b/g, 'You win')
        .replace(/\bYou receives\b/g, 'You receive')
        .replace(/\bYou gets\b/g, 'You get');
    }
    d.textContent = text;
    box.appendChild(d);
  });
  box.scrollTop = box.scrollHeight;
}

function renderFriendState(){
  const state = FRIEND_STATE;
  if(!state) return;
  if(state.over && state.results){ renderFriendResults(state); return; }

  applyFriendStateToG(state);
  setGameLabels(opponentDisplayName(state));
  document.getElementById('setupScreen').classList.add('hidden');
  document.getElementById('gameScreen').classList.remove('hidden');
  document.getElementById('resultsScreen').classList.add('hidden');
  const bottomNavBtn = document.getElementById('botExitBtn');

  document.getElementById('youBudget').textContent = '$'+state.me.budget;
  document.getElementById('botBudget').textContent = '$'+state.opponent.budget;
  document.getElementById('youSlots').textContent = state.me.slots+' slots open';
  document.getElementById('botSlots').textContent = state.opponent.slots+' slots open';

  const banner = document.getElementById('profileBanner');
  if(banner){
    banner.classList.add('hidden');
    banner.innerHTML = '';
    banner.removeAttribute('style');
  }
  const opponentConnected = state.connected && state.connected[state.opponent.side];
  if(bottomNavBtn){
    bottomNavBtn.textContent = '← Exit';
    bottomNavBtn.classList.toggle('hidden', !(state.status === 'waiting' || !opponentConnected));
  }

  const aArea = document.getElementById('auctionArea');
  if(state.status !== 'waiting' && !opponentConnected){
    aArea.innerHTML = `<div class="auction-panel" style="text-align:center; border-color:var(--danger);">
      <div style="color:var(--danger); font-weight:700; margin-bottom:8px;">Opponent disconnected</div>
      <div style="color:var(--chalk-dim);">The game is paused until your friend reconnects with room code <span class="mono" style="color:var(--gold);">${state.roomCode}</span>.</div>
    </div>`;
  } else if(state.status === 'waiting'){
    const isOnlineMatch = state.matchType === 'online' || FRIEND_MATCH_TYPE === 'online';
    aArea.innerHTML = isOnlineMatch
      ? `<div class="auction-panel finding-opponent-panel"><div class="finding-opponent-text">Finding an opponent…</div></div>`
      : `<div class="auction-panel" style="text-align:center;"><div style="color:var(--chalk-dim); margin-bottom:12px;">Send this room code to your friend.</div><div class="room-code">${state.roomCode}</div></div>`;
  } else if(state.auction && state.auction.autoFill){
    const player = state.auction.player;
    const myTurn = state.auction.turn === state.side;
    const sideLabel = myTurn ? 'your required pick' : 'opponent selecting required player';
    const cap = state.me.requiredPickMaxBid ?? Math.max(1, state.me.maxBid);
    aArea.innerHTML = `
      <div class="auction-panel">
        <div class="auction-top">
          <div>
            <div class="auction-player">${player.name}</div>
            <div class="auction-meta">${formatPositions(player)} · ${player.ppg} PPG · ${player.rpg} RPG · ${player.apg} APG · DEF ${player.def}/10</div>
          </div>
          <div class="bid-display">
            <div class="lbl">Required Pick</div>
            <div class="amt" style="font-size:24px;">$1 min</div>
            <div class="who">${sideLabel}</div>
          </div>
        </div>
        ${myTurn ? `
        <div class="auction-controls">
          <button class="btn" onclick="friendBid(1)" ${1>cap?'disabled':''}>Bid $1</button>
          <button class="btn" onclick="friendBid(2)" ${2>cap?'disabled':''}>Bid $2</button>
          <button class="btn" onclick="friendBid(5)" ${5>cap?'disabled':''}>Bid $5</button>
          <button class="btn pass" disabled title="Required pick because the other roster is full">Pass</button>
        </div>` : `<div class="waiting">Opponent selecting required player</div>`}
      </div>`;
  } else if(state.auction){
    const player = state.auction.player;
    const myTurn = state.auction.turn === state.side;
    const noBidYet = !state.auction.bidder;
    const nb1 = state.auction.bid+1, nb2 = state.auction.bid+2, nb5 = state.auction.bid+5;
    const cap = state.me.maxBid;
    const bidLabel = noBidYet ? 'No bid yet' : '$'+state.auction.bid;
    const otherDeclined = noBidYet && state.auction.openDeclines && state.auction.openDeclines[state.opponent.side];
    const holderLabel = noBidYet
      ? (otherDeclined ? 'opponent passed; your chance to open' : (myTurn ? 'your first action' : 'opponent first action'))
      : `held by ${state.auction.bidder===state.side?'you':'opponent'}`;
    const actionVerb = noBidYet ? 'Open at' : 'Raise to';
    const passLabel = noBidYet ? (otherDeclined ? 'Pass / Send Back' : 'Pass') : 'Pass';
    aArea.innerHTML = `
      <div class="auction-panel">
        <div class="auction-top">
          <div>
            <div class="auction-player">${player.name}</div>
            <div class="auction-meta">${formatPositions(player)} · ${player.ppg} PPG · ${player.rpg} RPG · ${player.apg} APG · DEF ${player.def}/10</div>
          </div>
          <div class="bid-display">
            <div class="lbl">Current Bid</div>
            <div class="amt" style="font-size:${noBidYet?'24px':'34px'};">${bidLabel}</div>
            <div class="who">${holderLabel}</div>
          </div>
        </div>
        ${myTurn ? `
        <div class="auction-controls">
          <button class="btn" onclick="friendBid(1)" ${nb1>cap?'disabled':''}>${actionVerb} $${nb1}</button>
          <button class="btn" onclick="friendBid(2)" ${nb2>cap?'disabled':''}>${actionVerb} $${nb2}</button>
          <button class="btn" onclick="friendBid(5)" ${nb5>cap?'disabled':''}>${actionVerb} $${nb5}</button>
          <button class="btn pass" onclick="friendPass()">${passLabel}</button>
        </div>` : `<div class="waiting">Waiting on opponent...</div>`}
      </div>`;
  } else {
    const buttonLabel = friendContinueButtonLabel(state);
    aArea.innerHTML = `
      <div class="auction-panel" style="text-align:center;">
        <button class="btn" style="background:var(--hardwood); color:#1a1206; border:none;" onclick="friendReveal()">${buttonLabel}</button>
      </div>`;
  }

  document.getElementById('youNeed').textContent = '('+posNeedStr('user')+')';
  document.getElementById('botNeed').textContent = '('+posNeedStr('bot')+')';
  document.getElementById('youRoster').innerHTML = rosterHtml('user');
  document.getElementById('botRoster').innerHTML = rosterHtml('bot');
  renderFriendLog(state);
}

function renderFriendResults(state){
  applyFriendStateToG(state);
  document.getElementById('setupScreen').classList.add('hidden');
  document.getElementById('gameScreen').classList.add('hidden');
  const rs = document.getElementById('resultsScreen');
  rs.classList.remove('hidden');

  const r = state.results;
  const oppLabel = opponentDisplayName(state);
  const myScore = r.scores[state.side];
  const oppScore = r.scores[state.opponent.side];
  const myAxes = r.axes[state.side];
  const oppAxes = r.axes[state.opponent.side];
  const winnerLabel = r.winner === 'tie' ? "It's a tie!" : (r.winner === state.side ? 'You win the draft! 🏆' : `${oppLabel} wins the draft.`);
  const winnerClass = r.winner === state.side || r.winner === 'tie' ? 'you' : 'bot';
  const rematch = state.rematch || {requested:{}, connected:{}};
  const myRequested = !!(rematch.requested && rematch.requested[state.side]);
  const oppRequested = !!(rematch.requested && rematch.requested[state.opponent.side]);
  const oppConnected = !!(state.connected && state.connected[state.opponent.side]);
  const rematchStatus = myRequested
    ? (oppRequested ? 'Starting rematch...' : (oppConnected ? 'Rematch requested. Waiting for opponent...' : 'Rematch requested. Waiting for opponent to reconnect...'))
    : (oppRequested ? 'Opponent wants a rematch.' : (oppConnected ? 'Start a fresh draft with the same room code.' : 'Opponent disconnected. They can reconnect with the same room code before a rematch.'));
  const rematchButtonText = myRequested ? 'Rematch Requested' : (oppRequested ? 'Accept Rematch' : 'Rematch');

  LAST_SHARE_RESULT = {
    winnerLabel,
    winnerClass,
    myRatingLabel:'Your Team Rating',
    oppRatingLabel:`${oppLabel} Team Rating`,
    myScore,
    oppScore,
    labels:['Scoring','Rebounding','Playmaking','Star Power','Defense'],
    myAxes,
    oppAxes,
    leftTitle:'Your Roster',
    rightTitle:`${oppLabel} Roster`,
    leftRows:r.rows[state.side],
    rightRows:r.rows[state.opponent.side],
    legendOpponent:'Opponent'
  };

  rs.innerHTML = `
    <div class="results">
      <div class="winner-banner ${winnerClass}">${winnerLabel}</div>
      <div class="scoreboard" style="margin-top:6px; margin-bottom:6px;">
        <div class="score-card you"><div class="label">Your Team Rating</div><div class="value mono">${myScore}<span style="font-size:14px; color:var(--chalk-dim);">/100</span></div></div>
        <div class="score-card bot"><div class="label">${oppLabel} Team Rating</div><div class="value mono">${oppScore}<span style="font-size:14px; color:var(--chalk-dim);">/100</span></div></div>
      </div>
      <h2>Team Shape</h2>
      ${buildRadarSVG(['Scoring','Rebounding','Playmaking','Star Power','Defense'], myAxes, oppAxes)}
      <div style="text-align:center; font-size:12px; color:var(--chalk-dim); margin-top:4px;"><span style="color:var(--hardwood);">■</span> You &nbsp;&nbsp; <span style="color:#7C93C9;">■</span> Opponent</div>
      ${pairedRosterTable('Your Roster', `${oppLabel} Roster`, r.rows[state.side], r.rows[state.opponent.side])}
      <div class="results-actions">
        <button class="btn restart-btn" style="background:var(--hardwood); color:#1a1206; border:none;" onclick="friendRematch()" ${myRequested?'disabled':''}>${rematchButtonText}</button>
        <button class="btn share-results-btn" onclick="openShareModal()">Share Results</button>
        <button class="btn restart-btn" onclick="showLanding()">Back to Home</button>
      </div>
      <div class="rematch-status">${rematchStatus}</div>
    </div>`;
}

function restart(){
  document.getElementById('logBox').innerHTML='';
  if(APP_MODE === 'friend') showLanding(); else newGame();
}




function shareCardMarkup(data){
  return `
    <div class="results share-export-card">
      <div class="results-brand">
        <img class="results-brand-logo" src="logo.png" alt="Starting Five logo">
        <span>Starting Five</span>
      </div>
      <div class="results-summary-compact">
        <div class="results-left-summary">
          <div class="winner-banner ${data.winnerClass}">${data.winnerLabel}</div>
          <div class="results-rating-stack">
            <div class="score-card you">
              <div class="label">${data.myRatingLabel}</div>
              <div class="value mono">${data.myScore}<span style="font-size:14px; color:var(--chalk-dim);">/100</span></div>
            </div>
            <div class="score-card bot">
              <div class="label">${data.oppRatingLabel}</div>
              <div class="value mono">${data.oppScore}<span style="font-size:14px; color:var(--chalk-dim);">/100</span></div>
            </div>
          </div>
        </div>
        <div class="results-radar-panel">
          <h2>Team Shape</h2>
          ${buildRadarSVG(data.labels, data.myAxes, data.oppAxes)}
          <div class="results-radar-legend"><span style="color:var(--hardwood);">■</span> You &nbsp;&nbsp; <span style="color:#7C93C9;">■</span> ${data.legendOpponent}</div>
        </div>
      </div>
      ${pairedRosterTable(data.leftTitle, data.rightTitle, data.leftRows, data.rightRows)}
      <div class="results-url">Think you can draft better? startingfive.tkimify.com</div>
    </div>`;
}

function openShareModal(){
  const modal = document.getElementById('shareModal');
  if(!modal) return;
  const status = document.getElementById('shareModalStatus');
  const downloadBtn = document.getElementById('downloadShareBtn');
  if(status) status.textContent = '';
  if(downloadBtn) downloadBtn.disabled = false;
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
}

function closeShareModal(){
  const modal = document.getElementById('shareModal');
  const sandbox = document.getElementById('shareExportSandbox');
  const status = document.getElementById('shareModalStatus');
  const downloadBtn = document.getElementById('downloadShareBtn');
  if(status) status.textContent = '';
  if(downloadBtn) downloadBtn.disabled = false;
  if(sandbox) sandbox.innerHTML = '';
  if(!modal) return;
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}

function buildShareExportNode(){
  if(!LAST_SHARE_RESULT) throw new Error('No results are available to share yet.');
  const wrapper = document.createElement('div');
  wrapper.innerHTML = shareCardMarkup(LAST_SHARE_RESULT).trim();
  return wrapper.firstElementChild;
}

function shareFileName(){
  const stamp = new Date().toISOString().slice(0,10);
  return `starting-five-results-${stamp}.png`;
}

async function downloadResultsPng(){
  const status = document.getElementById('shareModalStatus');
  const downloadBtn = document.getElementById('downloadShareBtn');
  const sandbox = document.getElementById('shareExportSandbox');

  if(!window.htmlToImage || typeof window.htmlToImage.toPng !== 'function'){
    if(status) status.textContent = 'PNG export library failed to load';
    return;
  }

  try{
    if(downloadBtn) downloadBtn.disabled = true;
    if(status) status.textContent = 'Preparing PNG...';

    if(sandbox) sandbox.innerHTML = '';
    const exportNode = buildShareExportNode();
    if(sandbox) sandbox.appendChild(exportNode);

    if(document.fonts && document.fonts.ready){
      await document.fonts.ready;
    }
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));

    const dataUrl = await window.htmlToImage.toPng(exportNode, {
      cacheBust: true,
      pixelRatio: 2,
      backgroundColor: '#1C1E26'
    });

    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = shareFileName();
    document.body.appendChild(link);
    link.click();
    link.remove();

    if(status) status.textContent = 'PNG downloaded';
    setTimeout(closeShareModal, 400);
  }catch(err){
    console.error('Failed to create share image', err);
    if(status) status.textContent = 'Could not create PNG. Try again.';
    if(downloadBtn) downloadBtn.disabled = false;
  }
}

document.getElementById('botModeBtn').addEventListener('click', newGame);
document.getElementById('botExitBtn').addEventListener('click', showLanding);
document.getElementById('friendModeBtn').addEventListener('click', showFriendPanel);
document.getElementById('createRoomBtn').addEventListener('click', createFriendRoom);
document.getElementById('joinRoomBtn').addEventListener('click', joinFriendRoom);
document.getElementById('findOpponentBtn').addEventListener('click', findOnlineOpponent);
document.getElementById('backHomeBtn').addEventListener('click', showLanding);
document.getElementById('joinCodeInput').addEventListener('keydown', (e)=>{ if(e.key==='Enter') joinFriendRoom(); });
document.getElementById('playerNameInput').addEventListener('input', ()=>{ localStorage.setItem('STARTING_FIVE_PLAYER_NAME', cleanPlayerName(document.getElementById('playerNameInput').value)); });
document.getElementById('downloadShareBtn').addEventListener('click', downloadResultsPng);
document.getElementById('closeShareModalBtn').addEventListener('click', closeShareModal);
document.getElementById('shareModal').addEventListener('click', (e)=>{ if(e.target.id === 'shareModal') closeShareModal(); });
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape' && !document.getElementById('shareModal').classList.contains('hidden')) closeShareModal();
});
showLanding();
