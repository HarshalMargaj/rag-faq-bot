-- enable pgvector
create extension if not exists vector;

-- add embedding column
alter table "FAQ"
add column embedding vector(1536);

-- create index
create index "faq_embedding_idx"
on "FAQ"
using hnsw(embedding vector_ip_ops)
