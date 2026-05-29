import React from 'react';
import { Link } from 'react-router';
import { steps } from '../constants/process';
import SEO from '../components/SEO';
import { pageSEO } from '../constants/seo';

const OurProcess = () => (
  <>
    <SEO
      title={pageSEO.ourProcess.title}
      description={pageSEO.ourProcess.description}
      canonicalUrl="/our-process"
    />
    <section className="py-20 bg-bg-light">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-gold">How We Work</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-heading mt-2">
            Four clear steps from first conversation<br className="hidden sm:block" /> to long-term partnership.
          </h2>
        </div>

        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />

            <div className="flex flex-col gap-12">
              {steps.map((step, i) => {
                const isOdd = i % 2 === 0;
                return (
                  <div key={step.title} className="relative flex items-center">
                    <div className="w-5/12 pr-12 flex justify-end">
                      {isOdd ? (
                        <div className="bg-white rounded-xl shadow-card p-6 w-full max-w-sm">
                          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-50 text-gold mb-3 inline-block">
                            {step.tag}
                          </span>
                          <h3 className="text-lg font-bold text-heading mb-2">{step.title}</h3>
                          <p className="text-sm text-muted leading-relaxed m-0">{step.desc}</p>
                        </div>
                      ) : null}
                    </div>

                    <div className="w-2/12 flex justify-center">
                      <div className="w-12 h-12 rounded-full bg-gold text-white font-bold text-xl flex items-center justify-center z-10 shrink-0 shadow-md">
                        {i + 1}
                      </div>
                    </div>

                    <div className="w-5/12 pl-12 flex justify-start">
                      {!isOdd ? (
                        <div className="bg-white rounded-xl shadow-card p-6 w-full max-w-sm">
                          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-50 text-gold mb-3 inline-block">
                            {step.tag}
                          </span>
                          <h3 className="text-lg font-bold text-heading mb-2">{step.title}</h3>
                          <p className="text-sm text-muted leading-relaxed m-0">{step.desc}</p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="lg:hidden">
          <div className="relative pl-8">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />

            <div className="flex flex-col gap-8">
              {steps.map((step, i) => (
                <div key={step.title} className="relative">
                  <div className="absolute -left-8 top-0 w-10 h-10 rounded-full bg-gold text-white font-bold text-base flex items-center justify-center z-10 shrink-0 shadow-md -translate-x-1/2">
                    {i + 1}
                  </div>

                  <div className="bg-white rounded-xl shadow-card p-5 ml-4">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-50 text-gold mb-3 inline-block">
                      {step.tag}
                    </span>
                    <h3 className="text-base font-bold text-heading mb-2">{step.title}</h3>
                    <p className="text-sm text-muted leading-relaxed m-0">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>

    <section className="bg-navy py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Ready to get started?</h2>
        <p className="text-slate mb-8 text-base">
          Book a free call and we'll map out exactly what you need.
        </p>
        <Link to="/contact-us" className="btn-theme">Book a Free Call</Link>
      </div>
    </section>
  </>
);

export default OurProcess;
