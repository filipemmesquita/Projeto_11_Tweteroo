import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const users=[]
const tweets=[]

app.post('/sign-up', (req, res) => {
  users.push(req.body)
  res.send("OK");
  });

app.post('/tweets', (req, res) => {
  tweets.push(req.body)
  res.send("OK");
});

app.get('/tweets', (req, res) => {
  const recentTweets=tweets.slice(tweets.length-10);
  const responseTweets=[];
  recentTweets.forEach((tweet,index) => {
    responseTweets[index]= { 
      username: tweet.username,
      tweet: tweet.tweet,
      avatar: users.find(user=>user.username===tweet.username).avatar
    }
  })
  res.send(responseTweets)
});

//
app.listen(5000);