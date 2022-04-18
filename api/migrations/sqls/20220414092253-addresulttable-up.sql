/* Replace with your SQL commands */
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE results (
  "id" UUID NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
  "date" TIMESTAMP WITH TIME ZONE NOT NULL,
  "gameTime" INTEGER NOT NULL
);
