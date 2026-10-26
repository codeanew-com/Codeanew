import React, { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import { Turnstile } from "@marsidev/react-turnstile";
import { toast } from "sonner";
import { serviceOptions } from "../../constants/services";
import { submitContact } from "../../api/services/contact";

const validationSchema = Yup.object({
	fullname: Yup.string().required("Full name is required"),
	email: Yup.string().email("Invalid email address").required("Email is required"),
	phone: Yup.string().required("Phone number is required"),
	service: Yup.array().min(1, "At least one service is required"),
	budget: Yup.string().required("Budget is required"),
	message: Yup.string(),
});

const budgetOptions = [
	{ value: "Under 2,000 AED", label: "Under 2,000 AED" },
	{ value: "2,000 - 5,000 AED", label: "2,000 — 5,000 AED" },
	{ value: "5,000 - 15,000 AED", label: "5,000 — 15,000 AED" },
	{ value: "15,000 - 50,000 AED", label: "15,000 — 50,000 AED" },
	{ value: "50,000 AED+", label: "50,000 AED+" },
];

const selectStyles = {
	control: (b) => ({
		...b,
		minHeight: "3.25rem",
		borderColor: "#d1d5db",
		borderRadius: "0.375rem",
		boxShadow: "none",
		"&:hover": { borderColor: "#F0A500" },
	}),
	multiValue: (b) => ({ ...b, backgroundColor: "#fef3c7", borderRadius: "0.25rem" }),
	multiValueLabel: (b) => ({ ...b, color: "#2f2f2f", fontWeight: 500 }),
	multiValueRemove: (b) => ({
		...b,
		color: "#F0A500",
		"&:hover": { backgroundColor: "#fcd34d", color: "#fff" },
	}),
};

const initialValues = {
	fullname: "",
	email: "",
	phone: "",
	service: [],
	budget: "",
	message: "",
};

const ContactForm = () => {
	const [turnstileToken, setTurnstileToken] = useState(null);
	const turnstileRef = useRef(null);

	const handleSubmit = async (values, { setSubmitting, resetForm }) => {
		if (!turnstileToken) {
			toast.error("Security check not ready. Please wait a moment.");
			setSubmitting(false);
			return;
		}
		try {
			await submitContact(
				{
					fullname: values.fullname,
					email: values.email,
					phone: values.phone,
					service: values.service,
					budget: values.budget || null,
					message: values.message || null,
				},
				turnstileToken,
			);
			toast.success("Message sent successfully!");
			resetForm();
			setTurnstileToken(null);
			turnstileRef.current?.reset();
		} catch (error) {
			toast.error(error?.message || "There was an error submitting the form.");
			turnstileRef.current?.reset();
			setTurnstileToken(null);
		}
		setSubmitting(false);
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>
			{({ isSubmitting, setFieldValue, values }) => (
				<Form>
					<div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-card-sm flex flex-col gap-5">
						<div>
							<Field
								type="text"
								name="fullname"
								className="form-input"
								placeholder="Full Name*"
							/>
							<ErrorMessage name="fullname" component="p" className="text-red-500 text-xs mt-1 mb-0" />
						</div>

						<div>
							<Field
								type="email"
								name="email"
								className="form-input"
								placeholder="Email Address*"
							/>
							<ErrorMessage name="email" component="p" className="text-red-500 text-xs mt-1 mb-0" />
						</div>

						<div>
							<Field
								type="text"
								name="phone"
								className="form-input"
								placeholder="Phone Number*"
							/>
							<ErrorMessage name="phone" component="p" className="text-red-500 text-xs mt-1 mb-0" />
						</div>

						<div>
							<Select
								isMulti
								name="service"
								options={serviceOptions.map((o) => ({ value: o, label: o }))}
								value={values.service.map((o) => ({ value: o, label: o }))}
								placeholder="Select Services...*"
								classNamePrefix="rselect"
								onChange={(sel) => setFieldValue("service", sel ? sel.map((o) => o.value) : [])}
								styles={selectStyles}
							/>
							<ErrorMessage name="service" component="p" className="text-red-500 text-xs mt-1 mb-0" />
						</div>

						<Select
							name="budget"
							options={budgetOptions}
							value={values.budget ? { value: values.budget, label: values.budget } : null}
							placeholder="Budget Range*"
							classNamePrefix="rselect"
							isClearable
							onChange={(sel) => setFieldValue("budget", sel ? sel.value : "")}
							styles={selectStyles}
						/>

						<Field
							as="textarea"
							name="message"
							className="form-input"
							placeholder="Tell us about your project (optional)"
							rows={4}
							style={{ height: "auto", resize: "vertical" }}
						/>

						<Turnstile
							ref={turnstileRef}
							siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
							onSuccess={(token) => setTurnstileToken(token)}
							onExpire={() => setTurnstileToken(null)}
							options={{ size: "invisible" }}
						/>

						<button
							type="submit"
							className="btn-theme w-full py-4 mt-2"
							disabled={isSubmitting || !turnstileToken}
						>
							{isSubmitting ? (
								<>
									<svg className="animate-spin w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24">
										<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
										<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
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
	);
};

export default ContactForm;
