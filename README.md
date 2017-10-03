# iBec-Test-Project

You can view this project at https://corradorossi.github.io/iBec-Test-Project/

The iBec Static folder is the standalone project and the iBec Wordpress is the same site converted to a (very simple) Wordpress theme. Please let me know if this is too sparse a use case and I will work something up that includes a dedicated maps database and an xml intermediary to show some more complex php.

If you want to test the theme go ahead and drop it in a fresh install of Wordpress 4.8.1. I created a database named ibecwp, set the table prefix to ibecwp_ however I didn't upload the whole Worpdress source so you'll just have to quickly set it up on your end. Since I didn't add the loop into the theme it should work out of the box once you select it.
                                                 
The comments throughout are slightly more conversational and descriptive than normal reflecting the nature of the project.

There is a “bonus” javascript file which utilizes ECMAscript 2015 (ES6) syntax. Instead of npm-ing babel and a bunch of dependencies I just included both files to keep it simple and lightweight. The only significant differences are the use of const rather than var and a couple of arrow functions.

Any other noteworthy decisions (or lack thereof) should be mentioned in the comments. Please let me know if you have any questions or if there is anything you’d like to see in more detail.

Thanks!

R

