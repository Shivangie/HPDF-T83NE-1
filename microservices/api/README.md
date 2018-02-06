# Description of the Nodejs-Express API

* This API returns entity value with its type present in the text, when a post request is made to it, in the x-www-form-urlencoded
  with key = message_text and value = "<--Text entered by the user-->"
* This API uses a wit app which is trained to recognize entities such as:
  
 Entity        | Example of values|  Example of entered texts
 ------------- | -------------    |  --------------
 thing_object  | cup              |  I had a cup of coffee
 contact       | Jason            |  I was talking to Jason
 nationality   | Arabian          |  My Arabian friend is a lovely singer
 color         | brown            |  I have a brown cap 
 volume        | 250ml            |  How much is 250 ml in litres
 food          | noodles          |  I had noodles for supper
 action        | walk             |  Henry went out for a walk 
 profession    | student          |  I am a student
 
 Other entities 
 --------------
* location  : Recognizes locations ; Eg. 925 Alma Street
* datetime  : Recognizes time and date ; Eg: 6 am
* duration  : Recognises the duration ; Eg: 10 sec, 2 hours 
* greetings : Recognises if a sentence is a greeting ; Eg: Hello!, Good morning, Hi, nice to meet you