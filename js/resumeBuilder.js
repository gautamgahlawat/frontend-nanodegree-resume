/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*var awesomeThoughts = "I am Gautam Gahlawat and I am awesome.";

//console.log(awesomeThoughts);

var email = "gautam@udacity.com";

var newEmail = email.replace("udacity", "gmail");

console.log(email);
console.log(newEmail);

var funThoughts = awesomeThoughts.replace("awesome", "fun");

$("#main").append(funThoughts);*/
/*var name = "Gautam Gahlawat";
var role = "Web Developer";*/
/*-------Bio starts from here--------*/
var bio = {
    "name": "Gautam Gahlawat",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+91-8447777456",
        "email": "gautam.gahlawat@gmail.com",
        "github": "gautamgahlawat",
        "twitter": "@gautamgahlawat",
        "location": "Delhi"
    },
    "welcomeMessage": "Hi welcome to my Resume, thanks for taking time to visit !!",
    "skills": ["Awesome", "Creative", "Responsible", "Dependable"],
    "biopic": "images/my-profile-pic.jpg"

};

bio.display = function() {

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);


    var location = bio.contacts.location;
    var formattedLocation = HTMLlocation.replace("%data%", location);

    var twitter = bio.contacts.twitter;
    var formattedTwitter = HTMLtwitter.replace("%data%", twitter);

    var mobile = bio.contacts.mobile;
    var formattedMobile = HTMLmobile.replace("%data%", mobile);

    var email = bio.contacts.email;
    var formattedEmail = HTMLemail.replace("%data%", email);

    var github = bio.contacts.github;
    var formattedGithub = HTMLgithub.replace("%data%", github);

    $("#topContacts, #footerContacts").prepend(formattedLocation);
    $("#topContacts, #footerContacts").append(formattedMobile);
    $("#topContacts, #footerContacts").append(formattedEmail);
    $("#topContacts, #footerContacts").append(formattedGithub);
    $("#topContacts, #footerContacts").append(formattedTwitter);


    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMessage);

    var biopic = bio.biopic;
    var formattedBio = HTMLbioPic.replace("%data%", biopic);
    $("#header").append(formattedBio);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        bio.skills.forEach(function(skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkill);
        });
    }
};

bio.display();

/*-------Bio ends here--------*/


/*-------Education starts from here--------*/

var education = {
    "schools": [{
            "name": "Deenbandhu Chhotu Ram University of Science and Technology",
            "location": "Murthal, Haryana",
            "degree": "B.Tech",
            "majors": ["CS"],
            "dates": "2013 - 2016",
            "url": "http://example.com"
        },
        {
            "name": "Govt. Polytechnic Jhajjar",
            "location": "Jhajjar, Haryana",
            "degree": "Diploma",
            "majors": ["CS"],
            "dates": "2008 - 2011",
            "url": "http://example.com"
        }
    ],
    "onlineCourses": [{
            "title": "Front End Nanodegree",
            "school": "Udacity",
            "dates": "Dec - 2016",
            "url": "http://udacity.com"
        },
        {
            "title": "Introduction to Python MITx",
            "school": "edx",
            "dates": "Jan - 2016",
            "url": "http://edx.org"
        }
    ]
};

education.display = function() {

    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", school.name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedNameDegree = formattedName + formattedDegree;
        $(".education-entry:last").append(formattedNameDegree);

        var formattedschoolDates = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedschoolDates);

        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(formattedschoolLocation);

        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry:last").append(formattedschoolMajor);
    });

    function displayonlineCourses() {
        $("#education").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(onlineCourse) {
            $("#education").append(HTMLschoolStart);

            var formattedonlineTitle = HTMLonlineTitle.replace("#", onlineCourse.url).replace("%data%", onlineCourse.title);
            var formattedonlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
            var formattedTitleShool = formattedonlineTitle + formattedonlineSchool;
            $(".education-entry:last").append(formattedTitleShool);
            var formattedonlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
            $(".education-entry:last").append(formattedonlineDates);
        });
    }

    displayonlineCourses();
};

education.display();

/*-------Education ends here--------*/


/*-------Work starts from here--------*/

var work = {
    jobs: [{
        "title": "Intern",
        "employer": "Fluid Operations AG",
        "location": "Walldorf, Germany",
        "dates": "June 2015 - August 2015",
        "description": "Assisted R&D in the QA phase of Information Workbench and eCloudManager 6.1 product release by testing & bugfixing. Analyzed cloud automation workflow and contributed in writing and update of technical documentation."
    }]
};

work.display = function() {

    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);
    });
};

work.display();

/*-------Work ends here--------*/


/*-------Project starts from here--------*/

var projects = {
    "projects": [{
        "title": "Portfolio Site",
        "dates": "Dec-2016",
        "description": "A fully responsive single web page portfolio site. Created as part of Udacity's FEND nanodegree",
        "images": ["images/197x148.gif"]
    }, {
        "title": "Developers Nation",
        "dates": "March-2016",
        "description": "The Project built by 4 people team as part of our college project. It was made to keep all student and developers alike aware of the new technologies.",
        "images": ["images/197x148.gif"]
    }]
};

projects.display = function() {

    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDescription);

        if (project.images.length > 0) {

            project.images.forEach(function(image) {
                var formattedImage = HTMLprojectImage.replace("%data%", project.images);
                $(".project-entry:last").append(formattedImage);
            });
        }
    });
};

projects.display();

/*-------Project ends here--------*/

/*-------Map------*/

$("#mapDiv").append(googleMap);