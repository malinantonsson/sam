<?php

  add_action( 'wp_enqueue_scripts', 'enqueue_styles', 99 );

  function enqueue_styles() {
     wp_enqueue_style( 'style', get_stylesheet_uri(), array(), 99 );
  }

  function theme_js() {
      wp_register_script('theme_js', get_stylesheet_directory_uri() . '/scripts/app.js', array('jquery'),'1.1', true);
      wp_enqueue_script( 'theme_js');
  }

  add_action('wp_enqueue_scripts', 'theme_js');

 ?>
