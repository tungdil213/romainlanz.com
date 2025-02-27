import { Entity } from '#core/domain/entity';
import type { ArticleIdentifier } from '#articles/domain/article_identifier';
import type { Category } from '#taxonomies/domain/category';
import type { DateTime } from 'luxon';

interface Properties {
	id: ArticleIdentifier;
	publishedAt: DateTime | null;
	title: string;
	summary: string | null;
	slug: string;
	content: string | null;
	readingTime: number;
	category?: Category;
}

export class Article extends Entity<Properties> {
	isPublished(now: DateTime) {
		return this.props.publishedAt ? this.props.publishedAt < now : false;
	}

	static create(properties: Properties) {
		return new this(properties);
	}
}
