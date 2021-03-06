/*----------  global variables - start  ----------*/
	var history_slider = false,
		history_slider_2 = false,
		history_slider_2_gallery = false,
		production_slider = false,
		news_slider = false,
		callbackfile = false,
		scrollBarWidth = 0,
		main_map,
		contacts_map,
		main_map_collection,
		contacts_map_collection,
		pointGeometry,
		all_locations = {
			msk: [
				{
					coords: [55.7839129, 37.5873568],
					item_map_id: '0',
					title: 'Экомоторс',
					address: 'Москва, ул. Бутырский Вал, 32',
					phone: '+7 (495) 984–96–19',
					link: 'ecomotors.ru'
				},
				{
					coords: [55.6336749, 37.4392713],
					item_map_id: '1',
					title: 'Electric-Wheels',
					address: 'Москва, Киевское шоссе, 1',
					phone: '+7 (495) 135–41–07',
					link: 'electric-wheels.ru'
				},
				{
					coords: [55.7061455, 37.4043167],
					item_map_id: '2',
					title: 'Велопрестиж',
					address: 'Москва, Сколковское ш., 31',
					phone: '+7 (926) 210–44–41',
					link: 'veloprestige.ru'
				},
				{
					coords: [55.85401, 37.5652029],
					item_map_id: '3',
					title: 'ADV Active',
					address: 'Москва, Ленинградский пр-т, 37 к. 6',
					phone: '+7 (499) 647–90–37',
					link: 'adv-active.ru'
				},
				{
					coords: [55.695385, 37.588885],
					item_map_id: '4',
					title: 'GPSum',
					address: 'Москва, ул. Карьер, 2/1',
					phone: '+7 (499) 322–03–03',
					link: 'gpsum.ru'
				},
				{
					coords: [55.7307773, 37.6227253],
					item_map_id: '5',
					title: 'Роботбаза',
					address: 'Москва, ул. Большая Полянка, 63/1',
					phone: '8 (800) 500–21–69',
					link: 'robotbaza.ru'
				},
				{
					coords: [55.889911, 37.388438],
					item_map_id: '6',
					title: 'Мое хобби',
					address: 'Москва, ул. Воротынская, 18',
					phone: '+7 (985) 859–40–00',
					link: 'moyohobby.ru'
				},
				{
					coords: [55.763267, 37.564998],
					item_map_id: '7',
					title: '1905.ру',
					address: 'Москва, ул. Красная Пресня, 44/3',
					phone: '+7 (495) 660–19–05',
					link: '1905.ru'
				},
				{
					coords: [55.670117, 37.552534],
					item_map_id: '8',
					title: 'VeloNova',
					address: 'Москва, ул. Профсоюзная, 56',
					phone: '+7 (495) 120–09–25',
					link: 'velonova.ru'
				}

			],
			spb: [
				{
					coords: [60.002249, 30.268616],
					item_map_id: '9',
					title: 'BitMotors',
					address: 'Комендантский проспект, д. 3',
					phone: '+7 (921) 181-35-96',
					link: 'bitmotors.net'
				},
				{
					coords: [60.031884, 30.291361],
					item_map_id: '10',
					title: 'Action drive',
					address: 'Новоколомяжский проспект, 21, оф. 28',
					phone: '+7 (812) 438–12–37',
					link: 'action-drive.ru'
				},
				{
					coords: [59.9024845, 30.3378751],
					item_map_id: '11',
					title: 'Mixuz',
					address: 'Ново-Рыбинская улица, 19/21',
					phone: '+7 812 244–71–80',
					link: 'mixuz.ru'
				},
				{
					coords: [59.9088761, 30.322557],
					item_map_id: '12',
					title: 'Electrovelobike.ru',
					address: 'Набережная Обводного Канала, 90А',
					phone: '+7 (812) 324–22–05',
					link: 'electrovelobike.ru'
				}
			],
			eburg: [
				{
					coords: [56.906923, 60.590647],
					item_map_id: '14',
					title: 'Энергия Движения',
					address: 'ул. Бакинских Комиссаров, 68',
					phone: '+7 (343) 219–82–67',
					link: 'energymotion.ru'
				}
			],
			nn: [
				{
					coords: [56.2912629, 44.066847],
					item_map_id: '15',
					title: 'ИНКАР',
					address: 'ул. Композитора Касьянова 6, п. №4',
					phone: '+7 (920) 253–73–16',
					link: 'cherycity.ru'
				}
			],
			irkutsk: [
				{
					coords: [52.2701734, 104.2551627],
					item_map_id: '16',
					title: 'ФОРВАРД-СПОРТ',
					address: 'ул. Лермонтова, 78, офис 304',
					phone: '+7 (3952) 66-87-87',
					link: '668787.ru'
				}
			],
			ufa: [
				{
					coords: [54.7962751, 56.0546426],
					item_map_id: '17',
					title: 'NEXT WAY ECO',
					address: 'Ул. Адмирала Макарова, 26/2, оф. 11',
					phone: '+7 (347) 262-92-01',
					link: 'nextwayeco.ru'
				}
			],
			other: [
				{
					coords: [0, 0],
					item_map_id: '14',
					title: 'Быстрая доставка',
					address: 'в любой город',
					phone: '8 (800) 333-00-14',
					link: ''
				}
			]
		},
		contact_locations = [
			// {
			// 	coords: [55.747207, 37.614297],
			// 	item_map_id: '0',
			// 	title: 'SMART',
			// 	address: 'ул. Летниковская, 6а, стр. 9',
			// 	phone: '+7 (495) 518-36-99',
			// 	link: 'razor-russia.ru'
			// },
			{
				coords: [55.727207, 37.644297],
				item_map_id: '0',
				title: 'SMART',
				address: 'ул. Летниковская, 6а, стр. 9',
				phone: '+7 (495) 518-36-99',
				link: 'razor-russia.ru'
			}
		],
		locations = all_locations.msk,
		main_map_center = [55.76, 37.64]
		contacts_map_center = [55.76, 37.64];
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
		init_production_slider();
	/*----------  init plugins - end  ----------*/

	/*----------  event listeners - start  ----------*/

		$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
			if ($(e.target).closest('.header__info-drop-nav-item').length > 0)
			{
				var len = $($(e.target).attr('href')).find('.header__info-drop-item').length,
					$match = "",
					$text = "официальных магазинов";
				$match = len.toString().match(/[0-9]$/)[0];
				if ($match == "1") {
					$text = 'официальный магазин';
				}
				if ($match == "2" || $match == "3" || $match == "4") {
					$text = 'официальных магазина';
				}
				$match = len.toString().match(/[0-9]{2}$/);
				if ($match != null) {
					if ($match[0] == "11" || $match[0] == "12" || $match[0] == "13" || $match[0] == "14") {
						$text = 'официальных магазинов';
					}
				}
				$('.header__info-shops .button-toggle')
					.find('.city').text(e.target.innerHTML)
					.end().find('.quantity').text(len)
					.end().find('.text').text($text);
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
					.removeClass('hidden');
				if($('.color-variety').length > 0) {
					var current_item = $('.color-variety').find('a[data-color-id="' + $this.attr('data-color-id') + '"]')
					if (!current_item.closest('li').hasClass('active')) {
						current_item.trigger('click');
					}
				}
			}
			if($this.closest('.color-variety__item').length > 0) {
				$this.closest('.product-item')
					.find('.product-item__image img')
					.addClass('hidden')
					.eq($this.closest('li').index())
					.removeClass('hidden');
				if($('.product-presentation.single-mode').length > 0) {
					var current_item = $('.product-presentation.single-mode .product-item__dots').find('a[data-color-id="' + $this.attr('data-color-id') + '"]')
					if(!current_item.closest('li').hasClass('active')) {
						current_item.trigger('click');
					}
				}
				$('.full-width-block').each(function(){
					var $th = $(this),
						match = '',
						url = '',
						replace_str = '',
						file_type = '';

						// detect browser
						var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
						var is_safari = navigator.userAgent.indexOf("Safari") > -1;
						if ((is_chrome)&&(is_safari)) {is_safari=false;}

					if($th.hasClass('will-change-image')) {
						if (is_safari) {
							url = $th.find('.full-width-block__inner').css('background-image').match(/(\(.+\))/i)[0].replace('(', '').replace(')', '');
						} else {
							url = $th.find('.full-width-block__inner').css('background-image').match(/(\".+\")/i)[0].replace('"', '').replace('"', '');
						}
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
				});
				$('.standart-block').each(function(){
					var $th = $(this),
						match = '',
						url = '',
						replace_str = '',
						file_type = '';
					if($th.hasClass('will-change-image')) {
						img = $th.find('.standart-block__image img')
						url = img.attr('src');
						file_type = url.match(/(\.\w+$)/i)[0];
						match = url.match(/(__.+$)/i);
						replace_str = '__' + $this.attr('data-color-id') + file_type;
						if(match == null) {
							img.attr('src', url.replace(file_type, replace_str));
						} else {
							img.attr('src', url.replace(match[0], replace_str));
						}
					}
				});
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
		$('.sticky')
			.on('sticky_kit:bottom', function(e) {
				$(this).parent().css('position', 'static');
			})
			.on('sticky_kit:unbottom', function(e) {
				$(this).parent().css('position', 'relative');
			});

		$('.select-map-city').on('changed.bs.select', debounce( function (e, clickedIndex, newValue, oldValue) {
			var collection_id = $(this)
					.closest('.bootstrap-select')
					.find('.dropdown-menu li')
					.eq(clickedIndex)
					.find('[data-collection-id]')
					.attr('data-collection-id');
			locations = all_locations[collection_id];
			update_main_map_placemarks(locations);
		}, 700));

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
			sticky__init('.sticky','.main');
			sticky__destroy('.sticky');
			breakPoint = 'xx';
		};
	};

	windowXS = function (){
			// console.log('window XS width = ' + window.innerWidth + 'px');
		if (breakPoint != 'xs') {
			hideBlock($('.toggle-main-menu-btn'), $('.main-menu__container'));
			update_history_slider_2_gallery_item_height();
			destroy__perfectScroll();
			sticky__init('.sticky','.main');
			sticky__destroy('.sticky');
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
			sticky__init('.sticky','.main');
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
			sticky__init('.sticky','.main');
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
			sticky__init('.sticky','.main');
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
				onInitialize: function(){
					$('.production-block__slider-container').removeClass('loading');
				},
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
					var active_item = $('#history-slider').find('.owl-item.active');
					$('.history-pagination-1 li')
						.removeClass('active')
						.eq(active_item.index())
						.addClass('active');
					// console.log(active_item.find('.history-slider__item'));
					$('.history-block__inner').css({
						'background-image': 'url(' + active_item.find('.history-slider__item').attr('data-bg-src') + ')'
					});
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
		if ($('.history-block-2__gallery-slider').length > 0) {
			$('.history-block-2__gallery-slider').owlCarousel({
				items: 1,
				dots: true,
				autoHeight: true,
				onInitialized: update_history_slider_2_gallery_item_height(),
				navText: [
					'<svg class="icon icon-arrows_left"><use xlink:href="#icon-arrows_left"></use></svg>',
					'<svg class="icon icon-arrows_right"><use xlink:href="#icon-arrows_right"></use></svg>'
				],
				nav: true
			});
			history_slider_2_gallery = $('.history-block-2__gallery-slider').data('owlCarousel');
		};
	};
	update_history_slider_2_gallery_item_height = function(){
		var h,item = $('.history-block-2__gallery-item');
		item.css({
			'height': 0,
			'min-height': 0
		});
		item.each(function(){
			var $th = $(this);
			if ($th.closest('.history-block-2').length > 0) {
				h = $th.closest('.history-block-2').outerHeight();
			}
			if ($th.closest('.exhibitions-item').length > 0) {
				h = $th.closest('.exhibitions-item').outerHeight();
			}
		});
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
		init_contacts_map();
	};
	init_contacts_map = function(){
		if ($('#contacts_map').length > 0){
			contacts_map = new ymaps.Map("contacts_map", {
				center: contacts_map_center,
				zoom: 15,
				controls: ["zoomControl", "fullscreenControl"]
			});

			contacts_map.behaviors.disable('scrollZoom');

			pointGeometry = new ymaps.geometry.Point([30, 50]);

			contacts_map_collection = new ymaps.GeoObjectCollection({}, {
				iconLayout	: 'default#imageWithContent',
				iconImageHref: 'img/template/0.png',
				iconOffset: [0, 18],
				iconImageSize: [35, 35]
			});
			clear_geocoder_list();
			for (var i = contact_locations.length - 1; i >= 0; i--) {

				contacts_map_collection.add( new ymaps.Placemark( [contact_locations[i].coords[0],contact_locations[i].coords[1]],
					{
						iconContent: '<div class="map-marker"><div class="map-marker__inner"></div></div>',
						hintContent: contact_locations[i].title,
						item_map_id: contact_locations[i].item_map_id,
						// balloonContentBody: contact_locations[i].address,
						coords: contact_locations[i].coords
					}
				));
				update_geocoder_list(build_geocoder_list_item(contact_locations[i]));
			}
			contacts_map.geoObjects.add(contacts_map_collection);
			if (contact_locations.length > 1) {
				contacts_map.setBounds(contacts_map_collection.getBounds());
			} else {
				contacts_map.setCenter(contact_locations[0]['coords'], 11);
			}
			contacts_map.geoObjects.add(contacts_map_collection);
			update__perfectScroll();

			$(document).on('resize', function(){
				contacts_map.container.fitToViewport();
			});

			jQuery(document).on( "click", "#geocoder-list", function(e) {
				var terget_item = $(e.target).closest('.geocoder__list-item');
				terget_item.siblings('li').removeClass('active');
				contacts_map_collection.each(function (item) {
					if ( parseInt( item.properties.get('item_map_id') ) == parseInt(terget_item.attr('data-item-map-id'))){
						contacts_map.setCenter(item.properties.get('coords'), 13);
						item.properties.set('iconContent','<div class="map-marker active"><div class="map-marker__inner"></div></div>')
						terget_item.addClass('active');
					} else {
						item.properties.set('iconContent','<div class="map-marker"><div class="map-marker__inner"></div></div>');
					}
				});
			});
			contacts_map_collection.each(function(item){
				item.events.add('click', function() {
					contacts_map_collection.each(function(marker){
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
	}
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
	update_main_map_placemarks = function(locations) {
		clear_geocoder_list();
		main_map.geoObjects.removeAll();
		main_map_collection = new ymaps.GeoObjectCollection({}, {
			iconLayout	: 'default#imageWithContent',
			iconImageHref: 'img/template/0.png',
			iconOffset: [0, 18],
			iconImageSize: [35, 35]
		});
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
		if (locations.length > 1) {
			main_map.setBounds(main_map_collection.getBounds());
		} else {
			main_map.setCenter(locations[0].coords, 15);
		};
		main_map.geoObjects.add(main_map_collection);
		update__perfectScroll();

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
		var geocoder_list = document.getElementById('geocoder-list'),
			len = geocoder_list.childNodes.length + 1,
			$match = "",
			$objects_text = "ОФИЦИАЛЬНЫХ МАГАЗИНОВ";
		geocoder_list.appendChild(item);
		$match = len.toString().match(/[0-9]$/)[0];
		if ($match == "1") {
			$objects_text = 'ОФИЦИАЛЬНЫЙ МАГАЗИН';
		}
		if ($match == "2" || $match == "3" || $match == "4") {
			$objects_text = 'ОФИЦИАЛЬНЫХ МАГАЗИНА';
		}
		$match = len.toString().match(/[0-9]{2}$/);
		if ($match != null) {
			if ($match[0] == "11" || $match[0] == "12" || $match[0] == "13" || $match[0] == "14") {
				$objects_text = 'ОФИЦИАЛЬНЫХ МАГАЗИНОВ';
			}
		}
		$('.geocoder__list-title .digit').text(len);
		$('.geocoder__list-title .city-text').text($('.geocoder__form .dropdown-toggle .filter-option span').attr('data-city-text'));
		$('.geocoder__list-title .objects-text').text($objects_text);
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

	sticky__init = function (block, parent_block){
		if ($(block).length > 0) {
			$(block).stick_in_parent({
				parent: parent_block,
				offset_top : 0
			});
		}
	};
	sticky__destroy = function(block){
		$(block).trigger("sticky_kit:detach");
	};
	sticky__update = function(){
		$(document.body).trigger("sticky_kit:recalc");
	};

/*----------  functions - end  ----------*/
