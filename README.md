# express ![Graphql](media/graphql.png) something
<p>
  <a href="#installation">Installation</a> |
  <a href="#Featured Databases">Featured Database</a> |
  <a href="#licenses">License</a>
  <br><br>
  <blockquote>
  	Graphql server for simple todo app (https://github.com/AdhityaRamadhanus/todomvc-react-graphql)
  	Built on top of expressjs backed by various database including nosql and sql
  </blockquote>
  <blockquote>
  	Since graphql is agnostic to the database used in the API, we can just provide any 'resolver' for each type of database to the graphql schema. This simple app is an example of mongodb, mysql, and apache cassandra resolver for graphql 
  </blockquote>
</p>

Installation
------------

* git clone https://github.com/AdhityaRamadhanus/express-graphql-something.git
* cd express-graphql-something
* npm install
* npm start
* define your .env files
* example of .env
```
NODE_ENV=development

MONGODB_URI='mongodb://username:password@localhost:27017/dbname'
MYSQL_URI='mysql://username:password@localhost:3306/dbname'
```


Featured Database
-----------------

* MongoDB
* Apache Cassandra (soon)
* MySQL

Licenses
--------

Everything in this repo is MIT License unless otherwise specified.

MIT © Adhitya Ramadhanus.
