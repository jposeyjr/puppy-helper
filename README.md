![REPO SIZE](https://img.shields.io/github/repo-size/jposeyjr/puppy-helper.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/jposeyjr/puppy-helper.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/jposeyjr/puppy-helper.svg?style=social)

# Puppy Helper

## Description

Puppy-Helper is an app that is designed to help raise your new puppy! I found that with babies you could find a lot of applications to help you track almost anything. But this was not the case for puppies and I wanted to change that. With Puppy-Helper you are able to add multiple dogs and track their trick progress, napping times, food usage, vet visits, medicine and potty tracking.

Puppy-Helper was used to learn MongoDB and Thunk and is still in progress.

## Built With

React, React Hooks, Redux, MongoDB, Mongoose, Node, Express, Axios, React-Thunk, React-Router

## Set Up

You will need to do a yarn install to get all the dependencies, along with setting up a mongodb cluster, then you will need to create a .env file with the follow info replace generic one with the option from mongo.

```
PORT = 5000
MONGO_URL = 'mongodb+srv://username:password@clustername/dbname'
```

Open a new terminal and type in

```
yarn run server
```

\*Not the same one as above!
Open a new terminal and type in

```
yarn run client.
```

## Credits

Header Image by [aleksandra85foto](https://pixabay.com/users/aleksandra85foto-463403/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=635410")

React Filebase64 for showing me how to handle image files to base64. Refactored the code to allow more props to limit errors.
