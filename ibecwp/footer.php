<footer></footer>

<!--div> Link to javascript file and a hook into maps api.
This is also where we load our places api using &libraries=places.
bonus: change project.js to projectes6.js to see es6 syntax in action</div-->

<script src="<?php echo get_bloginfo('template_directory'); ?>/assets/js/project.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDu3PmYIdOr0EebzqQL2sGQCjrKaUzkONg&libraries=places&callback=initMap"
async defer></script>
<?php wp_footer(); ?>
</body>
</html>
