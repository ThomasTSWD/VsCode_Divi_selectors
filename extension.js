const vscode = require('vscode');

function activate(context) {
	console.log('Extension Divi Selectors is now active!');

	let provider = vscode.languages.registerCompletionItemProvider('css', {
		provideCompletionItems(document, position, token, context) {
			const diviSelectors = [
				'.et_pb_section',
				'.et_pb_row',
				'.et_pb_column',
				'.et_pb_section:nth-child(1)',
				'.et_pb_row:nth-child(1)',
				'.et_pb_column:nth-child(1)',
				'.et_pb_module',
				'.et_pb_text',
				'.et_pb_image',
				'.et_pb_button',
				'.et_pb_blurb',
				'.et_pb_toggle',
				'.et_pb_accordion',
				'.et_pb_tabs',
				'.et_pb_slider',
				'.et_pb_slide',
				'.et_pb_testimonial',
				'.et_pb_pricing_table',
				'.et_pb_counter',
				'.et_pb_number_counter',
				'.et_pb_circle_counter',
				'.et_pb_team_member',
				'.et_pb_social_media_follow',
				'.et_pb_contact_form',
				'.et_pb_map',
				'.et_pb_video',
				'.et_pb_audio',
				'.et_pb_signup',
				'.et_pb_search',
				'.et_pb_shop',
				'.et_pb_portfolio',
				'.et_pb_filterable_portfolio',
				'.et_pb_fullwidth_header',
				'.et_pb_countdown_timer',
				'.et_pb_gallery',
				'.et_pb_blog',
				'.et_pb_sidebar',
				'.et_pb_menu',
				'.et_pb_post_slider',
				'.et_pb_code',
				'.et_pb_comments',
				'.et_pb_divider',
				'.et_pb_login',
				'.et_pb_post_nav',
				'.et_pb_post_title',
				'.et_pb_promo',
				'.et_pb_wc_add_to_cart',
				'.et_pb_wc_breadcrumb',
				'.et_pb_wc_cart_notice',
				'.et_pb_wc_description',
				'.et_pb_wc_images',
				'.et_pb_wc_meta',
				'.et_pb_wc_price',
				'.et_pb_wc_rating',
				'.et_pb_wc_related_products',
				'.et_pb_wc_reviews',
				'.et_pb_wc_stock',
				'.et_pb_wc_tabs',
				'.et_pb_wc_title',
				'.et_pb_wc_upsells',
				'.et_pb_fullwidth_menu',
				'.et_pb_fullwidth_portfolio',
				'.et_pb_fullwidth_post_slider',
				'.et_pb_fullwidth_image',
				'.et_pb_fullwidth_code',
				'.et_pb_specialty_column',
				'.et_pb_column_inner',
				'.et_pb_row_inner',
				'.et_pb_section_video',
				'.et_pb_section_parallax',
				'.et_pb_section_video_bg',
				'.et_pb_video_overlay',
				'.et_pb_background_mask',
				'.et_pb_background_pattern',
				'.et_pb_slide_description',
				'.et_pb_slide_content',
				'.et_pb_pricing_content',
				'.et_pb_tab',
				'.et_pb_toggle_title',
				'.et_pb_toggle_content',
				'.et_pb_contact_field',
				'.et_pb_widget_area',
				'#main-footer',
				'#main-header',
				'#page-container',
				'#main-content',
				'.container',
				'html[lang=""]',
				'body.page-id-0'
			];


			return diviSelectors.map(selector => {
				return new vscode.CompletionItem(selector, vscode.CompletionItemKind.Class);
			});
		}
	});

	context.subscriptions.push(provider);
}

function deactivate() {
	console.log('Extension Divi Selectors is now deactivated!');
}

module.exports = {
	activate,
	deactivate
};
