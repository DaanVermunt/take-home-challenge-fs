# Full-stack Development Challenge
Welcome to the coding assessment for full-stack engineers at mijnverkoopmakelaar. The assessment consists of two parts: a coding challenge and a few theoretical architectural exercises. For the coding challenge, implement the described features. For the architectural exercises, you should prepare an answer which we will discuss in person. We recommend doing the coding challenge first, as the architectural exercises are formulated as hypothetical changes to the application you work on in the coding challenge.

# The coding challenge

## The challenge
We have created a small boilerplate app consisting of a small Express back-end and a React front-end.
It is up to you to implement a few extra features defined below under exercises. Good luck!

If there are uncertainties in the exercises, feel free to choose any interpretation and comment on it in your PR message.

## The setup

Before we start a quick explainer of the current project:
The app consists of a simple Express back-end (/apps/challenge-be) connected to a SQLite database (/apps/challenge-be/data/superheroes.db).
The backend has a single exposed route (/apps/challenge-be/src/routes.ts) which returns a list of superhero objects retrieved from the database

Next to a `Superhero` table the database also consists of a `Like` table. All relevant columns are defined as interfaces in the db service. (/apps/challenge-be/src/service/db.ts)

The front-end is a plain React app. In the app directory (/apps/challenge-fe/src/app) you can the find `Hero` and `Like` service, which interact with the back-end (/apps/challenge-fe/src/app/services). You can also find the heroes pages which renders as the root page (/apps/challenge-fe/src/app/pages/Heroes.tsx), which renders a list of heroes retrieved from the backend. Each hero is rendered in a Hero card (/apps/challenge-fe/src/app/components/HeroCard.tsx). All styling is implemented using plain css.

### Prerequisites
Make sure you have a working version of npm and node installed

### Run application
1. Install packages `npm i`
2. Run application `npm run dev`
3. The application can be visited on `localhost:4200` and the api is exposed on `localhost:3333/api`


## Exercises

### Exercise 1
Implement the hero card (/challenge-fe/src/app/components/HeroCard.tsx) the card with the following specs:
    - Should display the name of a hero

    - The border color should be based on the nature of the hero (`biography_nature`)
        - Green for good
        - Red for bad
        - Grey for neutral or unclear

    - Should display the gender
        - M for male
        - F for female
        - "-" if not defined

    - Each card should be spaced 1 rem appart 
    - The name and gender should be on one line
    - The name of the highest skill should be on a new line
    - The lines should be spaced .25 rem apart
    - The text should be left aligned

### Exercise 2
Add pagination to the list of hero cards
    - A next and previous page button should be added to the application
    - When there is no next page or previous page, the buttons should be disabled

### Exercise 3
Add the number of likes of each hero to the card
    - Add the number of likes to the hero card
    - The numer of likes should be on a new line
    - Sort the cards based on the number of likes a hero has descending

### Exercise 4
Add a like button to the hero card, which adds a like for this hero
    - Add a like button
    - Add an input field to the app where you can set your name
    - Changing your name should update which heroes you have already liked
    - When you have liked the hero the button should be disabled

### Exercise 5
Implement a very simple recommender system
    - Add a button to the application which switches the sorting based on number of likes to sorting based on a recommender system
    - The recommender system should be based on your previous likes
    - Sort by which heroes you will most likely be to also like (filter heroes already liked)
    - Be creative but keep it simple

# The architectural exercises
While doing the architectural exercises, you should ignore any existing setup. You may act as if changing the database or backend language is costless.

### Exercise 1
Let's say we need to create one page for each hero in the database. The business side of the application told us that every millisecond counts. Where would you make changes to the current architecture?

### Exercise 2
Now let's say you have the same challenge, but you do not have control over the Hero API, and the response time of this API is > 2000 ms. How would you make changes to the architecture?

### Exercise 3
Now let's say you have implemented a recommender system that is very good at predicting the likes of a user. The only problem is that it takes about 5 minutes (and about 10 cents of compute cost) to compute the recommender function. After it is computed for a user, you can use it as cheaply as multiplying some numbers to get a probability on how likely a user is to like a given hero. i.e.

1. f = g(likes_of_user_a) // takes 5 minutes to compute
2. prob_of_like_hero = f(hero) // very cheep function

What recommendations on the system's behavior would you give to the designers, and how would you architecturally set this up?
