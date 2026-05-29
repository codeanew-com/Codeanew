import {
	faCode,
	faServer,
	faLightbulb,
	faGlobe,
	faMobileScreenButton,
	faCartShopping,
	faPenRuler,
	faCloud,
	faEnvelope,
	faArrowsRotate,
	faGears,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

export const pillars = [
	{
		icon: faCode,
		title: "Custom Software Development",
		desc: "From your first website to a full enterprise platform — we design and build everything your business needs to operate and grow digitally.",
		services: [
			{
				icon: faGlobe,
				title: "Web Development",
				desc: "Fast, scalable web applications built for your business.",
			},
			{
				icon: faMobileScreenButton,
				title: "Mobile App Development",
				desc: "Native and cross-platform apps for iOS and Android.",
			},
			{
				icon: faCartShopping,
				title: "E-commerce",
				desc: "Online stores that convert visitors into customers.",
			},
			{
				icon: faPenRuler,
				title: "UI/UX Design",
				desc: "Interfaces people actually enjoy using.",
			},
		],
	},
	{
		icon: faServer,
		title: "Cloud & Infrastructure",
		desc: "We set up and manage the technology that keeps your business running — fast, secure, and ready to scale.",
		services: [
			{
				icon: faCloud,
				title: "Cloud Hosting & DevOps",
				desc: "Infrastructure that scales with your growth.",
			},
			{
				icon: faEnvelope,
				title: "Business Email Services",
				desc: "Microsoft Exchange and Google Workspace, done right.",
			},
		],
	},
	{
		icon: faLightbulb,
		title: "Digital Transformation",
		desc: "We take businesses still running on spreadsheets and paper and move them fully into the digital age.",
		services: [
      {
        icon: faArrowsRotate,
				title: "Business Digitization",
				desc: "Replace manual processes with smart digital systems.",
			},
			{
        icon: faGears,
				title: "CRM & ERP Implementation",
				desc: "The right system, configured for how you actually work.",
			},
      {
        icon: faHeadset,
        title: "Support & Maintenance",
        desc: "We stay with you after launch — fixing issues, adding features, and keeping your systems running smoothly.",
      },
		],
	},
];

export const serviceOptions = [
	"Web Development",
	"Mobile App Development",
	"E-commerce",
	"UI/UX Design",
	"Cloud Hosting & DevOps",
	"Business Email Services",
  "Support & Maintenance",
	"Business Digitization",
	"CRM & ERP Implementation",
	"Other",
];
