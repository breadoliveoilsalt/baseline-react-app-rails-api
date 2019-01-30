# README

1/29/19

This is a baseline I set up for a React app with a Redux state, React Router, and a Rails API, intended for deployment to Heroku. The intention is to use clones of this as a launching pad for future React apps. In other words, this is a barebones working app with a "test" React component, Redux state, Router, Rails controller, and Rails model -- all of which are there simply to show that everything is all hooked up and working together.

I found very particularly helpful advice and guidance at these sites:
  - https://www.fullstackreact.com/articles/how-to-get-create-react-app-to-work-with-your-rails-api/
  - https://blog.heroku.com/a-rock-solid-modern-web-stack

Please note:

  - The app assumes you are working from Ruby version 2.5.3.  To work from another version, you will have to update the Gemfile, but please make sure your version of Ruby is compatible with Heroku first, if you plan to deploy there.

  - The app also assumes you have basic command line tools in place like bundle, npm, and Heroku.

  - The app does not implement Devise or ActiveAdmin.

To get this baseline app up and running:

1) Fork and clone the repository.

2) From within the root directory, don't forget to run `git init .` to begin tracking changes with git.

3) Get the database up.  Nothing's moving forward without it.

  - Because the app is set up to be compatible with Heroku, it requires a Postgres database.  Therefore, before launching the development server locally, please make sure you have downloaded the Postgres stand-alone app: https://postgresapp.com/. Then click on the icon make sure the Postgres app is running.

  - You'll probably want to change the names of the development and test databases (this is not necessary for production, as Heroku takes over at that point).  To change the names of the databases, head to config/database.yml.  Under `development:` and `test:`, find the `database:` keys, and there you can rename your development and test databases, instead of `precedent_development` and `precedent_test` respectively.

  - Then in your terminal, from the root directory, run `rake db:setup`.  In the Postgress app, you should see your databases listed.  Running `rake db:setup` will also migrate a Rails migration to initialize `TestModel` and will seed some TestModels with simple messages.  This is all to make sure the database and ActiveRecord are all synced up.  

4) Get the Ruby libraries and Rails dependencies you'll need.

  - From the root directory, run `bundle install`.

5) Get the React dependencies you'll need.

  - `cd` into the '/client' directory.
  - From there, run `npm install`.
  - `cd` back into the root directory.

6) Check that everything is working.

  - From the root directory, run `rake start`.  This will launch both the React front end and Rails API back end.
  - Head to localhost:3000. You should see something very simple: two links and a button that lets you add 1.  If you click the links and they work, React Router is up and running. If you click it the button and more 1s appear, Redux is up and running.

7) You might want to check things are working ok with Heroku.

7) Remove what you don't want.

  - There
[UP TO: you can now run rake start from the parent directory to see that app runs.  Need to have a way to check that DB works though!]
- When the home page loads, it makes a fetch request to the Rails API to test that the front end can connect with the API and that the DB is hooked up.  The Rails API has a TestController (which this automatic fetch request pings) and a TestModel (which is populated with some seed data - simple strings.)

- Will have to run rake db:setup.  This will set up the Postgres DB and kick off a migration with a TestModel, and also provide the seed data.
- If everything goes well and the DB and Model is connected, go to your browser's console and refresh the page.  You should see the following console log:

If you don't see this, you'll see a server error.  

- Make sure to run heroku command to seed database
X Then set up migrations and run rake db:migrate.
X Or test that DB works but running rake db:migrate and rake db:seed
4) Git-ignored files you may want to manually add:



After forking and cloning the repository, and then cd'ing into the root directory, the command `rake start` will launch the app in development mode.

BUT the app depends on a Postgres database (in order to work with Heroku), so before trying to launch a development server, make sure you have Postgres running.  As of the current date, it seems the best way to get Postgres running is to download and run the Postgres stand-alone app: https://postgresapp.com/.  Then run `rake db:setup` in the terminal from the parent directory. After that, running `rake start` should get the React app running, with a few test routes handled by React Router, and a test message viewable in the console that the React app has connected with the Rails API.

There are a number of components, reducers, routes, etc. labeled "test"-something. Feel free to keep them to make sure everything is hooked up, but you'll probably want to delete them at some point.  These "test" things appear in

- app/controllers -> test_controller.rb
- app/models -> test_model.rb
- config/routes.rb -> see generally
- client/src/reducers -> see generally
- client/src/actions -> testActions.js
- client/src/components_container -> testComponent.js
- client/src/components_presentational -> aboutTestComponent.js
- client/src/App.js -> see generally

The preparation for deploying the app to Heroku generally followed the instructions [here](https://blog.heroku.com/a-rock-solid-modern-web-stack), but without adding Devise and ActiveAdmin.
