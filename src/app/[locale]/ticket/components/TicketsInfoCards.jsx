"use client";

import QualificationCard from "./QualificationCard";

export default function TicketsInfoCards() {
  const card1 = {
    badge: "/icon1.svg",
    title: "IB Qualification Access",
    description:
      "This category is reserved for Introducing Brokers who have successfully achieved their performance targets.",
    subtitle: "Qualified IBs Receive:",
    items: [
      { icon: "/plane.svg", text: "Luxury airline tickets" },
      { icon: "/car.svg", text: "Airport pick-up & drop-off" },
      { icon: "/building.svg", text: "Premium hotel suite" },
      { icon: "/key.svg", text: "Full access to all event activities" },
    ],
    closing: "An exclusive experience designed to reward excellence.",
  };

  const card2 = {
    badge: "/icon2.svg",
    title: "Paid Ticket Access",
    description:
      "For guests who wish to attend independently, paid ticket options are available.",
    subtitle: "Includes:",
    items: [
      { icon: "/ticket.svg", text: "Luxury airline tickets" },
      { icon: "/airport.svg", text: "Airport pick-up & drop-off" },
      { icon: "/hotel.svg", text: "Premium hotel suite" },
    ],
    closing: "An exclusive experience designed to reward excellence.",
  };

  return (
    <section className="relative">
      <div className="max-w-3xl space-y-4 md:space-y-4">
        <QualificationCard {...card1} />
        <QualificationCard {...card2} />
      </div>
    </section>
  );
}
