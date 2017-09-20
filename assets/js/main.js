// Main JS
var Abaque = (function () {
  // Variables
  var locationLink = document.getElementById('locationLink');
  var contactLink = document.getElementById('contactLink');
  var mainContent = document.getElementById('mainContent');
  var locationImgUrl = locationLink.href;
  var contactImgUrl = contactLink.href;
  var defaultBackgroundUrl = mainContent.getAttribute('data-default-background');
  var backgroundStatus = 0;

  // Method
  var preloadImage = function preloadImage () {
    var imageLocationObj = new Image();
    imageLocationObj.src = locationImgUrl;

    var imageContactObj = new Image();
    imageContactObj.src = contactImgUrl;
  };

  var bindContactLinkClick = function bindContactLinkClick () {

    contactLink.addEventListener('click', handleContactLinkClick, false);
  };

  var handleContactLinkClick = function handleContactLinkClick (e) {
    e.preventDefault();
    e.stopPropagation();

    if(backgroundStatus === 0) {
      changeMainContentBackground(contactImgUrl);
      bindBackgroundClick();
      mainContent.classList.add('contact-visible');
      backgroundStatus = 2;
    } else {
      changeMainContentBackground(defaultBackgroundUrl);
      mainContent.classList.remove('contact-visible');
      backgroundStatus = 0;
    }
  };

  var bindLocationLinkClick = function bindLocationLinkClick () {

    locationLink.addEventListener('click', handleLocationLinkClick, false);
  };

  var handleLocationLinkClick = function handleLocationLinkClick (e) {
    e.preventDefault();
    e.stopPropagation();

    if(backgroundStatus === 0) {
      changeMainContentBackground(locationImgUrl);
      bindBackgroundClick();
      backgroundStatus = 1;
    } else {
      changeMainContentBackground(defaultBackgroundUrl);
      backgroundStatus = 0;
    }
  };

  var bindBackgroundClick = function bindBackgroundClick () {
    unBindBackgroundClick();
    mainContent.addEventListener('click', handleBackgroundClick, false);
  };

  var handleBackgroundClick = function handleBackgroundClick (e) {
    e.preventDefault();

    if (e.target === this) {
      if(backgroundStatus !== 0) {
        changeMainContentBackground(defaultBackgroundUrl);
        mainContent.classList.remove('contact-visible');
        backgroundStatus = 0;
      }
    }

  };

  var unBindBackgroundClick = function bindBackgroundClick () {
    mainContent.removeEventListener('click', handleBackgroundClick);
  };

  var changeMainContentBackground = function changeMainContentBackground (imgUrl) {

    mainContent.style.backgroundImage = 'url(' + imgUrl + ')';
  };

  var init = function init () {
    preloadImage();
    bindLocationLinkClick();
    bindContactLinkClick();
  };

  // Public Method
  return {
    init: init
  };
})();

Abaque.init();