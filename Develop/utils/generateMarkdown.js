// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
      if (license === 'MIT') {
        return `[MIT](https://opensource.org/licenses/MIT)`
    } else if (license === 'Apache') {
        return `[Apache](https://opensource.org/licenses/Apache-2.0)`
    } else if (license === 'GPL') {
        return `[GPL](https://www.gnu.org/licenses/gpl-3.0)`
    } else if (license === 'BSD') {
        return `[BSD](https://opensource.org/licenses/BSD-3-Clause)`
    } else {
        return ''
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

export default generateMarkdown;
