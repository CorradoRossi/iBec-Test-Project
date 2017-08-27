<!DOCTYPE html>
<html>
  <head>

    <!--meta> Hi iBec folks! A few caveats -
    A more thorough approach would have included a seperate
    database and used an XML file to pre-populate the map with favorite/best
    restaurants, or created a function that saved all restaurants that
    the user searches for and allows them to add their own notes etc, however
    that was beyond the scope of this project.</meta-->

    <meta charset="utf-8">
    <meta name="viewport" width="device-width, initial-scale=1">
    <title>iBec Map Project</title>
    <link href="<?php echo get_bloginfo('template_directory'); ?>/assets/css/style.css" rel="stylesheet">
    <?php wp_head();?>
    <body>
      <div class="nav">
        <h3>Where do you want to eat?</h3>
        <input id="pac-input" class="controls" type="text" placeholder="e.g. Aurora Provisions">
      </div>
