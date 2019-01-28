# README

1/14/19

This is a baseline I set up for a React app with a Redux state, React Router, and a Rails API, intended for deployment to Heroku. The intention is to use clones of this as a launching pad for future React apps.

Please note: the app assumes you are working from Ruby version 2.5.3.  To work from another version, you will have to update the Gemfile, but please make sure your version of Ruby is compatible with Heroku first, if you plan to deploy there.

This app also assumes you have basic stuff in place like bundle, npm, and the Heroku command line tools.

To get this baseline up and running:

1) From within the root directory, don't forget to run `git init .` to begin tracking changes with git.

2) Get the database up.  Nothing's moving forward without it.

  - Because the app is set up to be compatible with Heroku, it requires a Postgres database.  Before launching the development server, download the Postgres stand-alone app: https://postgresapp.com/. Then click on the icon make sure the Postgres app is running.

  - You'll probably want to change the names of the development and test databases (this is not necessary for production, as Heroku takes over at that point).  To do this, head to config/database.yml.  Under `development:` and `test:`, find the `database:` keys, and there you can rename your development and test databases, instead of `precedent_development` and `precedent_test` respectively.

  - Then in your terminal, from the root directory, run `rake db:setup`.  In the Postgress app, you should see your databases listed.

2) Get the Ruby libraries and Rails dependencies you'll need.

  - From the root directory, run `bundle install`.

3) Get the React dependencies you'll need.

  - `cd` into the '/client' directory.
  - From there, run `npm install`.
  - `cd` back into the root directory.

[UP TO: you can now run rake start from the parent directory to see that app runs.  Need to have a way to check that DB works though!]

- Will have to run rake db:setup
- Then set up migrations and run rake db:migrate.
- Or test that DB works but running rake db:migrate and rake db:seed
4) Git-ignored files you may want to manually add:



After forking and cloning the repository, and then cd'ing into the root directory, the command `rake start` will launch the app in development mode.

BUT the app depends on a Postgres database (in order to work with Heroku), so before trying to launch a development server, make sure you have Postgres running.  As of the current date, it seems the best way to get Postgres running is to download and run the Postgres stand-alone app: https://postgresapp.com/.  Then run `rake db:setup` in the terminal from the parent directory. After that, running `rake start` should get the React app running, with a few test routes handled by React Router, and a test message viewable in the console that the React app has connected with the Rails API.

There are a few components, reducers, routes, etc. labeled "test"-something under:

- app/controllers
- config/routes.rb
- client/src/reducers
- client/src/actions
- client/src/components_container
- client/src/components_presentational
- client/src/App.js

The preparation for deploying the app to Heroku generally followed the instructions [here](https://blog.heroku.com/a-rock-solid-modern-web-stack), but without adding Devise and ActiveAdmin.
