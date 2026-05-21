// You can replace this file with an API fetch in the future for dynamic content.
// For API: fetch data and return the same structure as below.

export const hero = {
	name: 'Himanshu Sharma',
	tagline: 'Senior Software Engineer',
	summary:
		'Building cloud-native tools and platforms. Passionate about simplifying complex systems and empowering developers.',
	profileImage:
		'https://raw.githubusercontent.com/himanshusharma89/himanshusharma89.github.io/new/static/profile.png',
	buttons: [
		{ label: 'Email',         icon: 'faEnvelope',      url: 'mailto:contact@himanshusharma.tech' },
		{ label: 'LinkedIn',      icon: 'faLinkedin',      url: 'https://linkedin.com/in/himanshusharma89' },
		{ label: 'Resume',        icon: 'faFileAlt',       url: 'https://resume.himanshusharma.tech' },
		{ label: 'GitHub',        icon: 'faGithub',        url: 'https://github.com/himanshusharma89' },
		{ label: 'Stack Overflow',icon: 'faStackOverflow', url: 'https://stackoverflow.com/users/11545939/himanshu-sharma' },
		// { label: 'Medium',        icon: 'faMedium',        url: 'https://medium.com/@himanshusharma89' },
		{ label: 'Codepen',       icon: 'faCodepen',       url: 'https://codepen.io/himanshusharma89' },
		{ label: 'X',             icon: 'faTwitter',       url: 'https://x.com/_SharmaHimanshu' },
		{ label: 'Instagram',     icon: 'faInstagram',     url: 'https://instagram.com/rage.remix' },
		// ↓ Single "Writing" entry — points to the internal /blog route
		{ label: 'Writing',       icon: 'faBlog',          url: '/blog' }
	]
};

export const about = `I'm a Senior Software Engineer with experience building backend systems, developer platforms, and AI-powered tooling. Background spans backend engineering, Kubernetes ecosystems, SDK development, and developer experience. Built MCP servers, Kubernetes diagnostic tooling, and reusable platform components while combining engineering execution with technical communication and OSS contributions. Outside work, I explore new places, play story-driven games, and keep a watchful eye on what's next in tech.`;

export const featuredWork = [
	{
		title: 'darkdown-to-markdown NPM Package',
		description: `A node package which converts darkdown to GitBook readable markdown format with comprehensive migration tools. [NPM Package](https://www.infracloud.io/blogs/build-your-own-mcp-server/)`
	},
	{
		title: 'How to Build Your Own MCP Server',
		description: `A step-by-step guide to building Model Context Protocol (MCP) servers for AI-driven workflows. [Read the blog](https://www.infracloud.io/blogs/build-your-own-mcp-server/)`
	},
	{
		title: 'K8s Diagnostics MCP Server',
		description: `Top 6 in AI Agents Hackathon (2025, by Airtribe & Lyzr): Built a Kubernetes diagnostics agent using the MCP protocol, recognized among the best AI agents. [GitHub Repo](https://github.com/himanshusharma89/k8s-diagnostics-mcp-server) | [Hackathon Info](https://lp.airtribe.live/ai-agents-hackathon)`
	}
];

export const writingStats = [
	{ label: 'Medium views', value: '256.3K' },
	{ label: 'Medium reads', value: '67.3K' },
	{ label: 'Hashnode all-time views', value: '3.8K' }
];

export const techStack = {
	backend: 'Python, Dart, JavaScript, Java, SQL, Bash, Node.js, REST APIs, Microservices, OpenAPI',
	platform: 'Kubernetes (GKE), GCP, Docker, GCS',
	devplatform: 'GitHub Actions, Jenkins, SDK Development, API Design, Internal Tooling',
	data: 'Apache Airflow, Elasticsearch, MongoDB, Redis, Grafana, Sensu, Facets.cloud',
	devrel: 'Technical Writing, Documentation, Open Source Contributions, Developer Advocacy',
	ai: 'LLM Tooling, MCP, AI-assisted Developer Workflows'
};

export const connect =
	'Always happy to talk about DevEx, docs, systems, or side projects. Feel free to drop a message or connect using the links above!';

// ── Featured articles shown in the homepage Writing section ─────────────────
// Pick a diverse cross-section — keep it to 4.
export const featuredArticles = [
	{
		title: 'How to Build Your Own MCP Server',
		category: 'AI',
		source: 'InfraCloud',
		url: 'https://www.infracloud.io/blogs/build-your-own-mcp-server/'
	},
	{
		title: 'Securing MCP Servers: Auth & Authorization Guide',
		category: 'AI',
		source: 'InfraCloud',
		url: 'https://www.infracloud.io/blogs/securing-mcp-servers/'
	},
	{
		title: 'Flutter CI/CD using GitHub Actions',
		category: 'Flutter',
		source: 'LogRocket',
		url: 'https://blog.logrocket.com/flutter-ci-cd-using-github-actions/'
	},
	{
		title: 'Kubeflow on GKE: Troubleshooting & ML Pipelines',
		category: 'Kubernetes',
		source: 'InfraCloud',
		url: 'https://www.infracloud.io/blogs/kubeflow-on-gke-troubleshooting-setup-challenges-running-ml-pipelines/'
	}
];

// ── Full article listing (used by /blog) ────────────────────────────────────
export const articles = [
	// Flutter ──────────────────────────────────────────────────────────────────
	{
		title: 'Flutter CI/CD using GitHub Actions',
		slug: 'flutter-ci-cd-github-actions',
		category: 'Flutter',
		source: 'LogRocket',
		description: 'A practical guide to automating Flutter build, test, and deployment pipelines using GitHub Actions workflows.',
		url: 'https://blog.logrocket.com/flutter-ci-cd-using-github-actions/'
	},
	{
		title: 'Build an Augmented Reality App in Flutter',
		slug: 'flutter-augmented-reality',
		category: 'Flutter',
		source: 'LogRocket',
		description: 'Step-by-step walkthrough for building AR experiences in Flutter using ARCore and ARKit.',
		url: 'https://blog.logrocket.com/build-augmented-reality-app-flutter/'
	},
	{
		title: 'Understanding Deep Linking in Flutter with Uni Links',
		slug: 'flutter-deep-linking-uni-links',
		category: 'Flutter',
		source: 'LogRocket',
		description: 'How to implement deep linking in Flutter apps using the uni_links package for both Android and iOS.',
		url: 'https://blog.logrocket.com/understanding-deep-linking-flutter-uni-links/'
	},
	{
		title: 'Securing Local Storage in Flutter',
		slug: 'flutter-secure-local-storage',
		category: 'Flutter',
		source: 'LogRocket',
		description: 'Techniques and packages for securely storing sensitive data locally in Flutter applications.',
		url: 'https://blog.logrocket.com/securing-local-storage-flutter/'
	},
	{
		title: 'StateNotifier: Improving State Change Notifiers in Flutter',
		slug: 'flutter-statenotifier',
		category: 'Flutter',
		source: 'LogRocket',
		description: 'How StateNotifier improves on ChangeNotifier for more predictable and testable Flutter state management.',
		url: 'https://blog.logrocket.com/statenotifier-improving-state-change-notifiers-flutter/'
	},
	{
		title: 'Learning How to Use AWS Amplify in Flutter',
		slug: 'flutter-aws-amplify',
		category: 'Flutter',
		source: 'LogRocket',
		description: 'Integrating AWS Amplify with Flutter for authentication, storage, and API features.',
		url: 'https://blog.logrocket.com/learning-aws-amplify-flutter/'
	},
	{
		title: 'Deploy Flutter Web App to Azure App Service with Node.js',
		slug: 'flutter-web-azure-nodejs',
		category: 'Flutter',
		source: 'Medium · Flutter Community',
		description: 'How to deploy a Flutter Web application to Azure App Service using a Node.js server.',
		url: 'https://medium.com/flutter-community/deploy-flutter-web-app-to-azure-app-service-with-node-js-b0781fc6def2'
	},
	{
		title: 'Flutter: How to Scroll an ExpansionTile When It Is Expanded',
		slug: 'flutter-expansiontile-scroll',
		category: 'Flutter',
		source: 'Medium · Flutter Community',
		description: 'A quick tip on auto-scrolling to an ExpansionTile after it expands for a better UX.',
		url: 'https://medium.com/flutter-community/flutter-how-to-scroll-an-expansiontile-when-it-is-expanded-ad706cfb80a6'
	},
	{
		title: 'Flutter: Expansion/Collapse View',
		slug: 'flutter-expansion-collapse',
		category: 'Flutter',
		source: 'Medium · Flutter Community',
		description: 'Building a smooth expand/collapse UI component in Flutter from scratch.',
		url: 'https://medium.com/flutter-community/flutter-expansion-collapse-view-fde9c51ac438'
	},
	{
		title: 'Building a Clubhouse Clone in Flutter using 100ms',
		slug: 'flutter-clubhouse-100ms',
		category: 'Flutter',
		source: '100ms',
		description: 'A hands-on tutorial for building a real-time audio rooms app (Clubhouse clone) in Flutter with the 100ms SDK.',
		url: 'https://www.100ms.live/blog/clubhouse-clone-flutter'
	},
	{
		title: 'Building Secure Flutter Apps with Firebase: Using Service Account Keys',
		slug: 'flutter-firebase-service-account',
		category: 'Flutter',
		source: 'Aortem · DartCodeLabs',
		description: 'How to use Firebase service account keys to secure server-side communication in Flutter projects.',
		url: 'https://dartcodelabs.com/building-secure-flutter-apps-with-firebase-using-service-account-keys/'
	},

	// Kubernetes ───────────────────────────────────────────────────────────────
	{
		title: 'Kubeflow on GKE: Troubleshooting Setup Challenges and Running ML Pipelines',
		slug: 'kubeflow-gke-ml-pipelines',
		category: 'Kubernetes',
		source: 'InfraCloud',
		description: 'Common pitfalls when deploying Kubeflow on Google Kubernetes Engine and how to run production ML pipelines.',
		url: 'https://www.infracloud.io/blogs/kubeflow-on-gke-troubleshooting-setup-challenges-running-ml-pipelines/'
	},
	{
		title: 'Deploying AI Models to Production in the Cloud',
		slug: 'deploying-ai-models-cloud',
		category: 'Kubernetes',
		source: 'InfraCloud',
		description: 'End-to-end guide for packaging, serving, and monitoring AI models in cloud-native environments.',
		url: 'https://www.infracloud.io/blogs/deploying-ai-models-to-production-in-cloud/'
	},

	// AI ───────────────────────────────────────────────────────────────────────
	{
		title: 'How to Build Your Own MCP Server',
		slug: 'build-mcp-server',
		category: 'AI',
		source: 'InfraCloud',
		description: 'A step-by-step guide to building Model Context Protocol (MCP) servers for AI-driven developer workflows.',
		url: 'https://www.infracloud.io/blogs/build-your-own-mcp-server/'
	},
	{
		title: 'How Gen AI is Revolutionising AppSec',
		slug: 'genai-appsec',
		category: 'AI',
		source: 'InfraCloud',
		description: 'Exploring how generative AI is changing the application security landscape — from threat detection to code review.',
		url: 'https://www.infracloud.io/blogs/ai-application-security/'
	},
	{
		title: 'Securing MCP Servers: Authentication and Authorization Guide',
		slug: 'securing-mcp-servers',
		category: 'AI',
		source: 'InfraCloud',
		description: 'A comprehensive guide to implementing auth patterns that keep your MCP servers safe in production.',
		url: 'https://www.infracloud.io/blogs/securing-mcp-servers/'
	},
	{
		title: 'MCP Gateway',
		slug: 'mcp-gateway',
		category: 'AI',
		source: 'InfraCloud',
		description: 'Deep dive into building an MCP Gateway for centralised routing, auth, and observability across MCP servers.',
		url: 'https://www.infracloud.io/blogs/mcp-gateway/'
	},

	// DevOps ───────────────────────────────────────────────────────────────────
	{
		title: 'Migrating to Airflow from Cron',
		slug: 'airflow-from-cron',
		category: 'DevOps',
		source: 'Personal Blog',
		description: 'Why and how to migrate from simple cron jobs to Apache Airflow for more reliable, observable scheduling.',
		url: 'https://blog.himanshusharma.tech/migrating-to-airflow-from-cron'
	},
	{
		title: 'Message Streaming with Apache Kafka',
		slug: 'kafka-message-streaming',
		category: 'DevOps',
		source: 'Google Docs',
		description: 'An in-depth look at building scalable event-driven architectures using Apache Kafka message streaming.',
		url: 'https://docs.google.com/document/d/1QMcwAECbvxNfmNNDtLvyfWrFJiGsIj7_EK7yDrikKBw/edit?usp=sharing'
	},

	// Videos ───────────────────────────────────────────────────────────────────
	{
		title: 'YouTube Live — AI & Developer Tools',
		slug: 'youtube-live-ai-dev-tools',
		category: 'Videos',
		source: 'YouTube',
		description: 'Live session covering AI tooling, developer workflows, and Q&A.',
		url: 'https://www.youtube.com/live/WNEu0vgFnkg?si=jZjZIpsvg3xRJ0a7'
	},
	{
		title: 'YouTube Live — Cloud & Platform Engineering',
		slug: 'youtube-live-cloud-platform',
		category: 'Videos',
		source: 'YouTube',
		description: 'Live deep dive into cloud-native platform engineering topics.',
		url: 'https://www.youtube.com/live/v26cRYUJTWE?si=E6IzmUfHB02SWTpb'
	}
];
