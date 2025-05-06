
import { Facebook, Instagram, Linkedin, Mail, Phone, Video } from "lucide-react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle 
} from "@/components/ui/dialog";

const Index = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const blogPosts = [
    {
      title: "My Journey Through Tech: A Visual Story",
      excerpt: "A collection of motivational quotes and personal insights from my journey in technology, reflecting my approach to problem-solving and growth in the IT industry. Throughout my career, I've found that resilience and adaptability are key components of success. Technology is ever-evolving, and staying ahead means embracing continuous learning and being open to new methodologies. As I progress in my IT support career, I've developed a unique perspective that combines technical precision with empathetic communication, ensuring that clients not only get their problems solved but also understand the solutions provided. This approach has proven invaluable in building long-term relationships with clients who appreciate both competence and clarity.",
      date: "2025-04-28",
      image: "/lovable-uploads/33bb35d3-b23a-4d89-a93c-6422a905ee8c.png"
    },
    {
      title: "The Future of IT Support: A Personal Perspective",
      excerpt: "Exploring how modern IT support is evolving with technology and the increasing importance of personal connection in technical assistance. As automation and AI transform the industry, the human element becomes increasingly valuable. While many routine tasks can be handled by automated systems, complex problem-solving and understanding client needs still requires the human touch. I believe the most successful IT professionals will be those who can bridge technical expertise with effective communication skills. Additionally, as remote work becomes more prevalent, the ability to provide clear, concise support through various digital channels has become essential. Maintaining a personal connection while delivering technical assistance remotely presents new challenges that require innovative solutions.",
      date: "2025-04-28",
      image: "/lovable-uploads/3b8a96f6-6dca-4512-b15a-b62e277b11b5.png"
    },
    {
      title: "Balancing Technical Expertise and Client Communication",
      excerpt: "One of the greatest challenges in IT support is finding the perfect balance between technical knowledge and effective communication. In my experience, even the most brilliant technical solutions can fall flat if they cannot be clearly communicated to clients with varying levels of technical understanding. I've developed strategies to explain complex concepts in accessible ways without sacrificing accuracy or making clients feel overwhelmed. This approach not only solves immediate technical problems but also empowers clients to better understand their systems, potentially preventing future issues. As technology becomes increasingly integrated into every aspect of business operations, this skill becomes even more crucial for IT professionals who want to make a meaningful impact.",
      date: "2025-04-15",
      image: "/lovable-uploads/0807ad2c-49ab-494d-8783-a845de31d0b6.png"
    }
  ];

  const certificates = [
    {
      id: 1,
      title: "Developing Designs for Print Media",
      image: "/lovable-uploads/567a6fe2-9f02-4903-a438-d6485e377dac.png",
      description: "This certification validates my skills in creating effective print media designs, including layout design, typography, and color theory for various printed materials."
    },
    {
      id: 2,
      title: "Introduction to Visual Graphic Design",
      image: "/lovable-uploads/3b8a96f6-6dca-4512-b15a-b62e277b11b5.png",
      description: "This certification covers the fundamentals of visual design principles, including composition, balance, contrast, and visual hierarchy in graphic design projects."
    },
    {
      id: 3,
      title: "Developing Designs for a Logo",
      image: "/lovable-uploads/ae99611d-bfdd-486b-90d7-9b41625453a9.png",
      description: "This specialized certification focuses on logo design principles, brand identity development, and creating memorable and effective visual identifiers for businesses."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      content: "Thea's IT support was exceptional. She didn't just fix our technical issues, but took the time to understand our company's specific needs and provided tailored solutions that improved our overall workflow.",
      image: "/lovable-uploads/de977a9a-321b-4ddc-a66f-1b976bce9561.png"
    },
    {
      name: "Michael Rodriguez",
      role: "Small Business Owner",
      content: "Working with Thea was a breath of fresh air. Her patience in explaining complex technical concepts in simple terms made our technology transition smooth and stress-free.",
      image: "/lovable-uploads/aed9ea82-3130-4884-aa0d-38f9d6f724ae.png"
    },
    {
      name: "Priya Patel",
      role: "HR Specialist",
      content: "Thea's proactive approach to IT support helped us prevent potential problems before they affected our operations. Her dedication to continuous learning ensures she's always offering the most current solutions.",
      image: "/lovable-uploads/image_2025-03-19_16-14-34.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-helvetica">
      <Header />
      <Hero />

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center font-signika">About Me</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-700 font-helvetica space-y-4">
            <p>
              As an IT Support Specialist, it is in my capacity and willingness to fully understand each of my client's unique needs by asking the right questions. We wanted the best overall quality experience by observing what the client needs, catering, and addressing every concern, with their information handled securely and with the utmost care. This approach I am proud of, ensures that solutions are not only effective and reliable, but also tailored to deliver peace of mind and confidence in every interaction.
            </p>
            <p>
              What varies us from every other IT Support Specialist is we are aspired and dedicated to learn and grow alongside our clients as we progress into the IT Industry. One distinct feature that I am looking forward with my duty is the connection that I can build with each client. Their satisfaction with my work would be a reflection of my progression and commitment to staying ahead in this evolving world of technology.
            </p>
            <div className="flex flex-col space-y-2 mt-6">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <span>09216850223</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span>theaannemae.mallare@neu.edu.ph</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Resume Section */}
      <section id="video-resume" className="section-padding bg-gradient-to-b from-[#F0F1CA] to-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center font-signika">Video Resume</h2>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/PvIJS1rrU34"
                title="Video Resume"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[400px] rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center font-signika">Blog</h2>
          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {blogPosts.map((post) => (
              <Card key={post.title} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 flex-shrink-0">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6 flex-1">
                      <h3 className="text-xl font-semibold mb-2 font-quicksand">{post.title}</h3>
                      <p className="text-gray-600 mb-4 font-helvetica">{post.excerpt}</p>
                      <p className="text-sm text-gray-500 font-quicksand">{post.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center font-signika">Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold font-quicksand">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic font-helvetica">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="section-padding bg-gradient-to-b from-[#144198] to-[#61479B]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Certificates</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all transform hover:scale-105"
                onClick={() => setSelectedCertificate(cert)}
              >
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-auto"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-center font-quicksand">{cert.title}</h3>
                  <p className="text-sm text-gray-500 text-center">Click to view details</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* H5P Content Section */}
      <section id="h5p" className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center font-signika">Interactive Content</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://thea-portfolio.h5p.com/content/1292577854245907408/embed" 
                aria-label="Checking Up!" 
                width="100%" 
                height="637" 
                frameBorder="0" 
                allowFullScreen 
                allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://thea-portfolio.h5p.com/content/1292577842197727738/embed" 
                aria-label="What I Do When I'm Feeling Overwhelmed Doing a Project" 
                width="100%" 
                height="637" 
                frameBorder="0" 
                allowFullScreen 
                allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-accent">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">Contact Me</h2>
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="lg" asChild className="text-primary hover:text-secondary">
              <a href="mailto:theaannemae.mallare@neu.edu.ph" target="_blank" rel="noopener noreferrer">
                <Mail className="h-10 w-10" />
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild className="text-primary hover:text-secondary">
              <a href="https://www.linkedin.com/in/thea-anne-mae-mallare-a579002a4/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-10 w-10" />
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild className="text-primary hover:text-secondary">
              <a href="https://www.instagram.com/theaxmllr/" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-10 w-10" />
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild className="text-primary hover:text-secondary">
              <a href="https://www.facebook.com/myname.is.theaa" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-10 w-10" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Certificate Dialog */}
      {selectedCertificate && (
        <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>{selectedCertificate.title}</DialogTitle>
            </DialogHeader>
            <div className="p-4">
              <img 
                src={selectedCertificate.image} 
                alt={selectedCertificate.title} 
                className="w-full h-auto mb-4 rounded-lg"
              />
              <DialogDescription>
                {selectedCertificate.description}
              </DialogDescription>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Index;
