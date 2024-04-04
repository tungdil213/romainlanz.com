import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export type Json = JsonValue;

export type JsonArray = JsonValue[];

export type JsonObject = {
  [K in string]?: JsonValue;
};

export type JsonPrimitive = boolean | number | string | null;

export type JsonValue = JsonArray | JsonObject | JsonPrimitive;

export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export interface Categories {
  id: Generated<string>;
  name: string;
}

export interface Posts {
  canonical_url: string | null;
  created_at: Timestamp;
  description: string;
  id: Generated<string>;
  markdown_ast: Json;
  markdown_content: string;
  published_at: Timestamp | null;
  slug: string;
  status: Generated<number>;
  title: string;
  updated_at: Timestamp;
}

export interface Redirects {
  created_at: Timestamp;
  id: Generated<string>;
  to: string;
  updated_at: Timestamp;
  url: string;
  visit_count: Generated<number>;
}

export interface TagPosts {
  post_id: string;
  tag_id: string;
}

export interface Tags {
  color: string;
  id: Generated<string>;
  name: string;
}

export interface Users {
  created_at: Timestamp;
  email: string;
  id: Generated<string>;
  password: string;
  role: Generated<number>;
  updated_at: Timestamp;
}

export interface DB {
  categories: Categories;
  posts: Posts;
  redirects: Redirects;
  tag_posts: TagPosts;
  tags: Tags;
  users: Users;
}
