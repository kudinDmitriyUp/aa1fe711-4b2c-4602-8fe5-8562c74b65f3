"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardFour from '@/components/sections/feature/FeatureCardFour';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, BarChart3, HelpCircle, MessageCircle, PenTool, Palette, Rocket, Shield, Sparkles, Target, TrendingUp, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="large"
      sizing="medium"
      background="grid"
      cardStyle="layered-gradient"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="RedBlack Agency"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Marketing That Drives Results"
          description="We create powerful marketing campaigns that amplify your brand and accelerate growth through data-driven strategies"
          tag="Premium Agency"
          tagIcon={Sparkles}
          buttons={[
            {
              text: "Start Your Campaign",
              href: "contact"
            },
            {
              text: "View Our Work",
              href: "about"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1763140465673-p1ptzyxw.jpg"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Why Choose Us"
          description="At RedBlack Agency, we combine creative excellence with strategic thinking to deliver marketing solutions that don't just look good — they drive measurable business growth. Our data-driven approach ensures every campaign delivers maximum ROI."
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardFour
          title="Our Core Services"
          description="Comprehensive marketing solutions designed to accelerate your business growth"
          tag="Services"
          tagIcon={Target}
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              title: "Digital Strategy",
              description: "Data-driven digital marketing strategies that maximize your online presence and drive qualified leads to your business",
              icon: TrendingUp
            },
            {
              title: "Brand Development",
              description: "Complete brand identity creation and management that establishes your unique market position and builds lasting customer relationships",
              icon: Palette
            },
            {
              title: "Content Marketing",
              description: "Engaging content creation across all platforms that tells your story, educates your audience, and converts prospects into customers",
              icon: PenTool
            },
            {
              title: "Performance Analytics",
              description: "Advanced tracking and reporting systems that provide actionable insights to continuously optimize your marketing performance",
              icon: BarChart3
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardTwo
          title="Proven Track Record"
          description="Numbers that speak to our expertise and commitment to client success"
          tag="Results"
          tagIcon={Award}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="blur-reveal"
          metrics={[
            {
              id: "1",
              value: "500+",
              description: "Successful Campaigns Delivered"
            },
            {
              id: "2",
              value: "250%",
              description: "Average ROI Increase"
            },
            {
              id: "3",
              value: "98%",
              description: "Client Retention Rate"
            },
            {
              id: "4",
              value: "50+",
              description: "Industry Awards Won"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Expert Team"
          description="Creative minds and strategic thinkers working together to drive your success"
          tag="Team"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="scale-rotate"
          members={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Creative Director",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1763140470905-fsrchc4o.jpg",
              imageAlt: "Sarah Mitchell Creative Director"
            },
            {
              id: "2",
              name: "Marcus Chen",
              role: "Strategy Lead",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1763140471547-2ssp2j03.jpg",
              imageAlt: "Marcus Chen Strategy Lead"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Analytics Expert",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1763140472487-gompbtsq.jpg",
              imageAlt: "Emma Rodriguez Analytics Expert"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Our Clients Say"
          description="Real feedback from businesses we've helped transform their marketing"
          tag="Testimonials"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="opacity"
          testimonials={[
            {
              id: "1",
              name: "Jennifer Adams",
              role: "CEO, TechStart Solutions",
              testimonial: "RedBlack Agency transformed our digital presence completely. Their strategic approach increased our lead generation by 300% in just six months.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1763140472949-g0taoskg.jpg",
              imageAlt: "Jennifer Adams CEO"
            },
            {
              id: "2",
              name: "David Park",
              role: "Founder, GrowthCorp",
              testimonial: "The team's creative vision and data-driven execution exceeded all our expectations. Our brand recognition has never been stronger.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1763140473663-nxodyfoe.jpg",
              imageAlt: "David Park Founder"
            },
            {
              id: "3",
              name: "Lisa Thompson",
              role: "Marketing Director, Innovate Inc",
              testimonial: "Working with RedBlack was a game-changer. Their comprehensive approach to marketing helped us achieve our annual goals in just 8 months.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1763140474330-cdsegywi.jpg",
              imageAlt: "Lisa Thompson Marketing Director"
            },
            {
              id: "4",
              name: "Robert Kim",
              role: "CMO, NextGen Enterprises",
              testimonial: "Professional, results-driven, and incredibly creative. RedBlack Agency delivered campaigns that drove real business impact.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1763140475061-5gmzqv6c.jpg",
              imageAlt: "Robert Kim CMO"
            },
            {
              id: "5",
              name: "Maria Gonzalez",
              role: "VP Marketing, FutureScale",
              testimonial: "The ROI we achieved through their campaigns was unprecedented. RedBlack truly understands how to drive measurable results.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1763140475633-a2m17o5n.jpg",
              imageAlt: "Maria Gonzalez VP Marketing"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Join top companies who trust us with their marketing success"
          tag="Partners"
          tagIcon={Shield}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1763140476404-jh45ileg.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1763140476969-d6x43gu9.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1763140477965-e7xnql3n.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1763140478453-4nhksv1r.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1763140479337-irpo439q.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1763140479822-sd9rxfy5.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1763140480541-b3dw4x88.jpg"
          ]
          speed={35}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Get answers to common questions about our marketing services and process"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What makes your marketing agency different?",
              content: "We combine creative excellence with data-driven strategies to deliver measurable results. Our team focuses on ROI and long-term growth rather than just vanity metrics."
            },
            {
              id: "2",
              title: "How do you measure campaign success?",
              content: "We track key performance indicators including conversion rates, lead quality, customer acquisition cost, and return on investment. You'll receive detailed monthly reports with actionable insights."
            },
            {
              id: "3",
              title: "What industries do you work with?",
              content: "We have experience across various industries including technology, healthcare, e-commerce, professional services, and B2B companies. Our strategies are tailored to each industry's unique challenges."
            },
            {
              id: "4",
              title: "How long does it take to see results?",
              content: "While some tactics show immediate results, comprehensive marketing strategies typically show significant impact within 3-6 months. We provide regular updates and optimize campaigns continuously."
            },
            {
              id: "5",
              title: "Do you offer customized marketing packages?",
              content: "Yes, we create tailored marketing solutions based on your specific goals, budget, and timeline. Every client receives a customized strategy designed for their unique business needs."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Ready to Grow?"
          title="Let's Build Something Amazing Together"
          description="Get in touch with our team to discuss how we can accelerate your business growth through strategic marketing."
          tagIcon={Rocket}
          inputPlaceholder="Enter your business email"
          buttonText="Start Your Project"
          termsText="By clicking Start Your Project you're confirming that you agree to discuss your marketing needs with our team."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="RedBlack Agency"
          copyrightText="© 2025 | RedBlack Agency"
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "Digital Strategy",
                  href: "feature"
                },
                {
                  label: "Brand Development",
                  href: "feature"
                },
                {
                  label: "Content Marketing",
                  href: "feature"
                },
                {
                  label: "Performance Analytics",
                  href: "feature"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Team",
                  href: "team"
                },
                {
                  label: "Case Studies",
                  href: "testimonial"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              title: "Resources",
              items: [
                {
                  label: "Marketing Blog",
                  href: "https://blog.redblackagency.com"
                },
                {
                  label: "Strategy Guides",
                  href: "https://guides.redblackagency.com"
                },
                {
                  label: "Industry Reports",
                  href: "https://reports.redblackagency.com"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}