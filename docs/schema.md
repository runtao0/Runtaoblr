# Schema info

## Users
column Name     | data type | details
----------------|-----------|---------------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
description     | text      | not null, default = ""
profile_pic (link)| string  | not null, default = ""

## Posts
column Name     | data type | details
----------------|-----------|---------------------------
id              | integer   | not null, primary key
type            | integer   | not null, index, inclusion: ["text", "photo", "quote", "audio", "video"]
title           | string    | not null
content         | string (media = links) | not null
author_id       | integer   | not null, indexed, foreign key to users
previous_post_id| integer   | not null, indexed, default = id of self, foreign key to post
source_id       | integer   | not null, indexed self reference key

## Reblog count
column Name     | data type | details
----------------|-----------|---------------------------
id              | integer   | not null, primary key
post_id         | integer   | not null, indexed, foreign key to posts
count           | integer   | not null, default = 0


## Follows (I though follower and followee were too easy to confuse)
column Name     | data type | details
----------------|-----------|---------------------------
id              | integer   | not null, primary key
sheep_id        | integer   | not null, indexed, foreign key to users
sheperd_id      | integer   | not null, indexed, foreign key to users

## Likes
column Name     | data type | details
----------------|-----------|---------------------------
id              | integer   | not null, primary key
liked_post_id   | integer   | not null, indexed, foreign key to posts
liker_id        | integer   | not null, indexed, foreign key to users

## tags
column Name     | data type | details
----------------|-----------|---------------------------
id              | string    | not null, primary key
tag_string      | string    | not null, indexed indexed
tagged post     | integer   | not null, foreign key to posts

~~ in a world with more time i might consider making a reblog tree structure since tumblr has many reblog forks and parallel reblog chains while keeping a total reblog count ~~
