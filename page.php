<?php get_header(); ?>

	<main role="main">
		<!-- section -->
		<section>

			<h1><?php the_title(); ?></h1>

      <div class="content">
    		<?php if (have_posts()): while (have_posts()) : the_post(); ?>

    			<!-- article -->
    			<div class="content__col">

    				<?php the_content(); ?>

    			</div>
          <?php
            if(get_field('second_column'))
              {
              	echo '<div class="content__col">' . get_field('second_column') . '</div>';
              }
          ?>
    			<!-- /article -->

    		<?php endwhile; ?>

    		<?php else: ?>

    			<!-- article -->
    			<article>

    				<h2><?php _e( 'Sorry, nothing to display.', 'html5blank' ); ?></h2>

    			</article>
    			<!-- /article -->

    		<?php endif; ?>
      </div>

		</section>
		<!-- /section -->
	</main>

<?php get_footer(); ?>
