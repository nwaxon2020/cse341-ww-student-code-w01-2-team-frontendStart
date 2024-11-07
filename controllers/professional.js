const mongodb = require("../dataBass/db");

/*const user1 = {

  "professionalName": "Nathan Birch",
  "nameLink": {
    "firstName": "Nathan",
    "url": "https://nathanbirch.netlify.app/"
  },
  
  "firstName": "Nathan",
  "primaryDescription": " is a professor at BYU-Idaho",
  "workDescription1": "He is a full-stack web developer and mobile application developer.",
  "workDescription2": "He teaches lots of programming and web development classes.",
  "linkTitleText": "Check out his work below",
  "linkedInLink": {
    "link": "https://www.linkedin.com/in/nathantbirch/",
    "text": "LinkedIn"
  },
  "githubLink": {
    "link": "https://github.com/nathanbirch",
    "text": "GitHub"
  },
  "contactText": "Feel free to contact him at birchn@byui.edu if you'd like for him to work for you!"
}*/

const getData = async (req, res, next) => {
    try {

        const db = await mongodb.getDataBase();
        
        //const dt = await db.collection("user").insertOne(user1);

        const data = await db.collection("user").find().toArray();
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(data); // we just need the first one (the only one)

    } catch (err) {
        console.error("Somthing went wrong", err);
        res.status(500).json({ message: "An error occurred while fetching data." });
    }

}

module.exports = {getData};