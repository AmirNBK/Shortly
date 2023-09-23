const Items = ['Features', 'Pricing', 'Resources'];

const header = document.querySelector('.headerItems');

const headerItems = Items.map(item => `<li> ${item} </li>`);

header.innerHTML = headerItems.join('');

async function getLink(link) {
    try {
        const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
        const data = await response.json();
    } catch (error) {
        console.log(error);
    }
}

const FeaturesFooter = ['Link Shortening', 'Branded Links', 'Analytics']

const featuresFooter = document.querySelector('.footer__Features__items')

const featuresFooterItems = FeaturesFooter.map(item => `<li> ${item} </li>`);

featuresFooter.innerHTML = featuresFooterItems.join('');

const ResourcesFooter = ['Blog', 'Developers', 'Support']

const resourcesFooter = document.querySelector('.footer__Resources__items')

const resourcesFooterItems = ResourcesFooter.map(item => `<li> ${item} </li>`);

resourcesFooter.innerHTML = resourcesFooterItems.join('');

const CompanyFooter = ['About', 'Our Team', 'Careers', 'Contact'];

const companyFooter = document.querySelector('.footer__Company__items');

const companyFooterItems = CompanyFooter.map(item => `<li> ${item} </li>`);

companyFooter.innerHTML = companyFooterItems.join('');

const input = document.querySelector('.shorten-link-input');

const button = document.querySelector('.shorten-link-button');

button.addEventListener('click', function () {
    if (input.value) {
        getLink(input.value)
    }
    else {
        input.classList.add('border-2')
        input.classList.add('border-solid')
        input.classList.add('border-red-500')
        input.classList.add('placeholder:text-red-300')
    }
})