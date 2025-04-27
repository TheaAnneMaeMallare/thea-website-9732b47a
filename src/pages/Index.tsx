import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Project Manager",
      content: "Thea is an exceptional developer with great attention to detail.",
    },
    {
      name: "Jane Smith",
      role: "Tech Lead",
      content: "Working with Thea was a pleasure. Her technical skills are outstanding.",
    },
    {
      name: "Mike Johnson",
      role: "Senior Developer",
      content: "Thea's problem-solving abilities and dedication to quality are remarkable.",
    },
  ];

  const blogPosts = [
    {
      title: "Building Connections through IT Support",
      excerpt: "Sharing my journey and thoughts on how real client connections fuel better IT solutions...",
      date: "2024-04-20",
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
              As an IT Support Specialist, it is in my capacity and willingness to fully understand each of my client’s unique needs by asking the right questions. We wanted the best overall quality experience by observing what the client needs, catering, and addressing every concern, with their information handled securely and with the utmost care. This approach I am proud of, ensures that solutions are not only effective and reliable, but also tailored to deliver peace of mind and confidence in every interaction.
            </p>
            <p>
              What varies us from every other IT Support Specialist is we are aspired and dedicated to learn and grow alongside our clients as we progress into the IT Industry. One distinct feature that I am looking forward with my duty is the connection that I can build with each client. Their satisfaction with my work would be a reflection of my progression and commitment to staying ahead in this evolving world of technology.
            </p>
            <p>Contact: 09216850223</p>
            <p>Email: theaannemae.mallare@neu.edu.ph</p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center font-signika">Blog</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {blogPosts.map((post) => (
              <Card key={post.title}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 font-quicksand">{post.title}</h3>
                  <p className="text-gray-600 mb-4 font-helvetica">{post.excerpt}</p>
                  <p className="text-sm text-gray-500 font-quicksand">{post.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Resume Section */}
      <section id="video" className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Video Resume</h2>
          <div className="max-w-3xl mx-auto aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/placeholder"
              title="Video Resume"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Certificates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <img 
              src="/lovable-uploads/image_2025-03-19_16-14-34.png" 
              alt="Developing Designs for a Logo" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <img 
              src="/lovable-uploads/image_2025-03-19_16-17-09.png" 
              alt="Introduction to Visual Graphic Design" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <img 
              src="/lovable-uploads/image_2025-03-24_02-02-32.png" 
              alt="Developing Designs for Print Media" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
            </div>
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

      {/* H5P Content Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Interactive Content</h2>
          <div className="max-w-3xl mx-auto aspect-video bg-gray-200 rounded-lg">
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-600">H5P Content Coming Soon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
