# Pokedex
Pokedex web app using PokeAPI that displays data on species of pokemon. The user can click on each pokemon to get information about it's stats, and the pokemon are filtered by generation (includes generations 1-8).

# Screenshots

![image](https://user-images.githubusercontent.com/54284594/120904769-e565c200-c61b-11eb-8131-c1104bc8c91f.png)

![image](https://user-images.githubusercontent.com/54284594/120904794-0fb77f80-c61c-11eb-9741-b5c4440c0946.png)

![image](https://user-images.githubusercontent.com/54284594/120904819-370e4c80-c61c-11eb-97fa-fda5176ae2ce.png)

# How To Run
* Type "npm run dev" in the folder's directory

# Custom Cache
This application uses a custom server side cache, which pulls all the data from the api when the server starts. It then supplies all the data from this custom cache to avoid making api calls too often.

# Technologies Used
* HTML, CSS, JavaScript
* ReactJS
* API: PokeAPI
