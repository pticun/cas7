<?php get_header(); ?>
  <div class="layout-content layout-content-light_top">
    <!--?php include ('sidebar-login.php'); ?-->

    <div class="widget">
      <div class="textwidget"></div>
    </div>


    <h1 class="header-h1">Игровой клуб Вулкан Удачи</h1>

    <div class="games">
      <?php if (have_posts()): while (have_posts()) : the_post(); ?>
        <li class="newlister">
          <?php if ( has_post_thumbnail()) :
            the_post_thumbnail('medium');
          else: ?>
            <img src="<?php echo catchFirstImage(); ?>" title="<?php the_title(); ?>" alt="<?php the_title(); ?>" />
          <?php endif; ?>
          <div class="title-game"><?php the_title(); ?></div>
          <a rel="nofollow" class="play-game" href="<?php the_field('link'); ?>" title="Играть <?php the_title(); ?>">Играть</a>
          <a rel="nofollow" class="view-demo" href="<?php the_permalink(); ?>" title="Демо <?php the_title(); ?>">Демо</a>
        </li>
      <?php endwhile; else: ?>
      <?php endif; ?>
    </div>

    <div class="clear_fix"></div>

    <div class="game-desc">
      <div class="footer_pre clear_fix">

        <?php $term = get_queried_object();
          if ( $term ): ?>
          <?php echo get_field( 'description', $term->taxonomy . '_' . $term->term_id ); ?>
        <?php endif; ?>
      </div>
    </div>

  </div>
<?php get_footer(); ?>
