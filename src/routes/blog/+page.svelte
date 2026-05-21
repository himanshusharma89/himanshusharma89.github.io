<script>
	import { articles } from '$lib/content.js';

	/** @typedef {Record<string, string>} StringMap */

	let selectedCategory = 'All';
	/** @type {StringMap} */
	let counts = {};

	const categories = ['All', 'Flutter', 'Kubernetes', 'AI', 'DevOps', 'Videos'];

	// Source → subtle badge colour (bg / text pairs, Tailwind)
	/** @type {StringMap} */
	const sourceColour = {
		LogRocket: 'bg-purple-50 text-purple-700',
		InfraCloud: 'bg-blue-50 text-blue-700',
		'Medium · Flutter Community': 'bg-green-50 text-green-700',
		'100ms': 'bg-rose-50 text-rose-700',
		'Aortem · DartCodeLabs': 'bg-teal-50 text-teal-700',
		'Personal Blog': 'bg-orange-50 text-orange-700',
		'Google Docs': 'bg-yellow-50 text-yellow-700',
		YouTube: 'bg-red-50 text-red-700'
	};

	// YouTube URL → embed-friendly src
	/** @param {string} url */
	function youtubeEmbedUrl(url) {
		const match = url.match(/live\/([A-Za-z0-9_-]+)/);
		return match ? `https://www.youtube.com/embed/${match[1]}` : null;
	}

	$: filtered =
		selectedCategory === 'All'
			? articles
			: articles.filter((a) => a.category === selectedCategory);

	$: counts = categories.reduce((acc, cat) => {
		acc[cat] = String(
			cat === 'All' ? articles.length : articles.filter((a) => a.category === cat).length
		);
		return acc;
	}, /** @type {StringMap} */ ({}));
</script>

<svelte:head>
	<title>Articles & Writing — Himanshu Sharma</title>
	<meta
		name="description"
		content="Articles, tutorials, and videos by Himanshu Sharma on Flutter, Kubernetes, AI, and DevOps."
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="mx-auto max-w-6xl px-4 py-20 font-['Roboto_Slab',serif]">
	<!-- Header -->
	<div class="mb-12">
		<p class="text-sm font-semibold tracking-widest text-orange-500 uppercase mb-3">Writing</p>
		<h1 class="text-5xl font-bold tracking-tight text-gray-900 mb-4">Articles & Videos</h1>
		<p class="text-lg text-gray-500 max-w-xl">
			Tutorials, deep dives, and talks on Flutter, Kubernetes, AI tooling, and DevOps — published
			across the web.
		</p>
	</div>

	<!-- Category filter -->
	<div class="flex flex-wrap gap-2 mb-10">
		{#each categories as cat (cat)}
			<button
				on:click={() => (selectedCategory = cat)}
				class="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-150
					{selectedCategory === cat
					? 'bg-gray-900 text-white border-gray-900'
					: 'bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-900'}"
			>
				{cat}
				<span
					class="text-xs rounded-full px-1.5 py-0.5 font-semibold
						{selectedCategory === cat ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}"
				>
					{counts[cat]}
				</span>
			</button>
		{/each}
	</div>

	<!-- Grid -->
	{#if filtered.length === 0}
		<p class="text-gray-400 py-20 text-center">No articles in this category yet.</p>
	{:else}
		<div class="grid md:grid-cols-2 gap-5">
			{#each filtered as article (article.slug)}
				{@const embedUrl = article.category === 'Videos' ? youtubeEmbedUrl(article.url) : null}

				{#if embedUrl}
					<!-- Video card -->
					<div class="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200 flex flex-col">
						<div class="aspect-video w-full bg-gray-900">
							<iframe
								src={embedUrl}
								title={article.title}
								class="w-full h-full"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen
							></iframe>
						</div>
						<div class="p-6 flex flex-col flex-1">
							<div class="flex items-center gap-2 mb-3">
								<span class="text-xs font-semibold px-2 py-0.5 rounded-full {sourceColour[article.source] ?? 'bg-gray-100 text-gray-600'}">
									{article.source}
								</span>
								<span class="text-xs text-gray-400 uppercase tracking-wide font-medium">{article.category}</span>
							</div>
							<h2 class="text-lg font-bold text-gray-900 leading-snug mb-2">{article.title}</h2>
							<p class="text-sm text-gray-500 flex-1">{article.description}</p>
							<a
								href={article.url}
								target="_blank"
								rel="noopener noreferrer"
								class="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 hover:text-orange-500 transition-colors"
							>
								Watch on YouTube
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
								</svg>
							</a>
						</div>
					</div>
				{:else}
					<!-- Article card -->
					<a
						href={article.url}
						target="_blank"
						rel="noopener noreferrer"
						class="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md hover:border-gray-200 transition-all duration-200 flex flex-col"
					>
						<div class="flex items-center gap-2 mb-4">
							<span class="text-xs font-semibold px-2 py-0.5 rounded-full {sourceColour[article.source] ?? 'bg-gray-100 text-gray-600'}">
								{article.source}
							</span>
							<span class="text-xs text-gray-400 uppercase tracking-wide font-medium">{article.category}</span>
						</div>

						<h2 class="text-xl font-bold text-gray-900 leading-snug mb-3 group-hover:text-orange-500 transition-colors">
							{article.title}
						</h2>

						<p class="text-sm text-gray-500 leading-relaxed flex-1">{article.description}</p>

						<div class="mt-6 flex items-center gap-1.5 text-sm font-semibold text-gray-800 group-hover:text-orange-500 transition-colors">
							Read Article
							<svg
								class="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</div>
					</a>
				{/if}
			{/each}
		</div>
	{/if}

	<!-- Footer note -->
	<p class="mt-16 text-center text-sm text-gray-400">
		· {articles.length} articles & videos across {categories.length - 1} topics ·
		<!-- <a href="https://blog.himanshusharma.tech" target="_blank" rel="noopener noreferrer" class="underline hover:text-gray-600">Personal blog →</a> -->
	</p>
</div>
