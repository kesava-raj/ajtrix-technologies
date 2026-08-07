import React from "react";
import { TestimonialCarousel } from "./ui/profile-card-testimonial-carousel";

const TeamSection: React.FC = () => {
  return (
    <section className="team-section" id="team">
      <div className="section-header">
        <h2 className="section-title">Our Team</h2>
        <p className="section-subtitle">Meet the brilliant minds behind our success.</p>
      </div>
      <div style={{ width: '100%' }}>
        <TestimonialCarousel />
      </div>
    </section>
  );
}

export default TeamSection;
