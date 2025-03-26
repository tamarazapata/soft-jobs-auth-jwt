CREATE DATABASE softjobs;

\c softjobs;

CREATE TABLE users (
  id        SERIAL        NOT NULL,
  email     VARCHAR(50)   NOT NULL  UNIQUE,
  password  VARCHAR(60)   NOT NULL,
  rol       VARCHAR(25)   NOT NULL,
  lenguaje  VARCHAR(20)   NOT NULL,
  PRIMARY KEY (id)
);
