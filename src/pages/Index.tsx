
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const blogPosts = [
    {
      title: "My Journey Through Tech: A Visual Story",
      excerpt: "A collection of motivational quotes and personal insights from my journey in technology, reflecting my approach to problem-solving and growth in the IT industry.",
      date: "2024-04-28",
      image: "/lovable-uploads/33bb35d3-b23a-4d89-a93c-6422a905ee8c.png"
    },
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

      {/* Blog Section */}
      <section id="blog" className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center font-signika">Blog</h2>
          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {blogPosts.map((post) => (
              <Card key={post.title} className="overflow-hidden">
                <CardContent className="p-0">
                  <img src={post.image} alt={post.title} className="w-full h-auto" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 font-quicksand">{post.title}</h3>
                    <p className="text-gray-600 mb-4 font-helvetica">{post.excerpt}</p>
                    <p className="text-sm text-gray-500 font-quicksand">{post.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Certificates</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <img 
              src="/lovable-uploads/567a6fe2-9f02-4903-a438-d6485e377dac.png" 
              alt="Developing Designs for Print Media" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <img 
              src="/lovable-uploads/3b8a96f6-6dca-4512-b15a-b62e277b11b5.png" 
              alt="Introduction to Visual Graphic Design" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <img 
              src="/lovable-uploads/ae99611d-bfdd-486b-90d7-9b41625453a9.png" 
              alt="Developing Designs for a Logo" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-accent">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">Contact Me</h2>
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:theaannemae.mallare@neu.edu.ph" target="_blank" rel="noopener noreferrer">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/thea-anne-mae-mallare-a579002a4/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.instagram.com/theaxmllr/" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.facebook.com/myname.is.theaa" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
