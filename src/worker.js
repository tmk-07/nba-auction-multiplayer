// Starting Five multiplayer Worker + Durable Object
// Deploy with Wrangler. The static HTML can be served by this Worker using assets.directory = "./".

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

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



function rand(min,max){ return min + Math.random()*(max-min); }
function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
function shuffle(arr){ const a=arr.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]];} return a; }
function clamp(v,lo,hi){ return Math.max(lo,Math.min(hi,v)); }
function samplePlayers(tiers, count, selectedNames){
  const options = shuffle(MASTER.filter(p=>tiers.includes(p.tier) && !selectedNames.has(p.name)));
  return options.slice(0,count);
}
function tierFallbackBuckets(tiers){
  const key = tiers.slice().sort().join('|');
  if(key === 'superstar') return [['star'], ['starter','role']];
  if(key === 'bench') return [['role'], ['starter']];
  if(key === 'star') return [['superstar'], ['starter','role']];
  if(key === 'star|superstar') return [['starter','role'], ['bench']];
  if(key === 'bench|role') return [['starter'], ['star']];
  if(key === 'role|starter') return [['bench'], ['star']];
  return [['starter','role'], ['star'], ['bench'], ['superstar']];
}
function samplePlayersWithFallback(tiers, count, selectedNames){
  const selected = [];
  const takeFrom = (bucket, remaining)=>{
    const picks = samplePlayers(bucket, remaining, selectedNames);
    picks.forEach(p=>{
      selected.push(p);
      selectedNames.add(p.name);
    });
  };

  takeFrom(tiers, count);
  tierFallbackBuckets(tiers).forEach(bucket=>{
    if(selected.length < count) takeFrom(bucket, count - selected.length);
  });
  return selected;
}
function scaledProfileGroups(profile, targetCount){
  const baseTotal = profile.groups.reduce((sum, group)=>sum + group.count, 0);
  const scaled = profile.groups.map((group, idx)=>{
    const raw = group.count / baseTotal * targetCount;
    return {...group, idx, raw, count:Math.floor(raw)};
  });
  let remaining = targetCount - scaled.reduce((sum, group)=>sum + group.count, 0);
  scaled
    .slice()
    .sort((a,b)=>(b.raw - b.count) - (a.raw - a.count) || a.idx - b.idx)
    .forEach(group=>{
      if(remaining <= 0) return;
      group.count += 1;
      remaining -= 1;
    });
  return scaled.sort((a,b)=>a.idx-b.idx).map(({idx, raw, ...group})=>group);
}
function normalizedPlayerName(name){
  return String(name || '')
    .trim()
    .replace(/[’]/g, "'")
    .replace(/\s+/g, ' ')
    .toLowerCase();
}
const MASTER_BY_NORMALIZED_NAME = new Map(MASTER.map(p => [normalizedPlayerName(p.name), p]));
function playerToDraftEntry(p, idx){
  return {
    id: "p"+idx,
    name:p.name,
    pos:p.pos,
    positions:(p.positions || [p.pos]).slice(),
    tier:p.tier,
    trueValue: statBasedTrueValue(p),
    ppg:p.ppg,
    rpg:p.rpg,
    apg:p.apg,
    def:p.def,
    drafted:false
  };
}
function buildCustomPoolResult(customOrder){
  if(!Array.isArray(customOrder) || !customOrder.length) return null;

  const selected = [];
  const used = new Set();
  const unknown = [];
  const duplicate = [];

  customOrder.forEach(rawName=>{
    const clean = String(rawName || '').replace(/^\s*\d+[.)-]?\s*/, '').trim();
    if(!clean) return;
    const player = MASTER_BY_NORMALIZED_NAME.get(normalizedPlayerName(clean));
    if(!player){
      unknown.push(clean);
      return;
    }
    if(used.has(player.name)){
      duplicate.push(player.name);
      return;
    }
    used.add(player.name);
    selected.push(player);
  });

  if(unknown.length || duplicate.length || selected.length < 10){
    const problems = [];
    if(selected.length < 10) problems.push(`at least 10 valid unique players required; found ${selected.length}`);
    if(unknown.length) problems.push(`unknown players: ${unknown.join(', ')}`);
    if(duplicate.length) problems.push(`duplicate players: ${duplicate.join(', ')}`);
    return {ok:false, error: problems.join('; ')};
  }

  return {
    ok:true,
    customOrderNames:selected.map(p=>p.name),
    pool:{
      profile:{name:'Custom Pool', desc:'Custom multiplayer draft order.'},
      order:selected.map(playerToDraftEntry)
    }
  };
}
function buildPool(minPlayers=10){
  const profile = pick(POOL_PROFILES);
  const selected = [];
  const selectedNames = new Set();
  const needed = Math.max(10, Math.min(MASTER.length, Number(minPlayers) || 10));
  scaledProfileGroups(profile, needed).forEach(group=>{
    const picks = samplePlayersWithFallback(group.tiers, group.count, selectedNames);
    picks.forEach(p=>{ selected.push(p); });
  });
  if(selected.length < needed){
    shuffle(MASTER.filter(p=>!selectedNames.has(p.name))).slice(0, needed - selected.length).forEach(p=>{
      selected.push(p);
      selectedNames.add(p.name);
    });
  }
  const order = shuffle(selected).map(playerToDraftEntry);
  return {profile, order};
}

const POS_INDEX = {G:0, F:1, C:2};
const ROSTER_LAYOUT = ['G','G','F','F','C'];
const FRIEND_SIDES = ['host','guest','player3','player4','player5'];
const DEFAULT_BUDGET = 20;
const NO_OPEN_BID_AUTOFILL_THRESHOLD = 4;
const MULTI_TEAM_AUCTION_TIMEOUT_MS = 3000;
const BOT_ACTION_DELAY_MS = 650;
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
function publicPlayer(p){
  if(!p) return null;
  const {trueValue, adjustedValue, ...rest} = p;
  return {...rest};
}
function rosterByPosition(game, side){
  const byPos = {G:[], F:[], C:[]};
  game.rosters[side].forEach(p=> byPos[p.assignedPos].push(p));
  const counts = {G:0, F:0, C:0};
  return ROSTER_LAYOUT.map(posLabel => byPos[posLabel][counts[posLabel]++] || null).filter(Boolean);
}
function optimizeRosterPositions(game, side){
  const roster = game.rosters[side];
  const used = Array(ROSTER_LAYOUT.length).fill(false);
  const assignment = Array(roster.length).fill(null);
  let bestAssignment = null;
  let bestScore = -Infinity;
  let bestDistance = Infinity;

  function search(idx, score, distanceTotal){
    if(idx >= roster.length){
      if(score > bestScore || (score === bestScore && distanceTotal < bestDistance)){
        bestScore = score;
        bestDistance = distanceTotal;
        bestAssignment = assignment.slice();
      }
      return;
    }

    const player = roster[idx];
    for(let i=0;i<ROSTER_LAYOUT.length;i++){
      if(used[i]) continue;
      const slot = ROSTER_LAYOUT[i];
      const dist = posDistanceForPlayer(player, slot);
      const adjusted = Math.round(player.trueValue * penaltyMultiplier(dist));
      used[i] = true;
      assignment[idx] = slot;
      search(idx+1, score + adjusted, distanceTotal + dist);
      used[i] = false;
      assignment[idx] = null;
    }
  }

  search(0,0,0);
  const remaining = {G:2,F:2,C:1};
  roster.forEach((player, idx)=>{
    const assignedPos = bestAssignment ? bestAssignment[idx] : player.pos;
    const dist = posDistanceForPlayer(player, assignedPos);
    player.assignedPos = assignedPos;
    player.posPenaltyDist = dist;
    player.adjustedValue = Math.round(player.trueValue * penaltyMultiplier(dist));
    remaining[assignedPos] -= 1;
  });
  game.posSlots[side] = remaining;
}
function assignPosition(game, side){ optimizeRosterPositions(game, side); }
function topNSum(arr, n){ return arr.slice().sort((a,b)=>b-a).slice(0,n).reduce((a,b)=>a+b,0); }
function topNAvg(arr, n){ const vals = arr.slice().sort((a,b)=>b-a).slice(0,n); return vals.length ? vals.reduce((a,b)=>a+b,0)/vals.length : 0; }
function teamAxes(game, side, maxes){
  const roster = game.rosters[side];
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

function gameSides(game){ return game.sides || ['host','guest']; }
function makeSideMap(sides, valueFactory){ return Object.fromEntries(sides.map(side=>[side, valueFactory(side)])); }
function normalizeRoomOptions(options={}){
  const maxTeams = clamp(Math.floor(Number(options.maxTeams || 2)), 2, 5);
  const budget = clamp(Math.floor(Number(options.budget || DEFAULT_BUDGET)), ROSTER_LAYOUT.length, 99);
  return {maxTeams, budget};
}
function joinedSides(game){
  const sides = gameSides(game);
  if(game.joined) return sides.filter(side=>game.joined[side]);
  return sides;
}
function botSides(game){
  const sides = gameSides(game);
  return sides.filter(side=>game.botSides && game.botSides[side]);
}
function refreshBotNames(game){
  const sides = gameSides(game);
  if(!game.names) game.names = makeSideMap(sides, ()=>'');
  botSides(game).forEach((side, idx)=>{
    game.names[side] = `Bot ${idx + 1}`;
  });
}
function sidesWithSlots(game){ return gameSides(game).filter(side=>game.slots[side] > 0); }
function nextSide(game, currentSide, predicate=()=>true){
  const sides = gameSides(game);
  const start = Math.max(0, sides.indexOf(currentSide));
  for(let offset=1; offset<=sides.length; offset++){
    const side = sides[(start + offset) % sides.length];
    if(predicate(side)) return side;
  }
  return null;
}
function allExpectedTeamsJoined(game){
  return joinedSides(game).length >= (game.maxTeams || 2);
}
function isMultiTeamAuction(game){
  return (game.maxTeams || gameSides(game).length || 2) > 2;
}
function activeAuctionSides(game){
  return gameSides(game).filter(side=>game.slots[side] > 0);
}
function bumpTimedAuctionDeadline(game){
  if(game && game.auction && !game.auction.autoFill && isMultiTeamAuction(game)){
    game.auction.deadlineAt = Date.now() + MULTI_TEAM_AUCTION_TIMEOUT_MS;
  }
}
function nextOpenSide(game){
  const sides = gameSides(game);
  if(!game.joined) return game.guestJoined ? null : 'guest';
  return sides.find(side=>!(game.joined && game.joined[side])) || null;
}
function nextReconnectSide(game, connected){
  const sides = gameSides(game);
  if(!game.joined) return null;
  return sides.find(side=>game.joined[side] && !(connected && connected[side]) && !(game.botSides && game.botSides[side] && !game.botReplaced?.[side])) || null;
}
function nextBotCoverSide(game, connected){
  const sides = gameSides(game);
  if(!game.joined) return null;
  return sides.find(side=>game.joined[side] && !(connected && connected[side]) && !(game.botSides && game.botSides[side])) || null;
}
function teamLabel(side){
  if(side === 'host') return 'Host';
  if(side === 'guest') return 'Guest';
  const match = String(side).match(/^player(\d+)$/);
  return match ? `Player ${match[1]}` : side;
}

function botControlState(game, connected){
  if(!game || (game.matchType || 'friend') === 'online' || game.over) return {canAdd:false, canRemove:false, botCount:0};
  const bots = botSides(game);
  const openSide = nextOpenSide(game);
  const coverSide = nextBotCoverSide(game, connected);
  const replaceableBot = bots.find(side=>game.botReplaced && game.botReplaced[side]);
  return {
    canAdd: !!(openSide || coverSide),
    canRemove: game.status === 'waiting' ? bots.length > 0 : !!replaceableBot,
    botCount: bots.length
  };
}

function addBotToGame(game, connected){
  const sides = gameSides(game);
  if(!game.botSides) game.botSides = makeSideMap(sides, ()=>false);
  if(!game.botReplaced) game.botReplaced = makeSideMap(sides, ()=>false);
  if(!game.botOriginalNames) game.botOriginalNames = makeSideMap(sides, ()=>'');
  if(!game.joined) game.joined = makeSideMap(sides, s=>s === 'host' || s === 'guest');

  const target = nextOpenSide(game) || nextBotCoverSide(game, connected);
  if(!target || game.botSides[target]) return false;

  const replacedHuman = !!game.joined[target];
  if(replacedHuman && game.names && game.names[target]) game.botOriginalNames[target] = game.names[target];
  game.botSides[target] = true;
  game.botReplaced[target] = replacedHuman;
  game.joined[target] = true;
  if(target === 'guest') game.guestJoined = true;
  refreshBotNames(game);
  addLog(game, 'sys', `${game.names[target]} joined.`);

  if(allExpectedTeamsJoined(game) && game.status === 'waiting'){
    game.status = 'active';
    addLog(game, 'sys', `${game.maxTeams || 2} teams joined. The draft is ready.`);
  }
  return true;
}

function removeBotFromGame(game){
  const bots = botSides(game);
  if(!bots.length) return false;
  const target = game.status === 'waiting'
    ? bots[bots.length - 1]
    : bots.slice().reverse().find(side=>game.botReplaced && game.botReplaced[side]);
  if(!target) return false;

  const wasReplacement = !!(game.botReplaced && game.botReplaced[target]);
  const botName = game.names?.[target] || 'Bot';
  game.botSides[target] = false;
  if(game.botReplaced) game.botReplaced[target] = false;
  if(wasReplacement){
    game.names[target] = (game.botOriginalNames && game.botOriginalNames[target]) || '';
    addLog(game, 'sys', `${botName} removed. Waiting for ${label(target)} to reconnect.`);
  }else if(game.status === 'waiting'){
    game.joined[target] = false;
    game.names[target] = '';
    if(target === 'guest') game.guestJoined = false;
    addLog(game, 'sys', `${botName} removed.`);
  }else{
    game.names[target] = '';
  }
  refreshBotNames(game);
  return true;
}

function botBidTarget(game, side, player){
  const cap = maxBid(game, side);
  if(cap <= 0 || !player) return 0;
  const startingBudget = game.startingBudgets?.[side] || DEFAULT_BUDGET;
  const slots = game.slots[side] || 1;
  if(slots <= 1) return cap;
  const positionNeed = game.posSlots?.[side] || {};
  const fitsNeed = eligiblePositions(player).some(pos=>positionNeed[pos] > 0);
  const valuePrice = Math.round((player.trueValue / 100) * startingBudget * 0.86);
  const fitAdjustment = fitsNeed ? Math.max(1, Math.round(startingBudget * 0.04)) : -Math.max(0, Math.round(startingBudget * 0.03));
  const pressureAdjustment = Math.max(0, Math.round((ROSTER_LAYOUT.length - slots) * startingBudget * 0.015));
  return clamp(valuePrice + fitAdjustment + pressureAdjustment, 1, cap);
}

function botCanAct(game, side){
  if(!game || !game.auction || !game.botSides?.[side] || game.slots[side] <= 0) return false;
  if(game.auction.autoFill) return game.auction.turn === side;
  if(game.auction.bidder === side) return false;
  if(game.auction.openDeclines && game.auction.openDeclines[side]) return false;
  if(isMultiTeamAuction(game)) return true;
  return game.auction.turn === side;
}

function nextBotActor(game){
  if(!game || game.status !== 'active' || game.over || !game.auction) return null;
  if(game.auction.autoFill){
    const side = game.auction.turn;
    return botCanAct(game, side) ? side : null;
  }
  if(isMultiTeamAuction(game)) return gameSides(game).find(side=>botCanAct(game, side)) || null;
  const side = game.auction.turn;
  return botCanAct(game, side) ? side : null;
}

function runBotMove(game, side){
  if(!botCanAct(game, side)) return false;
  if(game.auction.autoFill){
    resolveAutoFillPick(game, side, 1);
    return true;
  }
  const player = game.order.find(p=>p.id === game.auction.playerId);
  const target = botBidTarget(game, side, player);
  const nextBid = game.auction.bid + 1;
  if(target >= nextBid){
    const amount = Math.max(1, Math.min(2, target - game.auction.bid));
    processBid(game, side, amount);
  }else{
    processPass(game, side);
  }
  return true;
}

function buildResults(game){
  const sides = gameSides(game);
  const rosterSize = ROSTER_LAYOUT.length;
  const top5Raw = topNSum(game.order.map(p=>p.trueValue), rosterSize);
  const score = (side)=> clamp(Math.round(game.rosters[side].reduce((s,p)=>s+p.adjustedValue,0)/top5Raw*100),0,100);
  const scores = Object.fromEntries(sides.map(side=>[side, score(side)]));
  const sortedScores = sides.slice().sort((a,b)=>scores[b]-scores[a]);
  const winner = sortedScores.length > 1 && scores[sortedScores[0]] === scores[sortedScores[1]] ? 'tie' : sortedScores[0];
  const maxes = {
    ppg: topNSum(game.order.map(p=>p.ppg),rosterSize),
    rpg: topNSum(game.order.map(p=>p.rpg),rosterSize),
    apg: topNSum(game.order.map(p=>p.apg),rosterSize),
    def: topNSum(game.order.map(p=>p.def),rosterSize),
    starPowerPoolAvg: topNAvg(game.order.map(p=>p.trueValue),3),
  };
  const totalPoolValue = game.order.reduce((s,p)=>s+p.trueValue,0);
  const startingBudgetTotal = sides.reduce((sum, side)=>sum + (game.startingBudgets?.[side] || DEFAULT_BUDGET), 0);
  const priceScale = totalPoolValue/Math.max(1, startingBudgetTotal);
  const rows = (side)=> rosterByPosition(game, side).map(p=>{
    const expectedValue = p.soldPrice*priceScale;
    const tag = expectedValue < p.trueValue*0.75 ? 'steal' : (expectedValue > p.trueValue*1.35 ? 'overpay' : '');
    return {
      name:p.name,
      pos:p.assignedPos,
      naturalPos:p.pos,
      positions:eligiblePositions(p),
      bigShift:p.posPenaltyDist===2,
      price:p.soldPrice,
      tag
    };
  });
  const axes = Object.fromEntries(sides.map(side=>[side, teamAxes(game, side, maxes)]));
  const categoryLabels = ['Scoring','Rebounding','Playmaking','Star Power','Defense'];
  const categoryKeys = ['scoring','rebounding','playmaking','starPower','defense'];
  const categoryIndex = {scoring:0, rebounding:1, playmaking:2, starPower:3, defense:4};
  const rankedList = (key)=>sides.slice().sort((a,b)=>{
    const av = key === 'total' ? scores[a] : axes[a][categoryIndex[key]];
    const bv = key === 'total' ? scores[b] : axes[b][categoryIndex[key]];
    return bv - av;
  }).map((side, idx)=>({
    side,
    rank:idx+1,
    score:key === 'total' ? scores[side] : axes[side][categoryIndex[key]]
  }));
  const categories = Object.fromEntries(categoryKeys.map((key, idx)=>[key, {label:categoryLabels[idx], ranks:rankedList(key)}]));
  const bidOrder = game.order
    .filter(p=>p.drafted && p.soldTo)
    .map(p=>({name:p.name, side:p.soldTo, price:p.soldPrice, pos:p.assignedPos || p.pos}))
    .sort((a,b)=>b.price - a.price || a.name.localeCompare(b.name));
  return {winner, scores, axes, rows:Object.fromEntries(sides.map(side=>[side, rows(side)])), rankings:{total:rankedList('total'), categories}, bidOrder};
}

function newRoomGame(code, options={}){
  const roomOptions = normalizeRoomOptions(options);
  const sides = FRIEND_SIDES.slice(0, roomOptions.maxTeams);
  const pool = options.customPool || buildPool(sides.length * ROSTER_LAYOUT.length);
  const {profile, order} = pool;
  return {
    code, matchType: options.matchType || 'friend', profileName: profile.name, status:'waiting', guestJoined:false, order,
    pretendBot: !!options.pretendBot,
    customOrderNames: options.customOrderNames || null,
    maxTeams: roomOptions.maxTeams,
    sides,
    joined: makeSideMap(sides, side=>side === 'host'),
    budgets: makeSideMap(sides, ()=>roomOptions.budget),
    startingBudgets: makeSideMap(sides, ()=>roomOptions.budget),
    slots: makeSideMap(sides, ()=>ROSTER_LAYOUT.length),
    posSlots: makeSideMap(sides, ()=>({G:2,F:2,C:1})),
    rosters: makeSideMap(sides, ()=>[]),
    botSides: makeSideMap(sides, ()=>false),
    botReplaced: makeSideMap(sides, ()=>false),
    botOriginalNames: makeSideMap(sides, ()=>''),
    initialFirst: Math.random()<0.5 ? 'host' : 'guest',
    roundIndex:0, nominationCount:0, auction:null, log:[], over:false, results:null,
    noOpenBidStreak:0,
    hasSkippedPlayers:false,
    rematch: makeSideMap(sides, ()=>false),
    names: makeSideMap(sides, ()=>'')
  };
}
function otherSide(side){ return side==='host' ? 'guest' : 'host'; }
function label(side){ return teamLabel(side); }
function cleanPlayerName(name){ return (name || '').trim().replace(/\s+/g, ' ').slice(0,18); }
function maxBid(game, side){
  if(game.slots[side]<=0) return 0;
  const slotsAfterThis = game.slots[side]-1;
  return Math.max(0, game.budgets[side] - slotsAfterThis);
}
function requiredPickMaxBid(game, side){
  // Required picks should never get stuck because of a broken reserve edge case.
  // In normal play this equals maxBid(game, side), but it guarantees at least a
  // $1 escape path when a roster still has an open slot.
  if(!game || game.slots[side] <= 0) return 0;
  return Math.max(1, maxBid(game, side));
}
function addLog(game, who, text){ game.log.push({who, text}); if(game.log.length>80) game.log.shift(); }
function firstBidderFor(game){
  const sides = sidesWithSlots(game);
  if(!sides.length) return null;
  const initialIndex = Math.max(0, sides.indexOf(game.initialFirst));
  return sides[(initialIndex + game.nominationCount) % sides.length];
}
function availableUndraftedPlayers(game){ return game.order.filter(p=>!p.drafted); }
function nextUndraftedPlayer(game){
  return game.order.find((p, i)=> i >= game.roundIndex && !p.drafted) || availableUndraftedPlayers(game)[0] || null;
}
function visibleAutoFillSide(game){
  if(!game || game.over) return null;
  const remaining = sidesWithSlots(game);
  return remaining.length === 1 ? remaining[0] : null;
}
function endGame(game){ game.over = true; game.status = 'ended'; game.results = buildResults(game); }
function maybeAutoFillAfterRosterFull(game){
  if(sidesWithSlots(game).length <= 0){ endGame(game); return true; }
  if(!availableUndraftedPlayers(game).length){ endGame(game); return true; }
  return false;
}
function startAutoFillRound(game, side){
  const player = nextUndraftedPlayer(game);
  if(!player){ endGame(game); return; }
  const idx = game.order.findIndex(p=>p.id === player.id);
  if(idx >= 0) game.roundIndex = idx;
  game.auction = {
    playerId: player.id,
    bid: 0,
    bidder: null,
    turn: side,
    openedBy: side,
    autoFill: true,
    openDeclines: makeSideMap(gameSides(game), ()=>false),
    passDeclines: makeSideMap(gameSides(game), ()=>false)
  };
  const roundNumber = gameSides(game).reduce((sum, s)=>sum + game.rosters[s].length, 0) + 1;
  addLog(game, 'sys', `Round ${roundNumber} of ${game.order.length}: ${player.name} revealed. ${label(side)} must take ${player.name} because the other roster is full.`);
}
function startRound(game){
  const autoSide = visibleAutoFillSide(game);
  if(autoSide){ startAutoFillRound(game, autoSide); return; }

  if(maybeAutoFillAfterRosterFull(game)) return;
  const player = nextUndraftedPlayer(game);
  if(!player){ endGame(game); return; }
  const idx = game.order.findIndex(p=>p.id === player.id);
  if(idx >= 0) game.roundIndex = idx;
  const opener = firstBidderFor(game);
  game.nominationCount += 1;
  game.auction = { playerId:player.id, bid:0, bidder:null, turn:opener, openedBy:opener, openDeclines:makeSideMap(gameSides(game), ()=>false), passDeclines:makeSideMap(gameSides(game), ()=>false) };
  bumpTimedAuctionDeadline(game);
  const roundNumber = gameSides(game).reduce((sum, s)=>sum + game.rosters[s].length, 0) + 1;
  addLog(game, 'sys', `Round ${roundNumber} of ${game.order.length}: ${player.name} revealed. ${label(opener)} gets first action.`);
}
function recycleAuctionPlayer(game){
  const idx = game.order.findIndex(p=>p.id===game.auction.playerId);
  if(idx >= 0){
    const [player] = game.order.splice(idx,1);
    game.order.push(player);
    game.hasSkippedPlayers = true;
    addLog(game, 'sys', `No opening bid — ${player.name} moves to the back of the pool.`);
  }
  game.auction = null;
}
function skipAuctionPlayerAndContinue(game){
  recycleAuctionPlayer(game);
  maybeAutoFillAfterRosterFull(game);
}
function sideForForcedFill(game, preferredSide){
  if(game.slots[preferredSide] > 0) return preferredSide;
  return nextSide(game, preferredSide, side=>game.slots[side] > 0);
}
function forceAutoFillRemainingRosters(game, startingSide){
  let nextFillSide = sideForForcedFill(game, startingSide) || sideForForcedFill(game, 'host');
  if(!nextFillSide) return;

  addLog(game, 'sys', 'Draft stalled after repeated no-bid passes. Remaining players will be assigned automatically for $1 each.');

  const candidates = availableUndraftedPlayers(game);
  candidates.forEach(player=>{
    const side = sideForForcedFill(game, nextFillSide);
    if(!side) return;
    player.drafted = true;
    player.soldTo = side;
    player.soldPrice = 1;
    game.budgets[side] -= 1;
    game.slots[side] -= 1;
    game.rosters[side].push(player);
    assignPosition(game, side);
    addLog(game, 'sys', `${label(side)} receives ${player.name} automatically for $1.`);

    nextFillSide = nextSide(game, side, s=>game.slots[s] > 0) || side;
  });

  game.auction = null;
  game.roundIndex = game.order.length;
  endGame(game);
}
function passBeforeOpeningBid(game, side){
  const player = game.order.find(p=>p.id===game.auction.playerId);
  game.auction.openDeclines[side] = true;
  addLog(game, side, `${label(side)} passes before bidding on ${player.name}.`);
  const next = nextSide(game, side, s=>game.slots[s] > 0 && !game.auction.openDeclines[s]);
  if(next){
    game.auction.turn = next;
    addLog(game, 'sys', `${label(next)} still has the option to open bidding on ${player.name}.`);
    return;
  }

  game.noOpenBidStreak = (game.noOpenBidStreak || 0) + 1;
  const undraftedLeft = availableUndraftedPlayers(game).length;
  const threshold = Math.min(NO_OPEN_BID_AUTOFILL_THRESHOLD, Math.max(1, undraftedLeft * 2));
  if(game.noOpenBidStreak >= threshold){
    const startingSide = game.auction.openedBy || firstBidderFor(game);
    forceAutoFillRemainingRosters(game, startingSide);
    return;
  }

  recycleAuctionPlayer(game);
}
function resolveAutoFillPick(game, side, price=1){
  if(!game.auction || !game.auction.autoFill || game.auction.turn !== side) return;
  price = Number(price);
  if(!Number.isInteger(price) || price < 1) return;
  if(price > requiredPickMaxBid(game, side)) return;

  const auction = game.auction;
  const player = game.order.find(p=>p.id===auction.playerId);

  // Clear the auction immediately so repeated bid messages cannot resolve the
  // same required player twice or leave the final roster spot stuck.
  game.auction = null;

  if(!player || player.drafted) return;
  player.drafted = true;
  player.soldTo = side;
  player.soldPrice = price;
  game.budgets[side] -= price;
  game.slots[side] -= 1;
  game.rosters[side].push(player);
  assignPosition(game, side);
  const idx = game.order.findIndex(p=>p.id === player.id);
  if(idx >= 0) game.roundIndex = Math.max(game.roundIndex, idx + 1);
  const oop = isOutOfPosition(player, player.assignedPos);
  addLog(game, 'sys', `${label(side)} receives ${player.name} for $${price} — slotted at ${player.assignedPos}${oop?` (off eligible positions: ${formatPositions(player)})`:''}.`);
  if(maybeAutoFillAfterRosterFull(game)) return;

  const nextAutoSide = visibleAutoFillSide(game);
  if(nextAutoSide){
    startAutoFillRound(game, nextAutoSide);
  }
}


function resolveAuction(game, winnerSide){
  if(!game.auction || !winnerSide) return;
  const player = game.order.find(p=>p.id===game.auction.playerId);
  const price = game.auction.bid;
  if(price <= 0){ recycleAuctionPlayer(game); return; }
  player.drafted = true; player.soldTo = winnerSide; player.soldPrice = price;
  game.budgets[winnerSide] -= price; game.slots[winnerSide] -= 1; game.rosters[winnerSide].push(player);
  assignPosition(game, winnerSide);
  const oop = isOutOfPosition(player, player.assignedPos);
  addLog(game, 'sys', `${label(winnerSide)} wins ${player.name} for $${price} — slotted at ${player.assignedPos}${oop?` (off eligible positions: ${formatPositions(player)})`:''}.`);
  game.auction = null; game.roundIndex += 1;
  if(maybeAutoFillAfterRosterFull(game)) return;
  if(game.roundIndex >= game.order.length) endGame(game);
}
function processBid(game, side, amount){
  if(game.over || game.status !== 'active') return;
  const multiTeam = isMultiTeamAuction(game);
  if(!game.auction || (!multiTeam && game.auction.turn !== side) || game.slots[side] <= 0) return;
  amount = Number(amount);
  if(!Number.isInteger(amount) || amount < 1) return;
  if(game.auction.autoFill){
    resolveAutoFillPick(game, side, amount);
    return;
  }
  if(multiTeam && game.auction.openDeclines && game.auction.openDeclines[side]) return;
  const openingBid = game.auction.bid === 0;
  const newBid = game.auction.bid + amount;
  if(newBid > maxBid(game, side)) return;
  game.noOpenBidStreak = 0;
  game.auction.bid = newBid;
  game.auction.bidder = side;
  game.auction.passDeclines = makeSideMap(gameSides(game), s=>s === side);
  game.auction.openDeclines = makeSideMap(gameSides(game), ()=>false);
  if(!multiTeam) game.auction.turn = nextSide(game, side, s=>s !== side && game.slots[s] > 0) || side;
  bumpTimedAuctionDeadline(game);
  addLog(game, side, openingBid ? `${label(side)} opens at $${newBid}.` : `${label(side)} raises to $${newBid}.`);
}
function processPass(game, side){
  if(game.over || game.status !== 'active') return;
  const multiTeam = isMultiTeamAuction(game);
  if(!game.auction || (!multiTeam && game.auction.turn !== side)) return;
  if(game.auction.autoFill) return;
  if(game.slots[side] <= 0){ maybeAutoFillAfterRosterFull(game); return; }
  if(multiTeam){
    if(game.auction.bidder === side) return;
    if(game.auction.openDeclines && game.auction.openDeclines[side]) return;
    game.auction.openDeclines[side] = true;
    if(game.auction.bidder){
      if(!game.auction.passDeclines) game.auction.passDeclines = makeSideMap(gameSides(game), s=>s === game.auction.bidder);
      game.auction.passDeclines[side] = true;
      addLog(game, side, `${label(side)} passes at $${game.auction.bid}.`);
      const bidder = game.auction.bidder;
      const everyoneElsePassed = activeAuctionSides(game).filter(s=>s !== bidder).every(s=>game.auction.passDeclines[s] || game.auction.openDeclines[s]);
      if(everyoneElsePassed) resolveAuction(game, bidder);
      else bumpTimedAuctionDeadline(game);
      return;
    }
    addLog(game, side, `${label(side)} passes before bidding.`);
    const everyonePassed = activeAuctionSides(game).every(s=>game.auction.openDeclines[s]);
    if(everyonePassed) skipAuctionPlayerAndContinue(game);
    else bumpTimedAuctionDeadline(game);
    return;
  }
  if(!game.auction.bidder){ passBeforeOpeningBid(game, side); return; }
  addLog(game, side, `${label(side)} passes at $${game.auction.bid}.`);
  if(!game.auction.passDeclines) game.auction.passDeclines = makeSideMap(gameSides(game), s=>s === game.auction.bidder);
  game.auction.passDeclines[side] = true;
  const bidder = game.auction.bidder;
  const next = nextSide(game, side, s=>s !== bidder && game.slots[s] > 0 && !game.auction.passDeclines[s]);
  if(next){
    game.auction.turn = next;
    return;
  }
  resolveAuction(game, bidder);
}
function stateForClient(game, side, connected){
  const sides = gameSides(game);
  const opp = sides.find(s=>s !== side) || otherSide(side);
  const currentPlayer = game.auction ? game.order.find(p=>p.id===game.auction.playerId) : null;
  const names = game.names || makeSideMap(sides, ()=>'');
  const teams = sides.map(s=>({
    side:s,
    label:label(s),
    name:names[s] || '',
    isBot:!!(game.botSides && game.botSides[s]),
    budget:game.budgets[s],
    startingBudget:game.startingBudgets?.[s] || DEFAULT_BUDGET,
    slots:game.slots[s],
    posSlots:game.posSlots[s],
    maxBid:maxBid(game,s),
    requiredPickMaxBid:requiredPickMaxBid(game,s),
    roster:game.rosters[s].map(publicPlayer),
    joined:!!(game.joined ? game.joined[s] : true)
  }));
  return {
    type:'state', roomCode: game.code, matchType: game.matchType || 'friend', pretendBot: !!game.pretendBot, side, status: game.status, over: game.over, connected,
    maxTeams: game.maxTeams || 2, sides, teams,
    draftedCount: sides.reduce((sum, s)=>sum + game.rosters[s].length, 0), orderLength: game.order.length,
    hasSkippedPlayers: !!game.hasSkippedPlayers, visibleAutoFill: !!visibleAutoFillSide(game),
    names,
    me: {side, name:names[side] || '', budget:game.budgets[side], slots:game.slots[side], posSlots:game.posSlots[side], maxBid:maxBid(game,side), requiredPickMaxBid:requiredPickMaxBid(game,side), roster:game.rosters[side].map(publicPlayer)},
    opponent: {side:opp, name:names[opp] || '', budget:game.budgets[opp], slots:game.slots[opp], posSlots:game.posSlots[opp], maxBid:maxBid(game,opp), requiredPickMaxBid:requiredPickMaxBid(game,opp), roster:game.rosters[opp].map(publicPlayer)},
    auction: game.auction ? {
      bid:game.auction.bid,
      bidder:game.auction.bidder,
      turn:game.auction.turn,
      autoFill:!!game.auction.autoFill,
      timed: isMultiTeamAuction(game) && !game.auction.autoFill,
      timeoutMs: isMultiTeamAuction(game) && !game.auction.autoFill ? MULTI_TEAM_AUCTION_TIMEOUT_MS : null,
      deadlineAt: game.auction.deadlineAt || null,
      deadlineRemainingMs: game.auction.deadlineAt ? Math.max(0, game.auction.deadlineAt - Date.now()) : null,
      openDeclines:game.auction.openDeclines,
      passDeclines:game.auction.passDeclines,
      player:publicPlayer(currentPlayer)
    } : null,
    log: game.log,
    botControls: botControlState(game, connected),
    rematch:{requested: game.rematch || {host:false, guest:false}, connected},
    results: game.results
  };
}
function makeCode(){
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let s='';
  for(let i=0;i<5;i++) s += chars[Math.floor(Math.random()*chars.length)];
  return s;
}

export class AuctionRoom {
  constructor(state, env){
    this.state = state; this.env = env; this.sessions = new Map(); this.game = null; this.loaded = false;
    this.autoFillTimer = null; this.autoFillTimerKey = null;
    this.auctionTimer = null; this.auctionTimerKey = null;
    this.botActionTimer = null; this.botActionTimerKey = null;
  }
  async load(){
    if(this.loaded) return;
    this.game = await this.state.storage.get('game');
    this.loaded = true;
  }
  async save(){ await this.state.storage.put('game', this.game); }
  connectedMap(){
    const sides = this.game ? gameSides(this.game) : ['host','guest'];
    return makeSideMap(sides, side=>this.sessions.has(side) || !!(this.game && this.game.botSides && this.game.botSides[side]));
  }
  humanConnectedMap(){
    const sides = this.game ? gameSides(this.game) : ['host','guest'];
    return makeSideMap(sides, side=>this.sessions.has(side));
  }
  async fetch(request){
    await this.load();
    const url = new URL(request.url);
    if(request.method === 'GET' && url.pathname.endsWith('/match/status')) return this.matchStatus(request);
    if(request.method === 'POST' && url.pathname.endsWith('/match/leave')) return this.clearPresence(url);
    if(request.method === 'POST' && url.pathname.endsWith('/match/find')) return this.matchFind(request);
    if(request.method === 'POST' && url.pathname.endsWith('/init')){
      const code = url.searchParams.get('code') || makeCode();
      const matchType = url.searchParams.get('matchType') === 'online' ? 'online' : 'friend';
      let initOptions = {};
      try{
        const rawBody = await request.text();
        initOptions = rawBody ? JSON.parse(rawBody) : {};
      }catch(e){
        return new Response('Invalid room options JSON', {status:400, headers:CORS_HEADERS});
      }

      let customPoolResult = null;
      if(initOptions.customOrder){
        customPoolResult = buildCustomPoolResult(initOptions.customOrder);
        if(!customPoolResult || !customPoolResult.ok){
          return new Response(customPoolResult ? customPoolResult.error : 'Invalid custom draft order', {status:400, headers:CORS_HEADERS});
        }
      }
      const roomOptions = normalizeRoomOptions(matchType === 'online' ? {...initOptions, maxTeams:2} : initOptions);
      if(customPoolResult && customPoolResult.pool.order.length < roomOptions.maxTeams * ROSTER_LAYOUT.length){
        return new Response(`Add at least ${roomOptions.maxTeams * ROSTER_LAYOUT.length} valid unique players for a ${roomOptions.maxTeams}-team room.`, {status:400, headers:CORS_HEADERS});
      }

      if(!this.game){
        this.game = newRoomGame(code, {
          matchType,
          maxTeams: roomOptions.maxTeams,
          budget: roomOptions.budget,
          customPool: customPoolResult ? customPoolResult.pool : null,
          customOrderNames: customPoolResult ? customPoolResult.customOrderNames : null,
          pretendBot: !!initOptions.pretendBot
        });
        await this.save();
      }
      return new Response(JSON.stringify({ok:true, code:this.game.code}), {headers:{'Content-Type':'application/json', ...CORS_HEADERS}});
    }
    if(request.method === 'GET' && url.pathname.endsWith('/status')){
      if(!this.game){
        return new Response(JSON.stringify({exists:false, full:false, message:'Invalid room code.'}), {status:404, headers:{'Content-Type':'application/json', ...CORS_HEADERS}});
      }
      const connected = this.humanConnectedMap();
      const openSide = nextOpenSide(this.game);
      const reconnectSide = nextReconnectSide(this.game, connected);
      const availableSide = openSide || reconnectSide;
      const full = !!(!availableSide && !this.game.over);
      return new Response(JSON.stringify({
        exists:true,
        full,
        availableSide,
        reconnecting: !!(!openSide && reconnectSide),
        maxTeams: this.game.maxTeams || 2,
        joinedCount: joinedSides(this.game).length,
        status:this.game.status,
        matchType:this.game.matchType || 'friend',
        pretendBot:!!this.game.pretendBot,
        over:!!this.game.over,
        connected,
      }), {headers:{'Content-Type':'application/json', ...CORS_HEADERS}});
    }
    if(request.headers.get('Upgrade') === 'websocket') return this.handleWebSocket(request);
    return new Response('Not found', {status:404, headers:CORS_HEADERS});
  }
  async prunePresence(now=Date.now()){
    const presence = (await this.state.storage.get('activePresence')) || {};
    let changed = false;
    for(const [id, info] of Object.entries(presence)){
      if(!info || !info.lastSeen || now - info.lastSeen > 30000){
        delete presence[id];
        changed = true;
      }
    }
    if(changed) await this.state.storage.put('activePresence', presence);
    return presence;
  }

  async touchPresence(url){
    const now = Date.now();
    const session = (url.searchParams.get('session') || '').replace(/[^a-zA-Z0-9_-]/g,'').slice(0,80);
    const mode = (url.searchParams.get('mode') || 'online').replace(/[^a-zA-Z0-9_-]/g,'').slice(0,40);
    const presence = await this.prunePresence(now);
    if(session){
      presence[session] = {lastSeen:now, mode};
      await this.state.storage.put('activePresence', presence);
    }
    return presence;
  }

  async clearPresence(url){
    const session = (url.searchParams.get('session') || '').replace(/[^a-zA-Z0-9_-]/g,'').slice(0,80);
    if(session){
      const presence = (await this.state.storage.get('activePresence')) || {};
      if(presence[session]){
        delete presence[session];
        await this.state.storage.put('activePresence', presence);
      }
      const waiting = await this.state.storage.get('matchWaiting');
      if(waiting && waiting.session === session){
        await this.state.storage.delete('matchWaiting');
      }
    }
    const active = await this.prunePresence();
    return new Response(JSON.stringify({ok:true, activePlayers:Object.keys(active).length}), {headers:{'Content-Type':'application/json', ...CORS_HEADERS}});
  }

  async matchStatus(request){
    const url = new URL(request.url);
    const now = Date.now();
    let waiting = await this.state.storage.get('matchWaiting');
    if(waiting && now - waiting.createdAt > 90000){
      await this.state.storage.delete('matchWaiting');
      waiting = null;
    }
    const presence = await this.touchPresence(url);
    return new Response(JSON.stringify({
      activePlayers: Object.keys(presence).length,
      waiting: !!waiting
    }), {headers:{'Content-Type':'application/json', ...CORS_HEADERS}});
  }

  async waitingRoomCanAcceptGuest(waiting){
    try{
      const code = waiting && waiting.code;
      if(!code) return false;
      const waitingId = this.env.AUCTION_ROOMS.idFromName(code);
      const waitingStub = this.env.AUCTION_ROOMS.get(waitingId);
      const statusRes = await waitingStub.fetch('https://room/status', {method:'GET'});
      if(!statusRes.ok) return false;
      const statusData = await statusRes.json();
      // If a waiting match room exists and has no guest yet, pair the next player into it.
      // Do not require the host websocket to already be connected; otherwise two users can
      // end up waiting in separate rooms if the first user's connection is slow.
      return !!(statusData.exists && !statusData.over && statusData.status === 'waiting' && !statusData.full);
    }catch(e){
      return false;
    }
  }

  async matchFind(request){
    let payload = {};
    try{ payload = await request.json(); }catch(e){}
    const now = Date.now();
    const url = new URL(request.url);
    const session = (url.searchParams.get('session') || '').replace(/[^a-zA-Z0-9_-]/g,'').slice(0,80);
    const presence = await this.touchPresence(url);
    let waiting = await this.state.storage.get('matchWaiting');
    if(waiting && now - waiting.createdAt > 90000){
      await this.state.storage.delete('matchWaiting');
      waiting = null;
    }

    // Keep one single waiting match room. If it exists and can accept a guest,
    // pair the next player into that room even if the first player's WebSocket
    // has not connected yet. This prevents two people from waiting in separate rooms.
    if(waiting && waiting.code){
      if(waiting.session && session && waiting.session === session){
        return new Response(JSON.stringify({
          code: waiting.code,
          side: 'host',
          waiting: true,
          activePlayers: Object.keys(presence).length
        }), {headers:{'Content-Type':'application/json', ...CORS_HEADERS}});
      }

      // Pair the next distinct searcher into the existing waiting room immediately.
      // This is intentionally optimistic: it prevents two users from getting stuck
      // in separate waiting rooms because of a transient status check or a slow
      // WebSocket connection from the first player.
      await this.state.storage.delete('matchWaiting');
      return new Response(JSON.stringify({
        code: waiting.code,
        side: 'guest',
        waiting: false,
        activePlayers: Object.keys(presence).length
      }), {headers:{'Content-Type':'application/json', ...CORS_HEADERS}});
    }

    const code = makeCode();
    const id = this.env.AUCTION_ROOMS.idFromName(code);
    const stub = this.env.AUCTION_ROOMS.get(id);
    const initRes = await stub.fetch(`https://room/init?code=${code}&matchType=online`, {method:'POST'});
    if(!initRes.ok){
      return new Response('Could not create match room', {status:500, headers:CORS_HEADERS});
    }

    await this.state.storage.put('matchWaiting', {code, createdAt:now, session});
    return new Response(JSON.stringify({
      code,
      side: 'host',
      waiting: true,
      activePlayers: Object.keys(presence).length
    }), {headers:{'Content-Type':'application/json', ...CORS_HEADERS}});
  }

  async handleWebSocket(request){
    const url = new URL(request.url);
    const side = url.searchParams.get('side');
    if(!this.game) return new Response('Room does not exist', {status:404});
    const sides = gameSides(this.game);
    if(!sides.includes(side)) return new Response('Invalid side', {status:400});
    if(!this.game.botSides) this.game.botSides = makeSideMap(sides, ()=>false);
    if(!this.game.botReplaced) this.game.botReplaced = makeSideMap(sides, ()=>false);
    if(!this.game.botOriginalNames) this.game.botOriginalNames = makeSideMap(sides, ()=>'');
    if(this.game.joined && this.game.joined[side] && this.sessions.has(side) && !this.game.over){
      return new Response('That seat is already connected', {status:409, headers:CORS_HEADERS});
    }
    if(this.game.joined && this.game.joined[side] && side !== 'host' && !this.game.over && !this.sessions.has(side)){
      // Allow reconnects to an already-joined seat after disconnect.
    }else if(this.game.joined && this.game.joined[side] && side !== 'host' && !this.game.over){
      return new Response('That seat is already taken', {status:409, headers:CORS_HEADERS});
    }

    const playerName = cleanPlayerName(url.searchParams.get('name') || '');
    if(!this.game.names) this.game.names = makeSideMap(sides, ()=>'');
    const wasBotSeat = !!(this.game.botSides && this.game.botSides[side]);
    if(wasBotSeat){
      this.game.botSides[side] = false;
      if(this.game.botReplaced) this.game.botReplaced[side] = false;
      addLog(this.game, 'sys', `${playerName || this.game.botOriginalNames?.[side] || label(side)} reconnected and took over ${this.game.names[side] || 'Bot'}.`);
    }
    if(playerName) this.game.names[side] = playerName;
    else if(wasBotSeat) this.game.names[side] = (this.game.botOriginalNames && this.game.botOriginalNames[side]) || '';

    const pair = new WebSocketPair();
    const [client, server] = Object.values(pair);
    server.accept();

    if(this.sessions.has(side)){
      try{ this.sessions.get(side).close(1012, 'Replaced by new connection'); }catch(e){}
    }
    this.sessions.set(side, server);
    if(!this.game.joined) this.game.joined = makeSideMap(sides, s=>s === 'host' || s === 'guest');
    const wasJoined = !!this.game.joined[side];
    this.game.joined[side] = true;
    if(side === 'guest') this.game.guestJoined = true;
    if(!wasJoined && side !== 'host'){
      addLog(this.game, 'sys', this.game.pretendBot && side === 'guest' ? 'Bot joined.' : `${label(side)} joined.`);
    }
    if(allExpectedTeamsJoined(this.game) && this.game.status === 'waiting'){
      this.game.status = 'active';
      addLog(this.game, 'sys', `${this.game.maxTeams || 2} teams joined. The draft is ready.`);
    }
    await this.save();
    server.addEventListener('message', async (event)=>{
      let msg; try{ msg = JSON.parse(event.data); }catch(e){ return; }
      await this.handleAction(side, msg);
    });
    server.addEventListener('close', async ()=>{
      this.sessions.delete(side);
      if(this.game && this.game.status === 'active' && !this.game.over){
        addLog(this.game, 'sys', `${label(side)} disconnected. Waiting for them to reconnect.`);
        await this.save();
      }
      this.broadcast();
    });
    server.addEventListener('error', async ()=>{
      this.sessions.delete(side);
      if(this.game && this.game.status === 'active' && !this.game.over){
        addLog(this.game, 'sys', `${label(side)} disconnected. Waiting for them to reconnect.`);
        await this.save();
      }
      this.broadcast();
    });
    this.broadcast();
    return new Response(null, {status:101, webSocket:client});
  }
  async handlePlayAgain(side){
    if(!this.game || !this.game.over){ this.broadcast(); return; }
    const sides = gameSides(this.game);
    const code = this.game.code;
    const previousNames = this.game.names || makeSideMap(sides, ()=>'');
    const previousMatchType = this.game.matchType || 'friend';
    const previousPretendBot = !!this.game.pretendBot;
    const previousCustomOrderNames = this.game.customOrderNames || null;
    const previousMaxTeams = this.game.maxTeams || 2;
    const previousBudget = this.game.startingBudgets?.host || DEFAULT_BUDGET;
    const customPoolResult = previousCustomOrderNames ? buildCustomPoolResult(previousCustomOrderNames) : null;
    const freshGame = newRoomGame(code, {
      matchType: previousMatchType,
      maxTeams: previousMaxTeams,
      budget: previousBudget,
      pretendBot: previousPretendBot,
      customPool: customPoolResult && customPoolResult.ok ? customPoolResult.pool : null,
      customOrderNames: customPoolResult && customPoolResult.ok ? customPoolResult.customOrderNames : null
    });
    const freshSides = gameSides(freshGame);
    freshGame.names = makeSideMap(freshSides, s=>this.sessions.has(s) ? (previousNames[s] || '') : '');
    freshGame.joined = makeSideMap(freshSides, s=>this.sessions.has(s));
    freshGame.guestJoined = !!freshGame.joined.guest;
    freshGame.status = allExpectedTeamsJoined(freshGame) ? 'active' : 'waiting';
    addLog(freshGame, 'sys', `Play Again opened the same room code: ${code}.`);
    if(freshGame.status === 'active') addLog(freshGame, 'sys', `${freshGame.maxTeams || 2} teams joined. The draft is ready.`);
    this.game = freshGame;

    await this.save();
    this.broadcast();
  }

  async handleBotControl(side, msg){
    if(!this.game || this.game.over || (this.game.matchType || 'friend') === 'online'){
      this.broadcast();
      return;
    }
    const connected = this.humanConnectedMap();
    const action = msg && msg.action;
    if(action === 'add') addBotToGame(this.game, connected);
    else if(action === 'remove') removeBotFromGame(this.game);
    await this.save();
    this.broadcast();
  }

  async handleAction(side, msg){
    if(msg && (msg.type === 'playAgain' || msg.type === 'rematch')){ await this.handlePlayAgain(side); return; }
    if(msg && msg.type === 'botControl'){ await this.handleBotControl(side, msg); return; }
    if(!this.game || this.game.over){ this.broadcast(); return; }
    if(this.game.status !== 'active'){ this.broadcast(); return; }
    if(!gameSides(this.game).every(s=>this.sessions.has(s) || !!(this.game.botSides && this.game.botSides[s]))){ this.broadcast(); return; }
    if(msg.type === 'reveal'){ if(!this.game.auction) startRound(this.game); }
    else if(msg.type === 'bid') processBid(this.game, side, msg.amount);
    else if(msg.type === 'pass') processPass(this.game, side);
    await this.save();
    this.broadcast();
  }
  async alarm(){
    await this.load();
    if(!this.game || !this.game.auction || !this.game.auction.autoFill || this.game.over) return;
    const side = this.game.auction.turn;
    resolveAutoFillPick(this.game, side, 1);
    await this.save();
    this.broadcast();
  }
  clearAutoFillTimer(){
    if(this.autoFillTimer){
      clearTimeout(this.autoFillTimer);
      this.autoFillTimer = null;
    }
    this.autoFillTimerKey = null;
  }
  clearAuctionTimer(){
    if(this.auctionTimer){
      clearTimeout(this.auctionTimer);
      this.auctionTimer = null;
    }
    this.auctionTimerKey = null;
  }
  clearBotActionTimer(){
    if(this.botActionTimer){
      clearTimeout(this.botActionTimer);
      this.botActionTimer = null;
    }
    this.botActionTimerKey = null;
  }

  autoFillKey(){
    if(!this.game || !this.game.auction || !this.game.auction.autoFill) return null;
    const sides = gameSides(this.game);
    return `${this.game.auction.playerId}:${this.game.auction.turn}:${sides.map(s=>this.game.rosters[s].length).join(',')}:${sides.map(s=>this.game.slots[s]).join(',')}`;
  }
  timedAuctionKey(){
    if(!this.game || !this.game.auction || this.game.auction.autoFill || !isMultiTeamAuction(this.game)) return null;
    const auction = this.game.auction;
    const sides = gameSides(this.game);
    return [
      auction.playerId,
      auction.bid,
      auction.bidder || '',
      sides.map(s=>auction.openDeclines && auction.openDeclines[s] ? '1' : '0').join(''),
      sides.map(s=>auction.passDeclines && auction.passDeclines[s] ? '1' : '0').join('')
    ].join(':');
  }
  botActionKey(){
    if(!this.game || !this.game.auction || this.game.over) return null;
    const actor = nextBotActor(this.game);
    if(!actor) return null;
    const auction = this.game.auction;
    const sides = gameSides(this.game);
    return [
      actor,
      auction.playerId,
      auction.bid,
      auction.bidder || '',
      auction.turn || '',
      sides.map(s=>auction.openDeclines && auction.openDeclines[s] ? '1' : '0').join(''),
      sides.map(s=>auction.passDeclines && auction.passDeclines[s] ? '1' : '0').join(''),
      sides.map(s=>this.game.rosters[s].length).join(',')
    ].join(':');
  }

  scheduleAutoFillTimer(){
    if(!this.game || !this.game.auction || !this.game.auction.autoFill || this.game.over){
      this.clearAutoFillTimer();
      try{ this.state.storage.deleteAlarm(); }catch(e){}
      return;
    }

    const key = this.autoFillKey();
    if(this.autoFillTimer && this.autoFillTimerKey === key) return;

    this.clearAutoFillTimer();
    this.autoFillTimerKey = key;

    // Normal in-memory timer for active websocket sessions.
    this.autoFillTimer = setTimeout(async ()=>{
      const expectedKey = this.autoFillTimerKey;
      this.autoFillTimer = null;
      this.autoFillTimerKey = null;
      await this.load();
      if(!this.game || !this.game.auction || !this.game.auction.autoFill || this.autoFillKey() !== expectedKey) return;
      const side = this.game.auction.turn;
      resolveAutoFillPick(this.game, side, 1);
      await this.save();
      this.broadcast();
    }, 1500);

    // Durable Object alarm fallback so the required pick still resolves even if
    // the in-memory timer does not fire in production.
    try{ this.state.storage.setAlarm(Date.now() + 1500); }catch(e){}
  }

  scheduleTimedAuctionTimer(){
    if(!this.game || !this.game.auction || this.game.auction.autoFill || this.game.over || !isMultiTeamAuction(this.game)){
      this.clearAuctionTimer();
      return;
    }

    const key = this.timedAuctionKey();
    if(this.auctionTimer && this.auctionTimerKey === key) return;

    this.clearAuctionTimer();
    this.auctionTimerKey = key;
    this.auctionTimer = setTimeout(async ()=>{
      const expectedKey = this.auctionTimerKey;
      this.auctionTimer = null;
      this.auctionTimerKey = null;
      await this.load();
      if(!this.game || !this.game.auction || this.game.over || this.timedAuctionKey() !== expectedKey) return;
      const bidder = this.game.auction.bidder;
      if(bidder && this.game.auction.bid > 0){
        resolveAuction(this.game, bidder);
      }else{
        skipAuctionPlayerAndContinue(this.game);
      }
      await this.save();
      this.broadcast();
    }, MULTI_TEAM_AUCTION_TIMEOUT_MS);
  }

  scheduleBotActions(){
    if(!this.game || this.game.status !== 'active' || this.game.over || !nextBotActor(this.game)){
      this.clearBotActionTimer();
      return;
    }

    const key = this.botActionKey();
    if(this.botActionTimer && this.botActionTimerKey === key) return;

    this.clearBotActionTimer();
    this.botActionTimerKey = key;
    this.botActionTimer = setTimeout(async ()=>{
      const expectedKey = this.botActionTimerKey;
      this.botActionTimer = null;
      this.botActionTimerKey = null;
      await this.load();
      if(!this.game || this.game.over || this.botActionKey() !== expectedKey) return;
      const actor = nextBotActor(this.game);
      if(actor) runBotMove(this.game, actor);
      await this.save();
      this.broadcast();
    }, BOT_ACTION_DELAY_MS);
  }


  broadcast(){
    if(!this.game) return;
    const connected = this.connectedMap();
    for(const [side, ws] of this.sessions.entries()){
      try{ ws.send(JSON.stringify(stateForClient(this.game, side, connected))); }catch(e){}
    }
    this.scheduleAutoFillTimer();
    this.scheduleTimedAuctionTimer();
    this.scheduleBotActions();
  }
}

export default {
  async fetch(request, env, ctx){
    const url = new URL(request.url);

    if (url.hostname.endsWith(".workers.dev")) {
      url.hostname = "startingfive.tkimify.com";
      url.protocol = "https:";
      return Response.redirect(url.toString(), 302);
    }
    
    if(request.method === 'OPTIONS') return new Response(null, {headers:CORS_HEADERS});
    if(url.pathname === '/api/match/status' && request.method === 'GET'){
      const id = env.AUCTION_ROOMS.idFromName('__MATCHMAKER__');
      return env.AUCTION_ROOMS.get(id).fetch(`https://match/match/status${url.search}`, {method:'GET'});
    }
    if(url.pathname === '/api/match/leave' && request.method === 'POST'){
      const id = env.AUCTION_ROOMS.idFromName('__MATCHMAKER__');
      return env.AUCTION_ROOMS.get(id).fetch(`https://match/match/leave${url.search}`, {method:'POST'});
    }
    if(url.pathname === '/api/match/find' && request.method === 'POST'){
      const body = await request.text();
      const id = env.AUCTION_ROOMS.idFromName('__MATCHMAKER__');
      return env.AUCTION_ROOMS.get(id).fetch(`https://match/match/find${url.search}`, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body
      });
    }
    if(request.method === 'POST' && url.pathname === '/api/room/create'){
      const code = makeCode();
      const body = await request.text();
      const id = env.AUCTION_ROOMS.idFromName(code);
      const stub = env.AUCTION_ROOMS.get(id);
      const initRes = await stub.fetch(`https://room/init?code=${code}`, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body
      });
      if(!initRes.ok) return new Response(await initRes.text(), {status:initRes.status, headers:CORS_HEADERS});
      return new Response(JSON.stringify({code}), {headers:{'Content-Type':'application/json', ...CORS_HEADERS}});
    }
    const statusMatch = url.pathname.match(/^\/api\/room\/([A-Z0-9]+)\/status$/i);
    if(statusMatch){
      const code = statusMatch[1].toUpperCase();
      const id = env.AUCTION_ROOMS.idFromName(code);
      return env.AUCTION_ROOMS.get(id).fetch(request);
    }
    const wsMatch = url.pathname.match(/^\/api\/room\/([A-Z0-9]+)\/ws$/i);
    if(wsMatch){
      const code = wsMatch[1].toUpperCase();
      const id = env.AUCTION_ROOMS.idFromName(code);
      return env.AUCTION_ROOMS.get(id).fetch(request);
    }
    // If static assets are bound, serve the site from this same Worker.
    if(env.ASSETS) return env.ASSETS.fetch(request);
    return new Response('Starting Five multiplayer Worker is running.', {headers:CORS_HEADERS});
  }
};
