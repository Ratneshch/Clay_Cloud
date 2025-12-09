// ClayCloudHR.jsx
import Link from "next/link";
import React from "react";

const features = [
  {
    title: "Customizable Payroll Engine",
    description:
      "Tailor payroll policies, salary structures, and benefits to match your organization's unique needs.",
  },
  {
    title: "Agile Compensation Management",
    description:
      "Handle revisions, incentives, and reimbursements in real time with full control.",
  },
  {
    title: "Cost-Friendly & Scalable",
    description:
      "Pay-as-you-grow pricing that keeps payroll efficient and budget-friendly.",
  },
  {
    title: "Error-Free Compliance & Returns",
    description:
      "Automated updates for PF, ESI, TDS, LWF, and more to stay compliant.",
  },
  {
    title: "Unified Experience Dashboard",
    description:
      "One dashboard for payroll, tax, compliance, and workforce visibility.",
  },
];

const challenges = [
  {
    challenge: "Manual payroll errors & delays",
    solution: "Fully automated payroll runs with smart validations.",
  },
  {
    challenge: "Complex tax & compliance updates",
    solution: "Real-time statutory updates with error-free returns.",
  },
  {
    challenge: "High processing costs",
    solution: "Cost-friendly automation that reduces manual operations.",
  },
  {
    challenge: "Lack of visibility & reporting",
    solution: "Custom dashboards and reports for every pay cycle.",
  },
  {
    challenge: "One-size-fits-all payroll tools",
    solution: "Tailored payroll structures for your business and workforce.",
  },
];

const ClayCloudHR = () => {
  return (
    <div className="min-h-screen bg-[#050712] pt-15 text-[#F8F8FA] overflow-x-hidden">
      <main className="mx-auto max-w-8xl px-0 md:px-4 lg:px-0 relative z-10">
        {/* Hero Section - Extended dark background */}
        <section className="relative flex flex-col md:flex-row md:pl-15 sm:gap-15 py-16 lg:py-24 -mt-15 pt-24 lg:pt-32">

          {/* Dark background extending behind navbar */}
          <div className="absolute inset-0 -z-20 bg-[#050712] -mt-15 pt-15 lg:pt-24" />

          <div className="relative z-10 max-w-xl space-y-5 text-center px-5 md:pl-15 lg:text-left">
            <div className="inline-flex items-center gap-5 rounded-full border border-[#3ABEF9]/30 bg-[#0B0E15]/80 px-5 py-2 text-base sm:text-[20px] text-sky-200 shadow-[0_0_25px_rgba(58,190,249,0.5)] backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3ABEF9]" />
              ClayCloudHR - End-to-End Payroll Software
            </div>

            <h1 className="bg-gradient-to-r from-white via-[#E1F5FF] to-[#3ABEF9] bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl lg:text-6xl">
              Simplify Payroll. Amplify Growth.
            </h1>

            <p className="text-base font-medium text-slate-300 sm:text-lg">
              Empower your team with a smarter, faster, and more compliant payroll
              experience.
            </p>

            <p className="text-xs text-slate-400 sm:text-base">
              Managing payroll should not be complex, time-consuming, or error-prone.
              ClayCloudHR brings an end-to-end payroll automation platform that
              ensures accuracy, agility, and compliance, so your HR team can focus on
              people, not paperwork.
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Link href="/pagenotfound" className="group relative inline-flex border-blue-500 items-center justify-center overflow-hidden rounded-full bg-[#0B0E15]/80 cursor-pointer px-7 py-3 text-xs sm:text-base font-semibold text-white shadow-[0_0_40px_rgba(6,15,35,1)]">
                <span className="absolute inset-0 -z-10 bg-gradient-to-r from-[#3ABEF9] via-[#3A6FF8] to-[#20C997] opacity-60 blur-xl transition group-hover:opacity-90" />
                <span className="relative flex items-center gap-2">
                  Get Started
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-white/10 text-[10px]">
                    →
                  </span>
                </span>
              </Link>

              <Link href="/pagenotfound" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3 text-xs sm:text-base cursor-pointer font-semibold text-slate-100 backdrop-blur-xl transition hover:border-[#3ABEF9] hover:text-white">
                Request Demo
              </Link>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-[11px] text-slate-400 lg:justify-start">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Compliance-assured payroll
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                Built for growing businesses
              </span>
            </div>
          </div>

          {/* Hero right side glass panel */}
          <div className="relative md:pl-15 px-5 mt-10 w-full max-w-lg lg:mt-0 lg:w-7/12 xl:w-2/3">
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_60px_rgba(6,15,35,0.9)] backdrop-blur-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-300">Next payroll run</p>
                  <p className="mt-2 text-xl font-semibold text-white">
                    Fully automated
                  </p>
                </div>
                <span className="rounded-full bg-emerald-400/20 px-4 py-2 text-xs font-medium text-emerald-200">
                  99.9% accuracy
                </span>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
                <div className="rounded-2xl bg-[#050712]/60 p-4 shadow-inner shadow-black/40">
                  <p className="text-slate-400">Cycle time</p>
                  <p className="mt-1 text-lg font-semibold text-emerald-300">
                    -40%
                  </p>
                  <p className="mt-1 text-xs text-slate-500">per pay run</p>
                </div>
                <div className="rounded-2xl bg-[#050712]/60 p-4 shadow-inner shadow-black/40">
                  <p className="text-slate-400">Coverage</p>
                  <p className="mt-1 text-lg font-semibold text-sky-300">
                    5+ entities
                  </p>
                  <p className="mt-1 text-xs text-slate-500">multi-location</p>
                </div>
                <div className="rounded-2xl bg-[#050712]/60 p-4 shadow-inner shadow-black/40">
                  <p className="text-slate-400">Compliance</p>
                  <p className="mt-1 text-lg font-semibold text-indigo-300">
                    Auto-sync
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    PF, ESI, TDS, PT
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-gradient-to-r from-[#3ABEF9]/20 via-[#3A6FF8]/20 to-[#20C997]/20 p-6">
                <p className="text-sm text-slate-200">
                  Unified HR & payroll insights
                </p>
                <div className="mt-3 flex items-end gap-3">
                  {[60, 80, 45, 90].map((h, idx) => (
                    <div
                      key={idx}
                      className="flex-1 rounded-full bg-[#050712]"
                    >
                      <div
                        style={{ height: `${h}%` }}
                        className="w-full rounded-full bg-gradient-to-t from-[#3ABEF9] via-[#3A6FF8] to-[#20C997]"
                      />
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-sm text-slate-400">
                  Live visibility into payroll health every cycle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Businesses Choose */}
        <section className="py-16 bg-white px-2">
          <div className="mb-8 max-w-full text-center">
            <p className="text-[23px] uppercase font-syne font-bold text-sky-600">
              Why Businesses Choose ClayCloudHR
            </p>
            <h2 className="mt-2 text-2xl text-black font-semibold sm:text-3xl">
              Built for simplicity, speed, and compliance.
            </h2>
            <p className="mt-3 text-base text-gray-500">
              From startups to enterprises, configure payroll your way while the
              platform handles updates, calculations, and filings in the background.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="group md:w-64 w-100 h-70 rounded-xl border border-blue-400 bg-white p-5 text-center text-sm text-gray-200 shadow-[0_18px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl transition hover:-translate-y-1.5"
              >
                {/* Diamond Icon */}
                <div className="mx-auto w-12 mt-8 sm:mt-0 h-12 mb-4 flex items-center border bg-blue-100 rounded-full justify-center">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                </div>

                <h3 className="text-base sm:text-lg font-semibold text-black">
                  {f.title}
                </h3>
                <p className="mt-3 text-base text-gray-600">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Real-World Problems Table - Dark background */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050712]">
          <div className="mb-8 max-w-4xl mx-auto">
            <p className="text-xl uppercase tracking-[0.3em] text-center font-medium text-sky-400 mb-3">
              Real-World Payroll Problems We Solve
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent leading-tight text-center">
              From messy spreadsheets to confident pay cycles.
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-slate-900/20 shadow-2xl shadow-slate-900/50 backdrop-blur-2xl border-opacity-80 hover:shadow-3xl hover:shadow-sky-500/10 transition-all duration-500 group">
              <div className="overflow-x-auto">
                <table className="min-w-full w-full text-left">
                  <thead className="bg-gradient-to-r from-sky-500/20 to-blue-600/20 backdrop-blur-sm border-b border-white/20">
                    <tr>
                      <th className="px-8 text-center py-6 text-base uppercase tracking-[0.15em] font-semibold text-sky-300">
                        Common Challenge
                      </th>
                      <th className="px-8 py-6 text-base uppercase tracking-[0.15em] font-semibold text-sky-200 text-center">
                        ClayCloudHR Advantage
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {challenges.map((row, idx) => (
                      <tr
                        key={row.challenge}
                        className={`
                          transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm
                          ${idx % 2 === 0 ? 'bg-white/5/50' : 'bg-white/2/50'}
                        `}
                      >
                        <td className="px-8 py-8 align-top text-[17px] text-center font-medium text-white/95 max-w-md group-hover-row:bg-gradient-to-r group-hover-row:from-sky-500/10 group-hover-row:to-blue-600/10 group-hover-row:text-sky-100 transition-all duration-300">
                          {row.challenge}
                        </td>
                        <td className="px-8 py-8 align-top text-[17px]  text-center text-slate-200 max-w-2xl leading-relaxed group-hover-row:bg-gradient-to-r group-hover-row:from-sky-500/10 group-hover-row:to-blue-600/10 group-hover-row:text-sky-50 transition-all duration-300">
                          {row.solution}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Modern gradient footer bar */}
              <div className="h-1 bg-gradient-to-r from-sky-400 via-blue-400 to-purple-500 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </section>

        {/* Built for Growing Businesses */}
        <section className="flex flex-col gap-10 py-16 bg-white lg:flex-row lg:items-center">
          <div className="relative md:pl-10 px-5 w-full lg:w-1/2">
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#050712] via-[#0B0E15] to-[#050712] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.1)] backdrop-blur-xl">
              <div className="flex items-center justify-between text-base text-slate-300">
                <span>Org overview</span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-[10px]">
                  3 entities · 7 locations
                </span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-[11px]">
                <div className="rounded-2xl bg-[#050712]/70 p-3">
                  <p className="text-slate-400 text-base">Headcount</p>
                  <p className="mt-1 text-lg font-semibold text-sky-300">
                    1,280
                  </p>
                  <p className="mt-1 text-[15px] text-slate-500">
                    across teams
                  </p>
                </div>
                <div className="rounded-2xl bg-[#050712]/70 p-3">
                  <p className="text-slate-400 text-base">Payroll cycles</p>
                  <p className="mt-1 text-lg font-semibold text-emerald-300">
                    100%
                  </p>
                  <p className="mt-1 text-[15px] text-slate-500">
                    on-time this year
                  </p>
                </div>
                <div className="rounded-2xl bg-[#050712]/70 p-3">
                  <p className="text-slate-400 text-base">Processing cost</p>
                  <p className="mt-1 text-lg font-semibold text-violet-300">
                    -30%
                  </p>
                  <p className="mt-1 text-[15px] text-slate-500">
                    vs legacy tools
                  </p>
                </div>
              </div>
              <div className="mt-4 rounded-2xl bg-white/5 p-4 text-[15px] text-slate-300">
                Employees self-service portal live with digital payslips, tax
                proofs, and reimbursement visibility in one place.
              </div>
            </div>
          </div>

          <div className="w-full px-8 sm:px-0 lg:w-1/2">
            <p className="text-[20px] uppercase font-bold text-sky-800">
              Built for Growing Businesses
            </p>
            <h2 className="mt-2 text-2xl text-black font-semibold sm:text-3xl">
              Scales from 10 to 10,000 employees without rework.
            </h2>
            <p className="mt-3 text-base font-medium text-slate-700">
              ClayCloudHR evolves with your growth, maintaining smooth payroll
              cycles, transparent communication, and reliable compliance outcomes
              across entities and locations.
            </p>
            <ul className="mt-4 space-y-2 text-base text-slate-600">
              <li>• Configure once, reuse across entities and cost centers.</li>
              <li>• Support for multi-location, multi-paycycle operations.</li>
              <li>• Robust audit trails for every payroll and compliance event.</li>
              <li>• Ready integrations with HRIS, attendance, and finance tools.</li>
            </ul>
          </div>
        </section>

        {/* CTA Footer - Dark background */}
        <section className="mb-10 mt-10 bg-[#050712] rounded-3xl p-1">
          <div className="rounded-3xl bg-linear-to-r from-[#3A6FF8] via-[#3ABEF9] to-[#20C997] p-1">
            <div className="rounded-3xl bg-[#050712] px-6 py-10 text-center sm:px-10 sm:text-left">
              <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                <div>
                  <p className="text-[15px] uppercase tracking-[0.2em] text-sky-200">
                    Get Started Today
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                    Experience smarter payroll automation with ClayCloudHR.
                  </h2>
                  <p className="mt-3 text-base text-sky-100/80">
                    Customized, compliant, and cost-efficient payroll designed for
                    modern workplaces.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-3 text-xs sm:items-end">
                  <Link href="/pagenotfound" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[15px] font-semibold text-[#050712] shadow-[0_15px_35px_rgba(0,0,0,0.6)] transition hover:bg-sky-50">
                    Book a Live Demo
                  </Link>
                  <div className="text-[14px] text-sky-100/80">
                    <p>Contact: sales@claycloud.com</p>
                    <p>Website: www.claycloud.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ClayCloudHR;
