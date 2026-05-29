import React from "react";
import LogoLight from "../../assets/img/logos/logo-light.png";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
	faMapMarkerAlt,
	faEnvelope,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { company } from "../../constants/company";

const Divider = () => (
	<div className="flex flex-col gap-0.75 mb-7">
		<div className="w-12 h-0.5 rounded-full bg-white/20" />
		<div className="w-6 h-0.5 rounded-full bg-white/20" />
	</div>
);

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<>
			<footer className="bg-bg-footer border-t border-white/10 pt-20 pb-4">
				<div className="container mx-auto">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-12">
						<div className="lg:col-span-4">
							<img
								src={LogoLight}
								alt="Codeanew"
								className="h-14 w-auto mb-5"
							/>
							<p className="text-sm text-slate leading-relaxed max-w-xs">
								Your long-term technology partner — from first website to full
								enterprise platform. Based in UAE, built for the world.
							</p>
						</div>

						<div className="lg:col-span-4">
							<h4 className="text-[17px] font-semibold text-white mb-2">
								Contact &amp; Location
							</h4>
							<Divider />
							<ul className="space-y-3">
								<li className="flex items-start gap-3 text-sm text-white">
									<FontAwesomeIcon
										icon={faMapMarkerAlt}
										className="icon-gold mt-0.5 shrink-0 w-4"
									/>
									<span>{company.address}</span>
								</li>
								<li className="flex items-start gap-3 text-sm text-white">
									<FontAwesomeIcon
										icon={faEnvelope}
										className="icon-gold mt-0.5 shrink-0 w-4"
									/>
									<a
										href={company.emailHref}
										className="text-white hover:text-gold transition-colors"
									>
										{company.email}
									</a>
								</li>
								<li className="flex items-start gap-3 text-sm text-white">
									<FontAwesomeIcon
										icon={faPhone}
										className="icon-gold mt-0.5 shrink-0 w-4"
									/>
									<a
										href={company.phoneHref}
										className="text-white hover:text-gold transition-colors"
									>
										{company.phone}
									</a>
								</li>
							</ul>
						</div>

						<div className="lg:col-span-2 sm:col-span-1">
							<h4 className="text-[17px] font-semibold text-white mb-2">
								Links
							</h4>
							<Divider />
							<ul className="space-y-3">
								<li>
									<Link
										to="/blog"
										className="text-sm text-white hover:text-gold transition-colors"
									>
										Insights &amp; Resources
									</Link>
								</li>
								<li>
									<Link
										to="/services"
										className="text-sm text-white hover:text-gold transition-colors"
									>
										Our Services
									</Link>
								</li>
								<li>
									<Link
										to="/about"
										className="text-sm text-white hover:text-gold transition-colors"
									>
										About Us
									</Link>
								</li>
							</ul>
						</div>

						<div className="lg:col-span-2 sm:col-span-1">
							<h4 className="text-[17px] font-semibold text-white mb-2">
								Support
							</h4>
							<Divider />
							<ul className="space-y-3">
								<li>
									<Link
										to="/privacy"
										className="text-sm text-white hover:text-gold transition-colors"
									>
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link
										to="/contact-us"
										className="text-sm text-white hover:text-gold transition-colors"
									>
										Contact Us
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>

			<div className="bg-bg-footer border-t border-white/10">
				<div className="container mx-auto py-5">
					<div className="flex flex-col sm:flex-row items-center justify-between gap-3">
						<p className="text-sm text-slate m-0">
							© {currentYear}{" "}
							<a
								href="/"
								className="text-gold font-semibold hover:text-gold-light transition-colors"
							>
								Codeanew.
							</a>{" "}
							All Rights Reserved.
						</p>

						<ul className="flex items-center gap-3">
							<li>
								<a
									href={company.instagram}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-white text-base transition-all duration-200 hover:scale-110 hover:shadow-md facebook-bg"
									aria-label="Instagram"
								>
									<FontAwesomeIcon icon={faInstagram} />
								</a>
							</li>
							<li>
								<a
									href={company.linkedin}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-white text-base transition-all duration-200 hover:scale-110 hover:shadow-md linkedin-bg"
									aria-label="LinkedIn"
								>
									<FontAwesomeIcon icon={faLinkedin} />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
