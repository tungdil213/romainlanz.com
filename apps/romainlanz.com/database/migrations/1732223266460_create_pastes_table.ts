import type { Kysely } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
	await db.schema
		.createTable('pastes')
		.addColumn('id', 'uuid', (col) => col.primaryKey())
		.addColumn('created_at', 'timestamptz', (col) => col.notNull())
		.addColumn('content', 'text', (col) => col.notNull())
		.addColumn('user_id', 'uuid')
		.execute();
}

export async function down(db: Kysely<any>): Promise<void> {
	await db.schema.dropTable('pastes').execute();
}
