Feature: Search both Planet and Person not having common name.

@SearchBoth
Scenario Outline: Search by Planet and Person with same name

Given I am at Homepage
When Click on "people" radio button.
When I search be "<FullName>" name
Then Validate that I see "<FullName>" details having "Gender:" ,"Birth year:","Eye color:","Skin color:".
And Click on "planets" radio button.
When I search be "<FullName>" name
Then Validate that I see not found message.

Examples:
|FullName|
|Luke Skywalker|
|Darth Vader|


