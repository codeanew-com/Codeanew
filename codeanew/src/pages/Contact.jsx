import React, { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import SEO from "../components/SEO";
import ContactForm from "../components/ContactForm";
import { company } from "../constants/company";
import { pageSEO } from "../constants/seo";

const ContactInfo = () => (
	<div className="flex flex-col gap-4">
		<div className="bg-white border border-gray-100 rounded-xl p-5 shadow-card-sm flex items-center gap-4">
			<div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
				<FontAwesomeIcon icon={faLocationDot} className="icon-gold text-lg" />
			</div>
			<div>
				<h5 className="font-semibold text-heading text-sm mb-0.5">Office Address</h5>
				<p className="text-sm text-muted m-0">{company.address}</p>
			</div>
		</div>

		<div className="bg-white border border-gray-100 rounded-xl p-5 shadow-card-sm flex items-center gap-4">
			<div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
				<FontAwesomeIcon icon={faPhoneAlt} className="icon-gold text-lg" />
			</div>
			<div>
				<h5 className="font-semibold text-heading text-sm mb-0.5">Phone Number</h5>
				<a href={company.phoneHref} className="text-sm text-muted hover:text-gold transition-colors">
					{company.phone}
				</a>
			</div>
		</div>

		<div className="bg-white border border-gray-100 rounded-xl p-5 shadow-card-sm flex items-center gap-4">
			<div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
				<FontAwesomeIcon icon={faEnvelope} className="icon-gold text-lg" />
			</div>
			<div>
				<h5 className="font-semibold text-heading text-sm mb-0.5">Email Address</h5>
				<a href={company.emailHref} className="text-sm text-muted hover:text-gold transition-colors">
					{company.email}
				</a>
			</div>
		</div>

		<div className="bg-navy rounded-xl p-6 mt-4">
			<p className="text-white font-bold text-lg mb-2">Prefer a direct call?</p>
			<p className="text-slate text-sm mb-4">
				Book a free 30-minute call and we'll discuss your project in detail.
			</p>
			<button
				type="button"
				data-cal-namespace="30min"
				data-cal-link="codeanew/30min"
				data-cal-config='{"layout":"month_view","theme":"light"}'
				className="btn-theme w-full py-3"
			>
				Book a Free Call
			</button>
		</div>
	</div>
);

const NextSteps = () => (
	<section className="mt-16 py-16 bg-bg-light rounded-2xl">
		<div className="text-center mb-10">
			<h2 className="text-2xl font-bold text-heading mb-2">What happens after you submit?</h2>
			<p className="text-muted">We move fast. Here's what to expect.</p>
		</div>
		<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
			{[
				{ n: 1, title: "We review your request", body: "We'll go through your enquiry and understand exactly what you need." },
				{ n: 2, title: "We schedule a call", body: "A short call to discuss your project, timeline, and budget in detail." },
				{ n: 3, title: "We send a proposal", body: "A clear proposal with timeline, cost, and exactly what we'll deliver." },
			].map(({ n, title, body }) => (
				<div key={n} className="bg-white rounded-xl shadow-card p-6 text-center">
					<div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-3">
						<span className="text-gold font-bold">{n}</span>
					</div>
					<h5 className="font-bold text-heading text-sm mb-1">{title}</h5>
					<p className="text-xs text-muted m-0">{body}</p>
				</div>
			))}
		</div>
	</section>
);

const Contact = () => {
	useEffect(() => {
		(async () => {
			const cal = await getCalApi({ namespace: "30min" });
			cal("ui", {
				styles: { branding: { brandColor: "#F0A500" } },
				hideEventTypeDetails: false,
				layout: "month_view",
			});
		})();
	}, []);

	return (
		<>
			<SEO
				title={pageSEO.contact.title}
				description={pageSEO.contact.description}
				canonicalUrl="/contact-us"
			/>
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="section-title">
						<h1>Start Your Project</h1>
						<p>Tell us about your project and we'll get back to you within 24 hours.</p>
					</div>

					<div className="flex flex-col lg:flex-row gap-8 items-start">
						<div className="w-full lg:w-7/12">
							<ContactForm />
						</div>
						<div className="w-full lg:w-5/12 lg:sticky lg:top-28">
							<ContactInfo />
						</div>
					</div>

					<NextSteps />
				</div>
			</section>
		</>
	);
};

export default Contact;
