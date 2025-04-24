
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

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
      title: "The Future of Web Development",
      excerpt: "Exploring upcoming trends in web development and their impact...",
      date: "2024-04-20",
    },
    {
      title: "Understanding Modern JavaScript",
      excerpt: "A deep dive into the latest JavaScript features and best practices...",
      date: "2024-04-15",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-700">
            <p>
              I am a passionate web developer with expertise in modern technologies.
              My journey in IT has equipped me with strong problem-solving skills
              and a deep understanding of web development principles.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Blog</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {blogPosts.map((post) => (
              <Card key={post.title}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <p className="text-sm text-gray-500">{post.date}</p>
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
          <div className="max-w-3xl mx-auto aspect-video bg-gray-200 rounded-lg">
            {/* Add your video embed code here */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-600">Video Resume Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Certificates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add your certificates here */}
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Certificate 1</p>
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Certificate 2</p>
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Certificate 3</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
          <Carousel className="max-w-xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <p className="text-lg mb-4">"{testimonial.content}"</p>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
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
            {/* Add your H5P embed code here */}
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
