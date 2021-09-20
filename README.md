# AVAMAE tech test

This is my attempt at creating a website as close to the design provided in inVision.

## To run

Navigate to the root directly and type:

```
npm start
```

## Future work / issues

Maximum progress was made in the time given however not all features could be implemented. The main feature that was not implemented was the addition of the address fields in the 'Contact Us' page.

#### Issues / bugs

The following issues were found during testing and would be the focus of future work:

1. The default Swiper pagination & navigation buttons were used and do not match the inVision design
2. In the 'About Us' section, there is a missing link is paragraph one. This was not immediately impelemented as all paragraph text was abstrcted to variables to keep the code clean and therefore adding a link was not straightforward.
3. The development was completed on my desktop computer using an external monitor. When I tested the app on my laptop I noticed some of the images were not being resized proerly namely the carousel images on the 'Home' page and the background image on the 'Contact Us' page.
4. During the tech test my focus was on implementing features and as a result I did not have time to refactor too much. Whilst some components were abstracted the code for the 'Contact Us' page is quite large and would benefit from some refactoring.
5. Whilst the font 'Roboto' was selected in the style sheet it does not appear to be implemented correctly. Therefore there is a difference in the font when compared to the inVision design.
6. Basic form validation was implemented in the 'Contact Us' page however this could be improved by using an external package such as React Hook Form.
7. No automated unit or integration tests were created, all testing was done manually on the project.

## Thanks

I'd like to thank Avamae for the opporunity to complete this tech test. It was very challenging but also rewarding to see my solution come along.
