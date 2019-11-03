<?php
/*
  * Template name: Homepage Template
  * */
get_header(); ?>
<?php if (ale_get_meta('homepage_enable_formbox') == 'enable') { ?>
    <section class="orderbox">
        <div class="orderbox__cat-wrp">
            <div class="wrapper">
                <h2 class="orderbox__title font_two"><?php echo esc_attr(ale_get_meta('homepage_orderbox_title')); ?></h2>
                <ul class="orderbox__cat-list font_two">
                    <li class="orderbox__cat-item">For home</li>
                    <li class="orderbox__cat-item">For event</li>
                    <li class="orderbox__cat-item">Gardener supply</li>
                    <li class="orderbox__cat-item orderbox__cat-item--active">Industrial</li>
                    <li class="orderbox__cat-item">Other</li>
                </ul>
            </div>
        </div>
        <div class="orderbox__order-wrp wrapper">
            <div class="orderbox__gardeners">
                <div class="orderbox__slider-arrows">
                    <button class="orderbox__slider-prev"><i class="fa fa-caret-left" aria-hidden="true"></i></button>
                    <button class="orderbox__slider-next"><i class="fa fa-caret-right" aria-hidden="true"></i></button>
                </div>
                <?php if (ale_get_meta('homepage_gardeners_title')) { ?><h4 class="orderbox__gardeners-title"><?php echo esc_attr(ale_get_meta('homepage_gardeners_title')); ?></h4><?php } ?>
                <?php if (ale_get_meta('homepage_gardeners_subtitle')) { ?><span class="orderbox__gardeners-subtitle"><?php echo esc_attr(ale_get_meta('homepage_gardeners_subtitle')); ?></span><?php } ?>
                <div class="orderbox__slider">
                    <?php
                    $args = array(
                        'post_type'       => 'gardeners',
                        'posts_per_page'  => '-1'
                    );
                    $query = new WP_Query( $args );
                    if ( $query->have_posts() ): while ( $query->have_posts() ): $query->the_post(); ?>
                        <div class="orderbox__slider-item">
                            <div class="orderbox__slider-data-wrp">
                                <?php echo get_the_post_thumbnail(get_the_ID(), 'gardeners-face'); ?>
                                <div class="orderbox__slider-name-wrp">
                                    <span class="orderbox__gardeners-name font_two"><?php the_title(); ?></span>
                                    <?php if (ale_get_meta('gardener_position')) { ?><span class="orderbox__gardeners-position font_two"><?php echo esc_attr(ale_get_meta('gardener_position')); ?></span><?php } ?>
                                </div>
                            </div>
                            <?php if (ale_get_meta('gardener_dscr')) { ?><p class="orderbox__gardeners-dscr font_two"><?php echo esc_attr(ale_get_meta('gardener_dscr')); ?></p><?php } ?>
                            <div class="orderbox__gardeners-txt"><?php the_excerpt(); ?></div>
                            <?php if (ale_get_meta('gardener_facebook')) { ?><a target="_blanc" class="orderbox__gardeners-fb" href="<?php echo esc_url(ale_get_meta('gardener_facebook')); ?>"><i class="fa fa-facebook-square"></i></a><?php } ?>
                            <?php if (ale_get_meta('gardener_twitter')) { ?><a target="_blanc" class="orderbox__gardeners-twitter" href="<?php echo esc_url(ale_get_meta('gardener_twitter')); ?>"><i class="fa fa-twitter"></i></a><?php } ?>
                            <?php if (ale_get_meta('gardener_email')) { ?><a class="orderbox__gardeners-email" href="mailto:<?php echo esc_attr(ale_get_meta('gardener_email')); ?>"><i class="fa fa-envelope"></i></a><?php } ?>
                        </div>
                    <?php endwhile; endif; wp_reset_query() ?>
                </div>
            </div>
            <div class="orderbox__form-wrp">
                <form method="post" action="<?php the_permalink(); ?>" class="orderbox__form">
                    <div class="orderbox__input-wrp">
                        <input class="orderbox__form-input" name="contact[name]" type="text" placeholder="Full name" value="<?php echo isset($_POST['contact']['name']) ? $_POST['contact']['name'] : '' ?>" required="required" id="contact-form-name">
                    </div>
                    <div class="orderbox__input-wrp orderbox__input-wrp--half">
                        <input class="orderbox__form-input orderbox__form-input--half" name="contact[phone]" type="text" placeholder="Phone" value="<?php echo isset($_POST['contact']['phone']) ? $_POST['contact']['phone'] : '' ?>" required="required" id="contact-form-phone">
                        <input class="orderbox__form-input orderbox__form-input--half" name="contact[email]" type="email" placeholder="Email" value="<?php echo isset($_POST['contact']['email']) ? $_POST['contact']['email'] : '' ?>" required="required" id="contact-form-email">
                    </div>
                    <div class="orderbox__input-wrp">
                        <input class="orderbox__form-input" name="contact[address]" type="text" placeholder="Address" value="<?php echo isset($_POST['contact']['address']) ? $_POST['contact']['address'] : '' ?>" required="required" id="contact-form-address">
                    </div>
                    <div class="orderbox__input-wrp">
                        <input class="orderbox__form-input" name="contact[date]" type="date" placeholder="Date" value="<?php echo isset($_POST['contact']['date']) ? $_POST['contact']['date'] : '' ?>" required="required" id="contact-form-date">
                    </div>
                    <div class="orderbox__input-wrp orderbox__input-wrp--txt">
                        <textarea class="orderbox__form-input" name="contact[comments]" type="text" placeholder="Comments..." value="<?php echo isset($_POST['contact']['comments']) ? $_POST['contact']['comments'] : '' ?>" required="required" id="contact-form-comments"></textarea>
                    </div>
                    <input class="orderbox__form-submit" type="submit" class="submit" value="<?php echo _e('Order', 'gardener') ?>">
                    <?php wp_nonce_field(); ?>
                </form>
            </div>
            <div class="orderbox__projects">
                <?php if (ale_get_meta('homepage_latestproject_title')) { ?><h4 class="orderbox__projects-title"><?php echo esc_attr(ale_get_meta('homepage_latestproject_title')); ?></h4><?php } ?>
                <?php
                $args = array(
                    'post_type'       => 'projects',
                    'posts_per_page'  => '3'
                );

                $query = new WP_Query( $args );
                if ( $query->have_posts() ): while ( $query->have_posts() ): $query->the_post();?>
                    <span class="orderbox__projects-data"><?php echo get_the_date(); ?></span>
                    <h5 class="orderbox__projects-data-title font_two"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h5>
                <?php endwhile; endif; wp_reset_query() ?>
                <?php if (ale_get_meta('homepage_linktext')) { ?><a href="<?php echo home_url('/').'projects' ?>" class="orderbox__projects-link font_two"><?php echo ale_get_meta('homepage_linktext'); ?><i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                <?php } ?>
            </div>
        </div>
    </section>
<?php } ?>
<?php if (ale_get_meta('homepage_enable_service') == 'enable') { ?>
    <section class="services">
        <div class="services__image-wrp">
            <?php
            $args = array(
                'post_type'       => 'services',
                'posts_per_page'  => '-1'
            );
            $services_count = 0;
            $services_display = 'services__display-none';
            $query = new WP_Query( $args );
            if ( $query->have_posts() ): while ( $query->have_posts() ): $query->the_post(); ?>
                <?php if ($services_count == 0) {
                    $services_display = 'services__display';
                } else {
                    $services_display = 'services__display-none';
                }
                $services_count++;
                ?>
                <div class="services__image-content <?php echo esc_attr($services_display) ?>" data-id="<?php echo get_the_ID(); ?>" style="background-image: url(<?php echo esc_url(the_post_thumbnail_url('full')); ?>)"></div>
            <?php endwhile; endif; wp_reset_query() ?>
        </div>
        <div class="services__center-wrp">
            <div class="services__item-wrp">
                <?php
                $args = array(
                    'post_type'       => 'services',
                    'posts_per_page'  => '-1'
                );
                $square_count = 0;
                $square_active = 'no-active';
                $query = new WP_Query( $args );
                if ( $query->have_posts() ): while ( $query->have_posts() ): $query->the_post(); $square_count++; ?>
                    <?php if ($square_count == 1) {
                        $square_active = 'active';
                    } else {
                        $square_active = 'no-active';
                    } ?>
                    <div class="services__item">
                        <div class="services__item-square <?php echo esc_attr('services__item-square--' . $square_count . ' services__item-square--' . $square_active) ?>" data-id="<?php echo get_the_ID(); ?>">
                            <div class="services__item-icon-wrp">
                                <img class="services__item-icon" src="<?php echo esc_attr(ale_get_meta('services_icon')); ?>" alt="">
                                <img class="services__item-icon-hover" src="<?php echo esc_attr(ale_get_meta('services_hoover-icon')); ?>" alt="">
                            </div>
                            <h4 class="services__item-title"><?php echo the_title(); ?></h4>
                        </div>
                    </div>
                <?php endwhile; endif; wp_reset_query() ?>
            </div>
            <div class="services__content-wrp">
                <?php
                $args = array(
                    'post_type'       => 'services',
                    'posts_per_page'  => '-1'
                );
                $services_count = 0;
                $services_display = 'services__display-none';
                $query = new WP_Query( $args );
                if ( $query->have_posts() ): while ( $query->have_posts() ): $query->the_post(); ?>
                    <?php if ($services_count == 0) {
                        $services_display = 'services__display';
                    } else {
                        $services_display = 'services__display-none';
                    }
                    $services_count++;
                    ?>
                    <div class="services__content-item <?php echo esc_attr($services_display) ?>" data-id="<?php echo get_the_ID(); ?>">
                        <h4 class="services__content-title"><?php the_title(); ?></h4>
                        <?php if (ale_get_meta('services_subtitle')) { ?>
                            <span class="services__content-subtitle font_two"><?php echo esc_attr(ale_get_meta('services_subtitle')); ?></span>
                        <?php } ?>
                        <img src="<?php echo esc_url(ale_get_meta('services_dscr-image', true, $post_id)); ?>" alt="">
                        <div class="services__content-txt"><?php the_content(); ?></div>
                        <div class="services__content-divider"></div>
                        <?php if (ale_get_meta('services_link-title-1')) { ?>
                            <a href="<?php echo esc_url(ale_get_meta('services_link-1')); ?>" target="_blank" class="services__content-link"><?php echo esc_attr(ale_get_meta('services_link-title-1')); ?></a>
                        <?php } ?>
                        <?php if (ale_get_meta('services_link-title-2')) { ?>
                            <a href="<?php echo esc_url(ale_get_meta('services_link-2')); ?>" target="_blank" class="services__content-link"><?php echo esc_attr(ale_get_meta('services_link-title-2')); ?></a>
                        <?php } ?>
                        <?php if (ale_get_meta('services_link-title-3')) { ?>
                            <a href="<?php echo esc_url(ale_get_meta('services_link-3')); ?>" target="_blank" class="services__content-link"><?php echo esc_attr(ale_get_meta('services_link-title-3')); ?></a>
                        <?php } ?>
                    </div>
                <?php endwhile; endif; wp_reset_query() ?>
            </div>
        </div>
        <div class="services__right-wrp"></div>
    </section>
<?php } ?>

<?php if (ale_get_meta('homepage_enable_partners') == 'enable') { ?>
    <section class="partners" <?php if (ale_get_meta('homepage_partners_bg')) {echo 'style="background-image: url('.esc_url(ale_get_meta('homepage_partners_bg')).'")';} ?>>
        <div class="partners__wrp wrapper">
            <div class="partners__slider">
                <ul class="partners__slider-list">
                    <?php
                    $args = array(
                        'post_type'       => 'partners',
                        'posts_per_page'  => '5'
                    );
                    $partners = new WP_Query( $args );
                    if ( $partners->have_posts() ): while ( $partners->have_posts() ): $partners->the_post(); ?>
                        <li class="partners__slider-item">
                <span class="partners__slider-title font_two">
                  <?php the_title(); ?>
                </span>
                            <?php if(ale_get_meta('partners_subtitle')) { ?>
                                <span class="partners__slider-subtitle">
                    <?php echo esc_attr(ale_get_meta('partners_subtitle')); ?>
                  </span>
                            <?php } ?>
                            <div class="partners__content-data-hidden">
                                <div class="partners__content-data">
                                    <div class="partners__content-txt">
                                        <?php the_content(); ?>
                                    </div>
                                    <?php if (ale_get_meta('partners_site')) { ?>
                                        <span class="partners__content-site">
                        <?php echo esc_attr(ale_get_meta('partners_site')); ?>
                      </span>
                                    <?php } ?>
                                    <?php if (ale_get_meta('partners_link')) { ?>
                                        <span class="partners__content-link">
                        <?php echo esc_attr(ale_get_meta('partners_link')); ?>
                      </span>
                                    <?php } ?>
                                </div>
                            </div>
                        </li>
                    <?php endwhile; endif; wp_reset_query() ?>
                </ul>
            </div>
            <div class="partners__content">
                <div class="partners__slider-nav">
                    <div class="partners__slider-count-wrp font_two">
                        <span class="partners__slider-count-current"></span>
                        /
                        <span class="partners__slider-count-total"><?php echo esc_attr($partners->post_count); ?></span>
                    </div>
                    <div class="partners__slider-arrows-wrp">
                        <span class="partners__slider-arrow-up"><i class="fa fa-caret-up" aria-hidden="true"></i></span>
                        <span class="partners__slider-arrow-down"><i class="fa fa-caret-down" aria-hidden="true"></i></span>
                    </div>
                    <h2 class="partners__title font_two">
                        <?php echo ale_get_meta('homepage_services_title'); ?>
                    </h2>
                </div>
                <div class="partners__content-data-txt">
                </div>
            </div>
        </div>
    </section>
<?php } ?>

<?php if (ale_get_meta('homepage_enable_testimonials') == 'enable') { ?>
    <section class="testimonials">
        <span class="testimonials__bg font_two"><?php esc_html_e('Testimonials', 'gardener') ?></span>
        <div class="testimonials__wrp wrapper">
            <i class="fa fa-arrow-left testimonials__slider-prev" aria-hidden="true"></i>
            <i class="fa fa-arrow-right testimonials__slider-next" aria-hidden="true"></i>
            <div class="testimonials__slider">
                <?php
                $args = array(
                    'post_type'       => 'testimonials',
                    'posts_per_page'  => -1
                );
                $testimonials = new WP_Query( $args );
                if ( $testimonials->have_posts() ): while ( $testimonials->have_posts() ): $testimonials->the_post(); ?>
                    <div class="testimonials__slider-item">
                        <div class="testimonials__slider-image"><?php echo get_the_post_thumbnail(get_the_ID(), 'thumbnail'); ?></div>
                        <h4 class="testimonials__slider-title font_two"><?php the_title(); ?></h4>

                        <?php if (ale_get_meta('testimonials_position')) { ?>
                            <div class="testimonials__slider-position"><?php echo esc_attr(ale_get_meta('testimonials_position')); ?></div>
                        <?php } ?>

                        <?php if (ale_get_meta('testimonials_rating')) { ?>
                            <div class="testimonials__slider-rating">
                                <?php
                                for ($i=0; $i < 5; $i++) {
                                    if ($i < ale_get_meta('testimonials_rating')) {
                                        echo '<i class="fa fa-star testimonials__slider-rating--plus" aria-hidden="true"></i>';
                                    } else {
                                        echo '<i class="fa fa-star testimonials__slider-rating--minus" aria-hidden="true"></i>';
                                    }
                                }
                                ?>
                            </div>
                        <?php } ?>

                        <?php if (ale_get_meta('testimonials_subtitle')) { ?>
                            <span class="testimonials__slider-subtitle"><?php echo esc_attr(ale_get_meta('testimonials_subtitle')); ?></span>
                        <?php } ?>

                        <div class="testimonials__slider-txt">
                            <?php the_content(); ?>
                        </div>
                        <div class="testimonials__slider-quote">
                            <i class="fa fa-quote-left" aria-hidden="true"></i>
                        </div>
                    </div>

                <?php endwhile; endif; wp_reset_query() ?>
            </div>
        </div>

    </section>
<?php } ?>

<?php if (ale_get_meta('homepage_enable_testimonials') == 'enable') { ?>
    <section class="portfolio">
        <div class="portfolio__slider">
            <?php
            $args = array(
                'post_type'       => 'projects',
                'posts_per_page'  => -1
            );
            $projects = new WP_Query( $args );
            if ( $projects->have_posts() ): while ( $projects->have_posts() ): $projects->the_post(); ?>
                <div class="portfolio__slider-item">
                    <div class="portfolio__slider-img-wrp">
                        <div class="portfolio__slider-image"><?php echo get_the_post_thumbnail(get_the_ID(), 'portfolio-slider'); ?></div>
                        <div class="portfolio__slider-txt">
                            <div class="portfolio__slider-txt-wrp wrapper">
                                <div class="portfolio__title-wrp">
                                    <?php if (ale_get_meta('portfolio_subtitle')) { ?>
                                        <span class="portfolio__slider-subtitle font_two"><?php echo esc_attr(ale_get_meta('portfolio_subtitle')); ?></span>
                                    <?php } ?>
                                    <h4 class="portfolio__slider-title font_two"><?php the_title(); ?></h4>
                                    <?php if (ale_get_meta('portfolio_company')) { ?>
                                        <span class="portfolio__slider-company">Client: <?php echo esc_attr(ale_get_meta('portfolio_company')); ?></span>
                                    <?php } ?>
                                    <?php if (ale_get_meta('portfolio_date')) { ?>
                                        <span class="portfolio__slider-date">Date: <?php echo esc_attr(ale_get_meta('portfolio_date')); ?></span>
                                    <?php } ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            <?php endwhile; endif; wp_reset_query() ?>
        </div>
        <div class="portfolio__slider-arrows-wrp">
            <div class="wrapper">
                <div class="portfolio__slider-nav">
                    <div class="portfolio__slider-arrows">
                        <span class="portfolio__slider-arrow-left"><i class="fa fa-caret-left" aria-hidden="true"></i></span>
                        <span class="portfolio__slider-arrow-right"><i class="fa fa-caret-right" aria-hidden="true"></i></i></span>
                    </div>
                    <div class="portfolio__slider-count-wrp font_two">
                        <span class="portfolio__slider-count-current"></span>
                        /
                        <span class="portfolio__slider-count-total"><?php echo esc_attr($partners->post_count); ?></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
<?php } ?>
<?php get_footer(); ?>