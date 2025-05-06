
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
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
      title: "Living the IT Student Life in the New Era",
      excerpt: "Being an IT student today is nothing like it was a decade ago. In this digital-first age, we're not just studying technology; we're immersed in it. Every day in college feels like a hands-on workshop. It prepares us for a future that's already arriving. From cloud computing labs to virtual simulations, the tools we use reflect real-world IT environments. Our assignments often look more like freelance gigs: configuring networks, building websites, deploying apps, rather than traditional homework. With AI, cybersecurity, and remote systems growing fast, our courses adapt quickly to what's happening in the tech industry. Being a student now also means learning how to filter information, manage digital overload, and find focus in an endless stream of online tools. The pressure to keep up is real. Still, the excitement of working with emerging tech, experimenting with code, and seeing real results from what we learn is what keeps most of us going. College today is more than just a degree. It's a launchpad. It's where late nights debugging code and collaborating over Discord become part of the process. It's where IT becomes more than a subject. It becomes a mindset. I wouldn't trade that experience for anything.",
      date: "2025-04-02",
      image: "/lovable-uploads/6be9b905-7388-4bde-aabb-d22bf10a88e9.png"
    },
    {
      title: "From Newscaster Dreams to Building a Future in IT",
      excerpt: "Growing up, I had one dream: to be a newscaster. I loved the spotlight, the storytelling, and the power of voice and presence. I imagined myself delivering the news, connecting with people, and shaping how they saw the world. But somewhere along the way, that dream started to shift. It began with small things. Helping classmates fix their computers, exploring tech forums, getting curious about how websites worked. I slowly realized I was more excited about learning how data moves through networks than preparing news scripts. The big moment came when I saw how technology could make just as much of an impact. It wasn’t just behind the scenes anymore. Tech was shaping the world. I found I could still connect with people and tell stories, but in a different way. I could solve problems, build systems, and help others navigate the digital space. So I changed direction, enrolled in an IT program, and started building a new kind of future. My early dream taught me how to communicate and stay composed under pressure. That still helps me today. Now, I’m writing a different story. One made of code, systems, and purpose.",
      date: "2025-05-05",
      image: "/lovable-uploads/5b2ec8fe-cc3a-4419-ba9f-30d3b78b7a1f.png"
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
<section id="blog" className="section-padding bg-gradient-to-b from-white to-[#61479B]">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-center font-signika text-black">Blog</h2>
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
<section id="testimonials" className="section-padding bg-white"> {/* Changed to a solid white background */}
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold mb-12 text-center font-signika text-black">Testimonials</h2> {/* Changed text color to black for better contrast */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="flex justify-center">
        <img 
          src="/lovable-uploads/56bef384-d05a-449f-ad13-7645566ecc39.png" 
          alt="Testimonial 1" 
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <div className="flex justify-center">
        <img 
          src="/lovable-uploads/1e649dcb-14f3-4b19-bfe7-89f93e2bc270.png" 
          alt="Testimonial 2" 
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <div className="flex justify-center">
        <img 
          src="/lovable-uploads/4d866b8f-2919-4cdc-80ce-91b113bf599a.png" 
          alt="Testimonial 3" 
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <div className="flex justify-center">
        <img 
          src="/lovable-uploads/45110632-0f35-4083-bb83-16497e111dca.png" 
          alt="Testimonial 4" 
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
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
      <div className="max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold mb-4 text-center">What I Do When I'm Feeling Overwhelmed Doing a Project</h3>
        <div className="aspect-w-16 aspect-h-9">
          <iframe 
            src="https://thea-portfolio.h5p.com/content/1292577842197727738/embed" 
            aria-label="What I Do When I'm Feeling Overwhelmed Doing a Project" 
            width="100%" 
            height="230" 
            frameBorder="0" 
            allowFullScreen 
            allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
      <div>
        <div className="aspect-w-16 aspect-h-9">
          <iframe 
            src="https://thea-portfolio.h5p.com/content/1292579864067651148/embed" 
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
  </div>
</section>


{/* Contact Section */}
<section id="contact" className="section-padding bg-accent">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-center text-primary">Contact Me</h2>
    <div className="flex justify-center space-x-8"> {/* Increased space between buttons */}
      <Button variant="ghost" size="lg" asChild className="text-primary hover:text-secondary">
        <a href="mailto:theaannemae.mallare@neu.edu.ph" target="_blank" rel="noopener noreferrer">
          <Mail className="h-20 w-20" /> {/* Increased icon size */}
        </a>
      </Button>
      <Button variant="ghost" size="lg" asChild className="text-primary hover:text-secondary">
        <a href="https://www.linkedin.com/in/thea-anne-mae-mallare-a579002a4/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="h-20 w-20" /> {/* Increased icon size */}
        </a>
      </Button>
      <Button variant="ghost" size="lg" asChild className="text-primary hover:text-secondary">
        <a href="https://www.instagram.com/theaxmllr/" target="_blank" rel="noopener noreferrer">
          <Instagram className="h-20 w-20" /> {/* Increased icon size */}
        </a>
      </Button>
      <Button variant="ghost" size="lg" asChild className="text-primary hover:text-secondary">
        <a href="https://www.facebook.com/myname.is.theaa" target="_blank" rel="noopener noreferrer">
          <Facebook className="h-20 w-20" /> {/* Increased icon size */}
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
