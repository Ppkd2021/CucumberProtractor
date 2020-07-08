import { ElementFinder, browser, element, by, protractor } from "protractor";

export class waits {
    EC = protractor.ExpectedConditions;
    elementispresent(pageobject: ElementFinder) {
        return browser.wait(function(){
            return pageobject.isPresent()
            .then(function(present){
                if (present) {
                   return true;
                }
                // Not visible yet, but it is in the DOM, then try again
                return false;
            }).catch(function(notFound){
                // Element not found in the DOM, try again
                return false;
            });
        },60000, 'Element not found within 3 seconds');
    }
    elementisvisible(pageobject: ElementFinder) {
        return browser.wait(function(){
            return pageobject.isDisplayed()
            .then(function(visible){
                if (visible) {
                   return true;
                }
                // Not visible yet, but it is in the DOM, then try again
                return false;
            }).catch(function(notFound){
                // Element not found in the DOM, try again
                return false;
            });   
        },60000, 'Element not found within 3 seconds');
    }
    elementisclickable(pageobject:ElementFinder){
        return browser.wait(function(){
            return pageobject.isEnabled()
            .then(function(clickable){
                if (clickable) {
                   return true;
                }
                // Not visible yet, but it is in the DOM, then try again
                return false;
            }).catch(function(notFound){
                // Element not found in the DOM, try again
                return false;
            });   
        }, 2*60000, 'Element not found within 3 seconds');  
     }
    elementisselectable(pageobject:ElementFinder){
        return browser.wait(function(){
            return pageobject.isSelected()
            .then(function(selectable){
                if (selectable) {
                   return true;
                }
                // Not visible yet, but it is in the DOM, then try again
                return false;
            }).catch(function(notFound){
                // Element not found in the DOM, try again
                return false;
            });   
        }, 2*60000, 'Element not found within 3 seconds');
    }
    

}