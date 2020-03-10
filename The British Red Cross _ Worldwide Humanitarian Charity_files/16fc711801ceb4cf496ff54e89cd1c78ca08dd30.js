window.hellobarSiteSettings=window.hellobarSiteSettings||{"preview_is_active":false,"capabilities":{"autofills":false,"geolocation_injection":false,"external_tracking":false},"site_id":561420,"site_url":"http://www.redcross.org.uk","pro_secret":"l91a992c17f1ce05989f3c320583dc0c2f945b930","site_timezone":"+00:00","hellobar_container_css":"#hellobar-container.HB-Bar{top:0;left:0;width:100%;min-height:40px;z-index:10000001}#hellobar-container.HB-Bar.hb-large{min-height:50px;max-height:50px}#hellobar-pusher{height:30px;overflow:hidden;position:relative;flex:none}#hellobar-pusher.hb-large{height:50px}.hellobar#pull-down.hb-bar-bottom{top:auto;bottom:-1px;position:fixed;border-radius:5px 5px 0 0;transform:translateY(40px);-o-transform:translateY(40px);-ms-transform:translateY(40px);-moz-transform:translateY(40px);-webkit-transform:translateY(40px)}.hellobar#pull-down.hb-bar-bottom .hellobar-arrow{filter:none;transform:none;-o-transform:none;-ms-transform:none;-moz-transform:none;-webkit-transform:none}#hellobar-container.HB-Bar.remains-in-place{top:0;position:fixed;_position:absolute;_top:expression(eval(document.body.scrollTop))}#hellobar-container.HB-Bar.hb-bar-bottom{top:auto;bottom:0;position:fixed;_position:absolute;_bottom:expression(eval(document.body.scrollTop))}#hellobar-container.HB-Bar.hb-animated{animation-duration:1s;-o-animation-duration:1s;-ms-animation-duration:1s;-moz-animation-duration:1s;-webkit-animation-duration:1s}#hellobar-container.HB-Bar.hb-animateIn,.hellobar#pull-down.hb-animateIn{animation-name:hb-bounceInDown;-o-animation-name:hb-bounceInDown;-ms-animation-name:hb-bounceInDown;-moz-animation-name:hb-bounceInDown;-webkit-animation-name:hb-bounceInDown}#hellobar-container.HB-Bar.hb-animateOut,.hellobar#pull-down.hb-animateOut{animation-name:hb-bounceOutUp;-o-animation-name:hb-bounceOutUp;-ms-animation-name:hb-bounceOutUp;-moz-animation-name:hb-bounceOutUp;-webkit-animation-name:hb-bounceOutUp}#hellobar-container.HB-Bar.hb-animateIn.hb-bar-bottom,.hellobar#pull-down.hb-animateIn.hb-bar-bottom{animation-name:hb-bounceInUp;-o-animation-name:hb-bounceInUp;-ms-animation-name:hb-bounceInUp;-moz-animation-name:hb-bounceInUp;-webkit-animation-name:hb-bounceInUp}#hellobar-container.HB-Bar.hb-animateOut.hb-bar-bottom,.hellobar#pull-down.hb-animateOut.hb-bar-bottom{animation-name:hb-bounceOutDown;-o-animation-name:hb-bounceOutDown;-ms-animation-name:hb-bounceOutDown;-moz-animation-name:hb-bounceOutDown;-webkit-animation-name:hb-bounceOutDown}\n\n","templates":[{"name":"bar_announcement","markup":"\u003cdiv id=\"hellobar-bar\" class=\"js-hellobar-element {{siteElement.barSizeCssClass()}} {{siteElement.show_border ? 'has_border' : ''}} {{siteElement.placement}} {{siteElement.brightnessClass()}} {{siteElement.accountCssClass()}} {{siteElement.brandingCssClass()}} {{siteElement.closableCssClass()}}\"\n  style=\"background-color: #{{siteElement.primary_color}}; color: #{{siteElement.text_color}}; font-family: {{siteElement.font}}; border-color: #{{siteElement.border_color}}; height: {{siteElement.barHeight()}};\"\u003e\n\n  \u003cdiv class=\"hb-logo-wrapper {{hellobar('base.coloring').colorIsBright(siteElement.primary_color) ? 'hb-logo-inverted' : ''}} {{siteElement.brandingName()}}\" style=\"{{siteElement.shouldShowBranding() ? '' : 'display:none'}}\"\u003e\n    {{siteElement.renderBranding()}}\n  \u003c/div\u003e\n\n  \u003cdiv class=\"hb-content-wrapper\"\u003e\n    \u003cdiv class=\"hb-text-wrapper\"\u003e\n      \u003cdiv id=\"hb_msg_container\"\n           class=\"hb-headline-text {{siteElement.questionOrAnswerOrThankYouIsShown() ? '' : 'hb-editable-block hb-editable-block-with-full-formatting'}}\"\n           data-hb-editable-block=\"headline\"\n           data-hb-inline-editor-placeholder=\"Headline\"style=\"{{siteElement.thankYouStyle()}}\"\u003e\n        {{siteElement.headline}}\n      \u003c/div\u003e\n    \u003c/div\u003e\n\u003c!-- nothing to do here --\u003e\n  \u003c/div\u003e\n\n  \u003cdiv class=\"hb-close-wrapper\"\u003e\n    \u003ca class=\"icon-close\" onclick=\"{{siteElement.me}}.minimize()\"\u003e\u003c/a\u003e\n  \u003c/div\u003e\n\n  \u003ca class=\"icon-close\"  style=\"{{siteElement.crossStyle() }}\" onclick=\"{{siteElement.me}}.minimize()\"\u003e\u003c/a\u003e\n\u003c/div\u003e\n"},{"name":"bar_thankyou","markup":"\u003cdiv id=\"hellobar-bar\" class=\"js-hellobar-element {{siteElement.barSizeCssClass()}} {{siteElement.show_border ? 'has_border' : ''}} {{siteElement.placement}} {{siteElement.brightnessClass()}} {{siteElement.accountCssClass()}} {{siteElement.brandingCssClass()}} {{siteElement.closableCssClass()}}\"\n  style=\"background-color: #{{siteElement.primary_color}}; color: #{{siteElement.text_color}}; font-family: {{siteElement.font}}; border-color: #{{siteElement.border_color}}; height: {{siteElement.barHeight()}};\"\u003e\n\n  \u003cdiv class=\"hb-logo-wrapper {{hellobar('base.coloring').colorIsBright(siteElement.primary_color) ? 'hb-logo-inverted' : ''}} {{siteElement.brandingName()}}\" style=\"{{siteElement.shouldShowBranding() ? '' : 'display:none'}}\"\u003e\n    {{siteElement.renderBranding()}}\n  \u003c/div\u003e\n\n  \u003cdiv class=\"hb-content-wrapper\"\u003e\n    \u003cdiv class=\"hb-text-wrapper\"\u003e\n      \u003cdiv id=\"hb_msg_container\"\n           class=\"hb-headline-text {{siteElement.questionOrAnswerOrThankYouIsShown() ? '' : 'hb-editable-block hb-editable-block-with-full-formatting'}}\"\n           data-hb-editable-block=\"headline\"\n           data-hb-inline-editor-placeholder=\"Headline\"style=\"{{siteElement.thankYouStyle()}}\"\u003e\n        {{siteElement.headline}}\n      \u003c/div\u003e\n    \u003c/div\u003e\n\n\u003c{{ hellobar('base.preview').isActive() ? 'div' : 'a' }} class=\"{{siteElement.ctaClass()}}\"\n    onclick=\"{{siteElement.me}}.findById(siteElement.id).close()\"\n    href=\"javascript:void(0)\"\n    style=\"{{siteElement.ctaStyle()}}\"\u003e\n    \u003cdiv class=\"{{siteElement.ctaIsEditable() ? siteElement.textHolderClass() : ''}}\"\n         data-hb-editable-block=\"conversion_cta_text\"\n         data-hb-inline-editor-placeholder=\"Close\"\u003e\n        {{siteElement.model().conversion_cta_text}}\n    \u003c/div\u003e\n\u003c/{{ hellobar('base.preview').isActive() ? 'div' : 'a' }}\u003e  \u003c/div\u003e\n\n  \u003cdiv class=\"hb-close-wrapper\"\u003e\n    \u003ca class=\"icon-close\" onclick=\"{{siteElement.me}}.minimize()\"\u003e\u003c/a\u003e\n  \u003c/div\u003e\n\n  \u003ca class=\"icon-close\"  style=\"{{siteElement.crossStyle() }}\" onclick=\"{{siteElement.me}}.minimize()\"\u003e\u003c/a\u003e\n\u003c/div\u003e\n"}],"gdpr_enabled":false,"gdpr_consent":"I consent to occasionally receive newsletter, promotional, partnership, product/service, and market research emails.","gdpr_agreement":"I have read and agree to the \u003ca target=\"_blank\" href=\"\"\u003ePrivacy Policy\u003c/a\u003e and \u003ca target=\"_blank\" href=\"\"\u003eTerms and Conditions\u003c/a\u003e.","gdpr_action":"Submit","geolocation_url":"https://pro.ip-api.com/json?key=pAcPOWCUJWo5Gcp","tracking_url":"https://hi.hellobar.com","site_write_key":"4b683514-fcc5-4e28-a9e1-312c77f2d554","external_tracking":[],"hellobar_element_css":"#hellobar-bar{width:100%;margin:0 0;height:50px;display:table;font-size:17px;font-weight:400;padding:0.33em 0.5em;background-color:#FF0000}#hellobar-bar .hb-logo-wrapper,#hellobar-bar .hb-content-wrapper{display:table-cell;vertical-align:middle}#hellobar-bar .hb-logo-wrapper{width:0.01%}#hellobar-bar .hb-arrow{border-width:0px}#hellobar-bar .hb-close-wrapper{display:table-cell;width:1.6em}#hellobar-bar.closable .hb-close-wrapper{display:table-cell;width:1.6em}#hellobar-bar.closable .icon-close{display:inline;width:1.6em}#hellobar-bar .icon-close{display:none;font-size:12px;top:50%;transform:translateY(-50%)}#hellobar-bar .hb-content-wrapper{text-align:center}#hellobar-bar .hb-cta{display:inline-flex;align-items:center;vertical-align:middle;margin:0;width:auto;white-space:normal;padding:0 1.33em}#hellobar-bar .hb-cta .hb-text-holder{border-radius:inherit;padding:0}#hellobar-bar .answer{margin-right:1em}#hellobar-bar .hb-social-wrapper{margin:0;line-height:0;vertical-align:text-bottom}#hellobar-bar .hb-social-wrapper.hb-google-wrapper{vertical-align:middle}#hellobar-bar .hb-social-wrapper #___follow_0,#hellobar-bar .hb-social-wrapper #___plusone_0{display:inline-block !important}#hellobar-bar.has_border{border-bottom:3px solid white}#hellobar-bar .hb-text-wrapper{margin-right:0.67em;display:inline-block}#hellobar-bar .hb-text-wrapper .hb-headline-text{font-size:1.2em;display:inline-block;vertical-align:middle}#hellobar-bar .hb-input-wrapper,#hellobar-bar .hb-input-wrapper .hb-input-block{width:auto;display:inline-block}#hellobar-bar .hb-input-wrapper .hb-input-block{margin:0px;width:8.6em}@media screen and (max-width: 768px){#hellobar-bar .hb-input-wrapper .hb-input-block{margin:3px}}@media screen and (max-width: 640px){#hellobar-bar .hb-input-wrapper .hb-input-block{width:80%}}#hellobar-bar .hb-logo-wrapper{margin-top:0;font-size:12px;text-align:left;font-weight:normal;padding-right:1rem}#hellobar-bar .hb-logo-wrapper a{color:#fff;display:block}#hellobar-bar .hb-logo-wrapper svg{fill:#fff}#hellobar-bar .hb-logo-wrapper .hb-logo-line{display:block}#hellobar-bar .hb-logo-wrapper.hb-logo-inverted a{color:#3C3E3F}#hellobar-bar .hb-logo-wrapper.hb-logo-inverted svg{fill:#3C3E3F}#hellobar-bar .hb-logo-wrapper.original svg,#hellobar-bar .hb-logo-wrapper.animated svg{width:4em;height:2.6em;border-radius:3px}#hellobar-bar.bar-bottom{top:auto;bottom:0;position:absolute}#hellobar-bar.mobile .hb-logo-wrapper{display:none}#hellobar-bar.mobile .hb-input-wrapper .hb-input-block input{display:block;margin:0.25em auto}#hellobar-bar.regular{height:30px;font-size:14px;padding:0.2em 0.5em}#hellobar-bar.regular .hb-logo-wrapper{font-size:9px}#hellobar-bar.regular .hb-social-wrapper{vertical-align:bottom}#hellobar-bar.regular .hb-social-wrapper.hb-google-wrapper{height:24px;margin:-1px 0;vertical-align:middle}#hellobar-bar.regular .hb-input-wrapper .hb-input-block input{line-height:195%}#hellobar-bar.x-large{height:70px;font-size:19px}#hellobar-bar .hb-cta.wiggle{box-shadow:0 0 1px transparent;backface-visibility:hidden;-o-backface-visibility:hidden;-ms-backface-visibility:hidden;-moz-backface-visibility:hidden;-webkit-backface-visibility:hidden;transform:translateZ(0);-o-transform:translateZ(0);-ms-transform:translateZ(0);-moz-transform:translateZ(0);-webkit-transform:translateZ(0);animation-name:wiggle;-o-animation-name:wiggle;-ms-animation-name:wiggle;-moz-animation-name:wiggle;-webkit-animation-name:wiggle;animation-duration:5s;-o-animation-duration:5s;-ms-animation-duration:5s;-moz-animation-duration:5s;-webkit-animation-duration:5s;animation-timing-function:linear;-o-animation-timing-function:linear;-ms-animation-timing-function:linear;-moz-animation-timing-function:linear;-webkit-animation-timing-function:linear;animation-iteration-count:infinite;-o-animation-iteration-count:infinite;-ms-animation-iteration-count:infinite;-moz-animation-iteration-count:infinite;-webkit-animation-iteration-count:infinite;animation-play-state:running;-o-animation-play-state:running;-ms-animation-play-state:running;-moz-animation-play-state:running;-webkit-animation-play-state:running}#hellobar-bar:hover .hb-cta.wiggle{animation-play-state:paused;-o-animation-play-state:paused;-ms-animation-play-state:paused;-moz-animation-play-state:paused;-webkit-animation-play-state:paused}.hb-paused-animations-ie #hellobar-bar .hb-cta.wiggle{animation-play-state:paused}@-webkit-keyframes wiggle{2%{-webkit-transform:translateX(3px) rotate(2deg);transform:translateX(3px) rotate(2deg)}4%{-webkit-transform:translateX(-3px) rotate(-2deg);transform:translateX(-3px) rotate(-2deg)}6%{-webkit-transform:translateX(3px) rotate(2deg);transform:translateX(3px) rotate(2deg)}8%{-webkit-transform:translateX(-3px) rotate(-2deg);transform:translateX(-3px) rotate(-2deg)}10%{-webkit-transform:translateX(2px) rotate(1deg);transform:translateX(2px) rotate(1deg)}12%{-webkit-transform:translateX(-2px) rotate(-1deg);transform:translateX(-2px) rotate(-1deg)}14%{-webkit-transform:translateX(2px) rotate(1deg);transform:translateX(2px) rotate(1deg)}16%{-webkit-transform:translateX(-2px) rotate(-1deg);transform:translateX(-2px) rotate(-1deg)}18%{-webkit-transform:translateX(1px) rotate(0);transform:translateX(1px) rotate(0)}20%{-webkit-transform:translateX(-1px) rotate(0);transform:translateX(-1px) rotate(0)}}@keyframes wiggle{2%{-webkit-transform:translateX(3px) rotate(2deg);transform:translateX(3px) rotate(2deg)}4%{-webkit-transform:translateX(-3px) rotate(-2deg);transform:translateX(-3px) rotate(-2deg)}6%{-webkit-transform:translateX(3px) rotate(2deg);transform:translateX(3px) rotate(2deg)}8%{-webkit-transform:translateX(-3px) rotate(-2deg);transform:translateX(-3px) rotate(-2deg)}10%{-webkit-transform:translateX(2px) rotate(1deg);transform:translateX(2px) rotate(1deg)}12%{-webkit-transform:translateX(-2px) rotate(-1deg);transform:translateX(-2px) rotate(-1deg)}14%{-webkit-transform:translateX(2px) rotate(1deg);transform:translateX(2px) rotate(1deg)}16%{-webkit-transform:translateX(-2px) rotate(-1deg);transform:translateX(-2px) rotate(-1deg)}18%{-webkit-transform:translateX(1px) rotate(0);transform:translateX(1px) rotate(0)}20%{-webkit-transform:translateX(-1px) rotate(0);transform:translateX(-1px) rotate(0)}}#hellobar-bar .gdpr-consent-form{display:flex;font-size:13px;max-width:800px}#hellobar-bar .gdpr-consent-form p{align-items:flext-start;flex:45%;margin:3px 10px 6px 0}#hellobar-bar .gdpr-consent-form{min-width:600px}#hellobar-bar.mobile .gdpr-consent-form{min-width:360px}\n\n.seattle #hello-bar{padding-bottom:0;padding-top:0}.seattle .hb-header{display:none}.seattle .hb-content-wrapper{text-align:left}.seattle .hb-headline-text{font-weight:300}.seattle .image-background .hb-image-wrapper.background{width:43%;background-position:center center;right:0;left:auto}.seattle .hb-cta{display:inline-flex;font-size:0.8em;font-weight:400;margin-top:1em;box-shadow:0px 4px 20px -7px black;max-width:inherit;line-height:2.4}.seattle .hb-cta:hover{opacity:0.95}.seattle .hb-input-block input{border-top:0 !important;border-left:0 !important;border-right:0 !important}.seattle #hellobar-bar:before,.seattle #hellobar-modal:before,.seattle #hellobar-takeover:before,.seattle #hellobar-slider:before{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.seattle #hellobar-bar .hb-text-wrapper{margin-left:10px;margin-right:10px;padding-bottom:4px}.seattle #hellobar-bar .hb-input-block{margin-bottom:4px;margin-top:4px}.seattle #hellobar-bar .hb-input-block:before{left:13px;top:11px;width:16px;height:16px}.seattle #hellobar-bar .hb-cta{font-size:1em}.seattle #hellobar-bar .icon-close{font-size:15px;top:50%;right:15px;transform:translateY(-51%)}@media screen and (max-width: 640px){.seattle #hellobar-bar .hb-input-block:before{top:14px}}.seattle #hellobar-modal .hb-input-wrapper #hb-fields-form,.seattle #hellobar-takeover .hb-input-wrapper #hb-fields-form,.seattle #hellobar-slider .hb-input-wrapper #hb-fields-form,.seattle #hellobar-alert .hb-input-wrapper #hb-fields-form{position:relative}.seattle #hellobar-modal .hb-input-wrapper #hb-fields-form .hb-input-block input,.seattle #hellobar-takeover .hb-input-wrapper #hb-fields-form .hb-input-block input,.seattle #hellobar-slider .hb-input-wrapper #hb-fields-form .hb-input-block input,.seattle #hellobar-alert .hb-input-wrapper #hb-fields-form .hb-input-block input{text-align:center;padding:2px;width:101%}.seattle #hellobar-modal .hb-input-wrapper #hb-fields-form .hb-input-block:first-child+.hb-cta,.seattle #hellobar-takeover .hb-input-wrapper #hb-fields-form .hb-input-block:first-child+.hb-cta,.seattle #hellobar-slider .hb-input-wrapper #hb-fields-form .hb-input-block:first-child+.hb-cta,.seattle #hellobar-alert .hb-input-wrapper #hb-fields-form .hb-input-block:first-child+.hb-cta{position:absolute;top:auto;right:0;display:inline-flex;margin:0;height:auto;padding:0 10px;bottom:10px}.seattle #hellobar-modal.thank-you .hb-input-wrapper #hb-fields-form,.seattle #hellobar-takeover.thank-you .hb-input-wrapper #hb-fields-form,.seattle #hellobar-slider.thank-you .hb-input-wrapper #hb-fields-form,.seattle #hellobar-alert.thank-you .hb-input-wrapper #hb-fields-form,.seattle #hellobar-modal.gdpr-showing .hb-input-wrapper #hb-fields-form,.seattle #hellobar-takeover.gdpr-showing .hb-input-wrapper #hb-fields-form,.seattle #hellobar-slider.gdpr-showing .hb-input-wrapper #hb-fields-form,.seattle #hellobar-alert.gdpr-showing .hb-input-wrapper #hb-fields-form{position:relative}.seattle #hellobar-modal.thank-you .hb-input-wrapper #hb-fields-form .hb-input-block input,.seattle #hellobar-takeover.thank-you .hb-input-wrapper #hb-fields-form .hb-input-block input,.seattle #hellobar-slider.thank-you .hb-input-wrapper #hb-fields-form .hb-input-block input,.seattle #hellobar-alert.thank-you .hb-input-wrapper #hb-fields-form .hb-input-block input,.seattle #hellobar-modal.gdpr-showing .hb-input-wrapper #hb-fields-form .hb-input-block input,.seattle #hellobar-takeover.gdpr-showing .hb-input-wrapper #hb-fields-form .hb-input-block input,.seattle #hellobar-slider.gdpr-showing .hb-input-wrapper #hb-fields-form .hb-input-block input,.seattle #hellobar-alert.gdpr-showing .hb-input-wrapper #hb-fields-form .hb-input-block input{padding-left:0}.seattle #hellobar-modal.thank-you .hb-input-wrapper #hb-fields-form .hb-input-block:first-child+.hb-cta,.seattle #hellobar-takeover.thank-you .hb-input-wrapper #hb-fields-form .hb-input-block:first-child+.hb-cta,.seattle #hellobar-slider.thank-you .hb-input-wrapper #hb-fields-form .hb-input-block:first-child+.hb-cta,.seattle #hellobar-alert.thank-you .hb-input-wrapper #hb-fields-form .hb-input-block:first-child+.hb-cta,.seattle #hellobar-modal.gdpr-showing .hb-input-wrapper #hb-fields-form .hb-input-block:first-child+.hb-cta,.seattle #hellobar-takeover.gdpr-showing .hb-input-wrapper #hb-fields-form .hb-input-block:first-child+.hb-cta,.seattle #hellobar-slider.gdpr-showing .hb-input-wrapper #hb-fields-form .hb-input-block:first-child+.hb-cta,.seattle #hellobar-alert.gdpr-showing .hb-input-wrapper #hb-fields-form .hb-input-block:first-child+.hb-cta{max-width:none;display:flex;position:relative;min-width:inherit !important;justify-content:center;align-items:center}@media screen and (max-width: 640px){.seattle #hellobar-modal.image-background .hb-image-wrapper,.seattle #hellobar-takeover.image-background .hb-image-wrapper{width:100%;background-position:center center;right:0;left:0;top:0;height:250px}.seattle #hellobar-modal .hb-image-wrapper.background ~ .hb-content-wrapper,.seattle #hellobar-takeover .hb-image-wrapper.background ~ .hb-content-wrapper{margin-top:250px}}.seattle #hellobar-modal{padding:0}.seattle #hellobar-modal .hb-content-wrapper:after{margin:8px;border-width:1px}.seattle #hellobar-modal .hb-image-wrapper.background ~ .hb-content-wrapper{width:57%;margin-right:43%}.seattle #hellobar-modal .hb-inner-content{padding:48px}.seattle #hellobar-modal .hb-headline-text{font-size:1.8em;margin-bottom:20px}.seattle #hellobar-modal .hb-image-wrapper.background{background-position:center center}.seattle #hellobar-modal .hb-text-wrapper,.seattle #hellobar-modal .hb-input-wrapper{max-width:540px;margin:0 auto;width:100%}.seattle #hellobar-modal .hb-input-wrapper #hb-fields-form .hb-input-block:first-child:nth-last-child(2) input,.seattle #hellobar-modal .hb-input-wrapper #hb-fields-form .hb-input-block:first-child:nth-last-child(2) ~ .hb-input-block input{padding-right:110px}.seattle #hellobar-modal .hb-input-wrapper #hb-fields-form .hb-input-block input{text-align:center;padding:2px;width:101%}.seattle #hellobar-modal .hb-input-wrapper #hb-fields-form .hb-input-block:first-child+.hb-cta{min-height:32px !important;max-width:100px}.seattle #hellobar-modal.thank-you .hb-input-wrapper #hb-fields-form .hb-input-block:first-child+.hb-cta,.seattle #hellobar-modal.gdpr-showing .hb-input-wrapper #hb-fields-form .hb-input-block:first-child+.hb-cta{min-height:50px !important;max-width:none;width:100%}.seattle #hellobar-modal [data-hb-editable-block=\"caption\"]{font-size:1.5em;margin:15px auto}.seattle #hellobar-modal [data-hb-editable-block=\"content\"]{font-size:1.1em;margin:0 0 10px}.seattle #hellobar-modal.image-background .hb-headline-text,.seattle #hellobar-modal.image-background [data-hb-editable-block=\"content\"],.seattle #hellobar-modal.image-background [data-hb-editable-block=\"caption\"]{text-align:left}.seattle #hellobar-modal .hb-cta{max-width:540px;margin-left:auto;margin-right:auto}@media screen and (max-width: 640px){.seattle #hellobar-modal .hb-inner-content{padding:48px 38px}.seattle #hellobar-modal .hb-image-wrapper.background ~ .hb-content-wrapper{margin-right:inherit;width:auto}}.seattle #hellobar-takeover .hb-content-wrapper{top:0;left:0;padding:0;height:100%;width:100%;font-size:24px;transform:translate(0%, 0%);-o-transform:translate(0%, 0%);-moz-transform:translate(0%, 0%);-webkit-transform:translate(0%, 0%);margin:0;max-width:none}.seattle #hellobar-takeover .hb-content-wrapper .hb-inner-content{top:50%;left:50%;width:100%;padding:2em;position:absolute;transform:translate(-50%, -50%);-o-transform:translate(-50%, -50%);-moz-transform:translate(-50%, -50%);-webkit-transform:translate(-50%, -50%)}.seattle #hellobar-takeover .hb-image-wrapper.background ~ .hb-content-wrapper{width:57%;margin-right:43%}.seattle #hellobar-takeover .hb-text-wrapper,.seattle #hellobar-takeover .questionslist{max-width:600px;margin:0 auto}.seattle #hellobar-takeover .hb-input-wrapper{margin:0px auto;max-width:600px}.seattle #hellobar-takeover .hb-image-wrapper.background ~ .hb-logo-wrapper{padding-right:43%}.seattle #hellobar-takeover .hb-input-wrapper #hb-fields-form .hb-input-block:first-child:nth-last-child(2) input,.seattle #hellobar-takeover .hb-input-wrapper #hb-fields-form .hb-input-block:first-child:nth-last-child(2) ~ .hb-input-block input{padding-right:210px}.seattle #hellobar-takeover .hb-input-wrapper #hb-fields-form .hb-input-block input{text-align:center;padding:2px;width:101%}.seattle #hellobar-takeover .hb-input-wrapper #hb-fields-form .hb-input-block:first-child+.hb-cta{min-height:60px !important;max-width:200px;width:100%}.seattle #hellobar-takeover.thank-you .hb-input-wrapper #hb-fields-form .hb-input-block:first-child+.hb-cta,.seattle #hellobar-takeover.gdpr-showing .hb-input-wrapper #hb-fields-form .hb-input-block:first-child+.hb-cta{min-height:76px !important;max-width:none;width:100%;margin-top:15px}.seattle #hellobar-takeover .hb-headline-text{font-size:1.9em}.seattle #hellobar-takeover [data-hb-editable-block=\"caption\"]{font-size:1.2em;margin:0px auto;padding:10px 0}.seattle #hellobar-takeover [data-hb-editable-block=\"content\"]{font-size:1.1em;margin:0 0 5px}.seattle #hellobar-takeover .hb-input-block input{font-size:17px;height:6rem;padding:0 0 0 10px}.seattle #hellobar-takeover .hb-cta{font-size:22px;max-width:540px;margin-left:auto;margin-right:auto}@media screen and (max-width: 840px){.seattle #hellobar-takeover.image-background .hb-image-wrapper.background ~ .hb-content-wrapper{top:250px;left:0;padding:0;width:100%;font-size:18px;position:fixed;transform:translate(0%, 0%);-o-transform:translate(0%, 0%);-moz-transform:translate(0%, 0%);-webkit-transform:translate(0%, 0%);margin:0}.seattle #hellobar-takeover.image-background .hb-image-wrapper.background ~ .hb-logo-wrapper{padding-right:0}.seattle #hellobar-takeover.image-background .hb-image-wrapper.background{width:100%;background-position:center center;right:0;left:auto;height:50%}.seattle #hellobar-takeover .hb-input-wrapper #hb-fields-form .hb-input-block:first-child+.hb-cta{min-height:60px !important;max-width:140px;width:100%}.seattle #hellobar-takeover.thank-you .hb-input-wrapper #hb-fields-form .hb-input-block:first-child+.hb-cta,.seattle #hellobar-takeover.gdpr-showing .hb-input-wrapper #hb-fields-form .hb-input-block:first-child+.hb-cta{min-height:50px !important;max-width:none;width:100%}.seattle #hellobar-takeover .hb-cta{font-size:18px}}@media screen and (max-width: 640px){.seattle #hellobar-takeover.image-background .hb-image-wrapper.background ~ .hb-content-wrapper{top:40%;left:0;padding:0;width:100%;font-size:16px;position:fixed;transform:translate(0%, 0%);-o-transform:translate(0%, 0%);-moz-transform:translate(0%, 0%);-webkit-transform:translate(0%, 0%);margin-top:0}.seattle #hellobar-takeover.image-background .hb-image-wrapper.background ~ .hb-content-wrapper .hb-inner-content{top:30%}.seattle #hellobar-takeover.image-background .hb-image-wrapper.background ~ .hb-logo-wrapper{padding-right:0}.seattle #hellobar-takeover.image-background .hb-image-wrapper.background{width:100%;background-position:center center;right:0;left:auto;height:40%}.seattle #hellobar-takeover.image-background .hb-image-wrapper{width:100%;background-position:center center;right:0;left:0;top:0;height:250px}.seattle #hellobar-takeover .hb-input-wrapper #hb-fields-form .hb-input-block:first-child:nth-last-child(2) input,.seattle #hellobar-takeover .hb-input-wrapper #hb-fields-form .hb-input-block:first-child:nth-last-child(2) ~ .hb-input-block input{padding-right:130px}.seattle #hellobar-takeover .hb-input-wrapper #hb-fields-form .hb-input-block:first-child+.hb-cta{min-height:60px !important;max-width:120px;width:100%}.seattle #hellobar-takeover.thank-you .hb-input-wrapper #hb-fields-form .hb-input-block:first-child+.hb-cta,.seattle #hellobar-takeover.gdpr-showing .hb-input-wrapper #hb-fields-form .hb-input-block:first-child+.hb-cta{min-height:50px !important;max-width:none;width:100%}.seattle #hellobar-takeover .hb-cta{font-size:16px}}.seattle #hellobar-slider .slider-content{padding:25px 25px 10px;display:flex;flex-direction:column;justify-content:center;min-height:250px}.seattle #hellobar-slider .slider-content .hb-content-wrapper .hb-text-wrapper{padding-right:0}.seattle #hellobar-slider .slider-content:after{margin:5px;border-width:1px}.seattle #hellobar-slider .hb-input-wrapper #hb-fields-form .hb-input-block:first-child:nth-last-child(2) input,.seattle #hellobar-slider .hb-input-wrapper #hb-fields-form .hb-input-block:first-child:nth-last-child(2) ~ .hb-input-block input{padding-right:80px}.seattle #hellobar-slider .hb-input-wrapper #hb-fields-form .hb-input-block input{text-align:center;padding:2px;width:101%}.seattle #hellobar-slider .hb-input-wrapper #hb-fields-form .hb-input-block:first-child+.hb-cta{min-height:32px !important;max-width:70px;bottom:10px}.seattle #hellobar-slider.thank-you .hb-input-wrapper #hb-fields-form .hb-input-block:first-child+.hb-cta,.seattle #hellobar-slider.gdpr-showing .hb-input-wrapper #hb-fields-form .hb-input-block:first-child+.hb-cta{min-height:50px !important;max-width:none;width:100%}.seattle #hellobar-slider .hb-text-wrapper{margin-bottom:15px}.seattle #hellobar-slider .hb-headline-text{font-size:1.2em}.seattle #hellobar-slider [data-hb-editable-block=\"caption\"]{font-size:1.2em}.seattle #hellobar-slider .hb-cta{font-size:1em}.seattle #hellobar-slider.image-background .slider-content{margin-right:43%}.seattle #hellobar-slider.image-background .slider-content:after{right:43%}.seattle #hellobar-slider.image-background .hb-logo-wrapper{margin-left:0;margin-right:43%}@media screen and (max-width: 640px){.seattle #hellobar-slider{max-width:93% !important}}.seattle #hellobar-alert .image-background .hb-image-wrapper.background{width:45%}.seattle #hellobar-alert .hb-input-wrapper #hb-fields-form .hb-input-block:first-child:nth-last-child(2) input,.seattle #hellobar-alert .hb-input-wrapper #hb-fields-form .hb-input-block:first-child:nth-last-child(2) ~ .hb-input-block input{padding-right:80px}.seattle #hellobar-alert .hb-input-wrapper #hb-fields-form .hb-input-block input{text-align:center;padding:2px;width:101%}.seattle #hellobar-alert .hb-input-wrapper #hb-fields-form .hb-input-block:first-child+.hb-cta{min-height:32px !important;max-width:70px;bottom:6px}.seattle #hellobar-alert #hellobar-slider.image-background .slider-content{margin-right:45%}.seattle #hellobar-alert #hellobar-slider.image-background .slider-content:after{right:45%}\n","content_upgrades":{},"content_upgrades_styles":{"offer_bg_color":"#ffffb6","offer_text_color":"#000000","offer_link_color":"#1285dd","offer_border_color":"#000000","offer_border_width":"0px","offer_border_style":"solid","offer_border_radius":"0px","modal_button_color":"#1285dd","offer_font_size":"15px","offer_font_weight":"bold","offer_font_family_name":"Open Sans","offer_font_family":"'Open Sans',sans-serif"},"autofills":[],"rules":[{"match":"any","conditions":[{"segment":"pup","operand":"includes","value":["/shop"]},{"segment":"pup","operand":"includes","value":["/shop/"]}],"site_elements":[{"id":744739,"use_redirect_url":false,"use_question":false,"use_default_image":true,"image_style":"modal","image_opacity":100,"image_overlay_color":"ffffff","image_overlay_opacity":0,"open_in_new_window":false,"primary_color":"FFFFFF","pushes_page_down":true,"remains_at_top":true,"secondary_color":"fc3a2c","settings":{"cookie_settings":{"duration":3,"success_duration":3},"url":"http://www.redcross.org.uk","url_to_like":"http://www.redcross.org.uk"},"animated":true,"background_color":"FFFFFF","border_color":"fc3a2c","button_color":"fc3a2c","email_placeholder":"Your email","headline":"\u003cp class=\"notedited\"\u003eThe money we raise from womenswear you donate or buy will be doubled until 31 March.\u003c/p\u003e","show_optional_content":true,"show_optional_caption":true,"image_placement":"background","link_color":"FFFFFF","link_text":"Get It Now","name_placeholder":"Your name","placement":"bar-top","show_border":false,"show_branding":false,"size":"50","text_color":"a9a9a9","theme_id":"seattle","type":"Bar","view_condition":"immediately","wiggle_button":false,"fonts":["lato"],"required_fields":false,"close_outside_popup":false,"text_field_border_color":"a9a9a9","text_field_border_width":1,"text_field_font_size":14,"text_field_font_family":"lato","text_field_border_radius":0,"text_field_text_color":"a9a9a9","text_field_background_color":"FFFFFF","text_field_background_opacity":100,"show_thankyou":false,"conversion_font":"lato","conversion_font_color":"fc3a2c","conversion_font_size":18,"conversion_cta_text":"Close","edit_conversion_cta_text":false,"show_no_thanks":true,"no_thanks_text":"No, Thanks","sound":"none","notification_delay":10,"trigger_color":"31b5ff","trigger_icon_color":"ffffff","enable_gdpr":false,"cta_border_color":"4A47F2","cta_border_width":0,"cta_border_radius":0,"cross_color":"000000","cta_height":50,"font":"'Lato',sans-serif","theme":{"image":{"default_url":"https://assets.hellobar.com/seattle-default.jpg","position_default":"background"}},"google_font":"Lato","subtype":"announcement","wiggle_wait":0,"email_redirect":false,"thank_you_text":"Thanks for signing up!","template_name":"bar_announcement","branding_url":"https://www.hellobar.com?sid=744739","closable":false,"use_free_email_default_msg":false,"updated_at":1578653876000.0,"views":142809,"conversion_rate":0.0}]}],"disable_self_check":false,"modules_version":"56","version":"a13599609136f8ab189119c0bf37ad17b9cc4ce4","timestamp":"2020-03-10T10:07:10.390Z"};var bootstrap=function(t){var e=document,a=e.head||e.getElementsByTagName("head")[0];script=e.createElement("script"),script.async=1,script.src=t,a.appendChild(script)};bootstrap("https://my.hellobar.com/modules-v56.js");