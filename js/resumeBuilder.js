/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
  "name": "Ronalson",
  "contacts": {
    "mobile": "21 99976503",
    "email": "contact@ronalson.com.br",
    "github": "https://github.com/ronalson",
    "twitter": "https://twitter.com/ronalson",
    "location": "Rio de Janeiro"
  },
  "welcomeMessage": "My name.reverse() is Noslanor.",
  "skills": ["HTML", "CSS", "JS", "Ruby", "Rails", "UX"],
  "biopic": "https://pbs.twimg.com/profile_images/784150112037658624/oDgwZhsQ_400x400.jpg",
  "display": function(){
    //code block
  }
};

var education = {
  "schools":
    [{
      "name": "UFES",
      "location": "Vitória - ES",
      "degree": "Communication",
      "majors": ["Advertising", "Design"],
      "dates": "2008-2012",
      "url": "http://ufes.br"
    },{
      "name": "Le Wagon",
      "location": "Rio de Janeiro - RJ",
      "degree": "Fullstack Developement",
      "majors": ["front-end", "backend", "ux" ],
      "dates": "2017",
      "url": "http://lewagon.com"
    }],
  "onlineCourses": [
    {
      "title": "Web Developement",
      "school": "Lynda.com",
      "dates": "2015-2016",
      "url": "https://lynda.com"
    },{
      "title": "Ruby Basics",
      "school": "codecademy.com",
      "dates": "2017",
      "url": "https://codecademy.com"
    }],
  "display": function() {

  }
};

var work = {
  "jobs": [{
    "employer": "mobCONTENT",
    "title": "Product Designer",
    "location": "Rio de Janeiro - RJ",
    "dates": "2013-in progress",
    "description": "abc"
  },{
    "employer": "Danza",
    "title": "Planner",
    "location": "Vitória - ES",
    "dates": "2010-2012",
    "description": "abc"
  },{
    "employer": "4Ps",
    "title": "Social Media",
    "location": "Vitória - ES",
    "dates": "2009-2010",
    "description": "abc"
  }],
  "display": function(){
    //code
  }
};

var projects = {
  "project": [{
    "title": "eTrilhas",
    "dates": "2016-2017",
    "description": "abc",
    "images": ["url-1", "url-2"]
  },{
    "title": "Museu do Amanhã",
    "dates": "2015-2016",
    "description": "abc",
    "images": ["url-1", "url-2"]
  },{
    "title": "Polissonorum",
    "dates": "2014-2015",
    "description": "abc",
    "images": ["url-1", "url-2"]
  }],
  "display": function(){

  }
};
