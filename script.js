let container = document.querySelector('.container');
let modalWrapper = document.querySelector('.modal-wrapper');
let headerBtn1 = document.querySelector('.btn-1');
let headerBtn2 = document.querySelector('.btn-2');
let showcaseYearly = document.querySelector('.showcase-yearly');
let showcaseMonthly = document.querySelector('.showcase-monthly');
let starterCreditPlus = document.querySelector('.starter-credit');
let starterSubscriberPlus = document.querySelector('.starter-subscriber');
let starterCampaignPlus = document.querySelector('.starter-campaign');
let professionalCreditPlus = document.querySelector('.professional-credit');
let professionalSubscriberPlus = document.querySelector('.professional-subscriber');
let professionalCampaignPlus = document.querySelector('.professional-campaign');
let enterpriseCreditPlus = document.querySelector('.enterprise-credit');
let enterpriseSubscriberPlus = document.querySelector('.enterprise-subscriber');
let enterpriseCampaignPlus = document.querySelector('.enterprise-campaign');
let plusCancel = document.querySelector('.plus-cancel');
let creditModalBoxStarter = document.querySelector('.credit-modal-box-starter');
let subscriberModalBoxStarter = document.querySelector('.subscriber-modal-box-starter');
let campaignModalBoxStarter = document.querySelector('.campaign-modal-box-starter');
let creditModalBoxProfessional = document.querySelector('.credit-modal-box-professional');
let subscriberModalBoxProfessional = document.querySelector('.subscriber-modal-box-professional');
let campaignModalBoxProfessional = document.querySelector('.campaign-modal-box-professional');
let creditModalBoxEnterprise = document.querySelector('.credit-modal-box-enterprise');
let subscriberModalBoxEnterprise = document.querySelector('.subscriber-modal-box-enterprise');
let campaignModalBoxEnterprise = document.querySelector('.campaign-modal-box-enterprise');

// Plus Plan
// Starter plus plan
starterCreditPlus.addEventListener('click', () => {
    creditModalBoxStarter.style.display = 'block';
    modalWrapper.classList.add('modal-display')
    container.classList.add('container-display');
})

starterSubscriberPlus.addEventListener('click', () => {
    subscriberModalBoxStarter.style.display = 'block';
    modalWrapper.classList.add('modal-display');
    container.classList.add('container-display');
})

starterCampaignPlus.addEventListener('click', () => {
    campaignModalBoxStarter.style.display = 'block';
    modalWrapper.classList.add('modal-display');
    container.classList.add('container-display');
})

// Professional plus plan
professionalCreditPlus.addEventListener('click', () => {
    creditModalBoxProfessional.style.display = 'block';
    modalWrapper.classList.add('modal-display');
    container.classList.add('container-display');
    
})

professionalSubscriberPlus.addEventListener('click', () => {
    subscriberModalBoxProfessional.style.display = 'block';
    modalWrapper.classList.add('modal-display');
    container.classList.add('container-display');
})

professionalCampaignPlus.addEventListener('click', () => {
    campaignModalBoxProfessional.style.display = 'block';
    modalWrapper.classList.add('modal-display');
    container.classList.add('container-display');
})

// Enterprise plus plan
enterpriseCreditPlus.addEventListener('click', () => {
    creditModalBoxEnterprise.style.display = 'block';
    modalWrapper.classList.add('modal-display');
    container.classList.add('container-display');
})

enterpriseSubscriberPlus.addEventListener('click', () => {
    subscriberModalBoxEnterprise.style.display = 'block';
    modalWrapper.classList.add('modal-display');
    container.classList.add('container-display');
    
})

enterpriseCampaignPlus.addEventListener('click', () => {
    campaignModalBoxEnterprise.style.display = 'block';
    modalWrapper.classList.add('modal-display');
    container.classList.add('container-display');
})

// Exit Modal
plusCancel.addEventListener('click', closeModal)

function closeModal() {
    modalWrapper.classList.remove('modal-display');
    container.classList.remove('container-display');

    creditModalBoxStarter.style.display = 'none';
    subscriberModalBoxStarter.style.display = 'none';
    campaignModalBoxStarter.style.display = 'none';

    creditModalBoxProfessional.style.display = 'none';
    subscriberModalBoxProfessional.style.display = 'none';
    campaignModalBoxProfessional.style.display = 'none';

    creditModalBoxEnterprise.style.display = 'none';
    subscriberModalBoxEnterprise.style.display = 'none';
    campaignModalBoxEnterprise.style.display = 'none';
}

// Monthly and Yearly Button
headerBtn2.addEventListener('click', function () {
    showcaseYearly.style.display = 'flex';
    showcaseMonthly.style.display = 'none';
    headerBtn2.classList.add('color1');
    headerBtn2.classList.add('color4');
    headerBtn1.classList.add('color2');
    headerBtn1.classList.add('color3');

    var isOpen = $slider.classList.contains('slide-in');
    $slider.setAttribute('class', isOpen ? 'slide-out' : 'slide-in');
})

headerBtn1.addEventListener('click', function () {
    showcaseMonthly.style.display = 'flex';
    showcaseYearly.style.display = 'none';
    headerBtn1.classList.remove('color2');
    headerBtn1.classList.remove('color3');
    headerBtn2.classList.remove('color1');
    headerBtn2.classList.remove('color4');

    var isOpen = $slider.classList.contains('slide-in');
    $slider.setAttribute('class', isOpen ? 'slide-out' : 'slide-in');
})