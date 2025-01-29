<!-- Footer -->
<section class="main-footer">
    <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <div class="mb-4 pe-lg-4">
                    <a href="" title="Soft Campus">
                        <!-- <img src="images/header-logo.svg" width="188"
                                height="70" alt="Logo" class="img-fluid mb-4" /> -->
                        <h4 class="me-xl-4 me-3 text-white fw-bold">Soft Campus</h4>
                    </a>
                    <p class="fs-16 fw-400 label-color-1 lh-24">Soft Campus is the leading IT training institute and software development company in India. With headquarters in Jodhpur, it is on a mission to skill, reskill, and upskill individuals in the ever-evolving technology domains.</p>
                </div>
                <div class="pe-lg-4">
                    <span class="fs-20 lh-26 fw-600 label-color-2">Stay up to date</span>
                    <p class="fs-16 fw-400 label-color-1 lh-24 mt-2"> Subscribe to our newsletter to receive the latest updates and offers. </p>
                    <form class="newsletters" autocomplete="off" novalidate>
                        <div class="newsletter_message ps-3 mb-2"></div>
                        <div class="position-relative footer-newsletter mx-auto mx-lg-0">
                            <input type="email" class="w-100 fs-16 fw-400 label-color-1 ps-3" id="newsletter_email" name="newsletter_email" placeholder="Enter your email" required />
                            <div class="invalid-feedback position-absolute text-start">The email address is required </div>
                            <button class="shadow-none position-absolute end-0 rounded-circle border-0 newsletter_icon top-0" title="Send">
                                <img src="{{asset('frontend/images/newsletter-icon.svg')}}" width="25" height="25" alt="Send" class="img-fluid" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-lg-8 d-lg-block">
                <div class="row">
                    <div class="col-lg-4 d-lg-block d-none">
                        <div class="footer-links">
                            <span class="fs-20 lh-26 fw-600 label-color-2">Popular online courses</span>
                            <ul class="list-unstyled mt-4">
                                <li class="mb-2">
                                    <a href="#" class="fs-16 fw-500 label-color-1 decoration-none" title="Ethical Hacking Training">Ethical Hacking Training</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="fs-16 fw-500 label-color-1 decoration-none" title="Digital Marketing Training">Digital Marketing Training</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="fs-16 fw-500 label-color-1 decoration-none" title="Python Training">Python Training</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="fs-16 fw-500 label-color-1 decoration-none" title="Android Training">Android Training</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="fs-16 fw-500 label-color-1 decoration-none" title="Web Development Training">Web Development Training</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="fs-16 fw-500 label-color-1 decoration-none" title="SEO Training">SEO Training</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="fs-16 fw-500 label-color-1 decoration-none" title="Content Writing Training">Content Writing Training</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="fs-16 fw-500 label-color-1 decoration-none" title="Flutter Training">Flutter Training</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="fs-16 fw-500 label-color-1 decoration-none" title="Data Science Training">Data Science Training</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 d-lg-block d-none">
                        <div class="footer-links">
                            <span class="fs-20 lh-26 fw-600 label-color-2">Our Centers</span>
                            <ul class="list-unstyled mt-4">
                                <li class="mb-2">
                                    <a href="#" class="fs-16 fw-500 label-color-1 decoration-none" title="Ahmedabad">Ahmedabad</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="fs-16 fw-500 label-color-1 decoration-none" title="Mumbai">Mumbai</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="fs-16 fw-500 label-color-1 decoration-none" title="Delhi">Delhi</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="fs-16 fw-500 label-color-1 decoration-none" title="Bangalore">Bangalore</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="fs-16 fw-500 label-color-1 decoration-none" title="Chennai">Chennai</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="fs-16 fw-500 label-color-1 decoration-none" title="Kolkata">Kolkata</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="fs-16 fw-500 label-color-1 decoration-none" title="Hyderabad">Hyderabad</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="fs-16 fw-500 label-color-1 decoration-none" title="Pune">Pune</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="fs-16 fw-500 label-color-1 decoration-none" title="Jaipur">Jaipur</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="footer-links shift-down">
                            <span class="fs-20 lh-26 fw-600 label-color-2">Useful links</span>
                            <ul class="list-unstyled mt-4">
                                <li class="mb-2">
                                    <a href="{{route('Studentzone')}}" class="fs-16 fw-500 label-color-1 decoration-none" title="About Us">Student's Zone</a>
                                </li>
                                <li class="mb-2">
                                    <a href="{{route('Branch')}}" class="fs-16 fw-500 label-color-1 decoration-none" title="Blog">Branch Details</a>
                                </li>
                                <li class="mb-2">
                                    <a href="{{route('Course')}}" class="fs-16 fw-500 label-color-1 decoration-none" title="Portfolio">Courses</a>
                                </li>
                                <li class="mb-2">
                                    <a href="{{route('Feedback')}}" class="fs-16 fw-500 label-color-1 decoration-none" title="Portfolio">Feedback</a>
                                </li>
                                <li class="mb-2">
                                    <a href="{{route('Contact')}}" class="fs-16 fw-500 label-color-1 decoration-none" title="We Are Hiring">Contact Us</a>
                                </li>
                                <li class="mb-2">
                                    <a href="{{route('Gallery')}}" class="fs-16 fw-500 label-color-1 decoration-none" title="Self-Paced Courses">Gallery</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- End Footer -->

<!-- all-rights-reserved-section start-->
<section class="all-rights py-4">
    <div class="container">
        <div class="row">
            <!-- Social Links Column -->
            <div class="col-lg-6">
                <div class="social-links-footer">
                    <ul class="list-unstyled d-flex mb-lg-0 mb-2 justify-content-lg-start justify-content-center">
                        <!-- Social Media Icons -->
                        <li class="me-2">
                            <a href="#" title="Facebook" target="_blank" class="d-flex bg-white align-items-center justify-content-center decoration-none rounded label-color-3 fs-22">
                                <i class="fab fa-facebook"></i>
                            </a>
                        </li>
                        <li class="me-2">
                            <a href="#" title="Twitter" target="_blank" class="d-flex bg-white align-items-center justify-content-center decoration-none rounded label-color-3 fs-22">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li class="me-2">
                            <a href="#" title="Instagram" target="_blank" class="d-flex bg-white align-items-center justify-content-center decoration-none rounded label-color-3 fs-22">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li class="me-2">
                            <a href="#" title="YouTube" target="_blank" class="d-flex bg-white align-items-center justify-content-center decoration-none rounded label-color-3 fs-22">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </li>
                        <li class="me-2">
                            <a href="#" title="LinkedIn" target="_blank" class="d-flex bg-white align-items-center justify-content-center decoration-none rounded label-color-3 fs-22">
                                <i class="fab fa-linkedin"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- Rights Reserved Text Column -->
            <div class="col-lg-6 d-flex align-items-center justify-content-lg-end justify-content-center">
                <div class="text-lg-end text-center">
                    <p class="m-0 fs-16 fw-400"> All rights reserved by <a href="" class="label-color-3 text-white decoration-none" target="_blank" title="Soft Campus"> Soft Campus </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- all-rights-reserved-section end -->

<!-- sticky-footer start-->
<section class="sticky-footer px-2  d-lg-none d-block">
    <div class="position-fixed bottom-0 d-lg-none d-block rounded-top overflow-hidden footer-wrapper mx-1 sale-strip">
        <ul class="mb-0 d-flex list-unstyled align-items-stretch"></ul>
    </div>
</section>
<!-- sticky-footer end-->

<a title="Back to Top" class="backToTop d-flex align-items-center decoration-none justify-content-center text-white mb-2">
    <i class="fas fa-arrow-up"></i>
</a>
</body>

<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
<script src="{{asset('frontend/js/wow.min.js')}}"></script>
<script src="{{asset('frontend/js/sliders.js')}}"></script>
<script src="{{asset('frontend/js/courses-list.js')}}"></script>
<script src="{{asset('frontend/js/intlTelInput.min.js')}}"></script>
<script src="{{asset('frontend/js/intlTelInput-jquery.js')}}"></script>
<script src="{{asset('frontend/js/lightbox.min.js')}}"></script>

<!-- Form Validation -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery.bootstrapvalidator/0.5.2/css/bootstrapValidator.min.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-validator/0.5.3/js/bootstrapValidator.min.js"></script>
<script src="{{asset('frontend/js/custom.js')}}"></script>
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
<script src="https://www.revolutiontechhead.in/js/jquery.min.js"></script>
<script src="https://www.revolutiontechhead.in/js/jquery.validate.min.js"></script>

<!-- Footer Script -->
<script src="{{asset('frontend/js/plugins.js')}}"></script>
<script src="{{asset('frontend/js/rev-slider/jquery.themepunch.tools.min.js')}}"></script>
<script src="{{asset('frontend/js/rev-slider/jquery.themepunch.revolution.min.js')}}"></script>
<script src="{{asset('frontend/js/rev-slider/revolution.extension.actions.min.js')}}"></script>
<script src="{{asset('frontend/js/rev-slider/revolution.extension.carousel.min.js')}}"></script>
<script src="{{asset('frontend/js/rev-slider/revolution.extension.kenburn.min.js')}}"></script>
<script src="{{asset('frontend/js/rev-slider/revolution.extension.layeranimation.min.js')}}"></script>
<script src="{{asset('frontend/js/rev-slider/revolution.extension.migration.min.js')}}"></script>
<script src="{{asset('frontend/js/rev-slider/revolution.extension.parallax.min.js')}}"></script>
<script src="{{asset('frontend/js/rev-slider/revolution.extension.navigation.min.js')}}"></script>
<script src="{{asset('frontend/js/rev-slider/revolution.extension.slideanims.min.js')}}"></script>
<script src="{{asset('frontend/js/rev-slider/revolution.extension.video.min.js')}}"></script>
<script src="{{asset('frontend/js/jquery.marquee.js')}}"></script>


<script type="text/javascript">
    // console.clear();
    console.log = function() {};
</script>
<script>
    $(document).ready(function() {
        if ($("#navbarSupportedContent").hasClass("show")) {}
        if ($("#navbarSupportedContent").hasClass("show")) {
            $('body').addClass('d-none');
        }
        $('.accordion-toggle').on('click', function() {
        $(this).toggleClass('collapsed');
    });
    });
</script>
<script>
    $("#carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 100,
        stagePadding: 100,
        items: 1,
        loop: true,
        margin: 20,
        dots: true,
        loop: true,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                stagePadding: 25,
                responsiveClass: true,
                dots: true,
                nav: false,
                items: 1
            },
            600: {
                stagePadding: 25,
                responsiveClass: true,
                dots: true,
                nav: false,
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    $(".owl-prev").html('<i class="fa fa-chevron-left"></i>');
    $(".owl-next").html('<i class="fa fa-chevron-right"></i>');;
</script>
<script>
    void 0 !== $.fn.revolution && $("#rev_slider").revolution({
        sliderType: "standard",
        sliderLayout: "auto",
        dottedOverlay: "none",
        delay: 7e3,
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            onHoverStop: "off",
            touch: {
                touchenabled: "on",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: !1
            }
        },
        viewPort: {
            enable: !0,
            outof: "pause",
            visible_area: "80%"
        },
        navigation: {
            arrows: {
                enable: !0,
                style: "hesperiden",
                tmp: "",
                rtl: !1,
                hide_onleave: !1,
                hide_onmobile: !0,
                hide_under: 0,
                hide_over: 9999,
                hide_delay: 200,
                hide_delay_mobile: 1200,
                left: {
                    container: "slider",
                    h_align: "left",
                    v_align: "center",
                    h_offset: 20,
                    v_offset: 0
                },
                right: {
                    container: "slider",
                    h_align: "right",
                    v_align: "center",
                    h_offset: 20,
                    v_offset: 0
                }
            }
        },
        responsiveLevels: [2048, 1750, 1192],
        gridwidth: [1180, 1180, 980],
        gridheight: [350, 350, 550],
        lazyType: "none",
        shadow: 0,
        spinner: "off",
        stopLoop: "on",
        stopAfterLoops: 0,
        shuffle: "off",
        autoHeight: "on",
        fullScreenAlignForce: "off",
        fullScreenOffsetContainer: "",
        fullScreenOffset: "",
        disableProgressBar: "on",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: !1,
        fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: !1
        }
    });
</script>
<script>
    $(function() {
        $('.marquee').marquee({
            speed: 50,
            gap: 0,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true,
            pauseOnHover: true
        });
        $('.marquee1').marquee({
            speed: 50,
            gap: 0,
            delayBeforeStart: 0,
            direction: 'up',
            duplicated: true,
            pauseOnHover: true
        });
    });
</script>
<script>
    var $owl = $('#award-carousel');
    $owl.children().each(function(index) {
        $(this).attr('data-position', index);
    });
    $owl.owlCarousel({
        center: true,
        loop: true,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        items: 3,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    $(document).on('click', '.owl-item>div', function() {
        var $speed = 300;
        $owl.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
    });
</script>

</html>