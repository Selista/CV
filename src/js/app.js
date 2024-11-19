document.querySelector('#my-name').innerHTML = `${data.first_name} <span class="color-grey">${data.last_name}</span>`;
document.querySelector('#job-title').textContent = data.job_title;
document.querySelector('.profile-data').textContent = data.profile;
/**
 * section data
 */

let expirienceData = '';
experience.forEach(item => {
    expirienceData += `<section class="mb-4">`;
    expirienceData += ` <h4 class="company-name mb-2">${item.company} - ${item.city}, <i>${item.from} - ${item.to}</i></h4>`;
    expirienceData += `<h5>${item.position}</h5>`;
    expirienceData += `<p>${item.description}</p>`;
    expirienceData += `</section>`;
});
document.querySelector('.experience-list').innerHTML = expirienceData;

/**
 * contact data
 */

document.querySelector('.contacts-block').innerHTML += `<li><a href="tel:${data.phone}">${data.phone}</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="mailto:${data.email}">${data.email}</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="${data.linkedin}">Linkedin</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="${data.github}">Github</a></li>`
document.querySelector('.address').innerHTML = `<p>${data.address}</p>`;
document.querySelector('#my-photo').src = data.photo;
document.querySelector('.projects-github').innerHTML = `<a href="${data.github}">Github</a>`;

/**
 * skills
 */

let skillsData = '';
data.skills.forEach(item => {
    skillsData += `<li>${item}</li>`;
});
document.querySelector('.skills-list').innerHTML = skillsData;

/**
 * stages
 */

let stagesData = '';
data.stages.forEach(item => {
    stagesData += `<li>${item}</li>`;
});
document.querySelector('.project-list').innerHTML = stagesData;

let stagesDataMessage = '';
data.stages_message.forEach(item => {
    stagesDataMessage += `<li>${item}</li>`;
});
document.querySelector('.project-message-list').innerHTML = stagesDataMessage;

/**
 * education
 */

let educationData = '';
data.education.forEach(item => {
    educationData += `<li>${item[0]}, ${item[1]}</li>`;
});
document.querySelector('.education-list').innerHTML = educationData;

/**
 * certificates
 */
document.querySelector('#my-сertificate-html').src = data.certificates_html;
document.querySelector('#my-сertificate').src = data.certificates;
document.querySelector('#my-сertificate-react').src = data.certificates_react;
