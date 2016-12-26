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
    "skills": ["Awesome", "Creative", "Responsible", "Destructive"],
    "bioPic": "images/fry.jpg"

};


var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);


var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").prepend(formattedLocation);

var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").prepend(formattedMobile);

var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);

var github = bio.contacts.github;
var formattedGithub = HTMLgithub.replace("%data%", github);
$("#topContacts").append(formattedGithub);

var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMessage);

var bioPic = bio.bioPic;
var formattedBio = HTMLbioPic.replace("%data%", bioPic);
$("#header").append(formattedBio);

if(bio.skills.length > 0){

    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
}

/*-------Bio ends here--------*/


/*-------Education starts from here--------*/

var education = {
    "schools": [
        {
            "name": "Deenbandhu Chhotu Ram University of Science and Technology",
            "location": "Murthal, Haryana",
            "degree": "B.Tech",
            "majors": ["CS"],
            "dates": 2016,
            "url": "http://example.com"
        },
        {
            "name": "Govt. Polytechnic Jhajjar",
            "location": "Jhajjar, Haryana",
            "degree": "Diploma",
            "majors": ["CS"],
            "dates": 2011,
            "url": "http://example.com"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front End Nanodegree",
            "school": "Udacity",
            "dates": "2016",
            "url": "http://udacity.com"
        },
        {
            "title": "Introduction to Python MITx",
            "school": "edx",
            "year": "2015",
            "url": "http://edx.org"
        }
    ]
};

education.display = function(){
    education.schools.forEach(function(school){
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", school.name);
        $(".education-entry:last").append(formattedName);

        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        $(".education-entry:last").append(formattedDegree);

        var formattedschoolDates = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedschoolDates);

        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(formattedschoolLocation);

        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry:last").append(formattedschoolMajor);

        var formattedurl = HTMLonlineURL.replace("%data%", school.url);


        /*if (project.images.length > 0) {

            project.images.forEach(function(image){
                var formattedImage = HTMLprojectImage.replace("%data%", project.images);
                $(".education-entry:last").append(formattedImage);
            });
        }*/
    });
};

education.display();

/*-------Education ends here--------*/


/*-------Work starts from here--------*/

var work = {
    jobs:[
        {
            "position" : "Intern",
            "employer" : "Fluid Operations AG",
            "location" : "Walldorf, Germany",
            "dates" : "June 2015 - August 2015",
            "description" : "Assisted R&D in the QA phase of Information Workbench and eCloudManager 6.1 product release by testing & bugfixing. Analyzed cloud automation workflow and contributed in writing and update of technical documentation."
        }
    ]
};

function displayWork(){
    work.jobs.forEach(function(job){
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.position);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", job.dates);
    $(".work-entry:last").append(formattedDates);

    var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
    $(".work-entry:last").append(formattedLocation);

    var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
    $(".work-entry:last").append(formattedDescription);
});
}

displayWork();

/*-------Work ends here--------*/

/*$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});*/


/*-------Project starts from here--------*/

var projects = {
    "projects": [
        {
            "title" : "Building a Portfolio Site",
            "dates": "Dec-2016",
            "description" : "Assisted R&D in the QA phase of Information Workbench and eCloudManager 6.1 product release by testing & bugfixing. Analyzed cloud automation workflow and contributed in writing and update of technical documentation.",
            "images" : ["http://www.personal.psu.edu/users/n/y/nys5290/Project-Image.jpg",
            "http://www.personal.psu.edu/users/n/y/nys5290/Project-Image.jpg"]
        }
    ]
};

projects.display = function(){
    projects.projects.forEach(function(project){
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDescription);
        if (project.images.length > 0) {

            project.images.forEach(function(image){
                var formattedImage = HTMLprojectImage.replace("%data%", project.images);
                $(".project-entry:last").append(formattedImage);
            });
        }
    });
};

projects.display();

/*-------Project ends here--------*/


$("#mapDiv").append(googleMap);


/*function inName(name) {
    name = name.split(" ");
    console.log(name);
    name[1] = name.toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] +" "+name[1];
}

$("#main").append(internationalizeButton);*/





























/*var education = {};
education["name"] = "Deenbandhu Chhotu Ram University of Science and Technology";
education["years"] = "2013-2016";
education["city"] = " Murthal Sonipat, Haryana, India";

$("#main").append(work["position"]);
$("#main").append(education.name);
*/
