import { randomUUID } from "node:crypto";
import { store } from "./store";
import { HttpError } from "./http";
import { assertId, validatePost } from "./validate";

const audit = (actor, action, target, ip) => store.addAudit({ at: new Date().toISOString(), actor, action, target, ip });

export const listPosts = (filter) => store.listPosts(filter);

export async function getPost(id) {
  const p = await store.getPostById(assertId(id));
  if (!p) throw new HttpError(404, "Post not found");
  return p;
}

export async function createPost(input, ctx) {
  const data = validatePost(input);
  const now = new Date().toISOString();
  const post = { excerpt: "", content: "", coverImage: "", tags: [], ...data, id: randomUUID(), status: "draft", publishedAt: null, createdAt: now, updatedAt: now };
  const saved = await store.insertPost(post); // slug uniqueness enforced by the store (409)
  await audit(ctx.email, "post.create", saved.id, ctx.ip);
  return saved;
}

export async function updatePost(id, input, ctx) {
  assertId(id);
  const data = validatePost(input, { partial: true });
  const saved = await store.updatePost(id, { ...data, updatedAt: new Date().toISOString() });
  if (!saved) throw new HttpError(404, "Post not found");
  await audit(ctx.email, "post.update", id, ctx.ip);
  return saved;
}

export async function deletePost(id, ctx) {
  assertId(id);
  if (!(await store.deletePost(id))) throw new HttpError(404, "Post not found");
  await audit(ctx.email, "post.delete", id, ctx.ip);
  return { ok: true };
}

export async function togglePublishStatus(id, ctx) {
  const current = await getPost(id);
  const publishing = current.status !== "published";
  const saved = await store.updatePost(id, {
    status: publishing ? "published" : "draft",
    publishedAt: publishing ? current.publishedAt || new Date().toISOString() : current.publishedAt,
    updatedAt: new Date().toISOString(),
  });
  await audit(ctx.email, publishing ? "post.publish" : "post.unpublish", id, ctx.ip);
  return saved;
}
