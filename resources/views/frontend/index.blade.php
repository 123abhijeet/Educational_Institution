@extends('frontend.layouts.master')
@section('title','Home | Educational Institution')
@section('body')
   <!-- slider area start -->
   <div class="slider-area owl-carousel has-color">
        <div class="slider_item" style="background: url(frontend/images/bg/slider-bg1.jpg) center/cover no-repeat;">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 col-md-9">
                        <div class="slider-content">
                            <h3>admission ‘ 20</h3>
                            <h1><span class="primary-color" >Your bright future</span> is Our Mission</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore</p>
                            <a class="btn btn-primary btn-round btn-lg mt-5" href="#">Start Learning Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="slider_item" style="background: url(frontend/images/bg/slider-bg2.jpg) center/cover no-repeat;">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 col-md-9">
                        <div class="slider-content">
                            <h3>admission ‘ 20</h3>
                            <h1><span class="primary-color" >Your bright future</span> is Our Mission</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore</p>
                            <a class="btn btn-primary btn-round btn-lg mt-5" href="#">Start Learning Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="slider_item" style="background: url(frontend/images/bg/slider-bg3.jpg) center/cover no-repeat;">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 col-md-9">
                        <div class="slider-content">
                            <h3>admission ‘ 20</h3>
                            <h1><span class="primary-color" >Your bright future</span> is Our Mission</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore</p>
                            <a class="btn btn-primary btn-round btn-lg mt-5" href="#">Start Learning Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- slider area end -->

    <!-- about area start -->
    <div class="about-area ptb--120">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="about-left-content">
                        <div class="section-title">
                            <span class="text-uppercase">about us</span>
                             <h2>Welcome to</h2><h2><span>Our </span> <span class="primary-color">university</span></h2> 
                        </div>
                        <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                        <a class="btn btn-primary btn-round" href="#">Read more</a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="abt-right-thumb">
                        <div class="abt-rt-inner">
                            <a class="expand-video" href="https://www.youtube.com/watch?v=cdfMgotGKIM"><i class="fa fa-play"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- about area end -->

    <!-- course area start -->
    <div class="course-area  pt--120 pb--70">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="section-title">
                        <span class="text-uppercase">Build your career</span>
                        <h2>Featured Courses </h2> 
                    </div>
                </div>
            </div>
  
            <div class="commn-carousel owl-carousel card-deck"> 
                <div class="card mb-5">
                    <div class="course-thumb">
                        <img src="{{asset('frontend/images/course/cs-img1.jpg')}}" alt="image">
                        <span class="cs-price primary-bg">$150</span>
                    </div>
                    <div class="card-body  p-25"> 
                        <div class="course-meta-title mb-4">
                            <div class="course-meta-text">
                                <h4><a href="course-details.html">Application Design Course</a></h4>
                                <ul class="course-meta-stats">
                                    <li><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half"></i></li>
                                    <li>36 <i class="fa fa-comment"></i></li>
                                    <li>85 <i class="fa fa-heart"></i></li>
                                </ul>
                            </div> 
                            <a href="course-details.html"><img class="course-meta-thumbnail rounded-circle" src="{{asset('frontend/images/author/auth1.jpg')}}" alt="image"> </a>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sciunt. Neque quisquam est, qui dolorem ipsum tatem.</p> 
                        <ul class="course-meta-details list-inline  w-100">
                            <li> 
                             <p>Course</p>
                             <span>3 Year</span>
                            </li>
                            <li>
                             <p>Class Size</p>
                              <span>18</span>
                            </li> 
                            <li>
                             <p>Duration</p>
                              <span>1 hour</span>
                            </li>      
                        </ul>  
                  </div><!-- card-body -->
                </div><!-- card -->
 
                <div class="card mb-5">
                    <div class="course-thumb">
                        <img src="{{asset('frontend/images/course/cs-img2.jpg')}}" alt="image">
                        <span class="cs-price primary-bg">$150</span>
                    </div>
                    <div class="card-body  p-25"> 
                        <div class="course-meta-title mb-4">
                            <div class="course-meta-text">
                                <h4><a href="course-details.html">Data Structure & Algorithm</a></h4>
                                <ul class="course-meta-stats">
                                    <li><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half"></i></li>
                                    <li>36 <i class="fa fa-comment"></i></li>
                                    <li>85 <i class="fa fa-heart"></i></li>
                                </ul>
                            </div> 
                            <a href="course-details.html"><img class="course-meta-thumbnail rounded-circle" src="{{asset('frontend/images/author/auth1.jpg')}}" alt="image"> </a>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sciunt. Neque quisquam est, qui dolorem ipsum tatem.</p> 
                        <ul class="course-meta-details list-inline  w-100">
                            <li> 
                             <p>Course</p>
                             <span>3 Year</span>
                            </li>
                            <li>
                             <p>Class Size</p>
                              <span>18</span>
                            </li> 
                            <li>
                             <p>Duration</p>
                              <span>1 hour</span>
                            </li>      
                        </ul>  
                  </div><!-- card-body -->
                </div><!-- card -->
  
                <div class="card mb-5">
                    <div class="course-thumb">
                        <img src="{{asset('frontend/images/course/cs-img3.jpg')}}" alt="image">
                        <span class="cs-price primary-bg">$150</span>
                    </div>
                    <div class="card-body  p-25"> 
                        <div class="course-meta-title mb-4">
                            <div class="course-meta-text">
                                <h4><a href="course-details.html">Android App Development</a></h4>
                                <ul class="course-meta-stats">
                                    <li><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half"></i></li>
                                    <li>36 <i class="fa fa-comment"></i></li>
                                    <li>85 <i class="fa fa-heart"></i></li>
                                </ul>
                            </div> 
                            <a href="course-details.html"><img class="course-meta-thumbnail rounded-circle" src="{{asset('frontend/images/author/auth1.jpg')}}" alt="image"> </a>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sciunt. Neque quisquam est, qui dolorem ipsum tatem.</p> 
                        <ul class="course-meta-details list-inline  w-100">
                            <li> 
                             <p>Course</p>
                             <span>3 Year</span>
                            </li>
                            <li>
                             <p>Class Size</p>
                              <span>18</span>
                            </li> 
                            <li>
                             <p>Duration</p>
                              <span>1 hour</span>
                            </li>      
                        </ul>  
                  </div><!-- card-body -->
                </div><!-- card --> 
            </div> 
        </div>
    </div>
    <!-- course area end -->

    <!-- take toure area start -->
    <div class="take-toure-area ptb--120">
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <div class="section-title sec-style-two">
                        <img class="title-top-shape" src="{{asset('frontend/images/icon/title-top-shape.png')}}" alt="image">
                        <span class="text-uppercase">Take A Tour</span>
                        <h2>Video tour on Edification</h2>
                    </div>
                </div>
            </div>
            <div class="video-area">
                <a class="expand-video" href="https://www.youtube.com/watch?v=cdfMgotGKIM"><i class="fa fa-play"></i></a>
            </div>
        </div>
    </div>
    <!-- take toure area end -->
    
    <!-- teacher area start -->
    <div class="teacher-area pb--70">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-md-6">
                    <div class="section-title">
                        <span class="text-uppercase">Learn from best</span>
                        <h2>Our Teachers</h2> 
                    </div>
                </div>
            </div>
            <div class="commn-carousel owl-carousel card-deck">   
              <div class="card mb-5"> 
                <img src="{{asset('frontend/images/teacher/teacher-member1.jpg')}}" alt="image"> 
                <div class="card-body teacher-content p-25">  
                  <h4 class="card-title mb-4"><a href="teacher-details.html">Patrick Garner Dony</a></h4>
                  <span class="primary-color font-italic d-block mb-3">Economist</span>
                  <p class="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p> 
                  <ul class="list-inline">
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                    <li><a href="#"><i class="fa fa-deviantart"></i></a></li>
                    <li><a href="#"><i class="fa fa-github"></i></a></li>
                  </ul>
                </div>
              </div><!-- card -->    

              <div class="card mb-5"> 
                <img src="{{asset('frontend/images/teacher/teacher-member2.jpg')}}" alt="image"> 
                <div class="card-body teacher-content p-25">  
                  <h4 class="card-title mb-4"><a href="teacher-details.html">Cameron Brown</a></h4>
                  <span class="primary-color font-italic d-block mb-3">Financier</span>
                  <p class="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p> 
                  <ul class="list-inline">
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                    <li><a href="#"><i class="fa fa-deviantart"></i></a></li>
                    <li><a href="#"><i class="fa fa-github"></i></a></li>
                  </ul>
                </div>
              </div><!-- card -->    

              <div class="card mb-5"> 
                <img src="{{asset('frontend/images/teacher/teacher-member3.jpg')}}" alt="image"> 
                <div class="card-body teacher-content p-25">  
                  <h4 class="card-title mb-4"><a href="teacher-details.html">Joseph Mack Monika</a></h4>
                  <span class="primary-color font-italic d-block mb-3">Languages</span>
                  <p class="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p> 
                  <ul class="list-inline">
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                    <li><a href="#"><i class="fa fa-deviantart"></i></a></li>
                    <li><a href="#"><i class="fa fa-github"></i></a></li>
                  </ul>
                </div>
              </div><!-- card -->  
              <div class="card mb-5"> 
                <img src="{{asset('frontend/images/teacher/teacher-member4.jpg')}}" alt="image"> 
                <div class="card-body teacher-content p-25">  
                  <h4 class="card-title mb-4"><a href="teacher-details.html">Patrick Garner Dony</a></h4>
                  <span class="primary-color font-italic d-block mb-3">Economist</span>
                  <p class="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p> 
                  <ul class="list-inline">
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                    <li><a href="#"><i class="fa fa-deviantart"></i></a></li>
                    <li><a href="#"><i class="fa fa-github"></i></a></li>
                  </ul>
                </div>
              </div><!-- card -->         
            </div>
        </div>
    </div>
    <!-- teacher area end -->
    
    <!-- events area start -->
    <div class="event-area  pt--120 pb--80">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="section-title">
                        <span class="text-uppercase">Join with us</span>
                        <h2>Upcoming Events to </h2> 
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="media align-items-center mb-5">
                        <div class="media-head primary-bg">
                            <span><sub>MAR</sub>25</span>
                            <p>2018</p>
                        </div>
                        <div class="media-body">
                            <h4><a href="#">Affiliate Marketing</a></h4>
                            <p><i class="fa fa-clock-o"></i>05:23 AM - 09:23 AM</p>
                        </div>
                    </div> <!-- media -->
                </div><!-- col-md-6 -->
                <div class="col-md-6">
                    <div class="media align-items-center mb-5">
                        <div class="media-head primary-bg">
                            <span><sub>OCT</sub>25</span>
                            <p>2018</p>
                        </div>
                        <div class="media-body">
                            <h4><a href="#">Facebook Marketing</a></h4>
                            <p><i class="fa fa-clock-o"></i>05:23 AM - 09:23 AM</p>
                        </div>
                    </div> <!-- media -->
                </div><!-- col-md-6 --> 
                <div class="col-md-6">
                    <div class="media align-items-center mb-5">
                        <div class="media-head primary-bg">
                            <span><sub>NOV</sub>25</span>
                            <p>2018</p>
                        </div>
                        <div class="media-body">
                            <h4><a href="#">Edustar Autumn</a></h4>
                            <p><i class="fa fa-clock-o"></i>05:23 AM - 09:23 AM</p>
                        </div>
                    </div> <!-- media -->
                </div><!-- col-md-6 -->  
                <div class="col-md-6">
                    <div class="media align-items-center mb-5">
                        <div class="media-head primary-bg">
                            <span><sub>DEC</sub>25</span>
                            <p>2018</p>
                        </div>
                        <div class="media-body">
                            <h4><a href="#">Workshop PHP</a></h4>
                            <p><i class="fa fa-clock-o"></i>05:23 AM - 09:23 AM</p>
                        </div>
                    </div> <!-- media -->
                </div><!-- col-md-6 -->   
            </div><!-- row -->
        </div><!-- container -->
    </div><!-- event-area -->
    <!-- events area end -->

    <!-- testimonial area start -->
    <div class="testimonial-area ptb--120">
        <img class="tst-bg" src="{{asset('frontend/images/bg/tst-bg-shape.png')}}" alt="image">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3 text-center">
                    <div class="tst-carousel owl-carousel">
                        <div class="testimonial-content pb--40">
                            <div class="section-title sec-style-two">
                                <span class="text-uppercase primary-color mb-0">happy students</span>
                                <h2>Testimonial </h2>
                            </div>
                            <h3>‘‘ Vous devez profiter de la vie. Toujours aimez, les personnespositives penser. ‘‘</h3>
                            <h4>Kawsar Ahhamed</h4>
                            <span>App Developer</span>
                        </div>  
                        <div class="testimonial-content pb--40">
                            <div class="section-title sec-style-two">
                                <span class="text-uppercase primary-color mb-0">happy students</span>
                                <h2>Testimonial</h2>
                            </div>
                            <h3>‘‘ Vous devez profiter de la vie. Toujours aimez, les personnespositives penser. ‘‘</h3>
                            <h4>Kawsar Ahhamed</h4>
                            <span>App Developer</span>
                        </div>  
                        <div class="testimonial-content pb--40">
                            <div class="section-title sec-style-two">
                                <span class="text-uppercase primary-color mb-0">happy students</span>
                                <h2>Testimonial</h2>
                            </div>
                            <h3>‘‘ Vous devez profiter de la vie. Toujours aimez, les personnespositives penser. ‘‘</h3>
                            <h4>Kawsar Ahhamed</h4>
                            <span>App Developer</span>
                        </div> 
                    </div>
                </div><!-- row -->
            </div><!-- row -->
        </div><!-- container -->
    </div><!-- testimonial-area --> 

    <!-- blog area start -->
    <div class="feature-blog  pt--120 pb--70">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="section-title">
                        <span class="text-uppercase">Top stories</span>
                        <h2>Blog & news</h2> 
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="blog-carousel owl-carousel card-deck">                     
                  <div class="card mb-5"> 
                    <img class="card-img-top" src="{{asset('frontend/images/blog/blog-thumbnail1.jpg')}}" alt="image">
                    <div class="card-body p-25"> 
                        <ul class="list-inline primary-color mb-3">
                            <li><i class="fa fa-clock-o"></i> AUGUST 6, 2017</li>
                            <li><i class="fa fa-comments"></i> 3 Comments</li>
                        </ul>
                      <h4 class="card-title mb-4"><a href="blog-details.html">The Death Of architechture</a></h4>
                      <p class="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p> 
                      <a class="btn btn-primary btn-round btn-sm" href="blog-details.html"> Read More </a>
                    </div>
                  </div><!-- card -->                
                  <div class="card mb-5"> 
                    <img class="card-img-top" src="{{asset('frontend/images/blog/blog-thumbnail2.jpg')}}" alt="image">
                    <div class="card-body p-25"> 
                        <ul class="list-inline primary-color mb-3">
                            <li><i class="fa fa-clock-o"></i> AUGUST 6, 2017</li>
                            <li><i class="fa fa-comments"></i> 3 Comments</li>
                        </ul>
                      <h4 class="card-title mb-4"><a href="blog-details.html">Aenean id ullamcorper</a></h4>
                      <p class="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p> 
                      <a class="btn btn-primary btn-round btn-sm" href="blog-details.html"> Read More </a>
                    </div>
                  </div><!-- card -->
       
                  <div class="card mb-5"> 
                    <img class="card-img-top" src="{{asset('frontend/images/blog/blog-thumbnail3.jpg')}}" alt="image">
                    <div class="card-body p-25"> 
                        <ul class="list-inline primary-color mb-3">
                            <li><i class="fa fa-clock-o"></i> AUGUST 6, 2017</li>
                            <li><i class="fa fa-comments"></i> 3 Comments</li>
                        </ul>
                      <h4 class="card-title mb-4"><a href="blog-details.html">The Death Of architechture</a></h4>
                      <p class="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p> 
                      <a class="btn btn-primary btn-round btn-sm" href="blog-details.html"> Read More </a>
                    </div>
                  </div><!-- card -->         
                  <div class="card mb-5"> 
                    <img class="card-img-top" src="{{asset('frontend/images/blog/blog-thumbnail1.jpg')}}" alt="image">
                    <div class="card-body p-25"> 
                        <ul class="list-inline primary-color mb-3">
                            <li><i class="fa fa-clock-o"></i> AUGUST 6, 2017</li>
                            <li><i class="fa fa-comments"></i> 3 Comments</li>
                        </ul>
                      <h4 class="card-title mb-4"><a href="blog-details.html">The Death Of architechture</a></h4>
                      <p class="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p> 
                      <a class="btn btn-primary btn-round btn-sm" href="blog-details.html"> Read More </a>
                    </div>
                  </div><!-- card -->    
                </div><!-- blog-carousel -->
            </div><!-- blog-carousel -->
        </div>
    </div> <!-- blog area end -->

    <!-- cta area start -->
    <div class="cta-area primary-bg has-color ptb--50"> 
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-9">
                    <div class="cta-content">
                        <p class="mb-2">Click to Join the Advance Workshop</p>
                        <h2>Training in advance networking</h2>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="cta-btn">
                        <a class="btn btn-light btn-round" href="#">Join Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- cta area end --> 
@endsection