---
layout: post
title:  "Learning REST: A week long interview project"
date:   2016-04-12 10:44:33 -0600
categories: test
---

## The assignment:

The task at hand is to create a REST API with support for CRUD
(create, read, update, delete) functionality. This needs to work for arbitrary JSON objects,
where each entry has a unique identifier.

## Base knowledge before starting this project

Before starting this, having just read the assignment description, I am left
with these questions:

1. What is a REST API? (yes, I first need to know what I'm building before
I build it).

2. Given this new knowledge of a REST API, what tools/tech stack am I going to
use to build it and how do I choose?

3. How do I evaluate the performance/quality of a REST API?

4. What do the HTTP Requests POST/PUT/GET/DELETE do and how do we test if they
are correct?

So, I actually didn't know ANYTHING about REST APIs until I started this
project. This is actually the best part! I get the opportunity to learn something
new. This involves learning both the concepts behind REST APIs and how to build them.
The learning + building combo is the best exercise in understanding.

## Choosing the stack

#### What language?

"Where do I start?"" would be the better question. I thought it would be smart
to start by picking the language I'm going to write this in. After I have this, I can choose the other parts of the stack I'll use based on their compatibility with the language.  I'm familiar with JavaScript and I've heard
of node.js before, so why not?  

#### What database?
Using Google as my guiding light, I came across RethinkDB(add link) because it had two qualities:

1. It was compatible with node.js

2. It had good documentation, with helpful docs specifically for HTTP Requests

Explicit documentation is crucial in this assignment because of the time constraint and my lack of familiarity with the technologies.

Awesome. Looks like I can cross off \#2 on my initial list of questions.


## Road bumps & how I solved them
After choosing the tools I was going to use and reading through the required docs,
I started writing some code. When trying to deploy my server using
`$ node server.js`

I would get an error, which returned this..

![](/images/reqopfailed.png "So sad")


Hmmm. Well, I thought I had handled the case where the table already exists?
Let's just handle this the same way we handled the other exception.
We add a check for this into our error handling.


![](/images/errorhandling.png "A potential fix...")

Now let's try again:

![](/images/initsuccess.png "1-800-OUT-HERE")

Success!

After a little bit of struggling, create, read and delete are working to the
specification. This is quite a bit of progress coming from almost no knowledge
of REST. The only trouble I'm having is with POST/update, which gives me two issues.

1. The JSON object malformed upon insert.

2. The result prints _just_ the new insertion and the key, but not the previously stored data.

## What I would add

During my testing of the API, I realized that a "findAll" function would be VERY
useful so that I could see all of my entries in the Rethink Database, making it
easier to keep track of. So that's exactly what I made. Now in addition to the
HTTP GET method, I could simply put

`$ curl -H "Accept: application/json" http://localhost:3000/objects`

(notice the missing key) to get all the data stored in the `/objects` table.

If a "findAll" method is helpful, it might follow that a "deleteAll" would be in
order. Although in some situations useful in flushing a database of test objects,
I deliberately left this function out for the same reasons you might not put the
"*launch nukes*" button next to the president's alarm clock. For the hypothetical
developer that would use this code, I don't want to provide an easy way to delete
potentially important data.
