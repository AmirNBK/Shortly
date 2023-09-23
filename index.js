const Items = ['Features', 'Pricing', 'Resources'];

const header = document.querySelector('.headerItems');

const headerItems = Items.map(item => `<li> ${item} </li>`);

header.innerHTML = headerItems.join('');

const shortedLinks = []

const finalLinks = document.querySelector('.finalLinks')

function copyToClipboard(event) {
    const textToCopy = event.target.getAttribute('data-clipboard-text');

    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextarea);

    event.target.innerText = 'Copied!';
    setTimeout(() => {
        event.target.innerText = 'Copy';
    }, 2000);
}


function updateLinksList() {
    let finalLinksItems = shortedLinks.map(item => `
    <div class="bg-white relative z-[2] px-6 py-3 mt-8 mx-36 rounded-md flex flex-row justify-between items-center">
      <p class="font-semibold">
        ${item.link}
      </p>
      <div class="flex flex-row items-center gap-3">
        <a href=${item.shortLink} target="_blank" style="color: hsl(180, 66%, 49%)">
          ${item.shortLink}
        </a>
        <button class="shorten-link-button font-bold bg-main-cyan text-white px-8 py-2 rounded-md text-sm w-fit"
          data-clipboard-text="${item.shortLink}">
          Copy
        </button>
      </div>
    </div>
    `);

    finalLinks.innerHTML = finalLinksItems.join('');
    
    const copyButtons = document.querySelectorAll('.shorten-link-button');
    copyButtons.forEach(button => {
        button.addEventListener('click', copyToClipboard);
    });
}


async function getLink(link) {
    try {
        const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
        const data = await response.json();
        shortedLinks.push({ link, shortLink: data.result.full_short_link });
        updateLinksList();
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