const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Connection URL
const url = "mongodb://localhost:27017/abhishek_db";

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, client) {
  const db = client.db("abhishek_db");

  db.collection("tutorials")
    .insertMany([
      {
        title: "Back to the Future Part III",
        description:
          "Stranded in 1955, Marty McFly learns about the death of Doc Brown in 1885 and must travel back in time to save him. With no fuel readily available for the DeLorean, the two must figure how to escape the Old West before Emmett is murdered.",
        genre: "Action, Adventure, Drama",
	director: "Robert Zemeckis",
        published: "1990",
      },
      {
        title: "The Silence of the Lambs",
        description:
          "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
        genre: "Crime, Drama, Thriller",
        director: "Jonathan Demme",
        published: "1991",
      },
      {
        title: "The Last of the Mohicans",
        description:
          "Three trappers protect the daughters of a British Colonel in the midst of the French and Indian War",
        genre: "Action, Adventure, Drama, Romance, War",
        director: "Michael Mann",
        published: "1992",
      },
      {
        title: "The Nightmare Before Christmas",
        description:
          "Jack Skellington, king of Halloween Town, discovers Christmas Town, but his attempts to bring Christmas to his home causes confusion.",
        genre: "Animation, Family, Fantasy, Musical",
        director: "Henry Selick",
        published: "1993",
      },
      {
        title: "The Shawshank Redemption",
        description:
          "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        genre: "Drama",
        director: "Frank Darabont",
        published: "1994",
      },
      {
        title: "The Usual Suspects",
        description:
          "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.",
        genre: "Crime, Mystery, Thriller",
        director: "Bryan Singer",
        published: "1995",
      },
      {
        title: "The Rock",
        description:
          "A mild-mannered chemist and an ex-con must lead the counterstrike when a rogue group of military men, led by a renegade general, threaten a nerve gas attack from Alcatraz against San Francisco.",
        genre: "Action, Adventure, Thriller",
        director: "Michael Bay",
        published: "1996",
      },
      {
        title: "The Fifth Element",
        description:
          "In the colorful future, a cab driver unwittingly becomes the central figure in the search for a legendary cosmic weapon to keep Evil and Mr. Zorg at bay.",
        genre: "Action, Adventure, Sci-F",
        director: "Luc Besson",
        published: "1997",
      },
      {
        title: "The Truman Show",
        description:
          "An insurance salesman discovers his whole life is actually a reality TV show.",
        genre: "Comedy, Drama",
        director: "Peter Weir",
        published: "1998",
      },
      {
        title: "The Matrix",
        description:
          "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
        genre: "Action, Sci-Fi",
        director: "Lana Wachowski, Lilly Wachowski",
        published: "1999",
      },
      {
        title: "Meet the Parents",
        description:
          "Male nurse Greg Focker meets his girlfriend's parents before proposing, but her suspicious father is every date's worst nightmare.",
        genre: "Comedy, Romance",
        director: "Jay Roach",
        published: "2000",
      },
      {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        description:
          "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        genre: "Action, Adventure, Drama, Fantasy",
        director: "Peter Jackson",
        published: "2001",
      },
      {
        title: "The Lord of the Rings: The Two Towers",
        description:
          "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
        genre: "Action, Adventure, Drama, Fantasy",
        director: "Peter Jackson",
        published: "2002",
      },
      {
        title: "The Lord of the Rings: The Return of the King",
        description:
          "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        genre: "Action, Adventure, Drama, Fantasy",
        director: "Peter Jackson",
        published: "2003",
      },
      {
        title: "Eternal Sunshine of the Spotless Mind",
        description:
          "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
        genre: "Drama, Romance, Sci-Fi",
        director: "Michel Gondry",
        published: "2004",
      },
    ])
    .then(function (result) {
      // process result
    });

  assert.equal(null, err);
  client.close();
});
