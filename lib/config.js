if (Meteor.isClient) {
    // Set language zh-TW, zh_tw
    setLanguage = function() {
        var i18nLang = window.navigator.userLanguage || window.navigator.language;
        i18n.setLanguage(i18nLang);
        t9nLang = i18nLang.replace('-','_').toLowerCase();
        T9n.setLanguage(t9nLang);
    }
    Meteor.startup(function () {
        setLanguage();
    })
}