# iBec-Test-Project

The first source is the standalone project and the second one is the same site converted to a (very simple) Wordpress theme. Please let me know if this is too sparse a use case and I will work something up that includes a dedicated maps database and an xml intermediary to show some more complex php.

If you want to test just the theme go ahead and drop it in a fresh install of Wordpress 4.8.1. If you want to clone the included Wordpress install create a database and name it ibecwp. The table prefix is ibecwp_ and I used ibecwp for the username and password as well. The last thing you have to do is change the theme to the ibecwp theme (this has to be done when first loading despite the fact that it’s the only theme in the directory) After that it should function as normal.
                                                 
The comments throughout are slightly more conversational and thorough than normal reflecting the nature of the project.

There is a “bonus” javascript file which utilizes ECMAscript 2015 (ES6) syntax. Instead of npm-ing babel and a bunch of dependencies I just included both files to keep it simple and lightweight. The only significant differences are the use of const rather than var and a couple of arrow functions.

Any other noteworthy decisions (or lack thereof) should be mentioned in the comments. Please let me know if you have any questions or if there is anything you’d like to see in more detail.

Thanks!

R

