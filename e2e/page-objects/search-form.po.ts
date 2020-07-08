import { element, by } from 'protractor';
import { allocExpando } from '@angular/core/src/render3/instructions';

export class Person {
     input() {
        return element(by.id('query'));
    }
     searchBtn() {
        return element(by.css('button'));
    }
     firstCharacterName(Name) {
        return element(by.xpath("//*[@class='card-subtitle mb-2 text-muted' and contains(.,'"+Name+"')]"));
    }
  persondetails(detailtype) {
        return element(by.xpath("//*[@class='col-sm-2' and contains(.,'"+detailtype+"')]"));
     }
     namesearch(name) {
       return element(by.xpath("//*[@class='card-body']/*[@class='card-subtitle mb-2 text-muted' and contains(.,'"+name+"')]"))
     }
     nocontent(){
         return element(by.xpath("//*[@class='container' and contains(.,'Not found')]"));
     }
    radiobutton(type){
      return element(by.xpath("//*[contains(@class,'form-check-input') and contains(@id,'"+type+"')]"));
      
    }
}
