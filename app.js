$(".menu-bar").on("click",function(){
    $(".sidebar").addClass("active");
});
$(".close-detail").on("click",function(){
    $(".sidebar").removeClass("active");
});
  // Get the container element where the cards will be added
const container = document.querySelector("#wrapper");
// Define an array of job data objects
const jobData = [   { id: 1, jobTitle: "Web Developer", salary: "$350k",link:"https://www.google.com", company:"Google", description:"kinh fcythf iiugred oo",location:"Trichy",time:"9:30AM", jobtype:"full-time" },
{ id: 2, jobTitle: "Software Engineer", salary: "$400k",link:"https://www.twitter.com", company:"Twitter", description:"kinh fcythf iiugred oo",location:"Chennai",time:"9:30AM", jobtype:"full-time" },
{ id: 3, jobTitle: "Data Analyst", salary: "$250k",link:"https://www.amazon.com", company:"Amazon", description:"kinh fcythf iiugred oo",location:"Delhi",time:"12:30AM", jobtype:"full-time" },{ id: 1, jobTitle: "Web Developer", salary: "$350k", companylogo:"img.png", company:"Google", description:"kinh fcythf iiugred oo",location:"Trichy",time:"9:30AM", jobtype:"full-time" },  { id: 2, jobTitle: "Software Engineer", salary: "$400k", companylogo:"img.png", company:"Tiktok", description:"kinh fcythf iiugred oo",location:"Trichy",time:"9:30AM", jobtype:"full-time" },  { id: 3, jobTitle: "Data Analyst", salary: "$250k", companylogo:"img.png", company:"Google", description:"kinh fcythf iiugred oo",location:"Trichy",time:"9:30AM", jobtype:"full-time" },
{ id: 4,jobTitle: "Marketing Specialist",salary: "$300k",link:"https://www.apple.com",company: "Apple",description: "This is a marketing specialist role.",location: "San Francisco",time: "10:00AM",jobtype: "full-time"}];
// Generate HTML for each job card using map() function
const jobCardsHTML = jobData.map((job) => {
  return `
    <div class="wrapper" id="wrapper${job.id}">
      <div class="card">
        <div class="card-left bg">
          <img id="companylogo" src="ASEN.svg" alt="img">
        </div>
        <div class="card-center">
          <h3 class="company" id="company">${job.company}</h3>
          <p class="card-detail" id="description">${job.description}</p>
          <p class="card-loc" id="location"><ion-icon name="location-outline"></ion-icon>${job.location}</p>
          <div class="card-sub">
            <p id="time"><ion-icon name="today-outline"></ion-icon>${job.time}</p>
            <p id="jobtype"><ion-icon name="hourglass-outline"></ion-icon>${job.jobtype}</p>
            <p><ion-icon name="people-outline"></ion-icon>99+ Applicants</p>
          </div>
        </div>
        <div class="card-right">
          <div class="card-tag">
            <h5>Designation</h5>
            <a href="#" id="jobname">${job.jobTitle}</a>
            <a href="${job.link}" target="_blank" id="apply"></a>
          </div>
          <div class="card-salary">
            <p><b id="salary">${job.salary}</b><span>/ year</span></p>
          </div>
        </div>
      </div>
    </div>
  `;
});
// Add the generated HTML to the container element
container.innerHTML = jobCardsHTML.join("");

document.querySelectorAll('.card').forEach(jobCard => {
    jobCard.addEventListener('click', function() {
      // rest of the code
      const detail = document.getElementById("detail");

      $(".card").on("click",function(){$(".detail").addClass("active");});
      // Update the detail content with the data from the clicked card
      const jobTitle = jobCard.querySelector("#jobname").textContent;
      const company = jobCard.querySelector("#company").textContent;
      const description = jobCard.querySelector("#description").textContent;
     // const link = jobCard.querySelector("#apply").getAttribute("href");

      const detailCompany = document.getElementById("detail-company");
      detailCompany.textContent = company;
  
      const detailDescription = document.getElementById("detail-description");
      detailDescription.textContent = description;
  
      const detailJobTitle = document.getElementById("detail-jobtitle");
      detailJobTitle.textContent = jobTitle;

      //const detailLink = document.getElementById("detail-apply");
      //detailLink.textContent = link;

    });
  });

$(".close-detail").on("click",function(){$(".detail").removeClass("active");});