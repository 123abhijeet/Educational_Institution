@extends('frontend.layouts.master')
@section('title','Gallery | Educational Institution')
@section('body')
    <!-- crumbs area start -->
    <div class="crumbs-area">
        <div class="container">
            <div class="crumb-content">
                <h4 class="crumb-title"><span>Our</span> events</h4>
            </div>
        </div>
    </div>
    <!-- crumbs area end -->
    <!-- teacher area start -->
    <div class="all-teachers  pt--120 pb--70">
        <div class="container">
            <div class="row">  
                <div class="col-lg-4 col-md-6">
                  <div class="card mb-5"> 
                    <img src="{{asset('frontend/images/teacher/teacher-member1.jpg')}}" alt="image"> 
                    
                  </div><!-- card -->    
                </div><!-- teacher single end -->

                <!-- teacher single start -->
                <div class="col-lg-4 col-md-6">
                  <div class="card mb-5"> 
                    <img src="{{asset('frontend/images/teacher/teacher-member2.jpg')}}" alt="image"> 
                    
                  </div><!-- card --> 
                </div><!-- teacher single end -->
                
                <!-- teacher single start -->
                <div class="col-lg-4 col-md-6"> 
                  <div class="card mb-5"> 
                    <img src="{{asset('frontend/images/teacher/teacher-member3.jpg')}}" alt="image"> 
                    
                  </div><!-- card -->  
                </div><!-- teacher single end --> 

                <!-- teacher single start -->
                <div class="col-lg-4 col-md-6"> 
                  <div class="card mb-5"> 
                    <img src="{{asset('frontend/images/teacher/teacher-member4.jpg')}}" alt="image"> 
                   
                  </div><!-- card --> 
                </div>
                <!-- teacher single end -->

                <!-- teacher single start -->
                <div class="col-lg-4 col-md-6"> 
                  <div class="card mb-5"> 
                    <img src="{{asset('frontend/images/teacher/teacher-member5.jpg')}}" alt="image"> 
               
                  </div><!-- card --> 
                </div><!-- teacher single end -->

                <!-- teacher single start -->
                <div class="col-lg-4 col-md-6"> 
                  <div class="card mb-5"> 
                    <img src="{{asset('frontend/images/teacher/teacher-member6.jpg')}}" alt="image"> 
                
                  </div><!-- card --> 
                </div><!-- teacher single end --> 
            </div>
        </div>
    </div>
    <!-- teacher area end -->

    

    <!-- cta area start -->
    <div class="cta-area secondary-bg has-color ptb--50"> 
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