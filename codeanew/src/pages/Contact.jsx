import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import { toast } from "sonner";
import { getCalApi } from "@calcom/embed-react";
import { serviceOptions } from "../constants/services";
import { submitContact } from "../api/services/contact";
import { company } from "../constants/company";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SEO from "../components/SEO";
import { pageSEO } from "../constants/seo";
import {
	faPhoneAlt,
	faEnvelope,
	faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const validationSchema = Yup.object({
	fullname: Yup.string().required("Full name is required"),
	email: Yup.string()
		.email("Invalid email address")
		.required("Email is required"),
	service: Yup.array().min(1, "At least one service is required"),
	phone: Yup.string().required("Phone number is required"),
	budget: Yup.string(),
	message: Yup.string(),
});

const selectStyles = {
	control: (b) => ({
		...b,
		minHeight: "3.25rem",
		borderColor: "#d1d5db",
		borderRadius: "0.375rem",
		boxShadow: "none",
		"&:hover": { borderColor: "#F0A500" },
	}),
	multiValue: (b) => ({
		...b,
		backgroundColor: "#fef3c7",
		borderRadius: "0.25rem",
	}),
	multiValueLabel: (b) => ({ ...b, color: "#2f2f2f", fontWeight: 500 }),
	multiValueRemove: (b) => ({
		...b,
		color: "#F0A500",
		"&:hover": { backgroundColor: "#fcd34d", color: "#fff" },
	}),
};

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
						<p>
							Tell us about your project and we'll get back to you within 24
							hours.
						</p>
					</div>

					<div className="flex flex-col lg:flex-row gap-8 items-start">
						<div className="w-full lg:w-7/12">
							<Formik
								initialValues={{
									fullname: "",
									email: "",
									service: [],
									phone: "",
									budget: "",
									message: "",
								}}
								validationSchema={validationSchema}
								onSubmit={async (values, { setSubmitting, resetForm }) => {
									try {
										await submitContact({
											fullname: values.fullname,
											email: values.email,
											phone: values.phone,
											service: values.service,
											budget: values.budget || null,
											message: values.message || null,
										});
										toast.success("Message sent successfully!");
										resetForm();
									} catch (error) {
										toast.error("There was an error submitting the form!");
									}
									setSubmitting(false);
								}}
							>
								{({ isSubmitting, setFieldValue }) => (
									<Form>
										<div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-card-sm flex flex-col gap-5">
											<div>
												<Field
													type="text"
													name="fullname"
													className="form-input"
													placeholder="Full Name"
												/>
												<ErrorMessage
													name="fullname"
													component="p"
													className="text-red-500 text-xs mt-1 mb-0"
												/>
											</div>

											<div>
												<Field
													type="email"
													name="email"
													className="form-input"
													placeholder="Email Address"
												/>
												<ErrorMessage
													name="email"
													component="p"
													className="text-red-500 text-xs mt-1 mb-0"
												/>
											</div>

											<div>
												<Field
													type="text"
													name="phone"
													className="form-input"
													placeholder="Phone Number"
												/>
												<ErrorMessage
													name="phone"
													component="p"
													className="text-red-500 text-xs mt-1 mb-0"
												/>
											</div>

											<div>
												<Select
													isMulti
													name="service"
													options={serviceOptions.map((o) => ({
														value: o,
														label: o,
													}))}
													placeholder="Select Services..."
													classNamePrefix="rselect"
													onChange={(sel) =>
														setFieldValue(
															"service",
															sel ? sel.map((o) => o.value) : [],
														)
													}
													styles={selectStyles}
												/>
												<ErrorMessage
													name="service"
													component="p"
													className="text-red-500 text-xs mt-1 mb-0"
												/>
											</div>

											<div>
												<Select
													name="budget"
													options={[
														{
															value: "Under 2,000 AED",
															label: "Under 2,000 AED",
														},
														{
															value: "2,000 - 5,000 AED",
															label: "2,000 — 5,000 AED",
														},
														{
															value: "5,000 - 15,000 AED",
															label: "5,000 — 15,000 AED",
														},
														{
															value: "15,000 - 50,000 AED",
															label: "15,000 — 50,000 AED",
														},
														{ value: "50,000 AED+", label: "50,000 AED+" },
													]}
													placeholder="Budget Range (Optional)"
													classNamePrefix="rselect"
													isClearable
													onChange={(sel) =>
														setFieldValue("budget", sel ? sel.value : "")
													}
													styles={selectStyles}
												/>
											</div>

											<div>
												<Field
													as="textarea"
													name="message"
													className="form-input"
													placeholder="Tell us about your project (optional)"
													rows={4}
													style={{ height: "auto", resize: "vertical" }}
												/>
											</div>

											<button
												type="submit"
												className="btn-theme w-full py-4 mt-2"
												disabled={isSubmitting}
											>
												{isSubmitting ? (
													<>
														<svg
															className="animate-spin w-4 h-4 shrink-0"
															fill="none"
															viewBox="0 0 24 24"
														>
															<circle
																className="opacity-25"
																cx="12"
																cy="12"
																r="10"
																stroke="currentColor"
																strokeWidth="4"
															/>
															<path
																className="opacity-75"
																fill="currentColor"
																d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
															/>
														</svg>
														Sending…
													</>
												) : (
													"Send Message →"
												)}
											</button>
										</div>
									</Form>
								)}
							</Formik>
						</div>

						<div className="w-full lg:w-5/12 lg:sticky lg:top-28">
							<div className="flex flex-col gap-4">
								<div className="bg-white border border-gray-100 rounded-xl p-5 shadow-card-sm flex items-center gap-4">
									<div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
										<FontAwesomeIcon
											icon={faLocationDot}
											className="icon-gold text-lg"
										/>
									</div>
									<div>
										<h5 className="font-semibold text-heading text-sm mb-0.5">
											Office Address
										</h5>
										<p className="text-sm text-muted m-0">
											{company.address}
										</p>
									</div>
								</div>

								<div className="bg-white border border-gray-100 rounded-xl p-5 shadow-card-sm flex items-center gap-4">
									<div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
										<FontAwesomeIcon
											icon={faPhoneAlt}
											className="icon-gold text-lg"
										/>
									</div>
									<div>
										<h5 className="font-semibold text-heading text-sm mb-0.5">
											Phone Number
										</h5>
										<a
											href={company.phoneHref}
											className="text-sm text-muted hover:text-gold transition-colors"
										>
											{company.phone}
										</a>
									</div>
								</div>

								<div className="bg-white border border-gray-100 rounded-xl p-5 shadow-card-sm flex items-center gap-4">
									<div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
										<FontAwesomeIcon
											icon={faEnvelope}
											className="icon-gold text-lg"
										/>
									</div>
									<div>
										<h5 className="font-semibold text-heading text-sm mb-0.5">
											Email Address
										</h5>
										<a
											href={company.emailHref}
											className="text-sm text-muted hover:text-gold transition-colors"
										>
											{company.email}
										</a>
									</div>
								</div>

								<div className="bg-navy rounded-xl p-6 mt-4">
									<p className="text-white font-bold text-lg mb-2">
										Prefer a direct call?
									</p>
									<p className="text-slate text-sm mb-4">
										Book a free 30-minute call and we'll discuss your project in
										detail.
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
						</div>
					</div>

					<section className="mt-16 py-16 bg-bg-light rounded-2xl">
						<div className="text-center mb-10">
							<h2 className="text-2xl font-bold text-heading mb-2">
								What happens after you submit?
							</h2>
							<p className="text-muted">We move fast. Here's what to expect.</p>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
							<div className="bg-white rounded-xl shadow-card p-6 text-center">
								<div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-3">
									<span className="text-gold font-bold">1</span>
								</div>
								<h5 className="font-bold text-heading text-sm mb-1">
									We review your request
								</h5>
								<p className="text-xs text-muted m-0">
									We'll go through your enquiry and understand exactly what you
									need.
								</p>
							</div>

							<div className="bg-white rounded-xl shadow-card p-6 text-center">
								<div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-3">
									<span className="text-gold font-bold">2</span>
								</div>
								<h5 className="font-bold text-heading text-sm mb-1">
									We schedule a call
								</h5>
								<p className="text-xs text-muted m-0">
									A short call to discuss your project, timeline, and budget in
									detail.
								</p>
							</div>

							<div className="bg-white rounded-xl shadow-card p-6 text-center">
								<div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-3">
									<span className="text-gold font-bold">3</span>
								</div>
								<h5 className="font-bold text-heading text-sm mb-1">
									We send a proposal
								</h5>
								<p className="text-xs text-muted m-0">
									A clear proposal with timeline, cost, and exactly what we'll
									deliver.
								</p>
							</div>
						</div>
					</section>
				</div>
			</section>
		</>
	);
};

export default Contact;
