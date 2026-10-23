import React from "react";
import { profile } from "@/data/site";

/**
 * "What is included" for a specimen that is also an offer.
 *
 * Built from the page's existing vocabulary: the `.spec-rail` ruled list, mono
 * labels, the 8/4 column split the specimen already uses, and `.btn`. It adds
 * no colour, no card and no price: none exists to state. The block sits under
 * the specimen's description/rail row, so the reader meets the project as
 * evidence first and as an offer second.
 */

/** A ruled term/description list. Rows are `{ term, body }`. */
function OfferList({ label, rows }) {
  return (
    <div>
      <h5 className="mono t-muted">{label}</h5>
      {/* From xl the term sits beside its description, which roughly halves the
          list's height: the whole offer then fits one screen. */}
      <dl className="spec-rail mt-3">
        {rows.map((row) => (
          <div key={row.term} className="xl:grid xl:grid-cols-[9rem_minmax(0,1fr)] xl:gap-x-5">
            <dt className="font-semibold" style={{ color: "var(--t-text)" }}>
              {row.term}
            </dt>
            <dd className="t-muted mt-1 text-sm xl:mt-0" style={{ maxWidth: "58ch", lineHeight: 1.45 }}>
              {row.body}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function Offer({ offer }) {
  const enquiryHref = `mailto:${profile.email}?subject=${encodeURIComponent(offer.subject)}`;
  // Quality is a fact about the build rather than a feature, so it closes the
  // owner's list instead of adding a third block. This also evens out the two
  // columns (seven shopper rows against five owner rows).
  const ownerRows = [...offer.owner, { term: offer.qualityLabel, body: offer.quality }];

  return (
    <div className="reveal" style={{ "--i": 1 }}>
      <div className="hairline pt-6">
        <h4 className="mono t-muted">{offer.label}</h4>
      </div>

      <div
        className="grid gap-x-12 gap-y-8 lg:grid-cols-12"
        style={{ marginTop: "clamp(1rem, 3svh, 2rem)" }}
      >
        <div className="lg:col-span-6">
          <OfferList label={offer.shoppersLabel} rows={offer.shoppers} />
        </div>
        <div className="lg:col-span-6">
          <OfferList label={offer.ownerLabel} rows={ownerRows} />
        </div>
      </div>

      <div
        className="grid items-end gap-x-12 gap-y-8 lg:grid-cols-12"
        style={{ marginTop: "clamp(1.25rem, 4svh, 3.5rem)" }}
      >
        <p className="text-lg lg:col-span-7" style={{ maxWidth: "46ch" }}>
          {offer.change}
        </p>
        <div className="lg:col-span-4 lg:col-start-9">
          <a href={enquiryHref} className="btn w-full justify-center">
            <span>{offer.cta}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
