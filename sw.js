importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"cd2bcc63369f82702340cbc2281c38d1","url":"assets/js/assessment_v2.js"},{"revision":"0c6c2d6c8bd1ff223774dc9689ee7788","url":"assets/js/assessment.js"},{"revision":"cd2a84a9d406609b6af31751adb582ca","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"9a032e720181faf66c1e28f33f49f6dd","url":"contributors.html"},{"revision":"765242b83a60eba31f3514b63ca7bf9c","url":"feedback.html"},{"revision":"f2f1e415d681eb68a9d2c3598b1b80ec","url":"images/iitkgp.png"},{"revision":"f5c270f1b9c1f769e14ee6ad0ef5561e","url":"images/PPROCEDURE1.jpg"},{"revision":"adb3e8d354c785d7b9a3574c32ad8f4c","url":"images/procedureshort.jpg"},{"revision":"f694abd984c0f2e424a8ed388037aa50","url":"images/showimage.php.png"},{"revision":"abfc58bfe27c584f43c19436b01cdc6b","url":"images/three phase power measurement theory1.jpg"},{"revision":"083d5b3eb30fdf63666248f47456a834","url":"images/three phase power measurement_maincircuit.jpg"},{"revision":"51bd474b8b7b6f0273c51edf39d222c3","url":"images/three_phase_power_balanced_load.jpg"},{"revision":"5e73264c22ee5ea7c9e581b882fbf7e6","url":"images/three_phase_power_unbalanced_load.jpg"},{"revision":"db5614abe06fc40487446e1d390491b9","url":"images/transformer elementary 16.jpg"},{"revision":"f5c270f1b9c1f769e14ee6ad0ef5561e","url":"images/tx_open.jpg"},{"revision":"adb3e8d354c785d7b9a3574c32ad8f4c","url":"images/tx_short.jpg"},{"revision":"5046e3b4bbc887d856c9b717caa47d93","url":"images/tx_shortckt_swch_close.jpg"},{"revision":"421f374f6144f3562c59579e0330d91b","url":"index.html"},{"revision":"2d5c980e71b54dad1e2e53f4bff6bea5","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"246e539c9efc48b097d39a5f2ed1e086","url":"posttest.html"},{"revision":"e82b416f36687d3d37ee8e8164bfbe5c","url":"posttest.json"},{"revision":"6c6dd1df16aa5fd3b73e8cb0e55b39ef","url":"pretest.html"},{"revision":"a93e20a7c6d84af3286cfeec0b8467d6","url":"pretest.json"},{"revision":"7c1c5486e99b54121813db21fad947d9","url":"procedure.html"},{"revision":"9a94ffc77bb3aa4ab047ae69311b38b2","url":"references.html"},{"revision":"4df6fa37eef4a33b36e0f21cb11b9e75","url":"simulation.html"},{"revision":"65c965cc155f6476ba8a428d1a9b751e","url":"simulation/css/exp3_css.css"},{"revision":"54e0b4e6eddbf7cb8002422fa68d1826","url":"simulation/images/3watt.jpg"},{"revision":"62403e348b9f6e586784d806f02af555","url":"simulation/images/4watt.jpg"},{"revision":"9e0fa9f58fd5a88cd97e655bb59448b5","url":"simulation/images/led_off.png"},{"revision":"f9001737f295cc37863e1afd2dd99fd7","url":"simulation/images/led_on.png"},{"revision":"d5ed7e40172905ef86f9cc60bfd8ff6e","url":"simulation/images/RC.jpg"},{"revision":"4873c0e4c54ef4048aaec8e77a8179f6","url":"simulation/images/RL.jpg"},{"revision":"f89dbbdaa46fa532bf24f5905d9bed48","url":"simulation/images/s1.png"},{"revision":"d41ad214c158d39de5be6087bdb8a043","url":"simulation/images/s2.png"},{"revision":"f89dbbdaa46fa532bf24f5905d9bed48","url":"simulation/images/s3.png"},{"revision":"d41ad214c158d39de5be6087bdb8a043","url":"simulation/images/s4.png"},{"revision":"d41ad214c158d39de5be6087bdb8a043","url":"simulation/images/s5.png"},{"revision":"f89dbbdaa46fa532bf24f5905d9bed48","url":"simulation/images/s6.png"},{"revision":"f89dbbdaa46fa532bf24f5905d9bed48","url":"simulation/images/s8.png"},{"revision":"f5c270f1b9c1f769e14ee6ad0ef5561e","url":"simulation/images/transformer open circuit1.jpg"},{"revision":"adb3e8d354c785d7b9a3574c32ad8f4c","url":"simulation/images/transformer short circuit(1).jpg"},{"revision":"0476920df9a4b1a3f9edc9a157d794c4","url":"simulation/images/tx_loadckt_swch_close.jpg"},{"revision":"2879d109e6a5a54fc149913a9e71e315","url":"simulation/images/tx_loadckt_swch_open.jpg"},{"revision":"f5a2bc52a25c968db06f80ad2dbb6678","url":"simulation/images/tx_shortckt_swch_close.jpg"},{"revision":"cfe52ae454c5d120fc2f7d1311443b8a","url":"simulation/images/tx_shortckt_swch_open.jpg"},{"revision":"3a74e24b9a1177bcf9f87ea59ad1d2e0","url":"simulation/images/tx_swch_close.jpg"},{"revision":"2eed18c4459e7a99a7703adc51c53c9e","url":"simulation/images/tx_swch_open.jpg"},{"revision":"2908113a6eb65e3f7199232ba0ab3220","url":"simulation/images/TX2.png"},{"revision":"4f454a8be25236727296fc9fad106420","url":"simulation/images/TX3.png"},{"revision":"c295d5e44e73be6a51c7c833c7983940","url":"simulation/images/unity.jpg"},{"revision":"5368f65f90ff466412370b9a58fd5804","url":"simulation/index.html"},{"revision":"480f069ec7bd4eaf9d5a52accb957a11","url":"simulation/jquery_files/css_metergauge.css"},{"revision":"6838f609d4d9f5a60f35169e8c0973f6","url":"simulation/jquery_files/examples.min.css"},{"revision":"5ca9315f7cd63792bc227dda0565b044","url":"simulation/jquery_files/jqplot.meterGaugeRenderer.min.js"},{"revision":"fc701228643bcc46a75e77dd3d119ba2","url":"simulation/jquery_files/jquery.jqplot.min.css"},{"revision":"36a1f7d6e2b113862432a1feee4e1954","url":"simulation/jquery_files/jquery.jqplot.min.js"},{"revision":"9118381924c51c89d9414a311ec9c97f","url":"simulation/jquery_files/jquery.min.js"},{"revision":"07d8128ef6c4c3fa4a6f049a5574cb3d","url":"simulation/jquery_files/js_metergauge.js"},{"revision":"dcaa182c41fded26b97b6cebef5e8b38","url":"simulation/jquery_files/js_metergauge1.js"},{"revision":"8234d581af2683249dae5a4c93f78ebd","url":"simulation/jquery_files/js_metergauge11.js"},{"revision":"b1c5bf0d38fee3eda1575338e9cf7ed9","url":"simulation/jquery_files/js_metergauge12.js"},{"revision":"c0c1d110c177c90aba9845553e76341b","url":"simulation/jquery_files/js_metergauge13.js"},{"revision":"b63d63cc9c6d7ebac5d1bb0c794a42bd","url":"simulation/jquery_files/js_metergauge14.js"},{"revision":"c44fc975d0ef8664ebc4ccd8ab189bd7","url":"simulation/jquery_files/js_metergauge15.js"},{"revision":"eee6572851f5da0edb646cd47d81ae6b","url":"simulation/jquery_files/js_metergauge16.js"},{"revision":"543e06836d584f9034ef870a68713c26","url":"simulation/jquery_files/js_metergauge17.js"},{"revision":"e5b9c6c607235390005d52b9bc324342","url":"simulation/jquery_files/js_metergauge18.js"},{"revision":"8a6e5a89c3917143437d33a5279ba151","url":"simulation/jquery_files/js_metergauge2.js"},{"revision":"a7a53a2bc7fb0f869b7847b358ee8de1","url":"simulation/jquery_files/js_metergauge3.js"},{"revision":"7141b9d3c7bd8712acb65883f8af4f56","url":"simulation/jquery_files/js_metergauge4.js"},{"revision":"351263de457e32a09f95033022ffaaca","url":"simulation/jquery_files/js_metergauge5.js"},{"revision":"05eab4f1487706e613a59f724105f60b","url":"simulation/jquery_files/js_metergauge6.js"},{"revision":"2f7f4bf9cfb9e33926c9de26b3b04725","url":"simulation/jquery_files/js_metergauge7.js"},{"revision":"9e5b995566a954f69ba0f2cb13793575","url":"simulation/jquery_files/shBrushJScript.min.js"},{"revision":"37d7fa05adbfbdc9d50ea9c814040e7a","url":"simulation/jquery_files/shBrushXml.min.js"},{"revision":"f7168e2445a791513195455d1cf35708","url":"simulation/jquery_files/shCore.min.js"},{"revision":"719d4189d786f3992a2722ecb02de7da","url":"simulation/jquery_files/shCoreDefault.min.css"},{"revision":"70ed93fdea43e0f53c459ebdb76a271c","url":"simulation/jquery_files/shThemejqPlot.min.css"},{"revision":"96ca8a1c13ea5726dddc8bb11ac94aa7","url":"simulation/js/exp3_js.js"},{"revision":"4bd5c727bd45fad7c9d73991c667e639","url":"simulation/js/trans_load_test.js"},{"revision":"9dfc84ed7e5a790d2cbdf6723dba98de","url":"simulation/pop_up/pop_up.css"},{"revision":"d2c124127ce395b22f79aaef041c0609","url":"simulation/pop_up/pop_up.js"},{"revision":"82958c7a4c6108444bf124c03c02f21f","url":"theory.html"},{"revision":"bc050cb8f01bba99f1a64f86c5145d2a","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );