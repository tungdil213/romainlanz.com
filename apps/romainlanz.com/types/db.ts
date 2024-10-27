/**
 * This file was generated by kysely-codegen.
 * Please do not edit it manually.
 */

import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export type Json = JsonValue;

export type JsonArray = JsonValue[];

export type JsonObject = {
  [x: string]: JsonValue | undefined;
};

export type JsonPrimitive = boolean | number | string | null;

export type JsonValue = JsonArray | JsonObject | JsonPrimitive;

export type Timestamp = ColumnType<Date, Date | string>;

export interface Articles {
  category_id: string;
  created_at: Timestamp;
  id: string;
  markdown_ast: Json;
  markdown_content: string;
  published_at: Timestamp | null;
  slug: string;
  status: Generated<number>;
  summary: string;
  title: string;
  updated_at: Timestamp | null;
}

export interface Categories {
  id: string;
  illustration_name: string | null;
  name: string;
  slug: string;
}

export interface Newsletters {
  created_at: Timestamp;
  email: string;
  id: Generated<string>;
  subscription_status: Generated<number>;
  unsubscribe_token: string;
}

export interface Redirects {
  created_at: Timestamp;
  id: Generated<string>;
  to: string;
  updated_at: Timestamp;
  url: string;
  visit_count: Generated<number>;
}

export interface TagArticles {
  article_id: string;
  tag_id: string;
}

export interface Tags {
  color: string;
  id: Generated<string>;
  name: string;
}

export interface Users {
  avatar_url: string | null;
  created_at: Timestamp;
  email: string;
  id: string;
  name: string;
  password: string;
  role: Generated<number>;
  updated_at: Timestamp | null;
}

export interface DB {
  articles: Articles;
  categories: Categories;
  newsletters: Newsletters;
  redirects: Redirects;
  tag_articles: TagArticles;
  tags: Tags;
  users: Users;
}
