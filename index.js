const Items = ['Features', 'Pricing', 'Resources'];

const header = document.querySelector('.headerItems');

const headerItems = Items.map(item => `<li> ${item} </li>`);

header.innerHTML = headerItems.join('');

const FeaturesFooter = ['Link Shortening', 'Branded Links', 'Analytics']

const featuresFooter = document.querySelector('.footer__Features__items')

const featuresFooterItems = FeaturesFooter.map(item => `<li> ${item} </li>`);

featuresFooter.innerHTML = featuresFooterItems.join('');


const ResourcesFooter = ['Blog', 'Developers', 'Support']

const resourcesFooter = document.querySelector('.footer__Resources__items')

const resourcesFooterItems = ResourcesFooter.map(item => `<li> ${item} </li>`);

resourcesFooter.innerHTML = resourcesFooterItems.join('');

const CompanyFooter = ['About', 'Our Team', 'Careers', 'Contact']

const companyFooter = document.querySelector('.footer__Company__items')

const companyFooterItems = CompanyFooter.map(item => `<li> ${item} </li>`);

companyFooter.innerHTML = companyFooterItems.join('');
