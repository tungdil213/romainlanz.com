import { inject } from '@adonisjs/core';
import { ArticleRepository } from '#articles/repositories/article_repository';
import { ArticleViewModel } from '#articles/view_models/article_view_model';
import { TimeServiceContract } from '#core/contracts/time_service_contract';
import { RecordNotFoundException } from '#core/exceptions/record_not_found_exception';
import type { HttpContext } from '@adonisjs/core/http';

@inject()
export default class ShowArticleController {
	constructor(
		private readonly repository: ArticleRepository,
		private readonly timeService: TimeServiceContract
	) {}

	async render({ auth, params, inertia }: HttpContext) {
		const article = await this.repository.findBySlug(params.slug);

		if (!article.isPublished(this.timeService.now()) && !auth.user?.isAdmin) {
			throw new RecordNotFoundException();
		}

		return inertia.render('articles/show', { vm: ArticleViewModel.fromDomain(article).serialize() });
	}
}
