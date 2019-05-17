(function(b,r,a,n,c,h,_,s,d,k){if(!b[n]||!b[n]._q){for(;s<_.length;)c(h,_[s++]);d=r.createElement(a);d.async=1;d.src="https://cdn.branch.io/branch-latest.min.js";k=r.getElementsByTagName(a)[0];k.parentNode.insertBefore(d,k);b[n]=h}})(window,document,"script","branch",function(b,r){b[r]=function(){b._q.push([r,arguments])}},{_q:[],_v:1},"addListener applyCode banner closeBanner creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setBranchViewData setIdentity track validateCode".split(" "), 0);

branch.init('key_live_jmv4IPJKf1zVwKSVG1m03ikozBpeen38');
function sendSMS(form) {
    var phone = form.phone.value;
    var linkData = {
        tags: [],
        channel: 'Website',
        feature: 'TextMeTheApp',
        data: {
            'foo': 'bar'
        }
    };
    var options = {};
    var callback = function(err, result) {
        if (err) {
            alert("Please enter a valid phone number.");
        }
        else {
            alert("SMS sent!");
        }
    };
    branch.sendSMS(phone, linkData, options, callback);
    form.phone.value = "";
}

$("a.scroll").on('click', function(event) {
	if (this.hash !== "") {
		event.preventDefault();

		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, function() {
			window.location.hash = hash;
		});
	}
});

$(document).ready(function() {
	$("a.menu").on('click', function(event) {
		$("header ul").addClass("overlay");
	});

	$("li.close a").on('click', function(event) {
		$("ul.overlay").removeClass("overlay");
	});

	$("li a").on('click', function(event) {
		$("ul.overlay").removeClass("overlay");
	});

    var $animatable_elements = $('.animate_on_scroll');
    var $window = $(window);

    $window.on('scroll resize', animate_if_in_view);

    //first, hide all the animatable elements 
    $.each($animatable_elements, function() {
        $(this).css("opacity", 0);
    });

    function animate_if_in_view() {
        var $window_height = $window.height();
        var $window_top = $window.scrollTop();
        var $window_bottom = $window_top + $window_height;

        console.log($animatable_elements);

        $.each($animatable_elements, function(){

            var $element = $(this);
            var $element_top = $element.offset().top;

            if ($element_top < $window_bottom - 100) {
                $element.addClass("inView");
            }
        });
    }

    $window.trigger('scroll');
});






