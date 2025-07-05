<script>
  import Fa from 'svelte-fa';
  import {
    faEnvelope, faFileAlt, faBlog
  } from '@fortawesome/free-solid-svg-icons';
  import {
    faLinkedin, faGithub, faStackOverflow, faMedium, faCodepen, faTwitter, faInstagram
  } from '@fortawesome/free-brands-svg-icons';
  import { hero, about, featuredWork, techStack, connect } from '$lib/content.js';
  import { marked } from 'marked';

  // Map icon string names to actual icon imports for dynamic rendering
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
  <meta property="og:image" content="https://himanshu-sharma.carrd.co/assets/images/card.jpg?v=55b8e0a9" />
  <meta property="og:url" content="https://himanshu-sharma.carrd.co" />
  <meta property="twitter:card" content="summary_large_image" />
  <link rel="canonical" href="https://himanshu-sharma.carrd.co" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Sen:wght@400&family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet" />
</svelte:head>

<div class="min-h-screen flex items-center justify-center bg-[#fafafa]">
  <div class="flex flex-col-reverse md:flex-row items-stretch gap-8 w-full max-w-5xl px-4 py-12">
    <!-- Left: Text & Buttons, responsive height -->
    <div class="flex-1 flex items-center justify-center md:justify-end">
      <div class="w-full max-w-md flex flex-col justify-center">
        <div class="flex flex-col justify-center text-center md:text-right h-full">
          <h1 class="font-mono font-bold mb-2 tracking-wide text-3xl md:text-5xl lg:text-6xl">{hero.name}</h1>
          <div class="text-orange-600 font-mono mb-2 text-lg md:text-2xl">{hero.tagline}</div>
          <p class="mb-8 max-w-md text-gray-500 font-mono text-base md:text-lg tracking-wide mx-auto md:mx-0">{hero.summary}</p>
          <div class="flex flex-row flex-wrap gap-4 w-full justify-center md:justify-end">
            {#each hero.buttons as btn}
              <a
                class="flex items-center gap-2 px-5 py-3 bg-white rounded shadow hover:shadow-md border border-gray-100 transition text-gray-700 font-mono text-base justify-center hover:bg-orange-50 group whitespace-nowrap"
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
    <div class="flex-1 flex items-center justify-center md:items-stretch">
      <div class="w-40 h-40 md:w-full md:max-w-md md:aspect-square md:h-full bg-gray-500 bg-opacity-60 rounded border-2 border-dashed border-gray-300 flex items-center justify-center mx-auto shadow-md overflow-hidden">
        <img src={hero.profileImage} alt="Himanshu Sharma" class="object-cover w-full h-full" />
      </div>
    </div>
  </div>
</div>

<!-- MAIN CONTENT (clean, efficient flow, fits viewport) -->
<div class="container min-h-[60vh] flex flex-col justify-center font-['Roboto_Slab',serif]">
  <div class="section">
    <h2 class="font-bold text-xl md:text-3xl mb-2">Hello!</h2>
    <p class="text-base md:text-lg leading-relaxed">{about}</p>
  </div>

  <div class="section">
    <h2 class="font-bold text-xl md:text-3xl mb-2">Featured Work</h2>
    <ul class="space-y-4">
      {#each featuredWork as work}
        <li class="text-base md:text-lg leading-relaxed">
          <span class="highlight">{work.title}</span> — <span class="featured-links">{@html marked.parse(work.description)}</span>
        </li>
      {/each}
    </ul>
  </div>

  <div class="section">
    <h2 class="font-bold text-xl md:text-3xl mb-2">Tech Stack & Skills</h2>
    <ul class="text-base md:text-lg leading-relaxed">
      <li><strong>Languages & Frameworks:</strong> {techStack.languages}</li>
      <li><strong>Cloud & Infra:</strong> {techStack.cloud}</li>
      <li><strong>Dev & DevOps Tools:</strong> {techStack.devops}</li>
      <li><strong>Data & Observability:</strong> {techStack.data}</li>
      <li><strong>Developer Experience:</strong> {techStack.dx}</li>
    </ul>
  </div>

  <div class="section">
    <h2 class="font-bold text-xl md:text-3xl mb-2">Let's Connect</h2>
    <p class="text-base md:text-lg leading-relaxed">{connect}</p>
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