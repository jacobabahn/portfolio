const compact = new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 });

export function formatStars(stars: number) {
  return compact.format(stars);
}

export function repoFromUrl(url: string) {
  return new URL(url).pathname.replace(/^\/|\/$/g, "");
}

// Returns null when the count is unavailable, so callers can render nothing.
export async function getStars(repo: string): Promise<number | null> {
  const token = process.env.GITHUB_TOKEN;
  try {
    const response = await fetch(`https://api.github.com/repos/${repo}`, {
      headers: {
        Accept: "application/vnd.github+json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      next: { revalidate: 3600 },
    });
    if (!response.ok) return null;
    const data = await response.json();
    return typeof data.stargazers_count === "number" ? data.stargazers_count : null;
  } catch {
    return null;
  }
}
