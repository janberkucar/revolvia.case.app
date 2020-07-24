# Revolvia-NativeProject-Submission

Submission of Janberk Uçar for the Job Hiring Proccess with Revolvia.

#---
![screen5](https://user-images.githubusercontent.com/44262613/87871313-fb44a700-c9b7-11ea-9df7-105cd9896861.JPG)

![screen1](https://user-images.githubusercontent.com/44262613/87871286-d9e3bb00-c9b7-11ea-8423-b68de576d4ed.JPG)

![screen2](https://user-images.githubusercontent.com/44262613/87871298-ee27b800-c9b7-11ea-8269-3223a491c16c.JPG)

![screen3](https://user-images.githubusercontent.com/44262613/87871311-f8e24d00-c9b7-11ea-8eca-b2f10c8b681f.JPG)

![screen4](https://user-images.githubusercontent.com/44262613/87871312-faac1080-c9b7-11ea-9816-eabbb7a6fd08.JPG)

#---

# NOTES

# Profile pic doesnt change?

    Right now, you can update your picture but it will only work on cache because I don't have a async storage implemented (It will take more time to do that and it is not necessary)
    Secondly, on the database, it will update respect to uri.

    Right now, you upload your pic.
    Tab back and come back.
    The components source changes but component itself doesnt change. So when you open and close your app, the pic will dissapear.
    And the picture on the My Status (Main Screen) doesnt get updated. Again, because I can't store it in this current phone itself / storage.

# Data.json doesnt work?

    Everyting, including the colors, comes from the data.json itself and only that.
    But I had to extend it.
    Percentage value changed because %80, other than 80 gives me more accurate values for the progress bars. It can be just 80 too.
    Color values were different.
    I added 2 more journey with respect to skills as a dummie, to have 4 screens to total, but you can discard them and it still works.

    For more: Check my data.json.

# Development Proccess.

---

First Day :

Mostly spent with research about Flutter and ReactNative. I could've learn Flutter for this submission but I saw the ReactNative Web more beneficial for the company
and this submission.
I didnt want to use cli because of the emulator problems that has with my computer. I'm having problems with running emulators because of the cpu power.
And I've had experiences with Expo before.
For seeing ios part of the app, Expo has a application that I can review in my own personal home while I'm constructing.

- Checked about Flutter
- Trying best workflow for not this job alone but future possible wants.
- Configuring the Development Enviroment.
- Search through GitHub and Dribble Desings for the creative decision making.

---

Second Day :

The workflow has been decided on React Native Web with Expo. At this moment I've started to have the configurations and emulator ready and re-gained the knowledge about
the technologies that I want to use.
The Redux part of this job mostly confused me with decision making because of the current situations with new releases.
I've decided to go safe, and use older release with Expo.

- I've decided the technologies that I want to use. The coding proccess has begun in this day.

Workflow and Technologies that I've decided.

    React Native Web: We'll have a web application along with ios / android. This would fit company more in my idea.
    Mobx: With React Native's Hooks, it can manage the State Management more easily.
    Typescript: As the maing language I would work with.
    React Navigation: For using the screens more changeable with the web and also mobile.
    AsyncStorage: Local storage within the phone. In this way when you close and reopen the app, the data will be stored temporarily. It would beneficial to Offline usage.
    StyledComponants: To have more CSS likeable components that can we modify and customize more.

Version Control

    reactnative: 0.55.4
    reactnativeweb: 0.10.0
    reactart: 16.8.2

---

Third Day :

Workflow has changed in this day.

The Web Hooks are still in development. Watched a conference about it and decided to go on with the Expo normal. The compiled web part of the code doesnt seem to work.

Spent a time with the design and in this time I've decided to go on with Full page design unlike the design you sent me.
Because of the whole page needs to change on each other "Journey", I didnt find it to be best to have different 3 cards that change in everytime we slide to next journey.
Design-vise I've implemented all the parts on just one page.

Started with simple TypeScript Expo application with React Native.

Found some ESLINT configuration from gitHub to make my workflow more easier on Windows.

Created Stack Navigation on MyStatus. ( Status > MyStatus )

on App I return Navigator within a Screen. which is a stack.

Wrote LoadAssets.tsx for avoid flickering and when reloading it excludes some problems.
Wrote Sliders.
Wrote Text with right and left variants.
Wrote Footer details. Left it just text for now.
Wrote Button for the Quickise part.

# Version Control

    react Navigation
    react-native animated
    react-native-gesture-handler
    react-native-screens
    react-native-reanimated
    react-native-redash
    expo-constants
    expo-asset
    expo-font

---

Fourth Day :

    Animation has fixed.

    Pagination with dots added. Because user might not be aware of that there is more than one pages.

    Cleaned up the code itself.

    Dot Animation cleaned up, now it works with both platforms.

    From this day, just going to check the TODO list.

---

Fifth Day:

        [x] Add new screen with Profile.
        [x] Circular Progression added.

        [x] Profile Pic needs to added.
        [x] Profile Pic selecting from Gallery
        [x] Allow / Accesses. UserPermissions.tsx
        [x] Data.json read progress. Mapping that information.

---

Sixth Day:

        [x] Code Clean-up. Now circular progression works on both android and ios.
        [x] Progress bar's animation.
        [x] Tag's need to be added.
        [x] Header needs to worked on.
        [x] Quickies part.

---

Seventh Day:

        [x] Quickies -> Quickies in progress. Bottom. Color
        [x] Percentage. Font.
        [x] Star and trophy -> yellow.
        [x] Progress Color.
        [x] GitHub configuration.

---

After Feedback (20.07) :

    "data.json’daki veriyi dogrudan ana ekranda backend’den çekmişsin gibi kullanıp, secili journey’e gore ekran state ini guncellemendi(secili journey e gore percent, points, skills tum alanlar degismeli). Data tek seferde geliyor yani. Daha kucuk komponentlere ilk çektiğin yerden gerekli kucuk datayı paslayabilirsin."


    Bug Fixing:
        [x] Journey Card percentage doesn't show on ios.

    Adding:
        [x] UI tasks need to be have tags.
        [x] General UI Worked on to have room for tags.
        [x] Tags are dynamic, if 3 tags or 1 still the same.

---

    Bug Fixing:
        [x] Tags' placement is gets off when added 2 or 4 times. On even numbers.
        {x} Taking skills as a JSON file in TypeScript as normal entity. It should be centralized, not converted.

    Tried:
        [x] The ring on the circle progress can be independent component. -> Can't be done.

---

    Bug Fixing:
        [x] Journey progress circle stuck. Bunun data.json icindeki percent degerine gore değişmesi gerekiyor.
        [x] Profile pic doesnt change when updated on gallery.

    Adding:
        [x] Data.json to skills (graphic design, motion design etc) needs to change dynamically respect to journey.

---
