/*
    Copyright (c) 2016 VMware, Inc. All Rights Reserved.
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
        
        http://www.apache.org/licenses/LICENSE-2.0
        
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/
(function() {
  
  'use strict';
  
  angular
    .module('harbor.services.i18n')
    .factory('I18nService', I18nService);
  
  I18nService.$inject = ['$window'];
  
  function I18nService($window) {
    
    var cookieOptions = {'path': '/'};
       
    var messages = $.extend(true, {}, eval('locale_messages'));    
    var defaultLanguage = 'en-US';
    var currentLanguage = defaultLanguage;
    var supportLanguages = {
      'en-US': 'English',
      'zh-CN': '简体中文'
    };
    var isSupportLanguage = function(language) {
      for (var i in supportLanguages) {
        if(language === String(i)) {
          return true;
        }
      }
      return false;
    };
    
        
    return tr;
    function tr() {
      
      return {
        'setCurrentLanguage': function(language) {
          currentLanguage = language;
        },
        'getCurrentLanguage': function() {
          return currentLanguage;
        },
        'getLanguageName': function(language) {
          if(!angular.isDefined(language) || !isSupportLanguage(language)) {
            language = defaultLanguage;
          }
          return supportLanguages[language];    
        },
        'getSupportLanguages': function() {
          return supportLanguages;
        },
        'getValue': function(key) {
          return messages[key];
        }
      };
      
    }
  }
  
})();