let firstName = "Jillian";
let firstNameCaps = firstName.toUpperCase();

displayDescription(firstNameCaps, "Future Full Stack Developer ");

function displayDescription(myName, myCareer, myDescription) {
    console.log("Name: " + myName);
    console.log("Career: " + myCareer);
    console.log("Description: " + myDescription + ".");
}


console.log("My Interests: ");

displayInterests("Mountains and Climbing"); 
displayInterests("Astronomy"); 
displayInterests("Muay Thai + Jiu Jitsu"); 
displayInterests("Moab, Utah"); 
displayInterests("Vietnamese Foods");


function displayInterests(myInterest) {
    console.log("*  " + myInterest); 
}

console.log("Past Work Experiences");

displayPosition("Bartender at Dread River Distillery");

displayPosition("Event Lead at Topgolf");

displayPosition("Photographer at Feel the Beat Entertainment");


function displayPosition(companyName, jobTitle, jobDescription) {
    console.log("*  " + companyName + ", " + jobTitle + " - " + jobDescription + ". ");
};


console.log("My Skills: ");

displaySkill("HTML", true); 
displaySkill("JavaScript", false); 
displaySkill("Bootstrap", false); 
displaySkill("CSS", true); 
displaySkill("Curiosity", true); 
displaySkill("Photoshop", true); 



function displaySkill(mySkill, Bam) {
    if(Bam == true) { 
        console.log("*  BAM: " + mySkill);
    } else if(Bam == false) {
        console.log("*  " + mySkill); 
    };
}








