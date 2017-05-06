/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
  "name": "Ronalson Filho",
  "role": "Front-end Developer",
  "contacts": {
    "mobile": "21 99976503",
    "email": "contact@ronalson.com.br",
    "github": "ronalson",
    "twitter": "@ronalson",
    "location": "Rio de Janeiro"
  },
  "welcomeMessage": "Digital creative and product designer. Currently studying to be a Front-end Developer.",
  "skills": ["HTML", "CSS", "JS", "Ruby", "Rails", "UX"],
  "biopic": "https://pbs.twimg.com/profile_images/784150112037658624/oDgwZhsQ_400x400.jpg"
};

var education = {
  "schools":
    [{
      "name": "UFES",
      "location": "Vitória - ES",
      "degree": "Bachelor",
      "majors": ["Communication"],
      "dates": "2008-2012",
      "url": "http://ufes.br"
    },{
      "name": "Le Wagon",
      "location": "Rio de Janeiro - RJ",
      "degree": "Post Graduation",
      "majors": ["Web Development"],
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
      "school": "Codecademy",
      "dates": "2017",
      "url": "https://codecademy.com"
    },{
      "title": "Front-end Nanodegree",
      "school": "Udacity",
      "dates": "2016-2017",
      "url": "https://udacity.com"
    }]
};

var work = {
  "jobs": [{
    "employer": "mobCONTENT",
    "title": "Product Designer",
    "location": "Rio de Janeiro - RJ",
    "dates": "2013 - in progress",
    "description": "Creative direction and management of projects combining content and new technologies. Development of projects using augmented and virtual reality, geolocation and beacons. Directed animation for holographic presentations and created transmedia projects for TV shows."
  },{
    "employer": "Danza",
    "title": "Planner",
    "location": "Vitória - ES",
    "dates": "2011 - 2013",
    "description": "Creation of the digital branch of a traditional agency. Development of business model and internal training in social media and digital strategies."
  },{
    "employer": "4Ps",
    "title": "Social Media",
    "location": "Vitória - ES",
    "dates": "Jan 2011 - Aug 2011",
    "description": "Content creation (copy & art) for social media, monthly analysis and report, online strategies and market studies."
  }]
};

var projects = {
  "projects": [{
    "title": "eTrilhas",
    "dates": "2016-2017",
    "description": "eTrilhas é uma plataforma digital que conecta praticantes de trilhas de aventura com guias profissionais.",
    "images": ["https://mir-s3-cdn-cf.behance.net/projects/202/e7234738491819.Y3JvcCwxMDYzLDgzMCwwLDA.jpg"]
  },{
    "title": "Museu do Amanhã",
    "dates": "2015-2016",
    "description": "Aplicativo desenvolvido para o Museu do Amanhã. Meu papel no projeto foi coordenar e gerenciar o desenvolvimento dos aplicativos para visitação e suporte ao conteúdo de acessibilidade.",
    "images": ["https://mir-s3-cdn-cf.behance.net/projects/202/75e6f037488499.Y3JvcCwxMDYzLDgzMCwwLDA.jpg"]
  },{
    "title": "Polissonorum",
    "dates": "2014-2015",
    "description": "O Polissonorum é uma plataforma de narrativas georrefenciadas criada na Mobcontent. O projeto recebeu patrocínio da Oi em 2013 para criação da versão Android e novos conteúdos. Meu papel no projeto foi coordenar o reposicionamento da marca e a criação da nova versão do aplicativo e conteúdos.",
    "images": ["https://mir-s3-cdn-cf.behance.net/projects/202/1f34c436183883.Y3JvcCwxMDYzLDgzMCwwLDA.jpg"]
  }]
};

bio.display = function(){
  $('#header').prepend(HTMLheaderRole.replace("%data%", bio.role));
  $('#header').prepend(HTMLheaderName.replace("%data%", bio.name));
  $('#header').append(HTMLbioPic.replace("%data%", bio.biopic));
  $('#header').append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

  for (var contact in bio.contacts ){
    if (bio.contacts.hasOwnProperty(contact)) {
      var formattedContact = HTMLcontactGeneric.replace("%contact%", contact).replace("%data%", bio.contacts[contact]);
      $("#topContacts").append(formattedContact);
      $("#footerContacts").append(formattedContact);
    }
  }

  if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
      $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
  }

};

work.display = function(){
  for (var job in work.jobs ) {
    if (work.jobs.hasOwnProperty(job)) {
      $("#workExperience").append(HTMLworkStart);
      var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

      $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle, formattedWorkDates, formattedWorkLocation, formattedWorkDescription);
    }
  }
};

projects.display = function(){
  for (var p = 0; p < projects.projects.length; p++){
    $('#projects').append(HTMLprojectStart);
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[p].title);
    var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.projects[p].dates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[p].description);

    $(".project-entry:last").append(formattedProjectTitle, formattedProjectDate, formattedProjectDescription);

    if (projects.projects[p].images.length > 0) {
      for (var i = 0; i < projects.projects[p].images.length; i++) {
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[p].images[i]);
        $(".project-entry:last").append(formattedProjectImage);
      }
    }
  }
};


education.display = function(){
  for (var school in education.schools ) {
    if (education.schools.hasOwnProperty(school)) {
      $("#education").append(HTMLschoolStart);
      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

      $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree, formattedSchoolDates, formattedSchoolLocation);

      if (education.schools[school].majors.length > 0) {
        for (var major in education.schools[school].majors) {
          if (education.schools[school].majors.hasOwnProperty(major)){
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
            $(".education-entry:last").append(formattedSchoolMajor);
          }
        }
      }
    }
  }

  if (education.onlineCourses.length > 0) {
    $("#education").append(HTMLonlineClasses);
    for (var course in education.onlineCourses) {
      if (education.onlineCourses.hasOwnProperty(course)){
        $("#education").append(HTMLonlineStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("#", education.onlineCourses[course].url);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        $(".online-course-entry:last").append(formattedOnlineTitle + formattedOnlineSchool, formattedOnlineDates, formattedOnlineUrl);
      }
    }
  }
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
