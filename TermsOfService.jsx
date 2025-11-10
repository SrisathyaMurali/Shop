import React from "react";

export default function TermsOfService() {
  return (
    <div className="bg-[#fffaf6] min-h-screen py-16 px-8 md:px-24 text-gray-800 font-poppins">
      <h1 className="text-4xl font-bold text-center mb-10">
        Terms of Service
      </h1>

      <div className="max-w-4xl mx-auto space-y-6 leading-relaxed text-[17px]">
        <p>
          Welcome to <strong>Annapoorna Mithai</strong>. By accessing our
          website or purchasing our products, you agree to be bound by these
          Terms of Service.
        </p>

        <h2 className="text-2xl font-semibold mt-8">1. Use of Website</h2>
        <p>
          You agree not to use this website for any unlawful purpose or in any
          way that may harm the website, its users, or our reputation.
        </p>

        <h2 className="text-2xl font-semibold mt-8">2. Orders & Payments</h2>
        <p>
          All orders are subject to availability and confirmation of payment.
          Prices for our products are subject to change without notice.
        </p>

        <h2 className="text-2xl font-semibold mt-8">3. Delivery</h2>
        <p>
          We aim to dispatch all orders promptly. Delivery times may vary based
          on your location and product availability.
        </p>

        <h2 className="text-2xl font-semibold mt-8">4. Returns & Refunds</h2>
        <p>
          Due to the perishable nature of sweets, we do not accept returns.
          However, if you receive a damaged product, please contact us within 24
          hours of delivery.
        </p>

        <h2 className="text-2xl font-semibold mt-8">5. Limitation of Liability</h2>
        <p>
          Annapoorna Mithai shall not be liable for any indirect, incidental, or
          consequential damages arising from the use of our products or
          services.
        </p>

        <h2 className="text-2xl font-semibold mt-8">6. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms of Service at any time. The
          latest version will always be posted on this page.
        </p>

        <p className="mt-8">
          If you have any questions about these Terms, please contact us at{" "}
          <a
            href="mailto:support@annapoornamithai.com"
            className="text-yellow-700 underline"
          >
            support@annapoornamithai.com
          </a>.
        </p>
      </div>
    </div>
  );
}
