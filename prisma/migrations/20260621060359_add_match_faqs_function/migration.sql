create or replace function match_faqs (
  query_embedding vector(1536),
  match_threshold float,
  match_count int
)
returns setof "FAQ"
language sql
as $$
  select *
  from "FAQ"
  where "FAQ".embedding <#> query_embedding < -match_threshold
  order by "FAQ".embedding <#> query_embedding asc
  limit least(match_count, 200);
$$;