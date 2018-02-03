<?php

  add_action( 'wp_enqueue_scripts', 'enqueue_styles', 99 );

  function enqueue_styles() {
     wp_enqueue_style( 'style', get_stylesheet_uri(), array(), 99 );
  }

 ?>
