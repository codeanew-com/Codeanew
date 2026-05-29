import React, { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { submitBooking } from "../../api/services/booking";

const HeroBanner = () => {
	useEffect(() => {
		(async () => {
			const cal = await getCalApi({ namespace: "30min" });
			cal("ui", {
				styles: { branding: { brandColor: "#ffffff" } },
				hideEventTypeDetails: false,
				layout: "month_view",
			});
			try {
				cal("on", {
					action: "bookingSuccessful",
					callback: (e) => sendBookingDataToBackend(e.detail.data),
				});
			} catch (err) {
				console.error("Cal.com event error:", err);
			}
		})();
	}, []);

	const sendBookingDataToBackend = async (eventData) => {
		try {
			await submitBooking(eventData.data);
		} catch (error) {
			console.error("Booking submission error:", error);
		}
	};

	return (
		<section className="relative h-screen overflow-hidden" id="banner">
			<video
				className="absolute inset-0 w-full h-full object-cover"
				loop
				muted
				autoPlay
				playsInline
				preload="auto"
				poster="/img/hero-poster.jpg"
			>
				<source
					src="/videos/video.mp4"
					type="video/mp4"
				/>
			</video>

			<div className="absolute inset-0 bg-black/50" />

			<div className="relative z-10 h-full flex items-center justify-center">
				<div
					className="text-center px-4 container mx-auto"
					style={{ animation: "fadeInUp 0.7s ease both" }}
				>
					<h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight mb-6 tracking-tight">
						The Last Tech Partner
						<br />
						<span className="text-gold-light">You'll Ever Need.</span>
					</h1>
					<p className="text-lg text-white/80 leading-relaxed mb-10 font-light tracking-wide max-w-xl mx-auto">
						From your first website to a full enterprise platform — we build,
						scale, and manage the technology your business runs on. One team,
						one relationship, no limits.
					</p>
					<button
						data-cal-namespace="30min"
						data-cal-link="codeanew/30min"
						data-cal-config='{"layout":"month_view","theme":"light"}'
						className="btn-theme text-base px-10 py-4 rounded-lg text-[15px]"
					>
						Book a Call
					</button>
				</div>
			</div>

			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-70">
				<span className="text-white text-xs uppercase tracking-widest">
					Scroll
				</span>
				<div className="w-px h-8 bg-white/60 animate-bounce" />
			</div>
		</section>
	);
};

export default HeroBanner;
