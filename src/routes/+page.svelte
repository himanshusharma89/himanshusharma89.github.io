<script>
	import Fa from 'svelte-fa';
	import { faEnvelope, faFileAlt, faBlog } from '@fortawesome/free-solid-svg-icons';
	import {
		faLinkedin,
		faGithub,
		faStackOverflow,
		faMedium,
		faCodepen,
		faTwitter,
		faInstagram
	} from '@fortawesome/free-brands-svg-icons';
	import { hero, about, featuredWork, techStack, connect } from '$lib/content.js';
	import { marked } from 'marked';

	// Map icon string names to actual icon imports for dynamic rendering
	/** @type {{ [key: string]: any }} */
	const iconMap = {
		faEnvelope,
		faFileAlt,
		faBlog,
		faLinkedin,
		faGithub,
		faStackOverflow,
		faMedium,
		faCodepen,
		faTwitter,
		faInstagram
	};

	// If fetching from API in the future, replace the import with a fetch and assign to these variables
	// Example:
	// import { onMount } from 'svelte';
	// let hero, about, featuredWork, techStack, connect;
	// onMount(async () => {
	//   const res = await fetch('/api/content');
	//   ({ hero, about, featuredWork, techStack, connect } = await res.json());
	// });
</script>

<svelte:head>
	<title>Himanshu Sharma</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="description" content="Himanshu Sharma | Portfolio" />
	<meta name="color-scheme" content="light only" />
	<meta property="og:site_name" content="Himanshu Sharma" />
	<meta property="og:title" content="Himanshu Sharma" />
	<meta property="og:type" content="website" />
	<meta property="og:description" content="Himanshu Sharma | Portfolio" />
	<meta
		property="og:image"
		content="https://himanshu-sharma.carrd.co/assets/images/card.jpg?v=55b8e0a9"
	/>
	<meta property="og:url" content="https://himanshu-sharma.carrd.co" />
	<meta property="twitter:card" content="summary_large_image" />
	<link rel="canonical" href="https://himanshu-sharma.carrd.co" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Sen:wght@400&family=Roboto+Slab:wght@400;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="flex min-h-screen items-center justify-center bg-[#fafafa]">
	<div class="flex w-full max-w-5xl flex-col-reverse items-stretch gap-8 px-4 py-12 md:flex-row">
		<!-- Left: Text & Buttons, responsive height -->
		<div class="flex flex-1 items-center justify-center md:justify-end">
			<div class="flex w-full max-w-md flex-col justify-center">
				<div class="flex h-full flex-col justify-center text-center md:text-right">
					<h1 class="mb-2 font-mono text-3xl font-bold tracking-wide md:text-5xl lg:text-6xl">
						{hero.name}
					</h1>
					<div class="mb-2 font-mono text-lg text-orange-600 md:text-2xl">{hero.tagline}</div>
					<p
						class="mx-auto mb-8 max-w-md font-mono text-base tracking-wide text-gray-500 md:mx-0 md:text-lg"
					>
						{hero.summary}
					</p>
					<div class="flex w-full flex-row flex-wrap justify-center gap-4 md:justify-end">
						{#each hero.buttons as btn (btn.label)}
							<a
								class="group flex items-center justify-center gap-2 rounded border border-gray-100 bg-white px-5 py-3 font-mono text-base whitespace-nowrap text-gray-700 shadow transition hover:bg-orange-50 hover:shadow-md"
								href={btn.url}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Fa icon={iconMap[btn.icon]} class="text-orange-500 group-hover:text-orange-600" />
								{btn.label}
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>
		<!-- Right: Profile Image, responsive and aligned -->
		<div class="flex flex-1 items-center justify-center md:items-stretch">
			<div
				class="bg-opacity-60 mx-auto flex h-40 w-40 items-center justify-center overflow-hidden rounded border-2 border-dashed border-gray-300 bg-gray-500 shadow-md md:aspect-square md:h-full md:w-full md:max-w-md"
			>
				<img src={hero.profileImage} alt="Himanshu Sharma" class="h-full w-full object-cover" />
			</div>
		</div>
	</div>
</div>

<!-- MAIN CONTENT (clean, efficient flow, fits viewport) -->
<div class="container flex min-h-[60vh] flex-col justify-center font-['Roboto_Slab',serif]">
	<div class="section">
		<h2 class="mb-2 text-xl font-bold md:text-3xl">Hello!</h2>
		<p class="text-base leading-relaxed md:text-lg">{about}</p>
	</div>

	<div class="section">
		<h2 class="mb-2 text-xl font-bold md:text-3xl">Featured Work</h2>
		<ul class="space-y-4">
			{#each featuredWork as work (work.title)}
				<li class="text-base leading-relaxed md:text-lg">
					<span class="highlight">{work.title}</span> —
					<span class="featured-links">{@html marked.parse(work.description)}</span>
				</li>
			{/each}
		</ul>
	</div>

	<div class="section">
		<h2 class="mb-2 text-xl font-bold md:text-3xl">Tech Stack & Skills</h2>
		<ul class="text-base leading-relaxed md:text-lg">
			<li><strong>Languages & Frameworks:</strong> {techStack.languages}</li>
			<li><strong>Cloud & Infra:</strong> {techStack.cloud}</li>
			<li><strong>Dev & DevOps Tools:</strong> {techStack.devops}</li>
			<li><strong>Data & Observability:</strong> {techStack.data}</li>
			<li><strong>Developer Experience:</strong> {techStack.dx}</li>
		</ul>
	</div>

	<div class="section">
		<h2 class="mb-2 text-xl font-bold md:text-3xl">Let's Connect</h2>
		<p class="text-base leading-relaxed md:text-lg">{connect}</p>
	</div>

	<footer>
		<p class="text-sm md:text-base">© 2025 - himanshusharma.tech</p>
	</footer>
</div>

<style>
	:global(body) {
		margin: 0;
		font-family: 'Inter', sans-serif;
		background-color: #fff;
		line-height: 1.5;
		color: #333;
	}

	.container {
		max-width: 800px;
		margin: 4rem auto;
		padding: 0 1rem;
	}

	.section {
		margin-bottom: 2.5rem;
	}

	h2 {
		font-size: 1.5rem;
		margin-bottom: 0.75rem;
	}

	p {
		margin-bottom: 1rem;
	}

	.highlight {
		font-weight: bold;
		color: #000;
	}

	footer {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid #eee;
		font-size: 0.9rem;
		text-align: center;
		color: #aaa;
	}

	:global(.featured-links a) {
		text-decoration: underline;
		text-underline-offset: 2px;
	}
</style>
