Campaign Management Dashboard (Hoisted at [https://campaign-management.netlify.app/](https://campaign-management.netlify.app/))

To run this project, run the following commands after reaching the destination folder

1. ### `npm i`

2. ### `npm start`

Open [http://localhost:5200](http://localhost:5200) to view it in the browser.

The server is hoisted in a separate domain ([https://bs-campaign.herokuapp.com](https://bs-campaign.herokuapp.com)).

Github Repo :[https://github.com/Gauravshrestha4/bs-server](https://github.com/Gauravshrestha4/bs-server) 

### Libraries used for features/components
For calender, react-datepicker is used.

For localisation, there were 2 options that I stumbled upon:

1.react-i18next- This is the popular one

2.react-localisation - Less popular than the above 

I used the latter one as it is half the bundle size than the former and it served the purpose and is easy to understand and use.

### Things done apart from the task requirements(For performance):
-  created a custom webpack config so that there is scope for more optimisation in the  future.
-  Dyanamically imported components (datepicker and modal/popup). 
-  Preloaded font css(roboto) to prevent render blocking stylesheet.
-  Used web storage(local storage) to store and fetch data to minimize network calls.
-  Added Redirection logic to serve all routes back to the app.
-  Added Error Boundary. 

The page speed score for Desktop-100 (All core web vitals i.e CLS,FID,LCP green).

The page speed score for mobile-95+ (All core web vitals i.e CLS,FID,LCP green).





### Test Cases for the Web Page



Description | Execution steps | Expected output|
|--- | --- | ---|
|UI check | Check the components and UI by going to the specified URL | UI should be as per the specs, all the components should pe present i.e tabs data table and the locale input
|Relevance of Tabs | Click on each tab to see the data | Data should be relevant interms of date|| Date Picker UI | Click on schedule campaign from the actions tab | Datepicker should be visible
|Reschedule feature | select any future/todays date in Past Campaign tab for any campaign | The campaign should be removed from Past campaign tab and appear in upcoming/live (respectively) Campaign tab, Date should be updated,Correct difference of days should be there| 
|Reschedule to same category(live/upcoming/live) | select any past date in Past Campaign tab for any campaign | The campaign should not be removed from Past campaign tab , Date should be updated,Correct difference of days should be there| 
|Date component toggle behaviour | Try to toggle Date component by clicking on it multiple times | Toggle functionality should work fine| 
|View Pricing Feature | Click on View Pricing in the View Pricng Column of any row | A modal with relevant information of the campaign should open|
|Pricing Modal Close button | Click close in the Pricing modal| Modal should get close properly|
|Localization |Select German language from Language selector dropdown in the top right Header | Static Data,all the text should be in german |
|UI in Localization state| check the ui after changing locale | Ui should not break after applying the locale | 
|UI Responsiveness | Check on different mobile devices | UI should remain be clean(according to specs)|









