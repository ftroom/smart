/*----------  global variables - start  ----------*/
	var history_slider = false,
		history_slider_2 = false,
		history_slider_2_gallery = false,
		production_slider = false,
		news_slider = false,
		callbackfile = false,
		scrollBarWidth = 0,
		main_map,
		main_map_collection,
		pointGeometry,
		locations = [
			{
				coords: [55.727207, 37.644297],
				item_map_id: '0',
				title: 'Razo Russia',
				address: 'Москва, проспект мира 2',
				phone: '+7 (495) 518-36-99',
				link: 'razor-russia.ru'
			},
			{
				coords: [55.773089, 37.632673],
				item_map_id: '1',
				title: 'Название 1',
				address: 'Москва, проспект мира 2',
				phone: '+7 (495) 518-36-99',
				link: 'google.com'
			},
			{
				coords: [55.771661, 37.620339],
				item_map_id: '2',
				title: 'Название 2',
				address: 'Москва, цветной бульвар 17',
				phone: '+7 (495) 518-36-99',
				link: 'google.com'
			},
			{
				coords: [55.768294, 37.605346],
				item_map_id: '3',
				title: 'Название 3',
				address: 'Москва, малая дмитровка 7',
				phone: '+7 (495) 518-36-99',
				link: 'google.com'
			},
			{
				coords: [55.740862, 37.614258],
				item_map_id: '4',
				title: 'Название 4',
				address: 'Москва, большая якиманка 3',
				phone: '+7 (495) 518-36-99',
				link: 'google.com'
			},
			{
				coords: [55.726958, 37.648241],
				item_map_id: '5',
				title: 'Название 5',
				address: 'Москва, 2-й кожевнический переулок 6',
				phone: '+7 (495) 518-36-99',
				link: 'google.com'
			},
			{
				coords: [55.712147, 37.669666],
				item_map_id: '6',
				title: 'Название 6',
				address: 'Москва, 1-я улица Машиностроения 4к2',
				phone: '+7 (495) 518-36-99',
				link: 'google.com'
			},
			{
				coords: [55.923206, 37.525324],
				item_map_id: '7',
				title: 'Название 7',
				address: 'Москва, долгопрудный, первомайская ул. 4',
				phone: '+7 (495) 518-36-99',
				link: 'google.com'
			},
			{
				coords: [55.88979, 37.397701],
				item_map_id: '8',
				title: 'Название 8',
				address: 'Москва, Воротынская 10к1с1',
				phone: '+7 (495) 518-36-99',
				link: 'google.com'
			},
			{
				coords: [55.881934, 37.423141],
				item_map_id: '9',
				title: 'Название 9',
				address: 'Москва, Бабакина 4',
				phone: '+7 (495) 518-36-99',
				link: 'google.com'
			},
			{
				coords: [55.702987, 37.676843],
				item_map_id: '10',
				title: 'Название 10',
				address: 'Москва, Трофимова 21к1',
				phone: '+7 (495) 518-36-99',
				link: 'google.com'
			},
			{
				coords: [55.739174, 37.675056],
				item_map_id: '11',
				title: 'Название 11',
				address: 'Москва, нижегородская 1а',
				phone: '+7 (495) 518-36-99',
				link: 'google.com'
			},
			{
				coords: [55.731004, 37.741612],
				item_map_id: '12',
				title: 'Название 12',
				address: 'Москва, Рязанский просп. 11',
				phone: '+7 (495) 518-36-99',
				link: 'google.com'
			},
			{
				coords: [55.759623, 37.788953],
				item_map_id: '13',
				title: 'Название 13',
				address: 'Москва, ул. Металлургов 23а',
				phone: '+7 (495) 518-36-99',
				link: 'google.com'
			},
			{
				coords: [55.821765, 37.65426],
				item_map_id: '14',
				title: 'Название 14',
				address: 'Москва, ул. Космонавтов 7',
				phone: '+7 (495) 518-36-99',
				link: 'google.com'
			}
		]
		main_map_center = [55.76, 37.64];
/*----------  global variables - end  ----------*/


$(document).ready(function() {
	
	/*----------  do at first - start  ----------*/
		getScrollBarWidth();
		ymaps.ready(build_maps);
	/*----------  do at first - end  ----------*/	

	/*----------  init plugins - start  ----------*/
		$('#user-phone').mask('+7(000)000-00-00');
		init__perfectScroll();
		$('.nav-tabs a').click(function (e) {
			$(this).tab('show');
			e.preventDefault();
		})
		if($('.selectpicker').length > 0) {
			$('.selectpicker').selectpicker();
		}
	/*----------  init plugins - end  ----------*/

	/*----------  event listeners - start  ----------*/

		$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
			if ($(e.target).closest('.header__info-drop-nav-item').length > 0)
			{
				$('.header__info-shops .button-toggle')
					.find('.city').text(e.target.innerHTML)
					.end().find('.quantity').text($($(e.target).attr('href')).find('.header__info-drop-item').length);
			}
		})

		$('#address_input').on('input', debounce( function(e){
			parse_address($(this).val());
		}, 700));

		$('.fast-buy__submit').on('click', function(){
			// var $this = $(this),
			// 	block = $this.closest('.fast-buy'),
			// 	button = block.find('.fast-buy__avatar-box__trigger');

			// if (block.hasClass('minimized')) {
			// 	$('.product-list > ul > li').removeClass('active');
			// 	showBlock(button, block);			
			// } else {
			// 	if ($('[name="fast-buy__item"]:checked').length > 0) {
					$('#modal-buy-form').modal('show');
			// 	}
			// };
		});

		// click another element
		$('body').on('click', function(){
			var button, block;
			// reset .fast-buy
			if ($(event.target).closest('.fast-buy, .modal').length === 0) {
				if ($('.fast-buy').length > 0) {
					button = $('.fast-buy__avatar-box__trigger');
					block = $('.fast-buy');
					$('.product-list > ul > li').removeClass('active');
					hideBlock(button, block);
					// $('.fast-buy__submit').text($('.fast-buy__submit').attr('data-default-text'));
					// $('[name="fast-buy__item"]').prop('checked', false).closest('label').removeClass('checked');
				}
			};
			if ($(event.target).closest('.header__info-shops .button-toggle, .header__info-drop').length === 0) {
				if ($('.header__info-drop').length > 0) {
					button = $('.header__info-shops .button-toggle');
					block = $('.header__info-drop');
					hideBlock(button, block);
				}
			};
			if ($(event.target).closest('.header').length === 0) {
				if ($('.main-menu__container').length > 0) {
					button = $('.toggle-main-menu-btn');
					block = $('.main-menu__container');
					hideBlock(button, block);
				}
			};
		});

		$('.history-pagination li, .product-item__dots a, .color-variety__item a').on('click', function(e){
			var $this = $(this);
			$this
				.closest('li')
				.siblings('li')
				.removeClass('active')
				.end()
				.addClass('active');
			if($this.closest('.history-pagination-1').length > 0) {
				history_slider.to($this.index());
			}
			if($this.closest('.history-pagination-2').length > 0) {
				history_slider_2.to($this.index());
			}
			if($this.closest('.product-item__dots').length > 0) {
				$this.closest('.product-item')
					.find('.product-item__image img')
					.addClass('hidden')
					.eq($this.closest('li').index())
					.removeClass('hidden')
			}
			if($this.closest('.color-variety__item').length > 0) {
				$this.closest('.product-item')
					.find('.product-item__image img')
					.addClass('hidden')
					.eq($this.closest('li').index())
					.removeClass('hidden')
				$('.full-width-block').each(function(){
					var $th = $(this),
						match = '',
						url = '',
						replace_str = '',
						file_type = '';
					if($th.hasClass('type-3') || $th.hasClass('type-4') || $th.hasClass('type-6') || $th.hasClass('type-7') || $th.hasClass('type-8')) {
						url = $th.find('.full-width-block__inner').css('background-image').match(/(\".+\")/i)[0].replace('"', '').replace('"', '')
						file_type = url.match(/(\.\w+$)/i)[0];
						match = url.match(/(__.+$)/i)
						if(match == null) {
							replace_str = '__' + $this.attr('data-color-id') + file_type
							$th.find('.full-width-block__inner').css({
								'background-image': 'url(' + url.replace(file_type, replace_str) + ')'
							})
						} else {
							replace_str = '__' + $this.attr('data-color-id') + file_type
							$th.find('.full-width-block__inner').css({
								'background-image': 'url(' + url.replace(match[0], replace_str) + ')'
							})
						}
					}
				})
			}
			e.preventDefault();
		});

		$('body').on('change', 'input[type="radio"]', function(){
			var $this = $(this),
				name = $this.attr('name');
			$('[name="' + name + '"]').closest('label').removeClass('checked');
			$this.closest('label').addClass('checked');

			if(name == 'fast-buy__item') {
				$('.fast-buy__submit').text($this.attr('data-submit-text'));
			}
		});
		$('body').on('change', 'input[type="checkbox"]', function(){
			var $this = $(this);
			if ($this.prop('checked')) {
				$this.closest('label').addClass('checked');
			} else {
				$this.closest('label').removeClass('checked');
			}
		});

		$('img').on('dragstart', function(event) { event.preventDefault(); });

		// show/hide/toggle blocks
		$('.button-toggle').on('click', function(e) {
			var button = $(this),
				block = $(button.attr('data-target-block'));

			toggleBlock(button, block);
			e.preventDefault();
		});
		$('.button-show').on('click', function(e) {
			var button = $(this),
				block = $(button.attr('data-target-block'));

			showBlock(button, block);
			e.preventDefault();
		});
		$('.button-hide').on('click', function(e) {
			var button = $(this),
				block = $(button.attr('data-target-block'));

			hideBlock(button, block);
			e.preventDefault();
		});

	/*----------  event listeners - end  ----------*/

});

/*----------  onload, onresize, onscroll, breakpoints - start  ----------*/
	var breakPoint = false,
		bp_XX = 480,
		bp_XS = 768,
		bp_SM = 992,
		bp_md = 1280;

	$(window).on('scroll', function() {
	});

	$(window).on('load', function(){
		var windowInnerWidth = window.innerWidth;
		
		if (windowInnerWidth < bp_XX) {windowXX();};
		if (windowInnerWidth >= bp_XX && windowInnerWidth < bp_XS) {windowXS();};
		if (windowInnerWidth >= bp_XS && windowInnerWidth < bp_SM) {windowSM();};
		if (windowInnerWidth >= bp_SM && windowInnerWidth < bp_md) {windowMD();};
		if (windowInnerWidth >= bp_md) {windowLG();};

		init_production_slider();
		init_history_slider();
		init_history_slider_2();
		init_history_slider_2_gallery();
		init_news_slider();
	});

	$(window).on('resize', function(){
		var windowInnerWidth = window.innerWidth;

		if (windowInnerWidth < bp_XX) {windowXX();};
		if (windowInnerWidth >= bp_XX && windowInnerWidth < bp_XS) {windowXS();};
		if (windowInnerWidth >= bp_XS && windowInnerWidth < bp_SM) {windowSM();};
		if (windowInnerWidth >= bp_SM && windowInnerWidth < bp_md) {windowMD();};
		if (windowInnerWidth >= bp_md) {windowLG();};

	});

	windowXX = function (){
			// console.log('window XX width = ' + window.innerWidth + 'px');
		if (breakPoint != 'xx') {
			hideBlock($('.toggle-main-menu-btn'), $('.main-menu__container'));
			update_history_slider_2_gallery_item_height();
			destroy__perfectScroll();
			breakPoint = 'xx';
		};
	};

	windowXS = function (){
			// console.log('window XS width = ' + window.innerWidth + 'px');
		if (breakPoint != 'xs') {
			hideBlock($('.toggle-main-menu-btn'), $('.main-menu__container'));
			update_history_slider_2_gallery_item_height();
			destroy__perfectScroll();
			breakPoint = 'xs';
		};
	};

	windowSM = function (){
			// console.log('window SM width = ' + window.innerWidth + 'px');
		if (breakPoint != 'sm') {
			hideBlock($('.toggle-main-menu-btn'), $('.main-menu__container'));
			update_history_slider_2_gallery_item_height();
			destroy__perfectScroll();
			init__perfectScroll();
			breakPoint = 'sm';
		};
	};

	windowMD = function (){
			// console.log('window MD width = ' + window.innerWidth + 'px');
		if (breakPoint != 'md') {
			hideBlock($('.toggle-main-menu-btn'), $('.main-menu__container'));
			update_history_slider_2_gallery_item_height();
			destroy__perfectScroll();
			init__perfectScroll();
			breakPoint = 'md';
		};
	};

	windowLG = function (){
			// console.log('window LG width = ' + window.innerWidth + 'px');
		if (breakPoint != 'lg') {
			hideBlock($('.toggle-main-menu-btn'), $('.main-menu__container'));
			update_history_slider_2_gallery_item_height();
			destroy__perfectScroll();
			init__perfectScroll();
			breakPoint = 'lg';
		};
	};
/*----------  onload, onresize, onscroll, breakpoints - end  ----------*/

/*----------  block show/hide/toggle - start  ----------*/
	showBlock = function(button, block) {
		block.removeClass('minimized');
		button.addClass('active');
	};
	hideBlock = function(button, block) {
		block.addClass('minimized');
		button.removeClass('active');
	};
	toggleBlock = function(button, block) {
		block.toggleClass('minimized');

		if (block.hasClass('minimized')) {
			button.removeClass('active');
		} else {
			button.addClass('active');
		};
	};
/*----------  block show/hide/toggle - end  ----------*/

/*----------  functions - start  ----------*/
	callback = function(something){
		callbackfile = something;
		return callbackfile;
	};
	getScrollBarWidth = function () {
		var inner = document.createElement('p');
		inner.style.height = "200px";
		inner.style.width = "100%";
		var outer = document.createElement('div');
		outer.style.visibility = "hidden";
		outer.style.position = "absolute";
		outer.style.overflow = "hidden";
		outer.style.height = "150px";
		outer.style.width = "200px";
		outer.style.left = "0px";
		outer.style.top = "0px";
		outer.appendChild (inner);
		document.body.appendChild (outer);
		var w1 = inner.offsetWidth;
		outer.style.overflow = 'scroll';
		var w2 = inner.offsetWidth;
		if (w1 == w2) w2 = outer.clientWidth;
		document.body.removeChild (outer);
		scrollBarWidth = w1 - w2;
		return scrollBarWidth;
	};
	is_scroll = function(){
		return $(document).height() > $(window).height();
	};

	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
		// example using
		// $('#address_input').on('input', debounce( function(e){
		// 	// somethins code
		// }, 700));
	};

	init_news_slider = function(){
		if ($('#full-width-slider-news').length > 0) {
			$('#full-width-slider-news').owlCarousel({
				items: 1,
				dots: true,
				autoHeight: true,
				animateOut: 'zoomOut',
				animateIn: 'fadeInUp',
				nav: false
			});
			news_slider = $('#full-width-slider-news').data('owlCarousel');
		}
	};

	init_production_slider = function(){
		if ($('.production-slider').length > 0) {
			$(".production-slider").owlCarousel({
				items: 3,
				dots: false,
				nav: true,
				navText: [
					'<svg class="icon icon-arrows_left"><use xlink:href="#icon-arrows_left"></use></svg>',
					'<svg class="icon icon-arrows_right"><use xlink:href="#icon-arrows_right"></use></svg>'
				],
				responsive: {
					0: {
						items: 1
					},
					480: {
						items: 1
					},
					768: {
						items: 2
					},
					992: {

					},
					1276: {

					}					
				}
			});
			production_slider = $('.production-slider').data('owlCarousel');
		}
	};

	init_history_slider = function(){
		if ($('#history-slider').length > 0) {
			$('#history-slider').owlCarousel({
				items: 1,
				dots: true,
				autoHeight: true,
				animateOut: 'zoomOut',
				animateIn: 'fadeInDown',
				onTranslated: function(){				
					$('.history-pagination-1 li')
						.removeClass('active')
						.eq($('#history-slider').find('.owl-item.active').index())
						.addClass('active');
				},
				nav: false
			});
			history_slider = $('#history-slider').data('owlCarousel');
		}
	};

	init_history_slider_2 = function(){
		if ($('#history-slider-2').length > 0) {
			$('#history-slider-2').owlCarousel({
				items: 1,
				dots: true,
				startPosition: $('#history-slider-2').find('.history-block-2__item').length - 1,
				autoHeight: true,
				animateOut: 'zoomOut',
				animateIn: 'fadeInDown',
				onInitialized: update_history_slider_2_gallery_item_height(),
				onTranslated: function(){				
					$('.history-pagination-2 li')
						.removeClass('active')
						.eq($('#history-slider-2').find('.owl-item.active').index())
						.addClass('active');
					update_history_slider_2_gallery_item_height();					
				},
				nav: false
			});
			history_slider_2 = $('#history-slider-2').data('owlCarousel');
		}
	};
	init_history_slider_2_gallery = function(){
		if ($('#history-2-gallery').length > 0) {
			$('#history-2-gallery').owlCarousel({
				items: 1,
				dots: true,
				autoHeight: true,
				onInitialized: update_history_slider_2_gallery_item_height(),
				navText: [
					'<svg class="icon icon-arrows_left"><use xlink:href="#icon-arrows_left"></use></svg>',
					'<svg class="icon icon-arrows_right"><use xlink:href="#icon-arrows_right"></use></svg>'
				],
				// animateOut: 'zoomOutDown',
				// animateIn: 'zoomInUp',
				nav: true
			});
			history_slider_2_gallery = $('#history-2-gallery').data('owlCarousel');
		};
	};
	update_history_slider_2_gallery_item_height = function(){
		var h,item = $('.history-block-2__gallery-item');
		item.css({
			'height': 0,
			'min-height': 0
		});
		h = $('.history-block-2').height();
		item.css({
			'height': h,
			'min-height': h
		})
	};
	init__perfectScroll = function(){
		$('.custom-scroll').perfectScrollbar();
	};
	update__perfectScroll = function(){
		$('.custom-scroll').perfectScrollbar('update');
	};
	destroy__perfectScroll = function(){
		$('.custom-scroll').perfectScrollbar('destroy');
	};

	build_maps = function(){
		init_main_map();
	};
	init_main_map = function(){
		if ($('#main_map').length > 0){
			main_map = new ymaps.Map("main_map", {
				center: main_map_center,
				zoom: 15,
				controls: ["zoomControl", "fullscreenControl"]
			});

			main_map.behaviors.disable('scrollZoom');

			pointGeometry = new ymaps.geometry.Point([30, 50]);

			main_map_collection = new ymaps.GeoObjectCollection({}, {
				iconLayout	: 'default#imageWithContent',
				iconImageHref: 'img/template/0.png',
				iconOffset: [0, 18],
				iconImageSize: [35, 35]
			});
			clear_geocoder_list();
			for (var i = locations.length - 1; i >= 0; i--) {

				main_map_collection.add( new ymaps.Placemark( [locations[i].coords[0],locations[i].coords[1]],
					{
						iconContent: '<div class="map-marker"><div class="map-marker__inner"></div></div>',
						hintContent: locations[i].title,
						item_map_id: locations[i].item_map_id,
						// balloonContentBody: locations[i].address,
						coords: locations[i].coords
					}
				));
				update_geocoder_list(build_geocoder_list_item(locations[i]));
			}
			main_map.geoObjects.add(main_map_collection);
			main_map.setBounds(main_map_collection.getBounds());
			main_map.geoObjects.add(main_map_collection);
			update__perfectScroll();
		
			$(document).on('resize', function(){
				main_map.container.fitToViewport();
			});

			jQuery(document).on( "click", "#geocoder-list", function(e) {
				var terget_item = $(e.target).closest('.geocoder__list-item');
				terget_item.siblings('li').removeClass('active');
				main_map_collection.each(function (item) {
					if ( parseInt( item.properties.get('item_map_id') ) == parseInt(terget_item.attr('data-item-map-id'))){
						main_map.setCenter(item.properties.get('coords'), 13);
						item.properties.set('iconContent','<div class="map-marker active"><div class="map-marker__inner"></div></div>')
						terget_item.addClass('active');
					} else {
						item.properties.set('iconContent','<div class="map-marker"><div class="map-marker__inner"></div></div>');
					}
				});
			});
			main_map_collection.each(function(item){
				item.events.add('click', function() {
					main_map_collection.each(function(marker){
						marker.properties.set('iconContent','<div class="map-marker"><div class="map-marker__inner"></div></div>');
					});
					item.properties.set('iconContent','<div class="map-marker active"><div class="map-marker__inner"></div></div>');
					$('#geocoder-list')
						.find('.geocoder__list-item')
						.removeClass('active').end()
						.find('[data-item-map-id=' + item.properties.get('item_map_id') + ']')
						.addClass('active');
					scroll_to($('[data-item-map-id=' + item.properties.get('item_map_id') + ']'),$('.geocoder__list'), 'center');
				});
			});

		};
	};
	build_geocoder_list_item = function(info){
		var item = false;

		if(info){
			item = document.createElement('LI');
			item.className = 'geocoder__list-item';
			item.setAttribute('data-item-map-id', info.item_map_id);

			var item_title = document.createElement('DIV');
			item_title.className = 'geocoder__list-item-title';

			var item_title_span = document.createElement('SPAN');
			item_title_span.innerHTML = info.title;

			var item_address = document.createElement('DIV');
			item_address.className = 'geocoder__list-item-address';

			var item_address_span = document.createElement('SPAN');
			item_address_span.innerHTML = info.address;

			var item_footer = document.createElement('DIV');
			item_footer.className = 'clearfix';

			var item_phone = document.createElement('SPAN');
			item_phone.className = 'geocoder__list-item-phone ';

			var item_phone_span = document.createElement('SPAN');
			item_phone_span.innerHTML = info.phone;

			var item_footer_link = document.createElement('A');
			item_footer_link.setAttribute('href', 'http://' + info.link);
			item_footer_link.setAttribute('title', info.link);
			item_footer_link.setAttribute('target', '_blank');
			item_footer_link.innerHTML = info.link;

			item_title.appendChild(item_title_span);
			item_address.appendChild(item_address_span);
			item_phone.appendChild(item_phone_span);
			item_footer.appendChild(item_phone);
			item_footer.appendChild(item_footer_link);
			item.appendChild(item_title);
			item.appendChild(item_address);
			item.appendChild(item_footer);
		}

		return item;
	};
	update_geocoder_list = function(item) {
		var geocoder_list = document.getElementById('geocoder-list')
		geocoder_list.appendChild(item);
		$('.geocoder__list-title .digit').text(geocoder_list.childNodes.length)
		return true;
	};
	clear_geocoder_list = function(){
		document.getElementById('geocoder-list').innerHTML = '';
	};
	parse_address = function(address){
		if (address != '') {
			$.ajax({ 
				url: 'https://geocode-maps.yandex.ru/1.x/?format=json&geocode=' + address, 
				type: 'GET', 
				async : false, 
				success: function(data){ 
					var coords = [
							parseFloat(data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(" ")[1]), 
							parseFloat(data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(" ")[0])
						];
					get_closest_placemark(coords);
				}, 
				error: function(){ 
					alert('no results'); 
				}
			});
		};
	};
	get_closest_placemark = function(coords) {
		var min_distance = 100000,
			current_distance = false,
			closest_item_id = false;
		for (var i = locations.length - 1; i >= 0; i--) {
			current_distance = Math.sqrt(pow((coords[0] - locations[i].coords[0]), 2) + pow((coords[1] - locations[i].coords[1]), 2));
			if (current_distance < min_distance) {
				min_distance = current_distance;
				closest_item_id = locations[i].item_map_id;
			}
		}
		main_map_collection.each(function(item){
			if ( parseInt( item.properties.get('item_map_id') ) == parseInt(closest_item_id)){
				main_map.setCenter(item.properties.get('coords'), 13);
				item.properties.set('iconContent','<div class="map-marker active"><div class="map-marker__inner"></div></div>')
			} else {
				item.properties.set('iconContent','<div class="map-marker"><div class="map-marker__inner"></div></div>');
			}
		});
		$('#geocoder-list')
			.find('.geocoder__list-item')
			.removeClass('active').end()
			.find('[data-item-map-id=' + closest_item_id + ']')
			.addClass('active');
		scroll_to($('[data-item-map-id=' + closest_item_id + ']'),$('.geocoder__list'), 'center');
	};
	scroll_to = function(list_item, list, mode) {
		if (mode == 'center') {
			// Scroll to the center
			list.scrollTop(list.scrollTop() + list_item.position().top - list.height()/2 + list_item.height()/2);

		} else {
			// Scroll to the top
			list.scrollTop(list.scrollTop() + list_item.position().top);
		}
		return true;
	};
	function pow(a, n) {
		var b = a;
		for (var i = 1; i < n; i++) {
			b *= a;
		}
		return b;
	};


/*----------  functions - end  ----------*/