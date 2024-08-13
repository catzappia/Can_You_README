// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
      if (license === 'None') {
        return ''
    } else {
        return `## License
        This project is licensed under the ${license} license.`
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 ${renderLicenseBadge(data.license)}
  repository: [${data.title}](
  ## Description
  ${data.description}
  ## Table of Contents
  ${data.tableOfContents}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  ${data.questions}
  ## Contact
  Email: ${data.email}
  GitHub: [${data.username}](
`;
}

export default generateMarkdown;
