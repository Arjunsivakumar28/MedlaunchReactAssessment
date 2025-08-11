Medlaunch Frontend Assessment

Goal: Develop a multi-step (6 step) form based on the provided Figma design board, implementing all of the functionalities and maching the design (validation is optional) 

How to run: You can clone the repository to your local machine, and you can run the following:

npm install
npm run dev

This was developed usng React.JS + Tailwnd for for CSS support

The approach to constructing the app was quite straightforward:
1. Go through the Figma design board and identify coomponentizable elements
2. Identify thematic styles and create variables of them for ease of use
3. Create basic components that can be used throughout the entire project
4. Construct the basic structure as well as data management / validation structure (I did using context)
5. Go through step by step of the multi-step form, maintaning folder structure and organization, as well as re usability of create components

To complete this project I had to make some assumptions, mainly about functionality and cohesion.

1. I assumed data is not stored automatically but must be stored by the user everytime using the save button
2. I also created a bit more stylistic cohesion as the colors and font styles in the design board were diverse and unique specifc elements
3. I also believe that certain sections of the work flow (such as file uploads for site information) is imagined with back end integration, and since I did not have that, I simply provided the design and structure for it

There are few bugs which needs to be cleaned up (such as with the multi-select buttons and removal of them). Other than that, some limitations are:
1. the file must be dowloaded to preview it, there is no in-place preview
2. the final download to pdf has also not been integrated
3. Certain elements of the figma board (such as 2 screen for faacility details), it was not clear what the expectations were and so they have not been covered
4. the save funcionality was not exactly implemented as the input is saved onChange then cleared appropriately

