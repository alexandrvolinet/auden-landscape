import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-warm-beige">
      <Helmet>
        <title>Terms & Conditions — Auden Landscape Architecture</title>
        <meta
          name="description"
          content="Auden Landscape Architecture terms and conditions governing design consultation, intellectual property, payment terms, and project engagement."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="mx-auto max-w-3xl px-6 md:px-12 py-24 md:py-32">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-golden-brown hover:text-darker-brown text-sm font-semibold transition-colors mb-12"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Studio
        </Link>

        <h1 className="font-serif text-4xl md:text-5xl font-bold text-dark-brown mb-8">
          Terms & Conditions
        </h1>

        <div className="space-y-8 text-sm md:text-base text-warm-brown leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-dark-brown">1. Scope of Services</h2>
            <p>
              Auden Landscape Architecture provides design consultation, masterplanning, material
              curation, and installation oversight for residential, commercial, and civic landscape
              projects. Each engagement is governed by a separate service agreement that details the
              specific scope, timeline, and fee structure for the project.
            </p>
            <p>
              All preliminary concepts, renderings, and material boards provided during the
              consultation phase remain the intellectual property of Auden Landscape Architecture
              until a formal service agreement is executed.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-dark-brown">
              2. Intellectual Property
            </h2>
            <p>
              All designs, drawings, specifications, and other materials created by Auden Landscape
              Architecture are protected by copyright and are licensed to the client for the
              specific project only. Reproduction, adaptation, or use of these materials for other
              projects or purposes without prior written consent is prohibited.
            </p>
            <p>
              The client retains ownership of all site photographs, plans, and documentation
              provided to Auden for the purpose of project development.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-dark-brown">
              3. Client Responsibilities
            </h2>
            <p>
              The client agrees to provide accurate information regarding site conditions, property
              boundaries, existing utilities, and any relevant zoning or regulatory requirements.
              Delays resulting from inaccurate or incomplete information may result in adjusted
              timelines and fees.
            </p>
            <p>
              The client is responsible for obtaining any necessary permits or approvals from local
              authorities unless otherwise specified in the service agreement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-dark-brown">4. Payment Terms</h2>
            <p>
              Fees are structured as outlined in the project proposal. A deposit is typically
              required before the commencement of design work, with subsequent payments tied to
              project milestones. Invoices are due within 30 days of receipt. Late payments may
              incur a service charge.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-dark-brown">
              5. Limitation of Liability
            </h2>
            <p>
              Auden Landscape Architecture shall not be held liable for any consequential, indirect,
              or incidental damages arising from the use of our designs or services. Our total
              liability is limited to the fees paid for the specific project phase in which the
              issue arose.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-dark-brown">6. Cancellation Policy</h2>
            <p>
              Either party may terminate the service agreement with 14 days written notice. The
              client is responsible for payment for all work completed up to the date of
              termination, including any non-refundable deposits. Any materials already procured on
              behalf of the client must be reimbursed.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-dark-brown">7. Governing Law</h2>
            <p>
              These terms are governed by the laws of the State of California. Any disputes arising
              from these terms or related service agreements shall be resolved through binding
              arbitration in San Francisco County.
            </p>
          </section>
        </div>

        <p className="mt-16 text-xs text-warm-brown/70">
          Last updated: June 2026. Auden Landscape Architecture, San Francisco, CA.
        </p>
      </div>
    </div>
  );
}
