<script>
  import Fa from 'svelte-fa';
  import { faEnvelope, faFileAlt, faBlog } from '@fortawesome/free-solid-svg-icons';
  import { faLinkedin, faGithub, faStackOverflow, faMedium, faCodepen, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

  // Dynamic button data
  const buttons = [
    { label: 'Email', icon: faEnvelope, url: 'mailto:contact@himanshusharma.tech' },
    { label: 'LinkedIn', icon: faLinkedin, url: 'https://linkedin.com/in/himanshusharma89' },
    { label: 'Resume', icon: faFileAlt, url: '/resume.pdf' },
    { label: 'GitHub', icon: faGithub, url: 'https://github.com/himanshusharma89' },
    { label: 'Stack Overflow', icon: faStackOverflow, url: 'https://stackoverflow.com/users/yourid' },
    { label: 'Medium', icon: faMedium, url: 'https://medium.com/@himanshusharma89' },
    { label: 'Codepen', icon: faCodepen, url: 'https://codepen.io/himanshusharma89' },
    { label: 'Twitter', icon: faTwitter, url: 'https://twitter.com/himanshusharma89' },
    { label: 'Instagram', icon: faInstagram, url: 'https://instagram.com/himanshusharma89' },
    { label: 'Blog', icon: faBlog, url: 'https://himanshusharma.tech/blog' },
  ];

  const name = 'Himanshu Sharma';
  const tagline = 'Backend Engineer & DevRel';
  const summary = 'Building cloud-native tools and platforms. Passionate about simplifying complex systems and empowering developers.';
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

  .title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .subtitle {
    font-size: 1.25rem;
    color: #666;
    margin-bottom: 2rem;
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
</style>

<div class="min-h-screen flex items-center justify-center bg-[#fafafa]">
  <div class="flex flex-col-reverse md:flex-row items-stretch gap-8 w-full max-w-5xl px-4 py-12">
    <!-- Left: Text & Buttons, responsive height -->
    <div class="flex-1 flex items-center justify-center md:justify-end">
      <div class="w-full max-w-md flex flex-col justify-center">
        <div class="flex flex-col justify-center text-center md:text-right h-full">
          <h1 class="font-mono font-bold mb-2 tracking-wide text-3xl md:text-5xl lg:text-6xl">{name}</h1>
          <div class="text-orange-600 font-mono mb-2 text-lg md:text-2xl">{tagline}</div>
          <p class="mb-8 max-w-md text-gray-500 font-mono text-base md:text-lg tracking-wide mx-auto md:mx-0">{summary}</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {#each buttons as btn}
              <a
                class="flex items-center gap-2 px-5 py-3 bg-white rounded shadow hover:shadow-md border border-gray-100 transition text-gray-700 font-mono text-base justify-center hover:bg-orange-50 group"
                href={btn.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Fa icon={btn.icon} class="text-orange-500 group-hover:text-orange-600" />
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
        <img src="/profile.png" alt="Profile image" class="object-cover w-full h-full" />
      </div>
    </div>
  </div>
</div>

<!-- MAIN CONTENT (clean, efficient flow, fits viewport) -->
<div class="container min-h-[60vh] flex flex-col justify-center font-['Roboto_Slab',serif]">
  <div class="section">
    <h2 class="font-bold text-xl md:text-3xl mb-2">Hello!</h2>
    <p class="text-base md:text-lg leading-relaxed">
      I'm a Developer Relations Engineer at Improving with a backend engineering background. I focus on Kubernetes, developer platforms, and AI automation. I enjoy simplifying complex systems, writing about what I learn, and building tools that help developers move faster. Always curious, often experimenting, sometimes shipping. Outside work, I explore new places, play story-driven games, and keep a watchful eye on what's next in tech.
    </p>
  </div>

  <div class="section">
    <h2 class="font-bold text-xl md:text-3xl mb-2">Featured Work</h2>
    <ul class="space-y-4">
      <li class="text-base md:text-lg leading-relaxed">
        <span class="highlight">How to Build Your Own MCP Server</span> — A step-by-step guide to building Model Context Protocol (MCP) servers for AI-driven workflows.
      </li>
      <li class="text-base md:text-lg leading-relaxed">
        <span class="highlight">K8s Diagnostics MCP Server</span> — Top 6 in AI Agents Hackathon (2024): Built a Kubernetes diagnostics agent using the MCP protocol, recognized among the best AI agents.
      </li>
    </ul>
  </div>

  <div class="section">
    <h2 class="font-bold text-xl md:text-3xl mb-2">Tech Stack & Skills</h2>
    <ul class="text-base md:text-lg leading-relaxed">
      <li><strong>Languages & Frameworks:</strong> Python, Dart, JavaScript, Bash, SQL, Java, Node.js, OpenAPI, REST</li>
      <li><strong>Cloud & Infra:</strong> Kubernetes (GKE), Docker</li>
      <li><strong>Dev & DevOps Tools:</strong> GitHub Actions, Jenkins, Firebase, GCS, VS Code, WebStorm</li>
      <li><strong>Data & Observability:</strong> Airflow, Elasticsearch, MongoDB, Redis, Grafana, Sensu, Facets.cloud</li>
      <li><strong>Developer Experience:</strong> Docs, OSS, Internal Tooling</li>
    </ul>
  </div>

  <div class="section">
    <h2 class="font-bold text-xl md:text-3xl mb-2">Let's Connect</h2>
    <p class="text-base md:text-lg leading-relaxed">Always happy to talk about DevEx, docs, systems, or side projects. Feel free to drop a message or connect using the links above!</p>
  </div>

  <footer>
    <p class="text-sm md:text-base">© 2025 - Himanshu Sharma</p>
  </footer>
</div>