let container = document.querySelector('.container-wrapper');
let modalWrapper = document.querySelector('.modal-wrapper');
let headerBtn1 = document.querySelector('.btn-1');
let headerBtn2 = document.querySelector('.btn-2');
let showcaseYearly = document.querySelector('.showcase-yearly');
let showcaseMonthly = document.querySelector('.showcase-monthly');
let plusCancel = document.querySelector('.plus-cancel');

// Monthly Plan
let starterCreditPlus = document.querySelector('.starter-credit');
let starterSubscriberPlus = document.querySelector('.starter-subscriber');
let starterCampaignPlus = document.querySelector('.starter-campaign');
let professionalCreditPlus = document.querySelector('.professional-credit');
let professionalSubscriberPlus = document.querySelector('.professional-subscriber');
let professionalCampaignPlus = document.querySelector('.professional-campaign');
let enterpriseCreditPlus = document.querySelector('.enterprise-credit');
let enterpriseSubscriberPlus = document.querySelector('.enterprise-subscriber');
let enterpriseCampaignPlus = document.querySelector('.enterprise-campaign');
let creditModalBoxStarter = document.querySelector('.credit-modal-box-starter');
let subscriberModalBoxStarter = document.querySelector('.subscriber-modal-box-starter');
let campaignModalBoxStarter = document.querySelector('.campaign-modal-box-starter');
let creditModalBoxProfessional = document.querySelector('.credit-modal-box-professional');
let subscriberModalBoxProfessional = document.querySelector('.subscriber-modal-box-professional');
let campaignModalBoxProfessional = document.querySelector('.campaign-modal-box-professional');
let creditModalBoxEnterprise = document.querySelector('.credit-modal-box-enterprise');
let subscriberModalBoxEnterprise = document.querySelector('.subscriber-modal-box-enterprise');
let campaignModalBoxEnterprise = document.querySelector('.campaign-modal-box-enterprise');

// Yearly Plan
let yearlyStarterCreditPlus = document.querySelector('.yearly-starter-credit');
let yearlStarterSubscriberPlus = document.querySelector('.yearly-starter-subscriber');
let yearlyStarterCampaignPlus = document.querySelector('.yearly-starter-campaign');
let yearlyprofessionalCreditPlus = document.querySelector('.yearly-professional-credit');
let yearlyProfessionalSubscriberPlus = document.querySelector('.yearly-professional-subscriber');
let yearlyProfessionalCampaignPlus = document.querySelector('.yearly-professional-campaign');
let yearlyEnterpriseCreditPlus = document.querySelector('.yearly-enterprise-credit');
let yearlyEnterpriseSubscriberPlus = document.querySelector('.yearly-enterprise-subscriber');
let yearlyEnterpriseCampaignPlus = document.querySelector('.yearly-enterprise-campaign');
let yearlyCreditModalBoxStarter = document.querySelector('.yearly-credit-modal-box-starter');
let yearlySubscriberModalBoxStarter = document.querySelector('.yearly-subscriber-modal-box-starter');
let yearlyCampaignModalBoxStarter = document.querySelector('.yearly-campaign-modal-box-starter');
let yearlyCreditModalBoxProfessional = document.querySelector('.yearly-credit-modal-box-professional');
let yearlySubscriberModalBoxProfessional = document.querySelector('.yearly-subscriber-modal-box-professional');
let yearlyCampaignModalBoxProfessional = document.querySelector('.yearly-campaign-modal-box-professional');
let yearlyCreditModalBoxEnterprise = document.querySelector('.yearly-credit-modal-box-enterprise');
let yearlySubscriberModalBoxEnterprise = document.querySelector('.yearly-subscriber-modal-box-enterprise');
let yearlyCampaignModalBoxEnterprise = document.querySelector('.yearly-campaign-modal-box-enterprise');

// Plus Plan

// Monthly
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

// Yearly
// Starter plus plan
yearlyStarterCreditPlus.addEventListener('click', () => {
    yearlyCreditModalBoxStarter.style.display = 'block';
    modalWrapper.classList.add('modal-display')
    container.classList.add('container-display');
})

yearlStarterSubscriberPlus.addEventListener('click', () => {
    yearlySubscriberModalBoxStarter.style.display = 'block';
    modalWrapper.classList.add('modal-display');
    container.classList.add('container-display');
})

yearlyStarterCampaignPlus.addEventListener('click', () => {
    yearlyCampaignModalBoxStarter.style.display = 'block';
    modalWrapper.classList.add('modal-display');
    container.classList.add('container-display');
})

// Professional plus plan
yearlyprofessionalCreditPlus.addEventListener('click', () => {
    yearlyCreditModalBoxProfessional.style.display = 'block';
    modalWrapper.classList.add('modal-display');
    container.classList.add('container-display');
    
})

yearlyProfessionalSubscriberPlus.addEventListener('click', () => {
    yearlySubscriberModalBoxProfessional.style.display = 'block';
    modalWrapper.classList.add('modal-display');
    container.classList.add('container-display');
})

yearlyProfessionalCampaignPlus.addEventListener('click', () => {
    yearlyCampaignModalBoxProfessional.style.display = 'block';
    modalWrapper.classList.add('modal-display');
    container.classList.add('container-display');
})

// Enterprise plus plan
yearlyEnterpriseCreditPlus.addEventListener('click', () => {
    yearlyCreditModalBoxEnterprise.style.display = 'block';
    modalWrapper.classList.add('modal-display');
    container.classList.add('container-display');
})

yearlyEnterpriseSubscriberPlus.addEventListener('click', () => {
    yearlySubscriberModalBoxEnterprise.style.display = 'block';
    modalWrapper.classList.add('modal-display');
    container.classList.add('container-display');
    
})

yearlyEnterpriseCampaignPlus.addEventListener('click', () => {
    yearlyCampaignModalBoxEnterprise.style.display = 'block';
    modalWrapper.classList.add('modal-display');
    container.classList.add('container-display');
})

// Exit Modal
plusCancel.addEventListener('click', closeModal)

function closeModal() {
    modalWrapper.classList.remove('modal-display');
    container.classList.remove('container-display');

    // Monthly
    creditModalBoxStarter.style.display = 'none';
    subscriberModalBoxStarter.style.display = 'none';
    campaignModalBoxStarter.style.display = 'none';

    creditModalBoxProfessional.style.display = 'none';
    subscriberModalBoxProfessional.style.display = 'none';
    campaignModalBoxProfessional.style.display = 'none';

    creditModalBoxEnterprise.style.display = 'none';
    subscriberModalBoxEnterprise.style.display = 'none';
    campaignModalBoxEnterprise.style.display = 'none';

    // Yearly
    yearlyCreditModalBoxStarter.style.display = 'none';
    yearlySubscriberModalBoxStarter.style.display = 'none';
    yearlyCampaignModalBoxStarter.style.display = 'none';

    yearlyCreditModalBoxProfessional.style.display = 'none';
    yearlySubscriberModalBoxProfessional.style.display = 'none';
    yearlyCampaignModalBoxProfessional.style.display = 'none';

    yearlyCreditModalBoxEnterprise.style.display = 'none';
    yearlySubscriberModalBoxEnterprise.style.display = 'none';
    yearlyCampaignModalBoxEnterprise.style.display = 'none';
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