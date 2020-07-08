Feature: Search for a Planet

@SearchFullName
Scenario Outline: Search by full name

Given I am at Homepage
And Click on "planets" radio button.
When I search be "<FullName>" name
Then Validate that I see "<FullName>" details having "Population:" ,"Climate:","Gravity:","Population:".

Examples:
|FullName|
|Tatooine|
|Alderaan|
|Yavin IV|
|Dagobah|


@SearchPartial
Scenario Outline: Search by partial name
Given I am at Homepage
When I search be "oo" name
Then Validate that I see "<FullName>" details when searched with Sky.

Examples:
|FullName|
|Tatooine|
|Naboo|
|Dantooine|

@InvalidSearch
Scenario Outline: Search by Invalid name
Given I am at Homepage
When I search be "<FullName>" name
Then Validate that I see not found message.

Examples:
|FullName|
|Chanda|
|Varun|

@EmptySearch
Scenario: Search by Keeping input field blank
Given I am at Homepage
When I search be "oo" name
Then Validate that I see "Dantooine" details when searched with Sky.
Then Search with empty field and Validate that I see not found message. 

@SearchByKeyboard

Scenario: Search by sending keboard keys

Given I am at Homepage
When Type "Dantooine" and hit enter.
Then Validate that I see "Dantooine" details when searched with Sky.


   
