var contactRecaptcha,
    btn = $(".backToTop");
$(window).scroll(function () {
    $(window).scrollTop() > 300 ? btn.addClass("show") : btn.removeClass("show");
}),
    btn.on("click", function (e) {
        e.preventDefault(), $("html, body").animate({
            scrollTop: 0
        }, "300");
    }),
    new WOW().init(),
    $(document).ready(function () {
        $(".course-price-detail-button").replaceWith("<button type='button' class='open-popup course-price-detail-button' title='Enquire Now' data-toggle='modal' data-target='#enrollNowModal'> Enquire Now </button>");
    }),
    $(".course-nav ul li").on("click", function (e) {
        var t = $(this).attr("href"),
            a = $(t);
        if (0 !== a.length) {
            e.preventDefault();
            var s = a.offset().top;
            $("body, html").animate({
                scrollTop: s
            }, 100);
        }
    }),
    $(document).ready(function () {
        $(".course-nav ul").height();
    }),
    $(window)
        .scroll(function () {
            var e = $(window).scrollTop();
            $(".holder").each(function (t) {
                if ($(this).position().top <= e + 60) {
                    $(".course-nav ul li a.active").removeClass("active"), $(".course-nav ul li a").eq(t).addClass("active"), $(".course-nav ul").height();
                    var a = $(".course-nav ul li").length;
                    $(".course-nav ul").animate({
                        scrollTop: e / a
                    }, 0);
                }
            });
        })
        .scroll(),
    $(function () {
        $("#close-video1").click(function () {
            $("#iframe1").attr("src", $("#iframe1").attr("src"));
        }),
            $("#playVdo1").click(function () {
                $("#iframe1").attr("src", "https://www.youtube.com/embed/26u5Na0tB3A");
            }),
            $("#playVdo2").click(function () {
                $("#iframe1").attr("src", "https://www.youtube.com/embed/_hWo2jLj0fI");
            }),
            $("#playVdo3").click(function () {
                $("#iframe1").attr("src", "https://www.youtube.com/embed/bEjtJdoySN0");
            }),
            $("#playVdo4").click(function () {
                $("#iframe1").attr("src", "https://www.youtube.com/embed/pMr7_G0MAkA");
            }),
            $("#playVdo5").click(function () {
                $("#iframe1").attr("src", "https://www.youtube.com/embed/HIfPY_KBIN8");
            }),
            $("#playVdo6").click(function () {
                $("#iframe1").attr("src", "https://www.youtube.com/embed/okc89RFwJr8");
            }),
            $("#playVdo7").click(function () {
                $("#iframe1").attr("src", "https://www.youtube.com/embed/tzcldll0Q5E");
            }),
            $("#playVdo8").click(function () {
                $("#iframe1").attr("src", "https://www.youtube.com/embed/gFdDE3dBwgQ");
            }),
            $("#playVdo9").click(function () {
                $("#iframe1").attr("src", "https://www.youtube.com/embed/VHvtwIpZK6U");
            }),
            $("#playVdo10").click(function () {
                $("#iframe1").attr("src", "https://www.youtube.com/embed/AB-MeKAE3FI");
            }),
            $("#playVdo11").click(function () {
                $("#iframe1").attr("src", "https://www.youtube.com/embed/zJzB96V8yis");
            }),
            $("#playVdo12").click(function () {
                $("#iframe1").attr("src", "https://www.youtube.com/embed/eg9CjKI4n2A");
            }),
            $("#playVdo13").click(function () {
                $("#iframe1").attr("src", "https://www.youtube.com/embed/N4l5zs_ODuM");
            }),
            $("#playVdo14").click(function () {
                $("#iframe1").attr("src", "https://www.youtube.com/embed/YIjzPTpsHCw");
            }),
            $("#playVdo15").click(function () {
                $("#iframe1").attr("src", "https://www.youtube.com/embed/pgw9mmmtdPM");
            }),
            $("#playVdo16").click(function () {
                $("#iframe1").attr("src", "https://www.youtube.com/embed/IlPVEpDjExs");
            }),
            $("#playVdo17").click(function () {
                $("#iframe1").attr("src", "https://www.youtube.com/embed/zsg3UO174jY");
            }),
            $("#playVdo18").click(function () {
                $("#iframe1").attr("src", "https://www.youtube.com/embed/q-CHg00sXSI");
            }),
            $("#playVdo19").click(function () {
                $("#iframe1").attr("src", "https://www.youtube.com/embed/R-I5WbIO1yU");
            }),
            $("#playVdo20").click(function () {
                $("#iframe1").attr("src", "https://www.youtube.com/embed/l3BEj9NNJTU");
            }),
            $("#playVdo21").click(function () {
                $("#iframe1").attr("src", "https://www.youtube.com/embed/UlKDP5GYGIk");
            }),
            $("#playVdo22").click(function () {
                $("#iframe1").attr("src", "https://www.youtube.com/embed/RRnxHcUlqFo");
            }),
            $("#playVdo23").click(function () {
                $("#iframe1").attr("src", "https://www.youtube.com/embed/p5oPuKUVoK8");
            }),
            $("#playVdo24").click(function () {
                $("#iframe1").attr("src", "https://www.youtube.com/embed/h_K3QiedDW4");
            }),
            $("#playVdo25").click(function () {
                $("#iframe1").attr("src", "https://www.youtube.com/embed/TWmzMeBTljg");
            }),
            $("#playVdo26").click(function () {
                $("#iframe1").attr("src", "https://www.youtube.com/embed/XFzT-X-bZAg");
            }),
            $("#playVdo27").click(function () {
                $("#iframe1").attr("src", "https://www.youtube.com/embed/j9PuhG_RL10");
            }),
            $("#playVdo28").click(function () {
                $("#iframe1").attr("src", "https://www.youtube.com/embed/H6iOjR4eFjk");
            }),
            $("#playVdo29").click(function () {
                $("#iframe1").attr("src", "https://www.youtube.com/embed/xVItohzriig");
            }),
            $("#playVdo30").click(function () {
                $("#iframe1").attr("src", "https://www.youtube.com/embed/y8JTG_518y4");
            }),
            $("#playVdo31").click(function () {
                $("#iframe1").attr("src", "https://www.youtube.com/embed/Vkw-h0xKwmE");
            }),
            $("#playVdo32").click(function () {
                $("#iframe1").attr("src", "https://www.youtube.com/embed/nq_GmYbBoYM");
            }),
            $("#playVdo33").click(function () {
                $("#iframe1").attr("src", "https://www.youtube.com/embed/uH-oOoxaNYc");
            }),
            $("#playVdo34").click(function () {
                $("#iframe1").attr("src", "https://www.youtube.com/embed/FXqhtoho0Pg");
            }),
            $("#playVdo35").click(function () {
                $("#iframe1").attr("src", "https://www.youtube.com/embed/dkq2DvWeFzI");
            });


    }),

// home page testimonials video slider
$(".owl-carousel .playVideo").on("click", function(){
    var iframeUrl = $(this).data("iframe-url");
    var modalHtml = '<iframe src="' + iframeUrl + '" width="100%" id="iframe3"  height="500" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen class="mx-auto"></iframe>';
    $(".iframe-video-box").html(modalHtml);
  });

  $('#close-video3').click(function( e ){
    var contentdiv = $(this).next('.iframe-video-box');
    var iframe = $(contentdiv).find('iframe:first');
    var video = $(iframe).attr("src");
    $(iframe).attr("src","");
    $(iframe).attr("src",video);
});

//  form in first input filds autofocus
$('.modal').on('shown.bs.modal', function () {
    $(this).find( 'input:visible:first').focus();
});

$('#course_type').change(function() {
    $courseValue = ( this.value );
    if($courseValue == 'Online'){
        $("#centervlid").hide();
        $("#all-course").addClass('all-course')
    }else{
        $("#centervlid").show();
        $("#all-course").removeClass('all-course')
    }
});

//courses letcure popup
$(function () {
    $('#close-video2').click(function () {
        $('#iframe2').attr('src', $('#iframe2').attr('src'));
    });
    $('#playlecture1').click(function () {
        $('#iframe2').attr('src', 'https://www.youtube.com/embed/vxO8eECuPRM');
    });
});

$(function () {
    $(".menu-backdrop").click(function () {
        $(".navbar-collapse").removeClass("show"), $(".navbar-toggler ").attr("aria-expanded", "false");
    });
}),
    1 != $("#hidden_script").val() &&
    ($(".mobile_country_code")
        .intlTelInput({
            initialCountry: "IN",
            autoPlaceholder: "polite",
            separateDialCode: !0
        })
        .on("countrychange", function (e, t) { })
        .on("blur", function (e, t) {
            $("#mobile_country_code").val("+" + $(".mobile_country_code").intlTelInput("getSelectedCountryData").dialCode);
        })
        .on("focus", function (e, t) {
            $("#mobile_country_code").val("+" + $(".mobile_country_code").intlTelInput("getSelectedCountryData").dialCode);
        }),
        $(".mobile_country_code_course")
            .intlTelInput({
                initialCountry: "IN",
                autoPlaceholder: "polite",
                separateDialCode: !0
            })
            .on("countrychange", function (e, t) { })
            .on("blur", function (e, t) {
                $("#mobile_country_code_course").val("+" + $(".mobile_country_code_course").intlTelInput("getSelectedCountryData").dialCode);
            })
            .on("focus", function (e, t) {
                $("#mobile_country_code_course").val("+" + $(".mobile_country_code_course").intlTelInput("getSelectedCountryData").dialCode);
            })),
    $(".numeric").on("input", function (e) {
        this.value = this.value.replace(/[^0-9]/g, "");
    }),
    $(document).ready(function () {
        $(".blankPopUp").on("click", function (e) {
            $(".formReset").bootstrapValidator("resetForm", !0), $(".submit_loader").attr("disabled", !1), $(".success_message").html(""), $(".needs-validation").removeClass("was-validated");
        });
    }),
    $(document).ready(function () {
        $(".book_free_class")
            .bootstrapValidator({
                excluded: [":disabled"],
                fields: {
                    name: {
                        validators: {
                            notEmpty: {
                                message: "Please enter your name"
                            },
                            regexp: {
                                regexp: /^[a-zA-Z ]*$/,
                                message: "Please enter valid name"
                            }
                        }
                    },
                    email: {
                        validators: {
                            notEmpty: {
                                message: "Please enter your email"
                            },
                            emailAddress: {
                                message: "Please enter valid email"
                            }
                        }
                    },
                    mobile: {
                        validators: {
                            notEmpty: {
                                message: "Please enter your mobile number"
                            },
                            regexp: {
                                regexp: /^[1-9][0-9]{9,15}$/,
                                message: "Please enter valid mobile number"
                            }
                        }
                    },
                    course: {
                        validators: {
                            notEmpty: {
                                message: "Please select your course"
                            }
                        }
                    },
                    center: {
                        validators: {
                            callback: {
                                callback: function(value, validator, $field) {
                                  var center = $('#course_type').val();
                                  if (center === 'Online' && value === '') {
                                    return {
                                        valid: true
                                    }
                                  }else if(value != ''){
                                    return {
                                        valid: true
                                    }
                                  }
                                  return {
                                    valid: false,
                                    message: 'Please select your center'
                                  }
                                }
                            },
                        }
                    },
                    course_type_request: {
                        validators: {
                            notEmpty: {
                                message: "Please select your course type"
                            }
                        }
                    },
                    enquiry_message: {
                        validators: {
                            notEmpty: {
                                message: "Please enter your message"
                            },
                            regexp: {
                                regexp: /^[a-zA-Z0-9 ]*$/,
                                message: "Please enter valid message"
                            }
                        }
                    },
                },
            })
            .on("success.form.bv", function (e) {
                e.preventDefault(),
                    $.ajax({
                        url: "ajax.php?action=book_free_class",
                        method: "POST",
                        data: $(".book_free_class").serialize(),
                        beforeSend: function () {
                            $(".submit_loader").html('<i class="fa fa-spinner fa-spin"></i> Loading...'), $(".submit_loader").attr("disabled", !0);
                        },
                        success: function (e) {
                            $(".submit_loader").html("SUBMIT"),
                                $(".submit_loader").attr("disabled", !1),
                                $(".success_message").html('<div class="text-success mb-3" style="width:100%">Thanks for enquiry with us we will contact as soon as possible. </div>'),
                                $(".book_free_class").bootstrapValidator("resetForm", !0);
                        },
                        complete: function (e) {
                            $(".submit_loader").html("SUBMIT"), $(".submit_loader").attr("disabled", !1);
                        },
                    });
            });
    }),

    
    $(document).ready(function () {
        $(".book_free_class_responsive")
            .bootstrapValidator({
                excluded: [":disabled"],
                fields: {
                    name: {
                        validators: {
                            notEmpty: {
                                message: "Please enter your name"
                            },
                            regexp: {
                                regexp: /^[a-zA-Z ]*$/,
                                message: "Please enter valid name"
                            }
                        }
                    },
                    email: {
                        validators: {
                            notEmpty: {
                                message: "Please enter your email"
                            },
                            emailAddress: {
                                message: "Please enter valid email"
                            }
                        }
                    },
                    mobile: {
                        validators: {
                            notEmpty: {
                                message: "Please enter your mobile number"
                            },
                            regexp: {
                                regexp: /^[1-9][0-9]{9,15}$/,
                                message: "Please enter valid mobile number"
                            }
                        }
                    },
                    course: {
                        validators: {
                            notEmpty: {
                                message: "Please select your course"
                            }
                        }
                    },
                    center: {
                        validators: {
                            callback: {
                                callback: function(value, validator, $field) {
                                  var center = $('#course_type').val();
                                  if (center === 'Online' && value === '') {
                                    return {
                                        valid: true
                                    }
                                  }else if(value != ''){
                                    return {
                                        valid: true
                                    }
                                  }
                                  return {
                                    valid: false,
                                    message: 'Please select your center'
                                  }
                                }
                            },
                        }
                    },
                    course_type_request: {
                        validators: {
                            notEmpty: {
                                message: "Please select your course type"
                            }
                        }
                    },
                    enquiry_message: {
                        validators: {
                            notEmpty: {
                                message: "Please enter your message"
                            },
                            regexp: {
                                regexp: /^[a-zA-Z0-9 ]*$/,
                                message: "Please enter valid message"
                            }
                        }
                    },
                },
            })
            .on("success.form.bv", function (e) {
                e.preventDefault(),
                    $.ajax({
                        url: "ajax.php?action=book_free_class",
                        method: "POST",
                        data: $(".book_free_class_responsive").serialize(),
                        beforeSend: function () {
                            $(".submit_loader").html('<i class="fa fa-spinner fa-spin"></i> Loading...'), $(".submit_loader").attr("disabled", !0);
                        },
                        success: function (e) {
                            $(".submit_loader").html("SUBMIT"),
                                $(".submit_loader").attr("disabled", !1),
                                $(".success_message").html('<div class="text-success mb-3" style="width:100%">Thanks for enquiry with us we will contact as soon as possible. </div>'),
                                $(".book_free_class_responsive").bootstrapValidator("resetForm", !0);
                        },
                        complete: function (e) {
                            $(".submit_loader").html("SUBMIT"), $(".submit_loader").attr("disabled", !1);
                        },
                    });
            });
    }),
    $(document).ready(function () {
        $("#resumeForm")
            .bootstrapValidator({
                excluded: [":disabled"],
                message: "This value is not valid",
                fields: {
                    resumeName: {
                        validators: {
                            notEmpty: {
                                message: "Please enter your name"
                            },
                            regexp: {
                                regexp: /^[a-zA-Z ]*$/,
                                message: "Please enter valid name"
                            }
                        }
                    },
                    resumeEmail: {
                        validators: {
                            notEmpty: {
                                message: "Please enter your email"
                            },
                            emailAddress: {
                                message: "Please enter valid email"
                            }
                        }
                    },
                    resumeMobile: {
                        validators: {
                            notEmpty: {
                                message: "Please enter your mobile number"
                            },
                            regexp: {
                                regexp: /^[1-9][0-9]{9,15}$/,
                                message: "Please enter valid mobile number"
                            }
                        }
                    },
                    // jobProfile: {
                    //     message: "Please select your job profile",
                    //     validators: {
                    //         callback: {
                    //             message: 'Please select your job profile',
                    //             callback: function(value, validator) {
                    //               return value != '';
                    //             }
                    //         }
                    //     }
                    // },
                    resumeFile: {
                        message: "Resume is not valid",
                        validators: {
                            notEmpty: {
                                message: "Resume is required"
                            },
                            file: {
                                extension: "doc,pdf",
                                type: "application/msword,application/pdf",
                                message: "The selected file is not valid"
                            }
                        },
                    },
                },
            })
            .on("success.form.bv", function (e) {
                e.preventDefault();
                var t = new FormData(this);
                $.ajax({
                    url: "ajax.php?action=submit_resume",
                    method: "POST",
                    data: t,
                    cache: !1,
                    contentType: !1,
                    processData: !1,
                    beforeSend: function () {
                        $(".submit_loader").html('<i class="fa fa-spinner fa-spin"></i> Loading...'), $(".submit_loader").attr("disabled", !0);
                    },
                    success: function (e) {
                        $(".submit_loader").html("SUBMIT"),
                            $(".submit_loader").attr("disabled", !1),
                            $(".success_message").html('<div class="text-success mb-3" style="width:100%">Resume has been submitted successfully. </div>'),
                            $("#resumeForm").bootstrapValidator("resetForm", !0);
                    },
                    complete: function (e) { },
                });
            });
    }),
    (function () {
        "use strict";
        var e = document.querySelectorAll(".newsletters");
        Array.prototype.slice.call(e).forEach(function (e) {
            e.addEventListener(
                "submit",
                function (t) {
                    e.checkValidity() ?
                        ($.ajax({
                            url: "ajax.php?action=newsletter",
                            method: "POST",
                            data: $(".newsletters").serialize(),
                            beforeSend: function () {
                                $(".newsletter_icon").html('<i class="fa fa-spinner fa-spin"></i>'), $(".newsletter_icon").attr("disabled", !0);
                            },
                            success: function (e) {
                                $(".newsletter_icon").html('<img src="images/newsletter-icon.svg" width="24" alt="Send" class="img-fluid" />'),
                                    $(".newsletter_icon").attr("disabled", !1),
                                    $(".newsletters").removeClass("was-validated"),
                                    1 != e ?
                                        ($(".newsletter_message").html('<div class="text-success" style="width:100%">Subscribed successfully !! </div>'), $("#newsletter_email").val("")) :
                                        ($(".newsletter_message").html('<div class="text-success" style="width:100%">Already Subscribed !! </div>'), $(".newsletters").get(0).reset());
                            },
                            complete: function (e) {
                                $(".newsletter_icon").html('<img src="images/newsletter-icon.svg" width="24" alt="Send" class="img-fluid" />'), $(".newsletter_icon").attr("disabled", !1);
                            },
                        }),
                            t.preventDefault(),
                            t.stopPropagation()) :
                        (t.preventDefault(), t.stopPropagation()),
                        e.classList.add("was-validated");
                },
                !1
            );
        });
    })(),
    $(document).ready(function () {
        $("#crsEnrollForm")
            .bootstrapValidator({
                message: "This value is not valid",
                fields: {
                    name: {
                        validators: {
                            notEmpty: {
                                message: "Please enter your name"
                            },
                            regexp: {
                                regexp: /^[a-zA-Z ]*$/,
                                message: "Please enter valid name"
                            }
                        }
                    },
                    email: {
                        validators: {
                            notEmpty: {
                                message: "Please enter your email"
                            },
                            emailAddress: {
                                message: "Please enter valid email"
                            }
                        }
                    },
                    mobile_number: {
                        validators: {
                            notEmpty: {
                                message: "Please enter your mobile number"
                            },
                            regexp: {
                                regexp: /^[1-9][0-9]{9,15}$/,
                                message: "Please enter valid mobile number"
                            }
                        }
                    },
                    center: {
                        validators: {
                            notEmpty: {
                                message: "Please select your center"
                            }
                        }
                    },
                    course: {
                        validators: {
                            notEmpty: {
                                message: "Please select your course"
                            }
                        }
                    },
                    course_name: {
                        validators: {
                            notEmpty: {
                                message: "Please select your course"
                            }
                        }
                    },
                },
            })
            .on("success.form.bv", function (e) {
                e.preventDefault(),
                    $.ajax({
                        url: "ajax.php?action=book_free_class_enroll",
                        method: "POST",
                        data: $("#crsEnrollForm").serialize(),
                        beforeSend: function () {
                            $(".submit_loader_enroll").html('<i class="fa fa-spinner fa-spin"></i> Loading...'), $(".submit_loader_enroll").attr("disabled", !0);
                        },
                        success: function (e) {
                            $(".submit_loader_enroll").html("SUBMIT NOW"),
                                $(".submit_loader_enroll").attr("disabled", !1),
                                $(".success_message_enroll").html('<div class="text-success mb-3" style="width:100%">Thanks for enquiry with us we will contact as soon as possible. </div>'),
                                $("#crsEnrollForm").bootstrapValidator("resetForm", !0),
                                (link_href = "thank-you.html&" + e),
                                setTimeout(function () {
                                    window.location = link_href;
                                }, 1e3);
                        },
                        complete: function (e) {
                            $(".submit_loader_enroll").html("SUBMIT NOW"), $(".submit_loader_enroll").attr("disabled", !1);
                        },
                    });
            });
    }),
    $(document).ready(function () {
        $("#crsDetailForm")
            .bootstrapValidator({
                message: "This value is not valid",
                fields: {
                    name: {
                        validators: {
                            notEmpty: {
                                message: "Please enter your name"
                            },
                            regexp: {
                                regexp: /^[a-zA-Z ]*$/,
                                message: "Please enter valid name"
                            }
                        }
                    },
                    email: {
                        validators: {
                            notEmpty: {
                                message: "Please enter your email"
                            },
                            emailAddress: {
                                message: "Please enter valid email"
                            }
                        }
                    },
                    center: {
                        validators: {
                            notEmpty: {
                                message: "Please select your center"
                            }
                        }
                    },
                    mobile_number: {
                        validators: {
                            notEmpty: {
                                message: "Please enter your mobile number"
                            },
                            regexp: {
                                regexp: /^[1-9][0-9]{9,15}$/,
                                message: "Please enter valid mobile number"
                            }
                        }
                    },
                    course: {
                        validators: {
                            notEmpty: {
                                message: "Please select your course"
                            }
                        }
                    },
                    course_name: {
                        validators: {
                            notEmpty: {
                                message: "Please select your course"
                            }
                        }
                    },
                },
            })
            .on("success.form.bv", function (e) {
                e.preventDefault(),
                    $.ajax({
                        url: "ajax.php?action=book_free_class_enroll",
                        method: "POST",
                        data: $(".crsDetailForm").serialize(),
                        beforeSend: function () {
                            $(".submit_loader_popup").html('<i class="fa fa-spinner fa-spin"></i> Loading...'), $(".submit_loader_popup").attr("disabled", !0);
                        },
                        success: function (e) {
                            $(".submit_loader_popup").html("SUBMIT NOW"),
                                $(".submit_loader_popup").attr("disabled", !1),
                                $(".success_message_details").html('<div class="text-success mb-3" style="width:100%">Thanks for enquiry with us we will contact as soon as possible. </div>');
                            var t = $("#download_file").val(),
                                a = $("#downld-filename").val();
                            if (1 == t) {
                                var s = document.createElement("a");
                                (s.href = "uploads/curriculum/" + a), (s.download = a), s.click(), s.remove();
                            }
                            $(".crsDetailForm").bootstrapValidator("resetForm", !0),
                                (link_href = "thank-you.html&" + e),
                                setTimeout(function () {
                                    window.location = link_href;
                                }, 1e3);
                        },
                        complete: function (e) {
                            $(".submit_loader_popup").html("SUBMIT NOW"), $(".submit_loader_popup").attr("disabled", !1);
                        },
                    });
            });
    }),

    // Footer Course Form
    $(document).ready(function () {
        $("#crsDetailFormFooter")
            .bootstrapValidator({
                message: "This value is not valid",
                fields: {
                    name: {
                        validators: {
                            notEmpty: {
                                message: "Please enter your name"
                            },
                            regexp: {
                                regexp: /^[a-zA-Z ]*$/,
                                message: "Please enter valid name"
                            }
                        }
                    },
                    email: {
                        validators: {
                            notEmpty: {
                                message: "Please enter your email"
                            },
                            emailAddress: {
                                message: "Please enter valid email"
                            }
                        }
                    },
                    center: {
                        validators: {
                            notEmpty: {
                                message: "Please select your center"
                            }
                        }
                    },
                    mobile_number: {
                        validators: {
                            notEmpty: {
                                message: "Please enter your mobile number"
                            },
                            regexp: {
                                regexp: /^[1-9][0-9]{9,15}$/,
                                message: "Please enter valid mobile number"
                            }
                        }
                    },
                },
            })
            .on("success.form.bv", function (e) {
                e.preventDefault(),
                    $.ajax({
                        url: "ajax.php?action=book_free_class_enroll",
                        method: "POST",
                        data: $(".crsDetailFormFooter").serialize(),
                        beforeSend: function () {
                            $(".submit_loader_popup").html('<i class="fa fa-spinner fa-spin"></i> Loading...'), $(".submit_loader_popup").attr("disabled", !0);
                        },
                        success: function (e) {
                            $(".submit_loader_popup").html("SUBMIT NOW"),
                                $(".submit_loader_popup").attr("disabled", !1),
                                $(".success_message_details").html('<div class="text-success mb-3" style="width:100%">Thanks for enquiry with us we will contact as soon as possible. </div>');
                            var t = $("#download_file").val(),
                                a = $("#downld-filename").val();
                            if (1 == t) {
                                var s = document.createElement("a");
                                (s.href = "uploads/curriculum/" + a), (s.download = a), s.click(), s.remove();
                            }
                            $(".crsDetailFormFooter").bootstrapValidator("resetForm", !0),
                                (link_href = "thank-you.html&" + e),
                                setTimeout(function () {
                                    window.location = link_href;
                                }, 1e3);
                        },
                        complete: function (e) {
                            $(".submit_loader_popup").html("SUBMIT NOW"), $(".submit_loader_popup").attr("disabled", !1);
                        },
                    });
            });
    }),

    // Course Details form validation 
    $(document).ready(function () {
        $('#crsDetailForm-landing').bootstrapValidator({
            message: 'This value is not valid',
            fields: {
                name: {
                    validators: {
                        notEmpty: {
                            message: "Please enter your name",
                        },
                        regexp: {
                            regexp: /^[a-zA-Z ]*$/,
                            message: "Please enter valid name"
                        }
                    },
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: "Please enter your email",
                        },
                        emailAddress: {
                            message: 'Please enter valid email'
                        }
                    },
                },
                mobile_number: {
                    validators: {
                        notEmpty: {
                            message: "Please enter your mobile number",
                        },
                        regexp: {
                            regexp: /^[1-9][0-9]{9,15}$/,
                            message: "Please enter valid mobile number"
                        }
                    },
                },
            }
        }).on("success.form.bv", function (e) {
            e.preventDefault();
            $.ajax({
                url: 'ajax.php?action=book_free_class_enroll',
                method: "POST",
                data: $('.crsDetailForm-landing').serialize(),

                beforeSend: function () {
                    $('.submit_loader_landing').html('<i class="fa fa-spinner fa-spin"></i> Loading...');
                    $('.submit_loader_landing').attr('disabled', true);
                },
                success: function (data) {
                    $('.submit_loader_landing').html('SUBMIT NOW');
                    $('.submit_loader_landing').attr('disabled', false);
                    $('.success_message_landing').html('<div class="text-success mb-3" style="width:100%">Thanks for enquiry with us we will contact as soon as possible. </div>');

                    var downloadd = $('#download_file').val();
                    var filename = $('#downld-filename').val();

                    if (downloadd == 1) {
                        var link = document.createElement('a');
                        link.href = "uploads/curriculum/" + filename;
                        link.download = filename;
                        link.click();
                        link.remove();
                    }

                    $('.crsDetailForm-landing').bootstrapValidator('resetForm', true);

                    link_href = "thank-you.html&" + data;
                    setTimeout(function () { window.location = link_href; }, 1000);
                },
                complete: function (data) {
                    $('.submit_loader_landing').html('SUBMIT NOW');
                    $('.submit_loader_landing').attr('disabled', false);
                }
            });
        });
    });

$(document).ready(function () {
    $("#instForm")
        .bootstrapValidator({
            excluded: [":disabled"],
            message: "This value is not valid",
            fields: {
                name: {
                    validators: {
                        notEmpty: {
                            message: "Please enter your full name"
                        },
                        regexp: {
                            regexp: /^[a-zA-Z ]*$/,
                            message: "Please enter valid full name"
                        }
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: "Please enter your email"
                        },
                        emailAddress: {
                            message: "Please enter valid email"
                        }
                    }
                },
                mobile_number: {
                    validators: {
                        notEmpty: {
                            message: "Please enter your mobile number"
                        },
                        regexp: {
                            regexp: /^[1-9][0-9]{9,15}$/,
                            message: "Please enter valid mobile number"
                        }
                    }
                },
                course: {
                    message: "Please select course",
                    validators: {
                        notEmpty: {
                            message: "Please select course"
                        }
                    }
                },
                resumeFile: {
                    message: "Resume is not valid",
                    validators: {
                        notEmpty: {
                            message: "Resume is required"
                        },
                        file: {
                            extension: "doc,pdf",
                            type: "application/msword,application/pdf",
                            message: "The selected file is not valid"
                        }
                    },
                },
            },
        })
        .on("success.form.bv", function (e) {
            e.preventDefault();
            var t = new FormData(this);
            $.ajax({
                url: "ajax.php?action=become_instructor",
                method: "POST",
                data: t,
                cache: !1,
                contentType: !1,
                processData: !1,
                beforeSend: function () {
                    $(".submit_loader").html('<i class="fa fa-spinner fa-spin"></i> Loading...'), $(".submit_loader").attr("disabled", !0);
                },
                success: function (e) {
                    $(".submit_loader").html("SUBMIT"),
                        $(".submit_loader").attr("disabled", !1),
                        $(".success_message").html('<div class="text-success mb-3" style="width:100%">You have been successfully applied for Become An Instructor. </div>'),
                        $("#instForm").bootstrapValidator("resetForm", !0);
                },
                complete: function (e) { },
            });
        });
}),
    $(document).ready(function () {
        $("#servicesForm").bootstrapValidator({
            excluded: [":disabled"],
            message: "This value is not valid",
            fields: {
                servicesName: {
                    validators: {
                        notEmpty: {
                            message: "Please enter your name"
                        },
                        regexp: {
                            regexp: /^[a-zA-Z ]*$/,
                            message: "Please enter valid name"
                        }
                    }
                },
                servicesEmail: {
                    validators: {
                        notEmpty: {
                            message: "Please enter your email"
                        },
                        emailAddress: {
                            message: "Please enter valid email"
                        }
                    }
                },
                servicesMobile: {
                    validators: {
                        notEmpty: {
                            message: "Please enter your mobile number"
                        },
                        regexp: {
                            regexp: /^[1-9][0-9]{9,15}$/,
                            message: "Please enter valid mobile number"
                        }
                    }
                },
                servicesProject: {
                    message: "Please select your Project Budget (In USD)",
                    validators: {
                        notEmpty: {
                            message: "Please select your Project Budget (In USD)"
                        }
                    }
                },
                servicesMessage: {
                    message: "Please enter your message",
                    validators: {
                        notEmpty: {
                            message: "Please enter your message"
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9 ]*$/,
                            message: "Please enter valid message"
                        }
                    }
                },
            },
        })
        .on("success.form.bv", function (e) {
            e.preventDefault();
            var t = new FormData(this);
            $.ajax({
                url: "ajax.php?action=services_form",
                method: "POST",
                data: t,
                cache: !1,
                contentType: !1,
                processData: !1,
                beforeSend: function () {
                    $(".submit_loader").html('<i class="fa fa-spinner fa-spin"></i> Loading...'), $(".submit_loader").attr("disabled", !0);
                },
                success: function (e) {
                    $(".submit_loader").html("SUBMIT"),
                        $(".submit_loader").attr("disabled", !1),
                        $(".success_message").html('<div class="text-success mb-3" style="width:100%">Thanks for enquiry with us we will contact as soon as possible. </div>'),
                        $("#servicesForm").bootstrapValidator("resetForm", !0)
                },
                complete: function (e) { },
            });
        });
    }),
    $(document).ready(function () {
        $("#contactForm")
            .bootstrapValidator({
                excluded: [":disabled"],
                message: "This value is not valid",
                fields: {
                    contactName: {
                        validators: {
                            notEmpty: {
                                message: "Please enter your name"
                            },
                            regexp: {
                                regexp: /^[a-zA-Z ]*$/,
                                message: "Please enter valid name"
                            }
                        }
                    },
                    contactWebsiteName: {
                        validators: {
                            notEmpty: {
                                message: "Please select purpose"
                            }
                        }
                    },
                    contactEmail: {
                        validators: {
                            notEmpty: {
                                message: "Please enter your email"
                            },
                            emailAddress: {
                                message: "Please enter valid email"
                            }
                        }
                    },
                    contactMobile: {
                        validators: {
                            notEmpty: {
                                message: "Please enter your mobile number"
                            },
                            regexp: {
                                regexp: /^[1-9][0-9]{9,15}$/,
                                message: "Please enter valid mobile number"
                            }
                        }
                    },
                    contactMessage: {
                        message: "Please enter your message",
                        validators: {
                            notEmpty: {
                                message: "Please enter your message"
                            },
                            regexp: {
                                regexp: /^[a-zA-Z0-9,./';'?>< ]*$/,
                                message: "Please enter valid message"
                            }
                        }
                    },
                },
            })
            .on("success.form.bv", function (e) {
                e.preventDefault();
                var t = new FormData(this);
                $.ajax({
                    url: "ajax.php?action=contact_form",
                    method: "POST",
                    data: t,
                    cache: !1,
                    contentType: !1,
                    processData: !1,
                    beforeSend: function () {
                        $(".submit_loader").html('<i class="fa fa-spinner fa-spin"></i> Loading...'), $(".submit_loader").attr("disabled", !0);
                    },
                    success: function (e) {
                        $(".submit_loader").html("Send Message"),
                            $(".submit_loader").attr("disabled", !1),
                            $(".success_message").html('<div class="text-success mb-3" style="width:100%">Thanks for enquiry with us we will contact as soon as possible. </div>'),
                            $("#contactForm").bootstrapValidator("resetForm", !0)
                            // grecaptcha.reset(contactRecaptcha);
                    },
                    complete: function (e) { },
                });
            });
    });
// var onloadCallback = function () {
//     $("#contact_recaptcha").length && (contactRecaptcha = grecaptcha.render("contact_recaptcha", {
//         sitekey: "6LdUTgMiAAAAAGIfhmGxwlqN7S6zHvFBQiWJD9z_"
//     }));
// };

// Verify Certificate
$("#certificateForm").click()
    .bootstrapValidator({
        excluded: [":disabled"],
        message: "This value is not valid",
        fields: {
            certificateCourse: {
                validators: {
                    notEmpty: {
                        message: "Please enter certificate number."
                    }
                }
            }
        }
    })
    .on("success.form.bv", function (e) {
        e.preventDefault();
        $.ajax({
            url: "ajax.php?action=verifyCertificate",
            method: "POST",
            dataType: "json",
            data: $("#certificateForm").serialize(),
            beforeSend: function () {
                $(".submit_loader_enroll").html('<i class="fa fa-spinner fa-spin"></i> Loading...'), $(".submit_loader_enroll").attr("disabled", !0);
            },
            success: function (res) {

                $(".submit_loader_enroll").html("Verify Now"),
                    $(".submit_loader_enroll").attr("disabled", !1);

                if (res._status == true) {

                    $("#afterSubmitHeading").text("Certificate Verification Successful!");
                    $("#afterSubmitText").text("This is a valid certificate. You can view the certificate photo below for details.");
                    $("#certHeader").show();
                    window.scrollBy(0, 500);

                    if (res._data.city == "other") {

                        $("#regNo").text(res._data.certificate_number);
                        $("#courseName").text(res._data.course_name);
                        $("#certName").text(res._data.user.name);
                        $("#startDate").text(res._data.start_date);
                        $("#endDate").text(res._data.end_date);
                        $("#duration").text(res._data.duration);
                        $("#genDate").text(res._data.generated_date);
                        $("#grade").text(res._data.grade);
                        $("#certificateContainer").show();
                        $("#jaipurCertificate").hide();

                    } else if (res._data.city == "jaipur") {

                        $("#j_regNo").text(res._data.certificate_number);
                        $("#j_courseName").text(res._data.course_name);
                        $("#j_certName").text(res._data.user.name);
                        $("#j_startDate").text(res._data.start_date);
                        $("#j_endDate").text(res._data.end_date);
                        $("#j_duration").text(res._data.duration);
                        $("#j_genDate").text(res._data.generated_date);
                        $("#j_grade").text(res._data.grade);
                        $("#certificateContainer").hide();
                        $("#jaipurCertificate").show();

                    } else {
                        $("#regNo").text(res._data.certificate_number);
                        $("#courseName").text(res._data.course_name);
                        $("#certName").text(res._data.user.name);
                        $("#startDate").text(res._data.start_date);
                        $("#endDate").text(res._data.end_date);
                        $("#duration").text(res._data.duration);
                        $("#genDate").text(res._data.generated_date);
                        $("#grade").text(res._data.grade);
                        $("#certificateContainer").show();
                        $("#jaipurCertificate").hide();
                    }

                } else {

                    $("#afterSubmitHeading").text("Invalid Certificate No.! ");
                    $("#afterSubmitText").text("The certificate number you entered is not valid.");
                    $("#certHeader").show();
                    $("#jaipurCertificate").hide();
                    $("#certificateContainer").hide();
                    window.scrollBy(0, 500);

                }
            },
            complete: function (e) { },
        });
    });

// event enrollment form
$("#eventEnrollmentForm").click()
    .bootstrapValidator({
        excluded: [":disabled"],
        message: "This value is not valid",
        fields: {
            name: {
                validators: {
                    notEmpty: {
                        message: "Please enter your name"
                    },
                    regexp: {
                        regexp: /^[a-zA-Z ]*$/,
                        message: "Please enter valid name"
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: "Please enter your email"
                    },
                    emailAddress: {
                        message: "Please enter valid email"
                    }
                }
            },
            mobile: {
                validators: {
                    notEmpty: {
                        message: "Please enter your mobile number"
                    },
                    regexp: {
                        regexp: /^[1-9][0-9]{9,15}$/,
                        message: "Please enter valid mobile number"
                    }
                }
            },
        }
    })
    .on("success.form.bv", function (e) {
        e.preventDefault();
        $.ajax({
            url: "ajax.php?action=event_enrollment",
            method: "POST",
            dataType: "json",
            data: $("#eventEnrollmentForm").serialize(),
            beforeSend: function () {
                $(".submit_loader").html('<i class="fa fa-spinner fa-spin"></i> Loading...'), $(".submit_loader").attr("disabled", !0);
            },
            success: function (res) {
                $(".submit_loader").html("Send Message"),
                    $(".submit_loader").attr("disabled", !1);
                if (res._status == true) {
                    $("#submitMsg").removeClass("text-danger");
                    $("#submitMsg").addClass("text-success");
                    $("#submitMsg").text('Thank you for enrolling in the most demanded Ethical Hacking Workshop workshop.');
                } else {
                    $("#submitMsg").removeClass("text-success");
                    $("#submitMsg").addClass("text-danger");
                    $("#submitMsg").text(res._message);
                }

                $("#eventEnrollmentForm").bootstrapValidator("resetForm", !0);

                if (res._status == true) {
                    link_href = "thank-you.html&course=ethical-hacking-workshop&type=event";
                    setTimeout(function () { window.location = link_href; }, 1000);
                }
            },
            complete: function (e) { },
        });
    });

// event attendance form
$("#eventAttendanceForm").click()
    .bootstrapValidator({
        excluded: [":disabled"],
        message: "This value is not valid",
        fields: {
            name: {
                validators: {
                    notEmpty: {
                        message: "Please enter your name"
                    },
                    regexp: {
                        regexp: /^[a-zA-Z ]*$/,
                        message: "Please enter valid name"
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: "Please enter your email"
                    },
                    emailAddress: {
                        message: "Please enter valid email"
                    }
                }
            },
            mobile: {
                validators: {
                    notEmpty: {
                        message: "Please enter your mobile number"
                    },
                    regexp: {
                        regexp: /^[1-9][0-9]{7,13}$/,
                        message: "Please enter valid mobile number"
                    }
                }
            },
            rate_session: {
                validators: {
                    notEmpty: {
                        message: "Please select rateing"
                    }
                }
            },
            city: {
                validators: {
                    notEmpty: {
                        message: "Please enter your city"
                    }
                }
            },
            state: {
                validators: {
                    notEmpty: {
                        message: "Please enter your state"
                    }
                }
            },
        }
    })
   
    .on("success.form.bv", function (e) {
        e.preventDefault();
        $.ajax({
            url: "ajax.php?action=event_review",
            method: "POST",
            dataType: "json",
            data: $("#eventAttendanceForm").serialize(),
            beforeSend: function () {
                $(".submit_loader").html('<i class="fa fa-spinner fa-spin"></i> Loading...'), $(".submit_loader").attr("disabled", !0);
            },
            success: function (res) {
                $(".submit_loader").html("Send Message");
                // $(".submit_loader").attr("disabled", !1);
                if (res._status == true) {
                    $("#submitMsg").removeClass("text-danger");
                    $("#submitMsg").addClass("text-success");
                    $("#submitMsg").text('Thank you for enrolling in the most demanded Ethical Hacking Workshop workshop.');
                } else {
                    $("#submitMsg").removeClass("text-success");
                    $("#submitMsg").addClass("text-danger");
                    $("#submitMsg").text(res._message);
                }

                $("#eventAttendanceForm").bootstrapValidator("resetForm", !0);

                if (res._status == true) {
                    link_href = "thank-you.html&type=event-review";
                    setTimeout(function () { window.location = link_href; }, 1000);
                }
            },
            complete: function (e) { },
        });
    });

    // Free View Courses
$(".courseVideo").on("click", function(){
    var iframeUrl = $(this).data("iframe-url");
    var modalHtml = '<iframe src="' + iframeUrl + '" id="iframe2" width="100%" height="500" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="mx-auto"></iframe>';
    $(".course_view_vdo").html(modalHtml);
  });

  $(document).ready(function() {
    $("#nav-all-tab").on("click", function() {
        $('#jobProfile option[value="Others"]').attr("selected", false);
        $('#jobProfile option[value="Digital Marketing"]').attr("selected", false);
        $('#jobProfile option[value="Training"]').attr("selected", false);
        $('#jobProfile option[value="Development"]').attr("selected", false);
    });
    $("#nav-dm-tab").on("click", function() {
        $('#jobProfile option[value="Digital Marketing"]').attr("selected", true);
        $('#jobProfile option[value="Training"]').attr("selected", false);
        $('#jobProfile option[value="Development"]').attr("selected", false);
        $('#jobProfile option[value="Others"]').attr("selected", false);
    });
    $("#nav-training-tab").on("click", function() {
        $('#jobProfile option[value="Training"]').attr("selected", true);
        $('#jobProfile option[value="Digital Marketing"]').attr("selected", false);
        $('#jobProfile option[value="Development"]').attr("selected", false);
        $('#jobProfile option[value="Others"]').attr("selected", false);
    });
    $("#nav-development-tab").on("click", function() {
        $('#jobProfile option[value="Development"]').attr("selected", true);
        $('#jobProfile option[value="Training"]').attr("selected", false);
        $('#jobProfile option[value="Digital Marketing"]').attr("selected", false);
        $('#jobProfile option[value="Others"]').attr("selected", false);
    });
    $("#nav-others-tab").on("click", function() {
        $('#jobProfile option[value="Others"]').attr("selected", true);
        $('#jobProfile option[value="Digital Marketing"]').attr("selected", false);
        $('#jobProfile option[value="Training"]').attr("selected", false);
        $('#jobProfile option[value="Development"]').attr("selected", false);
    });

    // Custom validation callback
    $('#resumeForm').on('submit', function(e) {
        e.preventDefault(); 
        var selectedOption = $('#jobProfile').val();
        if (selectedOption === '') {
          $('#jobskills').text('Please select your job profile').show();
        }else {
          $('#jobskills').hide();
        } 
      });
      $('#jobProfile').on('change', function() {
        if ($(this).val() !== '') {
          $('#jobskills').hide();
        }
      });
  });