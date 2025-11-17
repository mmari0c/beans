# Beans

Submitted by: Mario Nolasco

This web app: Allows you to create your own beans from the game "Fall Guys". Creating and saving the beans onto supabase, viewing a gallery of the beans, viewing details about the beans and being able to edit and delete beans.

## Features

- [x] **The web app contains a page that features a create form to add a new bean**
  - Users can name the bean
  - Users can set the bean's attributes by clicking on one of several values
- [x] **The web app includes a summary page of all the user’s added beans**
  -  The web app contains a summary page dedicated to displaying all the crewmates the user has made so far
  -  The summary page is sorted by creation date such that the most recently created beans appear at the top
- [x] **A previously created bean can be updated from the list of crewmates in the summary page**
  - Each crewmate has an edit button that will take users to an update form for the relevant crewmate
  - Users can see the current attributes of their crewmate on the update form
  - After editing the crewmate's attribute values using the form, the user can immediately see those changes reflected in the update form and on the summary page 
- [x] **A previously created bean can be deleted from the crewmate list**
  - Using the edit form detailed in the previous bean can be updated_ feature, there is a button that allows users to delete that bean
  - After deleting a bean, the crewmate should no longer be visible in the summary page
  - [x] **Each bean has a direct, unique URL link to an info page about them**
    - Clicking on a crewmate in the summary page navigates to a detail page for that crewmate
    - The detail page contains extra information about the crewmate not included in the summary page
    - Users can navigate to to the edit form from the detail page

## Video Walkthrough

Here's a walkthrough of implemented user stories:

[Video Walkthrough](https://imgur.com/a/K4pFDZJ)

<!-- Replace this with whatever GIF tool you used! -->
GIF created with Kap
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Figuring out how I wanted to style and present the information was definitely tricky!

## License

    Copyright [2025] [Mario Nolasco]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
