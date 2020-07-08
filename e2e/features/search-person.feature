Feature: Search for a Star Wars character

@SearchFullName
Scenario Outline: Search by full name

Given I am at Homepage
When Click on "people" radio button.
When I search be "<FullName>" name
Then Validate that I see "<FullName>" details having "Gender:" ,"Birth year:","Eye color:","Skin color:".

Examples:
|FullName|
|Luke Skywalker|
|Darth Vader|
|Owen Lars|
|Beru Whitesun lars|
|Biggs Darklighter|
|Anakin Skywalker|

@SearchPartial
Scenario Outline: Search by partial name
Given I am at Homepage
When I search be "Sky" name
Then Validate that I see "<FullName>" details when searched with Sky.

Examples:
|FullName|
|Luke Skywalker|
|Anakin Skywalker|
|Shmi Skywalker|

@InvalidSearch
Scenario Outline: Search by Invalid name
Given I am at Homepage
When I search be "<FullName>" name
Then Validate that I see not found message.

Examples:
|FullName|
|Devashish katyal|
|Anuj Madan|

@EmptySearch
Scenario: Search by Keeping input field blank
Given I am at Homepage
When I search be "Sky" name
Then Validate that I see "Luke Skywalker" details when searched with Sky.
Then Search with empty field and Validate that I see not found message. 

@SearchByKeyboard

Scenario: Search by sending keboard keys

Given I am at Homepage
When Type "Luke Skywalker" and hit enter.
Then Validate that I see "Luke Skywalker" details when searched with Sky.


   
