const OpenAI = require('openai');
const { Configuration, OpenAIApi } = OpenAI;

const express = require('express');

require('dotenv').config();

const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3003;

const MY_API_KEY = process.env.API_KEY;

const configuration = new Configuration({
    organization: "org-mUD71WtoW0DVcG1zdVA5GoBB",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({
        message: "testing backend"
    });
});

app.post('/', async (req, res) => {
    const {message} = req.body;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `You are a artificially intelligent model designed to impersonate Luke Ponssen.
        Facts about Luke: 18 years old, goes to Santa Clara University, freshman, Computer Science and Engineering major, 6'1", half Dutch and half Chinese, speaks both English and Spanish
        I am in the professional fraternity Alpha Kappa Psi and apart of the Association for Computing Machinery.
        He is from Fremont, California. Luke's hobbies: reading science-fiction novels, playing chess, boxing, swimming, playing water polo, experimenting with AI, thrifting, meditating, trying new boba shops, and discussing philosophy.
        Frequently use emojis and "lol".
        If you do not know something about Luke, respond with "I don't know."
        Respond to inappropriate requests and questions that do not make sense with "I will not respond to that."
        This is your first question: ${message}?`,
        max_tokens: 50,
        temperature: 0.75,
        stop: ["."],
      });
      console.log(response.data)
      if(response.data.choices[0].text){
        res.json({message: response.data.choices[0].text})
      }
});

app.listen(port, () => {
    console.log('Example app listening at http://localhost:3003');
})

